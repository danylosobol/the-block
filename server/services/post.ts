import { Prisma } from "@prisma/client";
import prisma from "~/lib/prisma";

import {
  IGetAllResponse,
  IPostCreateInput,
  IPostUpdateInput,
  ISafePost,
} from "~/types/interfaces";
import { transformer } from "~/utils/transformer";

interface IPostService {
  findById(id: number): Promise<ISafePost | null>;
  getAll(
    search?: string,
    page?: number,
    size?: number,
    args?: Prisma.PostWhereInput,
    order?: Prisma.PostOrderByWithRelationInput
  ): Promise<IGetAllResponse<ISafePost>>;
  create(data: IPostCreateInput): Promise<ISafePost | null>;
  update(id: number, data: IPostUpdateInput): Promise<ISafePost | null>;
  delete(id: number): Promise<boolean>;
}

export const postService: IPostService = {
  async findById(id) {
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: true,
        tags: true,
        featuredImage: true,
      },
    });
    return post
      ? {
          ...post,
          author: transformer.user(post.author),
        }
      : null;
  },
  async getAll(search, page, size, args, order = { created_at: "asc" }) {
    const where: Prisma.PostWhereInput = {
      ...args,
      ...(search
        ? {
            OR: [
              {
                title: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                content: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {}),
    };
    const currentPage = Math.max(1, Number(page || 1));
    const currentSize = Math.max(1, Number(size || 10));
    const skip = (currentPage - 1) * currentSize;

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        include: {
          author: true,
          tags: true,
          featuredImage: true,
        },
        skip,
        take: currentSize,
        orderBy: {
          ...order,
        },
      }),
      prisma.post.count({ where }),
    ]);

    return {
      data: posts.map((post) => ({
        ...post,
        author: transformer.user(post.author),
      })),
      meta: {
        total,
        page: currentPage,
        size: currentSize,
        totalPages: Math.ceil(total / currentSize),
      },
    };
  },
  async create(data) {
    const {
      title,
      published,
      content,
      authorId,
      attachTaxes,
      featuredImage,
    }: IPostCreateInput = data;
    const post = await prisma.post.create({
      include: {
        author: true,
        tags: true,
        featuredImage: true,
      },
      data: {
        title,
        published,
        content,
        author: { connect: { id: authorId } },
        ...(attachTaxes
          ? {
              tags:
                attachTaxes.tags?.length > 0
                  ? {
                      connect: attachTaxes.tags.map((id) => ({ id })),
                    }
                  : undefined,
            }
          : {}),
        featuredImage: featuredImage
          ? { connect: { id: featuredImage.id } }
          : undefined,
      },
    });
    return post
      ? {
          ...post,
          author: transformer.user(post.author),
        }
      : null;
  },

  async update(id, data) {
    const {
      title,
      published,
      content,
      authorId,
      featuredImage,
      attachTaxes,
      dettachTaxes,
    }: IPostUpdateInput = data;

    const post = await prisma.post.update({
      where: { id },
      include: {
        author: true,
        tags: true,
        featuredImage: true,
      },
      data: {
        title,
        published,
        content,
        author: { connect: { id: authorId } },
        ...(attachTaxes
          ? {
              tags:
                attachTaxes.tags?.length > 0
                  ? {
                      connect: attachTaxes.tags.map((id) => ({ id })),
                    }
                  : undefined,
            }
          : {}),
        ...(dettachTaxes && dettachTaxes.tags?.length > 0
          ? {
              tags:
                dettachTaxes.tags?.length > 0
                  ? {
                      disconnect: dettachTaxes.tags.map((id) => ({ id })),
                    }
                  : undefined,
            }
          : {}),
        featuredImage: featuredImage
          ? { connect: { id: featuredImage.id } }
          : undefined,
      },
    });

    return post
      ? {
          ...post,
          author: transformer.user(post.author),
        }
      : null;
  },

  async delete(id) {
    try {
      await prisma.post.delete({ where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  },
};
