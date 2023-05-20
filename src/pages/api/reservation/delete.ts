import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "DELETE") {
    const { id } = req.query;

    if (!id) {
      res.status(400).json({ error: "Se requiere el ID de la reserva" });
      return;
    }

    try {
      await prisma.reservation.delete({
        where: {
          id: id as string,
        },
      });

      res.status(200).json({ message: "Reserva eliminada correctamente" });
    } catch (error) {
      res.status(500).json({ error: "Error al eliminar la reserva" });
    }
  } else {
    res.status(405).json({ error: "Método no permitido" });
  }
}
