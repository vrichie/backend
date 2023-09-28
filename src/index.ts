import express from "express";
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
