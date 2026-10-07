import express from "express";

const router = express.Router();

const users = [
  {
    email: "aj@gmail.com",
    username: "Ana",
  },
  {
    email: "eg@gmail.com",
    username: "Emma",
  },
];

// GET - localhost:8000/users
router.get("/", (req, res) => {
  res.status(200).json({
    data: users,
  });
});

// POST - localhost:8000/users
router.post("/", (req, res) => {
  const { email, username } = req.body;

  const user = {
    email,
    username,
  };

  users.push(user);

  res.status(201).json({
    message: "Created new user",
    data: user,
  });
});

// GET user by email - localhost:8000/users/:email
router.get("/:email", (req, res) => {
  const email = req.params.email;

  const user = users.find((user) => user.email === email);

  res.status(200).json({
    data: user,
  });
});

export default router;
