import { PrismaClient } from "@prisma/client";

export default class PrismaProvider {
  static async use<T>(callback: (prisma: PrismaClient) => Promise<T>): Promise<T> {
    const prisma = new PrismaClient();
    try {
      return await callback(prisma);
    } finally {
      await prisma.$disconnect();
      console.log("Prisma disconnected.");
    }
  }
}
