import asyncHandler from "express-async-handler";
import { prisma } from "../Config/prismaConfig.js";

export const createLand = asyncHandler(async (req, res) => {
  const {
    title,
    area,
    facing,
    dimension,
    description,
    price,
    address,
    state,
    city,
    facilities,
    image,
    phone,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  try {
    const land = await prisma.land.create({
      data: {
        title,
        area,
        facing,
        dimension,
        description,
        price,
        address,
        state,
        city,
        facilities,
        image,
        phone,
        userEmail,
      },
    });

    res.send({
      message: "Land created successfully",
      land,
    });
  } catch (err) {
    throw new Error(err.message);
  }
});

// function to get all the documents/land
export const getAllLands = asyncHandler(async (req, res) => {
  const land = await prisma.land.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(land);
});

// function to get a specific document/land
export const getLand = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const land = await prisma.land.findUnique({
      where: { id },
    });
    res.send(land);
  } catch (err) {
    throw new Error(err.message);
  }
});
