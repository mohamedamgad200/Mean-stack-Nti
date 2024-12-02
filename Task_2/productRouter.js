const express = require("express");
const router = express.Router();
const fs = require("fs");
const filePath = "./products.json";
const readProducts = () => JSON.parse(fs.readFileSync(filePath, "utf8"));
const writeProducts = (data) =>
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
router.get("/getproducts", (req, res) => {
  const products = readProducts();
  res.status(200).json(products);
});
console.log(readProducts());
router.post("/addproduct", (req, res) => {
  const product = req.body;
  console.log(req.body);
  const products = readProducts();
  products.push(product);
  writeProducts(products);
  res.status(201).json(product);
});
router.put("/editproduct/:id", (req, res) => {
  let id = parseInt(req.params.id, 10);
  const { name, description, imageUrl } = req.body;
  let products = readProducts();
  products = products.map((product) =>
    product.id === id
      ? {
          id,
          name,
          description,
          imageUrl,
        }
      : product
  );
  console.log(products);
  writeProducts(products);
  res.status(200).json(products);
});
router.delete("/deleteproduct/:id", (req, res) => {
  let id = parseInt(req.params.id, 10); // Convert id to a number
  let products = readProducts();
  products = products.filter((product) => product.id !== id);
  console.log(products);
  writeProducts(products);
  res.status(200).json(products);
});
module.exports = router;
