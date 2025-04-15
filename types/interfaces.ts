import type { File, Prisma, User } from "@prisma/client";
import type { TAppMessageType } from "~/types/types";

export interface IModelValueProp<T> {
  modelValue: T;
}

export interface IModelValueEmit<T> {
  (e: "update:model-value", value: T): void;
}

export interface IRegisterInput {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginInput {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface ILoginResponse {
  token: string;
  user: User;
}

export interface IProfileUpdate {
  name: string;
  password: string;
  confirmPassword: string;
}

export interface IResetInput {
  email: string;
  endpoint: string;
}

export interface IRecoveryInput {
  password: string;
  confirmPassword: string;
  token: string;
}

export interface IPostInput {
  title: string;
  content: string;
  published: boolean;
  authorId: number;
  featuredImage: File | null;
}

export interface IPostTaxes {
  tags: number[];
}

export interface IPostCreateInput extends IPostInput {
  attachTaxes: IPostTaxes;
}

export interface IPostUpdateInput extends IPostInput {
  attachTaxes: IPostTaxes;
  dettachTaxes?: IPostTaxes;
}

export interface IAppMessage {
  type: TAppMessageType;
  text: string;
}

export interface ISafeUser extends Omit<User, "passwordHash"> {}
export interface ISafePost
  extends Omit<
    Prisma.PostGetPayload<{
      include: {
        tags: true;
        author: true;
        featuredImage: true;
      };
    }>,
    "author"
  > {
  author: ISafeUser;
}

export interface IApiError {
  statusCode: number;
  statusMessage: string;
}

export interface IQueryParams<T = unknown> {
  page?: Ref<number> | number;
  size?: Ref<number> | number;
  search?: Ref<string> | string;
  args?: T;
}

export interface IGetAllResponseMeta {
  total: number;
  page: number;
  size: number;
  totalPages: number;
}

export interface IGetAllResponse<T> {
  data: T[];
  meta: IGetAllResponseMeta;
}

export interface IAppTableColumn {
  name: string;
  label: string;
  field: string;
  style?: Record<string, string>;
}
