import { products } from "../../store/products.store.js";

export const deleteProduct = (req, res) => {
  const { productId } = req.params;

  /* Delete a product by id */
  const index = products.findIndex((product) => product.id == productId);
  if (index == -1) {
    return res.status(404).json({
      error: "Product not found.",
    });
  }

  products.splice(index, 1);
  res.status(200).json({
    message: "Product was removed.",
  });
};
