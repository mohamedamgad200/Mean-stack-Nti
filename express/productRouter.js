const express = require("express");
const router = express.Router();
const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    description:
      "High-quality wireless earbuds with noise-cancellation and long battery life.",
    imageUrl:
      "https://images.unsplash.com/photo-1571091718767-0cbb0a2a93f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 2,
    name: "Smartphone Stand",
    description:
      "Adjustable smartphone stand for desks, perfect for video calls and streaming.",
    imageUrl:
      "https://images.unsplash.com/photo-1587835421400-8d5a62c4e8aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    description:
      "Ergonomic gaming mouse with customizable buttons and RGB lighting.",
    imageUrl:
      "https://images.unsplash.com/photo-1621547328246-f0e4ecf4de02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with excellent sound quality and water resistance.",
    imageUrl:
      "https://images.unsplash.com/photo-1599058917744-bb82697d9341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    id: 5,
    name: "Fitness Tracker",
    description:
      "Smart fitness tracker to monitor your health metrics and daily activity.",
    imageUrl:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];
router.get("/", (req, res) => {
  res.status(200).json(products);
});
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json(products[id]);
});
router.post("/", (req, res) => {
  products.push(req.body);
  console.log(req.body);
  res.status(201).json(products);
});

// router.put("/:id", (req, res) => {
//   const id = parseInt(req.params.id); // Convert id to a number
//   const { name, description, imageUrl } = req.body;

//   const updatedProduct = {
//     id, // Ensure id matches the parameter
//     name,
//     description,
//     imageUrl,
//   };

//   // Update the product in the array
//   products = products.map((product) =>
//     product.id === id ? updatedProduct : product
//   );

//   res.status(200).json(products);
// });

router.delete("/", (req, res) => {});
module.exports = router;
