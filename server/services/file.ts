import { File, Prisma } from "~/src/generated/prisma";
import prisma from "~/lib/prisma";

interface IFileService {
  create(data: Prisma.FileCreateInput): Promise<File>;
  delete(id: string): Promise<boolean>;
  getById(id: string): Promise<File>;
}

export const fileService: IFileService = {
  async create(data) {
    const file = await prisma.file.create({ data });

    if (!file) {
      throw {
        statusCode: 500,
        statusMessage: "Failed to create file",
      };
    }

    return file;
  },

  async delete(id) {
    try {
      await prisma.file.delete({ where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },

  async getById(id) {
    const file = await prisma.file.findUnique({ where: { id } });
    if (!file) {
      throw {
        statusCode: 404,
        statusMessage: "Not Founded",
      };
    }

    return file;
  },
};
