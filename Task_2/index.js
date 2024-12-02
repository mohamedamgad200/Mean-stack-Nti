const express = require("express");
const port = 3000;
const app = express();
const productRouter = require("./productRouter");
app.use(express.json());
app.use("/products", productRouter);
app.listen(port, () => console.log(`server started at port ${port}`));
