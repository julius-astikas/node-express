import express from "express";

import { getAllCards } from "../controllers/cards/getAllCards.js";

const router = express.Router();

// GET: localhost:8000/cards
router.get("/", getAllCards);

export default router;
