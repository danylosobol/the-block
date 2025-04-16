import { Prisma, ResetToken } from "~/src/generated/prisma";
import prisma from "~/lib/prisma";

interface IResetTokenService {
  create(data: Prisma.ResetTokenCreateInput): Promise<ResetToken | null>;
  findByToken(token: string): Promise<ResetToken | null>;
}

export const resetTokenService: IResetTokenService = {
  async create(data) {
    return await prisma.resetToken.create({ data });
  },
  async findByToken(token) {
    return await prisma.resetToken.findUnique({ where: { token } });
  },
};
