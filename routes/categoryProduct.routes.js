import express from "express";
import {
    createCategoryProduct,
    getAllCategoryProducts,
    getCategoryProduct,
    updateCategoryProduct,
    deleteCategoryProduct
} from "../controllers/categoryProductController.js";

const router = express.Router();

router.route("/").post(createCategoryProduct).get(getAllCategoryProducts);

router.route("/:id").get(getCategoryProduct).put(updateCategoryProduct).delete(deleteCategoryProduct);

export default router;