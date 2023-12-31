import express from "express";
import {
  createNewProject,
  getAllNewProjects,
  getNewProject,
} from "../Controllers/newprojectCntrl.js";

const router = express.Router();

router.post("/create", createNewProject);
router.get("/allresd", getAllNewProjects);
router.get("/:id", getNewProject);

export { router as newprojectRoute };
