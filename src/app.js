import "dotenv/config";
import express from "express";
import "./models/Cards.js";

import userRouter from "./routes/userRouter.js";
import cardsRouter from "./routes/cardsRouter.js";
import personRouter from "./routes/personRouter.js";
import productsRouter from "./routes/productsRouter.js";

import sequelize from "./config/database.js";

const app = express();

// Allows Express to read form data from requests
app.use(express.urlencoded({ extended: true }));

// Allows Express to read JSON data from request bodies
app.use(express.json());

// DETTE TESTER KUN OM VI KAN KOBLE OSS TIL. DEN HAR INGEN VIKTIG FUNKSJON
try {
  await sequelize.authenticate();
  console.log("Database connected!!!!");
  await sequelize.sync({ alter: true });
  console.log("The table has been successfully created in the database!");
} catch (err) {
  console.log("Failed to connect to database:", err);
}

// First endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

/* Routes */
app.use("/cards", cardsRouter);
app.use("/users", userRouter);
app.use("/persons", personRouter);
app.use("/products", productsRouter);

export default app;
