/**
 * Client
 */

import * as runtime from "@prisma/client/runtime/library";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;

/**
 * Model User
 *
 */
export type User = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
/**
 * Model File
 *
 */
export type File = runtime.Types.Result.DefaultSelection<Prisma.$FilePayload>;
/**
 * Model Post
 *
 */
export type Post = runtime.Types.Result.DefaultSelection<Prisma.$PostPayload>;
/**
 * Model Tag
 *
 */
export type Tag = runtime.Types.Result.DefaultSelection<Prisma.$TagPayload>;
/**
 * Model ResetToken
 *
 */
export type ResetToken =
  runtime.Types.Result.DefaultSelection<Prisma.$ResetTokenPayload>;

/**
 * Create the Client
 */
const config: runtime.GetPrismaClientConfig = {
  generator: {
    name: "client",
    provider: {
      fromEnvVar: null,
      value: "prisma-client",
    },
    output: {
      value: "/home/nuxt/src/generated/prisma",
      fromEnvVar: null,
    },
    config: {
      engineType: "library",
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: "debian-openssl-3.0.x",
        native: true,
      },
      {
        fromEnvVar: null,
        value: "rhel-openssl-3.0.x",
      },
    ],
    previewFeatures: [],
    sourceFilePath: "/home/nuxt/prisma/schema.prisma",
    isCustomOutput: true,
  },
  relativePath: "../../../prisma",
  clientVersion: "6.6.0",
  engineVersion: "f676762280b54cd07c770017ed3711ddde35f37a",
  datasourceNames: ["db"],
  activeProvider: "postgresql",
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: null,
        value:
          "postgres://avnadmin:AVNS_pDZRqKLPXNEMf7CbnR_@nuxt-db-danilsobolub16b-652c.d.aivencloud.com:16775/defaultdb?sslmode=require",
      },
    },
  },
  inlineSchema:
    '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider      = "prisma-client"\n  output        = "../src/generated/prisma"\n  binaryTargets = ["native", "rhel-openssl-3.0.x"]\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = "postgres://avnadmin:AVNS_pDZRqKLPXNEMf7CbnR_@nuxt-db-danilsobolub16b-652c.d.aivencloud.com:16775/defaultdb?sslmode=require"\n}\n\nmodel User {\n  id           Int          @id @default(autoincrement())\n  email        String       @unique\n  name         String\n  passwordHash String\n  created_at   DateTime     @default(now())\n  posts        Post[]\n  resetTokens  ResetToken[]\n}\n\nmodel File {\n  id         String   @id\n  url        String\n  filename   String\n  mimetype   String\n  size       Int\n  uploadedAt DateTime @default(now())\n  posts      Post[]   @relation("FeaturedImage")\n}\n\nmodel Post {\n  id              Int      @id @default(autoincrement())\n  title           String\n  content         String?\n  published       Boolean  @default(false)\n  author          User     @relation(fields: [authorId], references: [id])\n  created_at      DateTime @default(now())\n  authorId        Int\n  tags            Tag[]    @relation("PostTags")\n  featuredImage   File?    @relation("FeaturedImage", fields: [featuredImageId], references: [id])\n  featuredImageId String?\n}\n\nmodel Tag {\n  id    Int    @id @default(autoincrement())\n  name  String\n  slug  String @unique\n  posts Post[] @relation("PostTags")\n}\n\nmodel ResetToken {\n  id        Int      @id @default(autoincrement())\n  token     String   @unique\n  userId    Int      @unique\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  expiresAt DateTime\n\n  @@index([userId])\n}\n',
  inlineSchemaHash:
    "95293a970d1564266968faccf39d6c58f864d44d5467294725bc8a01f567d65e",
  copyEngine: true,
  runtimeDataModel: {
    models: {},
    enums: {},
    types: {},
  },
  dirname: "",
};
config.dirname = __dirname;

config.runtimeDataModel = JSON.parse(
  '{"models":{"User":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"passwordHash","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"PostToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"resetTokens","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"ResetToken","nativeType":null,"relationName":"ResetTokenToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"File":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"url","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"filename","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"mimetype","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"size","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"uploadedAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"FeaturedImage","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Post":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"PostToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"DateTime","nativeType":null,"default":{"name":"now","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"tags","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Tag","nativeType":null,"relationName":"PostTags","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false},{"name":"featuredImage","kind":"object","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"File","nativeType":null,"relationName":"FeaturedImage","relationFromFields":["featuredImageId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false},{"name":"featuredImageId","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Tag":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"slug","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"posts","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Post","nativeType":null,"relationName":"PostTags","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"ResetToken":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"token","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"userId","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"user","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"ResetTokenToUser","relationFromFields":["userId"],"relationToFields":["id"],"relationOnDelete":"Cascade","isGenerated":false,"isUpdatedAt":false},{"name":"expiresAt","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
);
config.engineWasm = undefined;
config.compilerWasm = undefined;

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-debian-openssl-3.0.x.so.node");
path.join(
  process.cwd(),
  "src/generated/prisma/libquery_engine-debian-openssl-3.0.x.so.node"
);

// file annotations for bundling tools to include these files
path.join(__dirname, "libquery_engine-rhel-openssl-3.0.x.so.node");
path.join(
  process.cwd(),
  "src/generated/prisma/libquery_engine-rhel-openssl-3.0.x.so.node"
);
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/generated/prisma/schema.prisma");

interface PrismaClientConstructor {
  /**
   * ## Prisma Client
   *
   * Type-safe database client for TypeScript
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  new <
    ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
    U = "log" extends keyof ClientOptions
      ? ClientOptions["log"] extends Array<
          Prisma.LogLevel | Prisma.LogDefinition
        >
        ? Prisma.GetEvents<ClientOptions["log"]>
        : never
      : never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  >(
    options?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>
  ): PrismaClient<ClientOptions, U, ExtArgs>;
}

/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export interface PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent
    ) => void
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): runtime.Types.Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): runtime.Types.Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel }
  ): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>
    ) => runtime.Types.Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    }
  ): runtime.Types.Utils.JsPromise<R>;

  $extends: runtime.Types.Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    runtime.Types.Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Files
   * const files = await prisma.file.findMany()
   * ```
   */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resetToken`: Exposes CRUD operations for the **ResetToken** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more ResetTokens
   * const resetTokens = await prisma.resetToken.findMany()
   * ```
   */
  get resetToken(): Prisma.ResetTokenDelegate<ExtArgs, ClientOptions>;
}

export const PrismaClient = runtime.getPrismaClient(
  config
) as unknown as PrismaClientConstructor;

export namespace Prisma {
  export type DMMF = typeof runtime.DMMF;

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export const validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */

  export const PrismaClientKnownRequestError =
    runtime.PrismaClientKnownRequestError;
  export type PrismaClientKnownRequestError =
    runtime.PrismaClientKnownRequestError;

  export const PrismaClientUnknownRequestError =
    runtime.PrismaClientUnknownRequestError;
  export type PrismaClientUnknownRequestError =
    runtime.PrismaClientUnknownRequestError;

  export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;

  export const PrismaClientInitializationError =
    runtime.PrismaClientInitializationError;
  export type PrismaClientInitializationError =
    runtime.PrismaClientInitializationError;

  export const PrismaClientValidationError =
    runtime.PrismaClientValidationError;
  export type PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export const sql = runtime.sqltag;
  export const empty = runtime.empty;
  export const join = runtime.join;
  export const raw = runtime.raw;
  export const Sql = runtime.Sql;
  export type Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export const Decimal = runtime.Decimal;
  export type Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export type Extension = runtime.Types.Extensions.UserArgs;
  export const getExtensionContext = runtime.Extensions.getExtensionContext;
  export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<
    T,
    F
  >;
  export type Payload<
    T,
    F extends runtime.Operation = never
  > = runtime.Types.Public.Payload<T, F>;
  export type Result<
    T,
    A,
    F extends runtime.Operation
  > = runtime.Types.Public.Result<T, A, F>;
  export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;

  export type PrismaVersion = {
    client: string;
    engine: string;
  };

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export const prismaVersion: PrismaVersion = {
    client: "6.6.0",
    engine: "f676762280b54cd07c770017ed3711ddde35f37a",
  };

  /**
   * Utility Types
   */

  export type JsonObject = runtime.JsonObject;
  export type JsonArray = runtime.JsonArray;
  export type JsonValue = runtime.JsonValue;
  export type InputJsonObject = runtime.InputJsonObject;
  export type InputJsonArray = runtime.InputJsonArray;
  export type InputJsonValue = runtime.InputJsonValue;

  export const NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull as new (
      secret: never
    ) => typeof runtime.objectEnumValues.instances.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull as new (
      secret: never
    ) => typeof runtime.objectEnumValues.instances.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull as new (
      secret: never
    ) => typeof runtime.objectEnumValues.instances.AnyNull,
  };

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull = runtime.objectEnumValues.instances.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull = runtime.objectEnumValues.instances.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull = runtime.objectEnumValues.instances.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
    ? "Please either choose `select` or `omit`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  export type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  export type Boolean = True | False;

  export type True = 1;

  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName = {
    User: "User",
    File: "File",
    Post: "Post",
    Tag: "Tag",
    ResetToken: "ResetToken",
  } as const;

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  export interface TypeMapCb<ClientOptions = {}>
    extends runtime.Types.Utils.Fn<
      { extArgs: runtime.Types.Extensions.InternalArgs },
      runtime.Types.Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "user" | "file" | "post" | "tag" | "resetToken";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>;
        fields: Prisma.UserFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
          };
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.UserCountArgs<ExtArgs>;
            result:
              | runtime.Types.Utils.Optional<UserCountAggregateOutputType>
              | number;
          };
        };
      };
      File: {
        payload: Prisma.$FilePayload<ExtArgs>;
        fields: Prisma.FileFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
          };
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
          };
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
          };
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
          };
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
          };
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
          };
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
          };
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>[];
          };
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$FilePayload>;
          };
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<AggregateFile>;
          };
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<FileGroupByOutputType>[];
          };
          count: {
            args: Prisma.FileCountArgs<ExtArgs>;
            result:
              | runtime.Types.Utils.Optional<FileCountAggregateOutputType>
              | number;
          };
        };
      };
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>;
        fields: Prisma.PostFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>[];
          };
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$PostPayload>;
          };
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<AggregatePost>;
          };
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<PostGroupByOutputType>[];
          };
          count: {
            args: Prisma.PostCountArgs<ExtArgs>;
            result:
              | runtime.Types.Utils.Optional<PostCountAggregateOutputType>
              | number;
          };
        };
      };
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>;
        fields: Prisma.TagFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>[];
          };
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$TagPayload>;
          };
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<AggregateTag>;
          };
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<TagGroupByOutputType>[];
          };
          count: {
            args: Prisma.TagCountArgs<ExtArgs>;
            result:
              | runtime.Types.Utils.Optional<TagCountAggregateOutputType>
              | number;
          };
        };
      };
      ResetToken: {
        payload: Prisma.$ResetTokenPayload<ExtArgs>;
        fields: Prisma.ResetTokenFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ResetTokenFindUniqueArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ResetTokenFindUniqueOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>;
          };
          findFirst: {
            args: Prisma.ResetTokenFindFirstArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ResetTokenFindFirstOrThrowArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>;
          };
          findMany: {
            args: Prisma.ResetTokenFindManyArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>[];
          };
          create: {
            args: Prisma.ResetTokenCreateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>;
          };
          createMany: {
            args: Prisma.ResetTokenCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.ResetTokenCreateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>[];
          };
          delete: {
            args: Prisma.ResetTokenDeleteArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>;
          };
          update: {
            args: Prisma.ResetTokenUpdateArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>;
          };
          deleteMany: {
            args: Prisma.ResetTokenDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ResetTokenUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.ResetTokenUpdateManyAndReturnArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>[];
          };
          upsert: {
            args: Prisma.ResetTokenUpsertArgs<ExtArgs>;
            result: runtime.Types.Utils.PayloadToResult<Prisma.$ResetTokenPayload>;
          };
          aggregate: {
            args: Prisma.ResetTokenAggregateArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<AggregateResetToken>;
          };
          groupBy: {
            args: Prisma.ResetTokenGroupByArgs<ExtArgs>;
            result: runtime.Types.Utils.Optional<ResetTokenGroupByOutputType>[];
          };
          count: {
            args: Prisma.ResetTokenCountArgs<ExtArgs>;
            result:
              | runtime.Types.Utils.Optional<ResetTokenCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension = runtime.Extensions
    .defineExtension as unknown as runtime.Types.Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    runtime.Types.Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    user?: UserOmit;
    file?: FileOmit;
    post?: PostOmit;
    tag?: TagOmit;
    resetToken?: ResetTokenOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => runtime.Types.Utils.JsPromise<T>
  ) => runtime.Types.Utils.JsPromise<T>;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number;
    resetTokens: number;
  };

  export type UserCountOutputTypeSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs;
    resetTokens?: boolean | UserCountOutputTypeCountResetTokensArgs;
  };

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: PostWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResetTokensArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: ResetTokenWhereInput;
  };

  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    posts: number;
  };

  export type FileCountOutputTypeSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    posts?: boolean | FileCountOutputTypeCountPostsArgs;
  };

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountPostsArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: PostWhereInput;
  };

  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    tags: number;
  };

  export type PostCountOutputTypeSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    tags?: boolean | PostCountOutputTypeCountTagsArgs;
  };

  // Custom InputTypes
  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountTagsArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: TagWhereInput;
  };

  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    posts: number;
  };

  export type TagCountOutputTypeSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    posts?: boolean | TagCountOutputTypeCountPostsArgs;
  };

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPostsArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: PostWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserAvgAggregateOutputType = {
    id: number | null;
  };

  export type UserSumAggregateOutputType = {
    id: number | null;
  };

  export type UserMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    passwordHash: string | null;
    created_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    name: string | null;
    passwordHash: string | null;
    created_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    passwordHash: number;
    created_at: number;
    _all: number;
  };

  export type UserAvgAggregateInputType = {
    id?: true;
  };

  export type UserSumAggregateInputType = {
    id?: true;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    passwordHash?: true;
    created_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    passwordHash?: true;
    created_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    passwordHash?: true;
    created_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: UserAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: UserSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: UserWhereInput;
    orderBy?:
      | UserOrderByWithAggregationInput
      | UserOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: number;
    email: string;
    name: string;
    passwordHash: string;
    created_at: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type UserSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      passwordHash?: boolean;
      created_at?: boolean;
      posts?: boolean | User$postsArgs<ExtArgs>;
      resetTokens?: boolean | User$resetTokensArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      passwordHash?: boolean;
      created_at?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      name?: boolean;
      passwordHash?: boolean;
      created_at?: boolean;
    },
    ExtArgs["result"]["user"]
  >;

  export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    passwordHash?: boolean;
    created_at?: boolean;
  };

  export type UserOmit<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetOmit<
    "id" | "email" | "name" | "passwordHash" | "created_at",
    ExtArgs["result"]["user"]
  >;
  export type UserInclude<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    posts?: boolean | User$postsArgs<ExtArgs>;
    resetTokens?: boolean | User$resetTokensArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type UserIncludeCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {};
  export type UserIncludeUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {};

  export type $UserPayload<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    name: "User";
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[];
      resetTokens: Prisma.$ResetTokenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<
      {
        id: number;
        email: string;
        name: string;
        passwordHash: string;
        created_at: Date;
      },
      ExtArgs["result"]["user"]
    >;
    composites: {};
  };

  export type UserGetPayload<
    S extends boolean | null | undefined | UserDefaultArgs
  > = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;

  export type UserCountArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: UserCountAggregateInputType | true;
  };

  export interface UserDelegate<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["User"];
      meta: { name: "User" };
    };
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     */
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     */
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
      args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     */
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
      args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<
      runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetUserGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the User model
     */
    readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<
    T,
    Null = never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends User$postsArgs<ExtArgs> = {}>(
      args?: Subset<T, User$postsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | runtime.Types.Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    resetTokens<T extends User$resetTokensArgs<ExtArgs> = {}>(
      args?: Subset<T, User$resetTokensArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | runtime.Types.Result.GetResult<
          Prisma.$ResetTokenPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(
      onfinally?: (() => void) | undefined | null
    ): runtime.Types.Utils.JsPromise<T>;
  }

  /**
   * Fields of the User model
   */
  export interface UserFieldRefs {
    readonly id: FieldRef<"User", "Int">;
    readonly email: FieldRef<"User", "String">;
    readonly name: FieldRef<"User", "String">;
    readonly passwordHash: FieldRef<"User", "String">;
    readonly created_at: FieldRef<"User", "DateTime">;
  }

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * User create
   */
  export type UserCreateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to update.
     */
    limit?: number;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput;
    /**
     * Limit how many Users to delete.
     */
    limit?: number;
  };

  /**
   * User.posts
   */
  export type User$postsArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * User.resetTokens
   */
  export type User$resetTokensArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    where?: ResetTokenWhereInput;
    orderBy?:
      | ResetTokenOrderByWithRelationInput
      | ResetTokenOrderByWithRelationInput[];
    cursor?: ResetTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[];
  };

  /**
   * User without action
   */
  export type UserDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null;
  };

  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null;
    _avg: FileAvgAggregateOutputType | null;
    _sum: FileSumAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
  };

  export type FileAvgAggregateOutputType = {
    size: number | null;
  };

  export type FileSumAggregateOutputType = {
    size: number | null;
  };

  export type FileMinAggregateOutputType = {
    id: string | null;
    url: string | null;
    filename: string | null;
    mimetype: string | null;
    size: number | null;
    uploadedAt: Date | null;
  };

  export type FileMaxAggregateOutputType = {
    id: string | null;
    url: string | null;
    filename: string | null;
    mimetype: string | null;
    size: number | null;
    uploadedAt: Date | null;
  };

  export type FileCountAggregateOutputType = {
    id: number;
    url: number;
    filename: number;
    mimetype: number;
    size: number;
    uploadedAt: number;
    _all: number;
  };

  export type FileAvgAggregateInputType = {
    size?: true;
  };

  export type FileSumAggregateInputType = {
    size?: true;
  };

  export type FileMinAggregateInputType = {
    id?: true;
    url?: true;
    filename?: true;
    mimetype?: true;
    size?: true;
    uploadedAt?: true;
  };

  export type FileMaxAggregateInputType = {
    id?: true;
    url?: true;
    filename?: true;
    mimetype?: true;
    size?: true;
    uploadedAt?: true;
  };

  export type FileCountAggregateInputType = {
    id?: true;
    url?: true;
    filename?: true;
    mimetype?: true;
    size?: true;
    uploadedAt?: true;
    _all?: true;
  };

  export type FileAggregateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Files
     **/
    _count?: true | FileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FileAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FileSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FileMaxAggregateInputType;
  };

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
    [P in keyof T & keyof AggregateFile]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>;
  };

  export type FileGroupByArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: FileWhereInput;
    orderBy?:
      | FileOrderByWithAggregationInput
      | FileOrderByWithAggregationInput[];
    by: FileScalarFieldEnum[] | FileScalarFieldEnum;
    having?: FileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FileCountAggregateInputType | true;
    _avg?: FileAvgAggregateInputType;
    _sum?: FileSumAggregateInputType;
    _min?: FileMinAggregateInputType;
    _max?: FileMaxAggregateInputType;
  };

  export type FileGroupByOutputType = {
    id: string;
    url: string;
    filename: string;
    mimetype: string;
    size: number;
    uploadedAt: Date;
    _count: FileCountAggregateOutputType | null;
    _avg: FileAvgAggregateOutputType | null;
    _sum: FileSumAggregateOutputType | null;
    _min: FileMinAggregateOutputType | null;
    _max: FileMaxAggregateOutputType | null;
  };

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof FileGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], FileGroupByOutputType[P]>
          : GetScalarType<T[P], FileGroupByOutputType[P]>;
      }
    >
  >;

  export type FileSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      filename?: boolean;
      mimetype?: boolean;
      size?: boolean;
      uploadedAt?: boolean;
      posts?: boolean | File$postsArgs<ExtArgs>;
      _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["file"]
  >;

  export type FileSelectCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      filename?: boolean;
      mimetype?: boolean;
      size?: boolean;
      uploadedAt?: boolean;
    },
    ExtArgs["result"]["file"]
  >;

  export type FileSelectUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      url?: boolean;
      filename?: boolean;
      mimetype?: boolean;
      size?: boolean;
      uploadedAt?: boolean;
    },
    ExtArgs["result"]["file"]
  >;

  export type FileSelectScalar = {
    id?: boolean;
    url?: boolean;
    filename?: boolean;
    mimetype?: boolean;
    size?: boolean;
    uploadedAt?: boolean;
  };

  export type FileOmit<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetOmit<
    "id" | "url" | "filename" | "mimetype" | "size" | "uploadedAt",
    ExtArgs["result"]["file"]
  >;
  export type FileInclude<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    posts?: boolean | File$postsArgs<ExtArgs>;
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type FileIncludeCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {};
  export type FileIncludeUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {};

  export type $FilePayload<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    name: "File";
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<
      {
        id: string;
        url: string;
        filename: string;
        mimetype: string;
        size: number;
        uploadedAt: Date;
      },
      ExtArgs["result"]["file"]
    >;
    composites: {};
  };

  export type FileGetPayload<
    S extends boolean | null | undefined | FileDefaultArgs
  > = runtime.Types.Result.GetResult<Prisma.$FilePayload, S>;

  export type FileCountArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = Omit<FileFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: FileCountAggregateInputType | true;
  };

  export interface FileDelegate<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["File"];
      meta: { name: "File" };
    };
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(
      args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(
      args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     *
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FileFindManyArgs>(
      args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     *
     */
    create<T extends FileCreateArgs>(
      args: SelectSubset<T, FileCreateArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FileCreateManyArgs>(
      args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     *
     */
    delete<T extends FileDeleteArgs>(
      args: SelectSubset<T, FileDeleteArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FileUpdateArgs>(
      args: SelectSubset<T, FileUpdateArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FileDeleteManyArgs>(
      args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FileUpdateManyArgs>(
      args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Files and only return the `id`
     * const fileWithIdOnly = await prisma.file.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(
      args: SelectSubset<T, FileUpsertArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
     **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FileAggregateArgs>(
      args: Subset<T, FileAggregateArgs>
    ): Prisma.PrismaPromise<GetFileAggregateType<T>>;

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs["orderBy"] }
        : { orderBy?: FileGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetFileGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the File model
     */
    readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<
    T,
    Null = never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends File$postsArgs<ExtArgs> = {}>(
      args?: Subset<T, File$postsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | runtime.Types.Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(
      onfinally?: (() => void) | undefined | null
    ): runtime.Types.Utils.JsPromise<T>;
  }

  /**
   * Fields of the File model
   */
  export interface FileFieldRefs {
    readonly id: FieldRef<"File", "String">;
    readonly url: FieldRef<"File", "String">;
    readonly filename: FieldRef<"File", "String">;
    readonly mimetype: FieldRef<"File", "String">;
    readonly size: FieldRef<"File", "Int">;
    readonly uploadedAt: FieldRef<"File", "DateTime">;
  }

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput;
  };

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput;
  };

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[];
  };

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[];
  };

  /**
   * File findMany
   */
  export type FileFindManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     */
    skip?: number;
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[];
  };

  /**
   * File create
   */
  export type FileCreateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>;
  };

  /**
   * File createMany
   */
  export type FileCreateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * File update
   */
  export type FileUpdateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>;
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput;
  };

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>;
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput;
    /**
     * Limit how many Files to update.
     */
    limit?: number;
  };

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>;
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput;
    /**
     * Limit how many Files to update.
     */
    limit?: number;
  };

  /**
   * File upsert
   */
  export type FileUpsertArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput;
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>;
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>;
  };

  /**
   * File delete
   */
  export type FileDeleteArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput;
  };

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput;
    /**
     * Limit how many Files to delete.
     */
    limit?: number;
  };

  /**
   * File.posts
   */
  export type File$postsArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * File without action
   */
  export type FileDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
  };

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  export type PostAvgAggregateOutputType = {
    id: number | null;
    authorId: number | null;
  };

  export type PostSumAggregateOutputType = {
    id: number | null;
    authorId: number | null;
  };

  export type PostMinAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    published: boolean | null;
    created_at: Date | null;
    authorId: number | null;
    featuredImageId: string | null;
  };

  export type PostMaxAggregateOutputType = {
    id: number | null;
    title: string | null;
    content: string | null;
    published: boolean | null;
    created_at: Date | null;
    authorId: number | null;
    featuredImageId: string | null;
  };

  export type PostCountAggregateOutputType = {
    id: number;
    title: number;
    content: number;
    published: number;
    created_at: number;
    authorId: number;
    featuredImageId: number;
    _all: number;
  };

  export type PostAvgAggregateInputType = {
    id?: true;
    authorId?: true;
  };

  export type PostSumAggregateInputType = {
    id?: true;
    authorId?: true;
  };

  export type PostMinAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    published?: true;
    created_at?: true;
    authorId?: true;
    featuredImageId?: true;
  };

  export type PostMaxAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    published?: true;
    created_at?: true;
    authorId?: true;
    featuredImageId?: true;
  };

  export type PostCountAggregateInputType = {
    id?: true;
    title?: true;
    content?: true;
    published?: true;
    created_at?: true;
    authorId?: true;
    featuredImageId?: true;
    _all?: true;
  };

  export type PostAggregateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    _count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: PostAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: PostSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: PostMaxAggregateInputType;
  };

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>;
  };

  export type PostGroupByArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: PostWhereInput;
    orderBy?:
      | PostOrderByWithAggregationInput
      | PostOrderByWithAggregationInput[];
    by: PostScalarFieldEnum[] | PostScalarFieldEnum;
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PostCountAggregateInputType | true;
    _avg?: PostAvgAggregateInputType;
    _sum?: PostSumAggregateInputType;
    _min?: PostMinAggregateInputType;
    _max?: PostMaxAggregateInputType;
  };

  export type PostGroupByOutputType = {
    id: number;
    title: string;
    content: string | null;
    published: boolean;
    created_at: Date;
    authorId: number;
    featuredImageId: string | null;
    _count: PostCountAggregateOutputType | null;
    _avg: PostAvgAggregateOutputType | null;
    _sum: PostSumAggregateOutputType | null;
    _min: PostMinAggregateOutputType | null;
    _max: PostMaxAggregateOutputType | null;
  };

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof PostGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], PostGroupByOutputType[P]>
          : GetScalarType<T[P], PostGroupByOutputType[P]>;
      }
    >
  >;

  export type PostSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      published?: boolean;
      created_at?: boolean;
      authorId?: boolean;
      featuredImageId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      tags?: boolean | Post$tagsArgs<ExtArgs>;
      featuredImage?: boolean | Post$featuredImageArgs<ExtArgs>;
      _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["post"]
  >;

  export type PostSelectCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      published?: boolean;
      created_at?: boolean;
      authorId?: boolean;
      featuredImageId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      featuredImage?: boolean | Post$featuredImageArgs<ExtArgs>;
    },
    ExtArgs["result"]["post"]
  >;

  export type PostSelectUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      title?: boolean;
      content?: boolean;
      published?: boolean;
      created_at?: boolean;
      authorId?: boolean;
      featuredImageId?: boolean;
      author?: boolean | UserDefaultArgs<ExtArgs>;
      featuredImage?: boolean | Post$featuredImageArgs<ExtArgs>;
    },
    ExtArgs["result"]["post"]
  >;

  export type PostSelectScalar = {
    id?: boolean;
    title?: boolean;
    content?: boolean;
    published?: boolean;
    created_at?: boolean;
    authorId?: boolean;
    featuredImageId?: boolean;
  };

  export type PostOmit<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetOmit<
    | "id"
    | "title"
    | "content"
    | "published"
    | "created_at"
    | "authorId"
    | "featuredImageId",
    ExtArgs["result"]["post"]
  >;
  export type PostInclude<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    tags?: boolean | Post$tagsArgs<ExtArgs>;
    featuredImage?: boolean | Post$featuredImageArgs<ExtArgs>;
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type PostIncludeCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    featuredImage?: boolean | Post$featuredImageArgs<ExtArgs>;
  };
  export type PostIncludeUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    author?: boolean | UserDefaultArgs<ExtArgs>;
    featuredImage?: boolean | Post$featuredImageArgs<ExtArgs>;
  };

  export type $PostPayload<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    name: "Post";
    objects: {
      author: Prisma.$UserPayload<ExtArgs>;
      tags: Prisma.$TagPayload<ExtArgs>[];
      featuredImage: Prisma.$FilePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<
      {
        id: number;
        title: string;
        content: string | null;
        published: boolean;
        created_at: Date;
        authorId: number;
        featuredImageId: string | null;
      },
      ExtArgs["result"]["post"]
    >;
    composites: {};
  };

  export type PostGetPayload<
    S extends boolean | null | undefined | PostDefaultArgs
  > = runtime.Types.Result.GetResult<Prisma.$PostPayload, S>;

  export type PostCountArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = Omit<PostFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: PostCountAggregateInputType | true;
  };

  export interface PostDelegate<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Post"];
      meta: { name: "Post" };
    };
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(
      args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     */
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     */
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(
      args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     */
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(
      args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<
      runtime.Types.Result.GetResult<
        Prisma.$PostPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>
    ): Prisma.PrismaPromise<GetPostAggregateType<T>>;

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs["orderBy"] }
        : { orderBy?: PostGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetPostGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Post model
     */
    readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<
    T,
    Null = never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | runtime.Types.Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    tags<T extends Post$tagsArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$tagsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | runtime.Types.Result.GetResult<
          Prisma.$TagPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    featuredImage<T extends Post$featuredImageArgs<ExtArgs> = {}>(
      args?: Subset<T, Post$featuredImageArgs<ExtArgs>>
    ): Prisma__FileClient<
      runtime.Types.Result.GetResult<
        Prisma.$FilePayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(
      onfinally?: (() => void) | undefined | null
    ): runtime.Types.Utils.JsPromise<T>;
  }

  /**
   * Fields of the Post model
   */
  export interface PostFieldRefs {
    readonly id: FieldRef<"Post", "Int">;
    readonly title: FieldRef<"Post", "String">;
    readonly content: FieldRef<"Post", "String">;
    readonly published: FieldRef<"Post", "Boolean">;
    readonly created_at: FieldRef<"Post", "DateTime">;
    readonly authorId: FieldRef<"Post", "Int">;
    readonly featuredImageId: FieldRef<"Post", "String">;
  }

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post findMany
   */
  export type PostFindManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     */
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Post create
   */
  export type PostCreateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
  };

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post update
   */
  export type PostUpdateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
  };

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Post upsert
   */
  export type PostUpsertArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
  };

  /**
   * Post delete
   */
  export type PostDeleteArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput;
  };

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput;
    /**
     * Limit how many Posts to delete.
     */
    limit?: number;
  };

  /**
   * Post.tags
   */
  export type Post$tagsArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    where?: TagWhereInput;
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    cursor?: TagWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Post.featuredImage
   */
  export type Post$featuredImageArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null;
    where?: FileWhereInput;
  };

  /**
   * Post without action
   */
  export type PostDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
  };

  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  export type TagAvgAggregateOutputType = {
    id: number | null;
  };

  export type TagSumAggregateOutputType = {
    id: number | null;
  };

  export type TagMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    slug: string | null;
  };

  export type TagMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    slug: string | null;
  };

  export type TagCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    _all: number;
  };

  export type TagAvgAggregateInputType = {
    id?: true;
  };

  export type TagSumAggregateInputType = {
    id?: true;
  };

  export type TagMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
  };

  export type TagMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
  };

  export type TagCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    _all?: true;
  };

  export type TagAggregateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Tags
     **/
    _count?: true | TagCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: TagAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: TagSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TagMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TagMaxAggregateInputType;
  };

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
    [P in keyof T & keyof AggregateTag]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>;
  };

  export type TagGroupByArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: TagWhereInput;
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[];
    by: TagScalarFieldEnum[] | TagScalarFieldEnum;
    having?: TagScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TagCountAggregateInputType | true;
    _avg?: TagAvgAggregateInputType;
    _sum?: TagSumAggregateInputType;
    _min?: TagMinAggregateInputType;
    _max?: TagMaxAggregateInputType;
  };

  export type TagGroupByOutputType = {
    id: number;
    name: string;
    slug: string;
    _count: TagCountAggregateOutputType | null;
    _avg: TagAvgAggregateOutputType | null;
    _sum: TagSumAggregateOutputType | null;
    _min: TagMinAggregateOutputType | null;
    _max: TagMaxAggregateOutputType | null;
  };

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof TagGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TagGroupByOutputType[P]>
          : GetScalarType<T[P], TagGroupByOutputType[P]>;
      }
    >
  >;

  export type TagSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
      posts?: boolean | Tag$postsArgs<ExtArgs>;
      _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
    },
    ExtArgs["result"]["tag"]
  >;

  export type TagSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
  };

  export type TagOmit<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetOmit<
    "id" | "name" | "slug",
    ExtArgs["result"]["tag"]
  >;
  export type TagInclude<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    posts?: boolean | Tag$postsArgs<ExtArgs>;
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type TagIncludeCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {};
  export type TagIncludeUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {};

  export type $TagPayload<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    name: "Tag";
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        slug: string;
      },
      ExtArgs["result"]["tag"]
    >;
    composites: {};
  };

  export type TagGetPayload<
    S extends boolean | null | undefined | TagDefaultArgs
  > = runtime.Types.Result.GetResult<Prisma.$TagPayload, S>;

  export type TagCountArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = Omit<TagFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: TagCountAggregateInputType | true;
  };

  export interface TagDelegate<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Tag"];
      meta: { name: "Tag" };
    };
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(
      args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>
    ): Prisma__TagClient<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(
      args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>
    ): Prisma__TagClient<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TagClient<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     *
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     *
     */
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     *
     */
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs<ExtArgs>>
    ): Prisma__TagClient<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(
      args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     *
     */
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs<ExtArgs>>
    ): Prisma__TagClient<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs<ExtArgs>>
    ): Prisma__TagClient<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(
      args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs<ExtArgs>>
    ): Prisma__TagClient<
      runtime.Types.Result.GetResult<
        Prisma.$TagPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
     **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], TagCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TagAggregateArgs>(
      args: Subset<T, TagAggregateArgs>
    ): Prisma.PrismaPromise<GetTagAggregateType<T>>;

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs["orderBy"] }
        : { orderBy?: TagGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetTagGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Tag model
     */
    readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<
    T,
    Null = never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    posts<T extends Tag$postsArgs<ExtArgs> = {}>(
      args?: Subset<T, Tag$postsArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      | runtime.Types.Result.GetResult<
          Prisma.$PostPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(
      onfinally?: (() => void) | undefined | null
    ): runtime.Types.Utils.JsPromise<T>;
  }

  /**
   * Fields of the Tag model
   */
  export interface TagFieldRefs {
    readonly id: FieldRef<"Tag", "Int">;
    readonly name: FieldRef<"Tag", "String">;
    readonly slug: FieldRef<"Tag", "String">;
  }

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Tags.
     */
    skip?: number;
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[];
  };

  /**
   * Tag create
   */
  export type TagCreateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>;
  };

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Tag update
   */
  export type TagUpdateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>;
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to update.
     */
    limit?: number;
  };

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput;
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>;
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>;
  };

  /**
   * Tag delete
   */
  export type TagDeleteArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput;
  };

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput;
    /**
     * Limit how many Tags to delete.
     */
    limit?: number;
  };

  /**
   * Tag.posts
   */
  export type Tag$postsArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null;
    where?: PostWhereInput;
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[];
    cursor?: PostWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[];
  };

  /**
   * Tag without action
   */
  export type TagDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null;
  };

  /**
   * Model ResetToken
   */

  export type AggregateResetToken = {
    _count: ResetTokenCountAggregateOutputType | null;
    _avg: ResetTokenAvgAggregateOutputType | null;
    _sum: ResetTokenSumAggregateOutputType | null;
    _min: ResetTokenMinAggregateOutputType | null;
    _max: ResetTokenMaxAggregateOutputType | null;
  };

  export type ResetTokenAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type ResetTokenSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
  };

  export type ResetTokenMinAggregateOutputType = {
    id: number | null;
    token: string | null;
    userId: number | null;
    expiresAt: Date | null;
  };

  export type ResetTokenMaxAggregateOutputType = {
    id: number | null;
    token: string | null;
    userId: number | null;
    expiresAt: Date | null;
  };

  export type ResetTokenCountAggregateOutputType = {
    id: number;
    token: number;
    userId: number;
    expiresAt: number;
    _all: number;
  };

  export type ResetTokenAvgAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type ResetTokenSumAggregateInputType = {
    id?: true;
    userId?: true;
  };

  export type ResetTokenMinAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
  };

  export type ResetTokenMaxAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
  };

  export type ResetTokenCountAggregateInputType = {
    id?: true;
    token?: true;
    userId?: true;
    expiresAt?: true;
    _all?: true;
  };

  export type ResetTokenAggregateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which ResetToken to aggregate.
     */
    where?: ResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?:
      | ResetTokenOrderByWithRelationInput
      | ResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned ResetTokens
     **/
    _count?: true | ResetTokenCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ResetTokenAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ResetTokenSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ResetTokenMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ResetTokenMaxAggregateInputType;
  };

  export type GetResetTokenAggregateType<T extends ResetTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateResetToken]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResetToken[P]>
      : GetScalarType<T[P], AggregateResetToken[P]>;
  };

  export type ResetTokenGroupByArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    where?: ResetTokenWhereInput;
    orderBy?:
      | ResetTokenOrderByWithAggregationInput
      | ResetTokenOrderByWithAggregationInput[];
    by: ResetTokenScalarFieldEnum[] | ResetTokenScalarFieldEnum;
    having?: ResetTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ResetTokenCountAggregateInputType | true;
    _avg?: ResetTokenAvgAggregateInputType;
    _sum?: ResetTokenSumAggregateInputType;
    _min?: ResetTokenMinAggregateInputType;
    _max?: ResetTokenMaxAggregateInputType;
  };

  export type ResetTokenGroupByOutputType = {
    id: number;
    token: string;
    userId: number;
    expiresAt: Date;
    _count: ResetTokenCountAggregateOutputType | null;
    _avg: ResetTokenAvgAggregateOutputType | null;
    _sum: ResetTokenSumAggregateOutputType | null;
    _min: ResetTokenMinAggregateOutputType | null;
    _max: ResetTokenMaxAggregateOutputType | null;
  };

  type GetResetTokenGroupByPayload<T extends ResetTokenGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ResetTokenGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ResetTokenGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ResetTokenGroupByOutputType[P]>;
        }
      >
    >;

  export type ResetTokenSelect<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      userId?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["resetToken"]
  >;

  export type ResetTokenSelectCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      userId?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["resetToken"]
  >;

  export type ResetTokenSelectUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetSelect<
    {
      id?: boolean;
      token?: boolean;
      userId?: boolean;
      expiresAt?: boolean;
      user?: boolean | UserDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["resetToken"]
  >;

  export type ResetTokenSelectScalar = {
    id?: boolean;
    token?: boolean;
    userId?: boolean;
    expiresAt?: boolean;
  };

  export type ResetTokenOmit<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = runtime.Types.Extensions.GetOmit<
    "id" | "token" | "userId" | "expiresAt",
    ExtArgs["result"]["resetToken"]
  >;
  export type ResetTokenInclude<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ResetTokenIncludeCreateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };
  export type ResetTokenIncludeUpdateManyAndReturn<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    user?: boolean | UserDefaultArgs<ExtArgs>;
  };

  export type $ResetTokenPayload<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    name: "ResetToken";
    objects: {
      user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<
      {
        id: number;
        token: string;
        userId: number;
        expiresAt: Date;
      },
      ExtArgs["result"]["resetToken"]
    >;
    composites: {};
  };

  export type ResetTokenGetPayload<
    S extends boolean | null | undefined | ResetTokenDefaultArgs
  > = runtime.Types.Result.GetResult<Prisma.$ResetTokenPayload, S>;

  export type ResetTokenCountArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = Omit<
    ResetTokenFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: ResetTokenCountAggregateInputType | true;
  };

  export interface ResetTokenDelegate<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["ResetToken"];
      meta: { name: "ResetToken" };
    };
    /**
     * Find zero or one ResetToken that matches the filter.
     * @param {ResetTokenFindUniqueArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResetTokenFindUniqueArgs>(
      args: SelectSubset<T, ResetTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__ResetTokenClient<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one ResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResetTokenFindUniqueOrThrowArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResetTokenFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ResetTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ResetTokenClient<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindFirstArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResetTokenFindFirstArgs>(
      args?: SelectSubset<T, ResetTokenFindFirstArgs<ExtArgs>>
    ): Prisma__ResetTokenClient<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first ResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindFirstOrThrowArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResetTokenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ResetTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ResetTokenClient<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more ResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResetTokens
     * const resetTokens = await prisma.resetToken.findMany()
     *
     * // Get first 10 ResetTokens
     * const resetTokens = await prisma.resetToken.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const resetTokenWithIdOnly = await prisma.resetToken.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ResetTokenFindManyArgs>(
      args?: SelectSubset<T, ResetTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a ResetToken.
     * @param {ResetTokenCreateArgs} args - Arguments to create a ResetToken.
     * @example
     * // Create one ResetToken
     * const ResetToken = await prisma.resetToken.create({
     *   data: {
     *     // ... data to create a ResetToken
     *   }
     * })
     *
     */
    create<T extends ResetTokenCreateArgs>(
      args: SelectSubset<T, ResetTokenCreateArgs<ExtArgs>>
    ): Prisma__ResetTokenClient<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many ResetTokens.
     * @param {ResetTokenCreateManyArgs} args - Arguments to create many ResetTokens.
     * @example
     * // Create many ResetTokens
     * const resetToken = await prisma.resetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ResetTokenCreateManyArgs>(
      args?: SelectSubset<T, ResetTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many ResetTokens and returns the data saved in the database.
     * @param {ResetTokenCreateManyAndReturnArgs} args - Arguments to create many ResetTokens.
     * @example
     * // Create many ResetTokens
     * const resetToken = await prisma.resetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many ResetTokens and only return the `id`
     * const resetTokenWithIdOnly = await prisma.resetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends ResetTokenCreateManyAndReturnArgs>(
      args?: SelectSubset<T, ResetTokenCreateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a ResetToken.
     * @param {ResetTokenDeleteArgs} args - Arguments to delete one ResetToken.
     * @example
     * // Delete one ResetToken
     * const ResetToken = await prisma.resetToken.delete({
     *   where: {
     *     // ... filter to delete one ResetToken
     *   }
     * })
     *
     */
    delete<T extends ResetTokenDeleteArgs>(
      args: SelectSubset<T, ResetTokenDeleteArgs<ExtArgs>>
    ): Prisma__ResetTokenClient<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one ResetToken.
     * @param {ResetTokenUpdateArgs} args - Arguments to update one ResetToken.
     * @example
     * // Update one ResetToken
     * const resetToken = await prisma.resetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ResetTokenUpdateArgs>(
      args: SelectSubset<T, ResetTokenUpdateArgs<ExtArgs>>
    ): Prisma__ResetTokenClient<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more ResetTokens.
     * @param {ResetTokenDeleteManyArgs} args - Arguments to filter ResetTokens to delete.
     * @example
     * // Delete a few ResetTokens
     * const { count } = await prisma.resetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ResetTokenDeleteManyArgs>(
      args?: SelectSubset<T, ResetTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResetTokens
     * const resetToken = await prisma.resetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ResetTokenUpdateManyArgs>(
      args: SelectSubset<T, ResetTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more ResetTokens and returns the data updated in the database.
     * @param {ResetTokenUpdateManyAndReturnArgs} args - Arguments to update many ResetTokens.
     * @example
     * // Update many ResetTokens
     * const resetToken = await prisma.resetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more ResetTokens and only return the `id`
     * const resetTokenWithIdOnly = await prisma.resetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends ResetTokenUpdateManyAndReturnArgs>(
      args: SelectSubset<T, ResetTokenUpdateManyAndReturnArgs<ExtArgs>>
    ): Prisma.PrismaPromise<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one ResetToken.
     * @param {ResetTokenUpsertArgs} args - Arguments to update or create a ResetToken.
     * @example
     * // Update or create a ResetToken
     * const resetToken = await prisma.resetToken.upsert({
     *   create: {
     *     // ... data to create a ResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResetToken we want to update
     *   }
     * })
     */
    upsert<T extends ResetTokenUpsertArgs>(
      args: SelectSubset<T, ResetTokenUpsertArgs<ExtArgs>>
    ): Prisma__ResetTokenClient<
      runtime.Types.Result.GetResult<
        Prisma.$ResetTokenPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of ResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenCountArgs} args - Arguments to filter ResetTokens to count.
     * @example
     * // Count the number of ResetTokens
     * const count = await prisma.resetToken.count({
     *   where: {
     *     // ... the filter for the ResetTokens we want to count
     *   }
     * })
     **/
    count<T extends ResetTokenCountArgs>(
      args?: Subset<T, ResetTokenCountArgs>
    ): Prisma.PrismaPromise<
      T extends runtime.Types.Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ResetTokenCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a ResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ResetTokenAggregateArgs>(
      args: Subset<T, ResetTokenAggregateArgs>
    ): Prisma.PrismaPromise<GetResetTokenAggregateType<T>>;

    /**
     * Group by ResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResetTokenGroupByArgs["orderBy"] }
        : { orderBy?: ResetTokenGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, ResetTokenGroupByArgs, OrderByArg> &
        InputErrors
    ): {} extends InputErrors
      ? GetResetTokenGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the ResetToken model
     */
    readonly fields: ResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResetTokenClient<
    T,
    Null = never,
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
    GlobalOmitOptions = {}
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends UserDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, UserDefaultArgs<ExtArgs>>
    ): Prisma__UserClient<
      | runtime.Types.Result.GetResult<
          Prisma.$UserPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(
      onfinally?: (() => void) | undefined | null
    ): runtime.Types.Utils.JsPromise<T>;
  }

  /**
   * Fields of the ResetToken model
   */
  export interface ResetTokenFieldRefs {
    readonly id: FieldRef<"ResetToken", "Int">;
    readonly token: FieldRef<"ResetToken", "String">;
    readonly userId: FieldRef<"ResetToken", "Int">;
    readonly expiresAt: FieldRef<"ResetToken", "DateTime">;
  }

  // Custom InputTypes
  /**
   * ResetToken findUnique
   */
  export type ResetTokenFindUniqueArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ResetToken to fetch.
     */
    where: ResetTokenWhereUniqueInput;
  };

  /**
   * ResetToken findUniqueOrThrow
   */
  export type ResetTokenFindUniqueOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ResetToken to fetch.
     */
    where: ResetTokenWhereUniqueInput;
  };

  /**
   * ResetToken findFirst
   */
  export type ResetTokenFindFirstArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ResetToken to fetch.
     */
    where?: ResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?:
      | ResetTokenOrderByWithRelationInput
      | ResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ResetTokens.
     */
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[];
  };

  /**
   * ResetToken findFirstOrThrow
   */
  export type ResetTokenFindFirstOrThrowArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ResetToken to fetch.
     */
    where?: ResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?:
      | ResetTokenOrderByWithRelationInput
      | ResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ResetTokens.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of ResetTokens.
     */
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[];
  };

  /**
   * ResetToken findMany
   */
  export type ResetTokenFindManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * Filter, which ResetTokens to fetch.
     */
    where?: ResetTokenWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?:
      | ResetTokenOrderByWithRelationInput
      | ResetTokenOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` ResetTokens.
     */
    skip?: number;
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[];
  };

  /**
   * ResetToken create
   */
  export type ResetTokenCreateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * The data needed to create a ResetToken.
     */
    data: XOR<ResetTokenCreateInput, ResetTokenUncheckedCreateInput>;
  };

  /**
   * ResetToken createMany
   */
  export type ResetTokenCreateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to create many ResetTokens.
     */
    data: ResetTokenCreateManyInput | ResetTokenCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * ResetToken createManyAndReturn
   */
  export type ResetTokenCreateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * The data used to create many ResetTokens.
     */
    data: ResetTokenCreateManyInput | ResetTokenCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ResetToken update
   */
  export type ResetTokenUpdateArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * The data needed to update a ResetToken.
     */
    data: XOR<ResetTokenUpdateInput, ResetTokenUncheckedUpdateInput>;
    /**
     * Choose, which ResetToken to update.
     */
    where: ResetTokenWhereUniqueInput;
  };

  /**
   * ResetToken updateMany
   */
  export type ResetTokenUpdateManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * The data used to update ResetTokens.
     */
    data: XOR<
      ResetTokenUpdateManyMutationInput,
      ResetTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which ResetTokens to update
     */
    where?: ResetTokenWhereInput;
    /**
     * Limit how many ResetTokens to update.
     */
    limit?: number;
  };

  /**
   * ResetToken updateManyAndReturn
   */
  export type ResetTokenUpdateManyAndReturnArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * The data used to update ResetTokens.
     */
    data: XOR<
      ResetTokenUpdateManyMutationInput,
      ResetTokenUncheckedUpdateManyInput
    >;
    /**
     * Filter which ResetTokens to update
     */
    where?: ResetTokenWhereInput;
    /**
     * Limit how many ResetTokens to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * ResetToken upsert
   */
  export type ResetTokenUpsertArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * The filter to search for the ResetToken to update in case it exists.
     */
    where: ResetTokenWhereUniqueInput;
    /**
     * In case the ResetToken found by the `where` argument doesn't exist, create a new ResetToken with this data.
     */
    create: XOR<ResetTokenCreateInput, ResetTokenUncheckedCreateInput>;
    /**
     * In case the ResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResetTokenUpdateInput, ResetTokenUncheckedUpdateInput>;
  };

  /**
   * ResetToken delete
   */
  export type ResetTokenDeleteArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
    /**
     * Filter which ResetToken to delete.
     */
    where: ResetTokenWhereUniqueInput;
  };

  /**
   * ResetToken deleteMany
   */
  export type ResetTokenDeleteManyArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Filter which ResetTokens to delete
     */
    where?: ResetTokenWhereInput;
    /**
     * Limit how many ResetTokens to delete.
     */
    limit?: number;
  };

  /**
   * ResetToken without action
   */
  export type ResetTokenDefaultArgs<
    ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs
  > = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: "ReadUncommitted",
    ReadCommitted: "ReadCommitted",
    RepeatableRead: "RepeatableRead",
    Serializable: "Serializable",
  } as const);

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const UserScalarFieldEnum = {
    id: "id",
    email: "email",
    name: "name",
    passwordHash: "passwordHash",
    created_at: "created_at",
  } as const;

  export type UserScalarFieldEnum =
    (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const FileScalarFieldEnum = {
    id: "id",
    url: "url",
    filename: "filename",
    mimetype: "mimetype",
    size: "size",
    uploadedAt: "uploadedAt",
  } as const;

  export type FileScalarFieldEnum =
    (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum];

  export const PostScalarFieldEnum = {
    id: "id",
    title: "title",
    content: "content",
    published: "published",
    created_at: "created_at",
    authorId: "authorId",
    featuredImageId: "featuredImageId",
  } as const;

  export type PostScalarFieldEnum =
    (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum];

  export const TagScalarFieldEnum = {
    id: "id",
    name: "name",
    slug: "slug",
  } as const;

  export type TagScalarFieldEnum =
    (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];

  export const ResetTokenScalarFieldEnum = {
    id: "id",
    token: "token",
    userId: "userId",
    expiresAt: "expiresAt",
  } as const;

  export type ResetTokenScalarFieldEnum =
    (typeof ResetTokenScalarFieldEnum)[keyof typeof ResetTokenScalarFieldEnum];

  export const SortOrder = {
    asc: "asc",
    desc: "desc",
  } as const;

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode = {
    default: "default",
    insensitive: "insensitive",
  } as const;

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder = {
    first: "first",
    last: "last",
  } as const;

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int[]"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String[]"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime[]"
  >;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Boolean"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float[]"
  >;

  /**
   * Deep Input Types
   */

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[];
    OR?: UserWhereInput[];
    NOT?: UserWhereInput | UserWhereInput[];
    id?: IntFilter<"User"> | number;
    email?: StringFilter<"User"> | string;
    name?: StringFilter<"User"> | string;
    passwordHash?: StringFilter<"User"> | string;
    created_at?: DateTimeFilter<"User"> | Date | string;
    posts?: PostListRelationFilter;
    resetTokens?: ResetTokenListRelationFilter;
  };

  export type UserOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    passwordHash?: SortOrder;
    created_at?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
    resetTokens?: ResetTokenOrderByRelationAggregateInput;
  };

  export type UserWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      email?: string;
      AND?: UserWhereInput | UserWhereInput[];
      OR?: UserWhereInput[];
      NOT?: UserWhereInput | UserWhereInput[];
      name?: StringFilter<"User"> | string;
      passwordHash?: StringFilter<"User"> | string;
      created_at?: DateTimeFilter<"User"> | Date | string;
      posts?: PostListRelationFilter;
      resetTokens?: ResetTokenListRelationFilter;
    },
    "id" | "email"
  >;

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    passwordHash?: SortOrder;
    created_at?: SortOrder;
    _count?: UserCountOrderByAggregateInput;
    _avg?: UserAvgOrderByAggregateInput;
    _max?: UserMaxOrderByAggregateInput;
    _min?: UserMinOrderByAggregateInput;
    _sum?: UserSumOrderByAggregateInput;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    OR?: UserScalarWhereWithAggregatesInput[];
    NOT?:
      | UserScalarWhereWithAggregatesInput
      | UserScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"User"> | number;
    email?: StringWithAggregatesFilter<"User"> | string;
    name?: StringWithAggregatesFilter<"User"> | string;
    passwordHash?: StringWithAggregatesFilter<"User"> | string;
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string;
  };

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[];
    OR?: FileWhereInput[];
    NOT?: FileWhereInput | FileWhereInput[];
    id?: StringFilter<"File"> | string;
    url?: StringFilter<"File"> | string;
    filename?: StringFilter<"File"> | string;
    mimetype?: StringFilter<"File"> | string;
    size?: IntFilter<"File"> | number;
    uploadedAt?: DateTimeFilter<"File"> | Date | string;
    posts?: PostListRelationFilter;
  };

  export type FileOrderByWithRelationInput = {
    id?: SortOrder;
    url?: SortOrder;
    filename?: SortOrder;
    mimetype?: SortOrder;
    size?: SortOrder;
    uploadedAt?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
  };

  export type FileWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: FileWhereInput | FileWhereInput[];
      OR?: FileWhereInput[];
      NOT?: FileWhereInput | FileWhereInput[];
      url?: StringFilter<"File"> | string;
      filename?: StringFilter<"File"> | string;
      mimetype?: StringFilter<"File"> | string;
      size?: IntFilter<"File"> | number;
      uploadedAt?: DateTimeFilter<"File"> | Date | string;
      posts?: PostListRelationFilter;
    },
    "id"
  >;

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder;
    url?: SortOrder;
    filename?: SortOrder;
    mimetype?: SortOrder;
    size?: SortOrder;
    uploadedAt?: SortOrder;
    _count?: FileCountOrderByAggregateInput;
    _avg?: FileAvgOrderByAggregateInput;
    _max?: FileMaxOrderByAggregateInput;
    _min?: FileMinOrderByAggregateInput;
    _sum?: FileSumOrderByAggregateInput;
  };

  export type FileScalarWhereWithAggregatesInput = {
    AND?:
      | FileScalarWhereWithAggregatesInput
      | FileScalarWhereWithAggregatesInput[];
    OR?: FileScalarWhereWithAggregatesInput[];
    NOT?:
      | FileScalarWhereWithAggregatesInput
      | FileScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"File"> | string;
    url?: StringWithAggregatesFilter<"File"> | string;
    filename?: StringWithAggregatesFilter<"File"> | string;
    mimetype?: StringWithAggregatesFilter<"File"> | string;
    size?: IntWithAggregatesFilter<"File"> | number;
    uploadedAt?: DateTimeWithAggregatesFilter<"File"> | Date | string;
  };

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[];
    OR?: PostWhereInput[];
    NOT?: PostWhereInput | PostWhereInput[];
    id?: IntFilter<"Post"> | number;
    title?: StringFilter<"Post"> | string;
    content?: StringNullableFilter<"Post"> | string | null;
    published?: BoolFilter<"Post"> | boolean;
    created_at?: DateTimeFilter<"Post"> | Date | string;
    authorId?: IntFilter<"Post"> | number;
    featuredImageId?: StringNullableFilter<"Post"> | string | null;
    author?: XOR<UserScalarRelationFilter, UserWhereInput>;
    tags?: TagListRelationFilter;
    featuredImage?: XOR<
      FileNullableScalarRelationFilter,
      FileWhereInput
    > | null;
  };

  export type PostOrderByWithRelationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrderInput | SortOrder;
    published?: SortOrder;
    created_at?: SortOrder;
    authorId?: SortOrder;
    featuredImageId?: SortOrderInput | SortOrder;
    author?: UserOrderByWithRelationInput;
    tags?: TagOrderByRelationAggregateInput;
    featuredImage?: FileOrderByWithRelationInput;
  };

  export type PostWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: PostWhereInput | PostWhereInput[];
      OR?: PostWhereInput[];
      NOT?: PostWhereInput | PostWhereInput[];
      title?: StringFilter<"Post"> | string;
      content?: StringNullableFilter<"Post"> | string | null;
      published?: BoolFilter<"Post"> | boolean;
      created_at?: DateTimeFilter<"Post"> | Date | string;
      authorId?: IntFilter<"Post"> | number;
      featuredImageId?: StringNullableFilter<"Post"> | string | null;
      author?: XOR<UserScalarRelationFilter, UserWhereInput>;
      tags?: TagListRelationFilter;
      featuredImage?: XOR<
        FileNullableScalarRelationFilter,
        FileWhereInput
      > | null;
    },
    "id"
  >;

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrderInput | SortOrder;
    published?: SortOrder;
    created_at?: SortOrder;
    authorId?: SortOrder;
    featuredImageId?: SortOrderInput | SortOrder;
    _count?: PostCountOrderByAggregateInput;
    _avg?: PostAvgOrderByAggregateInput;
    _max?: PostMaxOrderByAggregateInput;
    _min?: PostMinOrderByAggregateInput;
    _sum?: PostSumOrderByAggregateInput;
  };

  export type PostScalarWhereWithAggregatesInput = {
    AND?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    OR?: PostScalarWhereWithAggregatesInput[];
    NOT?:
      | PostScalarWhereWithAggregatesInput
      | PostScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Post"> | number;
    title?: StringWithAggregatesFilter<"Post"> | string;
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null;
    published?: BoolWithAggregatesFilter<"Post"> | boolean;
    created_at?: DateTimeWithAggregatesFilter<"Post"> | Date | string;
    authorId?: IntWithAggregatesFilter<"Post"> | number;
    featuredImageId?:
      | StringNullableWithAggregatesFilter<"Post">
      | string
      | null;
  };

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[];
    OR?: TagWhereInput[];
    NOT?: TagWhereInput | TagWhereInput[];
    id?: IntFilter<"Tag"> | number;
    name?: StringFilter<"Tag"> | string;
    slug?: StringFilter<"Tag"> | string;
    posts?: PostListRelationFilter;
  };

  export type TagOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    posts?: PostOrderByRelationAggregateInput;
  };

  export type TagWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      slug?: string;
      AND?: TagWhereInput | TagWhereInput[];
      OR?: TagWhereInput[];
      NOT?: TagWhereInput | TagWhereInput[];
      name?: StringFilter<"Tag"> | string;
      posts?: PostListRelationFilter;
    },
    "id" | "slug"
  >;

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    _count?: TagCountOrderByAggregateInput;
    _avg?: TagAvgOrderByAggregateInput;
    _max?: TagMaxOrderByAggregateInput;
    _min?: TagMinOrderByAggregateInput;
    _sum?: TagSumOrderByAggregateInput;
  };

  export type TagScalarWhereWithAggregatesInput = {
    AND?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    OR?: TagScalarWhereWithAggregatesInput[];
    NOT?:
      | TagScalarWhereWithAggregatesInput
      | TagScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Tag"> | number;
    name?: StringWithAggregatesFilter<"Tag"> | string;
    slug?: StringWithAggregatesFilter<"Tag"> | string;
  };

  export type ResetTokenWhereInput = {
    AND?: ResetTokenWhereInput | ResetTokenWhereInput[];
    OR?: ResetTokenWhereInput[];
    NOT?: ResetTokenWhereInput | ResetTokenWhereInput[];
    id?: IntFilter<"ResetToken"> | number;
    token?: StringFilter<"ResetToken"> | string;
    userId?: IntFilter<"ResetToken"> | number;
    expiresAt?: DateTimeFilter<"ResetToken"> | Date | string;
    user?: XOR<UserScalarRelationFilter, UserWhereInput>;
  };

  export type ResetTokenOrderByWithRelationInput = {
    id?: SortOrder;
    token?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
    user?: UserOrderByWithRelationInput;
  };

  export type ResetTokenWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      token?: string;
      userId?: number;
      AND?: ResetTokenWhereInput | ResetTokenWhereInput[];
      OR?: ResetTokenWhereInput[];
      NOT?: ResetTokenWhereInput | ResetTokenWhereInput[];
      expiresAt?: DateTimeFilter<"ResetToken"> | Date | string;
      user?: XOR<UserScalarRelationFilter, UserWhereInput>;
    },
    "id" | "token" | "userId"
  >;

  export type ResetTokenOrderByWithAggregationInput = {
    id?: SortOrder;
    token?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
    _count?: ResetTokenCountOrderByAggregateInput;
    _avg?: ResetTokenAvgOrderByAggregateInput;
    _max?: ResetTokenMaxOrderByAggregateInput;
    _min?: ResetTokenMinOrderByAggregateInput;
    _sum?: ResetTokenSumOrderByAggregateInput;
  };

  export type ResetTokenScalarWhereWithAggregatesInput = {
    AND?:
      | ResetTokenScalarWhereWithAggregatesInput
      | ResetTokenScalarWhereWithAggregatesInput[];
    OR?: ResetTokenScalarWhereWithAggregatesInput[];
    NOT?:
      | ResetTokenScalarWhereWithAggregatesInput
      | ResetTokenScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"ResetToken"> | number;
    token?: StringWithAggregatesFilter<"ResetToken"> | string;
    userId?: IntWithAggregatesFilter<"ResetToken"> | number;
    expiresAt?: DateTimeWithAggregatesFilter<"ResetToken"> | Date | string;
  };

  export type UserCreateInput = {
    email: string;
    name: string;
    passwordHash: string;
    created_at?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
    resetTokens?: ResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateInput = {
    id?: number;
    email: string;
    name: string;
    passwordHash: string;
    created_at?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
    resetTokens?: ResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type UserCreateManyInput = {
    id?: number;
    email: string;
    name: string;
    passwordHash: string;
    created_at?: Date | string;
  };

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FileCreateInput = {
    id: string;
    url: string;
    filename: string;
    mimetype: string;
    size: number;
    uploadedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutFeaturedImageInput;
  };

  export type FileUncheckedCreateInput = {
    id: string;
    url: string;
    filename: string;
    mimetype: string;
    size: number;
    uploadedAt?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutFeaturedImageInput;
  };

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    filename?: StringFieldUpdateOperationsInput | string;
    mimetype?: StringFieldUpdateOperationsInput | string;
    size?: IntFieldUpdateOperationsInput | number;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutFeaturedImageNestedInput;
  };

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    filename?: StringFieldUpdateOperationsInput | string;
    mimetype?: StringFieldUpdateOperationsInput | string;
    size?: IntFieldUpdateOperationsInput | number;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutFeaturedImageNestedInput;
  };

  export type FileCreateManyInput = {
    id: string;
    url: string;
    filename: string;
    mimetype: string;
    size: number;
    uploadedAt?: Date | string;
  };

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    filename?: StringFieldUpdateOperationsInput | string;
    mimetype?: StringFieldUpdateOperationsInput | string;
    size?: IntFieldUpdateOperationsInput | number;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    filename?: StringFieldUpdateOperationsInput | string;
    mimetype?: StringFieldUpdateOperationsInput | string;
    size?: IntFieldUpdateOperationsInput | number;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostCreateInput = {
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    tags?: TagCreateNestedManyWithoutPostsInput;
    featuredImage?: FileCreateNestedOneWithoutPostsInput;
  };

  export type PostUncheckedCreateInput = {
    id?: number;
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    authorId: number;
    featuredImageId?: string | null;
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput;
  };

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    tags?: TagUpdateManyWithoutPostsNestedInput;
    featuredImage?: FileUpdateOneWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    featuredImageId?: NullableStringFieldUpdateOperationsInput | string | null;
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput;
  };

  export type PostCreateManyInput = {
    id?: number;
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    authorId: number;
    featuredImageId?: string | null;
  };

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    featuredImageId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type TagCreateInput = {
    name: string;
    slug: string;
    posts?: PostCreateNestedManyWithoutTagsInput;
  };

  export type TagUncheckedCreateInput = {
    id?: number;
    name: string;
    slug: string;
    posts?: PostUncheckedCreateNestedManyWithoutTagsInput;
  };

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    posts?: PostUpdateManyWithoutTagsNestedInput;
  };

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    posts?: PostUncheckedUpdateManyWithoutTagsNestedInput;
  };

  export type TagCreateManyInput = {
    id?: number;
    name: string;
    slug: string;
  };

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type ResetTokenCreateInput = {
    token: string;
    expiresAt: Date | string;
    user: UserCreateNestedOneWithoutResetTokensInput;
  };

  export type ResetTokenUncheckedCreateInput = {
    id?: number;
    token: string;
    userId: number;
    expiresAt: Date | string;
  };

  export type ResetTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: UserUpdateOneRequiredWithoutResetTokensNestedInput;
  };

  export type ResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    token?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResetTokenCreateManyInput = {
    id?: number;
    token: string;
    userId: number;
    expiresAt: Date | string;
  };

  export type ResetTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    token?: StringFieldUpdateOperationsInput | string;
    userId?: IntFieldUpdateOperationsInput | number;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
  };

  export type ResetTokenListRelationFilter = {
    every?: ResetTokenWhereInput;
    some?: ResetTokenWhereInput;
    none?: ResetTokenWhereInput;
  };

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    passwordHash?: SortOrder;
    created_at?: SortOrder;
  };

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    passwordHash?: SortOrder;
    created_at?: SortOrder;
  };

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    passwordHash?: SortOrder;
    created_at?: SortOrder;
  };

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    filename?: SortOrder;
    mimetype?: SortOrder;
    size?: SortOrder;
    uploadedAt?: SortOrder;
  };

  export type FileAvgOrderByAggregateInput = {
    size?: SortOrder;
  };

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    filename?: SortOrder;
    mimetype?: SortOrder;
    size?: SortOrder;
    uploadedAt?: SortOrder;
  };

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder;
    url?: SortOrder;
    filename?: SortOrder;
    mimetype?: SortOrder;
    size?: SortOrder;
    uploadedAt?: SortOrder;
  };

  export type FileSumOrderByAggregateInput = {
    size?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type UserScalarRelationFilter = {
    is?: UserWhereInput;
    isNot?: UserWhereInput;
  };

  export type TagListRelationFilter = {
    every?: TagWhereInput;
    some?: TagWhereInput;
    none?: TagWhereInput;
  };

  export type FileNullableScalarRelationFilter = {
    is?: FileWhereInput | null;
    isNot?: FileWhereInput | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    created_at?: SortOrder;
    authorId?: SortOrder;
    featuredImageId?: SortOrder;
  };

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
  };

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    created_at?: SortOrder;
    authorId?: SortOrder;
    featuredImageId?: SortOrder;
  };

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder;
    title?: SortOrder;
    content?: SortOrder;
    published?: SortOrder;
    created_at?: SortOrder;
    authorId?: SortOrder;
    featuredImageId?: SortOrder;
  };

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder;
    authorId?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
  };

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
  };

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
  };

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type ResetTokenCountOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type ResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type ResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type ResetTokenMinOrderByAggregateInput = {
    id?: SortOrder;
    token?: SortOrder;
    userId?: SortOrder;
    expiresAt?: SortOrder;
  };

  export type ResetTokenSumOrderByAggregateInput = {
    id?: SortOrder;
    userId?: SortOrder;
  };

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type ResetTokenCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ResetTokenCreateWithoutUserInput,
          ResetTokenUncheckedCreateWithoutUserInput
        >
      | ResetTokenCreateWithoutUserInput[]
      | ResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ResetTokenCreateOrConnectWithoutUserInput
      | ResetTokenCreateOrConnectWithoutUserInput[];
    createMany?: ResetTokenCreateManyUserInputEnvelope;
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type ResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<
          ResetTokenCreateWithoutUserInput,
          ResetTokenUncheckedCreateWithoutUserInput
        >
      | ResetTokenCreateWithoutUserInput[]
      | ResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ResetTokenCreateOrConnectWithoutUserInput
      | ResetTokenCreateOrConnectWithoutUserInput[];
    createMany?: ResetTokenCreateManyUserInputEnvelope;
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type ResetTokenUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ResetTokenCreateWithoutUserInput,
          ResetTokenUncheckedCreateWithoutUserInput
        >
      | ResetTokenCreateWithoutUserInput[]
      | ResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ResetTokenCreateOrConnectWithoutUserInput
      | ResetTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | ResetTokenUpsertWithWhereUniqueWithoutUserInput
      | ResetTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ResetTokenCreateManyUserInputEnvelope;
    set?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
    disconnect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
    delete?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
    update?:
      | ResetTokenUpdateWithWhereUniqueWithoutUserInput
      | ResetTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ResetTokenUpdateManyWithWhereWithoutUserInput
      | ResetTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?:
      | XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
      | PostCreateWithoutAuthorInput[]
      | PostUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutAuthorInput
      | PostCreateOrConnectWithoutAuthorInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutAuthorInput
      | PostUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: PostCreateManyAuthorInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutAuthorInput
      | PostUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutAuthorInput
      | PostUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type ResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<
          ResetTokenCreateWithoutUserInput,
          ResetTokenUncheckedCreateWithoutUserInput
        >
      | ResetTokenCreateWithoutUserInput[]
      | ResetTokenUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | ResetTokenCreateOrConnectWithoutUserInput
      | ResetTokenCreateOrConnectWithoutUserInput[];
    upsert?:
      | ResetTokenUpsertWithWhereUniqueWithoutUserInput
      | ResetTokenUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: ResetTokenCreateManyUserInputEnvelope;
    set?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
    disconnect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
    delete?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[];
    update?:
      | ResetTokenUpdateWithWhereUniqueWithoutUserInput
      | ResetTokenUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | ResetTokenUpdateManyWithWhereWithoutUserInput
      | ResetTokenUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[];
  };

  export type PostCreateNestedManyWithoutFeaturedImageInput = {
    create?:
      | XOR<
          PostCreateWithoutFeaturedImageInput,
          PostUncheckedCreateWithoutFeaturedImageInput
        >
      | PostCreateWithoutFeaturedImageInput[]
      | PostUncheckedCreateWithoutFeaturedImageInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutFeaturedImageInput
      | PostCreateOrConnectWithoutFeaturedImageInput[];
    createMany?: PostCreateManyFeaturedImageInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutFeaturedImageInput = {
    create?:
      | XOR<
          PostCreateWithoutFeaturedImageInput,
          PostUncheckedCreateWithoutFeaturedImageInput
        >
      | PostCreateWithoutFeaturedImageInput[]
      | PostUncheckedCreateWithoutFeaturedImageInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutFeaturedImageInput
      | PostCreateOrConnectWithoutFeaturedImageInput[];
    createMany?: PostCreateManyFeaturedImageInputEnvelope;
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type PostUpdateManyWithoutFeaturedImageNestedInput = {
    create?:
      | XOR<
          PostCreateWithoutFeaturedImageInput,
          PostUncheckedCreateWithoutFeaturedImageInput
        >
      | PostCreateWithoutFeaturedImageInput[]
      | PostUncheckedCreateWithoutFeaturedImageInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutFeaturedImageInput
      | PostCreateOrConnectWithoutFeaturedImageInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutFeaturedImageInput
      | PostUpsertWithWhereUniqueWithoutFeaturedImageInput[];
    createMany?: PostCreateManyFeaturedImageInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutFeaturedImageInput
      | PostUpdateWithWhereUniqueWithoutFeaturedImageInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutFeaturedImageInput
      | PostUpdateManyWithWhereWithoutFeaturedImageInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type PostUncheckedUpdateManyWithoutFeaturedImageNestedInput = {
    create?:
      | XOR<
          PostCreateWithoutFeaturedImageInput,
          PostUncheckedCreateWithoutFeaturedImageInput
        >
      | PostCreateWithoutFeaturedImageInput[]
      | PostUncheckedCreateWithoutFeaturedImageInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutFeaturedImageInput
      | PostCreateOrConnectWithoutFeaturedImageInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutFeaturedImageInput
      | PostUpsertWithWhereUniqueWithoutFeaturedImageInput[];
    createMany?: PostCreateManyFeaturedImageInputEnvelope;
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutFeaturedImageInput
      | PostUpdateWithWhereUniqueWithoutFeaturedImageInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutFeaturedImageInput
      | PostUpdateManyWithWhereWithoutFeaturedImageInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    connect?: UserWhereUniqueInput;
  };

  export type TagCreateNestedManyWithoutPostsInput = {
    create?:
      | XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
      | TagCreateWithoutPostsInput[]
      | TagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutPostsInput
      | TagCreateOrConnectWithoutPostsInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type FileCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      FileCreateWithoutPostsInput,
      FileUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: FileCreateOrConnectWithoutPostsInput;
    connect?: FileWhereUniqueInput;
  };

  export type TagUncheckedCreateNestedManyWithoutPostsInput = {
    create?:
      | XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
      | TagCreateWithoutPostsInput[]
      | TagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutPostsInput
      | TagCreateOrConnectWithoutPostsInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput;
    upsert?: UserUpsertWithoutPostsInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutPostsInput,
        UserUpdateWithoutPostsInput
      >,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type TagUpdateManyWithoutPostsNestedInput = {
    create?:
      | XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
      | TagCreateWithoutPostsInput[]
      | TagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutPostsInput
      | TagCreateOrConnectWithoutPostsInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutPostsInput
      | TagUpsertWithWhereUniqueWithoutPostsInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutPostsInput
      | TagUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutPostsInput
      | TagUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type FileUpdateOneWithoutPostsNestedInput = {
    create?: XOR<
      FileCreateWithoutPostsInput,
      FileUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: FileCreateOrConnectWithoutPostsInput;
    upsert?: FileUpsertWithoutPostsInput;
    disconnect?: FileWhereInput | boolean;
    delete?: FileWhereInput | boolean;
    connect?: FileWhereUniqueInput;
    update?: XOR<
      XOR<
        FileUpdateToOneWithWhereWithoutPostsInput,
        FileUpdateWithoutPostsInput
      >,
      FileUncheckedUpdateWithoutPostsInput
    >;
  };

  export type TagUncheckedUpdateManyWithoutPostsNestedInput = {
    create?:
      | XOR<TagCreateWithoutPostsInput, TagUncheckedCreateWithoutPostsInput>
      | TagCreateWithoutPostsInput[]
      | TagUncheckedCreateWithoutPostsInput[];
    connectOrCreate?:
      | TagCreateOrConnectWithoutPostsInput
      | TagCreateOrConnectWithoutPostsInput[];
    upsert?:
      | TagUpsertWithWhereUniqueWithoutPostsInput
      | TagUpsertWithWhereUniqueWithoutPostsInput[];
    set?: TagWhereUniqueInput | TagWhereUniqueInput[];
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[];
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[];
    update?:
      | TagUpdateWithWhereUniqueWithoutPostsInput
      | TagUpdateWithWhereUniqueWithoutPostsInput[];
    updateMany?:
      | TagUpdateManyWithWhereWithoutPostsInput
      | TagUpdateManyWithWhereWithoutPostsInput[];
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[];
  };

  export type PostCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
      | PostCreateWithoutTagsInput[]
      | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutTagsInput
      | PostCreateOrConnectWithoutTagsInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type PostUncheckedCreateNestedManyWithoutTagsInput = {
    create?:
      | XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
      | PostCreateWithoutTagsInput[]
      | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutTagsInput
      | PostCreateOrConnectWithoutTagsInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
  };

  export type PostUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
      | PostCreateWithoutTagsInput[]
      | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutTagsInput
      | PostCreateOrConnectWithoutTagsInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutTagsInput
      | PostUpsertWithWhereUniqueWithoutTagsInput[];
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutTagsInput
      | PostUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutTagsInput
      | PostUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type PostUncheckedUpdateManyWithoutTagsNestedInput = {
    create?:
      | XOR<PostCreateWithoutTagsInput, PostUncheckedCreateWithoutTagsInput>
      | PostCreateWithoutTagsInput[]
      | PostUncheckedCreateWithoutTagsInput[];
    connectOrCreate?:
      | PostCreateOrConnectWithoutTagsInput
      | PostCreateOrConnectWithoutTagsInput[];
    upsert?:
      | PostUpsertWithWhereUniqueWithoutTagsInput
      | PostUpsertWithWhereUniqueWithoutTagsInput[];
    set?: PostWhereUniqueInput | PostWhereUniqueInput[];
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[];
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[];
    update?:
      | PostUpdateWithWhereUniqueWithoutTagsInput
      | PostUpdateWithWhereUniqueWithoutTagsInput[];
    updateMany?:
      | PostUpdateManyWithWhereWithoutTagsInput
      | PostUpdateManyWithWhereWithoutTagsInput[];
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[];
  };

  export type UserCreateNestedOneWithoutResetTokensInput = {
    create?: XOR<
      UserCreateWithoutResetTokensInput,
      UserUncheckedCreateWithoutResetTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutResetTokensInput;
    connect?: UserWhereUniqueInput;
  };

  export type UserUpdateOneRequiredWithoutResetTokensNestedInput = {
    create?: XOR<
      UserCreateWithoutResetTokensInput,
      UserUncheckedCreateWithoutResetTokensInput
    >;
    connectOrCreate?: UserCreateOrConnectWithoutResetTokensInput;
    upsert?: UserUpsertWithoutResetTokensInput;
    connect?: UserWhereUniqueInput;
    update?: XOR<
      XOR<
        UserUpdateToOneWithWhereWithoutResetTokensInput,
        UserUpdateWithoutResetTokensInput
      >,
      UserUncheckedUpdateWithoutResetTokensInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?:
      | NestedStringNullableWithAggregatesFilter<$PrismaModel>
      | string
      | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type PostCreateWithoutAuthorInput = {
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    tags?: TagCreateNestedManyWithoutPostsInput;
    featuredImage?: FileCreateNestedOneWithoutPostsInput;
  };

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number;
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    featuredImageId?: string | null;
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput;
  };

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[];
    skipDuplicates?: boolean;
  };

  export type ResetTokenCreateWithoutUserInput = {
    token: string;
    expiresAt: Date | string;
  };

  export type ResetTokenUncheckedCreateWithoutUserInput = {
    id?: number;
    token: string;
    expiresAt: Date | string;
  };

  export type ResetTokenCreateOrConnectWithoutUserInput = {
    where: ResetTokenWhereUniqueInput;
    create: XOR<
      ResetTokenCreateWithoutUserInput,
      ResetTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type ResetTokenCreateManyUserInputEnvelope = {
    data: ResetTokenCreateManyUserInput | ResetTokenCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
    create: XOR<
      PostCreateWithoutAuthorInput,
      PostUncheckedCreateWithoutAuthorInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput;
    data: XOR<
      PostUpdateWithoutAuthorInput,
      PostUncheckedUpdateWithoutAuthorInput
    >;
  };

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutAuthorInput
    >;
  };

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[];
    OR?: PostScalarWhereInput[];
    NOT?: PostScalarWhereInput | PostScalarWhereInput[];
    id?: IntFilter<"Post"> | number;
    title?: StringFilter<"Post"> | string;
    content?: StringNullableFilter<"Post"> | string | null;
    published?: BoolFilter<"Post"> | boolean;
    created_at?: DateTimeFilter<"Post"> | Date | string;
    authorId?: IntFilter<"Post"> | number;
    featuredImageId?: StringNullableFilter<"Post"> | string | null;
  };

  export type ResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: ResetTokenWhereUniqueInput;
    update: XOR<
      ResetTokenUpdateWithoutUserInput,
      ResetTokenUncheckedUpdateWithoutUserInput
    >;
    create: XOR<
      ResetTokenCreateWithoutUserInput,
      ResetTokenUncheckedCreateWithoutUserInput
    >;
  };

  export type ResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: ResetTokenWhereUniqueInput;
    data: XOR<
      ResetTokenUpdateWithoutUserInput,
      ResetTokenUncheckedUpdateWithoutUserInput
    >;
  };

  export type ResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: ResetTokenScalarWhereInput;
    data: XOR<
      ResetTokenUpdateManyMutationInput,
      ResetTokenUncheckedUpdateManyWithoutUserInput
    >;
  };

  export type ResetTokenScalarWhereInput = {
    AND?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[];
    OR?: ResetTokenScalarWhereInput[];
    NOT?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[];
    id?: IntFilter<"ResetToken"> | number;
    token?: StringFilter<"ResetToken"> | string;
    userId?: IntFilter<"ResetToken"> | number;
    expiresAt?: DateTimeFilter<"ResetToken"> | Date | string;
  };

  export type PostCreateWithoutFeaturedImageInput = {
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    tags?: TagCreateNestedManyWithoutPostsInput;
  };

  export type PostUncheckedCreateWithoutFeaturedImageInput = {
    id?: number;
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    authorId: number;
    tags?: TagUncheckedCreateNestedManyWithoutPostsInput;
  };

  export type PostCreateOrConnectWithoutFeaturedImageInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutFeaturedImageInput,
      PostUncheckedCreateWithoutFeaturedImageInput
    >;
  };

  export type PostCreateManyFeaturedImageInputEnvelope = {
    data: PostCreateManyFeaturedImageInput | PostCreateManyFeaturedImageInput[];
    skipDuplicates?: boolean;
  };

  export type PostUpsertWithWhereUniqueWithoutFeaturedImageInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutFeaturedImageInput,
      PostUncheckedUpdateWithoutFeaturedImageInput
    >;
    create: XOR<
      PostCreateWithoutFeaturedImageInput,
      PostUncheckedCreateWithoutFeaturedImageInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutFeaturedImageInput = {
    where: PostWhereUniqueInput;
    data: XOR<
      PostUpdateWithoutFeaturedImageInput,
      PostUncheckedUpdateWithoutFeaturedImageInput
    >;
  };

  export type PostUpdateManyWithWhereWithoutFeaturedImageInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutFeaturedImageInput
    >;
  };

  export type UserCreateWithoutPostsInput = {
    email: string;
    name: string;
    passwordHash: string;
    created_at?: Date | string;
    resetTokens?: ResetTokenCreateNestedManyWithoutUserInput;
  };

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number;
    email: string;
    name: string;
    passwordHash: string;
    created_at?: Date | string;
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUserInput;
  };

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
  };

  export type TagCreateWithoutPostsInput = {
    name: string;
    slug: string;
  };

  export type TagUncheckedCreateWithoutPostsInput = {
    id?: number;
    name: string;
    slug: string;
  };

  export type TagCreateOrConnectWithoutPostsInput = {
    where: TagWhereUniqueInput;
    create: XOR<
      TagCreateWithoutPostsInput,
      TagUncheckedCreateWithoutPostsInput
    >;
  };

  export type FileCreateWithoutPostsInput = {
    id: string;
    url: string;
    filename: string;
    mimetype: string;
    size: number;
    uploadedAt?: Date | string;
  };

  export type FileUncheckedCreateWithoutPostsInput = {
    id: string;
    url: string;
    filename: string;
    mimetype: string;
    size: number;
    uploadedAt?: Date | string;
  };

  export type FileCreateOrConnectWithoutPostsInput = {
    where: FileWhereUniqueInput;
    create: XOR<
      FileCreateWithoutPostsInput,
      FileUncheckedCreateWithoutPostsInput
    >;
  };

  export type UserUpsertWithoutPostsInput = {
    update: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      UserCreateWithoutPostsInput,
      UserUncheckedCreateWithoutPostsInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutPostsInput,
      UserUncheckedUpdateWithoutPostsInput
    >;
  };

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    resetTokens?: ResetTokenUpdateManyWithoutUserNestedInput;
  };

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type TagUpsertWithWhereUniqueWithoutPostsInput = {
    where: TagWhereUniqueInput;
    update: XOR<
      TagUpdateWithoutPostsInput,
      TagUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      TagCreateWithoutPostsInput,
      TagUncheckedCreateWithoutPostsInput
    >;
  };

  export type TagUpdateWithWhereUniqueWithoutPostsInput = {
    where: TagWhereUniqueInput;
    data: XOR<TagUpdateWithoutPostsInput, TagUncheckedUpdateWithoutPostsInput>;
  };

  export type TagUpdateManyWithWhereWithoutPostsInput = {
    where: TagScalarWhereInput;
    data: XOR<
      TagUpdateManyMutationInput,
      TagUncheckedUpdateManyWithoutPostsInput
    >;
  };

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[];
    OR?: TagScalarWhereInput[];
    NOT?: TagScalarWhereInput | TagScalarWhereInput[];
    id?: IntFilter<"Tag"> | number;
    name?: StringFilter<"Tag"> | string;
    slug?: StringFilter<"Tag"> | string;
  };

  export type FileUpsertWithoutPostsInput = {
    update: XOR<
      FileUpdateWithoutPostsInput,
      FileUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      FileCreateWithoutPostsInput,
      FileUncheckedCreateWithoutPostsInput
    >;
    where?: FileWhereInput;
  };

  export type FileUpdateToOneWithWhereWithoutPostsInput = {
    where?: FileWhereInput;
    data: XOR<
      FileUpdateWithoutPostsInput,
      FileUncheckedUpdateWithoutPostsInput
    >;
  };

  export type FileUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    filename?: StringFieldUpdateOperationsInput | string;
    mimetype?: StringFieldUpdateOperationsInput | string;
    size?: IntFieldUpdateOperationsInput | number;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type FileUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    url?: StringFieldUpdateOperationsInput | string;
    filename?: StringFieldUpdateOperationsInput | string;
    mimetype?: StringFieldUpdateOperationsInput | string;
    size?: IntFieldUpdateOperationsInput | number;
    uploadedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostCreateWithoutTagsInput = {
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    author: UserCreateNestedOneWithoutPostsInput;
    featuredImage?: FileCreateNestedOneWithoutPostsInput;
  };

  export type PostUncheckedCreateWithoutTagsInput = {
    id?: number;
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    authorId: number;
    featuredImageId?: string | null;
  };

  export type PostCreateOrConnectWithoutTagsInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutTagsInput,
      PostUncheckedCreateWithoutTagsInput
    >;
  };

  export type PostUpsertWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutTagsInput,
      PostUncheckedUpdateWithoutTagsInput
    >;
    create: XOR<
      PostCreateWithoutTagsInput,
      PostUncheckedCreateWithoutTagsInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutTagsInput = {
    where: PostWhereUniqueInput;
    data: XOR<PostUpdateWithoutTagsInput, PostUncheckedUpdateWithoutTagsInput>;
  };

  export type PostUpdateManyWithWhereWithoutTagsInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutTagsInput
    >;
  };

  export type UserCreateWithoutResetTokensInput = {
    email: string;
    name: string;
    passwordHash: string;
    created_at?: Date | string;
    posts?: PostCreateNestedManyWithoutAuthorInput;
  };

  export type UserUncheckedCreateWithoutResetTokensInput = {
    id?: number;
    email: string;
    name: string;
    passwordHash: string;
    created_at?: Date | string;
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput;
  };

  export type UserCreateOrConnectWithoutResetTokensInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutResetTokensInput,
      UserUncheckedCreateWithoutResetTokensInput
    >;
  };

  export type UserUpsertWithoutResetTokensInput = {
    update: XOR<
      UserUpdateWithoutResetTokensInput,
      UserUncheckedUpdateWithoutResetTokensInput
    >;
    create: XOR<
      UserCreateWithoutResetTokensInput,
      UserUncheckedCreateWithoutResetTokensInput
    >;
    where?: UserWhereInput;
  };

  export type UserUpdateToOneWithWhereWithoutResetTokensInput = {
    where?: UserWhereInput;
    data: XOR<
      UserUpdateWithoutResetTokensInput,
      UserUncheckedUpdateWithoutResetTokensInput
    >;
  };

  export type UserUpdateWithoutResetTokensInput = {
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutAuthorNestedInput;
  };

  export type UserUncheckedUpdateWithoutResetTokensInput = {
    id?: IntFieldUpdateOperationsInput | number;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    passwordHash?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput;
  };

  export type PostCreateManyAuthorInput = {
    id?: number;
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    featuredImageId?: string | null;
  };

  export type ResetTokenCreateManyUserInput = {
    id?: number;
    token: string;
    expiresAt: Date | string;
  };

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tags?: TagUpdateManyWithoutPostsNestedInput;
    featuredImage?: FileUpdateOneWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    featuredImageId?: NullableStringFieldUpdateOperationsInput | string | null;
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    featuredImageId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type ResetTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResetTokenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number;
    token?: StringFieldUpdateOperationsInput | string;
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostCreateManyFeaturedImageInput = {
    id?: number;
    title: string;
    content?: string | null;
    published?: boolean;
    created_at?: Date | string;
    authorId: number;
  };

  export type PostUpdateWithoutFeaturedImageInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    tags?: TagUpdateManyWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateWithoutFeaturedImageInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    tags?: TagUncheckedUpdateManyWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateManyWithoutFeaturedImageInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
  };

  export type TagUpdateWithoutPostsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type TagUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type TagUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
  };

  export type PostUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    author?: UserUpdateOneRequiredWithoutPostsNestedInput;
    featuredImage?: FileUpdateOneWithoutPostsNestedInput;
  };

  export type PostUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    featuredImageId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type PostUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    title?: StringFieldUpdateOperationsInput | string;
    content?: NullableStringFieldUpdateOperationsInput | string | null;
    published?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    authorId?: IntFieldUpdateOperationsInput | number;
    featuredImageId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };
}
