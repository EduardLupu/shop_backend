import express from "express";
import {createReview, deleteReview, getReviewsForProduct} from "../controllers/reviewController";

const reviewRouter = express.Router();

reviewRouter.post('', createReview);
reviewRouter.get('/:id', getReviewsForProduct);
reviewRouter.delete('/:id', deleteReview);

export default reviewRouter;