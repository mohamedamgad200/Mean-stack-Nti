// import express from "express";
const express = require("express");
const port = 3000;
const app = express();
const homeRouter = require("./homeRouter");
const aboutRouter = require("./aboutRouter");
const productRouter = require("./productRouter");
const cors = require("cors");
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: (req, res, cb) => {
//     cb(null, "uploades");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// app.use((req, res, next) => {
//   next();
//   res.send("<h1>hello from serve 1</h1>");
// });
// app.use((req, res) => {
//   if (req.url === "/home") {
//     res.send("<h1>hello from home</h1>");
//   } else if (req.url === "/about") {
//     res.send("<h1>hello from about</h1>");
//   }
//   res.send("<h1>404 not found</h1>");
// });
// app.use("/",(req, res) => {
//   res.send("<h1>hello from app</h1>");
// });
// app.use("/home", (req, res) => {
//   res.send("<h1>hello from home</h1>");
// });
// app.use("/home", (req, res) => {
//   if (req.method === "Get") {
//     res.send("<h1>hello from home get</h1>");
//   } else if (req.method === "Post") {
//     res.send("<h1>hello from home post</h1>");
//   }
// });
// app.use("/", (req, res) => {
//   res.send("<h1>hello root</h1>");
// });
// app.all("/", (req, res) => {
//   res.send("<h1>hello root</h1>");
// });
// app.use("/home", (req, res) => {
//   res.send("<h1>hello home</h1>");
// });
// app.delete();
// app.put();
const uploade = require("./utili/multerConfig");
app.use(
  cors({
    origin: "http://localhost:4200/",
  })
);
app.use(express.json());
app.use("/uploads", express.static("./uploades"));
app.post("/products", uploade.single("productImage"), (req, res) => {
  const { id, name, description } = req.body;
  const imageFile = req.file.filename;
  const fullPath = `http://localhost:${port}/uploads/${imageFile}`;
  const product = {
    id,
    name,
    description,
    fullPath,
  };
  res.status(201).json(product);
});
// app.use("/home", homeRouter);
// app.use("/about", aboutRouter);
app.use("/product", productRouter);
app.listen(port, () => console.log(`server started at port ${port}`));
