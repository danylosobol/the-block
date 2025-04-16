import { Prisma, User } from "~/src/generated/prisma";
import prisma from "~/lib/prisma";

interface IUserService {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(data: Prisma.UserCreateInput): Promise<User | null>;
  update(id: number, data: Prisma.UserUpdateInput): Promise<User | null>;
  delete(id: number): Promise<boolean>;
}

export const userService: IUserService = {
  async findById(id) {
    const user = await prisma.user.findUnique({ where: { id } });
    return user;
  },
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  },
  async create(data) {
    const user = await prisma.user.create({ data });
    return user;
  },
  async update(id, data) {
    const user = await prisma.user.update({
      where: { id },
      data,
    });
    return user;
  },
  async delete(id) {
    try {
      await prisma.user.delete({ where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },
};
