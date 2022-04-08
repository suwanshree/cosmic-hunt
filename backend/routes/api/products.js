const express = require("express");
const { Product, Review, User } = require("../../db/models");
const { csrfProtection, asyncHandler } = require("../../utils/async");
const { validationResult, check } = require("express-validator");
const { requireAuth } = require("../../utils/auth");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const productValidators = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Title")
    .isLength({ min: 4 })
    .withMessage("Please provide a Title with at least 4 characters")
    .isLength({ max: 255 })
    .withMessage("Title can not be longer than 255 characters"),
  check("imageUrl")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an image link")
    .isLength({ max: 255 })
    .withMessage("Image link needs to be fewer than 255 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please provide description of Product")
    .isLength({ min: 10 })
    .withMessage("Title can not be shorter than 10 characters"),
  handleValidationErrors,
];

// Get all products route
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allProducts = await Product.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.json(allProducts);
  })
);

// Delete particular product route
router.delete(
  "/delete/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = await Product.findByPk(productId);
    await product.destroy({ where: { id: productId } });
    return res.json({ id: productId });
  })
);

// Get particular product route
router.get(
  "/:id(\\d+)",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = await Product.findByPk(productId, {
      include: [
        {
          model: Review,
        },
        { model: User },
      ],
    });
    let activeUser;
    if (req.session.auth.userId) {
      activeUser = req.session.auth.userId;
    } else {
      activeUser = null;
    }
    return res.json({
      product,
      csrfToken: req.csrfToken(),
    });
  })
);

// Post new Product route
router.post(
  "/new",
  csrfProtection,
  productValidators,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { title, imageUrl, description } = req.body;
    const ownerId = req.user.id;
    const product = await Product.writeProduct({
      ownerId,
      title,
      imageUrl,
      description,
    });
    const data = product.dataValues;
    return res.json({
      data,
      csrfToken: req.csrfToken(),
    });
  })
);

// Edit existing Product route
router.post(
  "/:id(\\d+)",
  productValidators,
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productToUpdate = await Product.findByPk(productId, {
      include: {
        model: Review,
        include: [{ model: User }],
      },
    });

    const { title, imageUrl, description, ownerId } = req.body;
    let product = { title, imageUrl, description, ownerId };

    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await productToUpdate.update(product);
      res.redirect(`/api/products`);
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      product = productToUpdate;

      let activeUser;
      if (req.session.auth.userId) {
        activeUser = req.session.auth.userId;
      } else {
        activeUser = null;
      }
      return res.json({
        title,
        errors,
        activeUser,
        description,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

module.exports = router;
