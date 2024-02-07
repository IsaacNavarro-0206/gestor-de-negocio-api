import express from "express";
import {
    createProduct,
    getAllProducts,
    updateProduct,
    getProduct,
    deleteProduct
} from "../controllers/productController.js";

const router = express.Router();

router.route("/").post(createProduct).get(getAllProducts);

router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);

export default router;