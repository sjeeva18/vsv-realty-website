import express from "express";
import { createLand, getAllLands, getLand } from "../controllers/landCntrl.js";
const router = express.Router();

router.post("/create", createLand);
router.get("/allland", getAllLands);
router.get("/:id", getLand);

export { router as landRoute };
