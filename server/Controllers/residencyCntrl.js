import asyncHandler from "express-async-handler";
import { prisma } from "../Config/prismaConfig.js";

export const createResidency = asyncHandler(async (req, res) => {
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
    image,
    phone,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  try {
    const residency = await prisma.residency.create({
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
        image,
        phone,
        owner: { connect: { email: userEmail } },
      },
    });

    res.send({
      message: "Property created successfully",
      residency,
    });
  } catch (err) {
    throw new Error(err.message);
  }
});

// function to get all the documents/properties
export const getAllResidencies = asyncHandler(async (req, res) => {
  const residencies = await prisma.residency.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  res.send(residencies);
});

// function to get a specific document/property
export const getResidency = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const residency = await prisma.residency.findUnique({
      where: { id },
    });
    res.send(residency);
  } catch (err) {
    throw new Error(err.message);
  }
});
