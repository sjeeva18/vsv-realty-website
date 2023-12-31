import asyncHandler from "express-async-handler";
import { prisma } from "../Config/prismaConfig.js";

export const createNewProject = asyncHandler(async (req, res) => {
  const {
    title,
    area,
    facing,
    furnishing,
    description,
    price,
    address,
    state,
    city,
    facilities,
    image1,
    image2,
    image3,
    image4,
    image5,
    location,
    phone,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  try {
    const newProject = await prisma.newProject.create({
      data: {
        title,
        area,
        facing,
        furnishing,
        description,
        price,
        address,
        state,
        city,
        facilities,
        image1,
        image2,
        image3,
        image4,
        image5,
        location,
        phone,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({
      message: "Project created successfully",
      newProject,
    });
  } catch (err) {
    throw new Error(err.message);
  }
});

// function to get all the documents/properties
export const getAllNewProjects = asyncHandler(async (req, res) => {
  const newProjects = await prisma.newProject.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(newProjects);
});

// function to get a specific document/property
export const getNewProject = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const newProject = await prisma.newProject.findUnique({
      where: { id },
    });
    res.send(newProject);
  } catch (err) {
    throw new Error(err.message);
  }
});
