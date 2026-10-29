import express from "express";

import { deleteProduct } from "../controllers/products/deleteProduct.js";
import { getAllProducts } from "../controllers/products/getAllProducts.js";

const router = express.Router();

// Legge til endepunkter...
router.get("/", getAllProducts);
router.delete("/:productId", deleteProduct);

export default router;
