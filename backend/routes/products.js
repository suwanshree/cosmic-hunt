const express = require("express");
// const bcrypt = require("bcryptjs");
const db = require("../db/models");
const { csrfProtection, asyncHandler } = require("../utils/async");
const { validationResult, check } = require("express-validator");
const { requireAuth } = require("../utils/auth");

const router = express.Router();

const productValidators = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Title")
    .isLength({ max: 255 })
    .withMessage("Title can not be longer than 255 characters"),
  check("imageUrl")
    .exists({ checkFalsy: true })
    .withMessage("Please provide an image link")
    .isLength({ max: 255 })
    .withMessage("Image link needs to be fewer than 255 characters"),
  check("description")
    .exists({ checkFalsy: true })
    .withMessage("Please provide description of Product"),
];

// Get all products route
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allProducts = await db.Product.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.json(allProducts); // pass title here if needed later
  })
);

// Delete particular product route
router.get(
  "/delete/:id(\\d+)",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = await db.Product.findByPk(productId);
    await product.destroy();
    res.redirect("/products");
  })
);

// Get particular product route
router.get(
  "/:id(\\d+)",
  //   requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const product = await db.Product.findByPk(productId);
    // , {
    //     include: [
    //       {
    //         model: db.Review,
    //       },
    //       { model: db.User },
    //     ],
    // });
    // let activeUser;
    // if (req.session.auth.userId) {
    //   activeUser = req.session.auth.userId;
    // } else {
    //   activeUser = null;
    // }
    return res.json({
      product,
      csrfToken: req.csrfToken(),
    });
  })
);

// Post new Product route (NEEDS CHECK AND MODAL IN FRONTEND)
router.post(
  "/new",
  csrfProtection,
  productValidators,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { title, imageUrl, description } = req.body;
    const product = db.Product.build({
      title,
      imageUrl,
      description,
      ownerId: req.session.auth.userId,
    });
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      await product.save();
      res.redirect("/products");
    } else {
      const errors = validatorErrors.array().map((error) => error.msg);
      return res.json({
        title,
        errors,
        description,
        csrfToken: req.csrfToken(),
      });
    }
  })
);

// Edit existing Product route (NEEDS CHECK)
router.post(
  "/:id(\\d+)",
  productValidators,
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const productToUpdate = await db.Product.findByPk(productId);
    // , {
    //     include: {
    //       model: db.Review,
    //       include: [
    //         { model: db.User },
    //       ],
    //     },
    // });

    const { title, imageUrl, description, ownerId } = req.body;

    let product = { title, imageUrl, description, ownerId };

    const validatorErrors = validationResult(req);
    if (validatorErrors.isEmpty()) {
      await productToUpdate.update(product);
      res.redirect(`/products/${productId}`);
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
