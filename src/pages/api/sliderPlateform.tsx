import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const homePrimaryHandler = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (req.method === "GET") {
    try {
      const home = await prisma.sliderPlateform.findMany();
      res.json(home);
    } catch (error) {
      console.error("Erreur lors de la récupération des sliders:", error);
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end("Méthode non autorisé");
  }
};
export default homePrimaryHandler;
