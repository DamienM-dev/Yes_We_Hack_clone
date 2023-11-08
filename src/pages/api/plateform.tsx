import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const plateformHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const plateform = await prisma.plateforme.findMany();
      res.json(plateform);
    } catch (error) {
      console.error(
        "une erreur est survenue pendant le chargemetn de plateforme",
        error
      );
      res.status(500).json({ error: "Une erreur est survenue." });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end("Méthode non autorisé");
  }
};

export default plateformHandler;
