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

//lokalhost/users
router.get("/", (req, res) => {
  res.status(200).json({
    data: users,
  });
});

export default router;
