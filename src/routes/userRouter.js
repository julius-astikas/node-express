import express from "express";
import { getAllUsers } from "../controllers/getAllUsers.js";
import { createUser } from "../controllers/createUser.js";
import { getUserByEmail } from "../controllers/getUserByEmail.js";
import { deleteUser } from "../controllers/deleteUser.js";
import { validate } from "../middleware/validate.js";
import { createUserSchema } from "../schemas/user.create.schema.js";
import { deleteUserSchema } from "../schemas/user.delete.schema.js";
import { getUserByEmailSchema } from "../schemas/get.user.by_email.schema.js";

const router = express.Router();

// GET: localhost:8000/users
router.get("/", getAllUsers);
// POST: localhost:8000/users
router.post("/", validate(createUserSchema), createUser);
// GET: localhost:8000/users/:email
router.get("/:email", validate(getUserByEmailSchema), getUserByEmail);
// DELETE: localhost:8000/users/:email
router.delete("/:email", validate(deleteUserSchema), deleteUser);

export default router;
