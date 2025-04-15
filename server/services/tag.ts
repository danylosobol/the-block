import { Prisma, Tag } from "@prisma/client";
import prisma from "~/lib/prisma";

import { IGetAllResponse } from "~/types/interfaces";
interface ITagService {
  findById(id: number): Promise<Tag | null>;
  findBySlug(slug: string): Promise<Tag | null>;
  getAll(
    search?: string,
    page?: number,
    size?: number,
    args?: Prisma.TagWhereInput
  ): Promise<IGetAllResponse<Tag>>;
  create(name: string, slug: string): Promise<Tag | null>;
  update(id: number, name: string, slug: string): Promise<Tag | null>;
  delete(id: number): Promise<boolean>;
}

export const tagService: ITagService = {
  async findById(id) {
    const tag = await prisma.tag.findUnique({ where: { id } });
    return tag ?? null;
  },

  async findBySlug(slug) {
    const tag = await prisma.tag.findUnique({ where: { slug } });
    return tag ?? null;
  },

  async getAll(search, page, size, args) {
    const where: Prisma.TagWhereInput = {
      ...args,
      ...(search
        ? {
            name: {
              contains: search,
              mode: "insensitive",
            },
          }
        : {}),
    };
    const currentPage = Math.max(1, Number(page || 1));
    const currentSize = Math.max(1, Number(size || 10));
    const skip = (currentPage - 1) * currentSize;

    const [tags, total] = await Promise.all([
      prisma.tag.findMany({
        where,
        skip,
        take: currentSize,
        orderBy: {
          id: "asc",
        },
      }),
      prisma.tag.count({ where }),
    ]);

    return {
      data: tags,
      meta: {
        total,
        page: currentPage,
        size: currentSize,
        totalPages: Math.ceil(total / currentSize),
      },
    };
  },

  async create(name, slug) {
    const tag = await prisma.tag.create({
      data: {
        name,
        slug,
      },
    });
    return tag ?? null;
  },

  async update(id, name, slug) {
    const tag = await prisma.tag.update({
      where: { id },
      data: {
        name,
        slug,
      },
    });
    return tag ?? null;
  },

  async delete(id) {
    try {
      await prisma.tag.delete({ where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },
};
