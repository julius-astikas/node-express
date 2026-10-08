import express from "express";
import { getAllUsers } from "../controllers/getAllUsers.js";
import { createUser } from "../controllers/createUser.js";
import { getUserByEmail } from "../controllers/getUserByEmail.js";
import { deleteUser } from "../controllers/deleteUser.js";

const router = express.Router();

// GET: localhost:8000/users
router.get("/", getAllUsers);
// POST: localhost:8000/users
router.post("/", createUser);
// GET: localhost:8000/users/:email
router.get("/:email", getUserByEmail);

// DELETE: localhost:8000/users/:email
router.delete("/:email", deleteUser);

export default router;
