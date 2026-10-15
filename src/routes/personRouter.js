import express from "express";
import { getPersons } from "../controllers/getPersons.js";

const router = express.Router();

// GET: Retrieve persons from SQL Server
router.get("/", getPersons);

export default router;
