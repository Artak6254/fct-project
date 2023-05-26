import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prisma";
import { getSession } from "next-auth/react";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const session = await getSession({ req });

  if (!session) {
    res.status(401).json({ error: "No autorizado" });
    return;
  } 

  if (req.method === "GET") {
    try {
      const categories = await prisma.category.findMany();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las categorias" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
