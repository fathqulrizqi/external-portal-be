
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model AllowedIpCors
 * 
 */
export type AllowedIpCors = $Result.DefaultSelection<Prisma.$AllowedIpCorsPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model otpVerifikasi
 * 
 */
export type otpVerifikasi = $Result.DefaultSelection<Prisma.$otpVerifikasiPayload>
/**
 * Model LogsLogin
 * 
 */
export type LogsLogin = $Result.DefaultSelection<Prisma.$LogsLoginPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Access
 * 
 */
export type Access = $Result.DefaultSelection<Prisma.$AccessPayload>
/**
 * Model UserHasRoleAccess
 * 
 */
export type UserHasRoleAccess = $Result.DefaultSelection<Prisma.$UserHasRoleAccessPayload>
/**
 * Model LinkedDevice
 * 
 */
export type LinkedDevice = $Result.DefaultSelection<Prisma.$LinkedDevicePayload>
/**
 * Model CompanySegment
 * 
 */
export type CompanySegment = $Result.DefaultSelection<Prisma.$CompanySegmentPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AllowedIpCors
 * const allowedIpCors = await prisma.allowedIpCors.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more AllowedIpCors
   * const allowedIpCors = await prisma.allowedIpCors.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.allowedIpCors`: Exposes CRUD operations for the **AllowedIpCors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AllowedIpCors
    * const allowedIpCors = await prisma.allowedIpCors.findMany()
    * ```
    */
  get allowedIpCors(): Prisma.AllowedIpCorsDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.otpVerifikasi`: Exposes CRUD operations for the **otpVerifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtpVerifikasis
    * const otpVerifikasis = await prisma.otpVerifikasi.findMany()
    * ```
    */
  get otpVerifikasi(): Prisma.otpVerifikasiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.logsLogin`: Exposes CRUD operations for the **LogsLogin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LogsLogins
    * const logsLogins = await prisma.logsLogin.findMany()
    * ```
    */
  get logsLogin(): Prisma.LogsLoginDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.access`: Exposes CRUD operations for the **Access** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accesses
    * const accesses = await prisma.access.findMany()
    * ```
    */
  get access(): Prisma.AccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userHasRoleAccess`: Exposes CRUD operations for the **UserHasRoleAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserHasRoleAccesses
    * const userHasRoleAccesses = await prisma.userHasRoleAccess.findMany()
    * ```
    */
  get userHasRoleAccess(): Prisma.UserHasRoleAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.linkedDevice`: Exposes CRUD operations for the **LinkedDevice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LinkedDevices
    * const linkedDevices = await prisma.linkedDevice.findMany()
    * ```
    */
  get linkedDevice(): Prisma.LinkedDeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companySegment`: Exposes CRUD operations for the **CompanySegment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanySegments
    * const companySegments = await prisma.companySegment.findMany()
    * ```
    */
  get companySegment(): Prisma.CompanySegmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


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
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    AllowedIpCors: 'AllowedIpCors',
    User: 'User',
    otpVerifikasi: 'otpVerifikasi',
    LogsLogin: 'LogsLogin',
    Role: 'Role',
    Access: 'Access',
    UserHasRoleAccess: 'UserHasRoleAccess',
    LinkedDevice: 'LinkedDevice',
    CompanySegment: 'CompanySegment',
    Profile: 'Profile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "allowedIpCors" | "user" | "otpVerifikasi" | "logsLogin" | "role" | "access" | "userHasRoleAccess" | "linkedDevice" | "companySegment" | "profile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AllowedIpCors: {
        payload: Prisma.$AllowedIpCorsPayload<ExtArgs>
        fields: Prisma.AllowedIpCorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AllowedIpCorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AllowedIpCorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>
          }
          findFirst: {
            args: Prisma.AllowedIpCorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AllowedIpCorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>
          }
          findMany: {
            args: Prisma.AllowedIpCorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>[]
          }
          create: {
            args: Prisma.AllowedIpCorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>
          }
          createMany: {
            args: Prisma.AllowedIpCorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AllowedIpCorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>[]
          }
          delete: {
            args: Prisma.AllowedIpCorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>
          }
          update: {
            args: Prisma.AllowedIpCorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>
          }
          deleteMany: {
            args: Prisma.AllowedIpCorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AllowedIpCorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AllowedIpCorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>[]
          }
          upsert: {
            args: Prisma.AllowedIpCorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AllowedIpCorsPayload>
          }
          aggregate: {
            args: Prisma.AllowedIpCorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllowedIpCors>
          }
          groupBy: {
            args: Prisma.AllowedIpCorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AllowedIpCorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AllowedIpCorsCountArgs<ExtArgs>
            result: $Utils.Optional<AllowedIpCorsCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      otpVerifikasi: {
        payload: Prisma.$otpVerifikasiPayload<ExtArgs>
        fields: Prisma.otpVerifikasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.otpVerifikasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.otpVerifikasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>
          }
          findFirst: {
            args: Prisma.otpVerifikasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.otpVerifikasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>
          }
          findMany: {
            args: Prisma.otpVerifikasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>[]
          }
          create: {
            args: Prisma.otpVerifikasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>
          }
          createMany: {
            args: Prisma.otpVerifikasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.otpVerifikasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>[]
          }
          delete: {
            args: Prisma.otpVerifikasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>
          }
          update: {
            args: Prisma.otpVerifikasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>
          }
          deleteMany: {
            args: Prisma.otpVerifikasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.otpVerifikasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.otpVerifikasiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>[]
          }
          upsert: {
            args: Prisma.otpVerifikasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$otpVerifikasiPayload>
          }
          aggregate: {
            args: Prisma.OtpVerifikasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtpVerifikasi>
          }
          groupBy: {
            args: Prisma.otpVerifikasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpVerifikasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.otpVerifikasiCountArgs<ExtArgs>
            result: $Utils.Optional<OtpVerifikasiCountAggregateOutputType> | number
          }
        }
      }
      LogsLogin: {
        payload: Prisma.$LogsLoginPayload<ExtArgs>
        fields: Prisma.LogsLoginFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LogsLoginFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LogsLoginFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>
          }
          findFirst: {
            args: Prisma.LogsLoginFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LogsLoginFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>
          }
          findMany: {
            args: Prisma.LogsLoginFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>[]
          }
          create: {
            args: Prisma.LogsLoginCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>
          }
          createMany: {
            args: Prisma.LogsLoginCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LogsLoginCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>[]
          }
          delete: {
            args: Prisma.LogsLoginDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>
          }
          update: {
            args: Prisma.LogsLoginUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>
          }
          deleteMany: {
            args: Prisma.LogsLoginDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LogsLoginUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LogsLoginUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>[]
          }
          upsert: {
            args: Prisma.LogsLoginUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LogsLoginPayload>
          }
          aggregate: {
            args: Prisma.LogsLoginAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLogsLogin>
          }
          groupBy: {
            args: Prisma.LogsLoginGroupByArgs<ExtArgs>
            result: $Utils.Optional<LogsLoginGroupByOutputType>[]
          }
          count: {
            args: Prisma.LogsLoginCountArgs<ExtArgs>
            result: $Utils.Optional<LogsLoginCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Access: {
        payload: Prisma.$AccessPayload<ExtArgs>
        fields: Prisma.AccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          findFirst: {
            args: Prisma.AccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          findMany: {
            args: Prisma.AccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>[]
          }
          create: {
            args: Prisma.AccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          createMany: {
            args: Prisma.AccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>[]
          }
          delete: {
            args: Prisma.AccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          update: {
            args: Prisma.AccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          deleteMany: {
            args: Prisma.AccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>[]
          }
          upsert: {
            args: Prisma.AccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessPayload>
          }
          aggregate: {
            args: Prisma.AccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccess>
          }
          groupBy: {
            args: Prisma.AccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessCountArgs<ExtArgs>
            result: $Utils.Optional<AccessCountAggregateOutputType> | number
          }
        }
      }
      UserHasRoleAccess: {
        payload: Prisma.$UserHasRoleAccessPayload<ExtArgs>
        fields: Prisma.UserHasRoleAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserHasRoleAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserHasRoleAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>
          }
          findFirst: {
            args: Prisma.UserHasRoleAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserHasRoleAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>
          }
          findMany: {
            args: Prisma.UserHasRoleAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>[]
          }
          create: {
            args: Prisma.UserHasRoleAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>
          }
          createMany: {
            args: Prisma.UserHasRoleAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserHasRoleAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>[]
          }
          delete: {
            args: Prisma.UserHasRoleAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>
          }
          update: {
            args: Prisma.UserHasRoleAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>
          }
          deleteMany: {
            args: Prisma.UserHasRoleAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserHasRoleAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserHasRoleAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>[]
          }
          upsert: {
            args: Prisma.UserHasRoleAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserHasRoleAccessPayload>
          }
          aggregate: {
            args: Prisma.UserHasRoleAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserHasRoleAccess>
          }
          groupBy: {
            args: Prisma.UserHasRoleAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserHasRoleAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserHasRoleAccessCountArgs<ExtArgs>
            result: $Utils.Optional<UserHasRoleAccessCountAggregateOutputType> | number
          }
        }
      }
      LinkedDevice: {
        payload: Prisma.$LinkedDevicePayload<ExtArgs>
        fields: Prisma.LinkedDeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LinkedDeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LinkedDeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>
          }
          findFirst: {
            args: Prisma.LinkedDeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LinkedDeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>
          }
          findMany: {
            args: Prisma.LinkedDeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>[]
          }
          create: {
            args: Prisma.LinkedDeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>
          }
          createMany: {
            args: Prisma.LinkedDeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LinkedDeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>[]
          }
          delete: {
            args: Prisma.LinkedDeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>
          }
          update: {
            args: Prisma.LinkedDeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>
          }
          deleteMany: {
            args: Prisma.LinkedDeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LinkedDeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LinkedDeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>[]
          }
          upsert: {
            args: Prisma.LinkedDeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LinkedDevicePayload>
          }
          aggregate: {
            args: Prisma.LinkedDeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLinkedDevice>
          }
          groupBy: {
            args: Prisma.LinkedDeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<LinkedDeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.LinkedDeviceCountArgs<ExtArgs>
            result: $Utils.Optional<LinkedDeviceCountAggregateOutputType> | number
          }
        }
      }
      CompanySegment: {
        payload: Prisma.$CompanySegmentPayload<ExtArgs>
        fields: Prisma.CompanySegmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanySegmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanySegmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>
          }
          findFirst: {
            args: Prisma.CompanySegmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanySegmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>
          }
          findMany: {
            args: Prisma.CompanySegmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>[]
          }
          create: {
            args: Prisma.CompanySegmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>
          }
          createMany: {
            args: Prisma.CompanySegmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanySegmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>[]
          }
          delete: {
            args: Prisma.CompanySegmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>
          }
          update: {
            args: Prisma.CompanySegmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>
          }
          deleteMany: {
            args: Prisma.CompanySegmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanySegmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanySegmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>[]
          }
          upsert: {
            args: Prisma.CompanySegmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanySegmentPayload>
          }
          aggregate: {
            args: Prisma.CompanySegmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanySegment>
          }
          groupBy: {
            args: Prisma.CompanySegmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanySegmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanySegmentCountArgs<ExtArgs>
            result: $Utils.Optional<CompanySegmentCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    allowedIpCors?: AllowedIpCorsOmit
    user?: UserOmit
    otpVerifikasi?: otpVerifikasiOmit
    logsLogin?: LogsLoginOmit
    role?: RoleOmit
    access?: AccessOmit
    userHasRoleAccess?: UserHasRoleAccessOmit
    linkedDevice?: LinkedDeviceOmit
    companySegment?: CompanySegmentOmit
    profile?: ProfileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    logs: number
    linkedDevice: number
    UserHasRoleAccess: number
    otp: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UserCountOutputTypeCountLogsArgs
    linkedDevice?: boolean | UserCountOutputTypeCountLinkedDeviceArgs
    UserHasRoleAccess?: boolean | UserCountOutputTypeCountUserHasRoleAccessArgs
    otp?: boolean | UserCountOutputTypeCountOtpArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogsLoginWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLinkedDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedDeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserHasRoleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHasRoleAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOtpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpVerifikasiWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    UserHasRoleAccess: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserHasRoleAccess?: boolean | RoleCountOutputTypeCountUserHasRoleAccessArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserHasRoleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHasRoleAccessWhereInput
  }


  /**
   * Count Type AccessCountOutputType
   */

  export type AccessCountOutputType = {
    UserHasRoleAccess: number
  }

  export type AccessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserHasRoleAccess?: boolean | AccessCountOutputTypeCountUserHasRoleAccessArgs
  }

  // Custom InputTypes
  /**
   * AccessCountOutputType without action
   */
  export type AccessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessCountOutputType
     */
    select?: AccessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccessCountOutputType without action
   */
  export type AccessCountOutputTypeCountUserHasRoleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHasRoleAccessWhereInput
  }


  /**
   * Count Type CompanySegmentCountOutputType
   */

  export type CompanySegmentCountOutputType = {
    profile: number
  }

  export type CompanySegmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | CompanySegmentCountOutputTypeCountProfileArgs
  }

  // Custom InputTypes
  /**
   * CompanySegmentCountOutputType without action
   */
  export type CompanySegmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegmentCountOutputType
     */
    select?: CompanySegmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanySegmentCountOutputType without action
   */
  export type CompanySegmentCountOutputTypeCountProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AllowedIpCors
   */

  export type AggregateAllowedIpCors = {
    _count: AllowedIpCorsCountAggregateOutputType | null
    _min: AllowedIpCorsMinAggregateOutputType | null
    _max: AllowedIpCorsMaxAggregateOutputType | null
  }

  export type AllowedIpCorsMinAggregateOutputType = {
    ip: string | null
  }

  export type AllowedIpCorsMaxAggregateOutputType = {
    ip: string | null
  }

  export type AllowedIpCorsCountAggregateOutputType = {
    ip: number
    _all: number
  }


  export type AllowedIpCorsMinAggregateInputType = {
    ip?: true
  }

  export type AllowedIpCorsMaxAggregateInputType = {
    ip?: true
  }

  export type AllowedIpCorsCountAggregateInputType = {
    ip?: true
    _all?: true
  }

  export type AllowedIpCorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllowedIpCors to aggregate.
     */
    where?: AllowedIpCorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowedIpCors to fetch.
     */
    orderBy?: AllowedIpCorsOrderByWithRelationInput | AllowedIpCorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AllowedIpCorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowedIpCors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowedIpCors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AllowedIpCors
    **/
    _count?: true | AllowedIpCorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AllowedIpCorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AllowedIpCorsMaxAggregateInputType
  }

  export type GetAllowedIpCorsAggregateType<T extends AllowedIpCorsAggregateArgs> = {
        [P in keyof T & keyof AggregateAllowedIpCors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllowedIpCors[P]>
      : GetScalarType<T[P], AggregateAllowedIpCors[P]>
  }




  export type AllowedIpCorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AllowedIpCorsWhereInput
    orderBy?: AllowedIpCorsOrderByWithAggregationInput | AllowedIpCorsOrderByWithAggregationInput[]
    by: AllowedIpCorsScalarFieldEnum[] | AllowedIpCorsScalarFieldEnum
    having?: AllowedIpCorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AllowedIpCorsCountAggregateInputType | true
    _min?: AllowedIpCorsMinAggregateInputType
    _max?: AllowedIpCorsMaxAggregateInputType
  }

  export type AllowedIpCorsGroupByOutputType = {
    ip: string
    _count: AllowedIpCorsCountAggregateOutputType | null
    _min: AllowedIpCorsMinAggregateOutputType | null
    _max: AllowedIpCorsMaxAggregateOutputType | null
  }

  type GetAllowedIpCorsGroupByPayload<T extends AllowedIpCorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AllowedIpCorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AllowedIpCorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AllowedIpCorsGroupByOutputType[P]>
            : GetScalarType<T[P], AllowedIpCorsGroupByOutputType[P]>
        }
      >
    >


  export type AllowedIpCorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
  }, ExtArgs["result"]["allowedIpCors"]>

  export type AllowedIpCorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
  }, ExtArgs["result"]["allowedIpCors"]>

  export type AllowedIpCorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ip?: boolean
  }, ExtArgs["result"]["allowedIpCors"]>

  export type AllowedIpCorsSelectScalar = {
    ip?: boolean
  }

  export type AllowedIpCorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ip", ExtArgs["result"]["allowedIpCors"]>

  export type $AllowedIpCorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AllowedIpCors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ip: string
    }, ExtArgs["result"]["allowedIpCors"]>
    composites: {}
  }

  type AllowedIpCorsGetPayload<S extends boolean | null | undefined | AllowedIpCorsDefaultArgs> = $Result.GetResult<Prisma.$AllowedIpCorsPayload, S>

  type AllowedIpCorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AllowedIpCorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AllowedIpCorsCountAggregateInputType | true
    }

  export interface AllowedIpCorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AllowedIpCors'], meta: { name: 'AllowedIpCors' } }
    /**
     * Find zero or one AllowedIpCors that matches the filter.
     * @param {AllowedIpCorsFindUniqueArgs} args - Arguments to find a AllowedIpCors
     * @example
     * // Get one AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AllowedIpCorsFindUniqueArgs>(args: SelectSubset<T, AllowedIpCorsFindUniqueArgs<ExtArgs>>): Prisma__AllowedIpCorsClient<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AllowedIpCors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AllowedIpCorsFindUniqueOrThrowArgs} args - Arguments to find a AllowedIpCors
     * @example
     * // Get one AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AllowedIpCorsFindUniqueOrThrowArgs>(args: SelectSubset<T, AllowedIpCorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AllowedIpCorsClient<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllowedIpCors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIpCorsFindFirstArgs} args - Arguments to find a AllowedIpCors
     * @example
     * // Get one AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AllowedIpCorsFindFirstArgs>(args?: SelectSubset<T, AllowedIpCorsFindFirstArgs<ExtArgs>>): Prisma__AllowedIpCorsClient<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AllowedIpCors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIpCorsFindFirstOrThrowArgs} args - Arguments to find a AllowedIpCors
     * @example
     * // Get one AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AllowedIpCorsFindFirstOrThrowArgs>(args?: SelectSubset<T, AllowedIpCorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AllowedIpCorsClient<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AllowedIpCors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIpCorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.findMany()
     * 
     * // Get first 10 AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.findMany({ take: 10 })
     * 
     * // Only select the `ip`
     * const allowedIpCorsWithIpOnly = await prisma.allowedIpCors.findMany({ select: { ip: true } })
     * 
     */
    findMany<T extends AllowedIpCorsFindManyArgs>(args?: SelectSubset<T, AllowedIpCorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AllowedIpCors.
     * @param {AllowedIpCorsCreateArgs} args - Arguments to create a AllowedIpCors.
     * @example
     * // Create one AllowedIpCors
     * const AllowedIpCors = await prisma.allowedIpCors.create({
     *   data: {
     *     // ... data to create a AllowedIpCors
     *   }
     * })
     * 
     */
    create<T extends AllowedIpCorsCreateArgs>(args: SelectSubset<T, AllowedIpCorsCreateArgs<ExtArgs>>): Prisma__AllowedIpCorsClient<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AllowedIpCors.
     * @param {AllowedIpCorsCreateManyArgs} args - Arguments to create many AllowedIpCors.
     * @example
     * // Create many AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AllowedIpCorsCreateManyArgs>(args?: SelectSubset<T, AllowedIpCorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AllowedIpCors and returns the data saved in the database.
     * @param {AllowedIpCorsCreateManyAndReturnArgs} args - Arguments to create many AllowedIpCors.
     * @example
     * // Create many AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AllowedIpCors and only return the `ip`
     * const allowedIpCorsWithIpOnly = await prisma.allowedIpCors.createManyAndReturn({
     *   select: { ip: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AllowedIpCorsCreateManyAndReturnArgs>(args?: SelectSubset<T, AllowedIpCorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AllowedIpCors.
     * @param {AllowedIpCorsDeleteArgs} args - Arguments to delete one AllowedIpCors.
     * @example
     * // Delete one AllowedIpCors
     * const AllowedIpCors = await prisma.allowedIpCors.delete({
     *   where: {
     *     // ... filter to delete one AllowedIpCors
     *   }
     * })
     * 
     */
    delete<T extends AllowedIpCorsDeleteArgs>(args: SelectSubset<T, AllowedIpCorsDeleteArgs<ExtArgs>>): Prisma__AllowedIpCorsClient<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AllowedIpCors.
     * @param {AllowedIpCorsUpdateArgs} args - Arguments to update one AllowedIpCors.
     * @example
     * // Update one AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AllowedIpCorsUpdateArgs>(args: SelectSubset<T, AllowedIpCorsUpdateArgs<ExtArgs>>): Prisma__AllowedIpCorsClient<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AllowedIpCors.
     * @param {AllowedIpCorsDeleteManyArgs} args - Arguments to filter AllowedIpCors to delete.
     * @example
     * // Delete a few AllowedIpCors
     * const { count } = await prisma.allowedIpCors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AllowedIpCorsDeleteManyArgs>(args?: SelectSubset<T, AllowedIpCorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllowedIpCors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIpCorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AllowedIpCorsUpdateManyArgs>(args: SelectSubset<T, AllowedIpCorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AllowedIpCors and returns the data updated in the database.
     * @param {AllowedIpCorsUpdateManyAndReturnArgs} args - Arguments to update many AllowedIpCors.
     * @example
     * // Update many AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AllowedIpCors and only return the `ip`
     * const allowedIpCorsWithIpOnly = await prisma.allowedIpCors.updateManyAndReturn({
     *   select: { ip: true },
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
    updateManyAndReturn<T extends AllowedIpCorsUpdateManyAndReturnArgs>(args: SelectSubset<T, AllowedIpCorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AllowedIpCors.
     * @param {AllowedIpCorsUpsertArgs} args - Arguments to update or create a AllowedIpCors.
     * @example
     * // Update or create a AllowedIpCors
     * const allowedIpCors = await prisma.allowedIpCors.upsert({
     *   create: {
     *     // ... data to create a AllowedIpCors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AllowedIpCors we want to update
     *   }
     * })
     */
    upsert<T extends AllowedIpCorsUpsertArgs>(args: SelectSubset<T, AllowedIpCorsUpsertArgs<ExtArgs>>): Prisma__AllowedIpCorsClient<$Result.GetResult<Prisma.$AllowedIpCorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AllowedIpCors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIpCorsCountArgs} args - Arguments to filter AllowedIpCors to count.
     * @example
     * // Count the number of AllowedIpCors
     * const count = await prisma.allowedIpCors.count({
     *   where: {
     *     // ... the filter for the AllowedIpCors we want to count
     *   }
     * })
    **/
    count<T extends AllowedIpCorsCountArgs>(
      args?: Subset<T, AllowedIpCorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AllowedIpCorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AllowedIpCors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIpCorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AllowedIpCorsAggregateArgs>(args: Subset<T, AllowedIpCorsAggregateArgs>): Prisma.PrismaPromise<GetAllowedIpCorsAggregateType<T>>

    /**
     * Group by AllowedIpCors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AllowedIpCorsGroupByArgs} args - Group by arguments.
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
      T extends AllowedIpCorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AllowedIpCorsGroupByArgs['orderBy'] }
        : { orderBy?: AllowedIpCorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AllowedIpCorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllowedIpCorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AllowedIpCors model
   */
  readonly fields: AllowedIpCorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AllowedIpCors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AllowedIpCorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AllowedIpCors model
   */
  interface AllowedIpCorsFieldRefs {
    readonly ip: FieldRef<"AllowedIpCors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AllowedIpCors findUnique
   */
  export type AllowedIpCorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIpCors to fetch.
     */
    where: AllowedIpCorsWhereUniqueInput
  }

  /**
   * AllowedIpCors findUniqueOrThrow
   */
  export type AllowedIpCorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIpCors to fetch.
     */
    where: AllowedIpCorsWhereUniqueInput
  }

  /**
   * AllowedIpCors findFirst
   */
  export type AllowedIpCorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIpCors to fetch.
     */
    where?: AllowedIpCorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowedIpCors to fetch.
     */
    orderBy?: AllowedIpCorsOrderByWithRelationInput | AllowedIpCorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllowedIpCors.
     */
    cursor?: AllowedIpCorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowedIpCors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowedIpCors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllowedIpCors.
     */
    distinct?: AllowedIpCorsScalarFieldEnum | AllowedIpCorsScalarFieldEnum[]
  }

  /**
   * AllowedIpCors findFirstOrThrow
   */
  export type AllowedIpCorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIpCors to fetch.
     */
    where?: AllowedIpCorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowedIpCors to fetch.
     */
    orderBy?: AllowedIpCorsOrderByWithRelationInput | AllowedIpCorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AllowedIpCors.
     */
    cursor?: AllowedIpCorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowedIpCors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowedIpCors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AllowedIpCors.
     */
    distinct?: AllowedIpCorsScalarFieldEnum | AllowedIpCorsScalarFieldEnum[]
  }

  /**
   * AllowedIpCors findMany
   */
  export type AllowedIpCorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * Filter, which AllowedIpCors to fetch.
     */
    where?: AllowedIpCorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AllowedIpCors to fetch.
     */
    orderBy?: AllowedIpCorsOrderByWithRelationInput | AllowedIpCorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AllowedIpCors.
     */
    cursor?: AllowedIpCorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AllowedIpCors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AllowedIpCors.
     */
    skip?: number
    distinct?: AllowedIpCorsScalarFieldEnum | AllowedIpCorsScalarFieldEnum[]
  }

  /**
   * AllowedIpCors create
   */
  export type AllowedIpCorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * The data needed to create a AllowedIpCors.
     */
    data: XOR<AllowedIpCorsCreateInput, AllowedIpCorsUncheckedCreateInput>
  }

  /**
   * AllowedIpCors createMany
   */
  export type AllowedIpCorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AllowedIpCors.
     */
    data: AllowedIpCorsCreateManyInput | AllowedIpCorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllowedIpCors createManyAndReturn
   */
  export type AllowedIpCorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * The data used to create many AllowedIpCors.
     */
    data: AllowedIpCorsCreateManyInput | AllowedIpCorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AllowedIpCors update
   */
  export type AllowedIpCorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * The data needed to update a AllowedIpCors.
     */
    data: XOR<AllowedIpCorsUpdateInput, AllowedIpCorsUncheckedUpdateInput>
    /**
     * Choose, which AllowedIpCors to update.
     */
    where: AllowedIpCorsWhereUniqueInput
  }

  /**
   * AllowedIpCors updateMany
   */
  export type AllowedIpCorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AllowedIpCors.
     */
    data: XOR<AllowedIpCorsUpdateManyMutationInput, AllowedIpCorsUncheckedUpdateManyInput>
    /**
     * Filter which AllowedIpCors to update
     */
    where?: AllowedIpCorsWhereInput
    /**
     * Limit how many AllowedIpCors to update.
     */
    limit?: number
  }

  /**
   * AllowedIpCors updateManyAndReturn
   */
  export type AllowedIpCorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * The data used to update AllowedIpCors.
     */
    data: XOR<AllowedIpCorsUpdateManyMutationInput, AllowedIpCorsUncheckedUpdateManyInput>
    /**
     * Filter which AllowedIpCors to update
     */
    where?: AllowedIpCorsWhereInput
    /**
     * Limit how many AllowedIpCors to update.
     */
    limit?: number
  }

  /**
   * AllowedIpCors upsert
   */
  export type AllowedIpCorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * The filter to search for the AllowedIpCors to update in case it exists.
     */
    where: AllowedIpCorsWhereUniqueInput
    /**
     * In case the AllowedIpCors found by the `where` argument doesn't exist, create a new AllowedIpCors with this data.
     */
    create: XOR<AllowedIpCorsCreateInput, AllowedIpCorsUncheckedCreateInput>
    /**
     * In case the AllowedIpCors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AllowedIpCorsUpdateInput, AllowedIpCorsUncheckedUpdateInput>
  }

  /**
   * AllowedIpCors delete
   */
  export type AllowedIpCorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
    /**
     * Filter which AllowedIpCors to delete.
     */
    where: AllowedIpCorsWhereUniqueInput
  }

  /**
   * AllowedIpCors deleteMany
   */
  export type AllowedIpCorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AllowedIpCors to delete
     */
    where?: AllowedIpCorsWhereInput
    /**
     * Limit how many AllowedIpCors to delete.
     */
    limit?: number
  }

  /**
   * AllowedIpCors without action
   */
  export type AllowedIpCorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AllowedIpCors
     */
    select?: AllowedIpCorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AllowedIpCors
     */
    omit?: AllowedIpCorsOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    userId: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    sessionExpireDate: Date | null
    createdDate: Date | null
    updateDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    userId: string | null
    email: string | null
    password: string | null
    isActive: boolean | null
    sessionExpireDate: Date | null
    createdDate: Date | null
    updateDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    userId: number
    email: number
    password: number
    isActive: number
    sessionExpireDate: number
    createdDate: number
    updateDate: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    isActive?: true
    sessionExpireDate?: true
    createdDate?: true
    updateDate?: true
  }

  export type UserMaxAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    isActive?: true
    sessionExpireDate?: true
    createdDate?: true
    updateDate?: true
  }

  export type UserCountAggregateInputType = {
    userId?: true
    email?: true
    password?: true
    isActive?: true
    sessionExpireDate?: true
    createdDate?: true
    updateDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    userId: string
    email: string
    password: string
    isActive: boolean
    sessionExpireDate: Date
    createdDate: Date
    updateDate: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    sessionExpireDate?: boolean
    createdDate?: boolean
    updateDate?: boolean
    logs?: boolean | User$logsArgs<ExtArgs>
    linkedDevice?: boolean | User$linkedDeviceArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    UserHasRoleAccess?: boolean | User$UserHasRoleAccessArgs<ExtArgs>
    otp?: boolean | User$otpArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    sessionExpireDate?: boolean
    createdDate?: boolean
    updateDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    sessionExpireDate?: boolean
    createdDate?: boolean
    updateDate?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    userId?: boolean
    email?: boolean
    password?: boolean
    isActive?: boolean
    sessionExpireDate?: boolean
    createdDate?: boolean
    updateDate?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "email" | "password" | "isActive" | "sessionExpireDate" | "createdDate" | "updateDate", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | User$logsArgs<ExtArgs>
    linkedDevice?: boolean | User$linkedDeviceArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    UserHasRoleAccess?: boolean | User$UserHasRoleAccessArgs<ExtArgs>
    otp?: boolean | User$otpArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      logs: Prisma.$LogsLoginPayload<ExtArgs>[]
      linkedDevice: Prisma.$LinkedDevicePayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      UserHasRoleAccess: Prisma.$UserHasRoleAccessPayload<ExtArgs>[]
      otp: Prisma.$otpVerifikasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      email: string
      password: string
      isActive: boolean
      sessionExpireDate: Date
      createdDate: Date
      updateDate: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * // Only select the `userId`
     * const userWithUserIdOnly = await prisma.user.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Create many Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     * // Update zero or more Users and only return the `userId`
     * const userWithUserIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    linkedDevice<T extends User$linkedDeviceArgs<ExtArgs> = {}>(args?: Subset<T, User$linkedDeviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    UserHasRoleAccess<T extends User$UserHasRoleAccessArgs<ExtArgs> = {}>(args?: Subset<T, User$UserHasRoleAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    otp<T extends User$otpArgs<ExtArgs> = {}>(args?: Subset<T, User$otpArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly userId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly sessionExpireDate: FieldRef<"User", 'DateTime'>
    readonly createdDate: FieldRef<"User", 'DateTime'>
    readonly updateDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    where?: LogsLoginWhereInput
    orderBy?: LogsLoginOrderByWithRelationInput | LogsLoginOrderByWithRelationInput[]
    cursor?: LogsLoginWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LogsLoginScalarFieldEnum | LogsLoginScalarFieldEnum[]
  }

  /**
   * User.linkedDevice
   */
  export type User$linkedDeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    where?: LinkedDeviceWhereInput
    orderBy?: LinkedDeviceOrderByWithRelationInput | LinkedDeviceOrderByWithRelationInput[]
    cursor?: LinkedDeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LinkedDeviceScalarFieldEnum | LinkedDeviceScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.UserHasRoleAccess
   */
  export type User$UserHasRoleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    where?: UserHasRoleAccessWhereInput
    orderBy?: UserHasRoleAccessOrderByWithRelationInput | UserHasRoleAccessOrderByWithRelationInput[]
    cursor?: UserHasRoleAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHasRoleAccessScalarFieldEnum | UserHasRoleAccessScalarFieldEnum[]
  }

  /**
   * User.otp
   */
  export type User$otpArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    where?: otpVerifikasiWhereInput
    orderBy?: otpVerifikasiOrderByWithRelationInput | otpVerifikasiOrderByWithRelationInput[]
    cursor?: otpVerifikasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpVerifikasiScalarFieldEnum | OtpVerifikasiScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model otpVerifikasi
   */

  export type AggregateOtpVerifikasi = {
    _count: OtpVerifikasiCountAggregateOutputType | null
    _avg: OtpVerifikasiAvgAggregateOutputType | null
    _sum: OtpVerifikasiSumAggregateOutputType | null
    _min: OtpVerifikasiMinAggregateOutputType | null
    _max: OtpVerifikasiMaxAggregateOutputType | null
  }

  export type OtpVerifikasiAvgAggregateOutputType = {
    id: number | null
  }

  export type OtpVerifikasiSumAggregateOutputType = {
    id: number | null
  }

  export type OtpVerifikasiMinAggregateOutputType = {
    id: number | null
    userId: string | null
    code: string | null
    expireDate: Date | null
  }

  export type OtpVerifikasiMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    code: string | null
    expireDate: Date | null
  }

  export type OtpVerifikasiCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    expireDate: number
    _all: number
  }


  export type OtpVerifikasiAvgAggregateInputType = {
    id?: true
  }

  export type OtpVerifikasiSumAggregateInputType = {
    id?: true
  }

  export type OtpVerifikasiMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expireDate?: true
  }

  export type OtpVerifikasiMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expireDate?: true
  }

  export type OtpVerifikasiCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    expireDate?: true
    _all?: true
  }

  export type OtpVerifikasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otpVerifikasi to aggregate.
     */
    where?: otpVerifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otpVerifikasis to fetch.
     */
    orderBy?: otpVerifikasiOrderByWithRelationInput | otpVerifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: otpVerifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otpVerifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otpVerifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned otpVerifikasis
    **/
    _count?: true | OtpVerifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpVerifikasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpVerifikasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpVerifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpVerifikasiMaxAggregateInputType
  }

  export type GetOtpVerifikasiAggregateType<T extends OtpVerifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateOtpVerifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtpVerifikasi[P]>
      : GetScalarType<T[P], AggregateOtpVerifikasi[P]>
  }




  export type otpVerifikasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: otpVerifikasiWhereInput
    orderBy?: otpVerifikasiOrderByWithAggregationInput | otpVerifikasiOrderByWithAggregationInput[]
    by: OtpVerifikasiScalarFieldEnum[] | OtpVerifikasiScalarFieldEnum
    having?: otpVerifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpVerifikasiCountAggregateInputType | true
    _avg?: OtpVerifikasiAvgAggregateInputType
    _sum?: OtpVerifikasiSumAggregateInputType
    _min?: OtpVerifikasiMinAggregateInputType
    _max?: OtpVerifikasiMaxAggregateInputType
  }

  export type OtpVerifikasiGroupByOutputType = {
    id: number
    userId: string
    code: string
    expireDate: Date
    _count: OtpVerifikasiCountAggregateOutputType | null
    _avg: OtpVerifikasiAvgAggregateOutputType | null
    _sum: OtpVerifikasiSumAggregateOutputType | null
    _min: OtpVerifikasiMinAggregateOutputType | null
    _max: OtpVerifikasiMaxAggregateOutputType | null
  }

  type GetOtpVerifikasiGroupByPayload<T extends otpVerifikasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpVerifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpVerifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpVerifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], OtpVerifikasiGroupByOutputType[P]>
        }
      >
    >


  export type otpVerifikasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    expireDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpVerifikasi"]>

  export type otpVerifikasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    expireDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpVerifikasi"]>

  export type otpVerifikasiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    expireDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otpVerifikasi"]>

  export type otpVerifikasiSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    expireDate?: boolean
  }

  export type otpVerifikasiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "expireDate", ExtArgs["result"]["otpVerifikasi"]>
  export type otpVerifikasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type otpVerifikasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type otpVerifikasiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $otpVerifikasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "otpVerifikasi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      code: string
      expireDate: Date
    }, ExtArgs["result"]["otpVerifikasi"]>
    composites: {}
  }

  type otpVerifikasiGetPayload<S extends boolean | null | undefined | otpVerifikasiDefaultArgs> = $Result.GetResult<Prisma.$otpVerifikasiPayload, S>

  type otpVerifikasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<otpVerifikasiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpVerifikasiCountAggregateInputType | true
    }

  export interface otpVerifikasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['otpVerifikasi'], meta: { name: 'otpVerifikasi' } }
    /**
     * Find zero or one OtpVerifikasi that matches the filter.
     * @param {otpVerifikasiFindUniqueArgs} args - Arguments to find a OtpVerifikasi
     * @example
     * // Get one OtpVerifikasi
     * const otpVerifikasi = await prisma.otpVerifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends otpVerifikasiFindUniqueArgs>(args: SelectSubset<T, otpVerifikasiFindUniqueArgs<ExtArgs>>): Prisma__otpVerifikasiClient<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OtpVerifikasi that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {otpVerifikasiFindUniqueOrThrowArgs} args - Arguments to find a OtpVerifikasi
     * @example
     * // Get one OtpVerifikasi
     * const otpVerifikasi = await prisma.otpVerifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends otpVerifikasiFindUniqueOrThrowArgs>(args: SelectSubset<T, otpVerifikasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__otpVerifikasiClient<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpVerifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpVerifikasiFindFirstArgs} args - Arguments to find a OtpVerifikasi
     * @example
     * // Get one OtpVerifikasi
     * const otpVerifikasi = await prisma.otpVerifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends otpVerifikasiFindFirstArgs>(args?: SelectSubset<T, otpVerifikasiFindFirstArgs<ExtArgs>>): Prisma__otpVerifikasiClient<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OtpVerifikasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpVerifikasiFindFirstOrThrowArgs} args - Arguments to find a OtpVerifikasi
     * @example
     * // Get one OtpVerifikasi
     * const otpVerifikasi = await prisma.otpVerifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends otpVerifikasiFindFirstOrThrowArgs>(args?: SelectSubset<T, otpVerifikasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__otpVerifikasiClient<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OtpVerifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpVerifikasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OtpVerifikasis
     * const otpVerifikasis = await prisma.otpVerifikasi.findMany()
     * 
     * // Get first 10 OtpVerifikasis
     * const otpVerifikasis = await prisma.otpVerifikasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpVerifikasiWithIdOnly = await prisma.otpVerifikasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends otpVerifikasiFindManyArgs>(args?: SelectSubset<T, otpVerifikasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OtpVerifikasi.
     * @param {otpVerifikasiCreateArgs} args - Arguments to create a OtpVerifikasi.
     * @example
     * // Create one OtpVerifikasi
     * const OtpVerifikasi = await prisma.otpVerifikasi.create({
     *   data: {
     *     // ... data to create a OtpVerifikasi
     *   }
     * })
     * 
     */
    create<T extends otpVerifikasiCreateArgs>(args: SelectSubset<T, otpVerifikasiCreateArgs<ExtArgs>>): Prisma__otpVerifikasiClient<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OtpVerifikasis.
     * @param {otpVerifikasiCreateManyArgs} args - Arguments to create many OtpVerifikasis.
     * @example
     * // Create many OtpVerifikasis
     * const otpVerifikasi = await prisma.otpVerifikasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends otpVerifikasiCreateManyArgs>(args?: SelectSubset<T, otpVerifikasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OtpVerifikasis and returns the data saved in the database.
     * @param {otpVerifikasiCreateManyAndReturnArgs} args - Arguments to create many OtpVerifikasis.
     * @example
     * // Create many OtpVerifikasis
     * const otpVerifikasi = await prisma.otpVerifikasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OtpVerifikasis and only return the `id`
     * const otpVerifikasiWithIdOnly = await prisma.otpVerifikasi.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends otpVerifikasiCreateManyAndReturnArgs>(args?: SelectSubset<T, otpVerifikasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OtpVerifikasi.
     * @param {otpVerifikasiDeleteArgs} args - Arguments to delete one OtpVerifikasi.
     * @example
     * // Delete one OtpVerifikasi
     * const OtpVerifikasi = await prisma.otpVerifikasi.delete({
     *   where: {
     *     // ... filter to delete one OtpVerifikasi
     *   }
     * })
     * 
     */
    delete<T extends otpVerifikasiDeleteArgs>(args: SelectSubset<T, otpVerifikasiDeleteArgs<ExtArgs>>): Prisma__otpVerifikasiClient<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OtpVerifikasi.
     * @param {otpVerifikasiUpdateArgs} args - Arguments to update one OtpVerifikasi.
     * @example
     * // Update one OtpVerifikasi
     * const otpVerifikasi = await prisma.otpVerifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends otpVerifikasiUpdateArgs>(args: SelectSubset<T, otpVerifikasiUpdateArgs<ExtArgs>>): Prisma__otpVerifikasiClient<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OtpVerifikasis.
     * @param {otpVerifikasiDeleteManyArgs} args - Arguments to filter OtpVerifikasis to delete.
     * @example
     * // Delete a few OtpVerifikasis
     * const { count } = await prisma.otpVerifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends otpVerifikasiDeleteManyArgs>(args?: SelectSubset<T, otpVerifikasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpVerifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OtpVerifikasis
     * const otpVerifikasi = await prisma.otpVerifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends otpVerifikasiUpdateManyArgs>(args: SelectSubset<T, otpVerifikasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OtpVerifikasis and returns the data updated in the database.
     * @param {otpVerifikasiUpdateManyAndReturnArgs} args - Arguments to update many OtpVerifikasis.
     * @example
     * // Update many OtpVerifikasis
     * const otpVerifikasi = await prisma.otpVerifikasi.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OtpVerifikasis and only return the `id`
     * const otpVerifikasiWithIdOnly = await prisma.otpVerifikasi.updateManyAndReturn({
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
    updateManyAndReturn<T extends otpVerifikasiUpdateManyAndReturnArgs>(args: SelectSubset<T, otpVerifikasiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OtpVerifikasi.
     * @param {otpVerifikasiUpsertArgs} args - Arguments to update or create a OtpVerifikasi.
     * @example
     * // Update or create a OtpVerifikasi
     * const otpVerifikasi = await prisma.otpVerifikasi.upsert({
     *   create: {
     *     // ... data to create a OtpVerifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OtpVerifikasi we want to update
     *   }
     * })
     */
    upsert<T extends otpVerifikasiUpsertArgs>(args: SelectSubset<T, otpVerifikasiUpsertArgs<ExtArgs>>): Prisma__otpVerifikasiClient<$Result.GetResult<Prisma.$otpVerifikasiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OtpVerifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpVerifikasiCountArgs} args - Arguments to filter OtpVerifikasis to count.
     * @example
     * // Count the number of OtpVerifikasis
     * const count = await prisma.otpVerifikasi.count({
     *   where: {
     *     // ... the filter for the OtpVerifikasis we want to count
     *   }
     * })
    **/
    count<T extends otpVerifikasiCountArgs>(
      args?: Subset<T, otpVerifikasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpVerifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OtpVerifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpVerifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpVerifikasiAggregateArgs>(args: Subset<T, OtpVerifikasiAggregateArgs>): Prisma.PrismaPromise<GetOtpVerifikasiAggregateType<T>>

    /**
     * Group by OtpVerifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {otpVerifikasiGroupByArgs} args - Group by arguments.
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
      T extends otpVerifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: otpVerifikasiGroupByArgs['orderBy'] }
        : { orderBy?: otpVerifikasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, otpVerifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpVerifikasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the otpVerifikasi model
   */
  readonly fields: otpVerifikasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for otpVerifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__otpVerifikasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the otpVerifikasi model
   */
  interface otpVerifikasiFieldRefs {
    readonly id: FieldRef<"otpVerifikasi", 'Int'>
    readonly userId: FieldRef<"otpVerifikasi", 'String'>
    readonly code: FieldRef<"otpVerifikasi", 'String'>
    readonly expireDate: FieldRef<"otpVerifikasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * otpVerifikasi findUnique
   */
  export type otpVerifikasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * Filter, which otpVerifikasi to fetch.
     */
    where: otpVerifikasiWhereUniqueInput
  }

  /**
   * otpVerifikasi findUniqueOrThrow
   */
  export type otpVerifikasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * Filter, which otpVerifikasi to fetch.
     */
    where: otpVerifikasiWhereUniqueInput
  }

  /**
   * otpVerifikasi findFirst
   */
  export type otpVerifikasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * Filter, which otpVerifikasi to fetch.
     */
    where?: otpVerifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otpVerifikasis to fetch.
     */
    orderBy?: otpVerifikasiOrderByWithRelationInput | otpVerifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otpVerifikasis.
     */
    cursor?: otpVerifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otpVerifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otpVerifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otpVerifikasis.
     */
    distinct?: OtpVerifikasiScalarFieldEnum | OtpVerifikasiScalarFieldEnum[]
  }

  /**
   * otpVerifikasi findFirstOrThrow
   */
  export type otpVerifikasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * Filter, which otpVerifikasi to fetch.
     */
    where?: otpVerifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otpVerifikasis to fetch.
     */
    orderBy?: otpVerifikasiOrderByWithRelationInput | otpVerifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for otpVerifikasis.
     */
    cursor?: otpVerifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otpVerifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otpVerifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of otpVerifikasis.
     */
    distinct?: OtpVerifikasiScalarFieldEnum | OtpVerifikasiScalarFieldEnum[]
  }

  /**
   * otpVerifikasi findMany
   */
  export type otpVerifikasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * Filter, which otpVerifikasis to fetch.
     */
    where?: otpVerifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of otpVerifikasis to fetch.
     */
    orderBy?: otpVerifikasiOrderByWithRelationInput | otpVerifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing otpVerifikasis.
     */
    cursor?: otpVerifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` otpVerifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` otpVerifikasis.
     */
    skip?: number
    distinct?: OtpVerifikasiScalarFieldEnum | OtpVerifikasiScalarFieldEnum[]
  }

  /**
   * otpVerifikasi create
   */
  export type otpVerifikasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * The data needed to create a otpVerifikasi.
     */
    data: XOR<otpVerifikasiCreateInput, otpVerifikasiUncheckedCreateInput>
  }

  /**
   * otpVerifikasi createMany
   */
  export type otpVerifikasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many otpVerifikasis.
     */
    data: otpVerifikasiCreateManyInput | otpVerifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * otpVerifikasi createManyAndReturn
   */
  export type otpVerifikasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * The data used to create many otpVerifikasis.
     */
    data: otpVerifikasiCreateManyInput | otpVerifikasiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * otpVerifikasi update
   */
  export type otpVerifikasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * The data needed to update a otpVerifikasi.
     */
    data: XOR<otpVerifikasiUpdateInput, otpVerifikasiUncheckedUpdateInput>
    /**
     * Choose, which otpVerifikasi to update.
     */
    where: otpVerifikasiWhereUniqueInput
  }

  /**
   * otpVerifikasi updateMany
   */
  export type otpVerifikasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update otpVerifikasis.
     */
    data: XOR<otpVerifikasiUpdateManyMutationInput, otpVerifikasiUncheckedUpdateManyInput>
    /**
     * Filter which otpVerifikasis to update
     */
    where?: otpVerifikasiWhereInput
    /**
     * Limit how many otpVerifikasis to update.
     */
    limit?: number
  }

  /**
   * otpVerifikasi updateManyAndReturn
   */
  export type otpVerifikasiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * The data used to update otpVerifikasis.
     */
    data: XOR<otpVerifikasiUpdateManyMutationInput, otpVerifikasiUncheckedUpdateManyInput>
    /**
     * Filter which otpVerifikasis to update
     */
    where?: otpVerifikasiWhereInput
    /**
     * Limit how many otpVerifikasis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * otpVerifikasi upsert
   */
  export type otpVerifikasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * The filter to search for the otpVerifikasi to update in case it exists.
     */
    where: otpVerifikasiWhereUniqueInput
    /**
     * In case the otpVerifikasi found by the `where` argument doesn't exist, create a new otpVerifikasi with this data.
     */
    create: XOR<otpVerifikasiCreateInput, otpVerifikasiUncheckedCreateInput>
    /**
     * In case the otpVerifikasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<otpVerifikasiUpdateInput, otpVerifikasiUncheckedUpdateInput>
  }

  /**
   * otpVerifikasi delete
   */
  export type otpVerifikasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
    /**
     * Filter which otpVerifikasi to delete.
     */
    where: otpVerifikasiWhereUniqueInput
  }

  /**
   * otpVerifikasi deleteMany
   */
  export type otpVerifikasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which otpVerifikasis to delete
     */
    where?: otpVerifikasiWhereInput
    /**
     * Limit how many otpVerifikasis to delete.
     */
    limit?: number
  }

  /**
   * otpVerifikasi without action
   */
  export type otpVerifikasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the otpVerifikasi
     */
    select?: otpVerifikasiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the otpVerifikasi
     */
    omit?: otpVerifikasiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: otpVerifikasiInclude<ExtArgs> | null
  }


  /**
   * Model LogsLogin
   */

  export type AggregateLogsLogin = {
    _count: LogsLoginCountAggregateOutputType | null
    _min: LogsLoginMinAggregateOutputType | null
    _max: LogsLoginMaxAggregateOutputType | null
  }

  export type LogsLoginMinAggregateOutputType = {
    logsId: string | null
    userId: string | null
    token: string | null
    isActive: boolean | null
    device: string | null
    ip: string | null
    createdDate: Date | null
    expireDate: Date | null
  }

  export type LogsLoginMaxAggregateOutputType = {
    logsId: string | null
    userId: string | null
    token: string | null
    isActive: boolean | null
    device: string | null
    ip: string | null
    createdDate: Date | null
    expireDate: Date | null
  }

  export type LogsLoginCountAggregateOutputType = {
    logsId: number
    userId: number
    token: number
    isActive: number
    device: number
    ip: number
    createdDate: number
    expireDate: number
    _all: number
  }


  export type LogsLoginMinAggregateInputType = {
    logsId?: true
    userId?: true
    token?: true
    isActive?: true
    device?: true
    ip?: true
    createdDate?: true
    expireDate?: true
  }

  export type LogsLoginMaxAggregateInputType = {
    logsId?: true
    userId?: true
    token?: true
    isActive?: true
    device?: true
    ip?: true
    createdDate?: true
    expireDate?: true
  }

  export type LogsLoginCountAggregateInputType = {
    logsId?: true
    userId?: true
    token?: true
    isActive?: true
    device?: true
    ip?: true
    createdDate?: true
    expireDate?: true
    _all?: true
  }

  export type LogsLoginAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogsLogin to aggregate.
     */
    where?: LogsLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogsLogins to fetch.
     */
    orderBy?: LogsLoginOrderByWithRelationInput | LogsLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LogsLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogsLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogsLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LogsLogins
    **/
    _count?: true | LogsLoginCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LogsLoginMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LogsLoginMaxAggregateInputType
  }

  export type GetLogsLoginAggregateType<T extends LogsLoginAggregateArgs> = {
        [P in keyof T & keyof AggregateLogsLogin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLogsLogin[P]>
      : GetScalarType<T[P], AggregateLogsLogin[P]>
  }




  export type LogsLoginGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LogsLoginWhereInput
    orderBy?: LogsLoginOrderByWithAggregationInput | LogsLoginOrderByWithAggregationInput[]
    by: LogsLoginScalarFieldEnum[] | LogsLoginScalarFieldEnum
    having?: LogsLoginScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LogsLoginCountAggregateInputType | true
    _min?: LogsLoginMinAggregateInputType
    _max?: LogsLoginMaxAggregateInputType
  }

  export type LogsLoginGroupByOutputType = {
    logsId: string
    userId: string
    token: string
    isActive: boolean
    device: string | null
    ip: string | null
    createdDate: Date
    expireDate: Date
    _count: LogsLoginCountAggregateOutputType | null
    _min: LogsLoginMinAggregateOutputType | null
    _max: LogsLoginMaxAggregateOutputType | null
  }

  type GetLogsLoginGroupByPayload<T extends LogsLoginGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LogsLoginGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LogsLoginGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LogsLoginGroupByOutputType[P]>
            : GetScalarType<T[P], LogsLoginGroupByOutputType[P]>
        }
      >
    >


  export type LogsLoginSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logsId?: boolean
    userId?: boolean
    token?: boolean
    isActive?: boolean
    device?: boolean
    ip?: boolean
    createdDate?: boolean
    expireDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logsLogin"]>

  export type LogsLoginSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logsId?: boolean
    userId?: boolean
    token?: boolean
    isActive?: boolean
    device?: boolean
    ip?: boolean
    createdDate?: boolean
    expireDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logsLogin"]>

  export type LogsLoginSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    logsId?: boolean
    userId?: boolean
    token?: boolean
    isActive?: boolean
    device?: boolean
    ip?: boolean
    createdDate?: boolean
    expireDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["logsLogin"]>

  export type LogsLoginSelectScalar = {
    logsId?: boolean
    userId?: boolean
    token?: boolean
    isActive?: boolean
    device?: boolean
    ip?: boolean
    createdDate?: boolean
    expireDate?: boolean
  }

  export type LogsLoginOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"logsId" | "userId" | "token" | "isActive" | "device" | "ip" | "createdDate" | "expireDate", ExtArgs["result"]["logsLogin"]>
  export type LogsLoginInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogsLoginIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LogsLoginIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LogsLoginPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LogsLogin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      logsId: string
      userId: string
      token: string
      isActive: boolean
      device: string | null
      ip: string | null
      createdDate: Date
      expireDate: Date
    }, ExtArgs["result"]["logsLogin"]>
    composites: {}
  }

  type LogsLoginGetPayload<S extends boolean | null | undefined | LogsLoginDefaultArgs> = $Result.GetResult<Prisma.$LogsLoginPayload, S>

  type LogsLoginCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LogsLoginFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LogsLoginCountAggregateInputType | true
    }

  export interface LogsLoginDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LogsLogin'], meta: { name: 'LogsLogin' } }
    /**
     * Find zero or one LogsLogin that matches the filter.
     * @param {LogsLoginFindUniqueArgs} args - Arguments to find a LogsLogin
     * @example
     * // Get one LogsLogin
     * const logsLogin = await prisma.logsLogin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LogsLoginFindUniqueArgs>(args: SelectSubset<T, LogsLoginFindUniqueArgs<ExtArgs>>): Prisma__LogsLoginClient<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LogsLogin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LogsLoginFindUniqueOrThrowArgs} args - Arguments to find a LogsLogin
     * @example
     * // Get one LogsLogin
     * const logsLogin = await prisma.logsLogin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LogsLoginFindUniqueOrThrowArgs>(args: SelectSubset<T, LogsLoginFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LogsLoginClient<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogsLogin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsLoginFindFirstArgs} args - Arguments to find a LogsLogin
     * @example
     * // Get one LogsLogin
     * const logsLogin = await prisma.logsLogin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LogsLoginFindFirstArgs>(args?: SelectSubset<T, LogsLoginFindFirstArgs<ExtArgs>>): Prisma__LogsLoginClient<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LogsLogin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsLoginFindFirstOrThrowArgs} args - Arguments to find a LogsLogin
     * @example
     * // Get one LogsLogin
     * const logsLogin = await prisma.logsLogin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LogsLoginFindFirstOrThrowArgs>(args?: SelectSubset<T, LogsLoginFindFirstOrThrowArgs<ExtArgs>>): Prisma__LogsLoginClient<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LogsLogins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsLoginFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LogsLogins
     * const logsLogins = await prisma.logsLogin.findMany()
     * 
     * // Get first 10 LogsLogins
     * const logsLogins = await prisma.logsLogin.findMany({ take: 10 })
     * 
     * // Only select the `logsId`
     * const logsLoginWithLogsIdOnly = await prisma.logsLogin.findMany({ select: { logsId: true } })
     * 
     */
    findMany<T extends LogsLoginFindManyArgs>(args?: SelectSubset<T, LogsLoginFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LogsLogin.
     * @param {LogsLoginCreateArgs} args - Arguments to create a LogsLogin.
     * @example
     * // Create one LogsLogin
     * const LogsLogin = await prisma.logsLogin.create({
     *   data: {
     *     // ... data to create a LogsLogin
     *   }
     * })
     * 
     */
    create<T extends LogsLoginCreateArgs>(args: SelectSubset<T, LogsLoginCreateArgs<ExtArgs>>): Prisma__LogsLoginClient<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LogsLogins.
     * @param {LogsLoginCreateManyArgs} args - Arguments to create many LogsLogins.
     * @example
     * // Create many LogsLogins
     * const logsLogin = await prisma.logsLogin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LogsLoginCreateManyArgs>(args?: SelectSubset<T, LogsLoginCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LogsLogins and returns the data saved in the database.
     * @param {LogsLoginCreateManyAndReturnArgs} args - Arguments to create many LogsLogins.
     * @example
     * // Create many LogsLogins
     * const logsLogin = await prisma.logsLogin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LogsLogins and only return the `logsId`
     * const logsLoginWithLogsIdOnly = await prisma.logsLogin.createManyAndReturn({
     *   select: { logsId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LogsLoginCreateManyAndReturnArgs>(args?: SelectSubset<T, LogsLoginCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LogsLogin.
     * @param {LogsLoginDeleteArgs} args - Arguments to delete one LogsLogin.
     * @example
     * // Delete one LogsLogin
     * const LogsLogin = await prisma.logsLogin.delete({
     *   where: {
     *     // ... filter to delete one LogsLogin
     *   }
     * })
     * 
     */
    delete<T extends LogsLoginDeleteArgs>(args: SelectSubset<T, LogsLoginDeleteArgs<ExtArgs>>): Prisma__LogsLoginClient<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LogsLogin.
     * @param {LogsLoginUpdateArgs} args - Arguments to update one LogsLogin.
     * @example
     * // Update one LogsLogin
     * const logsLogin = await prisma.logsLogin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LogsLoginUpdateArgs>(args: SelectSubset<T, LogsLoginUpdateArgs<ExtArgs>>): Prisma__LogsLoginClient<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LogsLogins.
     * @param {LogsLoginDeleteManyArgs} args - Arguments to filter LogsLogins to delete.
     * @example
     * // Delete a few LogsLogins
     * const { count } = await prisma.logsLogin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LogsLoginDeleteManyArgs>(args?: SelectSubset<T, LogsLoginDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogsLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsLoginUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LogsLogins
     * const logsLogin = await prisma.logsLogin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LogsLoginUpdateManyArgs>(args: SelectSubset<T, LogsLoginUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LogsLogins and returns the data updated in the database.
     * @param {LogsLoginUpdateManyAndReturnArgs} args - Arguments to update many LogsLogins.
     * @example
     * // Update many LogsLogins
     * const logsLogin = await prisma.logsLogin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LogsLogins and only return the `logsId`
     * const logsLoginWithLogsIdOnly = await prisma.logsLogin.updateManyAndReturn({
     *   select: { logsId: true },
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
    updateManyAndReturn<T extends LogsLoginUpdateManyAndReturnArgs>(args: SelectSubset<T, LogsLoginUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LogsLogin.
     * @param {LogsLoginUpsertArgs} args - Arguments to update or create a LogsLogin.
     * @example
     * // Update or create a LogsLogin
     * const logsLogin = await prisma.logsLogin.upsert({
     *   create: {
     *     // ... data to create a LogsLogin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LogsLogin we want to update
     *   }
     * })
     */
    upsert<T extends LogsLoginUpsertArgs>(args: SelectSubset<T, LogsLoginUpsertArgs<ExtArgs>>): Prisma__LogsLoginClient<$Result.GetResult<Prisma.$LogsLoginPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LogsLogins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsLoginCountArgs} args - Arguments to filter LogsLogins to count.
     * @example
     * // Count the number of LogsLogins
     * const count = await prisma.logsLogin.count({
     *   where: {
     *     // ... the filter for the LogsLogins we want to count
     *   }
     * })
    **/
    count<T extends LogsLoginCountArgs>(
      args?: Subset<T, LogsLoginCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LogsLoginCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LogsLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsLoginAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LogsLoginAggregateArgs>(args: Subset<T, LogsLoginAggregateArgs>): Prisma.PrismaPromise<GetLogsLoginAggregateType<T>>

    /**
     * Group by LogsLogin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LogsLoginGroupByArgs} args - Group by arguments.
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
      T extends LogsLoginGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LogsLoginGroupByArgs['orderBy'] }
        : { orderBy?: LogsLoginGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LogsLoginGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLogsLoginGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LogsLogin model
   */
  readonly fields: LogsLoginFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LogsLogin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LogsLoginClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LogsLogin model
   */
  interface LogsLoginFieldRefs {
    readonly logsId: FieldRef<"LogsLogin", 'String'>
    readonly userId: FieldRef<"LogsLogin", 'String'>
    readonly token: FieldRef<"LogsLogin", 'String'>
    readonly isActive: FieldRef<"LogsLogin", 'Boolean'>
    readonly device: FieldRef<"LogsLogin", 'String'>
    readonly ip: FieldRef<"LogsLogin", 'String'>
    readonly createdDate: FieldRef<"LogsLogin", 'DateTime'>
    readonly expireDate: FieldRef<"LogsLogin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LogsLogin findUnique
   */
  export type LogsLoginFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * Filter, which LogsLogin to fetch.
     */
    where: LogsLoginWhereUniqueInput
  }

  /**
   * LogsLogin findUniqueOrThrow
   */
  export type LogsLoginFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * Filter, which LogsLogin to fetch.
     */
    where: LogsLoginWhereUniqueInput
  }

  /**
   * LogsLogin findFirst
   */
  export type LogsLoginFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * Filter, which LogsLogin to fetch.
     */
    where?: LogsLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogsLogins to fetch.
     */
    orderBy?: LogsLoginOrderByWithRelationInput | LogsLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogsLogins.
     */
    cursor?: LogsLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogsLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogsLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogsLogins.
     */
    distinct?: LogsLoginScalarFieldEnum | LogsLoginScalarFieldEnum[]
  }

  /**
   * LogsLogin findFirstOrThrow
   */
  export type LogsLoginFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * Filter, which LogsLogin to fetch.
     */
    where?: LogsLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogsLogins to fetch.
     */
    orderBy?: LogsLoginOrderByWithRelationInput | LogsLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LogsLogins.
     */
    cursor?: LogsLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogsLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogsLogins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LogsLogins.
     */
    distinct?: LogsLoginScalarFieldEnum | LogsLoginScalarFieldEnum[]
  }

  /**
   * LogsLogin findMany
   */
  export type LogsLoginFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * Filter, which LogsLogins to fetch.
     */
    where?: LogsLoginWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LogsLogins to fetch.
     */
    orderBy?: LogsLoginOrderByWithRelationInput | LogsLoginOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LogsLogins.
     */
    cursor?: LogsLoginWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LogsLogins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LogsLogins.
     */
    skip?: number
    distinct?: LogsLoginScalarFieldEnum | LogsLoginScalarFieldEnum[]
  }

  /**
   * LogsLogin create
   */
  export type LogsLoginCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * The data needed to create a LogsLogin.
     */
    data: XOR<LogsLoginCreateInput, LogsLoginUncheckedCreateInput>
  }

  /**
   * LogsLogin createMany
   */
  export type LogsLoginCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LogsLogins.
     */
    data: LogsLoginCreateManyInput | LogsLoginCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LogsLogin createManyAndReturn
   */
  export type LogsLoginCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * The data used to create many LogsLogins.
     */
    data: LogsLoginCreateManyInput | LogsLoginCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogsLogin update
   */
  export type LogsLoginUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * The data needed to update a LogsLogin.
     */
    data: XOR<LogsLoginUpdateInput, LogsLoginUncheckedUpdateInput>
    /**
     * Choose, which LogsLogin to update.
     */
    where: LogsLoginWhereUniqueInput
  }

  /**
   * LogsLogin updateMany
   */
  export type LogsLoginUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LogsLogins.
     */
    data: XOR<LogsLoginUpdateManyMutationInput, LogsLoginUncheckedUpdateManyInput>
    /**
     * Filter which LogsLogins to update
     */
    where?: LogsLoginWhereInput
    /**
     * Limit how many LogsLogins to update.
     */
    limit?: number
  }

  /**
   * LogsLogin updateManyAndReturn
   */
  export type LogsLoginUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * The data used to update LogsLogins.
     */
    data: XOR<LogsLoginUpdateManyMutationInput, LogsLoginUncheckedUpdateManyInput>
    /**
     * Filter which LogsLogins to update
     */
    where?: LogsLoginWhereInput
    /**
     * Limit how many LogsLogins to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LogsLogin upsert
   */
  export type LogsLoginUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * The filter to search for the LogsLogin to update in case it exists.
     */
    where: LogsLoginWhereUniqueInput
    /**
     * In case the LogsLogin found by the `where` argument doesn't exist, create a new LogsLogin with this data.
     */
    create: XOR<LogsLoginCreateInput, LogsLoginUncheckedCreateInput>
    /**
     * In case the LogsLogin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LogsLoginUpdateInput, LogsLoginUncheckedUpdateInput>
  }

  /**
   * LogsLogin delete
   */
  export type LogsLoginDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
    /**
     * Filter which LogsLogin to delete.
     */
    where: LogsLoginWhereUniqueInput
  }

  /**
   * LogsLogin deleteMany
   */
  export type LogsLoginDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LogsLogins to delete
     */
    where?: LogsLoginWhereInput
    /**
     * Limit how many LogsLogins to delete.
     */
    limit?: number
  }

  /**
   * LogsLogin without action
   */
  export type LogsLoginDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LogsLogin
     */
    select?: LogsLoginSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LogsLogin
     */
    omit?: LogsLoginOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LogsLoginInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    roleId: number | null
  }

  export type RoleSumAggregateOutputType = {
    roleId: number | null
  }

  export type RoleMinAggregateOutputType = {
    roleId: number | null
    roleName: string | null
  }

  export type RoleMaxAggregateOutputType = {
    roleId: number | null
    roleName: string | null
  }

  export type RoleCountAggregateOutputType = {
    roleId: number
    roleName: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    roleId?: true
  }

  export type RoleSumAggregateInputType = {
    roleId?: true
  }

  export type RoleMinAggregateInputType = {
    roleId?: true
    roleName?: true
  }

  export type RoleMaxAggregateInputType = {
    roleId?: true
    roleName?: true
  }

  export type RoleCountAggregateInputType = {
    roleId?: true
    roleName?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    roleId: number
    roleName: string
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
    UserHasRoleAccess?: boolean | Role$UserHasRoleAccessArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    roleName?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    roleId?: boolean
    roleName?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "roleName", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserHasRoleAccess?: boolean | Role$UserHasRoleAccessArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      UserHasRoleAccess: Prisma.$UserHasRoleAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: number
      roleName: string
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `roleId`
     * const roleWithRoleIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { roleId: true },
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
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserHasRoleAccess<T extends Role$UserHasRoleAccessArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserHasRoleAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly roleId: FieldRef<"Role", 'Int'>
    readonly roleName: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.UserHasRoleAccess
   */
  export type Role$UserHasRoleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    where?: UserHasRoleAccessWhereInput
    orderBy?: UserHasRoleAccessOrderByWithRelationInput | UserHasRoleAccessOrderByWithRelationInput[]
    cursor?: UserHasRoleAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHasRoleAccessScalarFieldEnum | UserHasRoleAccessScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Access
   */

  export type AggregateAccess = {
    _count: AccessCountAggregateOutputType | null
    _avg: AccessAvgAggregateOutputType | null
    _sum: AccessSumAggregateOutputType | null
    _min: AccessMinAggregateOutputType | null
    _max: AccessMaxAggregateOutputType | null
  }

  export type AccessAvgAggregateOutputType = {
    accessId: number | null
  }

  export type AccessSumAggregateOutputType = {
    accessId: number | null
  }

  export type AccessMinAggregateOutputType = {
    accessId: number | null
    accessName: string | null
  }

  export type AccessMaxAggregateOutputType = {
    accessId: number | null
    accessName: string | null
  }

  export type AccessCountAggregateOutputType = {
    accessId: number
    accessName: number
    _all: number
  }


  export type AccessAvgAggregateInputType = {
    accessId?: true
  }

  export type AccessSumAggregateInputType = {
    accessId?: true
  }

  export type AccessMinAggregateInputType = {
    accessId?: true
    accessName?: true
  }

  export type AccessMaxAggregateInputType = {
    accessId?: true
    accessName?: true
  }

  export type AccessCountAggregateInputType = {
    accessId?: true
    accessName?: true
    _all?: true
  }

  export type AccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Access to aggregate.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accesses
    **/
    _count?: true | AccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessMaxAggregateInputType
  }

  export type GetAccessAggregateType<T extends AccessAggregateArgs> = {
        [P in keyof T & keyof AggregateAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccess[P]>
      : GetScalarType<T[P], AggregateAccess[P]>
  }




  export type AccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessWhereInput
    orderBy?: AccessOrderByWithAggregationInput | AccessOrderByWithAggregationInput[]
    by: AccessScalarFieldEnum[] | AccessScalarFieldEnum
    having?: AccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessCountAggregateInputType | true
    _avg?: AccessAvgAggregateInputType
    _sum?: AccessSumAggregateInputType
    _min?: AccessMinAggregateInputType
    _max?: AccessMaxAggregateInputType
  }

  export type AccessGroupByOutputType = {
    accessId: number
    accessName: string
    _count: AccessCountAggregateOutputType | null
    _avg: AccessAvgAggregateOutputType | null
    _sum: AccessSumAggregateOutputType | null
    _min: AccessMinAggregateOutputType | null
    _max: AccessMaxAggregateOutputType | null
  }

  type GetAccessGroupByPayload<T extends AccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessGroupByOutputType[P]>
            : GetScalarType<T[P], AccessGroupByOutputType[P]>
        }
      >
    >


  export type AccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accessId?: boolean
    accessName?: boolean
    UserHasRoleAccess?: boolean | Access$UserHasRoleAccessArgs<ExtArgs>
    _count?: boolean | AccessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["access"]>

  export type AccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accessId?: boolean
    accessName?: boolean
  }, ExtArgs["result"]["access"]>

  export type AccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accessId?: boolean
    accessName?: boolean
  }, ExtArgs["result"]["access"]>

  export type AccessSelectScalar = {
    accessId?: boolean
    accessName?: boolean
  }

  export type AccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accessId" | "accessName", ExtArgs["result"]["access"]>
  export type AccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserHasRoleAccess?: boolean | Access$UserHasRoleAccessArgs<ExtArgs>
    _count?: boolean | AccessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Access"
    objects: {
      UserHasRoleAccess: Prisma.$UserHasRoleAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      accessId: number
      accessName: string
    }, ExtArgs["result"]["access"]>
    composites: {}
  }

  type AccessGetPayload<S extends boolean | null | undefined | AccessDefaultArgs> = $Result.GetResult<Prisma.$AccessPayload, S>

  type AccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessCountAggregateInputType | true
    }

  export interface AccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Access'], meta: { name: 'Access' } }
    /**
     * Find zero or one Access that matches the filter.
     * @param {AccessFindUniqueArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessFindUniqueArgs>(args: SelectSubset<T, AccessFindUniqueArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Access that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessFindUniqueOrThrowArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindFirstArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessFindFirstArgs>(args?: SelectSubset<T, AccessFindFirstArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Access that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindFirstOrThrowArgs} args - Arguments to find a Access
     * @example
     * // Get one Access
     * const access = await prisma.access.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accesses
     * const accesses = await prisma.access.findMany()
     * 
     * // Get first 10 Accesses
     * const accesses = await prisma.access.findMany({ take: 10 })
     * 
     * // Only select the `accessId`
     * const accessWithAccessIdOnly = await prisma.access.findMany({ select: { accessId: true } })
     * 
     */
    findMany<T extends AccessFindManyArgs>(args?: SelectSubset<T, AccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Access.
     * @param {AccessCreateArgs} args - Arguments to create a Access.
     * @example
     * // Create one Access
     * const Access = await prisma.access.create({
     *   data: {
     *     // ... data to create a Access
     *   }
     * })
     * 
     */
    create<T extends AccessCreateArgs>(args: SelectSubset<T, AccessCreateArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accesses.
     * @param {AccessCreateManyArgs} args - Arguments to create many Accesses.
     * @example
     * // Create many Accesses
     * const access = await prisma.access.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessCreateManyArgs>(args?: SelectSubset<T, AccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accesses and returns the data saved in the database.
     * @param {AccessCreateManyAndReturnArgs} args - Arguments to create many Accesses.
     * @example
     * // Create many Accesses
     * const access = await prisma.access.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accesses and only return the `accessId`
     * const accessWithAccessIdOnly = await prisma.access.createManyAndReturn({
     *   select: { accessId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Access.
     * @param {AccessDeleteArgs} args - Arguments to delete one Access.
     * @example
     * // Delete one Access
     * const Access = await prisma.access.delete({
     *   where: {
     *     // ... filter to delete one Access
     *   }
     * })
     * 
     */
    delete<T extends AccessDeleteArgs>(args: SelectSubset<T, AccessDeleteArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Access.
     * @param {AccessUpdateArgs} args - Arguments to update one Access.
     * @example
     * // Update one Access
     * const access = await prisma.access.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessUpdateArgs>(args: SelectSubset<T, AccessUpdateArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accesses.
     * @param {AccessDeleteManyArgs} args - Arguments to filter Accesses to delete.
     * @example
     * // Delete a few Accesses
     * const { count } = await prisma.access.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessDeleteManyArgs>(args?: SelectSubset<T, AccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accesses
     * const access = await prisma.access.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessUpdateManyArgs>(args: SelectSubset<T, AccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accesses and returns the data updated in the database.
     * @param {AccessUpdateManyAndReturnArgs} args - Arguments to update many Accesses.
     * @example
     * // Update many Accesses
     * const access = await prisma.access.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accesses and only return the `accessId`
     * const accessWithAccessIdOnly = await prisma.access.updateManyAndReturn({
     *   select: { accessId: true },
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
    updateManyAndReturn<T extends AccessUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Access.
     * @param {AccessUpsertArgs} args - Arguments to update or create a Access.
     * @example
     * // Update or create a Access
     * const access = await prisma.access.upsert({
     *   create: {
     *     // ... data to create a Access
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Access we want to update
     *   }
     * })
     */
    upsert<T extends AccessUpsertArgs>(args: SelectSubset<T, AccessUpsertArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessCountArgs} args - Arguments to filter Accesses to count.
     * @example
     * // Count the number of Accesses
     * const count = await prisma.access.count({
     *   where: {
     *     // ... the filter for the Accesses we want to count
     *   }
     * })
    **/
    count<T extends AccessCountArgs>(
      args?: Subset<T, AccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccessAggregateArgs>(args: Subset<T, AccessAggregateArgs>): Prisma.PrismaPromise<GetAccessAggregateType<T>>

    /**
     * Group by Access.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGroupByArgs} args - Group by arguments.
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
      T extends AccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessGroupByArgs['orderBy'] }
        : { orderBy?: AccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Access model
   */
  readonly fields: AccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Access.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserHasRoleAccess<T extends Access$UserHasRoleAccessArgs<ExtArgs> = {}>(args?: Subset<T, Access$UserHasRoleAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Access model
   */
  interface AccessFieldRefs {
    readonly accessId: FieldRef<"Access", 'Int'>
    readonly accessName: FieldRef<"Access", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Access findUnique
   */
  export type AccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where: AccessWhereUniqueInput
  }

  /**
   * Access findUniqueOrThrow
   */
  export type AccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where: AccessWhereUniqueInput
  }

  /**
   * Access findFirst
   */
  export type AccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accesses.
     */
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * Access findFirstOrThrow
   */
  export type AccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Access to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accesses.
     */
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * Access findMany
   */
  export type AccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter, which Accesses to fetch.
     */
    where?: AccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accesses to fetch.
     */
    orderBy?: AccessOrderByWithRelationInput | AccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accesses.
     */
    cursor?: AccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accesses.
     */
    skip?: number
    distinct?: AccessScalarFieldEnum | AccessScalarFieldEnum[]
  }

  /**
   * Access create
   */
  export type AccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The data needed to create a Access.
     */
    data: XOR<AccessCreateInput, AccessUncheckedCreateInput>
  }

  /**
   * Access createMany
   */
  export type AccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accesses.
     */
    data: AccessCreateManyInput | AccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Access createManyAndReturn
   */
  export type AccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * The data used to create many Accesses.
     */
    data: AccessCreateManyInput | AccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Access update
   */
  export type AccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The data needed to update a Access.
     */
    data: XOR<AccessUpdateInput, AccessUncheckedUpdateInput>
    /**
     * Choose, which Access to update.
     */
    where: AccessWhereUniqueInput
  }

  /**
   * Access updateMany
   */
  export type AccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accesses.
     */
    data: XOR<AccessUpdateManyMutationInput, AccessUncheckedUpdateManyInput>
    /**
     * Filter which Accesses to update
     */
    where?: AccessWhereInput
    /**
     * Limit how many Accesses to update.
     */
    limit?: number
  }

  /**
   * Access updateManyAndReturn
   */
  export type AccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * The data used to update Accesses.
     */
    data: XOR<AccessUpdateManyMutationInput, AccessUncheckedUpdateManyInput>
    /**
     * Filter which Accesses to update
     */
    where?: AccessWhereInput
    /**
     * Limit how many Accesses to update.
     */
    limit?: number
  }

  /**
   * Access upsert
   */
  export type AccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * The filter to search for the Access to update in case it exists.
     */
    where: AccessWhereUniqueInput
    /**
     * In case the Access found by the `where` argument doesn't exist, create a new Access with this data.
     */
    create: XOR<AccessCreateInput, AccessUncheckedCreateInput>
    /**
     * In case the Access was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessUpdateInput, AccessUncheckedUpdateInput>
  }

  /**
   * Access delete
   */
  export type AccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
    /**
     * Filter which Access to delete.
     */
    where: AccessWhereUniqueInput
  }

  /**
   * Access deleteMany
   */
  export type AccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accesses to delete
     */
    where?: AccessWhereInput
    /**
     * Limit how many Accesses to delete.
     */
    limit?: number
  }

  /**
   * Access.UserHasRoleAccess
   */
  export type Access$UserHasRoleAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    where?: UserHasRoleAccessWhereInput
    orderBy?: UserHasRoleAccessOrderByWithRelationInput | UserHasRoleAccessOrderByWithRelationInput[]
    cursor?: UserHasRoleAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserHasRoleAccessScalarFieldEnum | UserHasRoleAccessScalarFieldEnum[]
  }

  /**
   * Access without action
   */
  export type AccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Access
     */
    select?: AccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Access
     */
    omit?: AccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccessInclude<ExtArgs> | null
  }


  /**
   * Model UserHasRoleAccess
   */

  export type AggregateUserHasRoleAccess = {
    _count: UserHasRoleAccessCountAggregateOutputType | null
    _avg: UserHasRoleAccessAvgAggregateOutputType | null
    _sum: UserHasRoleAccessSumAggregateOutputType | null
    _min: UserHasRoleAccessMinAggregateOutputType | null
    _max: UserHasRoleAccessMaxAggregateOutputType | null
  }

  export type UserHasRoleAccessAvgAggregateOutputType = {
    roleId: number | null
    accessId: number | null
  }

  export type UserHasRoleAccessSumAggregateOutputType = {
    roleId: number | null
    accessId: number | null
  }

  export type UserHasRoleAccessMinAggregateOutputType = {
    userId: string | null
    roleId: number | null
    accessId: number | null
  }

  export type UserHasRoleAccessMaxAggregateOutputType = {
    userId: string | null
    roleId: number | null
    accessId: number | null
  }

  export type UserHasRoleAccessCountAggregateOutputType = {
    userId: number
    roleId: number
    accessId: number
    _all: number
  }


  export type UserHasRoleAccessAvgAggregateInputType = {
    roleId?: true
    accessId?: true
  }

  export type UserHasRoleAccessSumAggregateInputType = {
    roleId?: true
    accessId?: true
  }

  export type UserHasRoleAccessMinAggregateInputType = {
    userId?: true
    roleId?: true
    accessId?: true
  }

  export type UserHasRoleAccessMaxAggregateInputType = {
    userId?: true
    roleId?: true
    accessId?: true
  }

  export type UserHasRoleAccessCountAggregateInputType = {
    userId?: true
    roleId?: true
    accessId?: true
    _all?: true
  }

  export type UserHasRoleAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHasRoleAccess to aggregate.
     */
    where?: UserHasRoleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasRoleAccesses to fetch.
     */
    orderBy?: UserHasRoleAccessOrderByWithRelationInput | UserHasRoleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserHasRoleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasRoleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasRoleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserHasRoleAccesses
    **/
    _count?: true | UserHasRoleAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserHasRoleAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserHasRoleAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserHasRoleAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserHasRoleAccessMaxAggregateInputType
  }

  export type GetUserHasRoleAccessAggregateType<T extends UserHasRoleAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateUserHasRoleAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserHasRoleAccess[P]>
      : GetScalarType<T[P], AggregateUserHasRoleAccess[P]>
  }




  export type UserHasRoleAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserHasRoleAccessWhereInput
    orderBy?: UserHasRoleAccessOrderByWithAggregationInput | UserHasRoleAccessOrderByWithAggregationInput[]
    by: UserHasRoleAccessScalarFieldEnum[] | UserHasRoleAccessScalarFieldEnum
    having?: UserHasRoleAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserHasRoleAccessCountAggregateInputType | true
    _avg?: UserHasRoleAccessAvgAggregateInputType
    _sum?: UserHasRoleAccessSumAggregateInputType
    _min?: UserHasRoleAccessMinAggregateInputType
    _max?: UserHasRoleAccessMaxAggregateInputType
  }

  export type UserHasRoleAccessGroupByOutputType = {
    userId: string
    roleId: number
    accessId: number
    _count: UserHasRoleAccessCountAggregateOutputType | null
    _avg: UserHasRoleAccessAvgAggregateOutputType | null
    _sum: UserHasRoleAccessSumAggregateOutputType | null
    _min: UserHasRoleAccessMinAggregateOutputType | null
    _max: UserHasRoleAccessMaxAggregateOutputType | null
  }

  type GetUserHasRoleAccessGroupByPayload<T extends UserHasRoleAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserHasRoleAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserHasRoleAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserHasRoleAccessGroupByOutputType[P]>
            : GetScalarType<T[P], UserHasRoleAccessGroupByOutputType[P]>
        }
      >
    >


  export type UserHasRoleAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    accessId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    access?: boolean | AccessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHasRoleAccess"]>

  export type UserHasRoleAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    accessId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    access?: boolean | AccessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHasRoleAccess"]>

  export type UserHasRoleAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    accessId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    access?: boolean | AccessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userHasRoleAccess"]>

  export type UserHasRoleAccessSelectScalar = {
    userId?: boolean
    roleId?: boolean
    accessId?: boolean
  }

  export type UserHasRoleAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId" | "accessId", ExtArgs["result"]["userHasRoleAccess"]>
  export type UserHasRoleAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    access?: boolean | AccessDefaultArgs<ExtArgs>
  }
  export type UserHasRoleAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    access?: boolean | AccessDefaultArgs<ExtArgs>
  }
  export type UserHasRoleAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    access?: boolean | AccessDefaultArgs<ExtArgs>
  }

  export type $UserHasRoleAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserHasRoleAccess"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
      access: Prisma.$AccessPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: number
      accessId: number
    }, ExtArgs["result"]["userHasRoleAccess"]>
    composites: {}
  }

  type UserHasRoleAccessGetPayload<S extends boolean | null | undefined | UserHasRoleAccessDefaultArgs> = $Result.GetResult<Prisma.$UserHasRoleAccessPayload, S>

  type UserHasRoleAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserHasRoleAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserHasRoleAccessCountAggregateInputType | true
    }

  export interface UserHasRoleAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserHasRoleAccess'], meta: { name: 'UserHasRoleAccess' } }
    /**
     * Find zero or one UserHasRoleAccess that matches the filter.
     * @param {UserHasRoleAccessFindUniqueArgs} args - Arguments to find a UserHasRoleAccess
     * @example
     * // Get one UserHasRoleAccess
     * const userHasRoleAccess = await prisma.userHasRoleAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserHasRoleAccessFindUniqueArgs>(args: SelectSubset<T, UserHasRoleAccessFindUniqueArgs<ExtArgs>>): Prisma__UserHasRoleAccessClient<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserHasRoleAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserHasRoleAccessFindUniqueOrThrowArgs} args - Arguments to find a UserHasRoleAccess
     * @example
     * // Get one UserHasRoleAccess
     * const userHasRoleAccess = await prisma.userHasRoleAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserHasRoleAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, UserHasRoleAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserHasRoleAccessClient<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHasRoleAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasRoleAccessFindFirstArgs} args - Arguments to find a UserHasRoleAccess
     * @example
     * // Get one UserHasRoleAccess
     * const userHasRoleAccess = await prisma.userHasRoleAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserHasRoleAccessFindFirstArgs>(args?: SelectSubset<T, UserHasRoleAccessFindFirstArgs<ExtArgs>>): Prisma__UserHasRoleAccessClient<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserHasRoleAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasRoleAccessFindFirstOrThrowArgs} args - Arguments to find a UserHasRoleAccess
     * @example
     * // Get one UserHasRoleAccess
     * const userHasRoleAccess = await prisma.userHasRoleAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserHasRoleAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, UserHasRoleAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserHasRoleAccessClient<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserHasRoleAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasRoleAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserHasRoleAccesses
     * const userHasRoleAccesses = await prisma.userHasRoleAccess.findMany()
     * 
     * // Get first 10 UserHasRoleAccesses
     * const userHasRoleAccesses = await prisma.userHasRoleAccess.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userHasRoleAccessWithUserIdOnly = await prisma.userHasRoleAccess.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserHasRoleAccessFindManyArgs>(args?: SelectSubset<T, UserHasRoleAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserHasRoleAccess.
     * @param {UserHasRoleAccessCreateArgs} args - Arguments to create a UserHasRoleAccess.
     * @example
     * // Create one UserHasRoleAccess
     * const UserHasRoleAccess = await prisma.userHasRoleAccess.create({
     *   data: {
     *     // ... data to create a UserHasRoleAccess
     *   }
     * })
     * 
     */
    create<T extends UserHasRoleAccessCreateArgs>(args: SelectSubset<T, UserHasRoleAccessCreateArgs<ExtArgs>>): Prisma__UserHasRoleAccessClient<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserHasRoleAccesses.
     * @param {UserHasRoleAccessCreateManyArgs} args - Arguments to create many UserHasRoleAccesses.
     * @example
     * // Create many UserHasRoleAccesses
     * const userHasRoleAccess = await prisma.userHasRoleAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserHasRoleAccessCreateManyArgs>(args?: SelectSubset<T, UserHasRoleAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserHasRoleAccesses and returns the data saved in the database.
     * @param {UserHasRoleAccessCreateManyAndReturnArgs} args - Arguments to create many UserHasRoleAccesses.
     * @example
     * // Create many UserHasRoleAccesses
     * const userHasRoleAccess = await prisma.userHasRoleAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserHasRoleAccesses and only return the `userId`
     * const userHasRoleAccessWithUserIdOnly = await prisma.userHasRoleAccess.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserHasRoleAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, UserHasRoleAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserHasRoleAccess.
     * @param {UserHasRoleAccessDeleteArgs} args - Arguments to delete one UserHasRoleAccess.
     * @example
     * // Delete one UserHasRoleAccess
     * const UserHasRoleAccess = await prisma.userHasRoleAccess.delete({
     *   where: {
     *     // ... filter to delete one UserHasRoleAccess
     *   }
     * })
     * 
     */
    delete<T extends UserHasRoleAccessDeleteArgs>(args: SelectSubset<T, UserHasRoleAccessDeleteArgs<ExtArgs>>): Prisma__UserHasRoleAccessClient<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserHasRoleAccess.
     * @param {UserHasRoleAccessUpdateArgs} args - Arguments to update one UserHasRoleAccess.
     * @example
     * // Update one UserHasRoleAccess
     * const userHasRoleAccess = await prisma.userHasRoleAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserHasRoleAccessUpdateArgs>(args: SelectSubset<T, UserHasRoleAccessUpdateArgs<ExtArgs>>): Prisma__UserHasRoleAccessClient<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserHasRoleAccesses.
     * @param {UserHasRoleAccessDeleteManyArgs} args - Arguments to filter UserHasRoleAccesses to delete.
     * @example
     * // Delete a few UserHasRoleAccesses
     * const { count } = await prisma.userHasRoleAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserHasRoleAccessDeleteManyArgs>(args?: SelectSubset<T, UserHasRoleAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHasRoleAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasRoleAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserHasRoleAccesses
     * const userHasRoleAccess = await prisma.userHasRoleAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserHasRoleAccessUpdateManyArgs>(args: SelectSubset<T, UserHasRoleAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserHasRoleAccesses and returns the data updated in the database.
     * @param {UserHasRoleAccessUpdateManyAndReturnArgs} args - Arguments to update many UserHasRoleAccesses.
     * @example
     * // Update many UserHasRoleAccesses
     * const userHasRoleAccess = await prisma.userHasRoleAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserHasRoleAccesses and only return the `userId`
     * const userHasRoleAccessWithUserIdOnly = await prisma.userHasRoleAccess.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends UserHasRoleAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, UserHasRoleAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserHasRoleAccess.
     * @param {UserHasRoleAccessUpsertArgs} args - Arguments to update or create a UserHasRoleAccess.
     * @example
     * // Update or create a UserHasRoleAccess
     * const userHasRoleAccess = await prisma.userHasRoleAccess.upsert({
     *   create: {
     *     // ... data to create a UserHasRoleAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserHasRoleAccess we want to update
     *   }
     * })
     */
    upsert<T extends UserHasRoleAccessUpsertArgs>(args: SelectSubset<T, UserHasRoleAccessUpsertArgs<ExtArgs>>): Prisma__UserHasRoleAccessClient<$Result.GetResult<Prisma.$UserHasRoleAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserHasRoleAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasRoleAccessCountArgs} args - Arguments to filter UserHasRoleAccesses to count.
     * @example
     * // Count the number of UserHasRoleAccesses
     * const count = await prisma.userHasRoleAccess.count({
     *   where: {
     *     // ... the filter for the UserHasRoleAccesses we want to count
     *   }
     * })
    **/
    count<T extends UserHasRoleAccessCountArgs>(
      args?: Subset<T, UserHasRoleAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserHasRoleAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserHasRoleAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasRoleAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserHasRoleAccessAggregateArgs>(args: Subset<T, UserHasRoleAccessAggregateArgs>): Prisma.PrismaPromise<GetUserHasRoleAccessAggregateType<T>>

    /**
     * Group by UserHasRoleAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserHasRoleAccessGroupByArgs} args - Group by arguments.
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
      T extends UserHasRoleAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserHasRoleAccessGroupByArgs['orderBy'] }
        : { orderBy?: UserHasRoleAccessGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserHasRoleAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserHasRoleAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserHasRoleAccess model
   */
  readonly fields: UserHasRoleAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserHasRoleAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserHasRoleAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    access<T extends AccessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccessDefaultArgs<ExtArgs>>): Prisma__AccessClient<$Result.GetResult<Prisma.$AccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserHasRoleAccess model
   */
  interface UserHasRoleAccessFieldRefs {
    readonly userId: FieldRef<"UserHasRoleAccess", 'String'>
    readonly roleId: FieldRef<"UserHasRoleAccess", 'Int'>
    readonly accessId: FieldRef<"UserHasRoleAccess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserHasRoleAccess findUnique
   */
  export type UserHasRoleAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserHasRoleAccess to fetch.
     */
    where: UserHasRoleAccessWhereUniqueInput
  }

  /**
   * UserHasRoleAccess findUniqueOrThrow
   */
  export type UserHasRoleAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserHasRoleAccess to fetch.
     */
    where: UserHasRoleAccessWhereUniqueInput
  }

  /**
   * UserHasRoleAccess findFirst
   */
  export type UserHasRoleAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserHasRoleAccess to fetch.
     */
    where?: UserHasRoleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasRoleAccesses to fetch.
     */
    orderBy?: UserHasRoleAccessOrderByWithRelationInput | UserHasRoleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHasRoleAccesses.
     */
    cursor?: UserHasRoleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasRoleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasRoleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHasRoleAccesses.
     */
    distinct?: UserHasRoleAccessScalarFieldEnum | UserHasRoleAccessScalarFieldEnum[]
  }

  /**
   * UserHasRoleAccess findFirstOrThrow
   */
  export type UserHasRoleAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserHasRoleAccess to fetch.
     */
    where?: UserHasRoleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasRoleAccesses to fetch.
     */
    orderBy?: UserHasRoleAccessOrderByWithRelationInput | UserHasRoleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserHasRoleAccesses.
     */
    cursor?: UserHasRoleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasRoleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasRoleAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserHasRoleAccesses.
     */
    distinct?: UserHasRoleAccessScalarFieldEnum | UserHasRoleAccessScalarFieldEnum[]
  }

  /**
   * UserHasRoleAccess findMany
   */
  export type UserHasRoleAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * Filter, which UserHasRoleAccesses to fetch.
     */
    where?: UserHasRoleAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserHasRoleAccesses to fetch.
     */
    orderBy?: UserHasRoleAccessOrderByWithRelationInput | UserHasRoleAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserHasRoleAccesses.
     */
    cursor?: UserHasRoleAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserHasRoleAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserHasRoleAccesses.
     */
    skip?: number
    distinct?: UserHasRoleAccessScalarFieldEnum | UserHasRoleAccessScalarFieldEnum[]
  }

  /**
   * UserHasRoleAccess create
   */
  export type UserHasRoleAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a UserHasRoleAccess.
     */
    data: XOR<UserHasRoleAccessCreateInput, UserHasRoleAccessUncheckedCreateInput>
  }

  /**
   * UserHasRoleAccess createMany
   */
  export type UserHasRoleAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserHasRoleAccesses.
     */
    data: UserHasRoleAccessCreateManyInput | UserHasRoleAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserHasRoleAccess createManyAndReturn
   */
  export type UserHasRoleAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * The data used to create many UserHasRoleAccesses.
     */
    data: UserHasRoleAccessCreateManyInput | UserHasRoleAccessCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHasRoleAccess update
   */
  export type UserHasRoleAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a UserHasRoleAccess.
     */
    data: XOR<UserHasRoleAccessUpdateInput, UserHasRoleAccessUncheckedUpdateInput>
    /**
     * Choose, which UserHasRoleAccess to update.
     */
    where: UserHasRoleAccessWhereUniqueInput
  }

  /**
   * UserHasRoleAccess updateMany
   */
  export type UserHasRoleAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserHasRoleAccesses.
     */
    data: XOR<UserHasRoleAccessUpdateManyMutationInput, UserHasRoleAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserHasRoleAccesses to update
     */
    where?: UserHasRoleAccessWhereInput
    /**
     * Limit how many UserHasRoleAccesses to update.
     */
    limit?: number
  }

  /**
   * UserHasRoleAccess updateManyAndReturn
   */
  export type UserHasRoleAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * The data used to update UserHasRoleAccesses.
     */
    data: XOR<UserHasRoleAccessUpdateManyMutationInput, UserHasRoleAccessUncheckedUpdateManyInput>
    /**
     * Filter which UserHasRoleAccesses to update
     */
    where?: UserHasRoleAccessWhereInput
    /**
     * Limit how many UserHasRoleAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserHasRoleAccess upsert
   */
  export type UserHasRoleAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the UserHasRoleAccess to update in case it exists.
     */
    where: UserHasRoleAccessWhereUniqueInput
    /**
     * In case the UserHasRoleAccess found by the `where` argument doesn't exist, create a new UserHasRoleAccess with this data.
     */
    create: XOR<UserHasRoleAccessCreateInput, UserHasRoleAccessUncheckedCreateInput>
    /**
     * In case the UserHasRoleAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserHasRoleAccessUpdateInput, UserHasRoleAccessUncheckedUpdateInput>
  }

  /**
   * UserHasRoleAccess delete
   */
  export type UserHasRoleAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
    /**
     * Filter which UserHasRoleAccess to delete.
     */
    where: UserHasRoleAccessWhereUniqueInput
  }

  /**
   * UserHasRoleAccess deleteMany
   */
  export type UserHasRoleAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserHasRoleAccesses to delete
     */
    where?: UserHasRoleAccessWhereInput
    /**
     * Limit how many UserHasRoleAccesses to delete.
     */
    limit?: number
  }

  /**
   * UserHasRoleAccess without action
   */
  export type UserHasRoleAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserHasRoleAccess
     */
    select?: UserHasRoleAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserHasRoleAccess
     */
    omit?: UserHasRoleAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserHasRoleAccessInclude<ExtArgs> | null
  }


  /**
   * Model LinkedDevice
   */

  export type AggregateLinkedDevice = {
    _count: LinkedDeviceCountAggregateOutputType | null
    _min: LinkedDeviceMinAggregateOutputType | null
    _max: LinkedDeviceMaxAggregateOutputType | null
  }

  export type LinkedDeviceMinAggregateOutputType = {
    deviceId: string | null
    clientDeviceUuid: string | null
    userId: string | null
  }

  export type LinkedDeviceMaxAggregateOutputType = {
    deviceId: string | null
    clientDeviceUuid: string | null
    userId: string | null
  }

  export type LinkedDeviceCountAggregateOutputType = {
    deviceId: number
    clientDeviceUuid: number
    userId: number
    _all: number
  }


  export type LinkedDeviceMinAggregateInputType = {
    deviceId?: true
    clientDeviceUuid?: true
    userId?: true
  }

  export type LinkedDeviceMaxAggregateInputType = {
    deviceId?: true
    clientDeviceUuid?: true
    userId?: true
  }

  export type LinkedDeviceCountAggregateInputType = {
    deviceId?: true
    clientDeviceUuid?: true
    userId?: true
    _all?: true
  }

  export type LinkedDeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedDevice to aggregate.
     */
    where?: LinkedDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedDevices to fetch.
     */
    orderBy?: LinkedDeviceOrderByWithRelationInput | LinkedDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LinkedDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LinkedDevices
    **/
    _count?: true | LinkedDeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LinkedDeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LinkedDeviceMaxAggregateInputType
  }

  export type GetLinkedDeviceAggregateType<T extends LinkedDeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateLinkedDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLinkedDevice[P]>
      : GetScalarType<T[P], AggregateLinkedDevice[P]>
  }




  export type LinkedDeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LinkedDeviceWhereInput
    orderBy?: LinkedDeviceOrderByWithAggregationInput | LinkedDeviceOrderByWithAggregationInput[]
    by: LinkedDeviceScalarFieldEnum[] | LinkedDeviceScalarFieldEnum
    having?: LinkedDeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LinkedDeviceCountAggregateInputType | true
    _min?: LinkedDeviceMinAggregateInputType
    _max?: LinkedDeviceMaxAggregateInputType
  }

  export type LinkedDeviceGroupByOutputType = {
    deviceId: string
    clientDeviceUuid: string
    userId: string
    _count: LinkedDeviceCountAggregateOutputType | null
    _min: LinkedDeviceMinAggregateOutputType | null
    _max: LinkedDeviceMaxAggregateOutputType | null
  }

  type GetLinkedDeviceGroupByPayload<T extends LinkedDeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LinkedDeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LinkedDeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LinkedDeviceGroupByOutputType[P]>
            : GetScalarType<T[P], LinkedDeviceGroupByOutputType[P]>
        }
      >
    >


  export type LinkedDeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    clientDeviceUuid?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedDevice"]>

  export type LinkedDeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    clientDeviceUuid?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedDevice"]>

  export type LinkedDeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    deviceId?: boolean
    clientDeviceUuid?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["linkedDevice"]>

  export type LinkedDeviceSelectScalar = {
    deviceId?: boolean
    clientDeviceUuid?: boolean
    userId?: boolean
  }

  export type LinkedDeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"deviceId" | "clientDeviceUuid" | "userId", ExtArgs["result"]["linkedDevice"]>
  export type LinkedDeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkedDeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LinkedDeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LinkedDevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LinkedDevice"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      deviceId: string
      clientDeviceUuid: string
      userId: string
    }, ExtArgs["result"]["linkedDevice"]>
    composites: {}
  }

  type LinkedDeviceGetPayload<S extends boolean | null | undefined | LinkedDeviceDefaultArgs> = $Result.GetResult<Prisma.$LinkedDevicePayload, S>

  type LinkedDeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LinkedDeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LinkedDeviceCountAggregateInputType | true
    }

  export interface LinkedDeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LinkedDevice'], meta: { name: 'LinkedDevice' } }
    /**
     * Find zero or one LinkedDevice that matches the filter.
     * @param {LinkedDeviceFindUniqueArgs} args - Arguments to find a LinkedDevice
     * @example
     * // Get one LinkedDevice
     * const linkedDevice = await prisma.linkedDevice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LinkedDeviceFindUniqueArgs>(args: SelectSubset<T, LinkedDeviceFindUniqueArgs<ExtArgs>>): Prisma__LinkedDeviceClient<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LinkedDevice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LinkedDeviceFindUniqueOrThrowArgs} args - Arguments to find a LinkedDevice
     * @example
     * // Get one LinkedDevice
     * const linkedDevice = await prisma.linkedDevice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LinkedDeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, LinkedDeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LinkedDeviceClient<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedDevice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedDeviceFindFirstArgs} args - Arguments to find a LinkedDevice
     * @example
     * // Get one LinkedDevice
     * const linkedDevice = await prisma.linkedDevice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LinkedDeviceFindFirstArgs>(args?: SelectSubset<T, LinkedDeviceFindFirstArgs<ExtArgs>>): Prisma__LinkedDeviceClient<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LinkedDevice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedDeviceFindFirstOrThrowArgs} args - Arguments to find a LinkedDevice
     * @example
     * // Get one LinkedDevice
     * const linkedDevice = await prisma.linkedDevice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LinkedDeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, LinkedDeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__LinkedDeviceClient<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LinkedDevices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedDeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LinkedDevices
     * const linkedDevices = await prisma.linkedDevice.findMany()
     * 
     * // Get first 10 LinkedDevices
     * const linkedDevices = await prisma.linkedDevice.findMany({ take: 10 })
     * 
     * // Only select the `deviceId`
     * const linkedDeviceWithDeviceIdOnly = await prisma.linkedDevice.findMany({ select: { deviceId: true } })
     * 
     */
    findMany<T extends LinkedDeviceFindManyArgs>(args?: SelectSubset<T, LinkedDeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LinkedDevice.
     * @param {LinkedDeviceCreateArgs} args - Arguments to create a LinkedDevice.
     * @example
     * // Create one LinkedDevice
     * const LinkedDevice = await prisma.linkedDevice.create({
     *   data: {
     *     // ... data to create a LinkedDevice
     *   }
     * })
     * 
     */
    create<T extends LinkedDeviceCreateArgs>(args: SelectSubset<T, LinkedDeviceCreateArgs<ExtArgs>>): Prisma__LinkedDeviceClient<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LinkedDevices.
     * @param {LinkedDeviceCreateManyArgs} args - Arguments to create many LinkedDevices.
     * @example
     * // Create many LinkedDevices
     * const linkedDevice = await prisma.linkedDevice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LinkedDeviceCreateManyArgs>(args?: SelectSubset<T, LinkedDeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LinkedDevices and returns the data saved in the database.
     * @param {LinkedDeviceCreateManyAndReturnArgs} args - Arguments to create many LinkedDevices.
     * @example
     * // Create many LinkedDevices
     * const linkedDevice = await prisma.linkedDevice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LinkedDevices and only return the `deviceId`
     * const linkedDeviceWithDeviceIdOnly = await prisma.linkedDevice.createManyAndReturn({
     *   select: { deviceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LinkedDeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, LinkedDeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LinkedDevice.
     * @param {LinkedDeviceDeleteArgs} args - Arguments to delete one LinkedDevice.
     * @example
     * // Delete one LinkedDevice
     * const LinkedDevice = await prisma.linkedDevice.delete({
     *   where: {
     *     // ... filter to delete one LinkedDevice
     *   }
     * })
     * 
     */
    delete<T extends LinkedDeviceDeleteArgs>(args: SelectSubset<T, LinkedDeviceDeleteArgs<ExtArgs>>): Prisma__LinkedDeviceClient<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LinkedDevice.
     * @param {LinkedDeviceUpdateArgs} args - Arguments to update one LinkedDevice.
     * @example
     * // Update one LinkedDevice
     * const linkedDevice = await prisma.linkedDevice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LinkedDeviceUpdateArgs>(args: SelectSubset<T, LinkedDeviceUpdateArgs<ExtArgs>>): Prisma__LinkedDeviceClient<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LinkedDevices.
     * @param {LinkedDeviceDeleteManyArgs} args - Arguments to filter LinkedDevices to delete.
     * @example
     * // Delete a few LinkedDevices
     * const { count } = await prisma.linkedDevice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LinkedDeviceDeleteManyArgs>(args?: SelectSubset<T, LinkedDeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedDeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LinkedDevices
     * const linkedDevice = await prisma.linkedDevice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LinkedDeviceUpdateManyArgs>(args: SelectSubset<T, LinkedDeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LinkedDevices and returns the data updated in the database.
     * @param {LinkedDeviceUpdateManyAndReturnArgs} args - Arguments to update many LinkedDevices.
     * @example
     * // Update many LinkedDevices
     * const linkedDevice = await prisma.linkedDevice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LinkedDevices and only return the `deviceId`
     * const linkedDeviceWithDeviceIdOnly = await prisma.linkedDevice.updateManyAndReturn({
     *   select: { deviceId: true },
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
    updateManyAndReturn<T extends LinkedDeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, LinkedDeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LinkedDevice.
     * @param {LinkedDeviceUpsertArgs} args - Arguments to update or create a LinkedDevice.
     * @example
     * // Update or create a LinkedDevice
     * const linkedDevice = await prisma.linkedDevice.upsert({
     *   create: {
     *     // ... data to create a LinkedDevice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LinkedDevice we want to update
     *   }
     * })
     */
    upsert<T extends LinkedDeviceUpsertArgs>(args: SelectSubset<T, LinkedDeviceUpsertArgs<ExtArgs>>): Prisma__LinkedDeviceClient<$Result.GetResult<Prisma.$LinkedDevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LinkedDevices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedDeviceCountArgs} args - Arguments to filter LinkedDevices to count.
     * @example
     * // Count the number of LinkedDevices
     * const count = await prisma.linkedDevice.count({
     *   where: {
     *     // ... the filter for the LinkedDevices we want to count
     *   }
     * })
    **/
    count<T extends LinkedDeviceCountArgs>(
      args?: Subset<T, LinkedDeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LinkedDeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LinkedDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedDeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LinkedDeviceAggregateArgs>(args: Subset<T, LinkedDeviceAggregateArgs>): Prisma.PrismaPromise<GetLinkedDeviceAggregateType<T>>

    /**
     * Group by LinkedDevice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LinkedDeviceGroupByArgs} args - Group by arguments.
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
      T extends LinkedDeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LinkedDeviceGroupByArgs['orderBy'] }
        : { orderBy?: LinkedDeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LinkedDeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLinkedDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LinkedDevice model
   */
  readonly fields: LinkedDeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LinkedDevice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LinkedDeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LinkedDevice model
   */
  interface LinkedDeviceFieldRefs {
    readonly deviceId: FieldRef<"LinkedDevice", 'String'>
    readonly clientDeviceUuid: FieldRef<"LinkedDevice", 'String'>
    readonly userId: FieldRef<"LinkedDevice", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LinkedDevice findUnique
   */
  export type LinkedDeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LinkedDevice to fetch.
     */
    where: LinkedDeviceWhereUniqueInput
  }

  /**
   * LinkedDevice findUniqueOrThrow
   */
  export type LinkedDeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LinkedDevice to fetch.
     */
    where: LinkedDeviceWhereUniqueInput
  }

  /**
   * LinkedDevice findFirst
   */
  export type LinkedDeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LinkedDevice to fetch.
     */
    where?: LinkedDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedDevices to fetch.
     */
    orderBy?: LinkedDeviceOrderByWithRelationInput | LinkedDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedDevices.
     */
    cursor?: LinkedDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedDevices.
     */
    distinct?: LinkedDeviceScalarFieldEnum | LinkedDeviceScalarFieldEnum[]
  }

  /**
   * LinkedDevice findFirstOrThrow
   */
  export type LinkedDeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LinkedDevice to fetch.
     */
    where?: LinkedDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedDevices to fetch.
     */
    orderBy?: LinkedDeviceOrderByWithRelationInput | LinkedDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LinkedDevices.
     */
    cursor?: LinkedDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedDevices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LinkedDevices.
     */
    distinct?: LinkedDeviceScalarFieldEnum | LinkedDeviceScalarFieldEnum[]
  }

  /**
   * LinkedDevice findMany
   */
  export type LinkedDeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * Filter, which LinkedDevices to fetch.
     */
    where?: LinkedDeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LinkedDevices to fetch.
     */
    orderBy?: LinkedDeviceOrderByWithRelationInput | LinkedDeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LinkedDevices.
     */
    cursor?: LinkedDeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LinkedDevices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LinkedDevices.
     */
    skip?: number
    distinct?: LinkedDeviceScalarFieldEnum | LinkedDeviceScalarFieldEnum[]
  }

  /**
   * LinkedDevice create
   */
  export type LinkedDeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a LinkedDevice.
     */
    data: XOR<LinkedDeviceCreateInput, LinkedDeviceUncheckedCreateInput>
  }

  /**
   * LinkedDevice createMany
   */
  export type LinkedDeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LinkedDevices.
     */
    data: LinkedDeviceCreateManyInput | LinkedDeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LinkedDevice createManyAndReturn
   */
  export type LinkedDeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * The data used to create many LinkedDevices.
     */
    data: LinkedDeviceCreateManyInput | LinkedDeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedDevice update
   */
  export type LinkedDeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a LinkedDevice.
     */
    data: XOR<LinkedDeviceUpdateInput, LinkedDeviceUncheckedUpdateInput>
    /**
     * Choose, which LinkedDevice to update.
     */
    where: LinkedDeviceWhereUniqueInput
  }

  /**
   * LinkedDevice updateMany
   */
  export type LinkedDeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LinkedDevices.
     */
    data: XOR<LinkedDeviceUpdateManyMutationInput, LinkedDeviceUncheckedUpdateManyInput>
    /**
     * Filter which LinkedDevices to update
     */
    where?: LinkedDeviceWhereInput
    /**
     * Limit how many LinkedDevices to update.
     */
    limit?: number
  }

  /**
   * LinkedDevice updateManyAndReturn
   */
  export type LinkedDeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * The data used to update LinkedDevices.
     */
    data: XOR<LinkedDeviceUpdateManyMutationInput, LinkedDeviceUncheckedUpdateManyInput>
    /**
     * Filter which LinkedDevices to update
     */
    where?: LinkedDeviceWhereInput
    /**
     * Limit how many LinkedDevices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LinkedDevice upsert
   */
  export type LinkedDeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the LinkedDevice to update in case it exists.
     */
    where: LinkedDeviceWhereUniqueInput
    /**
     * In case the LinkedDevice found by the `where` argument doesn't exist, create a new LinkedDevice with this data.
     */
    create: XOR<LinkedDeviceCreateInput, LinkedDeviceUncheckedCreateInput>
    /**
     * In case the LinkedDevice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LinkedDeviceUpdateInput, LinkedDeviceUncheckedUpdateInput>
  }

  /**
   * LinkedDevice delete
   */
  export type LinkedDeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
    /**
     * Filter which LinkedDevice to delete.
     */
    where: LinkedDeviceWhereUniqueInput
  }

  /**
   * LinkedDevice deleteMany
   */
  export type LinkedDeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LinkedDevices to delete
     */
    where?: LinkedDeviceWhereInput
    /**
     * Limit how many LinkedDevices to delete.
     */
    limit?: number
  }

  /**
   * LinkedDevice without action
   */
  export type LinkedDeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LinkedDevice
     */
    select?: LinkedDeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LinkedDevice
     */
    omit?: LinkedDeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LinkedDeviceInclude<ExtArgs> | null
  }


  /**
   * Model CompanySegment
   */

  export type AggregateCompanySegment = {
    _count: CompanySegmentCountAggregateOutputType | null
    _avg: CompanySegmentAvgAggregateOutputType | null
    _sum: CompanySegmentSumAggregateOutputType | null
    _min: CompanySegmentMinAggregateOutputType | null
    _max: CompanySegmentMaxAggregateOutputType | null
  }

  export type CompanySegmentAvgAggregateOutputType = {
    segmentId: number | null
  }

  export type CompanySegmentSumAggregateOutputType = {
    segmentId: number | null
  }

  export type CompanySegmentMinAggregateOutputType = {
    segmentId: number | null
    segmentName: string | null
    description: string | null
  }

  export type CompanySegmentMaxAggregateOutputType = {
    segmentId: number | null
    segmentName: string | null
    description: string | null
  }

  export type CompanySegmentCountAggregateOutputType = {
    segmentId: number
    segmentName: number
    description: number
    _all: number
  }


  export type CompanySegmentAvgAggregateInputType = {
    segmentId?: true
  }

  export type CompanySegmentSumAggregateInputType = {
    segmentId?: true
  }

  export type CompanySegmentMinAggregateInputType = {
    segmentId?: true
    segmentName?: true
    description?: true
  }

  export type CompanySegmentMaxAggregateInputType = {
    segmentId?: true
    segmentName?: true
    description?: true
  }

  export type CompanySegmentCountAggregateInputType = {
    segmentId?: true
    segmentName?: true
    description?: true
    _all?: true
  }

  export type CompanySegmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySegment to aggregate.
     */
    where?: CompanySegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySegments to fetch.
     */
    orderBy?: CompanySegmentOrderByWithRelationInput | CompanySegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanySegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanySegments
    **/
    _count?: true | CompanySegmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanySegmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySegmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanySegmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanySegmentMaxAggregateInputType
  }

  export type GetCompanySegmentAggregateType<T extends CompanySegmentAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanySegment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanySegment[P]>
      : GetScalarType<T[P], AggregateCompanySegment[P]>
  }




  export type CompanySegmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanySegmentWhereInput
    orderBy?: CompanySegmentOrderByWithAggregationInput | CompanySegmentOrderByWithAggregationInput[]
    by: CompanySegmentScalarFieldEnum[] | CompanySegmentScalarFieldEnum
    having?: CompanySegmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanySegmentCountAggregateInputType | true
    _avg?: CompanySegmentAvgAggregateInputType
    _sum?: CompanySegmentSumAggregateInputType
    _min?: CompanySegmentMinAggregateInputType
    _max?: CompanySegmentMaxAggregateInputType
  }

  export type CompanySegmentGroupByOutputType = {
    segmentId: number
    segmentName: string
    description: string | null
    _count: CompanySegmentCountAggregateOutputType | null
    _avg: CompanySegmentAvgAggregateOutputType | null
    _sum: CompanySegmentSumAggregateOutputType | null
    _min: CompanySegmentMinAggregateOutputType | null
    _max: CompanySegmentMaxAggregateOutputType | null
  }

  type GetCompanySegmentGroupByPayload<T extends CompanySegmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanySegmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanySegmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanySegmentGroupByOutputType[P]>
            : GetScalarType<T[P], CompanySegmentGroupByOutputType[P]>
        }
      >
    >


  export type CompanySegmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    segmentId?: boolean
    segmentName?: boolean
    description?: boolean
    profile?: boolean | CompanySegment$profileArgs<ExtArgs>
    _count?: boolean | CompanySegmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companySegment"]>

  export type CompanySegmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    segmentId?: boolean
    segmentName?: boolean
    description?: boolean
  }, ExtArgs["result"]["companySegment"]>

  export type CompanySegmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    segmentId?: boolean
    segmentName?: boolean
    description?: boolean
  }, ExtArgs["result"]["companySegment"]>

  export type CompanySegmentSelectScalar = {
    segmentId?: boolean
    segmentName?: boolean
    description?: boolean
  }

  export type CompanySegmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"segmentId" | "segmentName" | "description", ExtArgs["result"]["companySegment"]>
  export type CompanySegmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | CompanySegment$profileArgs<ExtArgs>
    _count?: boolean | CompanySegmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanySegmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanySegmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanySegmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanySegment"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      segmentId: number
      segmentName: string
      description: string | null
    }, ExtArgs["result"]["companySegment"]>
    composites: {}
  }

  type CompanySegmentGetPayload<S extends boolean | null | undefined | CompanySegmentDefaultArgs> = $Result.GetResult<Prisma.$CompanySegmentPayload, S>

  type CompanySegmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanySegmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanySegmentCountAggregateInputType | true
    }

  export interface CompanySegmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanySegment'], meta: { name: 'CompanySegment' } }
    /**
     * Find zero or one CompanySegment that matches the filter.
     * @param {CompanySegmentFindUniqueArgs} args - Arguments to find a CompanySegment
     * @example
     * // Get one CompanySegment
     * const companySegment = await prisma.companySegment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanySegmentFindUniqueArgs>(args: SelectSubset<T, CompanySegmentFindUniqueArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanySegment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanySegmentFindUniqueOrThrowArgs} args - Arguments to find a CompanySegment
     * @example
     * // Get one CompanySegment
     * const companySegment = await prisma.companySegment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanySegmentFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanySegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanySegment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySegmentFindFirstArgs} args - Arguments to find a CompanySegment
     * @example
     * // Get one CompanySegment
     * const companySegment = await prisma.companySegment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanySegmentFindFirstArgs>(args?: SelectSubset<T, CompanySegmentFindFirstArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanySegment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySegmentFindFirstOrThrowArgs} args - Arguments to find a CompanySegment
     * @example
     * // Get one CompanySegment
     * const companySegment = await prisma.companySegment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanySegmentFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanySegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanySegments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySegmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanySegments
     * const companySegments = await prisma.companySegment.findMany()
     * 
     * // Get first 10 CompanySegments
     * const companySegments = await prisma.companySegment.findMany({ take: 10 })
     * 
     * // Only select the `segmentId`
     * const companySegmentWithSegmentIdOnly = await prisma.companySegment.findMany({ select: { segmentId: true } })
     * 
     */
    findMany<T extends CompanySegmentFindManyArgs>(args?: SelectSubset<T, CompanySegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanySegment.
     * @param {CompanySegmentCreateArgs} args - Arguments to create a CompanySegment.
     * @example
     * // Create one CompanySegment
     * const CompanySegment = await prisma.companySegment.create({
     *   data: {
     *     // ... data to create a CompanySegment
     *   }
     * })
     * 
     */
    create<T extends CompanySegmentCreateArgs>(args: SelectSubset<T, CompanySegmentCreateArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanySegments.
     * @param {CompanySegmentCreateManyArgs} args - Arguments to create many CompanySegments.
     * @example
     * // Create many CompanySegments
     * const companySegment = await prisma.companySegment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanySegmentCreateManyArgs>(args?: SelectSubset<T, CompanySegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanySegments and returns the data saved in the database.
     * @param {CompanySegmentCreateManyAndReturnArgs} args - Arguments to create many CompanySegments.
     * @example
     * // Create many CompanySegments
     * const companySegment = await prisma.companySegment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanySegments and only return the `segmentId`
     * const companySegmentWithSegmentIdOnly = await prisma.companySegment.createManyAndReturn({
     *   select: { segmentId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanySegmentCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanySegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanySegment.
     * @param {CompanySegmentDeleteArgs} args - Arguments to delete one CompanySegment.
     * @example
     * // Delete one CompanySegment
     * const CompanySegment = await prisma.companySegment.delete({
     *   where: {
     *     // ... filter to delete one CompanySegment
     *   }
     * })
     * 
     */
    delete<T extends CompanySegmentDeleteArgs>(args: SelectSubset<T, CompanySegmentDeleteArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanySegment.
     * @param {CompanySegmentUpdateArgs} args - Arguments to update one CompanySegment.
     * @example
     * // Update one CompanySegment
     * const companySegment = await prisma.companySegment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanySegmentUpdateArgs>(args: SelectSubset<T, CompanySegmentUpdateArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanySegments.
     * @param {CompanySegmentDeleteManyArgs} args - Arguments to filter CompanySegments to delete.
     * @example
     * // Delete a few CompanySegments
     * const { count } = await prisma.companySegment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanySegmentDeleteManyArgs>(args?: SelectSubset<T, CompanySegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySegmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanySegments
     * const companySegment = await prisma.companySegment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanySegmentUpdateManyArgs>(args: SelectSubset<T, CompanySegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanySegments and returns the data updated in the database.
     * @param {CompanySegmentUpdateManyAndReturnArgs} args - Arguments to update many CompanySegments.
     * @example
     * // Update many CompanySegments
     * const companySegment = await prisma.companySegment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanySegments and only return the `segmentId`
     * const companySegmentWithSegmentIdOnly = await prisma.companySegment.updateManyAndReturn({
     *   select: { segmentId: true },
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
    updateManyAndReturn<T extends CompanySegmentUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanySegmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanySegment.
     * @param {CompanySegmentUpsertArgs} args - Arguments to update or create a CompanySegment.
     * @example
     * // Update or create a CompanySegment
     * const companySegment = await prisma.companySegment.upsert({
     *   create: {
     *     // ... data to create a CompanySegment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanySegment we want to update
     *   }
     * })
     */
    upsert<T extends CompanySegmentUpsertArgs>(args: SelectSubset<T, CompanySegmentUpsertArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanySegments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySegmentCountArgs} args - Arguments to filter CompanySegments to count.
     * @example
     * // Count the number of CompanySegments
     * const count = await prisma.companySegment.count({
     *   where: {
     *     // ... the filter for the CompanySegments we want to count
     *   }
     * })
    **/
    count<T extends CompanySegmentCountArgs>(
      args?: Subset<T, CompanySegmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanySegmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanySegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySegmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanySegmentAggregateArgs>(args: Subset<T, CompanySegmentAggregateArgs>): Prisma.PrismaPromise<GetCompanySegmentAggregateType<T>>

    /**
     * Group by CompanySegment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanySegmentGroupByArgs} args - Group by arguments.
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
      T extends CompanySegmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanySegmentGroupByArgs['orderBy'] }
        : { orderBy?: CompanySegmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanySegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanySegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanySegment model
   */
  readonly fields: CompanySegmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanySegment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanySegmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends CompanySegment$profileArgs<ExtArgs> = {}>(args?: Subset<T, CompanySegment$profileArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanySegment model
   */
  interface CompanySegmentFieldRefs {
    readonly segmentId: FieldRef<"CompanySegment", 'Int'>
    readonly segmentName: FieldRef<"CompanySegment", 'String'>
    readonly description: FieldRef<"CompanySegment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompanySegment findUnique
   */
  export type CompanySegmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * Filter, which CompanySegment to fetch.
     */
    where: CompanySegmentWhereUniqueInput
  }

  /**
   * CompanySegment findUniqueOrThrow
   */
  export type CompanySegmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * Filter, which CompanySegment to fetch.
     */
    where: CompanySegmentWhereUniqueInput
  }

  /**
   * CompanySegment findFirst
   */
  export type CompanySegmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * Filter, which CompanySegment to fetch.
     */
    where?: CompanySegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySegments to fetch.
     */
    orderBy?: CompanySegmentOrderByWithRelationInput | CompanySegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySegments.
     */
    cursor?: CompanySegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySegments.
     */
    distinct?: CompanySegmentScalarFieldEnum | CompanySegmentScalarFieldEnum[]
  }

  /**
   * CompanySegment findFirstOrThrow
   */
  export type CompanySegmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * Filter, which CompanySegment to fetch.
     */
    where?: CompanySegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySegments to fetch.
     */
    orderBy?: CompanySegmentOrderByWithRelationInput | CompanySegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanySegments.
     */
    cursor?: CompanySegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySegments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanySegments.
     */
    distinct?: CompanySegmentScalarFieldEnum | CompanySegmentScalarFieldEnum[]
  }

  /**
   * CompanySegment findMany
   */
  export type CompanySegmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * Filter, which CompanySegments to fetch.
     */
    where?: CompanySegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanySegments to fetch.
     */
    orderBy?: CompanySegmentOrderByWithRelationInput | CompanySegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanySegments.
     */
    cursor?: CompanySegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanySegments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanySegments.
     */
    skip?: number
    distinct?: CompanySegmentScalarFieldEnum | CompanySegmentScalarFieldEnum[]
  }

  /**
   * CompanySegment create
   */
  export type CompanySegmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanySegment.
     */
    data: XOR<CompanySegmentCreateInput, CompanySegmentUncheckedCreateInput>
  }

  /**
   * CompanySegment createMany
   */
  export type CompanySegmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanySegments.
     */
    data: CompanySegmentCreateManyInput | CompanySegmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanySegment createManyAndReturn
   */
  export type CompanySegmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * The data used to create many CompanySegments.
     */
    data: CompanySegmentCreateManyInput | CompanySegmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanySegment update
   */
  export type CompanySegmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanySegment.
     */
    data: XOR<CompanySegmentUpdateInput, CompanySegmentUncheckedUpdateInput>
    /**
     * Choose, which CompanySegment to update.
     */
    where: CompanySegmentWhereUniqueInput
  }

  /**
   * CompanySegment updateMany
   */
  export type CompanySegmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanySegments.
     */
    data: XOR<CompanySegmentUpdateManyMutationInput, CompanySegmentUncheckedUpdateManyInput>
    /**
     * Filter which CompanySegments to update
     */
    where?: CompanySegmentWhereInput
    /**
     * Limit how many CompanySegments to update.
     */
    limit?: number
  }

  /**
   * CompanySegment updateManyAndReturn
   */
  export type CompanySegmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * The data used to update CompanySegments.
     */
    data: XOR<CompanySegmentUpdateManyMutationInput, CompanySegmentUncheckedUpdateManyInput>
    /**
     * Filter which CompanySegments to update
     */
    where?: CompanySegmentWhereInput
    /**
     * Limit how many CompanySegments to update.
     */
    limit?: number
  }

  /**
   * CompanySegment upsert
   */
  export type CompanySegmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanySegment to update in case it exists.
     */
    where: CompanySegmentWhereUniqueInput
    /**
     * In case the CompanySegment found by the `where` argument doesn't exist, create a new CompanySegment with this data.
     */
    create: XOR<CompanySegmentCreateInput, CompanySegmentUncheckedCreateInput>
    /**
     * In case the CompanySegment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanySegmentUpdateInput, CompanySegmentUncheckedUpdateInput>
  }

  /**
   * CompanySegment delete
   */
  export type CompanySegmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    /**
     * Filter which CompanySegment to delete.
     */
    where: CompanySegmentWhereUniqueInput
  }

  /**
   * CompanySegment deleteMany
   */
  export type CompanySegmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanySegments to delete
     */
    where?: CompanySegmentWhereInput
    /**
     * Limit how many CompanySegments to delete.
     */
    limit?: number
  }

  /**
   * CompanySegment.profile
   */
  export type CompanySegment$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    cursor?: ProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * CompanySegment without action
   */
  export type CompanySegmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    segmentId: number | null
  }

  export type ProfileSumAggregateOutputType = {
    segmentId: number | null
  }

  export type ProfileMinAggregateOutputType = {
    userId: string | null
    fullName: string | null
    urlImage: string | null
    companyName: string | null
    npwp: string | null
    deedNumber: string | null
    establishedDate: Date | null
    npwpUrl: string | null
    deedUrl: string | null
    description: string | null
    segmentId: number | null
    companyAddress: string | null
    companyPhone: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    userId: string | null
    fullName: string | null
    urlImage: string | null
    companyName: string | null
    npwp: string | null
    deedNumber: string | null
    establishedDate: Date | null
    npwpUrl: string | null
    deedUrl: string | null
    description: string | null
    segmentId: number | null
    companyAddress: string | null
    companyPhone: string | null
    website: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    userId: number
    fullName: number
    urlImage: number
    companyName: number
    npwp: number
    deedNumber: number
    establishedDate: number
    npwpUrl: number
    deedUrl: number
    description: number
    segmentId: number
    companyAddress: number
    companyPhone: number
    website: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    segmentId?: true
  }

  export type ProfileSumAggregateInputType = {
    segmentId?: true
  }

  export type ProfileMinAggregateInputType = {
    userId?: true
    fullName?: true
    urlImage?: true
    companyName?: true
    npwp?: true
    deedNumber?: true
    establishedDate?: true
    npwpUrl?: true
    deedUrl?: true
    description?: true
    segmentId?: true
    companyAddress?: true
    companyPhone?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    userId?: true
    fullName?: true
    urlImage?: true
    companyName?: true
    npwp?: true
    deedNumber?: true
    establishedDate?: true
    npwpUrl?: true
    deedUrl?: true
    description?: true
    segmentId?: true
    companyAddress?: true
    companyPhone?: true
    website?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    userId?: true
    fullName?: true
    urlImage?: true
    companyName?: true
    npwp?: true
    deedNumber?: true
    establishedDate?: true
    npwpUrl?: true
    deedUrl?: true
    description?: true
    segmentId?: true
    companyAddress?: true
    companyPhone?: true
    website?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    userId: string
    fullName: string | null
    urlImage: string | null
    companyName: string
    npwp: string
    deedNumber: string | null
    establishedDate: Date | null
    npwpUrl: string
    deedUrl: string
    description: string | null
    segmentId: number | null
    companyAddress: string | null
    companyPhone: string | null
    website: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    urlImage?: boolean
    companyName?: boolean
    npwp?: boolean
    deedNumber?: boolean
    establishedDate?: boolean
    npwpUrl?: boolean
    deedUrl?: boolean
    description?: boolean
    segmentId?: boolean
    companyAddress?: boolean
    companyPhone?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    segment?: boolean | Profile$segmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    urlImage?: boolean
    companyName?: boolean
    npwp?: boolean
    deedNumber?: boolean
    establishedDate?: boolean
    npwpUrl?: boolean
    deedUrl?: boolean
    description?: boolean
    segmentId?: boolean
    companyAddress?: boolean
    companyPhone?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    segment?: boolean | Profile$segmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    fullName?: boolean
    urlImage?: boolean
    companyName?: boolean
    npwp?: boolean
    deedNumber?: boolean
    establishedDate?: boolean
    npwpUrl?: boolean
    deedUrl?: boolean
    description?: boolean
    segmentId?: boolean
    companyAddress?: boolean
    companyPhone?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    segment?: boolean | Profile$segmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    userId?: boolean
    fullName?: boolean
    urlImage?: boolean
    companyName?: boolean
    npwp?: boolean
    deedNumber?: boolean
    establishedDate?: boolean
    npwpUrl?: boolean
    deedUrl?: boolean
    description?: boolean
    segmentId?: boolean
    companyAddress?: boolean
    companyPhone?: boolean
    website?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "fullName" | "urlImage" | "companyName" | "npwp" | "deedNumber" | "establishedDate" | "npwpUrl" | "deedUrl" | "description" | "segmentId" | "companyAddress" | "companyPhone" | "website" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segment?: boolean | Profile$segmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segment?: boolean | Profile$segmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segment?: boolean | Profile$segmentArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      segment: Prisma.$CompanySegmentPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      fullName: string | null
      urlImage: string | null
      companyName: string
      npwp: string
      deedNumber: string | null
      establishedDate: Date | null
      npwpUrl: string
      deedUrl: string
      description: string | null
      segmentId: number | null
      companyAddress: string | null
      companyPhone: string | null
      website: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const profileWithUserIdOnly = await prisma.profile.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `userId`
     * const profileWithUserIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `userId`
     * const profileWithUserIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { userId: true },
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
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
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
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    segment<T extends Profile$segmentArgs<ExtArgs> = {}>(args?: Subset<T, Profile$segmentArgs<ExtArgs>>): Prisma__CompanySegmentClient<$Result.GetResult<Prisma.$CompanySegmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly userId: FieldRef<"Profile", 'String'>
    readonly fullName: FieldRef<"Profile", 'String'>
    readonly urlImage: FieldRef<"Profile", 'String'>
    readonly companyName: FieldRef<"Profile", 'String'>
    readonly npwp: FieldRef<"Profile", 'String'>
    readonly deedNumber: FieldRef<"Profile", 'String'>
    readonly establishedDate: FieldRef<"Profile", 'DateTime'>
    readonly npwpUrl: FieldRef<"Profile", 'String'>
    readonly deedUrl: FieldRef<"Profile", 'String'>
    readonly description: FieldRef<"Profile", 'String'>
    readonly segmentId: FieldRef<"Profile", 'Int'>
    readonly companyAddress: FieldRef<"Profile", 'String'>
    readonly companyPhone: FieldRef<"Profile", 'String'>
    readonly website: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.segment
   */
  export type Profile$segmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanySegment
     */
    select?: CompanySegmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanySegment
     */
    omit?: CompanySegmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanySegmentInclude<ExtArgs> | null
    where?: CompanySegmentWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AllowedIpCorsScalarFieldEnum: {
    ip: 'ip'
  };

  export type AllowedIpCorsScalarFieldEnum = (typeof AllowedIpCorsScalarFieldEnum)[keyof typeof AllowedIpCorsScalarFieldEnum]


  export const UserScalarFieldEnum: {
    userId: 'userId',
    email: 'email',
    password: 'password',
    isActive: 'isActive',
    sessionExpireDate: 'sessionExpireDate',
    createdDate: 'createdDate',
    updateDate: 'updateDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpVerifikasiScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    expireDate: 'expireDate'
  };

  export type OtpVerifikasiScalarFieldEnum = (typeof OtpVerifikasiScalarFieldEnum)[keyof typeof OtpVerifikasiScalarFieldEnum]


  export const LogsLoginScalarFieldEnum: {
    logsId: 'logsId',
    userId: 'userId',
    token: 'token',
    isActive: 'isActive',
    device: 'device',
    ip: 'ip',
    createdDate: 'createdDate',
    expireDate: 'expireDate'
  };

  export type LogsLoginScalarFieldEnum = (typeof LogsLoginScalarFieldEnum)[keyof typeof LogsLoginScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    roleId: 'roleId',
    roleName: 'roleName'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const AccessScalarFieldEnum: {
    accessId: 'accessId',
    accessName: 'accessName'
  };

  export type AccessScalarFieldEnum = (typeof AccessScalarFieldEnum)[keyof typeof AccessScalarFieldEnum]


  export const UserHasRoleAccessScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId',
    accessId: 'accessId'
  };

  export type UserHasRoleAccessScalarFieldEnum = (typeof UserHasRoleAccessScalarFieldEnum)[keyof typeof UserHasRoleAccessScalarFieldEnum]


  export const LinkedDeviceScalarFieldEnum: {
    deviceId: 'deviceId',
    clientDeviceUuid: 'clientDeviceUuid',
    userId: 'userId'
  };

  export type LinkedDeviceScalarFieldEnum = (typeof LinkedDeviceScalarFieldEnum)[keyof typeof LinkedDeviceScalarFieldEnum]


  export const CompanySegmentScalarFieldEnum: {
    segmentId: 'segmentId',
    segmentName: 'segmentName',
    description: 'description'
  };

  export type CompanySegmentScalarFieldEnum = (typeof CompanySegmentScalarFieldEnum)[keyof typeof CompanySegmentScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    userId: 'userId',
    fullName: 'fullName',
    urlImage: 'urlImage',
    companyName: 'companyName',
    npwp: 'npwp',
    deedNumber: 'deedNumber',
    establishedDate: 'establishedDate',
    npwpUrl: 'npwpUrl',
    deedUrl: 'deedUrl',
    description: 'description',
    segmentId: 'segmentId',
    companyAddress: 'companyAddress',
    companyPhone: 'companyPhone',
    website: 'website',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AllowedIpCorsWhereInput = {
    AND?: AllowedIpCorsWhereInput | AllowedIpCorsWhereInput[]
    OR?: AllowedIpCorsWhereInput[]
    NOT?: AllowedIpCorsWhereInput | AllowedIpCorsWhereInput[]
    ip?: StringFilter<"AllowedIpCors"> | string
  }

  export type AllowedIpCorsOrderByWithRelationInput = {
    ip?: SortOrder
  }

  export type AllowedIpCorsWhereUniqueInput = Prisma.AtLeast<{
    ip?: string
    AND?: AllowedIpCorsWhereInput | AllowedIpCorsWhereInput[]
    OR?: AllowedIpCorsWhereInput[]
    NOT?: AllowedIpCorsWhereInput | AllowedIpCorsWhereInput[]
  }, "ip">

  export type AllowedIpCorsOrderByWithAggregationInput = {
    ip?: SortOrder
    _count?: AllowedIpCorsCountOrderByAggregateInput
    _max?: AllowedIpCorsMaxOrderByAggregateInput
    _min?: AllowedIpCorsMinOrderByAggregateInput
  }

  export type AllowedIpCorsScalarWhereWithAggregatesInput = {
    AND?: AllowedIpCorsScalarWhereWithAggregatesInput | AllowedIpCorsScalarWhereWithAggregatesInput[]
    OR?: AllowedIpCorsScalarWhereWithAggregatesInput[]
    NOT?: AllowedIpCorsScalarWhereWithAggregatesInput | AllowedIpCorsScalarWhereWithAggregatesInput[]
    ip?: StringWithAggregatesFilter<"AllowedIpCors"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    sessionExpireDate?: DateTimeFilter<"User"> | Date | string
    createdDate?: DateTimeFilter<"User"> | Date | string
    updateDate?: DateTimeFilter<"User"> | Date | string
    logs?: LogsLoginListRelationFilter
    linkedDevice?: LinkedDeviceListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    UserHasRoleAccess?: UserHasRoleAccessListRelationFilter
    otp?: OtpVerifikasiListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    sessionExpireDate?: SortOrder
    createdDate?: SortOrder
    updateDate?: SortOrder
    logs?: LogsLoginOrderByRelationAggregateInput
    linkedDevice?: LinkedDeviceOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
    UserHasRoleAccess?: UserHasRoleAccessOrderByRelationAggregateInput
    otp?: otpVerifikasiOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    isActive?: BoolFilter<"User"> | boolean
    sessionExpireDate?: DateTimeFilter<"User"> | Date | string
    createdDate?: DateTimeFilter<"User"> | Date | string
    updateDate?: DateTimeFilter<"User"> | Date | string
    logs?: LogsLoginListRelationFilter
    linkedDevice?: LinkedDeviceListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    UserHasRoleAccess?: UserHasRoleAccessListRelationFilter
    otp?: OtpVerifikasiListRelationFilter
  }, "userId" | "email">

  export type UserOrderByWithAggregationInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    sessionExpireDate?: SortOrder
    createdDate?: SortOrder
    updateDate?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    sessionExpireDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    createdDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type otpVerifikasiWhereInput = {
    AND?: otpVerifikasiWhereInput | otpVerifikasiWhereInput[]
    OR?: otpVerifikasiWhereInput[]
    NOT?: otpVerifikasiWhereInput | otpVerifikasiWhereInput[]
    id?: IntFilter<"otpVerifikasi"> | number
    userId?: UuidFilter<"otpVerifikasi"> | string
    code?: StringFilter<"otpVerifikasi"> | string
    expireDate?: DateTimeFilter<"otpVerifikasi"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type otpVerifikasiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expireDate?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type otpVerifikasiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: otpVerifikasiWhereInput | otpVerifikasiWhereInput[]
    OR?: otpVerifikasiWhereInput[]
    NOT?: otpVerifikasiWhereInput | otpVerifikasiWhereInput[]
    userId?: UuidFilter<"otpVerifikasi"> | string
    code?: StringFilter<"otpVerifikasi"> | string
    expireDate?: DateTimeFilter<"otpVerifikasi"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type otpVerifikasiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expireDate?: SortOrder
    _count?: otpVerifikasiCountOrderByAggregateInput
    _avg?: otpVerifikasiAvgOrderByAggregateInput
    _max?: otpVerifikasiMaxOrderByAggregateInput
    _min?: otpVerifikasiMinOrderByAggregateInput
    _sum?: otpVerifikasiSumOrderByAggregateInput
  }

  export type otpVerifikasiScalarWhereWithAggregatesInput = {
    AND?: otpVerifikasiScalarWhereWithAggregatesInput | otpVerifikasiScalarWhereWithAggregatesInput[]
    OR?: otpVerifikasiScalarWhereWithAggregatesInput[]
    NOT?: otpVerifikasiScalarWhereWithAggregatesInput | otpVerifikasiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"otpVerifikasi"> | number
    userId?: UuidWithAggregatesFilter<"otpVerifikasi"> | string
    code?: StringWithAggregatesFilter<"otpVerifikasi"> | string
    expireDate?: DateTimeWithAggregatesFilter<"otpVerifikasi"> | Date | string
  }

  export type LogsLoginWhereInput = {
    AND?: LogsLoginWhereInput | LogsLoginWhereInput[]
    OR?: LogsLoginWhereInput[]
    NOT?: LogsLoginWhereInput | LogsLoginWhereInput[]
    logsId?: UuidFilter<"LogsLogin"> | string
    userId?: UuidFilter<"LogsLogin"> | string
    token?: StringFilter<"LogsLogin"> | string
    isActive?: BoolFilter<"LogsLogin"> | boolean
    device?: StringNullableFilter<"LogsLogin"> | string | null
    ip?: StringNullableFilter<"LogsLogin"> | string | null
    createdDate?: DateTimeFilter<"LogsLogin"> | Date | string
    expireDate?: DateTimeFilter<"LogsLogin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LogsLoginOrderByWithRelationInput = {
    logsId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isActive?: SortOrder
    device?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    expireDate?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LogsLoginWhereUniqueInput = Prisma.AtLeast<{
    logsId?: string
    token?: string
    AND?: LogsLoginWhereInput | LogsLoginWhereInput[]
    OR?: LogsLoginWhereInput[]
    NOT?: LogsLoginWhereInput | LogsLoginWhereInput[]
    userId?: UuidFilter<"LogsLogin"> | string
    isActive?: BoolFilter<"LogsLogin"> | boolean
    device?: StringNullableFilter<"LogsLogin"> | string | null
    ip?: StringNullableFilter<"LogsLogin"> | string | null
    createdDate?: DateTimeFilter<"LogsLogin"> | Date | string
    expireDate?: DateTimeFilter<"LogsLogin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "logsId" | "token">

  export type LogsLoginOrderByWithAggregationInput = {
    logsId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isActive?: SortOrder
    device?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdDate?: SortOrder
    expireDate?: SortOrder
    _count?: LogsLoginCountOrderByAggregateInput
    _max?: LogsLoginMaxOrderByAggregateInput
    _min?: LogsLoginMinOrderByAggregateInput
  }

  export type LogsLoginScalarWhereWithAggregatesInput = {
    AND?: LogsLoginScalarWhereWithAggregatesInput | LogsLoginScalarWhereWithAggregatesInput[]
    OR?: LogsLoginScalarWhereWithAggregatesInput[]
    NOT?: LogsLoginScalarWhereWithAggregatesInput | LogsLoginScalarWhereWithAggregatesInput[]
    logsId?: UuidWithAggregatesFilter<"LogsLogin"> | string
    userId?: UuidWithAggregatesFilter<"LogsLogin"> | string
    token?: StringWithAggregatesFilter<"LogsLogin"> | string
    isActive?: BoolWithAggregatesFilter<"LogsLogin"> | boolean
    device?: StringNullableWithAggregatesFilter<"LogsLogin"> | string | null
    ip?: StringNullableWithAggregatesFilter<"LogsLogin"> | string | null
    createdDate?: DateTimeWithAggregatesFilter<"LogsLogin"> | Date | string
    expireDate?: DateTimeWithAggregatesFilter<"LogsLogin"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleId?: IntFilter<"Role"> | number
    roleName?: StringFilter<"Role"> | string
    UserHasRoleAccess?: UserHasRoleAccessListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    UserHasRoleAccess?: UserHasRoleAccessOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    roleId?: number
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    roleName?: StringFilter<"Role"> | string
    UserHasRoleAccess?: UserHasRoleAccessListRelationFilter
  }, "roleId">

  export type RoleOrderByWithAggregationInput = {
    roleId?: SortOrder
    roleName?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    roleId?: IntWithAggregatesFilter<"Role"> | number
    roleName?: StringWithAggregatesFilter<"Role"> | string
  }

  export type AccessWhereInput = {
    AND?: AccessWhereInput | AccessWhereInput[]
    OR?: AccessWhereInput[]
    NOT?: AccessWhereInput | AccessWhereInput[]
    accessId?: IntFilter<"Access"> | number
    accessName?: StringFilter<"Access"> | string
    UserHasRoleAccess?: UserHasRoleAccessListRelationFilter
  }

  export type AccessOrderByWithRelationInput = {
    accessId?: SortOrder
    accessName?: SortOrder
    UserHasRoleAccess?: UserHasRoleAccessOrderByRelationAggregateInput
  }

  export type AccessWhereUniqueInput = Prisma.AtLeast<{
    accessId?: number
    AND?: AccessWhereInput | AccessWhereInput[]
    OR?: AccessWhereInput[]
    NOT?: AccessWhereInput | AccessWhereInput[]
    accessName?: StringFilter<"Access"> | string
    UserHasRoleAccess?: UserHasRoleAccessListRelationFilter
  }, "accessId">

  export type AccessOrderByWithAggregationInput = {
    accessId?: SortOrder
    accessName?: SortOrder
    _count?: AccessCountOrderByAggregateInput
    _avg?: AccessAvgOrderByAggregateInput
    _max?: AccessMaxOrderByAggregateInput
    _min?: AccessMinOrderByAggregateInput
    _sum?: AccessSumOrderByAggregateInput
  }

  export type AccessScalarWhereWithAggregatesInput = {
    AND?: AccessScalarWhereWithAggregatesInput | AccessScalarWhereWithAggregatesInput[]
    OR?: AccessScalarWhereWithAggregatesInput[]
    NOT?: AccessScalarWhereWithAggregatesInput | AccessScalarWhereWithAggregatesInput[]
    accessId?: IntWithAggregatesFilter<"Access"> | number
    accessName?: StringWithAggregatesFilter<"Access"> | string
  }

  export type UserHasRoleAccessWhereInput = {
    AND?: UserHasRoleAccessWhereInput | UserHasRoleAccessWhereInput[]
    OR?: UserHasRoleAccessWhereInput[]
    NOT?: UserHasRoleAccessWhereInput | UserHasRoleAccessWhereInput[]
    userId?: UuidFilter<"UserHasRoleAccess"> | string
    roleId?: IntFilter<"UserHasRoleAccess"> | number
    accessId?: IntFilter<"UserHasRoleAccess"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    access?: XOR<AccessScalarRelationFilter, AccessWhereInput>
  }

  export type UserHasRoleAccessOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    accessId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    access?: AccessOrderByWithRelationInput
  }

  export type UserHasRoleAccessWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId_accessId?: UserHasRoleAccessUserIdRoleIdAccessIdCompoundUniqueInput
    AND?: UserHasRoleAccessWhereInput | UserHasRoleAccessWhereInput[]
    OR?: UserHasRoleAccessWhereInput[]
    NOT?: UserHasRoleAccessWhereInput | UserHasRoleAccessWhereInput[]
    userId?: UuidFilter<"UserHasRoleAccess"> | string
    roleId?: IntFilter<"UserHasRoleAccess"> | number
    accessId?: IntFilter<"UserHasRoleAccess"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    access?: XOR<AccessScalarRelationFilter, AccessWhereInput>
  }, "userId_roleId_accessId">

  export type UserHasRoleAccessOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    accessId?: SortOrder
    _count?: UserHasRoleAccessCountOrderByAggregateInput
    _avg?: UserHasRoleAccessAvgOrderByAggregateInput
    _max?: UserHasRoleAccessMaxOrderByAggregateInput
    _min?: UserHasRoleAccessMinOrderByAggregateInput
    _sum?: UserHasRoleAccessSumOrderByAggregateInput
  }

  export type UserHasRoleAccessScalarWhereWithAggregatesInput = {
    AND?: UserHasRoleAccessScalarWhereWithAggregatesInput | UserHasRoleAccessScalarWhereWithAggregatesInput[]
    OR?: UserHasRoleAccessScalarWhereWithAggregatesInput[]
    NOT?: UserHasRoleAccessScalarWhereWithAggregatesInput | UserHasRoleAccessScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"UserHasRoleAccess"> | string
    roleId?: IntWithAggregatesFilter<"UserHasRoleAccess"> | number
    accessId?: IntWithAggregatesFilter<"UserHasRoleAccess"> | number
  }

  export type LinkedDeviceWhereInput = {
    AND?: LinkedDeviceWhereInput | LinkedDeviceWhereInput[]
    OR?: LinkedDeviceWhereInput[]
    NOT?: LinkedDeviceWhereInput | LinkedDeviceWhereInput[]
    deviceId?: UuidFilter<"LinkedDevice"> | string
    clientDeviceUuid?: UuidFilter<"LinkedDevice"> | string
    userId?: UuidFilter<"LinkedDevice"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LinkedDeviceOrderByWithRelationInput = {
    deviceId?: SortOrder
    clientDeviceUuid?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type LinkedDeviceWhereUniqueInput = Prisma.AtLeast<{
    deviceId?: string
    clientDeviceUuid?: string
    AND?: LinkedDeviceWhereInput | LinkedDeviceWhereInput[]
    OR?: LinkedDeviceWhereInput[]
    NOT?: LinkedDeviceWhereInput | LinkedDeviceWhereInput[]
    userId?: UuidFilter<"LinkedDevice"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "deviceId" | "clientDeviceUuid">

  export type LinkedDeviceOrderByWithAggregationInput = {
    deviceId?: SortOrder
    clientDeviceUuid?: SortOrder
    userId?: SortOrder
    _count?: LinkedDeviceCountOrderByAggregateInput
    _max?: LinkedDeviceMaxOrderByAggregateInput
    _min?: LinkedDeviceMinOrderByAggregateInput
  }

  export type LinkedDeviceScalarWhereWithAggregatesInput = {
    AND?: LinkedDeviceScalarWhereWithAggregatesInput | LinkedDeviceScalarWhereWithAggregatesInput[]
    OR?: LinkedDeviceScalarWhereWithAggregatesInput[]
    NOT?: LinkedDeviceScalarWhereWithAggregatesInput | LinkedDeviceScalarWhereWithAggregatesInput[]
    deviceId?: UuidWithAggregatesFilter<"LinkedDevice"> | string
    clientDeviceUuid?: UuidWithAggregatesFilter<"LinkedDevice"> | string
    userId?: UuidWithAggregatesFilter<"LinkedDevice"> | string
  }

  export type CompanySegmentWhereInput = {
    AND?: CompanySegmentWhereInput | CompanySegmentWhereInput[]
    OR?: CompanySegmentWhereInput[]
    NOT?: CompanySegmentWhereInput | CompanySegmentWhereInput[]
    segmentId?: IntFilter<"CompanySegment"> | number
    segmentName?: StringFilter<"CompanySegment"> | string
    description?: StringNullableFilter<"CompanySegment"> | string | null
    profile?: ProfileListRelationFilter
  }

  export type CompanySegmentOrderByWithRelationInput = {
    segmentId?: SortOrder
    segmentName?: SortOrder
    description?: SortOrderInput | SortOrder
    profile?: ProfileOrderByRelationAggregateInput
  }

  export type CompanySegmentWhereUniqueInput = Prisma.AtLeast<{
    segmentId?: number
    AND?: CompanySegmentWhereInput | CompanySegmentWhereInput[]
    OR?: CompanySegmentWhereInput[]
    NOT?: CompanySegmentWhereInput | CompanySegmentWhereInput[]
    segmentName?: StringFilter<"CompanySegment"> | string
    description?: StringNullableFilter<"CompanySegment"> | string | null
    profile?: ProfileListRelationFilter
  }, "segmentId">

  export type CompanySegmentOrderByWithAggregationInput = {
    segmentId?: SortOrder
    segmentName?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CompanySegmentCountOrderByAggregateInput
    _avg?: CompanySegmentAvgOrderByAggregateInput
    _max?: CompanySegmentMaxOrderByAggregateInput
    _min?: CompanySegmentMinOrderByAggregateInput
    _sum?: CompanySegmentSumOrderByAggregateInput
  }

  export type CompanySegmentScalarWhereWithAggregatesInput = {
    AND?: CompanySegmentScalarWhereWithAggregatesInput | CompanySegmentScalarWhereWithAggregatesInput[]
    OR?: CompanySegmentScalarWhereWithAggregatesInput[]
    NOT?: CompanySegmentScalarWhereWithAggregatesInput | CompanySegmentScalarWhereWithAggregatesInput[]
    segmentId?: IntWithAggregatesFilter<"CompanySegment"> | number
    segmentName?: StringWithAggregatesFilter<"CompanySegment"> | string
    description?: StringNullableWithAggregatesFilter<"CompanySegment"> | string | null
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    userId?: UuidFilter<"Profile"> | string
    fullName?: StringNullableFilter<"Profile"> | string | null
    urlImage?: StringNullableFilter<"Profile"> | string | null
    companyName?: StringFilter<"Profile"> | string
    npwp?: StringFilter<"Profile"> | string
    deedNumber?: StringNullableFilter<"Profile"> | string | null
    establishedDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    npwpUrl?: StringFilter<"Profile"> | string
    deedUrl?: StringFilter<"Profile"> | string
    description?: StringNullableFilter<"Profile"> | string | null
    segmentId?: IntNullableFilter<"Profile"> | number | null
    companyAddress?: StringNullableFilter<"Profile"> | string | null
    companyPhone?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    segment?: XOR<CompanySegmentNullableScalarRelationFilter, CompanySegmentWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    userId?: SortOrder
    fullName?: SortOrderInput | SortOrder
    urlImage?: SortOrderInput | SortOrder
    companyName?: SortOrder
    npwp?: SortOrder
    deedNumber?: SortOrderInput | SortOrder
    establishedDate?: SortOrderInput | SortOrder
    npwpUrl?: SortOrder
    deedUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    segmentId?: SortOrderInput | SortOrder
    companyAddress?: SortOrderInput | SortOrder
    companyPhone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    segment?: CompanySegmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    fullName?: StringNullableFilter<"Profile"> | string | null
    urlImage?: StringNullableFilter<"Profile"> | string | null
    companyName?: StringFilter<"Profile"> | string
    npwp?: StringFilter<"Profile"> | string
    deedNumber?: StringNullableFilter<"Profile"> | string | null
    establishedDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    npwpUrl?: StringFilter<"Profile"> | string
    deedUrl?: StringFilter<"Profile"> | string
    description?: StringNullableFilter<"Profile"> | string | null
    segmentId?: IntNullableFilter<"Profile"> | number | null
    companyAddress?: StringNullableFilter<"Profile"> | string | null
    companyPhone?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    segment?: XOR<CompanySegmentNullableScalarRelationFilter, CompanySegmentWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type ProfileOrderByWithAggregationInput = {
    userId?: SortOrder
    fullName?: SortOrderInput | SortOrder
    urlImage?: SortOrderInput | SortOrder
    companyName?: SortOrder
    npwp?: SortOrder
    deedNumber?: SortOrderInput | SortOrder
    establishedDate?: SortOrderInput | SortOrder
    npwpUrl?: SortOrder
    deedUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    segmentId?: SortOrderInput | SortOrder
    companyAddress?: SortOrderInput | SortOrder
    companyPhone?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    userId?: UuidWithAggregatesFilter<"Profile"> | string
    fullName?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    urlImage?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    companyName?: StringWithAggregatesFilter<"Profile"> | string
    npwp?: StringWithAggregatesFilter<"Profile"> | string
    deedNumber?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    establishedDate?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    npwpUrl?: StringWithAggregatesFilter<"Profile"> | string
    deedUrl?: StringWithAggregatesFilter<"Profile"> | string
    description?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    segmentId?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    companyAddress?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    companyPhone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    website?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type AllowedIpCorsCreateInput = {
    ip: string
  }

  export type AllowedIpCorsUncheckedCreateInput = {
    ip: string
  }

  export type AllowedIpCorsUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type AllowedIpCorsUncheckedUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type AllowedIpCorsCreateManyInput = {
    ip: string
  }

  export type AllowedIpCorsUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type AllowedIpCorsUncheckedUpdateManyInput = {
    ip?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginCreateNestedManyWithoutUserInput
    linkedDevice?: LinkedDeviceCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessCreateNestedManyWithoutUserInput
    otp?: otpVerifikasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginUncheckedCreateNestedManyWithoutUserInput
    linkedDevice?: LinkedDeviceUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedCreateNestedManyWithoutUserInput
    otp?: otpVerifikasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUpdateManyWithoutUserNestedInput
    linkedDevice?: LinkedDeviceUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUpdateManyWithoutUserNestedInput
    otp?: otpVerifikasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUncheckedUpdateManyWithoutUserNestedInput
    linkedDevice?: LinkedDeviceUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedUpdateManyWithoutUserNestedInput
    otp?: otpVerifikasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpVerifikasiCreateInput = {
    code: string
    expireDate: Date | string
    user: UserCreateNestedOneWithoutOtpInput
  }

  export type otpVerifikasiUncheckedCreateInput = {
    id?: number
    userId: string
    code: string
    expireDate: Date | string
  }

  export type otpVerifikasiUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOtpNestedInput
  }

  export type otpVerifikasiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpVerifikasiCreateManyInput = {
    id?: number
    userId: string
    code: string
    expireDate: Date | string
  }

  export type otpVerifikasiUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpVerifikasiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsLoginCreateInput = {
    logsId?: string
    token: string
    isActive?: boolean
    device?: string | null
    ip?: string | null
    createdDate?: Date | string
    expireDate: Date | string
    user: UserCreateNestedOneWithoutLogsInput
  }

  export type LogsLoginUncheckedCreateInput = {
    logsId?: string
    userId: string
    token: string
    isActive?: boolean
    device?: string | null
    ip?: string | null
    createdDate?: Date | string
    expireDate: Date | string
  }

  export type LogsLoginUpdateInput = {
    logsId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLogsNestedInput
  }

  export type LogsLoginUncheckedUpdateInput = {
    logsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsLoginCreateManyInput = {
    logsId?: string
    userId: string
    token: string
    isActive?: boolean
    device?: string | null
    ip?: string | null
    createdDate?: Date | string
    expireDate: Date | string
  }

  export type LogsLoginUpdateManyMutationInput = {
    logsId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsLoginUncheckedUpdateManyInput = {
    logsId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    roleName: string
    UserHasRoleAccess?: UserHasRoleAccessCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    roleId?: number
    roleName: string
    UserHasRoleAccess?: UserHasRoleAccessUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    roleName?: StringFieldUpdateOperationsInput | string
    UserHasRoleAccess?: UserHasRoleAccessUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
    UserHasRoleAccess?: UserHasRoleAccessUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    roleId?: number
    roleName: string
  }

  export type RoleUpdateManyMutationInput = {
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type AccessCreateInput = {
    accessName: string
    UserHasRoleAccess?: UserHasRoleAccessCreateNestedManyWithoutAccessInput
  }

  export type AccessUncheckedCreateInput = {
    accessId?: number
    accessName: string
    UserHasRoleAccess?: UserHasRoleAccessUncheckedCreateNestedManyWithoutAccessInput
  }

  export type AccessUpdateInput = {
    accessName?: StringFieldUpdateOperationsInput | string
    UserHasRoleAccess?: UserHasRoleAccessUpdateManyWithoutAccessNestedInput
  }

  export type AccessUncheckedUpdateInput = {
    accessId?: IntFieldUpdateOperationsInput | number
    accessName?: StringFieldUpdateOperationsInput | string
    UserHasRoleAccess?: UserHasRoleAccessUncheckedUpdateManyWithoutAccessNestedInput
  }

  export type AccessCreateManyInput = {
    accessId?: number
    accessName: string
  }

  export type AccessUpdateManyMutationInput = {
    accessName?: StringFieldUpdateOperationsInput | string
  }

  export type AccessUncheckedUpdateManyInput = {
    accessId?: IntFieldUpdateOperationsInput | number
    accessName?: StringFieldUpdateOperationsInput | string
  }

  export type UserHasRoleAccessCreateInput = {
    user: UserCreateNestedOneWithoutUserHasRoleAccessInput
    role: RoleCreateNestedOneWithoutUserHasRoleAccessInput
    access: AccessCreateNestedOneWithoutUserHasRoleAccessInput
  }

  export type UserHasRoleAccessUncheckedCreateInput = {
    userId: string
    roleId: number
    accessId: number
  }

  export type UserHasRoleAccessUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
    role?: RoleUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
    access?: AccessUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
  }

  export type UserHasRoleAccessUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    accessId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasRoleAccessCreateManyInput = {
    userId: string
    roleId: number
    accessId: number
  }

  export type UserHasRoleAccessUpdateManyMutationInput = {

  }

  export type UserHasRoleAccessUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    accessId?: IntFieldUpdateOperationsInput | number
  }

  export type LinkedDeviceCreateInput = {
    deviceId?: string
    clientDeviceUuid: string
    user: UserCreateNestedOneWithoutLinkedDeviceInput
  }

  export type LinkedDeviceUncheckedCreateInput = {
    deviceId?: string
    clientDeviceUuid: string
    userId: string
  }

  export type LinkedDeviceUpdateInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    clientDeviceUuid?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLinkedDeviceNestedInput
  }

  export type LinkedDeviceUncheckedUpdateInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    clientDeviceUuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedDeviceCreateManyInput = {
    deviceId?: string
    clientDeviceUuid: string
    userId: string
  }

  export type LinkedDeviceUpdateManyMutationInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    clientDeviceUuid?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedDeviceUncheckedUpdateManyInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    clientDeviceUuid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanySegmentCreateInput = {
    segmentName: string
    description?: string | null
    profile?: ProfileCreateNestedManyWithoutSegmentInput
  }

  export type CompanySegmentUncheckedCreateInput = {
    segmentId?: number
    segmentName: string
    description?: string | null
    profile?: ProfileUncheckedCreateNestedManyWithoutSegmentInput
  }

  export type CompanySegmentUpdateInput = {
    segmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUpdateManyWithoutSegmentNestedInput
  }

  export type CompanySegmentUncheckedUpdateInput = {
    segmentId?: IntFieldUpdateOperationsInput | number
    segmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: ProfileUncheckedUpdateManyWithoutSegmentNestedInput
  }

  export type CompanySegmentCreateManyInput = {
    segmentId?: number
    segmentName: string
    description?: string | null
  }

  export type CompanySegmentUpdateManyMutationInput = {
    segmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanySegmentUncheckedUpdateManyInput = {
    segmentId?: IntFieldUpdateOperationsInput | number
    segmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProfileCreateInput = {
    fullName?: string | null
    urlImage?: string | null
    companyName: string
    npwp: string
    deedNumber?: string | null
    establishedDate?: Date | string | null
    npwpUrl: string
    deedUrl: string
    description?: string | null
    companyAddress?: string | null
    companyPhone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    segment?: CompanySegmentCreateNestedOneWithoutProfileInput
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    userId: string
    fullName?: string | null
    urlImage?: string | null
    companyName: string
    npwp: string
    deedNumber?: string | null
    establishedDate?: Date | string | null
    npwpUrl: string
    deedUrl: string
    description?: string | null
    segmentId?: number | null
    companyAddress?: string | null
    companyPhone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segment?: CompanySegmentUpdateOneWithoutProfileNestedInput
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    segmentId?: NullableIntFieldUpdateOperationsInput | number | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    userId: string
    fullName?: string | null
    urlImage?: string | null
    companyName: string
    npwp: string
    deedNumber?: string | null
    establishedDate?: Date | string | null
    npwpUrl: string
    deedUrl: string
    description?: string | null
    segmentId?: number | null
    companyAddress?: string | null
    companyPhone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    segmentId?: NullableIntFieldUpdateOperationsInput | number | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AllowedIpCorsCountOrderByAggregateInput = {
    ip?: SortOrder
  }

  export type AllowedIpCorsMaxOrderByAggregateInput = {
    ip?: SortOrder
  }

  export type AllowedIpCorsMinOrderByAggregateInput = {
    ip?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LogsLoginListRelationFilter = {
    every?: LogsLoginWhereInput
    some?: LogsLoginWhereInput
    none?: LogsLoginWhereInput
  }

  export type LinkedDeviceListRelationFilter = {
    every?: LinkedDeviceWhereInput
    some?: LinkedDeviceWhereInput
    none?: LinkedDeviceWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type UserHasRoleAccessListRelationFilter = {
    every?: UserHasRoleAccessWhereInput
    some?: UserHasRoleAccessWhereInput
    none?: UserHasRoleAccessWhereInput
  }

  export type OtpVerifikasiListRelationFilter = {
    every?: otpVerifikasiWhereInput
    some?: otpVerifikasiWhereInput
    none?: otpVerifikasiWhereInput
  }

  export type LogsLoginOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LinkedDeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserHasRoleAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type otpVerifikasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    sessionExpireDate?: SortOrder
    createdDate?: SortOrder
    updateDate?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    sessionExpireDate?: SortOrder
    createdDate?: SortOrder
    updateDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    userId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    sessionExpireDate?: SortOrder
    createdDate?: SortOrder
    updateDate?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type otpVerifikasiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expireDate?: SortOrder
  }

  export type otpVerifikasiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type otpVerifikasiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expireDate?: SortOrder
  }

  export type otpVerifikasiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    expireDate?: SortOrder
  }

  export type otpVerifikasiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LogsLoginCountOrderByAggregateInput = {
    logsId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isActive?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    createdDate?: SortOrder
    expireDate?: SortOrder
  }

  export type LogsLoginMaxOrderByAggregateInput = {
    logsId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isActive?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    createdDate?: SortOrder
    expireDate?: SortOrder
  }

  export type LogsLoginMinOrderByAggregateInput = {
    logsId?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    isActive?: SortOrder
    device?: SortOrder
    ip?: SortOrder
    createdDate?: SortOrder
    expireDate?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    roleId?: SortOrder
    roleName?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    roleId?: SortOrder
  }

  export type AccessCountOrderByAggregateInput = {
    accessId?: SortOrder
    accessName?: SortOrder
  }

  export type AccessAvgOrderByAggregateInput = {
    accessId?: SortOrder
  }

  export type AccessMaxOrderByAggregateInput = {
    accessId?: SortOrder
    accessName?: SortOrder
  }

  export type AccessMinOrderByAggregateInput = {
    accessId?: SortOrder
    accessName?: SortOrder
  }

  export type AccessSumOrderByAggregateInput = {
    accessId?: SortOrder
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type AccessScalarRelationFilter = {
    is?: AccessWhereInput
    isNot?: AccessWhereInput
  }

  export type UserHasRoleAccessUserIdRoleIdAccessIdCompoundUniqueInput = {
    userId: string
    roleId: number
    accessId: number
  }

  export type UserHasRoleAccessCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    accessId?: SortOrder
  }

  export type UserHasRoleAccessAvgOrderByAggregateInput = {
    roleId?: SortOrder
    accessId?: SortOrder
  }

  export type UserHasRoleAccessMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    accessId?: SortOrder
  }

  export type UserHasRoleAccessMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    accessId?: SortOrder
  }

  export type UserHasRoleAccessSumOrderByAggregateInput = {
    roleId?: SortOrder
    accessId?: SortOrder
  }

  export type LinkedDeviceCountOrderByAggregateInput = {
    deviceId?: SortOrder
    clientDeviceUuid?: SortOrder
    userId?: SortOrder
  }

  export type LinkedDeviceMaxOrderByAggregateInput = {
    deviceId?: SortOrder
    clientDeviceUuid?: SortOrder
    userId?: SortOrder
  }

  export type LinkedDeviceMinOrderByAggregateInput = {
    deviceId?: SortOrder
    clientDeviceUuid?: SortOrder
    userId?: SortOrder
  }

  export type ProfileListRelationFilter = {
    every?: ProfileWhereInput
    some?: ProfileWhereInput
    none?: ProfileWhereInput
  }

  export type ProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanySegmentCountOrderByAggregateInput = {
    segmentId?: SortOrder
    segmentName?: SortOrder
    description?: SortOrder
  }

  export type CompanySegmentAvgOrderByAggregateInput = {
    segmentId?: SortOrder
  }

  export type CompanySegmentMaxOrderByAggregateInput = {
    segmentId?: SortOrder
    segmentName?: SortOrder
    description?: SortOrder
  }

  export type CompanySegmentMinOrderByAggregateInput = {
    segmentId?: SortOrder
    segmentName?: SortOrder
    description?: SortOrder
  }

  export type CompanySegmentSumOrderByAggregateInput = {
    segmentId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CompanySegmentNullableScalarRelationFilter = {
    is?: CompanySegmentWhereInput | null
    isNot?: CompanySegmentWhereInput | null
  }

  export type ProfileCountOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    urlImage?: SortOrder
    companyName?: SortOrder
    npwp?: SortOrder
    deedNumber?: SortOrder
    establishedDate?: SortOrder
    npwpUrl?: SortOrder
    deedUrl?: SortOrder
    description?: SortOrder
    segmentId?: SortOrder
    companyAddress?: SortOrder
    companyPhone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    segmentId?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    urlImage?: SortOrder
    companyName?: SortOrder
    npwp?: SortOrder
    deedNumber?: SortOrder
    establishedDate?: SortOrder
    npwpUrl?: SortOrder
    deedUrl?: SortOrder
    description?: SortOrder
    segmentId?: SortOrder
    companyAddress?: SortOrder
    companyPhone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    userId?: SortOrder
    fullName?: SortOrder
    urlImage?: SortOrder
    companyName?: SortOrder
    npwp?: SortOrder
    deedNumber?: SortOrder
    establishedDate?: SortOrder
    npwpUrl?: SortOrder
    deedUrl?: SortOrder
    description?: SortOrder
    segmentId?: SortOrder
    companyAddress?: SortOrder
    companyPhone?: SortOrder
    website?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    segmentId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type LogsLoginCreateNestedManyWithoutUserInput = {
    create?: XOR<LogsLoginCreateWithoutUserInput, LogsLoginUncheckedCreateWithoutUserInput> | LogsLoginCreateWithoutUserInput[] | LogsLoginUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogsLoginCreateOrConnectWithoutUserInput | LogsLoginCreateOrConnectWithoutUserInput[]
    createMany?: LogsLoginCreateManyUserInputEnvelope
    connect?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
  }

  export type LinkedDeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedDeviceCreateWithoutUserInput, LinkedDeviceUncheckedCreateWithoutUserInput> | LinkedDeviceCreateWithoutUserInput[] | LinkedDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedDeviceCreateOrConnectWithoutUserInput | LinkedDeviceCreateOrConnectWithoutUserInput[]
    createMany?: LinkedDeviceCreateManyUserInputEnvelope
    connect?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type UserHasRoleAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutUserInput, UserHasRoleAccessUncheckedCreateWithoutUserInput> | UserHasRoleAccessCreateWithoutUserInput[] | UserHasRoleAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutUserInput | UserHasRoleAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserHasRoleAccessCreateManyUserInputEnvelope
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
  }

  export type otpVerifikasiCreateNestedManyWithoutUserInput = {
    create?: XOR<otpVerifikasiCreateWithoutUserInput, otpVerifikasiUncheckedCreateWithoutUserInput> | otpVerifikasiCreateWithoutUserInput[] | otpVerifikasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: otpVerifikasiCreateOrConnectWithoutUserInput | otpVerifikasiCreateOrConnectWithoutUserInput[]
    createMany?: otpVerifikasiCreateManyUserInputEnvelope
    connect?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
  }

  export type LogsLoginUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LogsLoginCreateWithoutUserInput, LogsLoginUncheckedCreateWithoutUserInput> | LogsLoginCreateWithoutUserInput[] | LogsLoginUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogsLoginCreateOrConnectWithoutUserInput | LogsLoginCreateOrConnectWithoutUserInput[]
    createMany?: LogsLoginCreateManyUserInputEnvelope
    connect?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
  }

  export type LinkedDeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LinkedDeviceCreateWithoutUserInput, LinkedDeviceUncheckedCreateWithoutUserInput> | LinkedDeviceCreateWithoutUserInput[] | LinkedDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedDeviceCreateOrConnectWithoutUserInput | LinkedDeviceCreateOrConnectWithoutUserInput[]
    createMany?: LinkedDeviceCreateManyUserInputEnvelope
    connect?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type UserHasRoleAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutUserInput, UserHasRoleAccessUncheckedCreateWithoutUserInput> | UserHasRoleAccessCreateWithoutUserInput[] | UserHasRoleAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutUserInput | UserHasRoleAccessCreateOrConnectWithoutUserInput[]
    createMany?: UserHasRoleAccessCreateManyUserInputEnvelope
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
  }

  export type otpVerifikasiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<otpVerifikasiCreateWithoutUserInput, otpVerifikasiUncheckedCreateWithoutUserInput> | otpVerifikasiCreateWithoutUserInput[] | otpVerifikasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: otpVerifikasiCreateOrConnectWithoutUserInput | otpVerifikasiCreateOrConnectWithoutUserInput[]
    createMany?: otpVerifikasiCreateManyUserInputEnvelope
    connect?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LogsLoginUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogsLoginCreateWithoutUserInput, LogsLoginUncheckedCreateWithoutUserInput> | LogsLoginCreateWithoutUserInput[] | LogsLoginUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogsLoginCreateOrConnectWithoutUserInput | LogsLoginCreateOrConnectWithoutUserInput[]
    upsert?: LogsLoginUpsertWithWhereUniqueWithoutUserInput | LogsLoginUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogsLoginCreateManyUserInputEnvelope
    set?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
    disconnect?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
    delete?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
    connect?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
    update?: LogsLoginUpdateWithWhereUniqueWithoutUserInput | LogsLoginUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogsLoginUpdateManyWithWhereWithoutUserInput | LogsLoginUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogsLoginScalarWhereInput | LogsLoginScalarWhereInput[]
  }

  export type LinkedDeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedDeviceCreateWithoutUserInput, LinkedDeviceUncheckedCreateWithoutUserInput> | LinkedDeviceCreateWithoutUserInput[] | LinkedDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedDeviceCreateOrConnectWithoutUserInput | LinkedDeviceCreateOrConnectWithoutUserInput[]
    upsert?: LinkedDeviceUpsertWithWhereUniqueWithoutUserInput | LinkedDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedDeviceCreateManyUserInputEnvelope
    set?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
    disconnect?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
    delete?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
    connect?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
    update?: LinkedDeviceUpdateWithWhereUniqueWithoutUserInput | LinkedDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedDeviceUpdateManyWithWhereWithoutUserInput | LinkedDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedDeviceScalarWhereInput | LinkedDeviceScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserHasRoleAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutUserInput, UserHasRoleAccessUncheckedCreateWithoutUserInput> | UserHasRoleAccessCreateWithoutUserInput[] | UserHasRoleAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutUserInput | UserHasRoleAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserHasRoleAccessUpsertWithWhereUniqueWithoutUserInput | UserHasRoleAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHasRoleAccessCreateManyUserInputEnvelope
    set?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    disconnect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    delete?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    update?: UserHasRoleAccessUpdateWithWhereUniqueWithoutUserInput | UserHasRoleAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHasRoleAccessUpdateManyWithWhereWithoutUserInput | UserHasRoleAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHasRoleAccessScalarWhereInput | UserHasRoleAccessScalarWhereInput[]
  }

  export type otpVerifikasiUpdateManyWithoutUserNestedInput = {
    create?: XOR<otpVerifikasiCreateWithoutUserInput, otpVerifikasiUncheckedCreateWithoutUserInput> | otpVerifikasiCreateWithoutUserInput[] | otpVerifikasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: otpVerifikasiCreateOrConnectWithoutUserInput | otpVerifikasiCreateOrConnectWithoutUserInput[]
    upsert?: otpVerifikasiUpsertWithWhereUniqueWithoutUserInput | otpVerifikasiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: otpVerifikasiCreateManyUserInputEnvelope
    set?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
    disconnect?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
    delete?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
    connect?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
    update?: otpVerifikasiUpdateWithWhereUniqueWithoutUserInput | otpVerifikasiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: otpVerifikasiUpdateManyWithWhereWithoutUserInput | otpVerifikasiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: otpVerifikasiScalarWhereInput | otpVerifikasiScalarWhereInput[]
  }

  export type LogsLoginUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LogsLoginCreateWithoutUserInput, LogsLoginUncheckedCreateWithoutUserInput> | LogsLoginCreateWithoutUserInput[] | LogsLoginUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LogsLoginCreateOrConnectWithoutUserInput | LogsLoginCreateOrConnectWithoutUserInput[]
    upsert?: LogsLoginUpsertWithWhereUniqueWithoutUserInput | LogsLoginUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LogsLoginCreateManyUserInputEnvelope
    set?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
    disconnect?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
    delete?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
    connect?: LogsLoginWhereUniqueInput | LogsLoginWhereUniqueInput[]
    update?: LogsLoginUpdateWithWhereUniqueWithoutUserInput | LogsLoginUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LogsLoginUpdateManyWithWhereWithoutUserInput | LogsLoginUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LogsLoginScalarWhereInput | LogsLoginScalarWhereInput[]
  }

  export type LinkedDeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LinkedDeviceCreateWithoutUserInput, LinkedDeviceUncheckedCreateWithoutUserInput> | LinkedDeviceCreateWithoutUserInput[] | LinkedDeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LinkedDeviceCreateOrConnectWithoutUserInput | LinkedDeviceCreateOrConnectWithoutUserInput[]
    upsert?: LinkedDeviceUpsertWithWhereUniqueWithoutUserInput | LinkedDeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LinkedDeviceCreateManyUserInputEnvelope
    set?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
    disconnect?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
    delete?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
    connect?: LinkedDeviceWhereUniqueInput | LinkedDeviceWhereUniqueInput[]
    update?: LinkedDeviceUpdateWithWhereUniqueWithoutUserInput | LinkedDeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LinkedDeviceUpdateManyWithWhereWithoutUserInput | LinkedDeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LinkedDeviceScalarWhereInput | LinkedDeviceScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserHasRoleAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutUserInput, UserHasRoleAccessUncheckedCreateWithoutUserInput> | UserHasRoleAccessCreateWithoutUserInput[] | UserHasRoleAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutUserInput | UserHasRoleAccessCreateOrConnectWithoutUserInput[]
    upsert?: UserHasRoleAccessUpsertWithWhereUniqueWithoutUserInput | UserHasRoleAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserHasRoleAccessCreateManyUserInputEnvelope
    set?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    disconnect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    delete?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    update?: UserHasRoleAccessUpdateWithWhereUniqueWithoutUserInput | UserHasRoleAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserHasRoleAccessUpdateManyWithWhereWithoutUserInput | UserHasRoleAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserHasRoleAccessScalarWhereInput | UserHasRoleAccessScalarWhereInput[]
  }

  export type otpVerifikasiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<otpVerifikasiCreateWithoutUserInput, otpVerifikasiUncheckedCreateWithoutUserInput> | otpVerifikasiCreateWithoutUserInput[] | otpVerifikasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: otpVerifikasiCreateOrConnectWithoutUserInput | otpVerifikasiCreateOrConnectWithoutUserInput[]
    upsert?: otpVerifikasiUpsertWithWhereUniqueWithoutUserInput | otpVerifikasiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: otpVerifikasiCreateManyUserInputEnvelope
    set?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
    disconnect?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
    delete?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
    connect?: otpVerifikasiWhereUniqueInput | otpVerifikasiWhereUniqueInput[]
    update?: otpVerifikasiUpdateWithWhereUniqueWithoutUserInput | otpVerifikasiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: otpVerifikasiUpdateManyWithWhereWithoutUserInput | otpVerifikasiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: otpVerifikasiScalarWhereInput | otpVerifikasiScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOtpInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOtpNestedInput = {
    create?: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpInput
    upsert?: UserUpsertWithoutOtpInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpInput, UserUpdateWithoutOtpInput>, UserUncheckedUpdateWithoutOtpInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserHasRoleAccessCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutRoleInput, UserHasRoleAccessUncheckedCreateWithoutRoleInput> | UserHasRoleAccessCreateWithoutRoleInput[] | UserHasRoleAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutRoleInput | UserHasRoleAccessCreateOrConnectWithoutRoleInput[]
    createMany?: UserHasRoleAccessCreateManyRoleInputEnvelope
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
  }

  export type UserHasRoleAccessUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutRoleInput, UserHasRoleAccessUncheckedCreateWithoutRoleInput> | UserHasRoleAccessCreateWithoutRoleInput[] | UserHasRoleAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutRoleInput | UserHasRoleAccessCreateOrConnectWithoutRoleInput[]
    createMany?: UserHasRoleAccessCreateManyRoleInputEnvelope
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
  }

  export type UserHasRoleAccessUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutRoleInput, UserHasRoleAccessUncheckedCreateWithoutRoleInput> | UserHasRoleAccessCreateWithoutRoleInput[] | UserHasRoleAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutRoleInput | UserHasRoleAccessCreateOrConnectWithoutRoleInput[]
    upsert?: UserHasRoleAccessUpsertWithWhereUniqueWithoutRoleInput | UserHasRoleAccessUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserHasRoleAccessCreateManyRoleInputEnvelope
    set?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    disconnect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    delete?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    update?: UserHasRoleAccessUpdateWithWhereUniqueWithoutRoleInput | UserHasRoleAccessUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserHasRoleAccessUpdateManyWithWhereWithoutRoleInput | UserHasRoleAccessUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserHasRoleAccessScalarWhereInput | UserHasRoleAccessScalarWhereInput[]
  }

  export type UserHasRoleAccessUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutRoleInput, UserHasRoleAccessUncheckedCreateWithoutRoleInput> | UserHasRoleAccessCreateWithoutRoleInput[] | UserHasRoleAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutRoleInput | UserHasRoleAccessCreateOrConnectWithoutRoleInput[]
    upsert?: UserHasRoleAccessUpsertWithWhereUniqueWithoutRoleInput | UserHasRoleAccessUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserHasRoleAccessCreateManyRoleInputEnvelope
    set?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    disconnect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    delete?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    update?: UserHasRoleAccessUpdateWithWhereUniqueWithoutRoleInput | UserHasRoleAccessUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserHasRoleAccessUpdateManyWithWhereWithoutRoleInput | UserHasRoleAccessUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserHasRoleAccessScalarWhereInput | UserHasRoleAccessScalarWhereInput[]
  }

  export type UserHasRoleAccessCreateNestedManyWithoutAccessInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutAccessInput, UserHasRoleAccessUncheckedCreateWithoutAccessInput> | UserHasRoleAccessCreateWithoutAccessInput[] | UserHasRoleAccessUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutAccessInput | UserHasRoleAccessCreateOrConnectWithoutAccessInput[]
    createMany?: UserHasRoleAccessCreateManyAccessInputEnvelope
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
  }

  export type UserHasRoleAccessUncheckedCreateNestedManyWithoutAccessInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutAccessInput, UserHasRoleAccessUncheckedCreateWithoutAccessInput> | UserHasRoleAccessCreateWithoutAccessInput[] | UserHasRoleAccessUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutAccessInput | UserHasRoleAccessCreateOrConnectWithoutAccessInput[]
    createMany?: UserHasRoleAccessCreateManyAccessInputEnvelope
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
  }

  export type UserHasRoleAccessUpdateManyWithoutAccessNestedInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutAccessInput, UserHasRoleAccessUncheckedCreateWithoutAccessInput> | UserHasRoleAccessCreateWithoutAccessInput[] | UserHasRoleAccessUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutAccessInput | UserHasRoleAccessCreateOrConnectWithoutAccessInput[]
    upsert?: UserHasRoleAccessUpsertWithWhereUniqueWithoutAccessInput | UserHasRoleAccessUpsertWithWhereUniqueWithoutAccessInput[]
    createMany?: UserHasRoleAccessCreateManyAccessInputEnvelope
    set?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    disconnect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    delete?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    update?: UserHasRoleAccessUpdateWithWhereUniqueWithoutAccessInput | UserHasRoleAccessUpdateWithWhereUniqueWithoutAccessInput[]
    updateMany?: UserHasRoleAccessUpdateManyWithWhereWithoutAccessInput | UserHasRoleAccessUpdateManyWithWhereWithoutAccessInput[]
    deleteMany?: UserHasRoleAccessScalarWhereInput | UserHasRoleAccessScalarWhereInput[]
  }

  export type UserHasRoleAccessUncheckedUpdateManyWithoutAccessNestedInput = {
    create?: XOR<UserHasRoleAccessCreateWithoutAccessInput, UserHasRoleAccessUncheckedCreateWithoutAccessInput> | UserHasRoleAccessCreateWithoutAccessInput[] | UserHasRoleAccessUncheckedCreateWithoutAccessInput[]
    connectOrCreate?: UserHasRoleAccessCreateOrConnectWithoutAccessInput | UserHasRoleAccessCreateOrConnectWithoutAccessInput[]
    upsert?: UserHasRoleAccessUpsertWithWhereUniqueWithoutAccessInput | UserHasRoleAccessUpsertWithWhereUniqueWithoutAccessInput[]
    createMany?: UserHasRoleAccessCreateManyAccessInputEnvelope
    set?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    disconnect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    delete?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    connect?: UserHasRoleAccessWhereUniqueInput | UserHasRoleAccessWhereUniqueInput[]
    update?: UserHasRoleAccessUpdateWithWhereUniqueWithoutAccessInput | UserHasRoleAccessUpdateWithWhereUniqueWithoutAccessInput[]
    updateMany?: UserHasRoleAccessUpdateManyWithWhereWithoutAccessInput | UserHasRoleAccessUpdateManyWithWhereWithoutAccessInput[]
    deleteMany?: UserHasRoleAccessScalarWhereInput | UserHasRoleAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserHasRoleAccessInput = {
    create?: XOR<UserCreateWithoutUserHasRoleAccessInput, UserUncheckedCreateWithoutUserHasRoleAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHasRoleAccessInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserHasRoleAccessInput = {
    create?: XOR<RoleCreateWithoutUserHasRoleAccessInput, RoleUncheckedCreateWithoutUserHasRoleAccessInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserHasRoleAccessInput
    connect?: RoleWhereUniqueInput
  }

  export type AccessCreateNestedOneWithoutUserHasRoleAccessInput = {
    create?: XOR<AccessCreateWithoutUserHasRoleAccessInput, AccessUncheckedCreateWithoutUserHasRoleAccessInput>
    connectOrCreate?: AccessCreateOrConnectWithoutUserHasRoleAccessInput
    connect?: AccessWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserHasRoleAccessNestedInput = {
    create?: XOR<UserCreateWithoutUserHasRoleAccessInput, UserUncheckedCreateWithoutUserHasRoleAccessInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserHasRoleAccessInput
    upsert?: UserUpsertWithoutUserHasRoleAccessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserHasRoleAccessInput, UserUpdateWithoutUserHasRoleAccessInput>, UserUncheckedUpdateWithoutUserHasRoleAccessInput>
  }

  export type RoleUpdateOneRequiredWithoutUserHasRoleAccessNestedInput = {
    create?: XOR<RoleCreateWithoutUserHasRoleAccessInput, RoleUncheckedCreateWithoutUserHasRoleAccessInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserHasRoleAccessInput
    upsert?: RoleUpsertWithoutUserHasRoleAccessInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserHasRoleAccessInput, RoleUpdateWithoutUserHasRoleAccessInput>, RoleUncheckedUpdateWithoutUserHasRoleAccessInput>
  }

  export type AccessUpdateOneRequiredWithoutUserHasRoleAccessNestedInput = {
    create?: XOR<AccessCreateWithoutUserHasRoleAccessInput, AccessUncheckedCreateWithoutUserHasRoleAccessInput>
    connectOrCreate?: AccessCreateOrConnectWithoutUserHasRoleAccessInput
    upsert?: AccessUpsertWithoutUserHasRoleAccessInput
    connect?: AccessWhereUniqueInput
    update?: XOR<XOR<AccessUpdateToOneWithWhereWithoutUserHasRoleAccessInput, AccessUpdateWithoutUserHasRoleAccessInput>, AccessUncheckedUpdateWithoutUserHasRoleAccessInput>
  }

  export type UserCreateNestedOneWithoutLinkedDeviceInput = {
    create?: XOR<UserCreateWithoutLinkedDeviceInput, UserUncheckedCreateWithoutLinkedDeviceInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedDeviceInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLinkedDeviceNestedInput = {
    create?: XOR<UserCreateWithoutLinkedDeviceInput, UserUncheckedCreateWithoutLinkedDeviceInput>
    connectOrCreate?: UserCreateOrConnectWithoutLinkedDeviceInput
    upsert?: UserUpsertWithoutLinkedDeviceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLinkedDeviceInput, UserUpdateWithoutLinkedDeviceInput>, UserUncheckedUpdateWithoutLinkedDeviceInput>
  }

  export type ProfileCreateNestedManyWithoutSegmentInput = {
    create?: XOR<ProfileCreateWithoutSegmentInput, ProfileUncheckedCreateWithoutSegmentInput> | ProfileCreateWithoutSegmentInput[] | ProfileUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutSegmentInput | ProfileCreateOrConnectWithoutSegmentInput[]
    createMany?: ProfileCreateManySegmentInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedManyWithoutSegmentInput = {
    create?: XOR<ProfileCreateWithoutSegmentInput, ProfileUncheckedCreateWithoutSegmentInput> | ProfileCreateWithoutSegmentInput[] | ProfileUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutSegmentInput | ProfileCreateOrConnectWithoutSegmentInput[]
    createMany?: ProfileCreateManySegmentInputEnvelope
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
  }

  export type ProfileUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<ProfileCreateWithoutSegmentInput, ProfileUncheckedCreateWithoutSegmentInput> | ProfileCreateWithoutSegmentInput[] | ProfileUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutSegmentInput | ProfileCreateOrConnectWithoutSegmentInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutSegmentInput | ProfileUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: ProfileCreateManySegmentInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutSegmentInput | ProfileUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutSegmentInput | ProfileUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateManyWithoutSegmentNestedInput = {
    create?: XOR<ProfileCreateWithoutSegmentInput, ProfileUncheckedCreateWithoutSegmentInput> | ProfileCreateWithoutSegmentInput[] | ProfileUncheckedCreateWithoutSegmentInput[]
    connectOrCreate?: ProfileCreateOrConnectWithoutSegmentInput | ProfileCreateOrConnectWithoutSegmentInput[]
    upsert?: ProfileUpsertWithWhereUniqueWithoutSegmentInput | ProfileUpsertWithWhereUniqueWithoutSegmentInput[]
    createMany?: ProfileCreateManySegmentInputEnvelope
    set?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    disconnect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    delete?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    connect?: ProfileWhereUniqueInput | ProfileWhereUniqueInput[]
    update?: ProfileUpdateWithWhereUniqueWithoutSegmentInput | ProfileUpdateWithWhereUniqueWithoutSegmentInput[]
    updateMany?: ProfileUpdateManyWithWhereWithoutSegmentInput | ProfileUpdateManyWithWhereWithoutSegmentInput[]
    deleteMany?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
  }

  export type CompanySegmentCreateNestedOneWithoutProfileInput = {
    create?: XOR<CompanySegmentCreateWithoutProfileInput, CompanySegmentUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CompanySegmentCreateOrConnectWithoutProfileInput
    connect?: CompanySegmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompanySegmentUpdateOneWithoutProfileNestedInput = {
    create?: XOR<CompanySegmentCreateWithoutProfileInput, CompanySegmentUncheckedCreateWithoutProfileInput>
    connectOrCreate?: CompanySegmentCreateOrConnectWithoutProfileInput
    upsert?: CompanySegmentUpsertWithoutProfileInput
    disconnect?: CompanySegmentWhereInput | boolean
    delete?: CompanySegmentWhereInput | boolean
    connect?: CompanySegmentWhereUniqueInput
    update?: XOR<XOR<CompanySegmentUpdateToOneWithWhereWithoutProfileInput, CompanySegmentUpdateWithoutProfileInput>, CompanySegmentUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type LogsLoginCreateWithoutUserInput = {
    logsId?: string
    token: string
    isActive?: boolean
    device?: string | null
    ip?: string | null
    createdDate?: Date | string
    expireDate: Date | string
  }

  export type LogsLoginUncheckedCreateWithoutUserInput = {
    logsId?: string
    token: string
    isActive?: boolean
    device?: string | null
    ip?: string | null
    createdDate?: Date | string
    expireDate: Date | string
  }

  export type LogsLoginCreateOrConnectWithoutUserInput = {
    where: LogsLoginWhereUniqueInput
    create: XOR<LogsLoginCreateWithoutUserInput, LogsLoginUncheckedCreateWithoutUserInput>
  }

  export type LogsLoginCreateManyUserInputEnvelope = {
    data: LogsLoginCreateManyUserInput | LogsLoginCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LinkedDeviceCreateWithoutUserInput = {
    deviceId?: string
    clientDeviceUuid: string
  }

  export type LinkedDeviceUncheckedCreateWithoutUserInput = {
    deviceId?: string
    clientDeviceUuid: string
  }

  export type LinkedDeviceCreateOrConnectWithoutUserInput = {
    where: LinkedDeviceWhereUniqueInput
    create: XOR<LinkedDeviceCreateWithoutUserInput, LinkedDeviceUncheckedCreateWithoutUserInput>
  }

  export type LinkedDeviceCreateManyUserInputEnvelope = {
    data: LinkedDeviceCreateManyUserInput | LinkedDeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    fullName?: string | null
    urlImage?: string | null
    companyName: string
    npwp: string
    deedNumber?: string | null
    establishedDate?: Date | string | null
    npwpUrl: string
    deedUrl: string
    description?: string | null
    companyAddress?: string | null
    companyPhone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    segment?: CompanySegmentCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    fullName?: string | null
    urlImage?: string | null
    companyName: string
    npwp: string
    deedNumber?: string | null
    establishedDate?: Date | string | null
    npwpUrl: string
    deedUrl: string
    description?: string | null
    segmentId?: number | null
    companyAddress?: string | null
    companyPhone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type UserHasRoleAccessCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUserHasRoleAccessInput
    access: AccessCreateNestedOneWithoutUserHasRoleAccessInput
  }

  export type UserHasRoleAccessUncheckedCreateWithoutUserInput = {
    roleId: number
    accessId: number
  }

  export type UserHasRoleAccessCreateOrConnectWithoutUserInput = {
    where: UserHasRoleAccessWhereUniqueInput
    create: XOR<UserHasRoleAccessCreateWithoutUserInput, UserHasRoleAccessUncheckedCreateWithoutUserInput>
  }

  export type UserHasRoleAccessCreateManyUserInputEnvelope = {
    data: UserHasRoleAccessCreateManyUserInput | UserHasRoleAccessCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type otpVerifikasiCreateWithoutUserInput = {
    code: string
    expireDate: Date | string
  }

  export type otpVerifikasiUncheckedCreateWithoutUserInput = {
    id?: number
    code: string
    expireDate: Date | string
  }

  export type otpVerifikasiCreateOrConnectWithoutUserInput = {
    where: otpVerifikasiWhereUniqueInput
    create: XOR<otpVerifikasiCreateWithoutUserInput, otpVerifikasiUncheckedCreateWithoutUserInput>
  }

  export type otpVerifikasiCreateManyUserInputEnvelope = {
    data: otpVerifikasiCreateManyUserInput | otpVerifikasiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LogsLoginUpsertWithWhereUniqueWithoutUserInput = {
    where: LogsLoginWhereUniqueInput
    update: XOR<LogsLoginUpdateWithoutUserInput, LogsLoginUncheckedUpdateWithoutUserInput>
    create: XOR<LogsLoginCreateWithoutUserInput, LogsLoginUncheckedCreateWithoutUserInput>
  }

  export type LogsLoginUpdateWithWhereUniqueWithoutUserInput = {
    where: LogsLoginWhereUniqueInput
    data: XOR<LogsLoginUpdateWithoutUserInput, LogsLoginUncheckedUpdateWithoutUserInput>
  }

  export type LogsLoginUpdateManyWithWhereWithoutUserInput = {
    where: LogsLoginScalarWhereInput
    data: XOR<LogsLoginUpdateManyMutationInput, LogsLoginUncheckedUpdateManyWithoutUserInput>
  }

  export type LogsLoginScalarWhereInput = {
    AND?: LogsLoginScalarWhereInput | LogsLoginScalarWhereInput[]
    OR?: LogsLoginScalarWhereInput[]
    NOT?: LogsLoginScalarWhereInput | LogsLoginScalarWhereInput[]
    logsId?: UuidFilter<"LogsLogin"> | string
    userId?: UuidFilter<"LogsLogin"> | string
    token?: StringFilter<"LogsLogin"> | string
    isActive?: BoolFilter<"LogsLogin"> | boolean
    device?: StringNullableFilter<"LogsLogin"> | string | null
    ip?: StringNullableFilter<"LogsLogin"> | string | null
    createdDate?: DateTimeFilter<"LogsLogin"> | Date | string
    expireDate?: DateTimeFilter<"LogsLogin"> | Date | string
  }

  export type LinkedDeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: LinkedDeviceWhereUniqueInput
    update: XOR<LinkedDeviceUpdateWithoutUserInput, LinkedDeviceUncheckedUpdateWithoutUserInput>
    create: XOR<LinkedDeviceCreateWithoutUserInput, LinkedDeviceUncheckedCreateWithoutUserInput>
  }

  export type LinkedDeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: LinkedDeviceWhereUniqueInput
    data: XOR<LinkedDeviceUpdateWithoutUserInput, LinkedDeviceUncheckedUpdateWithoutUserInput>
  }

  export type LinkedDeviceUpdateManyWithWhereWithoutUserInput = {
    where: LinkedDeviceScalarWhereInput
    data: XOR<LinkedDeviceUpdateManyMutationInput, LinkedDeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type LinkedDeviceScalarWhereInput = {
    AND?: LinkedDeviceScalarWhereInput | LinkedDeviceScalarWhereInput[]
    OR?: LinkedDeviceScalarWhereInput[]
    NOT?: LinkedDeviceScalarWhereInput | LinkedDeviceScalarWhereInput[]
    deviceId?: UuidFilter<"LinkedDevice"> | string
    clientDeviceUuid?: UuidFilter<"LinkedDevice"> | string
    userId?: UuidFilter<"LinkedDevice"> | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    segment?: CompanySegmentUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    segmentId?: NullableIntFieldUpdateOperationsInput | number | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHasRoleAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: UserHasRoleAccessWhereUniqueInput
    update: XOR<UserHasRoleAccessUpdateWithoutUserInput, UserHasRoleAccessUncheckedUpdateWithoutUserInput>
    create: XOR<UserHasRoleAccessCreateWithoutUserInput, UserHasRoleAccessUncheckedCreateWithoutUserInput>
  }

  export type UserHasRoleAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: UserHasRoleAccessWhereUniqueInput
    data: XOR<UserHasRoleAccessUpdateWithoutUserInput, UserHasRoleAccessUncheckedUpdateWithoutUserInput>
  }

  export type UserHasRoleAccessUpdateManyWithWhereWithoutUserInput = {
    where: UserHasRoleAccessScalarWhereInput
    data: XOR<UserHasRoleAccessUpdateManyMutationInput, UserHasRoleAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type UserHasRoleAccessScalarWhereInput = {
    AND?: UserHasRoleAccessScalarWhereInput | UserHasRoleAccessScalarWhereInput[]
    OR?: UserHasRoleAccessScalarWhereInput[]
    NOT?: UserHasRoleAccessScalarWhereInput | UserHasRoleAccessScalarWhereInput[]
    userId?: UuidFilter<"UserHasRoleAccess"> | string
    roleId?: IntFilter<"UserHasRoleAccess"> | number
    accessId?: IntFilter<"UserHasRoleAccess"> | number
  }

  export type otpVerifikasiUpsertWithWhereUniqueWithoutUserInput = {
    where: otpVerifikasiWhereUniqueInput
    update: XOR<otpVerifikasiUpdateWithoutUserInput, otpVerifikasiUncheckedUpdateWithoutUserInput>
    create: XOR<otpVerifikasiCreateWithoutUserInput, otpVerifikasiUncheckedCreateWithoutUserInput>
  }

  export type otpVerifikasiUpdateWithWhereUniqueWithoutUserInput = {
    where: otpVerifikasiWhereUniqueInput
    data: XOR<otpVerifikasiUpdateWithoutUserInput, otpVerifikasiUncheckedUpdateWithoutUserInput>
  }

  export type otpVerifikasiUpdateManyWithWhereWithoutUserInput = {
    where: otpVerifikasiScalarWhereInput
    data: XOR<otpVerifikasiUpdateManyMutationInput, otpVerifikasiUncheckedUpdateManyWithoutUserInput>
  }

  export type otpVerifikasiScalarWhereInput = {
    AND?: otpVerifikasiScalarWhereInput | otpVerifikasiScalarWhereInput[]
    OR?: otpVerifikasiScalarWhereInput[]
    NOT?: otpVerifikasiScalarWhereInput | otpVerifikasiScalarWhereInput[]
    id?: IntFilter<"otpVerifikasi"> | number
    userId?: UuidFilter<"otpVerifikasi"> | string
    code?: StringFilter<"otpVerifikasi"> | string
    expireDate?: DateTimeFilter<"otpVerifikasi"> | Date | string
  }

  export type UserCreateWithoutOtpInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginCreateNestedManyWithoutUserInput
    linkedDevice?: LinkedDeviceCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginUncheckedCreateNestedManyWithoutUserInput
    linkedDevice?: LinkedDeviceUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
  }

  export type UserUpsertWithoutOtpInput = {
    update: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
    create: XOR<UserCreateWithoutOtpInput, UserUncheckedCreateWithoutOtpInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpInput, UserUncheckedUpdateWithoutOtpInput>
  }

  export type UserUpdateWithoutOtpInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUpdateManyWithoutUserNestedInput
    linkedDevice?: LinkedDeviceUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUncheckedUpdateManyWithoutUserNestedInput
    linkedDevice?: LinkedDeviceUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLogsInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    linkedDevice?: LinkedDeviceCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessCreateNestedManyWithoutUserInput
    otp?: otpVerifikasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    linkedDevice?: LinkedDeviceUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedCreateNestedManyWithoutUserInput
    otp?: otpVerifikasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedDevice?: LinkedDeviceUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUpdateManyWithoutUserNestedInput
    otp?: otpVerifikasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    linkedDevice?: LinkedDeviceUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedUpdateManyWithoutUserNestedInput
    otp?: otpVerifikasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserHasRoleAccessCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutUserHasRoleAccessInput
    access: AccessCreateNestedOneWithoutUserHasRoleAccessInput
  }

  export type UserHasRoleAccessUncheckedCreateWithoutRoleInput = {
    userId: string
    accessId: number
  }

  export type UserHasRoleAccessCreateOrConnectWithoutRoleInput = {
    where: UserHasRoleAccessWhereUniqueInput
    create: XOR<UserHasRoleAccessCreateWithoutRoleInput, UserHasRoleAccessUncheckedCreateWithoutRoleInput>
  }

  export type UserHasRoleAccessCreateManyRoleInputEnvelope = {
    data: UserHasRoleAccessCreateManyRoleInput | UserHasRoleAccessCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserHasRoleAccessUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserHasRoleAccessWhereUniqueInput
    update: XOR<UserHasRoleAccessUpdateWithoutRoleInput, UserHasRoleAccessUncheckedUpdateWithoutRoleInput>
    create: XOR<UserHasRoleAccessCreateWithoutRoleInput, UserHasRoleAccessUncheckedCreateWithoutRoleInput>
  }

  export type UserHasRoleAccessUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserHasRoleAccessWhereUniqueInput
    data: XOR<UserHasRoleAccessUpdateWithoutRoleInput, UserHasRoleAccessUncheckedUpdateWithoutRoleInput>
  }

  export type UserHasRoleAccessUpdateManyWithWhereWithoutRoleInput = {
    where: UserHasRoleAccessScalarWhereInput
    data: XOR<UserHasRoleAccessUpdateManyMutationInput, UserHasRoleAccessUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserHasRoleAccessCreateWithoutAccessInput = {
    user: UserCreateNestedOneWithoutUserHasRoleAccessInput
    role: RoleCreateNestedOneWithoutUserHasRoleAccessInput
  }

  export type UserHasRoleAccessUncheckedCreateWithoutAccessInput = {
    userId: string
    roleId: number
  }

  export type UserHasRoleAccessCreateOrConnectWithoutAccessInput = {
    where: UserHasRoleAccessWhereUniqueInput
    create: XOR<UserHasRoleAccessCreateWithoutAccessInput, UserHasRoleAccessUncheckedCreateWithoutAccessInput>
  }

  export type UserHasRoleAccessCreateManyAccessInputEnvelope = {
    data: UserHasRoleAccessCreateManyAccessInput | UserHasRoleAccessCreateManyAccessInput[]
    skipDuplicates?: boolean
  }

  export type UserHasRoleAccessUpsertWithWhereUniqueWithoutAccessInput = {
    where: UserHasRoleAccessWhereUniqueInput
    update: XOR<UserHasRoleAccessUpdateWithoutAccessInput, UserHasRoleAccessUncheckedUpdateWithoutAccessInput>
    create: XOR<UserHasRoleAccessCreateWithoutAccessInput, UserHasRoleAccessUncheckedCreateWithoutAccessInput>
  }

  export type UserHasRoleAccessUpdateWithWhereUniqueWithoutAccessInput = {
    where: UserHasRoleAccessWhereUniqueInput
    data: XOR<UserHasRoleAccessUpdateWithoutAccessInput, UserHasRoleAccessUncheckedUpdateWithoutAccessInput>
  }

  export type UserHasRoleAccessUpdateManyWithWhereWithoutAccessInput = {
    where: UserHasRoleAccessScalarWhereInput
    data: XOR<UserHasRoleAccessUpdateManyMutationInput, UserHasRoleAccessUncheckedUpdateManyWithoutAccessInput>
  }

  export type UserCreateWithoutUserHasRoleAccessInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginCreateNestedManyWithoutUserInput
    linkedDevice?: LinkedDeviceCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    otp?: otpVerifikasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserHasRoleAccessInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginUncheckedCreateNestedManyWithoutUserInput
    linkedDevice?: LinkedDeviceUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    otp?: otpVerifikasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserHasRoleAccessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserHasRoleAccessInput, UserUncheckedCreateWithoutUserHasRoleAccessInput>
  }

  export type RoleCreateWithoutUserHasRoleAccessInput = {
    roleName: string
  }

  export type RoleUncheckedCreateWithoutUserHasRoleAccessInput = {
    roleId?: number
    roleName: string
  }

  export type RoleCreateOrConnectWithoutUserHasRoleAccessInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserHasRoleAccessInput, RoleUncheckedCreateWithoutUserHasRoleAccessInput>
  }

  export type AccessCreateWithoutUserHasRoleAccessInput = {
    accessName: string
  }

  export type AccessUncheckedCreateWithoutUserHasRoleAccessInput = {
    accessId?: number
    accessName: string
  }

  export type AccessCreateOrConnectWithoutUserHasRoleAccessInput = {
    where: AccessWhereUniqueInput
    create: XOR<AccessCreateWithoutUserHasRoleAccessInput, AccessUncheckedCreateWithoutUserHasRoleAccessInput>
  }

  export type UserUpsertWithoutUserHasRoleAccessInput = {
    update: XOR<UserUpdateWithoutUserHasRoleAccessInput, UserUncheckedUpdateWithoutUserHasRoleAccessInput>
    create: XOR<UserCreateWithoutUserHasRoleAccessInput, UserUncheckedCreateWithoutUserHasRoleAccessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserHasRoleAccessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserHasRoleAccessInput, UserUncheckedUpdateWithoutUserHasRoleAccessInput>
  }

  export type UserUpdateWithoutUserHasRoleAccessInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUpdateManyWithoutUserNestedInput
    linkedDevice?: LinkedDeviceUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    otp?: otpVerifikasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserHasRoleAccessInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUncheckedUpdateManyWithoutUserNestedInput
    linkedDevice?: LinkedDeviceUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    otp?: otpVerifikasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUserHasRoleAccessInput = {
    update: XOR<RoleUpdateWithoutUserHasRoleAccessInput, RoleUncheckedUpdateWithoutUserHasRoleAccessInput>
    create: XOR<RoleCreateWithoutUserHasRoleAccessInput, RoleUncheckedCreateWithoutUserHasRoleAccessInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserHasRoleAccessInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserHasRoleAccessInput, RoleUncheckedUpdateWithoutUserHasRoleAccessInput>
  }

  export type RoleUpdateWithoutUserHasRoleAccessInput = {
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUserHasRoleAccessInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    roleName?: StringFieldUpdateOperationsInput | string
  }

  export type AccessUpsertWithoutUserHasRoleAccessInput = {
    update: XOR<AccessUpdateWithoutUserHasRoleAccessInput, AccessUncheckedUpdateWithoutUserHasRoleAccessInput>
    create: XOR<AccessCreateWithoutUserHasRoleAccessInput, AccessUncheckedCreateWithoutUserHasRoleAccessInput>
    where?: AccessWhereInput
  }

  export type AccessUpdateToOneWithWhereWithoutUserHasRoleAccessInput = {
    where?: AccessWhereInput
    data: XOR<AccessUpdateWithoutUserHasRoleAccessInput, AccessUncheckedUpdateWithoutUserHasRoleAccessInput>
  }

  export type AccessUpdateWithoutUserHasRoleAccessInput = {
    accessName?: StringFieldUpdateOperationsInput | string
  }

  export type AccessUncheckedUpdateWithoutUserHasRoleAccessInput = {
    accessId?: IntFieldUpdateOperationsInput | number
    accessName?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutLinkedDeviceInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessCreateNestedManyWithoutUserInput
    otp?: otpVerifikasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLinkedDeviceInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedCreateNestedManyWithoutUserInput
    otp?: otpVerifikasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLinkedDeviceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLinkedDeviceInput, UserUncheckedCreateWithoutLinkedDeviceInput>
  }

  export type UserUpsertWithoutLinkedDeviceInput = {
    update: XOR<UserUpdateWithoutLinkedDeviceInput, UserUncheckedUpdateWithoutLinkedDeviceInput>
    create: XOR<UserCreateWithoutLinkedDeviceInput, UserUncheckedCreateWithoutLinkedDeviceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLinkedDeviceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLinkedDeviceInput, UserUncheckedUpdateWithoutLinkedDeviceInput>
  }

  export type UserUpdateWithoutLinkedDeviceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUpdateManyWithoutUserNestedInput
    otp?: otpVerifikasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLinkedDeviceInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedUpdateManyWithoutUserNestedInput
    otp?: otpVerifikasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProfileCreateWithoutSegmentInput = {
    fullName?: string | null
    urlImage?: string | null
    companyName: string
    npwp: string
    deedNumber?: string | null
    establishedDate?: Date | string | null
    npwpUrl: string
    deedUrl: string
    description?: string | null
    companyAddress?: string | null
    companyPhone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutSegmentInput = {
    userId: string
    fullName?: string | null
    urlImage?: string | null
    companyName: string
    npwp: string
    deedNumber?: string | null
    establishedDate?: Date | string | null
    npwpUrl: string
    deedUrl: string
    description?: string | null
    companyAddress?: string | null
    companyPhone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutSegmentInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSegmentInput, ProfileUncheckedCreateWithoutSegmentInput>
  }

  export type ProfileCreateManySegmentInputEnvelope = {
    data: ProfileCreateManySegmentInput | ProfileCreateManySegmentInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithWhereUniqueWithoutSegmentInput = {
    where: ProfileWhereUniqueInput
    update: XOR<ProfileUpdateWithoutSegmentInput, ProfileUncheckedUpdateWithoutSegmentInput>
    create: XOR<ProfileCreateWithoutSegmentInput, ProfileUncheckedCreateWithoutSegmentInput>
  }

  export type ProfileUpdateWithWhereUniqueWithoutSegmentInput = {
    where: ProfileWhereUniqueInput
    data: XOR<ProfileUpdateWithoutSegmentInput, ProfileUncheckedUpdateWithoutSegmentInput>
  }

  export type ProfileUpdateManyWithWhereWithoutSegmentInput = {
    where: ProfileScalarWhereInput
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyWithoutSegmentInput>
  }

  export type ProfileScalarWhereInput = {
    AND?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    OR?: ProfileScalarWhereInput[]
    NOT?: ProfileScalarWhereInput | ProfileScalarWhereInput[]
    userId?: UuidFilter<"Profile"> | string
    fullName?: StringNullableFilter<"Profile"> | string | null
    urlImage?: StringNullableFilter<"Profile"> | string | null
    companyName?: StringFilter<"Profile"> | string
    npwp?: StringFilter<"Profile"> | string
    deedNumber?: StringNullableFilter<"Profile"> | string | null
    establishedDate?: DateTimeNullableFilter<"Profile"> | Date | string | null
    npwpUrl?: StringFilter<"Profile"> | string
    deedUrl?: StringFilter<"Profile"> | string
    description?: StringNullableFilter<"Profile"> | string | null
    segmentId?: IntNullableFilter<"Profile"> | number | null
    companyAddress?: StringNullableFilter<"Profile"> | string | null
    companyPhone?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
  }

  export type CompanySegmentCreateWithoutProfileInput = {
    segmentName: string
    description?: string | null
  }

  export type CompanySegmentUncheckedCreateWithoutProfileInput = {
    segmentId?: number
    segmentName: string
    description?: string | null
  }

  export type CompanySegmentCreateOrConnectWithoutProfileInput = {
    where: CompanySegmentWhereUniqueInput
    create: XOR<CompanySegmentCreateWithoutProfileInput, CompanySegmentUncheckedCreateWithoutProfileInput>
  }

  export type UserCreateWithoutProfileInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginCreateNestedManyWithoutUserInput
    linkedDevice?: LinkedDeviceCreateNestedManyWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessCreateNestedManyWithoutUserInput
    otp?: otpVerifikasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    userId?: string
    email: string
    password: string
    isActive?: boolean
    sessionExpireDate: Date | string
    createdDate?: Date | string
    updateDate?: Date | string
    logs?: LogsLoginUncheckedCreateNestedManyWithoutUserInput
    linkedDevice?: LinkedDeviceUncheckedCreateNestedManyWithoutUserInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedCreateNestedManyWithoutUserInput
    otp?: otpVerifikasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type CompanySegmentUpsertWithoutProfileInput = {
    update: XOR<CompanySegmentUpdateWithoutProfileInput, CompanySegmentUncheckedUpdateWithoutProfileInput>
    create: XOR<CompanySegmentCreateWithoutProfileInput, CompanySegmentUncheckedCreateWithoutProfileInput>
    where?: CompanySegmentWhereInput
  }

  export type CompanySegmentUpdateToOneWithWhereWithoutProfileInput = {
    where?: CompanySegmentWhereInput
    data: XOR<CompanySegmentUpdateWithoutProfileInput, CompanySegmentUncheckedUpdateWithoutProfileInput>
  }

  export type CompanySegmentUpdateWithoutProfileInput = {
    segmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanySegmentUncheckedUpdateWithoutProfileInput = {
    segmentId?: IntFieldUpdateOperationsInput | number
    segmentName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUpdateManyWithoutUserNestedInput
    linkedDevice?: LinkedDeviceUpdateManyWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUpdateManyWithoutUserNestedInput
    otp?: otpVerifikasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    userId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    sessionExpireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    updateDate?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: LogsLoginUncheckedUpdateManyWithoutUserNestedInput
    linkedDevice?: LinkedDeviceUncheckedUpdateManyWithoutUserNestedInput
    UserHasRoleAccess?: UserHasRoleAccessUncheckedUpdateManyWithoutUserNestedInput
    otp?: otpVerifikasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LogsLoginCreateManyUserInput = {
    logsId?: string
    token: string
    isActive?: boolean
    device?: string | null
    ip?: string | null
    createdDate?: Date | string
    expireDate: Date | string
  }

  export type LinkedDeviceCreateManyUserInput = {
    deviceId?: string
    clientDeviceUuid: string
  }

  export type UserHasRoleAccessCreateManyUserInput = {
    roleId: number
    accessId: number
  }

  export type otpVerifikasiCreateManyUserInput = {
    id?: number
    code: string
    expireDate: Date | string
  }

  export type LogsLoginUpdateWithoutUserInput = {
    logsId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsLoginUncheckedUpdateWithoutUserInput = {
    logsId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LogsLoginUncheckedUpdateManyWithoutUserInput = {
    logsId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    device?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LinkedDeviceUpdateWithoutUserInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    clientDeviceUuid?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedDeviceUncheckedUpdateWithoutUserInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    clientDeviceUuid?: StringFieldUpdateOperationsInput | string
  }

  export type LinkedDeviceUncheckedUpdateManyWithoutUserInput = {
    deviceId?: StringFieldUpdateOperationsInput | string
    clientDeviceUuid?: StringFieldUpdateOperationsInput | string
  }

  export type UserHasRoleAccessUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
    access?: AccessUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
  }

  export type UserHasRoleAccessUncheckedUpdateWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    accessId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasRoleAccessUncheckedUpdateManyWithoutUserInput = {
    roleId?: IntFieldUpdateOperationsInput | number
    accessId?: IntFieldUpdateOperationsInput | number
  }

  export type otpVerifikasiUpdateWithoutUserInput = {
    code?: StringFieldUpdateOperationsInput | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpVerifikasiUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type otpVerifikasiUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    expireDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserHasRoleAccessCreateManyRoleInput = {
    userId: string
    accessId: number
  }

  export type UserHasRoleAccessUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
    access?: AccessUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
  }

  export type UserHasRoleAccessUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accessId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasRoleAccessUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    accessId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasRoleAccessCreateManyAccessInput = {
    userId: string
    roleId: number
  }

  export type UserHasRoleAccessUpdateWithoutAccessInput = {
    user?: UserUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
    role?: RoleUpdateOneRequiredWithoutUserHasRoleAccessNestedInput
  }

  export type UserHasRoleAccessUncheckedUpdateWithoutAccessInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type UserHasRoleAccessUncheckedUpdateManyWithoutAccessInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfileCreateManySegmentInput = {
    userId: string
    fullName?: string | null
    urlImage?: string | null
    companyName: string
    npwp: string
    deedNumber?: string | null
    establishedDate?: Date | string | null
    npwpUrl: string
    deedUrl: string
    description?: string | null
    companyAddress?: string | null
    companyPhone?: string | null
    website?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateWithoutSegmentInput = {
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSegmentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyWithoutSegmentInput = {
    userId?: StringFieldUpdateOperationsInput | string
    fullName?: NullableStringFieldUpdateOperationsInput | string | null
    urlImage?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: StringFieldUpdateOperationsInput | string
    npwp?: StringFieldUpdateOperationsInput | string
    deedNumber?: NullableStringFieldUpdateOperationsInput | string | null
    establishedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    npwpUrl?: StringFieldUpdateOperationsInput | string
    deedUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    companyAddress?: NullableStringFieldUpdateOperationsInput | string | null
    companyPhone?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}