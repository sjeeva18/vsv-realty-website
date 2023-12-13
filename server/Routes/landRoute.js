import express from "express";
import { createLand, getAllLands, getLand } from "../controllers/landCntrl.js";
import jwtCheck from "../Config/auth0Config.js";
const router = express.Router();

router.post("/create", jwtCheck, createLand);
router.get("/allland", getAllLands);
router.get("/:id", getLand);

export { router as landRoute };
