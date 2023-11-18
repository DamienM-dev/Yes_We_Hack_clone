import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const actualityHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const actualite = await prisma.actuality.findMany();
      res.json(actualite);
    } catch (error) {
      console.error(
        "Une erreur est survenue pendant le chargement des actualités: ",
        error
      );
      res.status(500).json({ error: "une erreur est survenue" });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end("La méthode n'est pas autorisé");
  }
};

export default actualityHandler;
