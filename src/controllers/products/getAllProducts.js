import { products } from "../../store/products.store.js";

export const getAllProducts = (req, res) => {
  res.status(200).json({ data: products });
};
