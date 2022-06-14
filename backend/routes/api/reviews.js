const express = require("express");
const { Review, User } = require("../../db/models");
const { csrfProtection, asyncHandler } = require("../../utils/async");
const { validationResult, check } = require("express-validator");
const { requireAuth } = require("../../utils/auth");
const { handleValidationErrors } = require("../../utils/validation");

const router = express.Router();

const reviewValidators = [
  check("title")
    .exists({ checkFalsy: true })
    .withMessage("Please provide a Title")
    .isLength({ min: 4 })
    .withMessage("Please provide a Title with at least 4 characters")
    .isLength({ max: 255 })
    .withMessage("Title can not be longer than 255 characters"),
  check("review")
    .exists({ checkFalsy: true })
    .withMessage("Please provide description of Product")
    .isLength({ min: 10 })
    .withMessage("Review can not be shorter than 10 characters"),
  handleValidationErrors,
];

// GET all reviews
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const allReviews = await Review.findAll({
      order: [["createdAt", "DESC"]],
    });
    return res.json(allReviews);
  })
);

// POST new review route
router.post(
  "/new",
  csrfProtection,
  reviewValidators,
  requireAuth,
  asyncHandler(async (req, res) => {
    const { title, review, productId } = req.body;
    const userId = req.user.id;
    const newReview = await Review.writeReview({
      userId,
      productId,
      title,
      review,
    });
    const data = newReview.dataValues;
    return res.json({
      data,
      csrfToken: req.csrfToken(),
    });
  })
);

// UPDATE existing review route
router.post("/:id(\\d+)", async (req, res) => {
  const editReview = await Review.findByPk(req.params.id, {
    include: User,
  });

  if (!(req.body.title.length > 1) || !(req.body.review.length > 1)) {
    res.json({ message: "Please provide a valid update" });
  }
  if (editReview) {
    editReview.title = req.body.title;
    editReview.review = req.body.review;
    await editReview.save();
    res.json({ editReview });
  } else {
    res.json({ message: "Could not find Review please try again" });
  }
});

// DELETE existing review route
router.delete(
  "/delete/:id(\\d+)",
  requireAuth,
  csrfProtection,
  asyncHandler(async (req, res) => {
    const reviewId = parseInt(req.params.id, 10);
    const review = await Review.findByPk(reviewId);
    await review.destroy({ where: { id: reviewId } });
    return res.json({ id: reviewId });
  })
);

module.exports = router;
