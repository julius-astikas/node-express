import express from "express";

import userRouter from "./routes/userRouter.js";

const app = express();

// Allows Express to read form data from requests
app.use(express.urlencoded({ extended: true }));

// Allows Express to read JSON data from request bodies
app.use(express.json());

// First endpoint
app.get("/", (req, res) => {
  res.json({ message: "Hello world!" });
});

/* Routes */
app.use("/users", userRouter);

const port = 8000;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
