
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
 * Model AppUser
 * 
 */
export type AppUser = $Result.DefaultSelection<Prisma.$AppUserPayload>
/**
 * Model AppSession
 * 
 */
export type AppSession = $Result.DefaultSelection<Prisma.$AppSessionPayload>
/**
 * Model AppEmailVerificationCodes
 * 
 */
export type AppEmailVerificationCodes = $Result.DefaultSelection<Prisma.$AppEmailVerificationCodesPayload>
/**
 * Model mstExpenseHead
 * 
 */
export type mstExpenseHead = $Result.DefaultSelection<Prisma.$mstExpenseHeadPayload>
/**
 * Model mstFees
 * 
 */
export type mstFees = $Result.DefaultSelection<Prisma.$mstFeesPayload>
/**
 * Model sysAdmin
 * 
 */
export type sysAdmin = $Result.DefaultSelection<Prisma.$sysAdminPayload>
/**
 * Model tblBudget
 * 
 */
export type tblBudget = $Result.DefaultSelection<Prisma.$tblBudgetPayload>
/**
 * Model tblDocument
 * 
 */
export type tblDocument = $Result.DefaultSelection<Prisma.$tblDocumentPayload>
/**
 * Model tblExpense
 * 
 */
export type tblExpense = $Result.DefaultSelection<Prisma.$tblExpensePayload>
/**
 * Model tblFees
 * 
 */
export type tblFees = $Result.DefaultSelection<Prisma.$tblFeesPayload>
/**
 * Model tblStaff
 * 
 */
export type tblStaff = $Result.DefaultSelection<Prisma.$tblStaffPayload>
/**
 * Model tblStaffExperience
 * 
 */
export type tblStaffExperience = $Result.DefaultSelection<Prisma.$tblStaffExperiencePayload>
/**
 * Model tblStudent
 * 
 */
export type tblStudent = $Result.DefaultSelection<Prisma.$tblStudentPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AppUsers
 * const appUsers = await prisma.appUser.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more AppUsers
   * const appUsers = await prisma.appUser.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.appUser`: Exposes CRUD operations for the **AppUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppUsers
    * const appUsers = await prisma.appUser.findMany()
    * ```
    */
  get appUser(): Prisma.AppUserDelegate<ExtArgs>;

  /**
   * `prisma.appSession`: Exposes CRUD operations for the **AppSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSessions
    * const appSessions = await prisma.appSession.findMany()
    * ```
    */
  get appSession(): Prisma.AppSessionDelegate<ExtArgs>;

  /**
   * `prisma.appEmailVerificationCodes`: Exposes CRUD operations for the **AppEmailVerificationCodes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppEmailVerificationCodes
    * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.findMany()
    * ```
    */
  get appEmailVerificationCodes(): Prisma.AppEmailVerificationCodesDelegate<ExtArgs>;

  /**
   * `prisma.mstExpenseHead`: Exposes CRUD operations for the **mstExpenseHead** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MstExpenseHeads
    * const mstExpenseHeads = await prisma.mstExpenseHead.findMany()
    * ```
    */
  get mstExpenseHead(): Prisma.mstExpenseHeadDelegate<ExtArgs>;

  /**
   * `prisma.mstFees`: Exposes CRUD operations for the **mstFees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MstFees
    * const mstFees = await prisma.mstFees.findMany()
    * ```
    */
  get mstFees(): Prisma.mstFeesDelegate<ExtArgs>;

  /**
   * `prisma.sysAdmin`: Exposes CRUD operations for the **sysAdmin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SysAdmins
    * const sysAdmins = await prisma.sysAdmin.findMany()
    * ```
    */
  get sysAdmin(): Prisma.sysAdminDelegate<ExtArgs>;

  /**
   * `prisma.tblBudget`: Exposes CRUD operations for the **tblBudget** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblBudgets
    * const tblBudgets = await prisma.tblBudget.findMany()
    * ```
    */
  get tblBudget(): Prisma.tblBudgetDelegate<ExtArgs>;

  /**
   * `prisma.tblDocument`: Exposes CRUD operations for the **tblDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblDocuments
    * const tblDocuments = await prisma.tblDocument.findMany()
    * ```
    */
  get tblDocument(): Prisma.tblDocumentDelegate<ExtArgs>;

  /**
   * `prisma.tblExpense`: Exposes CRUD operations for the **tblExpense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblExpenses
    * const tblExpenses = await prisma.tblExpense.findMany()
    * ```
    */
  get tblExpense(): Prisma.tblExpenseDelegate<ExtArgs>;

  /**
   * `prisma.tblFees`: Exposes CRUD operations for the **tblFees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblFees
    * const tblFees = await prisma.tblFees.findMany()
    * ```
    */
  get tblFees(): Prisma.tblFeesDelegate<ExtArgs>;

  /**
   * `prisma.tblStaff`: Exposes CRUD operations for the **tblStaff** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblStaffs
    * const tblStaffs = await prisma.tblStaff.findMany()
    * ```
    */
  get tblStaff(): Prisma.tblStaffDelegate<ExtArgs>;

  /**
   * `prisma.tblStaffExperience`: Exposes CRUD operations for the **tblStaffExperience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblStaffExperiences
    * const tblStaffExperiences = await prisma.tblStaffExperience.findMany()
    * ```
    */
  get tblStaffExperience(): Prisma.tblStaffExperienceDelegate<ExtArgs>;

  /**
   * `prisma.tblStudent`: Exposes CRUD operations for the **tblStudent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TblStudents
    * const tblStudents = await prisma.tblStudent.findMany()
    * ```
    */
  get tblStudent(): Prisma.tblStudentDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.18.0
   * Query Engine version: 4c784e32044a8a016d99474bd02a3b6123742169
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    AppUser: 'AppUser',
    AppSession: 'AppSession',
    AppEmailVerificationCodes: 'AppEmailVerificationCodes',
    mstExpenseHead: 'mstExpenseHead',
    mstFees: 'mstFees',
    sysAdmin: 'sysAdmin',
    tblBudget: 'tblBudget',
    tblDocument: 'tblDocument',
    tblExpense: 'tblExpense',
    tblFees: 'tblFees',
    tblStaff: 'tblStaff',
    tblStaffExperience: 'tblStaffExperience',
    tblStudent: 'tblStudent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "appUser" | "appSession" | "appEmailVerificationCodes" | "mstExpenseHead" | "mstFees" | "sysAdmin" | "tblBudget" | "tblDocument" | "tblExpense" | "tblFees" | "tblStaff" | "tblStaffExperience" | "tblStudent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AppUser: {
        payload: Prisma.$AppUserPayload<ExtArgs>
        fields: Prisma.AppUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findFirst: {
            args: Prisma.AppUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          findMany: {
            args: Prisma.AppUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>[]
          }
          create: {
            args: Prisma.AppUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          createMany: {
            args: Prisma.AppUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          update: {
            args: Prisma.AppUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          deleteMany: {
            args: Prisma.AppUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppUserPayload>
          }
          aggregate: {
            args: Prisma.AppUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppUser>
          }
          groupBy: {
            args: Prisma.AppUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppUserCountArgs<ExtArgs>
            result: $Utils.Optional<AppUserCountAggregateOutputType> | number
          }
        }
      }
      AppSession: {
        payload: Prisma.$AppSessionPayload<ExtArgs>
        fields: Prisma.AppSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          findFirst: {
            args: Prisma.AppSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          findMany: {
            args: Prisma.AppSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>[]
          }
          create: {
            args: Prisma.AppSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          createMany: {
            args: Prisma.AppSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          update: {
            args: Prisma.AppSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          deleteMany: {
            args: Prisma.AppSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSessionPayload>
          }
          aggregate: {
            args: Prisma.AppSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSession>
          }
          groupBy: {
            args: Prisma.AppSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSessionCountArgs<ExtArgs>
            result: $Utils.Optional<AppSessionCountAggregateOutputType> | number
          }
        }
      }
      AppEmailVerificationCodes: {
        payload: Prisma.$AppEmailVerificationCodesPayload<ExtArgs>
        fields: Prisma.AppEmailVerificationCodesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppEmailVerificationCodesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppEmailVerificationCodesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload>
          }
          findFirst: {
            args: Prisma.AppEmailVerificationCodesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppEmailVerificationCodesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload>
          }
          findMany: {
            args: Prisma.AppEmailVerificationCodesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload>[]
          }
          create: {
            args: Prisma.AppEmailVerificationCodesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload>
          }
          createMany: {
            args: Prisma.AppEmailVerificationCodesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppEmailVerificationCodesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload>
          }
          update: {
            args: Prisma.AppEmailVerificationCodesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload>
          }
          deleteMany: {
            args: Prisma.AppEmailVerificationCodesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppEmailVerificationCodesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppEmailVerificationCodesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppEmailVerificationCodesPayload>
          }
          aggregate: {
            args: Prisma.AppEmailVerificationCodesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppEmailVerificationCodes>
          }
          groupBy: {
            args: Prisma.AppEmailVerificationCodesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppEmailVerificationCodesGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppEmailVerificationCodesCountArgs<ExtArgs>
            result: $Utils.Optional<AppEmailVerificationCodesCountAggregateOutputType> | number
          }
        }
      }
      mstExpenseHead: {
        payload: Prisma.$mstExpenseHeadPayload<ExtArgs>
        fields: Prisma.mstExpenseHeadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mstExpenseHeadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mstExpenseHeadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload>
          }
          findFirst: {
            args: Prisma.mstExpenseHeadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mstExpenseHeadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload>
          }
          findMany: {
            args: Prisma.mstExpenseHeadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload>[]
          }
          create: {
            args: Prisma.mstExpenseHeadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload>
          }
          createMany: {
            args: Prisma.mstExpenseHeadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mstExpenseHeadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload>
          }
          update: {
            args: Prisma.mstExpenseHeadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload>
          }
          deleteMany: {
            args: Prisma.mstExpenseHeadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mstExpenseHeadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mstExpenseHeadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstExpenseHeadPayload>
          }
          aggregate: {
            args: Prisma.MstExpenseHeadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMstExpenseHead>
          }
          groupBy: {
            args: Prisma.mstExpenseHeadGroupByArgs<ExtArgs>
            result: $Utils.Optional<MstExpenseHeadGroupByOutputType>[]
          }
          count: {
            args: Prisma.mstExpenseHeadCountArgs<ExtArgs>
            result: $Utils.Optional<MstExpenseHeadCountAggregateOutputType> | number
          }
        }
      }
      mstFees: {
        payload: Prisma.$mstFeesPayload<ExtArgs>
        fields: Prisma.mstFeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mstFeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mstFeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload>
          }
          findFirst: {
            args: Prisma.mstFeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mstFeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload>
          }
          findMany: {
            args: Prisma.mstFeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload>[]
          }
          create: {
            args: Prisma.mstFeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload>
          }
          createMany: {
            args: Prisma.mstFeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.mstFeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload>
          }
          update: {
            args: Prisma.mstFeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload>
          }
          deleteMany: {
            args: Prisma.mstFeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mstFeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.mstFeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mstFeesPayload>
          }
          aggregate: {
            args: Prisma.MstFeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMstFees>
          }
          groupBy: {
            args: Prisma.mstFeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MstFeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.mstFeesCountArgs<ExtArgs>
            result: $Utils.Optional<MstFeesCountAggregateOutputType> | number
          }
        }
      }
      sysAdmin: {
        payload: Prisma.$sysAdminPayload<ExtArgs>
        fields: Prisma.sysAdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sysAdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sysAdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload>
          }
          findFirst: {
            args: Prisma.sysAdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sysAdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload>
          }
          findMany: {
            args: Prisma.sysAdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload>[]
          }
          create: {
            args: Prisma.sysAdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload>
          }
          createMany: {
            args: Prisma.sysAdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.sysAdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload>
          }
          update: {
            args: Prisma.sysAdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload>
          }
          deleteMany: {
            args: Prisma.sysAdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sysAdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.sysAdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sysAdminPayload>
          }
          aggregate: {
            args: Prisma.SysAdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSysAdmin>
          }
          groupBy: {
            args: Prisma.sysAdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<SysAdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.sysAdminCountArgs<ExtArgs>
            result: $Utils.Optional<SysAdminCountAggregateOutputType> | number
          }
        }
      }
      tblBudget: {
        payload: Prisma.$tblBudgetPayload<ExtArgs>
        fields: Prisma.tblBudgetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblBudgetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblBudgetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload>
          }
          findFirst: {
            args: Prisma.tblBudgetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblBudgetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload>
          }
          findMany: {
            args: Prisma.tblBudgetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload>[]
          }
          create: {
            args: Prisma.tblBudgetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload>
          }
          createMany: {
            args: Prisma.tblBudgetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblBudgetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload>
          }
          update: {
            args: Prisma.tblBudgetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload>
          }
          deleteMany: {
            args: Prisma.tblBudgetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblBudgetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblBudgetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblBudgetPayload>
          }
          aggregate: {
            args: Prisma.TblBudgetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblBudget>
          }
          groupBy: {
            args: Prisma.tblBudgetGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblBudgetGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblBudgetCountArgs<ExtArgs>
            result: $Utils.Optional<TblBudgetCountAggregateOutputType> | number
          }
        }
      }
      tblDocument: {
        payload: Prisma.$tblDocumentPayload<ExtArgs>
        fields: Prisma.tblDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload>
          }
          findFirst: {
            args: Prisma.tblDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload>
          }
          findMany: {
            args: Prisma.tblDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload>[]
          }
          create: {
            args: Prisma.tblDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload>
          }
          createMany: {
            args: Prisma.tblDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload>
          }
          update: {
            args: Prisma.tblDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload>
          }
          deleteMany: {
            args: Prisma.tblDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblDocumentPayload>
          }
          aggregate: {
            args: Prisma.TblDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblDocument>
          }
          groupBy: {
            args: Prisma.tblDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<TblDocumentCountAggregateOutputType> | number
          }
        }
      }
      tblExpense: {
        payload: Prisma.$tblExpensePayload<ExtArgs>
        fields: Prisma.tblExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload>
          }
          findFirst: {
            args: Prisma.tblExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload>
          }
          findMany: {
            args: Prisma.tblExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload>[]
          }
          create: {
            args: Prisma.tblExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload>
          }
          createMany: {
            args: Prisma.tblExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload>
          }
          update: {
            args: Prisma.tblExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload>
          }
          deleteMany: {
            args: Prisma.tblExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblExpensePayload>
          }
          aggregate: {
            args: Prisma.TblExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblExpense>
          }
          groupBy: {
            args: Prisma.tblExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<TblExpenseCountAggregateOutputType> | number
          }
        }
      }
      tblFees: {
        payload: Prisma.$tblFeesPayload<ExtArgs>
        fields: Prisma.tblFeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblFeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblFeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload>
          }
          findFirst: {
            args: Prisma.tblFeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblFeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload>
          }
          findMany: {
            args: Prisma.tblFeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload>[]
          }
          create: {
            args: Prisma.tblFeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload>
          }
          createMany: {
            args: Prisma.tblFeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblFeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload>
          }
          update: {
            args: Prisma.tblFeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload>
          }
          deleteMany: {
            args: Prisma.tblFeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblFeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblFeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblFeesPayload>
          }
          aggregate: {
            args: Prisma.TblFeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblFees>
          }
          groupBy: {
            args: Prisma.tblFeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblFeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblFeesCountArgs<ExtArgs>
            result: $Utils.Optional<TblFeesCountAggregateOutputType> | number
          }
        }
      }
      tblStaff: {
        payload: Prisma.$tblStaffPayload<ExtArgs>
        fields: Prisma.tblStaffFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblStaffFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblStaffFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload>
          }
          findFirst: {
            args: Prisma.tblStaffFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblStaffFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload>
          }
          findMany: {
            args: Prisma.tblStaffFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload>[]
          }
          create: {
            args: Prisma.tblStaffCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload>
          }
          createMany: {
            args: Prisma.tblStaffCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblStaffDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload>
          }
          update: {
            args: Prisma.tblStaffUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload>
          }
          deleteMany: {
            args: Prisma.tblStaffDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblStaffUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblStaffUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffPayload>
          }
          aggregate: {
            args: Prisma.TblStaffAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblStaff>
          }
          groupBy: {
            args: Prisma.tblStaffGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblStaffGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblStaffCountArgs<ExtArgs>
            result: $Utils.Optional<TblStaffCountAggregateOutputType> | number
          }
        }
      }
      tblStaffExperience: {
        payload: Prisma.$tblStaffExperiencePayload<ExtArgs>
        fields: Prisma.tblStaffExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblStaffExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblStaffExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload>
          }
          findFirst: {
            args: Prisma.tblStaffExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblStaffExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload>
          }
          findMany: {
            args: Prisma.tblStaffExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload>[]
          }
          create: {
            args: Prisma.tblStaffExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload>
          }
          createMany: {
            args: Prisma.tblStaffExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblStaffExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload>
          }
          update: {
            args: Prisma.tblStaffExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload>
          }
          deleteMany: {
            args: Prisma.tblStaffExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblStaffExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblStaffExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStaffExperiencePayload>
          }
          aggregate: {
            args: Prisma.TblStaffExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblStaffExperience>
          }
          groupBy: {
            args: Prisma.tblStaffExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblStaffExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblStaffExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<TblStaffExperienceCountAggregateOutputType> | number
          }
        }
      }
      tblStudent: {
        payload: Prisma.$tblStudentPayload<ExtArgs>
        fields: Prisma.tblStudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tblStudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tblStudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload>
          }
          findFirst: {
            args: Prisma.tblStudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tblStudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload>
          }
          findMany: {
            args: Prisma.tblStudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload>[]
          }
          create: {
            args: Prisma.tblStudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload>
          }
          createMany: {
            args: Prisma.tblStudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tblStudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload>
          }
          update: {
            args: Prisma.tblStudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload>
          }
          deleteMany: {
            args: Prisma.tblStudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tblStudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tblStudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tblStudentPayload>
          }
          aggregate: {
            args: Prisma.TblStudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTblStudent>
          }
          groupBy: {
            args: Prisma.tblStudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TblStudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.tblStudentCountArgs<ExtArgs>
            result: $Utils.Optional<TblStudentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type AppUserCountOutputType
   */

  export type AppUserCountOutputType = {
    appSessions: number
    appEmailVerificationCodes: number
  }

  export type AppUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appSessions?: boolean | AppUserCountOutputTypeCountAppSessionsArgs
    appEmailVerificationCodes?: boolean | AppUserCountOutputTypeCountAppEmailVerificationCodesArgs
  }

  // Custom InputTypes
  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUserCountOutputType
     */
    select?: AppUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountAppSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSessionWhereInput
  }

  /**
   * AppUserCountOutputType without action
   */
  export type AppUserCountOutputTypeCountAppEmailVerificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppEmailVerificationCodesWhereInput
  }


  /**
   * Count Type TblStudentCountOutputType
   */

  export type TblStudentCountOutputType = {
    AppUser: number
  }

  export type TblStudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AppUser?: boolean | TblStudentCountOutputTypeCountAppUserArgs
  }

  // Custom InputTypes
  /**
   * TblStudentCountOutputType without action
   */
  export type TblStudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TblStudentCountOutputType
     */
    select?: TblStudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TblStudentCountOutputType without action
   */
  export type TblStudentCountOutputTypeCountAppUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AppUser
   */

  export type AggregateAppUser = {
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  export type AppUserAvgAggregateOutputType = {
    studentId: number | null
  }

  export type AppUserSumAggregateOutputType = {
    studentId: bigint | null
  }

  export type AppUserMinAggregateOutputType = {
    id: string | null
    studentId: bigint | null
  }

  export type AppUserMaxAggregateOutputType = {
    id: string | null
    studentId: bigint | null
  }

  export type AppUserCountAggregateOutputType = {
    id: number
    studentId: number
    _all: number
  }


  export type AppUserAvgAggregateInputType = {
    studentId?: true
  }

  export type AppUserSumAggregateInputType = {
    studentId?: true
  }

  export type AppUserMinAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type AppUserMaxAggregateInputType = {
    id?: true
    studentId?: true
  }

  export type AppUserCountAggregateInputType = {
    id?: true
    studentId?: true
    _all?: true
  }

  export type AppUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUser to aggregate.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppUsers
    **/
    _count?: true | AppUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppUserMaxAggregateInputType
  }

  export type GetAppUserAggregateType<T extends AppUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAppUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppUser[P]>
      : GetScalarType<T[P], AggregateAppUser[P]>
  }




  export type AppUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppUserWhereInput
    orderBy?: AppUserOrderByWithAggregationInput | AppUserOrderByWithAggregationInput[]
    by: AppUserScalarFieldEnum[] | AppUserScalarFieldEnum
    having?: AppUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppUserCountAggregateInputType | true
    _avg?: AppUserAvgAggregateInputType
    _sum?: AppUserSumAggregateInputType
    _min?: AppUserMinAggregateInputType
    _max?: AppUserMaxAggregateInputType
  }

  export type AppUserGroupByOutputType = {
    id: string
    studentId: bigint
    _count: AppUserCountAggregateOutputType | null
    _avg: AppUserAvgAggregateOutputType | null
    _sum: AppUserSumAggregateOutputType | null
    _min: AppUserMinAggregateOutputType | null
    _max: AppUserMaxAggregateOutputType | null
  }

  type GetAppUserGroupByPayload<T extends AppUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppUserGroupByOutputType[P]>
            : GetScalarType<T[P], AppUserGroupByOutputType[P]>
        }
      >
    >


  export type AppUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    student?: boolean | tblStudentDefaultArgs<ExtArgs>
    appSessions?: boolean | AppUser$appSessionsArgs<ExtArgs>
    appEmailVerificationCodes?: boolean | AppUser$appEmailVerificationCodesArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appUser"]>


  export type AppUserSelectScalar = {
    id?: boolean
    studentId?: boolean
  }

  export type AppUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | tblStudentDefaultArgs<ExtArgs>
    appSessions?: boolean | AppUser$appSessionsArgs<ExtArgs>
    appEmailVerificationCodes?: boolean | AppUser$appEmailVerificationCodesArgs<ExtArgs>
    _count?: boolean | AppUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppUser"
    objects: {
      student: Prisma.$tblStudentPayload<ExtArgs>
      appSessions: Prisma.$AppSessionPayload<ExtArgs>[]
      appEmailVerificationCodes: Prisma.$AppEmailVerificationCodesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: bigint
    }, ExtArgs["result"]["appUser"]>
    composites: {}
  }

  type AppUserGetPayload<S extends boolean | null | undefined | AppUserDefaultArgs> = $Result.GetResult<Prisma.$AppUserPayload, S>

  type AppUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppUserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppUserCountAggregateInputType | true
    }

  export interface AppUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppUser'], meta: { name: 'AppUser' } }
    /**
     * Find zero or one AppUser that matches the filter.
     * @param {AppUserFindUniqueArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppUserFindUniqueArgs>(args: SelectSubset<T, AppUserFindUniqueArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AppUser that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppUserFindUniqueOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AppUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AppUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppUserFindFirstArgs>(args?: SelectSubset<T, AppUserFindFirstArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AppUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindFirstOrThrowArgs} args - Arguments to find a AppUser
     * @example
     * // Get one AppUser
     * const appUser = await prisma.appUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AppUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AppUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppUsers
     * const appUsers = await prisma.appUser.findMany()
     * 
     * // Get first 10 AppUsers
     * const appUsers = await prisma.appUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appUserWithIdOnly = await prisma.appUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppUserFindManyArgs>(args?: SelectSubset<T, AppUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AppUser.
     * @param {AppUserCreateArgs} args - Arguments to create a AppUser.
     * @example
     * // Create one AppUser
     * const AppUser = await prisma.appUser.create({
     *   data: {
     *     // ... data to create a AppUser
     *   }
     * })
     * 
     */
    create<T extends AppUserCreateArgs>(args: SelectSubset<T, AppUserCreateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AppUsers.
     * @param {AppUserCreateManyArgs} args - Arguments to create many AppUsers.
     * @example
     * // Create many AppUsers
     * const appUser = await prisma.appUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppUserCreateManyArgs>(args?: SelectSubset<T, AppUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppUser.
     * @param {AppUserDeleteArgs} args - Arguments to delete one AppUser.
     * @example
     * // Delete one AppUser
     * const AppUser = await prisma.appUser.delete({
     *   where: {
     *     // ... filter to delete one AppUser
     *   }
     * })
     * 
     */
    delete<T extends AppUserDeleteArgs>(args: SelectSubset<T, AppUserDeleteArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AppUser.
     * @param {AppUserUpdateArgs} args - Arguments to update one AppUser.
     * @example
     * // Update one AppUser
     * const appUser = await prisma.appUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppUserUpdateArgs>(args: SelectSubset<T, AppUserUpdateArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AppUsers.
     * @param {AppUserDeleteManyArgs} args - Arguments to filter AppUsers to delete.
     * @example
     * // Delete a few AppUsers
     * const { count } = await prisma.appUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppUserDeleteManyArgs>(args?: SelectSubset<T, AppUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppUsers
     * const appUser = await prisma.appUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppUserUpdateManyArgs>(args: SelectSubset<T, AppUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppUser.
     * @param {AppUserUpsertArgs} args - Arguments to update or create a AppUser.
     * @example
     * // Update or create a AppUser
     * const appUser = await prisma.appUser.upsert({
     *   create: {
     *     // ... data to create a AppUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppUser we want to update
     *   }
     * })
     */
    upsert<T extends AppUserUpsertArgs>(args: SelectSubset<T, AppUserUpsertArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AppUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserCountArgs} args - Arguments to filter AppUsers to count.
     * @example
     * // Count the number of AppUsers
     * const count = await prisma.appUser.count({
     *   where: {
     *     // ... the filter for the AppUsers we want to count
     *   }
     * })
    **/
    count<T extends AppUserCountArgs>(
      args?: Subset<T, AppUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppUserAggregateArgs>(args: Subset<T, AppUserAggregateArgs>): Prisma.PrismaPromise<GetAppUserAggregateType<T>>

    /**
     * Group by AppUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppUserGroupByArgs} args - Group by arguments.
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
      T extends AppUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppUserGroupByArgs['orderBy'] }
        : { orderBy?: AppUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppUser model
   */
  readonly fields: AppUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends tblStudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tblStudentDefaultArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    appSessions<T extends AppUser$appSessionsArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$appSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findMany"> | Null>
    appEmailVerificationCodes<T extends AppUser$appEmailVerificationCodesArgs<ExtArgs> = {}>(args?: Subset<T, AppUser$appEmailVerificationCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AppUser model
   */ 
  interface AppUserFieldRefs {
    readonly id: FieldRef<"AppUser", 'String'>
    readonly studentId: FieldRef<"AppUser", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * AppUser findUnique
   */
  export type AppUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findUniqueOrThrow
   */
  export type AppUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser findFirst
   */
  export type AppUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findFirstOrThrow
   */
  export type AppUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUser to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppUsers.
     */
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser findMany
   */
  export type AppUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter, which AppUsers to fetch.
     */
    where?: AppUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppUsers to fetch.
     */
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppUsers.
     */
    cursor?: AppUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppUsers.
     */
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * AppUser create
   */
  export type AppUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AppUser.
     */
    data: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
  }

  /**
   * AppUser createMany
   */
  export type AppUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppUsers.
     */
    data: AppUserCreateManyInput | AppUserCreateManyInput[]
  }

  /**
   * AppUser update
   */
  export type AppUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AppUser.
     */
    data: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
    /**
     * Choose, which AppUser to update.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser updateMany
   */
  export type AppUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppUsers.
     */
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyInput>
    /**
     * Filter which AppUsers to update
     */
    where?: AppUserWhereInput
  }

  /**
   * AppUser upsert
   */
  export type AppUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AppUser to update in case it exists.
     */
    where: AppUserWhereUniqueInput
    /**
     * In case the AppUser found by the `where` argument doesn't exist, create a new AppUser with this data.
     */
    create: XOR<AppUserCreateInput, AppUserUncheckedCreateInput>
    /**
     * In case the AppUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppUserUpdateInput, AppUserUncheckedUpdateInput>
  }

  /**
   * AppUser delete
   */
  export type AppUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    /**
     * Filter which AppUser to delete.
     */
    where: AppUserWhereUniqueInput
  }

  /**
   * AppUser deleteMany
   */
  export type AppUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppUsers to delete
     */
    where?: AppUserWhereInput
  }

  /**
   * AppUser.appSessions
   */
  export type AppUser$appSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    where?: AppSessionWhereInput
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    cursor?: AppSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppSessionScalarFieldEnum | AppSessionScalarFieldEnum[]
  }

  /**
   * AppUser.appEmailVerificationCodes
   */
  export type AppUser$appEmailVerificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    where?: AppEmailVerificationCodesWhereInput
    orderBy?: AppEmailVerificationCodesOrderByWithRelationInput | AppEmailVerificationCodesOrderByWithRelationInput[]
    cursor?: AppEmailVerificationCodesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppEmailVerificationCodesScalarFieldEnum | AppEmailVerificationCodesScalarFieldEnum[]
  }

  /**
   * AppUser without action
   */
  export type AppUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
  }


  /**
   * Model AppSession
   */

  export type AggregateAppSession = {
    _count: AppSessionCountAggregateOutputType | null
    _min: AppSessionMinAggregateOutputType | null
    _max: AppSessionMaxAggregateOutputType | null
  }

  export type AppSessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type AppSessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type AppSessionCountAggregateOutputType = {
    id: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type AppSessionMinAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type AppSessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
  }

  export type AppSessionCountAggregateInputType = {
    id?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type AppSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSession to aggregate.
     */
    where?: AppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSessions to fetch.
     */
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSessions
    **/
    _count?: true | AppSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSessionMaxAggregateInputType
  }

  export type GetAppSessionAggregateType<T extends AppSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSession[P]>
      : GetScalarType<T[P], AggregateAppSession[P]>
  }




  export type AppSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSessionWhereInput
    orderBy?: AppSessionOrderByWithAggregationInput | AppSessionOrderByWithAggregationInput[]
    by: AppSessionScalarFieldEnum[] | AppSessionScalarFieldEnum
    having?: AppSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSessionCountAggregateInputType | true
    _min?: AppSessionMinAggregateInputType
    _max?: AppSessionMaxAggregateInputType
  }

  export type AppSessionGroupByOutputType = {
    id: string
    userId: string
    expiresAt: Date
    _count: AppSessionCountAggregateOutputType | null
    _min: AppSessionMinAggregateOutputType | null
    _max: AppSessionMaxAggregateOutputType | null
  }

  type GetAppSessionGroupByPayload<T extends AppSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSessionGroupByOutputType[P]>
            : GetScalarType<T[P], AppSessionGroupByOutputType[P]>
        }
      >
    >


  export type AppSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
    appUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appSession"]>


  export type AppSessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type AppSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $AppSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSession"
    objects: {
      appUser: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expiresAt: Date
    }, ExtArgs["result"]["appSession"]>
    composites: {}
  }

  type AppSessionGetPayload<S extends boolean | null | undefined | AppSessionDefaultArgs> = $Result.GetResult<Prisma.$AppSessionPayload, S>

  type AppSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppSessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppSessionCountAggregateInputType | true
    }

  export interface AppSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSession'], meta: { name: 'AppSession' } }
    /**
     * Find zero or one AppSession that matches the filter.
     * @param {AppSessionFindUniqueArgs} args - Arguments to find a AppSession
     * @example
     * // Get one AppSession
     * const appSession = await prisma.appSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSessionFindUniqueArgs>(args: SelectSubset<T, AppSessionFindUniqueArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AppSession that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppSessionFindUniqueOrThrowArgs} args - Arguments to find a AppSession
     * @example
     * // Get one AppSession
     * const appSession = await prisma.appSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AppSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionFindFirstArgs} args - Arguments to find a AppSession
     * @example
     * // Get one AppSession
     * const appSession = await prisma.appSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSessionFindFirstArgs>(args?: SelectSubset<T, AppSessionFindFirstArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AppSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionFindFirstOrThrowArgs} args - Arguments to find a AppSession
     * @example
     * // Get one AppSession
     * const appSession = await prisma.appSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AppSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSessions
     * const appSessions = await prisma.appSession.findMany()
     * 
     * // Get first 10 AppSessions
     * const appSessions = await prisma.appSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appSessionWithIdOnly = await prisma.appSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppSessionFindManyArgs>(args?: SelectSubset<T, AppSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AppSession.
     * @param {AppSessionCreateArgs} args - Arguments to create a AppSession.
     * @example
     * // Create one AppSession
     * const AppSession = await prisma.appSession.create({
     *   data: {
     *     // ... data to create a AppSession
     *   }
     * })
     * 
     */
    create<T extends AppSessionCreateArgs>(args: SelectSubset<T, AppSessionCreateArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AppSessions.
     * @param {AppSessionCreateManyArgs} args - Arguments to create many AppSessions.
     * @example
     * // Create many AppSessions
     * const appSession = await prisma.appSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSessionCreateManyArgs>(args?: SelectSubset<T, AppSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppSession.
     * @param {AppSessionDeleteArgs} args - Arguments to delete one AppSession.
     * @example
     * // Delete one AppSession
     * const AppSession = await prisma.appSession.delete({
     *   where: {
     *     // ... filter to delete one AppSession
     *   }
     * })
     * 
     */
    delete<T extends AppSessionDeleteArgs>(args: SelectSubset<T, AppSessionDeleteArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AppSession.
     * @param {AppSessionUpdateArgs} args - Arguments to update one AppSession.
     * @example
     * // Update one AppSession
     * const appSession = await prisma.appSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSessionUpdateArgs>(args: SelectSubset<T, AppSessionUpdateArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AppSessions.
     * @param {AppSessionDeleteManyArgs} args - Arguments to filter AppSessions to delete.
     * @example
     * // Delete a few AppSessions
     * const { count } = await prisma.appSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSessionDeleteManyArgs>(args?: SelectSubset<T, AppSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSessions
     * const appSession = await prisma.appSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSessionUpdateManyArgs>(args: SelectSubset<T, AppSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppSession.
     * @param {AppSessionUpsertArgs} args - Arguments to update or create a AppSession.
     * @example
     * // Update or create a AppSession
     * const appSession = await prisma.appSession.upsert({
     *   create: {
     *     // ... data to create a AppSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSession we want to update
     *   }
     * })
     */
    upsert<T extends AppSessionUpsertArgs>(args: SelectSubset<T, AppSessionUpsertArgs<ExtArgs>>): Prisma__AppSessionClient<$Result.GetResult<Prisma.$AppSessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AppSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionCountArgs} args - Arguments to filter AppSessions to count.
     * @example
     * // Count the number of AppSessions
     * const count = await prisma.appSession.count({
     *   where: {
     *     // ... the filter for the AppSessions we want to count
     *   }
     * })
    **/
    count<T extends AppSessionCountArgs>(
      args?: Subset<T, AppSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppSessionAggregateArgs>(args: Subset<T, AppSessionAggregateArgs>): Prisma.PrismaPromise<GetAppSessionAggregateType<T>>

    /**
     * Group by AppSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSessionGroupByArgs} args - Group by arguments.
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
      T extends AppSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSessionGroupByArgs['orderBy'] }
        : { orderBy?: AppSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSession model
   */
  readonly fields: AppSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appUser<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AppSession model
   */ 
  interface AppSessionFieldRefs {
    readonly id: FieldRef<"AppSession", 'String'>
    readonly userId: FieldRef<"AppSession", 'String'>
    readonly expiresAt: FieldRef<"AppSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSession findUnique
   */
  export type AppSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * Filter, which AppSession to fetch.
     */
    where: AppSessionWhereUniqueInput
  }

  /**
   * AppSession findUniqueOrThrow
   */
  export type AppSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * Filter, which AppSession to fetch.
     */
    where: AppSessionWhereUniqueInput
  }

  /**
   * AppSession findFirst
   */
  export type AppSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * Filter, which AppSession to fetch.
     */
    where?: AppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSessions to fetch.
     */
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSessions.
     */
    cursor?: AppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSessions.
     */
    distinct?: AppSessionScalarFieldEnum | AppSessionScalarFieldEnum[]
  }

  /**
   * AppSession findFirstOrThrow
   */
  export type AppSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * Filter, which AppSession to fetch.
     */
    where?: AppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSessions to fetch.
     */
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSessions.
     */
    cursor?: AppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSessions.
     */
    distinct?: AppSessionScalarFieldEnum | AppSessionScalarFieldEnum[]
  }

  /**
   * AppSession findMany
   */
  export type AppSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * Filter, which AppSessions to fetch.
     */
    where?: AppSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSessions to fetch.
     */
    orderBy?: AppSessionOrderByWithRelationInput | AppSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSessions.
     */
    cursor?: AppSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSessions.
     */
    skip?: number
    distinct?: AppSessionScalarFieldEnum | AppSessionScalarFieldEnum[]
  }

  /**
   * AppSession create
   */
  export type AppSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a AppSession.
     */
    data: XOR<AppSessionCreateInput, AppSessionUncheckedCreateInput>
  }

  /**
   * AppSession createMany
   */
  export type AppSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSessions.
     */
    data: AppSessionCreateManyInput | AppSessionCreateManyInput[]
  }

  /**
   * AppSession update
   */
  export type AppSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a AppSession.
     */
    data: XOR<AppSessionUpdateInput, AppSessionUncheckedUpdateInput>
    /**
     * Choose, which AppSession to update.
     */
    where: AppSessionWhereUniqueInput
  }

  /**
   * AppSession updateMany
   */
  export type AppSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSessions.
     */
    data: XOR<AppSessionUpdateManyMutationInput, AppSessionUncheckedUpdateManyInput>
    /**
     * Filter which AppSessions to update
     */
    where?: AppSessionWhereInput
  }

  /**
   * AppSession upsert
   */
  export type AppSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the AppSession to update in case it exists.
     */
    where: AppSessionWhereUniqueInput
    /**
     * In case the AppSession found by the `where` argument doesn't exist, create a new AppSession with this data.
     */
    create: XOR<AppSessionCreateInput, AppSessionUncheckedCreateInput>
    /**
     * In case the AppSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSessionUpdateInput, AppSessionUncheckedUpdateInput>
  }

  /**
   * AppSession delete
   */
  export type AppSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
    /**
     * Filter which AppSession to delete.
     */
    where: AppSessionWhereUniqueInput
  }

  /**
   * AppSession deleteMany
   */
  export type AppSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSessions to delete
     */
    where?: AppSessionWhereInput
  }

  /**
   * AppSession without action
   */
  export type AppSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSession
     */
    select?: AppSessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppSessionInclude<ExtArgs> | null
  }


  /**
   * Model AppEmailVerificationCodes
   */

  export type AggregateAppEmailVerificationCodes = {
    _count: AppEmailVerificationCodesCountAggregateOutputType | null
    _avg: AppEmailVerificationCodesAvgAggregateOutputType | null
    _sum: AppEmailVerificationCodesSumAggregateOutputType | null
    _min: AppEmailVerificationCodesMinAggregateOutputType | null
    _max: AppEmailVerificationCodesMaxAggregateOutputType | null
  }

  export type AppEmailVerificationCodesAvgAggregateOutputType = {
    id: number | null
  }

  export type AppEmailVerificationCodesSumAggregateOutputType = {
    id: bigint | null
  }

  export type AppEmailVerificationCodesMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    expiresAt: Date | null
    userId: string | null
  }

  export type AppEmailVerificationCodesMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    expiresAt: Date | null
    userId: string | null
  }

  export type AppEmailVerificationCodesCountAggregateOutputType = {
    id: number
    code: number
    expiresAt: number
    userId: number
    _all: number
  }


  export type AppEmailVerificationCodesAvgAggregateInputType = {
    id?: true
  }

  export type AppEmailVerificationCodesSumAggregateInputType = {
    id?: true
  }

  export type AppEmailVerificationCodesMinAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userId?: true
  }

  export type AppEmailVerificationCodesMaxAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userId?: true
  }

  export type AppEmailVerificationCodesCountAggregateInputType = {
    id?: true
    code?: true
    expiresAt?: true
    userId?: true
    _all?: true
  }

  export type AppEmailVerificationCodesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppEmailVerificationCodes to aggregate.
     */
    where?: AppEmailVerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppEmailVerificationCodes to fetch.
     */
    orderBy?: AppEmailVerificationCodesOrderByWithRelationInput | AppEmailVerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppEmailVerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppEmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppEmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppEmailVerificationCodes
    **/
    _count?: true | AppEmailVerificationCodesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppEmailVerificationCodesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppEmailVerificationCodesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppEmailVerificationCodesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppEmailVerificationCodesMaxAggregateInputType
  }

  export type GetAppEmailVerificationCodesAggregateType<T extends AppEmailVerificationCodesAggregateArgs> = {
        [P in keyof T & keyof AggregateAppEmailVerificationCodes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppEmailVerificationCodes[P]>
      : GetScalarType<T[P], AggregateAppEmailVerificationCodes[P]>
  }




  export type AppEmailVerificationCodesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppEmailVerificationCodesWhereInput
    orderBy?: AppEmailVerificationCodesOrderByWithAggregationInput | AppEmailVerificationCodesOrderByWithAggregationInput[]
    by: AppEmailVerificationCodesScalarFieldEnum[] | AppEmailVerificationCodesScalarFieldEnum
    having?: AppEmailVerificationCodesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppEmailVerificationCodesCountAggregateInputType | true
    _avg?: AppEmailVerificationCodesAvgAggregateInputType
    _sum?: AppEmailVerificationCodesSumAggregateInputType
    _min?: AppEmailVerificationCodesMinAggregateInputType
    _max?: AppEmailVerificationCodesMaxAggregateInputType
  }

  export type AppEmailVerificationCodesGroupByOutputType = {
    id: bigint
    code: string
    expiresAt: Date
    userId: string
    _count: AppEmailVerificationCodesCountAggregateOutputType | null
    _avg: AppEmailVerificationCodesAvgAggregateOutputType | null
    _sum: AppEmailVerificationCodesSumAggregateOutputType | null
    _min: AppEmailVerificationCodesMinAggregateOutputType | null
    _max: AppEmailVerificationCodesMaxAggregateOutputType | null
  }

  type GetAppEmailVerificationCodesGroupByPayload<T extends AppEmailVerificationCodesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppEmailVerificationCodesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppEmailVerificationCodesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppEmailVerificationCodesGroupByOutputType[P]>
            : GetScalarType<T[P], AppEmailVerificationCodesGroupByOutputType[P]>
        }
      >
    >


  export type AppEmailVerificationCodesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
    appUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appEmailVerificationCodes"]>


  export type AppEmailVerificationCodesSelectScalar = {
    id?: boolean
    code?: boolean
    expiresAt?: boolean
    userId?: boolean
  }

  export type AppEmailVerificationCodesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appUser?: boolean | AppUserDefaultArgs<ExtArgs>
  }

  export type $AppEmailVerificationCodesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppEmailVerificationCodes"
    objects: {
      appUser: Prisma.$AppUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      code: string
      expiresAt: Date
      userId: string
    }, ExtArgs["result"]["appEmailVerificationCodes"]>
    composites: {}
  }

  type AppEmailVerificationCodesGetPayload<S extends boolean | null | undefined | AppEmailVerificationCodesDefaultArgs> = $Result.GetResult<Prisma.$AppEmailVerificationCodesPayload, S>

  type AppEmailVerificationCodesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AppEmailVerificationCodesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AppEmailVerificationCodesCountAggregateInputType | true
    }

  export interface AppEmailVerificationCodesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppEmailVerificationCodes'], meta: { name: 'AppEmailVerificationCodes' } }
    /**
     * Find zero or one AppEmailVerificationCodes that matches the filter.
     * @param {AppEmailVerificationCodesFindUniqueArgs} args - Arguments to find a AppEmailVerificationCodes
     * @example
     * // Get one AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppEmailVerificationCodesFindUniqueArgs>(args: SelectSubset<T, AppEmailVerificationCodesFindUniqueArgs<ExtArgs>>): Prisma__AppEmailVerificationCodesClient<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AppEmailVerificationCodes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AppEmailVerificationCodesFindUniqueOrThrowArgs} args - Arguments to find a AppEmailVerificationCodes
     * @example
     * // Get one AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppEmailVerificationCodesFindUniqueOrThrowArgs>(args: SelectSubset<T, AppEmailVerificationCodesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppEmailVerificationCodesClient<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AppEmailVerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEmailVerificationCodesFindFirstArgs} args - Arguments to find a AppEmailVerificationCodes
     * @example
     * // Get one AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppEmailVerificationCodesFindFirstArgs>(args?: SelectSubset<T, AppEmailVerificationCodesFindFirstArgs<ExtArgs>>): Prisma__AppEmailVerificationCodesClient<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AppEmailVerificationCodes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEmailVerificationCodesFindFirstOrThrowArgs} args - Arguments to find a AppEmailVerificationCodes
     * @example
     * // Get one AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppEmailVerificationCodesFindFirstOrThrowArgs>(args?: SelectSubset<T, AppEmailVerificationCodesFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppEmailVerificationCodesClient<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AppEmailVerificationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEmailVerificationCodesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.findMany()
     * 
     * // Get first 10 AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appEmailVerificationCodesWithIdOnly = await prisma.appEmailVerificationCodes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppEmailVerificationCodesFindManyArgs>(args?: SelectSubset<T, AppEmailVerificationCodesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AppEmailVerificationCodes.
     * @param {AppEmailVerificationCodesCreateArgs} args - Arguments to create a AppEmailVerificationCodes.
     * @example
     * // Create one AppEmailVerificationCodes
     * const AppEmailVerificationCodes = await prisma.appEmailVerificationCodes.create({
     *   data: {
     *     // ... data to create a AppEmailVerificationCodes
     *   }
     * })
     * 
     */
    create<T extends AppEmailVerificationCodesCreateArgs>(args: SelectSubset<T, AppEmailVerificationCodesCreateArgs<ExtArgs>>): Prisma__AppEmailVerificationCodesClient<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AppEmailVerificationCodes.
     * @param {AppEmailVerificationCodesCreateManyArgs} args - Arguments to create many AppEmailVerificationCodes.
     * @example
     * // Create many AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppEmailVerificationCodesCreateManyArgs>(args?: SelectSubset<T, AppEmailVerificationCodesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppEmailVerificationCodes.
     * @param {AppEmailVerificationCodesDeleteArgs} args - Arguments to delete one AppEmailVerificationCodes.
     * @example
     * // Delete one AppEmailVerificationCodes
     * const AppEmailVerificationCodes = await prisma.appEmailVerificationCodes.delete({
     *   where: {
     *     // ... filter to delete one AppEmailVerificationCodes
     *   }
     * })
     * 
     */
    delete<T extends AppEmailVerificationCodesDeleteArgs>(args: SelectSubset<T, AppEmailVerificationCodesDeleteArgs<ExtArgs>>): Prisma__AppEmailVerificationCodesClient<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AppEmailVerificationCodes.
     * @param {AppEmailVerificationCodesUpdateArgs} args - Arguments to update one AppEmailVerificationCodes.
     * @example
     * // Update one AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppEmailVerificationCodesUpdateArgs>(args: SelectSubset<T, AppEmailVerificationCodesUpdateArgs<ExtArgs>>): Prisma__AppEmailVerificationCodesClient<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AppEmailVerificationCodes.
     * @param {AppEmailVerificationCodesDeleteManyArgs} args - Arguments to filter AppEmailVerificationCodes to delete.
     * @example
     * // Delete a few AppEmailVerificationCodes
     * const { count } = await prisma.appEmailVerificationCodes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppEmailVerificationCodesDeleteManyArgs>(args?: SelectSubset<T, AppEmailVerificationCodesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppEmailVerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEmailVerificationCodesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppEmailVerificationCodesUpdateManyArgs>(args: SelectSubset<T, AppEmailVerificationCodesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppEmailVerificationCodes.
     * @param {AppEmailVerificationCodesUpsertArgs} args - Arguments to update or create a AppEmailVerificationCodes.
     * @example
     * // Update or create a AppEmailVerificationCodes
     * const appEmailVerificationCodes = await prisma.appEmailVerificationCodes.upsert({
     *   create: {
     *     // ... data to create a AppEmailVerificationCodes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppEmailVerificationCodes we want to update
     *   }
     * })
     */
    upsert<T extends AppEmailVerificationCodesUpsertArgs>(args: SelectSubset<T, AppEmailVerificationCodesUpsertArgs<ExtArgs>>): Prisma__AppEmailVerificationCodesClient<$Result.GetResult<Prisma.$AppEmailVerificationCodesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AppEmailVerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEmailVerificationCodesCountArgs} args - Arguments to filter AppEmailVerificationCodes to count.
     * @example
     * // Count the number of AppEmailVerificationCodes
     * const count = await prisma.appEmailVerificationCodes.count({
     *   where: {
     *     // ... the filter for the AppEmailVerificationCodes we want to count
     *   }
     * })
    **/
    count<T extends AppEmailVerificationCodesCountArgs>(
      args?: Subset<T, AppEmailVerificationCodesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppEmailVerificationCodesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppEmailVerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEmailVerificationCodesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppEmailVerificationCodesAggregateArgs>(args: Subset<T, AppEmailVerificationCodesAggregateArgs>): Prisma.PrismaPromise<GetAppEmailVerificationCodesAggregateType<T>>

    /**
     * Group by AppEmailVerificationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEmailVerificationCodesGroupByArgs} args - Group by arguments.
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
      T extends AppEmailVerificationCodesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppEmailVerificationCodesGroupByArgs['orderBy'] }
        : { orderBy?: AppEmailVerificationCodesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppEmailVerificationCodesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppEmailVerificationCodesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppEmailVerificationCodes model
   */
  readonly fields: AppEmailVerificationCodesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppEmailVerificationCodes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppEmailVerificationCodesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appUser<T extends AppUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppUserDefaultArgs<ExtArgs>>): Prisma__AppUserClient<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AppEmailVerificationCodes model
   */ 
  interface AppEmailVerificationCodesFieldRefs {
    readonly id: FieldRef<"AppEmailVerificationCodes", 'BigInt'>
    readonly code: FieldRef<"AppEmailVerificationCodes", 'String'>
    readonly expiresAt: FieldRef<"AppEmailVerificationCodes", 'DateTime'>
    readonly userId: FieldRef<"AppEmailVerificationCodes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AppEmailVerificationCodes findUnique
   */
  export type AppEmailVerificationCodesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which AppEmailVerificationCodes to fetch.
     */
    where: AppEmailVerificationCodesWhereUniqueInput
  }

  /**
   * AppEmailVerificationCodes findUniqueOrThrow
   */
  export type AppEmailVerificationCodesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which AppEmailVerificationCodes to fetch.
     */
    where: AppEmailVerificationCodesWhereUniqueInput
  }

  /**
   * AppEmailVerificationCodes findFirst
   */
  export type AppEmailVerificationCodesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which AppEmailVerificationCodes to fetch.
     */
    where?: AppEmailVerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppEmailVerificationCodes to fetch.
     */
    orderBy?: AppEmailVerificationCodesOrderByWithRelationInput | AppEmailVerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppEmailVerificationCodes.
     */
    cursor?: AppEmailVerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppEmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppEmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppEmailVerificationCodes.
     */
    distinct?: AppEmailVerificationCodesScalarFieldEnum | AppEmailVerificationCodesScalarFieldEnum[]
  }

  /**
   * AppEmailVerificationCodes findFirstOrThrow
   */
  export type AppEmailVerificationCodesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which AppEmailVerificationCodes to fetch.
     */
    where?: AppEmailVerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppEmailVerificationCodes to fetch.
     */
    orderBy?: AppEmailVerificationCodesOrderByWithRelationInput | AppEmailVerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppEmailVerificationCodes.
     */
    cursor?: AppEmailVerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppEmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppEmailVerificationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppEmailVerificationCodes.
     */
    distinct?: AppEmailVerificationCodesScalarFieldEnum | AppEmailVerificationCodesScalarFieldEnum[]
  }

  /**
   * AppEmailVerificationCodes findMany
   */
  export type AppEmailVerificationCodesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * Filter, which AppEmailVerificationCodes to fetch.
     */
    where?: AppEmailVerificationCodesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppEmailVerificationCodes to fetch.
     */
    orderBy?: AppEmailVerificationCodesOrderByWithRelationInput | AppEmailVerificationCodesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppEmailVerificationCodes.
     */
    cursor?: AppEmailVerificationCodesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppEmailVerificationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppEmailVerificationCodes.
     */
    skip?: number
    distinct?: AppEmailVerificationCodesScalarFieldEnum | AppEmailVerificationCodesScalarFieldEnum[]
  }

  /**
   * AppEmailVerificationCodes create
   */
  export type AppEmailVerificationCodesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * The data needed to create a AppEmailVerificationCodes.
     */
    data: XOR<AppEmailVerificationCodesCreateInput, AppEmailVerificationCodesUncheckedCreateInput>
  }

  /**
   * AppEmailVerificationCodes createMany
   */
  export type AppEmailVerificationCodesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppEmailVerificationCodes.
     */
    data: AppEmailVerificationCodesCreateManyInput | AppEmailVerificationCodesCreateManyInput[]
  }

  /**
   * AppEmailVerificationCodes update
   */
  export type AppEmailVerificationCodesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * The data needed to update a AppEmailVerificationCodes.
     */
    data: XOR<AppEmailVerificationCodesUpdateInput, AppEmailVerificationCodesUncheckedUpdateInput>
    /**
     * Choose, which AppEmailVerificationCodes to update.
     */
    where: AppEmailVerificationCodesWhereUniqueInput
  }

  /**
   * AppEmailVerificationCodes updateMany
   */
  export type AppEmailVerificationCodesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppEmailVerificationCodes.
     */
    data: XOR<AppEmailVerificationCodesUpdateManyMutationInput, AppEmailVerificationCodesUncheckedUpdateManyInput>
    /**
     * Filter which AppEmailVerificationCodes to update
     */
    where?: AppEmailVerificationCodesWhereInput
  }

  /**
   * AppEmailVerificationCodes upsert
   */
  export type AppEmailVerificationCodesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * The filter to search for the AppEmailVerificationCodes to update in case it exists.
     */
    where: AppEmailVerificationCodesWhereUniqueInput
    /**
     * In case the AppEmailVerificationCodes found by the `where` argument doesn't exist, create a new AppEmailVerificationCodes with this data.
     */
    create: XOR<AppEmailVerificationCodesCreateInput, AppEmailVerificationCodesUncheckedCreateInput>
    /**
     * In case the AppEmailVerificationCodes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppEmailVerificationCodesUpdateInput, AppEmailVerificationCodesUncheckedUpdateInput>
  }

  /**
   * AppEmailVerificationCodes delete
   */
  export type AppEmailVerificationCodesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
    /**
     * Filter which AppEmailVerificationCodes to delete.
     */
    where: AppEmailVerificationCodesWhereUniqueInput
  }

  /**
   * AppEmailVerificationCodes deleteMany
   */
  export type AppEmailVerificationCodesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppEmailVerificationCodes to delete
     */
    where?: AppEmailVerificationCodesWhereInput
  }

  /**
   * AppEmailVerificationCodes without action
   */
  export type AppEmailVerificationCodesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEmailVerificationCodes
     */
    select?: AppEmailVerificationCodesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppEmailVerificationCodesInclude<ExtArgs> | null
  }


  /**
   * Model mstExpenseHead
   */

  export type AggregateMstExpenseHead = {
    _count: MstExpenseHeadCountAggregateOutputType | null
    _avg: MstExpenseHeadAvgAggregateOutputType | null
    _sum: MstExpenseHeadSumAggregateOutputType | null
    _min: MstExpenseHeadMinAggregateOutputType | null
    _max: MstExpenseHeadMaxAggregateOutputType | null
  }

  export type MstExpenseHeadAvgAggregateOutputType = {
    ExpenseHeadIDP: number | null
    EntryBy: number | null
  }

  export type MstExpenseHeadSumAggregateOutputType = {
    ExpenseHeadIDP: bigint | null
    EntryBy: bigint | null
  }

  export type MstExpenseHeadMinAggregateOutputType = {
    ExpenseHeadIDP: bigint | null
    ExpenseHeadName: string | null
    IsActive: boolean | null
    IsDeleted: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type MstExpenseHeadMaxAggregateOutputType = {
    ExpenseHeadIDP: bigint | null
    ExpenseHeadName: string | null
    IsActive: boolean | null
    IsDeleted: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type MstExpenseHeadCountAggregateOutputType = {
    ExpenseHeadIDP: number
    ExpenseHeadName: number
    IsActive: number
    IsDeleted: number
    EntryBy: number
    EntryDate: number
    _all: number
  }


  export type MstExpenseHeadAvgAggregateInputType = {
    ExpenseHeadIDP?: true
    EntryBy?: true
  }

  export type MstExpenseHeadSumAggregateInputType = {
    ExpenseHeadIDP?: true
    EntryBy?: true
  }

  export type MstExpenseHeadMinAggregateInputType = {
    ExpenseHeadIDP?: true
    ExpenseHeadName?: true
    IsActive?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type MstExpenseHeadMaxAggregateInputType = {
    ExpenseHeadIDP?: true
    ExpenseHeadName?: true
    IsActive?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type MstExpenseHeadCountAggregateInputType = {
    ExpenseHeadIDP?: true
    ExpenseHeadName?: true
    IsActive?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
    _all?: true
  }

  export type MstExpenseHeadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstExpenseHead to aggregate.
     */
    where?: mstExpenseHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstExpenseHeads to fetch.
     */
    orderBy?: mstExpenseHeadOrderByWithRelationInput | mstExpenseHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mstExpenseHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstExpenseHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstExpenseHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mstExpenseHeads
    **/
    _count?: true | MstExpenseHeadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MstExpenseHeadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MstExpenseHeadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MstExpenseHeadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MstExpenseHeadMaxAggregateInputType
  }

  export type GetMstExpenseHeadAggregateType<T extends MstExpenseHeadAggregateArgs> = {
        [P in keyof T & keyof AggregateMstExpenseHead]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMstExpenseHead[P]>
      : GetScalarType<T[P], AggregateMstExpenseHead[P]>
  }




  export type mstExpenseHeadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mstExpenseHeadWhereInput
    orderBy?: mstExpenseHeadOrderByWithAggregationInput | mstExpenseHeadOrderByWithAggregationInput[]
    by: MstExpenseHeadScalarFieldEnum[] | MstExpenseHeadScalarFieldEnum
    having?: mstExpenseHeadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MstExpenseHeadCountAggregateInputType | true
    _avg?: MstExpenseHeadAvgAggregateInputType
    _sum?: MstExpenseHeadSumAggregateInputType
    _min?: MstExpenseHeadMinAggregateInputType
    _max?: MstExpenseHeadMaxAggregateInputType
  }

  export type MstExpenseHeadGroupByOutputType = {
    ExpenseHeadIDP: bigint
    ExpenseHeadName: string
    IsActive: boolean
    IsDeleted: boolean | null
    EntryBy: bigint
    EntryDate: Date
    _count: MstExpenseHeadCountAggregateOutputType | null
    _avg: MstExpenseHeadAvgAggregateOutputType | null
    _sum: MstExpenseHeadSumAggregateOutputType | null
    _min: MstExpenseHeadMinAggregateOutputType | null
    _max: MstExpenseHeadMaxAggregateOutputType | null
  }

  type GetMstExpenseHeadGroupByPayload<T extends mstExpenseHeadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MstExpenseHeadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MstExpenseHeadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MstExpenseHeadGroupByOutputType[P]>
            : GetScalarType<T[P], MstExpenseHeadGroupByOutputType[P]>
        }
      >
    >


  export type mstExpenseHeadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ExpenseHeadIDP?: boolean
    ExpenseHeadName?: boolean
    IsActive?: boolean
    IsDeleted?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }, ExtArgs["result"]["mstExpenseHead"]>


  export type mstExpenseHeadSelectScalar = {
    ExpenseHeadIDP?: boolean
    ExpenseHeadName?: boolean
    IsActive?: boolean
    IsDeleted?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }


  export type $mstExpenseHeadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mstExpenseHead"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ExpenseHeadIDP: bigint
      ExpenseHeadName: string
      IsActive: boolean
      IsDeleted: boolean | null
      EntryBy: bigint
      EntryDate: Date
    }, ExtArgs["result"]["mstExpenseHead"]>
    composites: {}
  }

  type mstExpenseHeadGetPayload<S extends boolean | null | undefined | mstExpenseHeadDefaultArgs> = $Result.GetResult<Prisma.$mstExpenseHeadPayload, S>

  type mstExpenseHeadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mstExpenseHeadFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MstExpenseHeadCountAggregateInputType | true
    }

  export interface mstExpenseHeadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mstExpenseHead'], meta: { name: 'mstExpenseHead' } }
    /**
     * Find zero or one MstExpenseHead that matches the filter.
     * @param {mstExpenseHeadFindUniqueArgs} args - Arguments to find a MstExpenseHead
     * @example
     * // Get one MstExpenseHead
     * const mstExpenseHead = await prisma.mstExpenseHead.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mstExpenseHeadFindUniqueArgs>(args: SelectSubset<T, mstExpenseHeadFindUniqueArgs<ExtArgs>>): Prisma__mstExpenseHeadClient<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MstExpenseHead that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mstExpenseHeadFindUniqueOrThrowArgs} args - Arguments to find a MstExpenseHead
     * @example
     * // Get one MstExpenseHead
     * const mstExpenseHead = await prisma.mstExpenseHead.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mstExpenseHeadFindUniqueOrThrowArgs>(args: SelectSubset<T, mstExpenseHeadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mstExpenseHeadClient<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MstExpenseHead that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstExpenseHeadFindFirstArgs} args - Arguments to find a MstExpenseHead
     * @example
     * // Get one MstExpenseHead
     * const mstExpenseHead = await prisma.mstExpenseHead.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mstExpenseHeadFindFirstArgs>(args?: SelectSubset<T, mstExpenseHeadFindFirstArgs<ExtArgs>>): Prisma__mstExpenseHeadClient<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MstExpenseHead that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstExpenseHeadFindFirstOrThrowArgs} args - Arguments to find a MstExpenseHead
     * @example
     * // Get one MstExpenseHead
     * const mstExpenseHead = await prisma.mstExpenseHead.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mstExpenseHeadFindFirstOrThrowArgs>(args?: SelectSubset<T, mstExpenseHeadFindFirstOrThrowArgs<ExtArgs>>): Prisma__mstExpenseHeadClient<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MstExpenseHeads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstExpenseHeadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MstExpenseHeads
     * const mstExpenseHeads = await prisma.mstExpenseHead.findMany()
     * 
     * // Get first 10 MstExpenseHeads
     * const mstExpenseHeads = await prisma.mstExpenseHead.findMany({ take: 10 })
     * 
     * // Only select the `ExpenseHeadIDP`
     * const mstExpenseHeadWithExpenseHeadIDPOnly = await prisma.mstExpenseHead.findMany({ select: { ExpenseHeadIDP: true } })
     * 
     */
    findMany<T extends mstExpenseHeadFindManyArgs>(args?: SelectSubset<T, mstExpenseHeadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MstExpenseHead.
     * @param {mstExpenseHeadCreateArgs} args - Arguments to create a MstExpenseHead.
     * @example
     * // Create one MstExpenseHead
     * const MstExpenseHead = await prisma.mstExpenseHead.create({
     *   data: {
     *     // ... data to create a MstExpenseHead
     *   }
     * })
     * 
     */
    create<T extends mstExpenseHeadCreateArgs>(args: SelectSubset<T, mstExpenseHeadCreateArgs<ExtArgs>>): Prisma__mstExpenseHeadClient<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MstExpenseHeads.
     * @param {mstExpenseHeadCreateManyArgs} args - Arguments to create many MstExpenseHeads.
     * @example
     * // Create many MstExpenseHeads
     * const mstExpenseHead = await prisma.mstExpenseHead.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mstExpenseHeadCreateManyArgs>(args?: SelectSubset<T, mstExpenseHeadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MstExpenseHead.
     * @param {mstExpenseHeadDeleteArgs} args - Arguments to delete one MstExpenseHead.
     * @example
     * // Delete one MstExpenseHead
     * const MstExpenseHead = await prisma.mstExpenseHead.delete({
     *   where: {
     *     // ... filter to delete one MstExpenseHead
     *   }
     * })
     * 
     */
    delete<T extends mstExpenseHeadDeleteArgs>(args: SelectSubset<T, mstExpenseHeadDeleteArgs<ExtArgs>>): Prisma__mstExpenseHeadClient<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MstExpenseHead.
     * @param {mstExpenseHeadUpdateArgs} args - Arguments to update one MstExpenseHead.
     * @example
     * // Update one MstExpenseHead
     * const mstExpenseHead = await prisma.mstExpenseHead.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mstExpenseHeadUpdateArgs>(args: SelectSubset<T, mstExpenseHeadUpdateArgs<ExtArgs>>): Prisma__mstExpenseHeadClient<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MstExpenseHeads.
     * @param {mstExpenseHeadDeleteManyArgs} args - Arguments to filter MstExpenseHeads to delete.
     * @example
     * // Delete a few MstExpenseHeads
     * const { count } = await prisma.mstExpenseHead.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mstExpenseHeadDeleteManyArgs>(args?: SelectSubset<T, mstExpenseHeadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MstExpenseHeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstExpenseHeadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MstExpenseHeads
     * const mstExpenseHead = await prisma.mstExpenseHead.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mstExpenseHeadUpdateManyArgs>(args: SelectSubset<T, mstExpenseHeadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MstExpenseHead.
     * @param {mstExpenseHeadUpsertArgs} args - Arguments to update or create a MstExpenseHead.
     * @example
     * // Update or create a MstExpenseHead
     * const mstExpenseHead = await prisma.mstExpenseHead.upsert({
     *   create: {
     *     // ... data to create a MstExpenseHead
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MstExpenseHead we want to update
     *   }
     * })
     */
    upsert<T extends mstExpenseHeadUpsertArgs>(args: SelectSubset<T, mstExpenseHeadUpsertArgs<ExtArgs>>): Prisma__mstExpenseHeadClient<$Result.GetResult<Prisma.$mstExpenseHeadPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MstExpenseHeads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstExpenseHeadCountArgs} args - Arguments to filter MstExpenseHeads to count.
     * @example
     * // Count the number of MstExpenseHeads
     * const count = await prisma.mstExpenseHead.count({
     *   where: {
     *     // ... the filter for the MstExpenseHeads we want to count
     *   }
     * })
    **/
    count<T extends mstExpenseHeadCountArgs>(
      args?: Subset<T, mstExpenseHeadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MstExpenseHeadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MstExpenseHead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstExpenseHeadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MstExpenseHeadAggregateArgs>(args: Subset<T, MstExpenseHeadAggregateArgs>): Prisma.PrismaPromise<GetMstExpenseHeadAggregateType<T>>

    /**
     * Group by MstExpenseHead.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstExpenseHeadGroupByArgs} args - Group by arguments.
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
      T extends mstExpenseHeadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mstExpenseHeadGroupByArgs['orderBy'] }
        : { orderBy?: mstExpenseHeadGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mstExpenseHeadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMstExpenseHeadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mstExpenseHead model
   */
  readonly fields: mstExpenseHeadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mstExpenseHead.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mstExpenseHeadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mstExpenseHead model
   */ 
  interface mstExpenseHeadFieldRefs {
    readonly ExpenseHeadIDP: FieldRef<"mstExpenseHead", 'BigInt'>
    readonly ExpenseHeadName: FieldRef<"mstExpenseHead", 'String'>
    readonly IsActive: FieldRef<"mstExpenseHead", 'Boolean'>
    readonly IsDeleted: FieldRef<"mstExpenseHead", 'Boolean'>
    readonly EntryBy: FieldRef<"mstExpenseHead", 'BigInt'>
    readonly EntryDate: FieldRef<"mstExpenseHead", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mstExpenseHead findUnique
   */
  export type mstExpenseHeadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * Filter, which mstExpenseHead to fetch.
     */
    where: mstExpenseHeadWhereUniqueInput
  }

  /**
   * mstExpenseHead findUniqueOrThrow
   */
  export type mstExpenseHeadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * Filter, which mstExpenseHead to fetch.
     */
    where: mstExpenseHeadWhereUniqueInput
  }

  /**
   * mstExpenseHead findFirst
   */
  export type mstExpenseHeadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * Filter, which mstExpenseHead to fetch.
     */
    where?: mstExpenseHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstExpenseHeads to fetch.
     */
    orderBy?: mstExpenseHeadOrderByWithRelationInput | mstExpenseHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstExpenseHeads.
     */
    cursor?: mstExpenseHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstExpenseHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstExpenseHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstExpenseHeads.
     */
    distinct?: MstExpenseHeadScalarFieldEnum | MstExpenseHeadScalarFieldEnum[]
  }

  /**
   * mstExpenseHead findFirstOrThrow
   */
  export type mstExpenseHeadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * Filter, which mstExpenseHead to fetch.
     */
    where?: mstExpenseHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstExpenseHeads to fetch.
     */
    orderBy?: mstExpenseHeadOrderByWithRelationInput | mstExpenseHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstExpenseHeads.
     */
    cursor?: mstExpenseHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstExpenseHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstExpenseHeads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstExpenseHeads.
     */
    distinct?: MstExpenseHeadScalarFieldEnum | MstExpenseHeadScalarFieldEnum[]
  }

  /**
   * mstExpenseHead findMany
   */
  export type mstExpenseHeadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * Filter, which mstExpenseHeads to fetch.
     */
    where?: mstExpenseHeadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstExpenseHeads to fetch.
     */
    orderBy?: mstExpenseHeadOrderByWithRelationInput | mstExpenseHeadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mstExpenseHeads.
     */
    cursor?: mstExpenseHeadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstExpenseHeads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstExpenseHeads.
     */
    skip?: number
    distinct?: MstExpenseHeadScalarFieldEnum | MstExpenseHeadScalarFieldEnum[]
  }

  /**
   * mstExpenseHead create
   */
  export type mstExpenseHeadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * The data needed to create a mstExpenseHead.
     */
    data: XOR<mstExpenseHeadCreateInput, mstExpenseHeadUncheckedCreateInput>
  }

  /**
   * mstExpenseHead createMany
   */
  export type mstExpenseHeadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mstExpenseHeads.
     */
    data: mstExpenseHeadCreateManyInput | mstExpenseHeadCreateManyInput[]
  }

  /**
   * mstExpenseHead update
   */
  export type mstExpenseHeadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * The data needed to update a mstExpenseHead.
     */
    data: XOR<mstExpenseHeadUpdateInput, mstExpenseHeadUncheckedUpdateInput>
    /**
     * Choose, which mstExpenseHead to update.
     */
    where: mstExpenseHeadWhereUniqueInput
  }

  /**
   * mstExpenseHead updateMany
   */
  export type mstExpenseHeadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mstExpenseHeads.
     */
    data: XOR<mstExpenseHeadUpdateManyMutationInput, mstExpenseHeadUncheckedUpdateManyInput>
    /**
     * Filter which mstExpenseHeads to update
     */
    where?: mstExpenseHeadWhereInput
  }

  /**
   * mstExpenseHead upsert
   */
  export type mstExpenseHeadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * The filter to search for the mstExpenseHead to update in case it exists.
     */
    where: mstExpenseHeadWhereUniqueInput
    /**
     * In case the mstExpenseHead found by the `where` argument doesn't exist, create a new mstExpenseHead with this data.
     */
    create: XOR<mstExpenseHeadCreateInput, mstExpenseHeadUncheckedCreateInput>
    /**
     * In case the mstExpenseHead was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mstExpenseHeadUpdateInput, mstExpenseHeadUncheckedUpdateInput>
  }

  /**
   * mstExpenseHead delete
   */
  export type mstExpenseHeadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
    /**
     * Filter which mstExpenseHead to delete.
     */
    where: mstExpenseHeadWhereUniqueInput
  }

  /**
   * mstExpenseHead deleteMany
   */
  export type mstExpenseHeadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstExpenseHeads to delete
     */
    where?: mstExpenseHeadWhereInput
  }

  /**
   * mstExpenseHead without action
   */
  export type mstExpenseHeadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstExpenseHead
     */
    select?: mstExpenseHeadSelect<ExtArgs> | null
  }


  /**
   * Model mstFees
   */

  export type AggregateMstFees = {
    _count: MstFeesCountAggregateOutputType | null
    _avg: MstFeesAvgAggregateOutputType | null
    _sum: MstFeesSumAggregateOutputType | null
    _min: MstFeesMinAggregateOutputType | null
    _max: MstFeesMaxAggregateOutputType | null
  }

  export type MstFeesAvgAggregateOutputType = {
    FeesIDP: number | null
    DepositFee: number | null
    TurmFee1: number | null
    TurmFee2: number | null
    TurmFee3: number | null
    TurmFee4: number | null
    TurmFee5: number | null
    TurmFee6: number | null
    TurmFee7: number | null
    TurmFee8: number | null
    TurmFee9: number | null
    FeesTypeID: number | null
    BatchID: number | null
    EntryBy: number | null
  }

  export type MstFeesSumAggregateOutputType = {
    FeesIDP: bigint | null
    DepositFee: number | null
    TurmFee1: number | null
    TurmFee2: number | null
    TurmFee3: number | null
    TurmFee4: number | null
    TurmFee5: number | null
    TurmFee6: number | null
    TurmFee7: number | null
    TurmFee8: number | null
    TurmFee9: number | null
    FeesTypeID: number | null
    BatchID: number | null
    EntryBy: bigint | null
  }

  export type MstFeesMinAggregateOutputType = {
    FeesIDP: bigint | null
    DepositFee: number | null
    TurmFee1: number | null
    TurmFee2: number | null
    TurmFee3: number | null
    TurmFee4: number | null
    TurmFee5: number | null
    TurmFee6: number | null
    TurmFee7: number | null
    TurmFee8: number | null
    TurmFee9: number | null
    TurmFee1_Collection: Date | null
    TurmFee2_Collection: Date | null
    TurmFee3_Collection: Date | null
    TurmFee4_Collection: Date | null
    TurmFee5_Collection: Date | null
    TurmFee6_Collection: Date | null
    TurmFee7_Collection: Date | null
    TurmFee8_Collection: Date | null
    TurmFee9_Collection: Date | null
    FeesTypeID: number | null
    BatchID: number | null
    IsActive: boolean | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type MstFeesMaxAggregateOutputType = {
    FeesIDP: bigint | null
    DepositFee: number | null
    TurmFee1: number | null
    TurmFee2: number | null
    TurmFee3: number | null
    TurmFee4: number | null
    TurmFee5: number | null
    TurmFee6: number | null
    TurmFee7: number | null
    TurmFee8: number | null
    TurmFee9: number | null
    TurmFee1_Collection: Date | null
    TurmFee2_Collection: Date | null
    TurmFee3_Collection: Date | null
    TurmFee4_Collection: Date | null
    TurmFee5_Collection: Date | null
    TurmFee6_Collection: Date | null
    TurmFee7_Collection: Date | null
    TurmFee8_Collection: Date | null
    TurmFee9_Collection: Date | null
    FeesTypeID: number | null
    BatchID: number | null
    IsActive: boolean | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type MstFeesCountAggregateOutputType = {
    FeesIDP: number
    DepositFee: number
    TurmFee1: number
    TurmFee2: number
    TurmFee3: number
    TurmFee4: number
    TurmFee5: number
    TurmFee6: number
    TurmFee7: number
    TurmFee8: number
    TurmFee9: number
    TurmFee1_Collection: number
    TurmFee2_Collection: number
    TurmFee3_Collection: number
    TurmFee4_Collection: number
    TurmFee5_Collection: number
    TurmFee6_Collection: number
    TurmFee7_Collection: number
    TurmFee8_Collection: number
    TurmFee9_Collection: number
    FeesTypeID: number
    BatchID: number
    IsActive: number
    IsDelete: number
    EntryBy: number
    EntryDate: number
    _all: number
  }


  export type MstFeesAvgAggregateInputType = {
    FeesIDP?: true
    DepositFee?: true
    TurmFee1?: true
    TurmFee2?: true
    TurmFee3?: true
    TurmFee4?: true
    TurmFee5?: true
    TurmFee6?: true
    TurmFee7?: true
    TurmFee8?: true
    TurmFee9?: true
    FeesTypeID?: true
    BatchID?: true
    EntryBy?: true
  }

  export type MstFeesSumAggregateInputType = {
    FeesIDP?: true
    DepositFee?: true
    TurmFee1?: true
    TurmFee2?: true
    TurmFee3?: true
    TurmFee4?: true
    TurmFee5?: true
    TurmFee6?: true
    TurmFee7?: true
    TurmFee8?: true
    TurmFee9?: true
    FeesTypeID?: true
    BatchID?: true
    EntryBy?: true
  }

  export type MstFeesMinAggregateInputType = {
    FeesIDP?: true
    DepositFee?: true
    TurmFee1?: true
    TurmFee2?: true
    TurmFee3?: true
    TurmFee4?: true
    TurmFee5?: true
    TurmFee6?: true
    TurmFee7?: true
    TurmFee8?: true
    TurmFee9?: true
    TurmFee1_Collection?: true
    TurmFee2_Collection?: true
    TurmFee3_Collection?: true
    TurmFee4_Collection?: true
    TurmFee5_Collection?: true
    TurmFee6_Collection?: true
    TurmFee7_Collection?: true
    TurmFee8_Collection?: true
    TurmFee9_Collection?: true
    FeesTypeID?: true
    BatchID?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type MstFeesMaxAggregateInputType = {
    FeesIDP?: true
    DepositFee?: true
    TurmFee1?: true
    TurmFee2?: true
    TurmFee3?: true
    TurmFee4?: true
    TurmFee5?: true
    TurmFee6?: true
    TurmFee7?: true
    TurmFee8?: true
    TurmFee9?: true
    TurmFee1_Collection?: true
    TurmFee2_Collection?: true
    TurmFee3_Collection?: true
    TurmFee4_Collection?: true
    TurmFee5_Collection?: true
    TurmFee6_Collection?: true
    TurmFee7_Collection?: true
    TurmFee8_Collection?: true
    TurmFee9_Collection?: true
    FeesTypeID?: true
    BatchID?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type MstFeesCountAggregateInputType = {
    FeesIDP?: true
    DepositFee?: true
    TurmFee1?: true
    TurmFee2?: true
    TurmFee3?: true
    TurmFee4?: true
    TurmFee5?: true
    TurmFee6?: true
    TurmFee7?: true
    TurmFee8?: true
    TurmFee9?: true
    TurmFee1_Collection?: true
    TurmFee2_Collection?: true
    TurmFee3_Collection?: true
    TurmFee4_Collection?: true
    TurmFee5_Collection?: true
    TurmFee6_Collection?: true
    TurmFee7_Collection?: true
    TurmFee8_Collection?: true
    TurmFee9_Collection?: true
    FeesTypeID?: true
    BatchID?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
    _all?: true
  }

  export type MstFeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstFees to aggregate.
     */
    where?: mstFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstFees to fetch.
     */
    orderBy?: mstFeesOrderByWithRelationInput | mstFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mstFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mstFees
    **/
    _count?: true | MstFeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MstFeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MstFeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MstFeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MstFeesMaxAggregateInputType
  }

  export type GetMstFeesAggregateType<T extends MstFeesAggregateArgs> = {
        [P in keyof T & keyof AggregateMstFees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMstFees[P]>
      : GetScalarType<T[P], AggregateMstFees[P]>
  }




  export type mstFeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mstFeesWhereInput
    orderBy?: mstFeesOrderByWithAggregationInput | mstFeesOrderByWithAggregationInput[]
    by: MstFeesScalarFieldEnum[] | MstFeesScalarFieldEnum
    having?: mstFeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MstFeesCountAggregateInputType | true
    _avg?: MstFeesAvgAggregateInputType
    _sum?: MstFeesSumAggregateInputType
    _min?: MstFeesMinAggregateInputType
    _max?: MstFeesMaxAggregateInputType
  }

  export type MstFeesGroupByOutputType = {
    FeesIDP: bigint
    DepositFee: number | null
    TurmFee1: number | null
    TurmFee2: number | null
    TurmFee3: number | null
    TurmFee4: number | null
    TurmFee5: number | null
    TurmFee6: number | null
    TurmFee7: number | null
    TurmFee8: number | null
    TurmFee9: number | null
    TurmFee1_Collection: Date | null
    TurmFee2_Collection: Date | null
    TurmFee3_Collection: Date | null
    TurmFee4_Collection: Date | null
    TurmFee5_Collection: Date | null
    TurmFee6_Collection: Date | null
    TurmFee7_Collection: Date | null
    TurmFee8_Collection: Date | null
    TurmFee9_Collection: Date | null
    FeesTypeID: number | null
    BatchID: number | null
    IsActive: boolean
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
    _count: MstFeesCountAggregateOutputType | null
    _avg: MstFeesAvgAggregateOutputType | null
    _sum: MstFeesSumAggregateOutputType | null
    _min: MstFeesMinAggregateOutputType | null
    _max: MstFeesMaxAggregateOutputType | null
  }

  type GetMstFeesGroupByPayload<T extends mstFeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MstFeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MstFeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MstFeesGroupByOutputType[P]>
            : GetScalarType<T[P], MstFeesGroupByOutputType[P]>
        }
      >
    >


  export type mstFeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FeesIDP?: boolean
    DepositFee?: boolean
    TurmFee1?: boolean
    TurmFee2?: boolean
    TurmFee3?: boolean
    TurmFee4?: boolean
    TurmFee5?: boolean
    TurmFee6?: boolean
    TurmFee7?: boolean
    TurmFee8?: boolean
    TurmFee9?: boolean
    TurmFee1_Collection?: boolean
    TurmFee2_Collection?: boolean
    TurmFee3_Collection?: boolean
    TurmFee4_Collection?: boolean
    TurmFee5_Collection?: boolean
    TurmFee6_Collection?: boolean
    TurmFee7_Collection?: boolean
    TurmFee8_Collection?: boolean
    TurmFee9_Collection?: boolean
    FeesTypeID?: boolean
    BatchID?: boolean
    IsActive?: boolean
    IsDelete?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }, ExtArgs["result"]["mstFees"]>


  export type mstFeesSelectScalar = {
    FeesIDP?: boolean
    DepositFee?: boolean
    TurmFee1?: boolean
    TurmFee2?: boolean
    TurmFee3?: boolean
    TurmFee4?: boolean
    TurmFee5?: boolean
    TurmFee6?: boolean
    TurmFee7?: boolean
    TurmFee8?: boolean
    TurmFee9?: boolean
    TurmFee1_Collection?: boolean
    TurmFee2_Collection?: boolean
    TurmFee3_Collection?: boolean
    TurmFee4_Collection?: boolean
    TurmFee5_Collection?: boolean
    TurmFee6_Collection?: boolean
    TurmFee7_Collection?: boolean
    TurmFee8_Collection?: boolean
    TurmFee9_Collection?: boolean
    FeesTypeID?: boolean
    BatchID?: boolean
    IsActive?: boolean
    IsDelete?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }


  export type $mstFeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mstFees"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      FeesIDP: bigint
      DepositFee: number | null
      TurmFee1: number | null
      TurmFee2: number | null
      TurmFee3: number | null
      TurmFee4: number | null
      TurmFee5: number | null
      TurmFee6: number | null
      TurmFee7: number | null
      TurmFee8: number | null
      TurmFee9: number | null
      TurmFee1_Collection: Date | null
      TurmFee2_Collection: Date | null
      TurmFee3_Collection: Date | null
      TurmFee4_Collection: Date | null
      TurmFee5_Collection: Date | null
      TurmFee6_Collection: Date | null
      TurmFee7_Collection: Date | null
      TurmFee8_Collection: Date | null
      TurmFee9_Collection: Date | null
      FeesTypeID: number | null
      BatchID: number | null
      IsActive: boolean
      IsDelete: boolean | null
      EntryBy: bigint | null
      EntryDate: Date | null
    }, ExtArgs["result"]["mstFees"]>
    composites: {}
  }

  type mstFeesGetPayload<S extends boolean | null | undefined | mstFeesDefaultArgs> = $Result.GetResult<Prisma.$mstFeesPayload, S>

  type mstFeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<mstFeesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MstFeesCountAggregateInputType | true
    }

  export interface mstFeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mstFees'], meta: { name: 'mstFees' } }
    /**
     * Find zero or one MstFees that matches the filter.
     * @param {mstFeesFindUniqueArgs} args - Arguments to find a MstFees
     * @example
     * // Get one MstFees
     * const mstFees = await prisma.mstFees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mstFeesFindUniqueArgs>(args: SelectSubset<T, mstFeesFindUniqueArgs<ExtArgs>>): Prisma__mstFeesClient<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MstFees that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {mstFeesFindUniqueOrThrowArgs} args - Arguments to find a MstFees
     * @example
     * // Get one MstFees
     * const mstFees = await prisma.mstFees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mstFeesFindUniqueOrThrowArgs>(args: SelectSubset<T, mstFeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mstFeesClient<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MstFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstFeesFindFirstArgs} args - Arguments to find a MstFees
     * @example
     * // Get one MstFees
     * const mstFees = await prisma.mstFees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mstFeesFindFirstArgs>(args?: SelectSubset<T, mstFeesFindFirstArgs<ExtArgs>>): Prisma__mstFeesClient<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MstFees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstFeesFindFirstOrThrowArgs} args - Arguments to find a MstFees
     * @example
     * // Get one MstFees
     * const mstFees = await prisma.mstFees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mstFeesFindFirstOrThrowArgs>(args?: SelectSubset<T, mstFeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__mstFeesClient<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MstFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstFeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MstFees
     * const mstFees = await prisma.mstFees.findMany()
     * 
     * // Get first 10 MstFees
     * const mstFees = await prisma.mstFees.findMany({ take: 10 })
     * 
     * // Only select the `FeesIDP`
     * const mstFeesWithFeesIDPOnly = await prisma.mstFees.findMany({ select: { FeesIDP: true } })
     * 
     */
    findMany<T extends mstFeesFindManyArgs>(args?: SelectSubset<T, mstFeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MstFees.
     * @param {mstFeesCreateArgs} args - Arguments to create a MstFees.
     * @example
     * // Create one MstFees
     * const MstFees = await prisma.mstFees.create({
     *   data: {
     *     // ... data to create a MstFees
     *   }
     * })
     * 
     */
    create<T extends mstFeesCreateArgs>(args: SelectSubset<T, mstFeesCreateArgs<ExtArgs>>): Prisma__mstFeesClient<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MstFees.
     * @param {mstFeesCreateManyArgs} args - Arguments to create many MstFees.
     * @example
     * // Create many MstFees
     * const mstFees = await prisma.mstFees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mstFeesCreateManyArgs>(args?: SelectSubset<T, mstFeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MstFees.
     * @param {mstFeesDeleteArgs} args - Arguments to delete one MstFees.
     * @example
     * // Delete one MstFees
     * const MstFees = await prisma.mstFees.delete({
     *   where: {
     *     // ... filter to delete one MstFees
     *   }
     * })
     * 
     */
    delete<T extends mstFeesDeleteArgs>(args: SelectSubset<T, mstFeesDeleteArgs<ExtArgs>>): Prisma__mstFeesClient<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MstFees.
     * @param {mstFeesUpdateArgs} args - Arguments to update one MstFees.
     * @example
     * // Update one MstFees
     * const mstFees = await prisma.mstFees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mstFeesUpdateArgs>(args: SelectSubset<T, mstFeesUpdateArgs<ExtArgs>>): Prisma__mstFeesClient<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MstFees.
     * @param {mstFeesDeleteManyArgs} args - Arguments to filter MstFees to delete.
     * @example
     * // Delete a few MstFees
     * const { count } = await prisma.mstFees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mstFeesDeleteManyArgs>(args?: SelectSubset<T, mstFeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MstFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstFeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MstFees
     * const mstFees = await prisma.mstFees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mstFeesUpdateManyArgs>(args: SelectSubset<T, mstFeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MstFees.
     * @param {mstFeesUpsertArgs} args - Arguments to update or create a MstFees.
     * @example
     * // Update or create a MstFees
     * const mstFees = await prisma.mstFees.upsert({
     *   create: {
     *     // ... data to create a MstFees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MstFees we want to update
     *   }
     * })
     */
    upsert<T extends mstFeesUpsertArgs>(args: SelectSubset<T, mstFeesUpsertArgs<ExtArgs>>): Prisma__mstFeesClient<$Result.GetResult<Prisma.$mstFeesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MstFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstFeesCountArgs} args - Arguments to filter MstFees to count.
     * @example
     * // Count the number of MstFees
     * const count = await prisma.mstFees.count({
     *   where: {
     *     // ... the filter for the MstFees we want to count
     *   }
     * })
    **/
    count<T extends mstFeesCountArgs>(
      args?: Subset<T, mstFeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MstFeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MstFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MstFeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MstFeesAggregateArgs>(args: Subset<T, MstFeesAggregateArgs>): Prisma.PrismaPromise<GetMstFeesAggregateType<T>>

    /**
     * Group by MstFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mstFeesGroupByArgs} args - Group by arguments.
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
      T extends mstFeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mstFeesGroupByArgs['orderBy'] }
        : { orderBy?: mstFeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, mstFeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMstFeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mstFees model
   */
  readonly fields: mstFeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mstFees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mstFeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the mstFees model
   */ 
  interface mstFeesFieldRefs {
    readonly FeesIDP: FieldRef<"mstFees", 'BigInt'>
    readonly DepositFee: FieldRef<"mstFees", 'Int'>
    readonly TurmFee1: FieldRef<"mstFees", 'Int'>
    readonly TurmFee2: FieldRef<"mstFees", 'Int'>
    readonly TurmFee3: FieldRef<"mstFees", 'Int'>
    readonly TurmFee4: FieldRef<"mstFees", 'Int'>
    readonly TurmFee5: FieldRef<"mstFees", 'Int'>
    readonly TurmFee6: FieldRef<"mstFees", 'Int'>
    readonly TurmFee7: FieldRef<"mstFees", 'Int'>
    readonly TurmFee8: FieldRef<"mstFees", 'Int'>
    readonly TurmFee9: FieldRef<"mstFees", 'Int'>
    readonly TurmFee1_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly TurmFee2_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly TurmFee3_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly TurmFee4_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly TurmFee5_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly TurmFee6_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly TurmFee7_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly TurmFee8_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly TurmFee9_Collection: FieldRef<"mstFees", 'DateTime'>
    readonly FeesTypeID: FieldRef<"mstFees", 'Int'>
    readonly BatchID: FieldRef<"mstFees", 'Int'>
    readonly IsActive: FieldRef<"mstFees", 'Boolean'>
    readonly IsDelete: FieldRef<"mstFees", 'Boolean'>
    readonly EntryBy: FieldRef<"mstFees", 'BigInt'>
    readonly EntryDate: FieldRef<"mstFees", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * mstFees findUnique
   */
  export type mstFeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * Filter, which mstFees to fetch.
     */
    where: mstFeesWhereUniqueInput
  }

  /**
   * mstFees findUniqueOrThrow
   */
  export type mstFeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * Filter, which mstFees to fetch.
     */
    where: mstFeesWhereUniqueInput
  }

  /**
   * mstFees findFirst
   */
  export type mstFeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * Filter, which mstFees to fetch.
     */
    where?: mstFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstFees to fetch.
     */
    orderBy?: mstFeesOrderByWithRelationInput | mstFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstFees.
     */
    cursor?: mstFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstFees.
     */
    distinct?: MstFeesScalarFieldEnum | MstFeesScalarFieldEnum[]
  }

  /**
   * mstFees findFirstOrThrow
   */
  export type mstFeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * Filter, which mstFees to fetch.
     */
    where?: mstFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstFees to fetch.
     */
    orderBy?: mstFeesOrderByWithRelationInput | mstFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mstFees.
     */
    cursor?: mstFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mstFees.
     */
    distinct?: MstFeesScalarFieldEnum | MstFeesScalarFieldEnum[]
  }

  /**
   * mstFees findMany
   */
  export type mstFeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * Filter, which mstFees to fetch.
     */
    where?: mstFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mstFees to fetch.
     */
    orderBy?: mstFeesOrderByWithRelationInput | mstFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mstFees.
     */
    cursor?: mstFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mstFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mstFees.
     */
    skip?: number
    distinct?: MstFeesScalarFieldEnum | MstFeesScalarFieldEnum[]
  }

  /**
   * mstFees create
   */
  export type mstFeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * The data needed to create a mstFees.
     */
    data: XOR<mstFeesCreateInput, mstFeesUncheckedCreateInput>
  }

  /**
   * mstFees createMany
   */
  export type mstFeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mstFees.
     */
    data: mstFeesCreateManyInput | mstFeesCreateManyInput[]
  }

  /**
   * mstFees update
   */
  export type mstFeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * The data needed to update a mstFees.
     */
    data: XOR<mstFeesUpdateInput, mstFeesUncheckedUpdateInput>
    /**
     * Choose, which mstFees to update.
     */
    where: mstFeesWhereUniqueInput
  }

  /**
   * mstFees updateMany
   */
  export type mstFeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mstFees.
     */
    data: XOR<mstFeesUpdateManyMutationInput, mstFeesUncheckedUpdateManyInput>
    /**
     * Filter which mstFees to update
     */
    where?: mstFeesWhereInput
  }

  /**
   * mstFees upsert
   */
  export type mstFeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * The filter to search for the mstFees to update in case it exists.
     */
    where: mstFeesWhereUniqueInput
    /**
     * In case the mstFees found by the `where` argument doesn't exist, create a new mstFees with this data.
     */
    create: XOR<mstFeesCreateInput, mstFeesUncheckedCreateInput>
    /**
     * In case the mstFees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mstFeesUpdateInput, mstFeesUncheckedUpdateInput>
  }

  /**
   * mstFees delete
   */
  export type mstFeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
    /**
     * Filter which mstFees to delete.
     */
    where: mstFeesWhereUniqueInput
  }

  /**
   * mstFees deleteMany
   */
  export type mstFeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mstFees to delete
     */
    where?: mstFeesWhereInput
  }

  /**
   * mstFees without action
   */
  export type mstFeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mstFees
     */
    select?: mstFeesSelect<ExtArgs> | null
  }


  /**
   * Model sysAdmin
   */

  export type AggregateSysAdmin = {
    _count: SysAdminCountAggregateOutputType | null
    _avg: SysAdminAvgAggregateOutputType | null
    _sum: SysAdminSumAggregateOutputType | null
    _min: SysAdminMinAggregateOutputType | null
    _max: SysAdminMaxAggregateOutputType | null
  }

  export type SysAdminAvgAggregateOutputType = {
    AdminIDP: number | null
    TermFee: number | null
    SMTPPort: number | null
    OTP: number | null
  }

  export type SysAdminSumAggregateOutputType = {
    AdminIDP: number | null
    TermFee: number | null
    SMTPPort: number | null
    OTP: number | null
  }

  export type SysAdminMinAggregateOutputType = {
    AdminIDP: number | null
    UserName: string | null
    Password: string | null
    FirstName: string | null
    LastName: string | null
    TermFee: number | null
    SMTPEmailAddress: string | null
    SMTPUserName: string | null
    SMTPPassword: string | null
    SMTPHost: string | null
    SMTPPort: number | null
    SMTPSSL: boolean | null
    OTP: number | null
    SMSKey: string | null
    GoogleMapKey: string | null
    GoogleLocationKey: string | null
    PaymentGatewayKey: string | null
    RevenueCommission: string | null
    CDNPath: string | null
    UpdatedDate: Date | null
  }

  export type SysAdminMaxAggregateOutputType = {
    AdminIDP: number | null
    UserName: string | null
    Password: string | null
    FirstName: string | null
    LastName: string | null
    TermFee: number | null
    SMTPEmailAddress: string | null
    SMTPUserName: string | null
    SMTPPassword: string | null
    SMTPHost: string | null
    SMTPPort: number | null
    SMTPSSL: boolean | null
    OTP: number | null
    SMSKey: string | null
    GoogleMapKey: string | null
    GoogleLocationKey: string | null
    PaymentGatewayKey: string | null
    RevenueCommission: string | null
    CDNPath: string | null
    UpdatedDate: Date | null
  }

  export type SysAdminCountAggregateOutputType = {
    AdminIDP: number
    UserName: number
    Password: number
    FirstName: number
    LastName: number
    TermFee: number
    SMTPEmailAddress: number
    SMTPUserName: number
    SMTPPassword: number
    SMTPHost: number
    SMTPPort: number
    SMTPSSL: number
    OTP: number
    SMSKey: number
    GoogleMapKey: number
    GoogleLocationKey: number
    PaymentGatewayKey: number
    RevenueCommission: number
    CDNPath: number
    UpdatedDate: number
    _all: number
  }


  export type SysAdminAvgAggregateInputType = {
    AdminIDP?: true
    TermFee?: true
    SMTPPort?: true
    OTP?: true
  }

  export type SysAdminSumAggregateInputType = {
    AdminIDP?: true
    TermFee?: true
    SMTPPort?: true
    OTP?: true
  }

  export type SysAdminMinAggregateInputType = {
    AdminIDP?: true
    UserName?: true
    Password?: true
    FirstName?: true
    LastName?: true
    TermFee?: true
    SMTPEmailAddress?: true
    SMTPUserName?: true
    SMTPPassword?: true
    SMTPHost?: true
    SMTPPort?: true
    SMTPSSL?: true
    OTP?: true
    SMSKey?: true
    GoogleMapKey?: true
    GoogleLocationKey?: true
    PaymentGatewayKey?: true
    RevenueCommission?: true
    CDNPath?: true
    UpdatedDate?: true
  }

  export type SysAdminMaxAggregateInputType = {
    AdminIDP?: true
    UserName?: true
    Password?: true
    FirstName?: true
    LastName?: true
    TermFee?: true
    SMTPEmailAddress?: true
    SMTPUserName?: true
    SMTPPassword?: true
    SMTPHost?: true
    SMTPPort?: true
    SMTPSSL?: true
    OTP?: true
    SMSKey?: true
    GoogleMapKey?: true
    GoogleLocationKey?: true
    PaymentGatewayKey?: true
    RevenueCommission?: true
    CDNPath?: true
    UpdatedDate?: true
  }

  export type SysAdminCountAggregateInputType = {
    AdminIDP?: true
    UserName?: true
    Password?: true
    FirstName?: true
    LastName?: true
    TermFee?: true
    SMTPEmailAddress?: true
    SMTPUserName?: true
    SMTPPassword?: true
    SMTPHost?: true
    SMTPPort?: true
    SMTPSSL?: true
    OTP?: true
    SMSKey?: true
    GoogleMapKey?: true
    GoogleLocationKey?: true
    PaymentGatewayKey?: true
    RevenueCommission?: true
    CDNPath?: true
    UpdatedDate?: true
    _all?: true
  }

  export type SysAdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysAdmin to aggregate.
     */
    where?: sysAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysAdmins to fetch.
     */
    orderBy?: sysAdminOrderByWithRelationInput | sysAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sysAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sysAdmins
    **/
    _count?: true | SysAdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SysAdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SysAdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SysAdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SysAdminMaxAggregateInputType
  }

  export type GetSysAdminAggregateType<T extends SysAdminAggregateArgs> = {
        [P in keyof T & keyof AggregateSysAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSysAdmin[P]>
      : GetScalarType<T[P], AggregateSysAdmin[P]>
  }




  export type sysAdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sysAdminWhereInput
    orderBy?: sysAdminOrderByWithAggregationInput | sysAdminOrderByWithAggregationInput[]
    by: SysAdminScalarFieldEnum[] | SysAdminScalarFieldEnum
    having?: sysAdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SysAdminCountAggregateInputType | true
    _avg?: SysAdminAvgAggregateInputType
    _sum?: SysAdminSumAggregateInputType
    _min?: SysAdminMinAggregateInputType
    _max?: SysAdminMaxAggregateInputType
  }

  export type SysAdminGroupByOutputType = {
    AdminIDP: number
    UserName: string | null
    Password: string | null
    FirstName: string | null
    LastName: string | null
    TermFee: number | null
    SMTPEmailAddress: string | null
    SMTPUserName: string | null
    SMTPPassword: string | null
    SMTPHost: string | null
    SMTPPort: number | null
    SMTPSSL: boolean | null
    OTP: number | null
    SMSKey: string | null
    GoogleMapKey: string | null
    GoogleLocationKey: string | null
    PaymentGatewayKey: string | null
    RevenueCommission: string | null
    CDNPath: string | null
    UpdatedDate: Date | null
    _count: SysAdminCountAggregateOutputType | null
    _avg: SysAdminAvgAggregateOutputType | null
    _sum: SysAdminSumAggregateOutputType | null
    _min: SysAdminMinAggregateOutputType | null
    _max: SysAdminMaxAggregateOutputType | null
  }

  type GetSysAdminGroupByPayload<T extends sysAdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SysAdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SysAdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SysAdminGroupByOutputType[P]>
            : GetScalarType<T[P], SysAdminGroupByOutputType[P]>
        }
      >
    >


  export type sysAdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    AdminIDP?: boolean
    UserName?: boolean
    Password?: boolean
    FirstName?: boolean
    LastName?: boolean
    TermFee?: boolean
    SMTPEmailAddress?: boolean
    SMTPUserName?: boolean
    SMTPPassword?: boolean
    SMTPHost?: boolean
    SMTPPort?: boolean
    SMTPSSL?: boolean
    OTP?: boolean
    SMSKey?: boolean
    GoogleMapKey?: boolean
    GoogleLocationKey?: boolean
    PaymentGatewayKey?: boolean
    RevenueCommission?: boolean
    CDNPath?: boolean
    UpdatedDate?: boolean
  }, ExtArgs["result"]["sysAdmin"]>


  export type sysAdminSelectScalar = {
    AdminIDP?: boolean
    UserName?: boolean
    Password?: boolean
    FirstName?: boolean
    LastName?: boolean
    TermFee?: boolean
    SMTPEmailAddress?: boolean
    SMTPUserName?: boolean
    SMTPPassword?: boolean
    SMTPHost?: boolean
    SMTPPort?: boolean
    SMTPSSL?: boolean
    OTP?: boolean
    SMSKey?: boolean
    GoogleMapKey?: boolean
    GoogleLocationKey?: boolean
    PaymentGatewayKey?: boolean
    RevenueCommission?: boolean
    CDNPath?: boolean
    UpdatedDate?: boolean
  }


  export type $sysAdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sysAdmin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      AdminIDP: number
      UserName: string | null
      Password: string | null
      FirstName: string | null
      LastName: string | null
      TermFee: number | null
      SMTPEmailAddress: string | null
      SMTPUserName: string | null
      SMTPPassword: string | null
      SMTPHost: string | null
      SMTPPort: number | null
      SMTPSSL: boolean | null
      OTP: number | null
      SMSKey: string | null
      GoogleMapKey: string | null
      GoogleLocationKey: string | null
      PaymentGatewayKey: string | null
      RevenueCommission: string | null
      CDNPath: string | null
      UpdatedDate: Date | null
    }, ExtArgs["result"]["sysAdmin"]>
    composites: {}
  }

  type sysAdminGetPayload<S extends boolean | null | undefined | sysAdminDefaultArgs> = $Result.GetResult<Prisma.$sysAdminPayload, S>

  type sysAdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sysAdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SysAdminCountAggregateInputType | true
    }

  export interface sysAdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sysAdmin'], meta: { name: 'sysAdmin' } }
    /**
     * Find zero or one SysAdmin that matches the filter.
     * @param {sysAdminFindUniqueArgs} args - Arguments to find a SysAdmin
     * @example
     * // Get one SysAdmin
     * const sysAdmin = await prisma.sysAdmin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sysAdminFindUniqueArgs>(args: SelectSubset<T, sysAdminFindUniqueArgs<ExtArgs>>): Prisma__sysAdminClient<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SysAdmin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {sysAdminFindUniqueOrThrowArgs} args - Arguments to find a SysAdmin
     * @example
     * // Get one SysAdmin
     * const sysAdmin = await prisma.sysAdmin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sysAdminFindUniqueOrThrowArgs>(args: SelectSubset<T, sysAdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sysAdminClient<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SysAdmin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysAdminFindFirstArgs} args - Arguments to find a SysAdmin
     * @example
     * // Get one SysAdmin
     * const sysAdmin = await prisma.sysAdmin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sysAdminFindFirstArgs>(args?: SelectSubset<T, sysAdminFindFirstArgs<ExtArgs>>): Prisma__sysAdminClient<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SysAdmin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysAdminFindFirstOrThrowArgs} args - Arguments to find a SysAdmin
     * @example
     * // Get one SysAdmin
     * const sysAdmin = await prisma.sysAdmin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sysAdminFindFirstOrThrowArgs>(args?: SelectSubset<T, sysAdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__sysAdminClient<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SysAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysAdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SysAdmins
     * const sysAdmins = await prisma.sysAdmin.findMany()
     * 
     * // Get first 10 SysAdmins
     * const sysAdmins = await prisma.sysAdmin.findMany({ take: 10 })
     * 
     * // Only select the `AdminIDP`
     * const sysAdminWithAdminIDPOnly = await prisma.sysAdmin.findMany({ select: { AdminIDP: true } })
     * 
     */
    findMany<T extends sysAdminFindManyArgs>(args?: SelectSubset<T, sysAdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SysAdmin.
     * @param {sysAdminCreateArgs} args - Arguments to create a SysAdmin.
     * @example
     * // Create one SysAdmin
     * const SysAdmin = await prisma.sysAdmin.create({
     *   data: {
     *     // ... data to create a SysAdmin
     *   }
     * })
     * 
     */
    create<T extends sysAdminCreateArgs>(args: SelectSubset<T, sysAdminCreateArgs<ExtArgs>>): Prisma__sysAdminClient<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SysAdmins.
     * @param {sysAdminCreateManyArgs} args - Arguments to create many SysAdmins.
     * @example
     * // Create many SysAdmins
     * const sysAdmin = await prisma.sysAdmin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sysAdminCreateManyArgs>(args?: SelectSubset<T, sysAdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SysAdmin.
     * @param {sysAdminDeleteArgs} args - Arguments to delete one SysAdmin.
     * @example
     * // Delete one SysAdmin
     * const SysAdmin = await prisma.sysAdmin.delete({
     *   where: {
     *     // ... filter to delete one SysAdmin
     *   }
     * })
     * 
     */
    delete<T extends sysAdminDeleteArgs>(args: SelectSubset<T, sysAdminDeleteArgs<ExtArgs>>): Prisma__sysAdminClient<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SysAdmin.
     * @param {sysAdminUpdateArgs} args - Arguments to update one SysAdmin.
     * @example
     * // Update one SysAdmin
     * const sysAdmin = await prisma.sysAdmin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sysAdminUpdateArgs>(args: SelectSubset<T, sysAdminUpdateArgs<ExtArgs>>): Prisma__sysAdminClient<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SysAdmins.
     * @param {sysAdminDeleteManyArgs} args - Arguments to filter SysAdmins to delete.
     * @example
     * // Delete a few SysAdmins
     * const { count } = await prisma.sysAdmin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sysAdminDeleteManyArgs>(args?: SelectSubset<T, sysAdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SysAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysAdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SysAdmins
     * const sysAdmin = await prisma.sysAdmin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sysAdminUpdateManyArgs>(args: SelectSubset<T, sysAdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SysAdmin.
     * @param {sysAdminUpsertArgs} args - Arguments to update or create a SysAdmin.
     * @example
     * // Update or create a SysAdmin
     * const sysAdmin = await prisma.sysAdmin.upsert({
     *   create: {
     *     // ... data to create a SysAdmin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SysAdmin we want to update
     *   }
     * })
     */
    upsert<T extends sysAdminUpsertArgs>(args: SelectSubset<T, sysAdminUpsertArgs<ExtArgs>>): Prisma__sysAdminClient<$Result.GetResult<Prisma.$sysAdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SysAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysAdminCountArgs} args - Arguments to filter SysAdmins to count.
     * @example
     * // Count the number of SysAdmins
     * const count = await prisma.sysAdmin.count({
     *   where: {
     *     // ... the filter for the SysAdmins we want to count
     *   }
     * })
    **/
    count<T extends sysAdminCountArgs>(
      args?: Subset<T, sysAdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SysAdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SysAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SysAdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SysAdminAggregateArgs>(args: Subset<T, SysAdminAggregateArgs>): Prisma.PrismaPromise<GetSysAdminAggregateType<T>>

    /**
     * Group by SysAdmin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sysAdminGroupByArgs} args - Group by arguments.
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
      T extends sysAdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sysAdminGroupByArgs['orderBy'] }
        : { orderBy?: sysAdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, sysAdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSysAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sysAdmin model
   */
  readonly fields: sysAdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sysAdmin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sysAdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the sysAdmin model
   */ 
  interface sysAdminFieldRefs {
    readonly AdminIDP: FieldRef<"sysAdmin", 'Int'>
    readonly UserName: FieldRef<"sysAdmin", 'String'>
    readonly Password: FieldRef<"sysAdmin", 'String'>
    readonly FirstName: FieldRef<"sysAdmin", 'String'>
    readonly LastName: FieldRef<"sysAdmin", 'String'>
    readonly TermFee: FieldRef<"sysAdmin", 'Float'>
    readonly SMTPEmailAddress: FieldRef<"sysAdmin", 'String'>
    readonly SMTPUserName: FieldRef<"sysAdmin", 'String'>
    readonly SMTPPassword: FieldRef<"sysAdmin", 'String'>
    readonly SMTPHost: FieldRef<"sysAdmin", 'String'>
    readonly SMTPPort: FieldRef<"sysAdmin", 'Int'>
    readonly SMTPSSL: FieldRef<"sysAdmin", 'Boolean'>
    readonly OTP: FieldRef<"sysAdmin", 'Int'>
    readonly SMSKey: FieldRef<"sysAdmin", 'String'>
    readonly GoogleMapKey: FieldRef<"sysAdmin", 'String'>
    readonly GoogleLocationKey: FieldRef<"sysAdmin", 'String'>
    readonly PaymentGatewayKey: FieldRef<"sysAdmin", 'String'>
    readonly RevenueCommission: FieldRef<"sysAdmin", 'String'>
    readonly CDNPath: FieldRef<"sysAdmin", 'String'>
    readonly UpdatedDate: FieldRef<"sysAdmin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sysAdmin findUnique
   */
  export type sysAdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * Filter, which sysAdmin to fetch.
     */
    where: sysAdminWhereUniqueInput
  }

  /**
   * sysAdmin findUniqueOrThrow
   */
  export type sysAdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * Filter, which sysAdmin to fetch.
     */
    where: sysAdminWhereUniqueInput
  }

  /**
   * sysAdmin findFirst
   */
  export type sysAdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * Filter, which sysAdmin to fetch.
     */
    where?: sysAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysAdmins to fetch.
     */
    orderBy?: sysAdminOrderByWithRelationInput | sysAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysAdmins.
     */
    cursor?: sysAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysAdmins.
     */
    distinct?: SysAdminScalarFieldEnum | SysAdminScalarFieldEnum[]
  }

  /**
   * sysAdmin findFirstOrThrow
   */
  export type sysAdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * Filter, which sysAdmin to fetch.
     */
    where?: sysAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysAdmins to fetch.
     */
    orderBy?: sysAdminOrderByWithRelationInput | sysAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sysAdmins.
     */
    cursor?: sysAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sysAdmins.
     */
    distinct?: SysAdminScalarFieldEnum | SysAdminScalarFieldEnum[]
  }

  /**
   * sysAdmin findMany
   */
  export type sysAdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * Filter, which sysAdmins to fetch.
     */
    where?: sysAdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sysAdmins to fetch.
     */
    orderBy?: sysAdminOrderByWithRelationInput | sysAdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sysAdmins.
     */
    cursor?: sysAdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sysAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sysAdmins.
     */
    skip?: number
    distinct?: SysAdminScalarFieldEnum | SysAdminScalarFieldEnum[]
  }

  /**
   * sysAdmin create
   */
  export type sysAdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * The data needed to create a sysAdmin.
     */
    data?: XOR<sysAdminCreateInput, sysAdminUncheckedCreateInput>
  }

  /**
   * sysAdmin createMany
   */
  export type sysAdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sysAdmins.
     */
    data: sysAdminCreateManyInput | sysAdminCreateManyInput[]
  }

  /**
   * sysAdmin update
   */
  export type sysAdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * The data needed to update a sysAdmin.
     */
    data: XOR<sysAdminUpdateInput, sysAdminUncheckedUpdateInput>
    /**
     * Choose, which sysAdmin to update.
     */
    where: sysAdminWhereUniqueInput
  }

  /**
   * sysAdmin updateMany
   */
  export type sysAdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sysAdmins.
     */
    data: XOR<sysAdminUpdateManyMutationInput, sysAdminUncheckedUpdateManyInput>
    /**
     * Filter which sysAdmins to update
     */
    where?: sysAdminWhereInput
  }

  /**
   * sysAdmin upsert
   */
  export type sysAdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * The filter to search for the sysAdmin to update in case it exists.
     */
    where: sysAdminWhereUniqueInput
    /**
     * In case the sysAdmin found by the `where` argument doesn't exist, create a new sysAdmin with this data.
     */
    create: XOR<sysAdminCreateInput, sysAdminUncheckedCreateInput>
    /**
     * In case the sysAdmin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sysAdminUpdateInput, sysAdminUncheckedUpdateInput>
  }

  /**
   * sysAdmin delete
   */
  export type sysAdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
    /**
     * Filter which sysAdmin to delete.
     */
    where: sysAdminWhereUniqueInput
  }

  /**
   * sysAdmin deleteMany
   */
  export type sysAdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sysAdmins to delete
     */
    where?: sysAdminWhereInput
  }

  /**
   * sysAdmin without action
   */
  export type sysAdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sysAdmin
     */
    select?: sysAdminSelect<ExtArgs> | null
  }


  /**
   * Model tblBudget
   */

  export type AggregateTblBudget = {
    _count: TblBudgetCountAggregateOutputType | null
    _avg: TblBudgetAvgAggregateOutputType | null
    _sum: TblBudgetSumAggregateOutputType | null
    _min: TblBudgetMinAggregateOutputType | null
    _max: TblBudgetMaxAggregateOutputType | null
  }

  export type TblBudgetAvgAggregateOutputType = {
    BudgetIDP: number | null
    FinancialYearID: number | null
    ExpenseHeadIDF: number | null
    BudgetAmount: Decimal | null
    EntryBy: number | null
  }

  export type TblBudgetSumAggregateOutputType = {
    BudgetIDP: bigint | null
    FinancialYearID: number | null
    ExpenseHeadIDF: bigint | null
    BudgetAmount: Decimal | null
    EntryBy: bigint | null
  }

  export type TblBudgetMinAggregateOutputType = {
    BudgetIDP: bigint | null
    FinancialYearID: number | null
    ExpenseHeadIDF: bigint | null
    BudgetAmount: Decimal | null
    Remarks: string | null
    IsDeleted: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblBudgetMaxAggregateOutputType = {
    BudgetIDP: bigint | null
    FinancialYearID: number | null
    ExpenseHeadIDF: bigint | null
    BudgetAmount: Decimal | null
    Remarks: string | null
    IsDeleted: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblBudgetCountAggregateOutputType = {
    BudgetIDP: number
    FinancialYearID: number
    ExpenseHeadIDF: number
    BudgetAmount: number
    Remarks: number
    IsDeleted: number
    EntryBy: number
    EntryDate: number
    _all: number
  }


  export type TblBudgetAvgAggregateInputType = {
    BudgetIDP?: true
    FinancialYearID?: true
    ExpenseHeadIDF?: true
    BudgetAmount?: true
    EntryBy?: true
  }

  export type TblBudgetSumAggregateInputType = {
    BudgetIDP?: true
    FinancialYearID?: true
    ExpenseHeadIDF?: true
    BudgetAmount?: true
    EntryBy?: true
  }

  export type TblBudgetMinAggregateInputType = {
    BudgetIDP?: true
    FinancialYearID?: true
    ExpenseHeadIDF?: true
    BudgetAmount?: true
    Remarks?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblBudgetMaxAggregateInputType = {
    BudgetIDP?: true
    FinancialYearID?: true
    ExpenseHeadIDF?: true
    BudgetAmount?: true
    Remarks?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblBudgetCountAggregateInputType = {
    BudgetIDP?: true
    FinancialYearID?: true
    ExpenseHeadIDF?: true
    BudgetAmount?: true
    Remarks?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
    _all?: true
  }

  export type TblBudgetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblBudget to aggregate.
     */
    where?: tblBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblBudgets to fetch.
     */
    orderBy?: tblBudgetOrderByWithRelationInput | tblBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblBudgets
    **/
    _count?: true | TblBudgetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblBudgetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblBudgetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblBudgetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblBudgetMaxAggregateInputType
  }

  export type GetTblBudgetAggregateType<T extends TblBudgetAggregateArgs> = {
        [P in keyof T & keyof AggregateTblBudget]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblBudget[P]>
      : GetScalarType<T[P], AggregateTblBudget[P]>
  }




  export type tblBudgetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblBudgetWhereInput
    orderBy?: tblBudgetOrderByWithAggregationInput | tblBudgetOrderByWithAggregationInput[]
    by: TblBudgetScalarFieldEnum[] | TblBudgetScalarFieldEnum
    having?: tblBudgetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblBudgetCountAggregateInputType | true
    _avg?: TblBudgetAvgAggregateInputType
    _sum?: TblBudgetSumAggregateInputType
    _min?: TblBudgetMinAggregateInputType
    _max?: TblBudgetMaxAggregateInputType
  }

  export type TblBudgetGroupByOutputType = {
    BudgetIDP: bigint
    FinancialYearID: number
    ExpenseHeadIDF: bigint
    BudgetAmount: Decimal
    Remarks: string | null
    IsDeleted: boolean | null
    EntryBy: bigint
    EntryDate: Date
    _count: TblBudgetCountAggregateOutputType | null
    _avg: TblBudgetAvgAggregateOutputType | null
    _sum: TblBudgetSumAggregateOutputType | null
    _min: TblBudgetMinAggregateOutputType | null
    _max: TblBudgetMaxAggregateOutputType | null
  }

  type GetTblBudgetGroupByPayload<T extends tblBudgetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblBudgetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblBudgetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblBudgetGroupByOutputType[P]>
            : GetScalarType<T[P], TblBudgetGroupByOutputType[P]>
        }
      >
    >


  export type tblBudgetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    BudgetIDP?: boolean
    FinancialYearID?: boolean
    ExpenseHeadIDF?: boolean
    BudgetAmount?: boolean
    Remarks?: boolean
    IsDeleted?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }, ExtArgs["result"]["tblBudget"]>


  export type tblBudgetSelectScalar = {
    BudgetIDP?: boolean
    FinancialYearID?: boolean
    ExpenseHeadIDF?: boolean
    BudgetAmount?: boolean
    Remarks?: boolean
    IsDeleted?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }


  export type $tblBudgetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblBudget"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      BudgetIDP: bigint
      FinancialYearID: number
      ExpenseHeadIDF: bigint
      BudgetAmount: Prisma.Decimal
      Remarks: string | null
      IsDeleted: boolean | null
      EntryBy: bigint
      EntryDate: Date
    }, ExtArgs["result"]["tblBudget"]>
    composites: {}
  }

  type tblBudgetGetPayload<S extends boolean | null | undefined | tblBudgetDefaultArgs> = $Result.GetResult<Prisma.$tblBudgetPayload, S>

  type tblBudgetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblBudgetFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblBudgetCountAggregateInputType | true
    }

  export interface tblBudgetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblBudget'], meta: { name: 'tblBudget' } }
    /**
     * Find zero or one TblBudget that matches the filter.
     * @param {tblBudgetFindUniqueArgs} args - Arguments to find a TblBudget
     * @example
     * // Get one TblBudget
     * const tblBudget = await prisma.tblBudget.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblBudgetFindUniqueArgs>(args: SelectSubset<T, tblBudgetFindUniqueArgs<ExtArgs>>): Prisma__tblBudgetClient<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TblBudget that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblBudgetFindUniqueOrThrowArgs} args - Arguments to find a TblBudget
     * @example
     * // Get one TblBudget
     * const tblBudget = await prisma.tblBudget.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblBudgetFindUniqueOrThrowArgs>(args: SelectSubset<T, tblBudgetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblBudgetClient<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TblBudget that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBudgetFindFirstArgs} args - Arguments to find a TblBudget
     * @example
     * // Get one TblBudget
     * const tblBudget = await prisma.tblBudget.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblBudgetFindFirstArgs>(args?: SelectSubset<T, tblBudgetFindFirstArgs<ExtArgs>>): Prisma__tblBudgetClient<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TblBudget that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBudgetFindFirstOrThrowArgs} args - Arguments to find a TblBudget
     * @example
     * // Get one TblBudget
     * const tblBudget = await prisma.tblBudget.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblBudgetFindFirstOrThrowArgs>(args?: SelectSubset<T, tblBudgetFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblBudgetClient<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TblBudgets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBudgetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblBudgets
     * const tblBudgets = await prisma.tblBudget.findMany()
     * 
     * // Get first 10 TblBudgets
     * const tblBudgets = await prisma.tblBudget.findMany({ take: 10 })
     * 
     * // Only select the `BudgetIDP`
     * const tblBudgetWithBudgetIDPOnly = await prisma.tblBudget.findMany({ select: { BudgetIDP: true } })
     * 
     */
    findMany<T extends tblBudgetFindManyArgs>(args?: SelectSubset<T, tblBudgetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TblBudget.
     * @param {tblBudgetCreateArgs} args - Arguments to create a TblBudget.
     * @example
     * // Create one TblBudget
     * const TblBudget = await prisma.tblBudget.create({
     *   data: {
     *     // ... data to create a TblBudget
     *   }
     * })
     * 
     */
    create<T extends tblBudgetCreateArgs>(args: SelectSubset<T, tblBudgetCreateArgs<ExtArgs>>): Prisma__tblBudgetClient<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TblBudgets.
     * @param {tblBudgetCreateManyArgs} args - Arguments to create many TblBudgets.
     * @example
     * // Create many TblBudgets
     * const tblBudget = await prisma.tblBudget.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblBudgetCreateManyArgs>(args?: SelectSubset<T, tblBudgetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblBudget.
     * @param {tblBudgetDeleteArgs} args - Arguments to delete one TblBudget.
     * @example
     * // Delete one TblBudget
     * const TblBudget = await prisma.tblBudget.delete({
     *   where: {
     *     // ... filter to delete one TblBudget
     *   }
     * })
     * 
     */
    delete<T extends tblBudgetDeleteArgs>(args: SelectSubset<T, tblBudgetDeleteArgs<ExtArgs>>): Prisma__tblBudgetClient<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TblBudget.
     * @param {tblBudgetUpdateArgs} args - Arguments to update one TblBudget.
     * @example
     * // Update one TblBudget
     * const tblBudget = await prisma.tblBudget.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblBudgetUpdateArgs>(args: SelectSubset<T, tblBudgetUpdateArgs<ExtArgs>>): Prisma__tblBudgetClient<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TblBudgets.
     * @param {tblBudgetDeleteManyArgs} args - Arguments to filter TblBudgets to delete.
     * @example
     * // Delete a few TblBudgets
     * const { count } = await prisma.tblBudget.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblBudgetDeleteManyArgs>(args?: SelectSubset<T, tblBudgetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBudgetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblBudgets
     * const tblBudget = await prisma.tblBudget.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblBudgetUpdateManyArgs>(args: SelectSubset<T, tblBudgetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblBudget.
     * @param {tblBudgetUpsertArgs} args - Arguments to update or create a TblBudget.
     * @example
     * // Update or create a TblBudget
     * const tblBudget = await prisma.tblBudget.upsert({
     *   create: {
     *     // ... data to create a TblBudget
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblBudget we want to update
     *   }
     * })
     */
    upsert<T extends tblBudgetUpsertArgs>(args: SelectSubset<T, tblBudgetUpsertArgs<ExtArgs>>): Prisma__tblBudgetClient<$Result.GetResult<Prisma.$tblBudgetPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TblBudgets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBudgetCountArgs} args - Arguments to filter TblBudgets to count.
     * @example
     * // Count the number of TblBudgets
     * const count = await prisma.tblBudget.count({
     *   where: {
     *     // ... the filter for the TblBudgets we want to count
     *   }
     * })
    **/
    count<T extends tblBudgetCountArgs>(
      args?: Subset<T, tblBudgetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblBudgetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblBudgetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblBudgetAggregateArgs>(args: Subset<T, TblBudgetAggregateArgs>): Prisma.PrismaPromise<GetTblBudgetAggregateType<T>>

    /**
     * Group by TblBudget.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblBudgetGroupByArgs} args - Group by arguments.
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
      T extends tblBudgetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblBudgetGroupByArgs['orderBy'] }
        : { orderBy?: tblBudgetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tblBudgetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblBudgetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblBudget model
   */
  readonly fields: tblBudgetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblBudget.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblBudgetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tblBudget model
   */ 
  interface tblBudgetFieldRefs {
    readonly BudgetIDP: FieldRef<"tblBudget", 'BigInt'>
    readonly FinancialYearID: FieldRef<"tblBudget", 'Int'>
    readonly ExpenseHeadIDF: FieldRef<"tblBudget", 'BigInt'>
    readonly BudgetAmount: FieldRef<"tblBudget", 'Decimal'>
    readonly Remarks: FieldRef<"tblBudget", 'String'>
    readonly IsDeleted: FieldRef<"tblBudget", 'Boolean'>
    readonly EntryBy: FieldRef<"tblBudget", 'BigInt'>
    readonly EntryDate: FieldRef<"tblBudget", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tblBudget findUnique
   */
  export type tblBudgetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * Filter, which tblBudget to fetch.
     */
    where: tblBudgetWhereUniqueInput
  }

  /**
   * tblBudget findUniqueOrThrow
   */
  export type tblBudgetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * Filter, which tblBudget to fetch.
     */
    where: tblBudgetWhereUniqueInput
  }

  /**
   * tblBudget findFirst
   */
  export type tblBudgetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * Filter, which tblBudget to fetch.
     */
    where?: tblBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblBudgets to fetch.
     */
    orderBy?: tblBudgetOrderByWithRelationInput | tblBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblBudgets.
     */
    cursor?: tblBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblBudgets.
     */
    distinct?: TblBudgetScalarFieldEnum | TblBudgetScalarFieldEnum[]
  }

  /**
   * tblBudget findFirstOrThrow
   */
  export type tblBudgetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * Filter, which tblBudget to fetch.
     */
    where?: tblBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblBudgets to fetch.
     */
    orderBy?: tblBudgetOrderByWithRelationInput | tblBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblBudgets.
     */
    cursor?: tblBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblBudgets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblBudgets.
     */
    distinct?: TblBudgetScalarFieldEnum | TblBudgetScalarFieldEnum[]
  }

  /**
   * tblBudget findMany
   */
  export type tblBudgetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * Filter, which tblBudgets to fetch.
     */
    where?: tblBudgetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblBudgets to fetch.
     */
    orderBy?: tblBudgetOrderByWithRelationInput | tblBudgetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblBudgets.
     */
    cursor?: tblBudgetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblBudgets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblBudgets.
     */
    skip?: number
    distinct?: TblBudgetScalarFieldEnum | TblBudgetScalarFieldEnum[]
  }

  /**
   * tblBudget create
   */
  export type tblBudgetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * The data needed to create a tblBudget.
     */
    data: XOR<tblBudgetCreateInput, tblBudgetUncheckedCreateInput>
  }

  /**
   * tblBudget createMany
   */
  export type tblBudgetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblBudgets.
     */
    data: tblBudgetCreateManyInput | tblBudgetCreateManyInput[]
  }

  /**
   * tblBudget update
   */
  export type tblBudgetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * The data needed to update a tblBudget.
     */
    data: XOR<tblBudgetUpdateInput, tblBudgetUncheckedUpdateInput>
    /**
     * Choose, which tblBudget to update.
     */
    where: tblBudgetWhereUniqueInput
  }

  /**
   * tblBudget updateMany
   */
  export type tblBudgetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblBudgets.
     */
    data: XOR<tblBudgetUpdateManyMutationInput, tblBudgetUncheckedUpdateManyInput>
    /**
     * Filter which tblBudgets to update
     */
    where?: tblBudgetWhereInput
  }

  /**
   * tblBudget upsert
   */
  export type tblBudgetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * The filter to search for the tblBudget to update in case it exists.
     */
    where: tblBudgetWhereUniqueInput
    /**
     * In case the tblBudget found by the `where` argument doesn't exist, create a new tblBudget with this data.
     */
    create: XOR<tblBudgetCreateInput, tblBudgetUncheckedCreateInput>
    /**
     * In case the tblBudget was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblBudgetUpdateInput, tblBudgetUncheckedUpdateInput>
  }

  /**
   * tblBudget delete
   */
  export type tblBudgetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
    /**
     * Filter which tblBudget to delete.
     */
    where: tblBudgetWhereUniqueInput
  }

  /**
   * tblBudget deleteMany
   */
  export type tblBudgetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblBudgets to delete
     */
    where?: tblBudgetWhereInput
  }

  /**
   * tblBudget without action
   */
  export type tblBudgetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblBudget
     */
    select?: tblBudgetSelect<ExtArgs> | null
  }


  /**
   * Model tblDocument
   */

  export type AggregateTblDocument = {
    _count: TblDocumentCountAggregateOutputType | null
    _avg: TblDocumentAvgAggregateOutputType | null
    _sum: TblDocumentSumAggregateOutputType | null
    _min: TblDocumentMinAggregateOutputType | null
    _max: TblDocumentMaxAggregateOutputType | null
  }

  export type TblDocumentAvgAggregateOutputType = {
    DocumentIDP: number | null
    StudentIDF: number | null
    DocumentTypeID: number | null
    EntryBy: number | null
  }

  export type TblDocumentSumAggregateOutputType = {
    DocumentIDP: bigint | null
    StudentIDF: bigint | null
    DocumentTypeID: number | null
    EntryBy: bigint | null
  }

  export type TblDocumentMinAggregateOutputType = {
    DocumentIDP: bigint | null
    StudentIDF: bigint | null
    DocumentTypeID: number | null
    Attachment: string | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblDocumentMaxAggregateOutputType = {
    DocumentIDP: bigint | null
    StudentIDF: bigint | null
    DocumentTypeID: number | null
    Attachment: string | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblDocumentCountAggregateOutputType = {
    DocumentIDP: number
    StudentIDF: number
    DocumentTypeID: number
    Attachment: number
    IsDelete: number
    EntryBy: number
    EntryDate: number
    _all: number
  }


  export type TblDocumentAvgAggregateInputType = {
    DocumentIDP?: true
    StudentIDF?: true
    DocumentTypeID?: true
    EntryBy?: true
  }

  export type TblDocumentSumAggregateInputType = {
    DocumentIDP?: true
    StudentIDF?: true
    DocumentTypeID?: true
    EntryBy?: true
  }

  export type TblDocumentMinAggregateInputType = {
    DocumentIDP?: true
    StudentIDF?: true
    DocumentTypeID?: true
    Attachment?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblDocumentMaxAggregateInputType = {
    DocumentIDP?: true
    StudentIDF?: true
    DocumentTypeID?: true
    Attachment?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblDocumentCountAggregateInputType = {
    DocumentIDP?: true
    StudentIDF?: true
    DocumentTypeID?: true
    Attachment?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
    _all?: true
  }

  export type TblDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblDocument to aggregate.
     */
    where?: tblDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblDocuments to fetch.
     */
    orderBy?: tblDocumentOrderByWithRelationInput | tblDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblDocuments
    **/
    _count?: true | TblDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblDocumentMaxAggregateInputType
  }

  export type GetTblDocumentAggregateType<T extends TblDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateTblDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblDocument[P]>
      : GetScalarType<T[P], AggregateTblDocument[P]>
  }




  export type tblDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblDocumentWhereInput
    orderBy?: tblDocumentOrderByWithAggregationInput | tblDocumentOrderByWithAggregationInput[]
    by: TblDocumentScalarFieldEnum[] | TblDocumentScalarFieldEnum
    having?: tblDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblDocumentCountAggregateInputType | true
    _avg?: TblDocumentAvgAggregateInputType
    _sum?: TblDocumentSumAggregateInputType
    _min?: TblDocumentMinAggregateInputType
    _max?: TblDocumentMaxAggregateInputType
  }

  export type TblDocumentGroupByOutputType = {
    DocumentIDP: bigint
    StudentIDF: bigint
    DocumentTypeID: number | null
    Attachment: string | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
    _count: TblDocumentCountAggregateOutputType | null
    _avg: TblDocumentAvgAggregateOutputType | null
    _sum: TblDocumentSumAggregateOutputType | null
    _min: TblDocumentMinAggregateOutputType | null
    _max: TblDocumentMaxAggregateOutputType | null
  }

  type GetTblDocumentGroupByPayload<T extends tblDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], TblDocumentGroupByOutputType[P]>
        }
      >
    >


  export type tblDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    DocumentIDP?: boolean
    StudentIDF?: boolean
    DocumentTypeID?: boolean
    Attachment?: boolean
    IsDelete?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }, ExtArgs["result"]["tblDocument"]>


  export type tblDocumentSelectScalar = {
    DocumentIDP?: boolean
    StudentIDF?: boolean
    DocumentTypeID?: boolean
    Attachment?: boolean
    IsDelete?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }


  export type $tblDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblDocument"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      DocumentIDP: bigint
      StudentIDF: bigint
      DocumentTypeID: number | null
      Attachment: string | null
      IsDelete: boolean | null
      EntryBy: bigint | null
      EntryDate: Date | null
    }, ExtArgs["result"]["tblDocument"]>
    composites: {}
  }

  type tblDocumentGetPayload<S extends boolean | null | undefined | tblDocumentDefaultArgs> = $Result.GetResult<Prisma.$tblDocumentPayload, S>

  type tblDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblDocumentCountAggregateInputType | true
    }

  export interface tblDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblDocument'], meta: { name: 'tblDocument' } }
    /**
     * Find zero or one TblDocument that matches the filter.
     * @param {tblDocumentFindUniqueArgs} args - Arguments to find a TblDocument
     * @example
     * // Get one TblDocument
     * const tblDocument = await prisma.tblDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblDocumentFindUniqueArgs>(args: SelectSubset<T, tblDocumentFindUniqueArgs<ExtArgs>>): Prisma__tblDocumentClient<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TblDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblDocumentFindUniqueOrThrowArgs} args - Arguments to find a TblDocument
     * @example
     * // Get one TblDocument
     * const tblDocument = await prisma.tblDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, tblDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblDocumentClient<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TblDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDocumentFindFirstArgs} args - Arguments to find a TblDocument
     * @example
     * // Get one TblDocument
     * const tblDocument = await prisma.tblDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblDocumentFindFirstArgs>(args?: SelectSubset<T, tblDocumentFindFirstArgs<ExtArgs>>): Prisma__tblDocumentClient<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TblDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDocumentFindFirstOrThrowArgs} args - Arguments to find a TblDocument
     * @example
     * // Get one TblDocument
     * const tblDocument = await prisma.tblDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, tblDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblDocumentClient<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TblDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblDocuments
     * const tblDocuments = await prisma.tblDocument.findMany()
     * 
     * // Get first 10 TblDocuments
     * const tblDocuments = await prisma.tblDocument.findMany({ take: 10 })
     * 
     * // Only select the `DocumentIDP`
     * const tblDocumentWithDocumentIDPOnly = await prisma.tblDocument.findMany({ select: { DocumentIDP: true } })
     * 
     */
    findMany<T extends tblDocumentFindManyArgs>(args?: SelectSubset<T, tblDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TblDocument.
     * @param {tblDocumentCreateArgs} args - Arguments to create a TblDocument.
     * @example
     * // Create one TblDocument
     * const TblDocument = await prisma.tblDocument.create({
     *   data: {
     *     // ... data to create a TblDocument
     *   }
     * })
     * 
     */
    create<T extends tblDocumentCreateArgs>(args: SelectSubset<T, tblDocumentCreateArgs<ExtArgs>>): Prisma__tblDocumentClient<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TblDocuments.
     * @param {tblDocumentCreateManyArgs} args - Arguments to create many TblDocuments.
     * @example
     * // Create many TblDocuments
     * const tblDocument = await prisma.tblDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblDocumentCreateManyArgs>(args?: SelectSubset<T, tblDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblDocument.
     * @param {tblDocumentDeleteArgs} args - Arguments to delete one TblDocument.
     * @example
     * // Delete one TblDocument
     * const TblDocument = await prisma.tblDocument.delete({
     *   where: {
     *     // ... filter to delete one TblDocument
     *   }
     * })
     * 
     */
    delete<T extends tblDocumentDeleteArgs>(args: SelectSubset<T, tblDocumentDeleteArgs<ExtArgs>>): Prisma__tblDocumentClient<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TblDocument.
     * @param {tblDocumentUpdateArgs} args - Arguments to update one TblDocument.
     * @example
     * // Update one TblDocument
     * const tblDocument = await prisma.tblDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblDocumentUpdateArgs>(args: SelectSubset<T, tblDocumentUpdateArgs<ExtArgs>>): Prisma__tblDocumentClient<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TblDocuments.
     * @param {tblDocumentDeleteManyArgs} args - Arguments to filter TblDocuments to delete.
     * @example
     * // Delete a few TblDocuments
     * const { count } = await prisma.tblDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblDocumentDeleteManyArgs>(args?: SelectSubset<T, tblDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblDocuments
     * const tblDocument = await prisma.tblDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblDocumentUpdateManyArgs>(args: SelectSubset<T, tblDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblDocument.
     * @param {tblDocumentUpsertArgs} args - Arguments to update or create a TblDocument.
     * @example
     * // Update or create a TblDocument
     * const tblDocument = await prisma.tblDocument.upsert({
     *   create: {
     *     // ... data to create a TblDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblDocument we want to update
     *   }
     * })
     */
    upsert<T extends tblDocumentUpsertArgs>(args: SelectSubset<T, tblDocumentUpsertArgs<ExtArgs>>): Prisma__tblDocumentClient<$Result.GetResult<Prisma.$tblDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TblDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDocumentCountArgs} args - Arguments to filter TblDocuments to count.
     * @example
     * // Count the number of TblDocuments
     * const count = await prisma.tblDocument.count({
     *   where: {
     *     // ... the filter for the TblDocuments we want to count
     *   }
     * })
    **/
    count<T extends tblDocumentCountArgs>(
      args?: Subset<T, tblDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblDocumentAggregateArgs>(args: Subset<T, TblDocumentAggregateArgs>): Prisma.PrismaPromise<GetTblDocumentAggregateType<T>>

    /**
     * Group by TblDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblDocumentGroupByArgs} args - Group by arguments.
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
      T extends tblDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblDocumentGroupByArgs['orderBy'] }
        : { orderBy?: tblDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tblDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblDocument model
   */
  readonly fields: tblDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tblDocument model
   */ 
  interface tblDocumentFieldRefs {
    readonly DocumentIDP: FieldRef<"tblDocument", 'BigInt'>
    readonly StudentIDF: FieldRef<"tblDocument", 'BigInt'>
    readonly DocumentTypeID: FieldRef<"tblDocument", 'Int'>
    readonly Attachment: FieldRef<"tblDocument", 'String'>
    readonly IsDelete: FieldRef<"tblDocument", 'Boolean'>
    readonly EntryBy: FieldRef<"tblDocument", 'BigInt'>
    readonly EntryDate: FieldRef<"tblDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tblDocument findUnique
   */
  export type tblDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * Filter, which tblDocument to fetch.
     */
    where: tblDocumentWhereUniqueInput
  }

  /**
   * tblDocument findUniqueOrThrow
   */
  export type tblDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * Filter, which tblDocument to fetch.
     */
    where: tblDocumentWhereUniqueInput
  }

  /**
   * tblDocument findFirst
   */
  export type tblDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * Filter, which tblDocument to fetch.
     */
    where?: tblDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblDocuments to fetch.
     */
    orderBy?: tblDocumentOrderByWithRelationInput | tblDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblDocuments.
     */
    cursor?: tblDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblDocuments.
     */
    distinct?: TblDocumentScalarFieldEnum | TblDocumentScalarFieldEnum[]
  }

  /**
   * tblDocument findFirstOrThrow
   */
  export type tblDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * Filter, which tblDocument to fetch.
     */
    where?: tblDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblDocuments to fetch.
     */
    orderBy?: tblDocumentOrderByWithRelationInput | tblDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblDocuments.
     */
    cursor?: tblDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblDocuments.
     */
    distinct?: TblDocumentScalarFieldEnum | TblDocumentScalarFieldEnum[]
  }

  /**
   * tblDocument findMany
   */
  export type tblDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * Filter, which tblDocuments to fetch.
     */
    where?: tblDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblDocuments to fetch.
     */
    orderBy?: tblDocumentOrderByWithRelationInput | tblDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblDocuments.
     */
    cursor?: tblDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblDocuments.
     */
    skip?: number
    distinct?: TblDocumentScalarFieldEnum | TblDocumentScalarFieldEnum[]
  }

  /**
   * tblDocument create
   */
  export type tblDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * The data needed to create a tblDocument.
     */
    data: XOR<tblDocumentCreateInput, tblDocumentUncheckedCreateInput>
  }

  /**
   * tblDocument createMany
   */
  export type tblDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblDocuments.
     */
    data: tblDocumentCreateManyInput | tblDocumentCreateManyInput[]
  }

  /**
   * tblDocument update
   */
  export type tblDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * The data needed to update a tblDocument.
     */
    data: XOR<tblDocumentUpdateInput, tblDocumentUncheckedUpdateInput>
    /**
     * Choose, which tblDocument to update.
     */
    where: tblDocumentWhereUniqueInput
  }

  /**
   * tblDocument updateMany
   */
  export type tblDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblDocuments.
     */
    data: XOR<tblDocumentUpdateManyMutationInput, tblDocumentUncheckedUpdateManyInput>
    /**
     * Filter which tblDocuments to update
     */
    where?: tblDocumentWhereInput
  }

  /**
   * tblDocument upsert
   */
  export type tblDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * The filter to search for the tblDocument to update in case it exists.
     */
    where: tblDocumentWhereUniqueInput
    /**
     * In case the tblDocument found by the `where` argument doesn't exist, create a new tblDocument with this data.
     */
    create: XOR<tblDocumentCreateInput, tblDocumentUncheckedCreateInput>
    /**
     * In case the tblDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblDocumentUpdateInput, tblDocumentUncheckedUpdateInput>
  }

  /**
   * tblDocument delete
   */
  export type tblDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
    /**
     * Filter which tblDocument to delete.
     */
    where: tblDocumentWhereUniqueInput
  }

  /**
   * tblDocument deleteMany
   */
  export type tblDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblDocuments to delete
     */
    where?: tblDocumentWhereInput
  }

  /**
   * tblDocument without action
   */
  export type tblDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblDocument
     */
    select?: tblDocumentSelect<ExtArgs> | null
  }


  /**
   * Model tblExpense
   */

  export type AggregateTblExpense = {
    _count: TblExpenseCountAggregateOutputType | null
    _avg: TblExpenseAvgAggregateOutputType | null
    _sum: TblExpenseSumAggregateOutputType | null
    _min: TblExpenseMinAggregateOutputType | null
    _max: TblExpenseMaxAggregateOutputType | null
  }

  export type TblExpenseAvgAggregateOutputType = {
    ExpenseIDP: number | null
    ExpenseHeadIDF: number | null
    Amount: Decimal | null
    EntryBy: number | null
  }

  export type TblExpenseSumAggregateOutputType = {
    ExpenseIDP: bigint | null
    ExpenseHeadIDF: bigint | null
    Amount: Decimal | null
    EntryBy: bigint | null
  }

  export type TblExpenseMinAggregateOutputType = {
    ExpenseIDP: bigint | null
    ExpenseHeadIDF: bigint | null
    ExpenseDate: Date | null
    Amount: Decimal | null
    Remarks: string | null
    IsDeleted: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblExpenseMaxAggregateOutputType = {
    ExpenseIDP: bigint | null
    ExpenseHeadIDF: bigint | null
    ExpenseDate: Date | null
    Amount: Decimal | null
    Remarks: string | null
    IsDeleted: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblExpenseCountAggregateOutputType = {
    ExpenseIDP: number
    ExpenseHeadIDF: number
    ExpenseDate: number
    Amount: number
    Remarks: number
    IsDeleted: number
    EntryBy: number
    EntryDate: number
    _all: number
  }


  export type TblExpenseAvgAggregateInputType = {
    ExpenseIDP?: true
    ExpenseHeadIDF?: true
    Amount?: true
    EntryBy?: true
  }

  export type TblExpenseSumAggregateInputType = {
    ExpenseIDP?: true
    ExpenseHeadIDF?: true
    Amount?: true
    EntryBy?: true
  }

  export type TblExpenseMinAggregateInputType = {
    ExpenseIDP?: true
    ExpenseHeadIDF?: true
    ExpenseDate?: true
    Amount?: true
    Remarks?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblExpenseMaxAggregateInputType = {
    ExpenseIDP?: true
    ExpenseHeadIDF?: true
    ExpenseDate?: true
    Amount?: true
    Remarks?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblExpenseCountAggregateInputType = {
    ExpenseIDP?: true
    ExpenseHeadIDF?: true
    ExpenseDate?: true
    Amount?: true
    Remarks?: true
    IsDeleted?: true
    EntryBy?: true
    EntryDate?: true
    _all?: true
  }

  export type TblExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblExpense to aggregate.
     */
    where?: tblExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblExpenses to fetch.
     */
    orderBy?: tblExpenseOrderByWithRelationInput | tblExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblExpenses
    **/
    _count?: true | TblExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblExpenseMaxAggregateInputType
  }

  export type GetTblExpenseAggregateType<T extends TblExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateTblExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblExpense[P]>
      : GetScalarType<T[P], AggregateTblExpense[P]>
  }




  export type tblExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblExpenseWhereInput
    orderBy?: tblExpenseOrderByWithAggregationInput | tblExpenseOrderByWithAggregationInput[]
    by: TblExpenseScalarFieldEnum[] | TblExpenseScalarFieldEnum
    having?: tblExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblExpenseCountAggregateInputType | true
    _avg?: TblExpenseAvgAggregateInputType
    _sum?: TblExpenseSumAggregateInputType
    _min?: TblExpenseMinAggregateInputType
    _max?: TblExpenseMaxAggregateInputType
  }

  export type TblExpenseGroupByOutputType = {
    ExpenseIDP: bigint
    ExpenseHeadIDF: bigint
    ExpenseDate: Date
    Amount: Decimal
    Remarks: string | null
    IsDeleted: boolean | null
    EntryBy: bigint
    EntryDate: Date
    _count: TblExpenseCountAggregateOutputType | null
    _avg: TblExpenseAvgAggregateOutputType | null
    _sum: TblExpenseSumAggregateOutputType | null
    _min: TblExpenseMinAggregateOutputType | null
    _max: TblExpenseMaxAggregateOutputType | null
  }

  type GetTblExpenseGroupByPayload<T extends tblExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], TblExpenseGroupByOutputType[P]>
        }
      >
    >


  export type tblExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ExpenseIDP?: boolean
    ExpenseHeadIDF?: boolean
    ExpenseDate?: boolean
    Amount?: boolean
    Remarks?: boolean
    IsDeleted?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }, ExtArgs["result"]["tblExpense"]>


  export type tblExpenseSelectScalar = {
    ExpenseIDP?: boolean
    ExpenseHeadIDF?: boolean
    ExpenseDate?: boolean
    Amount?: boolean
    Remarks?: boolean
    IsDeleted?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }


  export type $tblExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblExpense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ExpenseIDP: bigint
      ExpenseHeadIDF: bigint
      ExpenseDate: Date
      Amount: Prisma.Decimal
      Remarks: string | null
      IsDeleted: boolean | null
      EntryBy: bigint
      EntryDate: Date
    }, ExtArgs["result"]["tblExpense"]>
    composites: {}
  }

  type tblExpenseGetPayload<S extends boolean | null | undefined | tblExpenseDefaultArgs> = $Result.GetResult<Prisma.$tblExpensePayload, S>

  type tblExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblExpenseFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblExpenseCountAggregateInputType | true
    }

  export interface tblExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblExpense'], meta: { name: 'tblExpense' } }
    /**
     * Find zero or one TblExpense that matches the filter.
     * @param {tblExpenseFindUniqueArgs} args - Arguments to find a TblExpense
     * @example
     * // Get one TblExpense
     * const tblExpense = await prisma.tblExpense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblExpenseFindUniqueArgs>(args: SelectSubset<T, tblExpenseFindUniqueArgs<ExtArgs>>): Prisma__tblExpenseClient<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TblExpense that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblExpenseFindUniqueOrThrowArgs} args - Arguments to find a TblExpense
     * @example
     * // Get one TblExpense
     * const tblExpense = await prisma.tblExpense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, tblExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblExpenseClient<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TblExpense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblExpenseFindFirstArgs} args - Arguments to find a TblExpense
     * @example
     * // Get one TblExpense
     * const tblExpense = await prisma.tblExpense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblExpenseFindFirstArgs>(args?: SelectSubset<T, tblExpenseFindFirstArgs<ExtArgs>>): Prisma__tblExpenseClient<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TblExpense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblExpenseFindFirstOrThrowArgs} args - Arguments to find a TblExpense
     * @example
     * // Get one TblExpense
     * const tblExpense = await prisma.tblExpense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, tblExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblExpenseClient<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TblExpenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblExpenses
     * const tblExpenses = await prisma.tblExpense.findMany()
     * 
     * // Get first 10 TblExpenses
     * const tblExpenses = await prisma.tblExpense.findMany({ take: 10 })
     * 
     * // Only select the `ExpenseIDP`
     * const tblExpenseWithExpenseIDPOnly = await prisma.tblExpense.findMany({ select: { ExpenseIDP: true } })
     * 
     */
    findMany<T extends tblExpenseFindManyArgs>(args?: SelectSubset<T, tblExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TblExpense.
     * @param {tblExpenseCreateArgs} args - Arguments to create a TblExpense.
     * @example
     * // Create one TblExpense
     * const TblExpense = await prisma.tblExpense.create({
     *   data: {
     *     // ... data to create a TblExpense
     *   }
     * })
     * 
     */
    create<T extends tblExpenseCreateArgs>(args: SelectSubset<T, tblExpenseCreateArgs<ExtArgs>>): Prisma__tblExpenseClient<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TblExpenses.
     * @param {tblExpenseCreateManyArgs} args - Arguments to create many TblExpenses.
     * @example
     * // Create many TblExpenses
     * const tblExpense = await prisma.tblExpense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblExpenseCreateManyArgs>(args?: SelectSubset<T, tblExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblExpense.
     * @param {tblExpenseDeleteArgs} args - Arguments to delete one TblExpense.
     * @example
     * // Delete one TblExpense
     * const TblExpense = await prisma.tblExpense.delete({
     *   where: {
     *     // ... filter to delete one TblExpense
     *   }
     * })
     * 
     */
    delete<T extends tblExpenseDeleteArgs>(args: SelectSubset<T, tblExpenseDeleteArgs<ExtArgs>>): Prisma__tblExpenseClient<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TblExpense.
     * @param {tblExpenseUpdateArgs} args - Arguments to update one TblExpense.
     * @example
     * // Update one TblExpense
     * const tblExpense = await prisma.tblExpense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblExpenseUpdateArgs>(args: SelectSubset<T, tblExpenseUpdateArgs<ExtArgs>>): Prisma__tblExpenseClient<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TblExpenses.
     * @param {tblExpenseDeleteManyArgs} args - Arguments to filter TblExpenses to delete.
     * @example
     * // Delete a few TblExpenses
     * const { count } = await prisma.tblExpense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblExpenseDeleteManyArgs>(args?: SelectSubset<T, tblExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblExpenses
     * const tblExpense = await prisma.tblExpense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblExpenseUpdateManyArgs>(args: SelectSubset<T, tblExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblExpense.
     * @param {tblExpenseUpsertArgs} args - Arguments to update or create a TblExpense.
     * @example
     * // Update or create a TblExpense
     * const tblExpense = await prisma.tblExpense.upsert({
     *   create: {
     *     // ... data to create a TblExpense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblExpense we want to update
     *   }
     * })
     */
    upsert<T extends tblExpenseUpsertArgs>(args: SelectSubset<T, tblExpenseUpsertArgs<ExtArgs>>): Prisma__tblExpenseClient<$Result.GetResult<Prisma.$tblExpensePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TblExpenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblExpenseCountArgs} args - Arguments to filter TblExpenses to count.
     * @example
     * // Count the number of TblExpenses
     * const count = await prisma.tblExpense.count({
     *   where: {
     *     // ... the filter for the TblExpenses we want to count
     *   }
     * })
    **/
    count<T extends tblExpenseCountArgs>(
      args?: Subset<T, tblExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblExpenseAggregateArgs>(args: Subset<T, TblExpenseAggregateArgs>): Prisma.PrismaPromise<GetTblExpenseAggregateType<T>>

    /**
     * Group by TblExpense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblExpenseGroupByArgs} args - Group by arguments.
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
      T extends tblExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblExpenseGroupByArgs['orderBy'] }
        : { orderBy?: tblExpenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tblExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblExpense model
   */
  readonly fields: tblExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblExpense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tblExpense model
   */ 
  interface tblExpenseFieldRefs {
    readonly ExpenseIDP: FieldRef<"tblExpense", 'BigInt'>
    readonly ExpenseHeadIDF: FieldRef<"tblExpense", 'BigInt'>
    readonly ExpenseDate: FieldRef<"tblExpense", 'DateTime'>
    readonly Amount: FieldRef<"tblExpense", 'Decimal'>
    readonly Remarks: FieldRef<"tblExpense", 'String'>
    readonly IsDeleted: FieldRef<"tblExpense", 'Boolean'>
    readonly EntryBy: FieldRef<"tblExpense", 'BigInt'>
    readonly EntryDate: FieldRef<"tblExpense", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tblExpense findUnique
   */
  export type tblExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * Filter, which tblExpense to fetch.
     */
    where: tblExpenseWhereUniqueInput
  }

  /**
   * tblExpense findUniqueOrThrow
   */
  export type tblExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * Filter, which tblExpense to fetch.
     */
    where: tblExpenseWhereUniqueInput
  }

  /**
   * tblExpense findFirst
   */
  export type tblExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * Filter, which tblExpense to fetch.
     */
    where?: tblExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblExpenses to fetch.
     */
    orderBy?: tblExpenseOrderByWithRelationInput | tblExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblExpenses.
     */
    cursor?: tblExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblExpenses.
     */
    distinct?: TblExpenseScalarFieldEnum | TblExpenseScalarFieldEnum[]
  }

  /**
   * tblExpense findFirstOrThrow
   */
  export type tblExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * Filter, which tblExpense to fetch.
     */
    where?: tblExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblExpenses to fetch.
     */
    orderBy?: tblExpenseOrderByWithRelationInput | tblExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblExpenses.
     */
    cursor?: tblExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblExpenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblExpenses.
     */
    distinct?: TblExpenseScalarFieldEnum | TblExpenseScalarFieldEnum[]
  }

  /**
   * tblExpense findMany
   */
  export type tblExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * Filter, which tblExpenses to fetch.
     */
    where?: tblExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblExpenses to fetch.
     */
    orderBy?: tblExpenseOrderByWithRelationInput | tblExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblExpenses.
     */
    cursor?: tblExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblExpenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblExpenses.
     */
    skip?: number
    distinct?: TblExpenseScalarFieldEnum | TblExpenseScalarFieldEnum[]
  }

  /**
   * tblExpense create
   */
  export type tblExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * The data needed to create a tblExpense.
     */
    data: XOR<tblExpenseCreateInput, tblExpenseUncheckedCreateInput>
  }

  /**
   * tblExpense createMany
   */
  export type tblExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblExpenses.
     */
    data: tblExpenseCreateManyInput | tblExpenseCreateManyInput[]
  }

  /**
   * tblExpense update
   */
  export type tblExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * The data needed to update a tblExpense.
     */
    data: XOR<tblExpenseUpdateInput, tblExpenseUncheckedUpdateInput>
    /**
     * Choose, which tblExpense to update.
     */
    where: tblExpenseWhereUniqueInput
  }

  /**
   * tblExpense updateMany
   */
  export type tblExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblExpenses.
     */
    data: XOR<tblExpenseUpdateManyMutationInput, tblExpenseUncheckedUpdateManyInput>
    /**
     * Filter which tblExpenses to update
     */
    where?: tblExpenseWhereInput
  }

  /**
   * tblExpense upsert
   */
  export type tblExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * The filter to search for the tblExpense to update in case it exists.
     */
    where: tblExpenseWhereUniqueInput
    /**
     * In case the tblExpense found by the `where` argument doesn't exist, create a new tblExpense with this data.
     */
    create: XOR<tblExpenseCreateInput, tblExpenseUncheckedCreateInput>
    /**
     * In case the tblExpense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblExpenseUpdateInput, tblExpenseUncheckedUpdateInput>
  }

  /**
   * tblExpense delete
   */
  export type tblExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
    /**
     * Filter which tblExpense to delete.
     */
    where: tblExpenseWhereUniqueInput
  }

  /**
   * tblExpense deleteMany
   */
  export type tblExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblExpenses to delete
     */
    where?: tblExpenseWhereInput
  }

  /**
   * tblExpense without action
   */
  export type tblExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblExpense
     */
    select?: tblExpenseSelect<ExtArgs> | null
  }


  /**
   * Model tblFees
   */

  export type AggregateTblFees = {
    _count: TblFeesCountAggregateOutputType | null
    _avg: TblFeesAvgAggregateOutputType | null
    _sum: TblFeesSumAggregateOutputType | null
    _min: TblFeesMinAggregateOutputType | null
    _max: TblFeesMaxAggregateOutputType | null
  }

  export type TblFeesAvgAggregateOutputType = {
    FeesIDP: number | null
    StudentIDF: number | null
    TermID: number | null
    TermEntryID: number | null
    ReceiptAmount: Decimal | null
  }

  export type TblFeesSumAggregateOutputType = {
    FeesIDP: bigint | null
    StudentIDF: bigint | null
    TermID: number | null
    TermEntryID: number | null
    ReceiptAmount: Decimal | null
  }

  export type TblFeesMinAggregateOutputType = {
    FeesIDP: bigint | null
    StudentIDF: bigint | null
    TermID: number | null
    TermEntryID: number | null
    ReceiptDate: Date | null
    ReceiptAmount: Decimal | null
    Remarks: string | null
  }

  export type TblFeesMaxAggregateOutputType = {
    FeesIDP: bigint | null
    StudentIDF: bigint | null
    TermID: number | null
    TermEntryID: number | null
    ReceiptDate: Date | null
    ReceiptAmount: Decimal | null
    Remarks: string | null
  }

  export type TblFeesCountAggregateOutputType = {
    FeesIDP: number
    StudentIDF: number
    TermID: number
    TermEntryID: number
    ReceiptDate: number
    ReceiptAmount: number
    Remarks: number
    _all: number
  }


  export type TblFeesAvgAggregateInputType = {
    FeesIDP?: true
    StudentIDF?: true
    TermID?: true
    TermEntryID?: true
    ReceiptAmount?: true
  }

  export type TblFeesSumAggregateInputType = {
    FeesIDP?: true
    StudentIDF?: true
    TermID?: true
    TermEntryID?: true
    ReceiptAmount?: true
  }

  export type TblFeesMinAggregateInputType = {
    FeesIDP?: true
    StudentIDF?: true
    TermID?: true
    TermEntryID?: true
    ReceiptDate?: true
    ReceiptAmount?: true
    Remarks?: true
  }

  export type TblFeesMaxAggregateInputType = {
    FeesIDP?: true
    StudentIDF?: true
    TermID?: true
    TermEntryID?: true
    ReceiptDate?: true
    ReceiptAmount?: true
    Remarks?: true
  }

  export type TblFeesCountAggregateInputType = {
    FeesIDP?: true
    StudentIDF?: true
    TermID?: true
    TermEntryID?: true
    ReceiptDate?: true
    ReceiptAmount?: true
    Remarks?: true
    _all?: true
  }

  export type TblFeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblFees to aggregate.
     */
    where?: tblFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblFees to fetch.
     */
    orderBy?: tblFeesOrderByWithRelationInput | tblFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblFees
    **/
    _count?: true | TblFeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblFeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblFeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblFeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblFeesMaxAggregateInputType
  }

  export type GetTblFeesAggregateType<T extends TblFeesAggregateArgs> = {
        [P in keyof T & keyof AggregateTblFees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblFees[P]>
      : GetScalarType<T[P], AggregateTblFees[P]>
  }




  export type tblFeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblFeesWhereInput
    orderBy?: tblFeesOrderByWithAggregationInput | tblFeesOrderByWithAggregationInput[]
    by: TblFeesScalarFieldEnum[] | TblFeesScalarFieldEnum
    having?: tblFeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblFeesCountAggregateInputType | true
    _avg?: TblFeesAvgAggregateInputType
    _sum?: TblFeesSumAggregateInputType
    _min?: TblFeesMinAggregateInputType
    _max?: TblFeesMaxAggregateInputType
  }

  export type TblFeesGroupByOutputType = {
    FeesIDP: bigint
    StudentIDF: bigint
    TermID: number
    TermEntryID: number | null
    ReceiptDate: Date | null
    ReceiptAmount: Decimal | null
    Remarks: string | null
    _count: TblFeesCountAggregateOutputType | null
    _avg: TblFeesAvgAggregateOutputType | null
    _sum: TblFeesSumAggregateOutputType | null
    _min: TblFeesMinAggregateOutputType | null
    _max: TblFeesMaxAggregateOutputType | null
  }

  type GetTblFeesGroupByPayload<T extends tblFeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblFeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblFeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblFeesGroupByOutputType[P]>
            : GetScalarType<T[P], TblFeesGroupByOutputType[P]>
        }
      >
    >


  export type tblFeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    FeesIDP?: boolean
    StudentIDF?: boolean
    TermID?: boolean
    TermEntryID?: boolean
    ReceiptDate?: boolean
    ReceiptAmount?: boolean
    Remarks?: boolean
  }, ExtArgs["result"]["tblFees"]>


  export type tblFeesSelectScalar = {
    FeesIDP?: boolean
    StudentIDF?: boolean
    TermID?: boolean
    TermEntryID?: boolean
    ReceiptDate?: boolean
    ReceiptAmount?: boolean
    Remarks?: boolean
  }


  export type $tblFeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblFees"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      FeesIDP: bigint
      StudentIDF: bigint
      TermID: number
      TermEntryID: number | null
      ReceiptDate: Date | null
      ReceiptAmount: Prisma.Decimal | null
      Remarks: string | null
    }, ExtArgs["result"]["tblFees"]>
    composites: {}
  }

  type tblFeesGetPayload<S extends boolean | null | undefined | tblFeesDefaultArgs> = $Result.GetResult<Prisma.$tblFeesPayload, S>

  type tblFeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblFeesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblFeesCountAggregateInputType | true
    }

  export interface tblFeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblFees'], meta: { name: 'tblFees' } }
    /**
     * Find zero or one TblFees that matches the filter.
     * @param {tblFeesFindUniqueArgs} args - Arguments to find a TblFees
     * @example
     * // Get one TblFees
     * const tblFees = await prisma.tblFees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblFeesFindUniqueArgs>(args: SelectSubset<T, tblFeesFindUniqueArgs<ExtArgs>>): Prisma__tblFeesClient<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TblFees that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblFeesFindUniqueOrThrowArgs} args - Arguments to find a TblFees
     * @example
     * // Get one TblFees
     * const tblFees = await prisma.tblFees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblFeesFindUniqueOrThrowArgs>(args: SelectSubset<T, tblFeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblFeesClient<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TblFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblFeesFindFirstArgs} args - Arguments to find a TblFees
     * @example
     * // Get one TblFees
     * const tblFees = await prisma.tblFees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblFeesFindFirstArgs>(args?: SelectSubset<T, tblFeesFindFirstArgs<ExtArgs>>): Prisma__tblFeesClient<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TblFees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblFeesFindFirstOrThrowArgs} args - Arguments to find a TblFees
     * @example
     * // Get one TblFees
     * const tblFees = await prisma.tblFees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblFeesFindFirstOrThrowArgs>(args?: SelectSubset<T, tblFeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblFeesClient<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TblFees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblFeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblFees
     * const tblFees = await prisma.tblFees.findMany()
     * 
     * // Get first 10 TblFees
     * const tblFees = await prisma.tblFees.findMany({ take: 10 })
     * 
     * // Only select the `FeesIDP`
     * const tblFeesWithFeesIDPOnly = await prisma.tblFees.findMany({ select: { FeesIDP: true } })
     * 
     */
    findMany<T extends tblFeesFindManyArgs>(args?: SelectSubset<T, tblFeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TblFees.
     * @param {tblFeesCreateArgs} args - Arguments to create a TblFees.
     * @example
     * // Create one TblFees
     * const TblFees = await prisma.tblFees.create({
     *   data: {
     *     // ... data to create a TblFees
     *   }
     * })
     * 
     */
    create<T extends tblFeesCreateArgs>(args: SelectSubset<T, tblFeesCreateArgs<ExtArgs>>): Prisma__tblFeesClient<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TblFees.
     * @param {tblFeesCreateManyArgs} args - Arguments to create many TblFees.
     * @example
     * // Create many TblFees
     * const tblFees = await prisma.tblFees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblFeesCreateManyArgs>(args?: SelectSubset<T, tblFeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblFees.
     * @param {tblFeesDeleteArgs} args - Arguments to delete one TblFees.
     * @example
     * // Delete one TblFees
     * const TblFees = await prisma.tblFees.delete({
     *   where: {
     *     // ... filter to delete one TblFees
     *   }
     * })
     * 
     */
    delete<T extends tblFeesDeleteArgs>(args: SelectSubset<T, tblFeesDeleteArgs<ExtArgs>>): Prisma__tblFeesClient<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TblFees.
     * @param {tblFeesUpdateArgs} args - Arguments to update one TblFees.
     * @example
     * // Update one TblFees
     * const tblFees = await prisma.tblFees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblFeesUpdateArgs>(args: SelectSubset<T, tblFeesUpdateArgs<ExtArgs>>): Prisma__tblFeesClient<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TblFees.
     * @param {tblFeesDeleteManyArgs} args - Arguments to filter TblFees to delete.
     * @example
     * // Delete a few TblFees
     * const { count } = await prisma.tblFees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblFeesDeleteManyArgs>(args?: SelectSubset<T, tblFeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblFeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblFees
     * const tblFees = await prisma.tblFees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblFeesUpdateManyArgs>(args: SelectSubset<T, tblFeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblFees.
     * @param {tblFeesUpsertArgs} args - Arguments to update or create a TblFees.
     * @example
     * // Update or create a TblFees
     * const tblFees = await prisma.tblFees.upsert({
     *   create: {
     *     // ... data to create a TblFees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblFees we want to update
     *   }
     * })
     */
    upsert<T extends tblFeesUpsertArgs>(args: SelectSubset<T, tblFeesUpsertArgs<ExtArgs>>): Prisma__tblFeesClient<$Result.GetResult<Prisma.$tblFeesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TblFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblFeesCountArgs} args - Arguments to filter TblFees to count.
     * @example
     * // Count the number of TblFees
     * const count = await prisma.tblFees.count({
     *   where: {
     *     // ... the filter for the TblFees we want to count
     *   }
     * })
    **/
    count<T extends tblFeesCountArgs>(
      args?: Subset<T, tblFeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblFeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblFeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblFeesAggregateArgs>(args: Subset<T, TblFeesAggregateArgs>): Prisma.PrismaPromise<GetTblFeesAggregateType<T>>

    /**
     * Group by TblFees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblFeesGroupByArgs} args - Group by arguments.
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
      T extends tblFeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblFeesGroupByArgs['orderBy'] }
        : { orderBy?: tblFeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tblFeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblFeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblFees model
   */
  readonly fields: tblFeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblFees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblFeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tblFees model
   */ 
  interface tblFeesFieldRefs {
    readonly FeesIDP: FieldRef<"tblFees", 'BigInt'>
    readonly StudentIDF: FieldRef<"tblFees", 'BigInt'>
    readonly TermID: FieldRef<"tblFees", 'Int'>
    readonly TermEntryID: FieldRef<"tblFees", 'Int'>
    readonly ReceiptDate: FieldRef<"tblFees", 'DateTime'>
    readonly ReceiptAmount: FieldRef<"tblFees", 'Decimal'>
    readonly Remarks: FieldRef<"tblFees", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tblFees findUnique
   */
  export type tblFeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * Filter, which tblFees to fetch.
     */
    where: tblFeesWhereUniqueInput
  }

  /**
   * tblFees findUniqueOrThrow
   */
  export type tblFeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * Filter, which tblFees to fetch.
     */
    where: tblFeesWhereUniqueInput
  }

  /**
   * tblFees findFirst
   */
  export type tblFeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * Filter, which tblFees to fetch.
     */
    where?: tblFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblFees to fetch.
     */
    orderBy?: tblFeesOrderByWithRelationInput | tblFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblFees.
     */
    cursor?: tblFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblFees.
     */
    distinct?: TblFeesScalarFieldEnum | TblFeesScalarFieldEnum[]
  }

  /**
   * tblFees findFirstOrThrow
   */
  export type tblFeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * Filter, which tblFees to fetch.
     */
    where?: tblFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblFees to fetch.
     */
    orderBy?: tblFeesOrderByWithRelationInput | tblFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblFees.
     */
    cursor?: tblFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblFees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblFees.
     */
    distinct?: TblFeesScalarFieldEnum | TblFeesScalarFieldEnum[]
  }

  /**
   * tblFees findMany
   */
  export type tblFeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * Filter, which tblFees to fetch.
     */
    where?: tblFeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblFees to fetch.
     */
    orderBy?: tblFeesOrderByWithRelationInput | tblFeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblFees.
     */
    cursor?: tblFeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblFees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblFees.
     */
    skip?: number
    distinct?: TblFeesScalarFieldEnum | TblFeesScalarFieldEnum[]
  }

  /**
   * tblFees create
   */
  export type tblFeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * The data needed to create a tblFees.
     */
    data: XOR<tblFeesCreateInput, tblFeesUncheckedCreateInput>
  }

  /**
   * tblFees createMany
   */
  export type tblFeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblFees.
     */
    data: tblFeesCreateManyInput | tblFeesCreateManyInput[]
  }

  /**
   * tblFees update
   */
  export type tblFeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * The data needed to update a tblFees.
     */
    data: XOR<tblFeesUpdateInput, tblFeesUncheckedUpdateInput>
    /**
     * Choose, which tblFees to update.
     */
    where: tblFeesWhereUniqueInput
  }

  /**
   * tblFees updateMany
   */
  export type tblFeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblFees.
     */
    data: XOR<tblFeesUpdateManyMutationInput, tblFeesUncheckedUpdateManyInput>
    /**
     * Filter which tblFees to update
     */
    where?: tblFeesWhereInput
  }

  /**
   * tblFees upsert
   */
  export type tblFeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * The filter to search for the tblFees to update in case it exists.
     */
    where: tblFeesWhereUniqueInput
    /**
     * In case the tblFees found by the `where` argument doesn't exist, create a new tblFees with this data.
     */
    create: XOR<tblFeesCreateInput, tblFeesUncheckedCreateInput>
    /**
     * In case the tblFees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblFeesUpdateInput, tblFeesUncheckedUpdateInput>
  }

  /**
   * tblFees delete
   */
  export type tblFeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
    /**
     * Filter which tblFees to delete.
     */
    where: tblFeesWhereUniqueInput
  }

  /**
   * tblFees deleteMany
   */
  export type tblFeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblFees to delete
     */
    where?: tblFeesWhereInput
  }

  /**
   * tblFees without action
   */
  export type tblFeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblFees
     */
    select?: tblFeesSelect<ExtArgs> | null
  }


  /**
   * Model tblStaff
   */

  export type AggregateTblStaff = {
    _count: TblStaffCountAggregateOutputType | null
    _avg: TblStaffAvgAggregateOutputType | null
    _sum: TblStaffSumAggregateOutputType | null
    _min: TblStaffMinAggregateOutputType | null
    _max: TblStaffMaxAggregateOutputType | null
  }

  export type TblStaffAvgAggregateOutputType = {
    StaffIDP: number | null
    GenderID: number | null
    DesignationID: number | null
    DepartmentID: number | null
    StaffTypeID: number | null
    Age: number | null
    PromotionDesignationID: number | null
    AdharNumber: number | null
    Scale: number | null
    EntryBy: number | null
  }

  export type TblStaffSumAggregateOutputType = {
    StaffIDP: bigint | null
    GenderID: number | null
    DesignationID: number | null
    DepartmentID: number | null
    StaffTypeID: number | null
    Age: number | null
    PromotionDesignationID: number | null
    AdharNumber: bigint | null
    Scale: number | null
    EntryBy: bigint | null
  }

  export type TblStaffMinAggregateOutputType = {
    StaffIDP: bigint | null
    FullName: string | null
    MobileNo: string | null
    Email: string | null
    GenderID: number | null
    DesignationID: number | null
    DepartmentID: number | null
    StaffTypeID: number | null
    DateOfBirth: Date | null
    Age: number | null
    DateOfJoining: Date | null
    DateOfAddmission: Date | null
    CastandReligion: string | null
    Qualification: string | null
    UGPassingDate: Date | null
    UGCollageName: string | null
    UGUniversityName: string | null
    PGPassingDate: Date | null
    PGCollageName: string | null
    PGUniversityName: string | null
    StateRegNumber: string | null
    NCHRegNumber: string | null
    ExperienceDetail: string | null
    PromotionDate: Date | null
    PromotionDesignationID: number | null
    AdharNumber: bigint | null
    PANNumber: string | null
    PermanentAddress1: string | null
    PermanentAddress2: string | null
    PermanentCity: string | null
    PermanentDistrict: string | null
    PermanentState: string | null
    CurrentAddress1: string | null
    CurrentAddress2: string | null
    CurrentCity: string | null
    CurrentDistrict: string | null
    CurrentState: string | null
    RefferancePerson: string | null
    PassportPhoto: string | null
    SignPhoto: string | null
    Scale: number | null
    Password: string | null
    OTP: string | null
    Remark1: string | null
    Remark2: string | null
    IsActive: boolean | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblStaffMaxAggregateOutputType = {
    StaffIDP: bigint | null
    FullName: string | null
    MobileNo: string | null
    Email: string | null
    GenderID: number | null
    DesignationID: number | null
    DepartmentID: number | null
    StaffTypeID: number | null
    DateOfBirth: Date | null
    Age: number | null
    DateOfJoining: Date | null
    DateOfAddmission: Date | null
    CastandReligion: string | null
    Qualification: string | null
    UGPassingDate: Date | null
    UGCollageName: string | null
    UGUniversityName: string | null
    PGPassingDate: Date | null
    PGCollageName: string | null
    PGUniversityName: string | null
    StateRegNumber: string | null
    NCHRegNumber: string | null
    ExperienceDetail: string | null
    PromotionDate: Date | null
    PromotionDesignationID: number | null
    AdharNumber: bigint | null
    PANNumber: string | null
    PermanentAddress1: string | null
    PermanentAddress2: string | null
    PermanentCity: string | null
    PermanentDistrict: string | null
    PermanentState: string | null
    CurrentAddress1: string | null
    CurrentAddress2: string | null
    CurrentCity: string | null
    CurrentDistrict: string | null
    CurrentState: string | null
    RefferancePerson: string | null
    PassportPhoto: string | null
    SignPhoto: string | null
    Scale: number | null
    Password: string | null
    OTP: string | null
    Remark1: string | null
    Remark2: string | null
    IsActive: boolean | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblStaffCountAggregateOutputType = {
    StaffIDP: number
    FullName: number
    MobileNo: number
    Email: number
    GenderID: number
    DesignationID: number
    DepartmentID: number
    StaffTypeID: number
    DateOfBirth: number
    Age: number
    DateOfJoining: number
    DateOfAddmission: number
    CastandReligion: number
    Qualification: number
    UGPassingDate: number
    UGCollageName: number
    UGUniversityName: number
    PGPassingDate: number
    PGCollageName: number
    PGUniversityName: number
    StateRegNumber: number
    NCHRegNumber: number
    ExperienceDetail: number
    PromotionDate: number
    PromotionDesignationID: number
    AdharNumber: number
    PANNumber: number
    PermanentAddress1: number
    PermanentAddress2: number
    PermanentCity: number
    PermanentDistrict: number
    PermanentState: number
    CurrentAddress1: number
    CurrentAddress2: number
    CurrentCity: number
    CurrentDistrict: number
    CurrentState: number
    RefferancePerson: number
    PassportPhoto: number
    SignPhoto: number
    Scale: number
    Password: number
    OTP: number
    Remark1: number
    Remark2: number
    IsActive: number
    IsDelete: number
    EntryBy: number
    EntryDate: number
    _all: number
  }


  export type TblStaffAvgAggregateInputType = {
    StaffIDP?: true
    GenderID?: true
    DesignationID?: true
    DepartmentID?: true
    StaffTypeID?: true
    Age?: true
    PromotionDesignationID?: true
    AdharNumber?: true
    Scale?: true
    EntryBy?: true
  }

  export type TblStaffSumAggregateInputType = {
    StaffIDP?: true
    GenderID?: true
    DesignationID?: true
    DepartmentID?: true
    StaffTypeID?: true
    Age?: true
    PromotionDesignationID?: true
    AdharNumber?: true
    Scale?: true
    EntryBy?: true
  }

  export type TblStaffMinAggregateInputType = {
    StaffIDP?: true
    FullName?: true
    MobileNo?: true
    Email?: true
    GenderID?: true
    DesignationID?: true
    DepartmentID?: true
    StaffTypeID?: true
    DateOfBirth?: true
    Age?: true
    DateOfJoining?: true
    DateOfAddmission?: true
    CastandReligion?: true
    Qualification?: true
    UGPassingDate?: true
    UGCollageName?: true
    UGUniversityName?: true
    PGPassingDate?: true
    PGCollageName?: true
    PGUniversityName?: true
    StateRegNumber?: true
    NCHRegNumber?: true
    ExperienceDetail?: true
    PromotionDate?: true
    PromotionDesignationID?: true
    AdharNumber?: true
    PANNumber?: true
    PermanentAddress1?: true
    PermanentAddress2?: true
    PermanentCity?: true
    PermanentDistrict?: true
    PermanentState?: true
    CurrentAddress1?: true
    CurrentAddress2?: true
    CurrentCity?: true
    CurrentDistrict?: true
    CurrentState?: true
    RefferancePerson?: true
    PassportPhoto?: true
    SignPhoto?: true
    Scale?: true
    Password?: true
    OTP?: true
    Remark1?: true
    Remark2?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblStaffMaxAggregateInputType = {
    StaffIDP?: true
    FullName?: true
    MobileNo?: true
    Email?: true
    GenderID?: true
    DesignationID?: true
    DepartmentID?: true
    StaffTypeID?: true
    DateOfBirth?: true
    Age?: true
    DateOfJoining?: true
    DateOfAddmission?: true
    CastandReligion?: true
    Qualification?: true
    UGPassingDate?: true
    UGCollageName?: true
    UGUniversityName?: true
    PGPassingDate?: true
    PGCollageName?: true
    PGUniversityName?: true
    StateRegNumber?: true
    NCHRegNumber?: true
    ExperienceDetail?: true
    PromotionDate?: true
    PromotionDesignationID?: true
    AdharNumber?: true
    PANNumber?: true
    PermanentAddress1?: true
    PermanentAddress2?: true
    PermanentCity?: true
    PermanentDistrict?: true
    PermanentState?: true
    CurrentAddress1?: true
    CurrentAddress2?: true
    CurrentCity?: true
    CurrentDistrict?: true
    CurrentState?: true
    RefferancePerson?: true
    PassportPhoto?: true
    SignPhoto?: true
    Scale?: true
    Password?: true
    OTP?: true
    Remark1?: true
    Remark2?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblStaffCountAggregateInputType = {
    StaffIDP?: true
    FullName?: true
    MobileNo?: true
    Email?: true
    GenderID?: true
    DesignationID?: true
    DepartmentID?: true
    StaffTypeID?: true
    DateOfBirth?: true
    Age?: true
    DateOfJoining?: true
    DateOfAddmission?: true
    CastandReligion?: true
    Qualification?: true
    UGPassingDate?: true
    UGCollageName?: true
    UGUniversityName?: true
    PGPassingDate?: true
    PGCollageName?: true
    PGUniversityName?: true
    StateRegNumber?: true
    NCHRegNumber?: true
    ExperienceDetail?: true
    PromotionDate?: true
    PromotionDesignationID?: true
    AdharNumber?: true
    PANNumber?: true
    PermanentAddress1?: true
    PermanentAddress2?: true
    PermanentCity?: true
    PermanentDistrict?: true
    PermanentState?: true
    CurrentAddress1?: true
    CurrentAddress2?: true
    CurrentCity?: true
    CurrentDistrict?: true
    CurrentState?: true
    RefferancePerson?: true
    PassportPhoto?: true
    SignPhoto?: true
    Scale?: true
    Password?: true
    OTP?: true
    Remark1?: true
    Remark2?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
    _all?: true
  }

  export type TblStaffAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblStaff to aggregate.
     */
    where?: tblStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStaffs to fetch.
     */
    orderBy?: tblStaffOrderByWithRelationInput | tblStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblStaffs
    **/
    _count?: true | TblStaffCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblStaffAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblStaffSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblStaffMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblStaffMaxAggregateInputType
  }

  export type GetTblStaffAggregateType<T extends TblStaffAggregateArgs> = {
        [P in keyof T & keyof AggregateTblStaff]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblStaff[P]>
      : GetScalarType<T[P], AggregateTblStaff[P]>
  }




  export type tblStaffGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblStaffWhereInput
    orderBy?: tblStaffOrderByWithAggregationInput | tblStaffOrderByWithAggregationInput[]
    by: TblStaffScalarFieldEnum[] | TblStaffScalarFieldEnum
    having?: tblStaffScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblStaffCountAggregateInputType | true
    _avg?: TblStaffAvgAggregateInputType
    _sum?: TblStaffSumAggregateInputType
    _min?: TblStaffMinAggregateInputType
    _max?: TblStaffMaxAggregateInputType
  }

  export type TblStaffGroupByOutputType = {
    StaffIDP: bigint
    FullName: string | null
    MobileNo: string | null
    Email: string | null
    GenderID: number | null
    DesignationID: number | null
    DepartmentID: number | null
    StaffTypeID: number | null
    DateOfBirth: Date | null
    Age: number | null
    DateOfJoining: Date | null
    DateOfAddmission: Date | null
    CastandReligion: string | null
    Qualification: string | null
    UGPassingDate: Date | null
    UGCollageName: string | null
    UGUniversityName: string | null
    PGPassingDate: Date | null
    PGCollageName: string | null
    PGUniversityName: string | null
    StateRegNumber: string | null
    NCHRegNumber: string | null
    ExperienceDetail: string | null
    PromotionDate: Date | null
    PromotionDesignationID: number | null
    AdharNumber: bigint | null
    PANNumber: string | null
    PermanentAddress1: string | null
    PermanentAddress2: string | null
    PermanentCity: string | null
    PermanentDistrict: string | null
    PermanentState: string | null
    CurrentAddress1: string | null
    CurrentAddress2: string | null
    CurrentCity: string | null
    CurrentDistrict: string | null
    CurrentState: string | null
    RefferancePerson: string | null
    PassportPhoto: string | null
    SignPhoto: string | null
    Scale: number | null
    Password: string | null
    OTP: string | null
    Remark1: string | null
    Remark2: string | null
    IsActive: boolean
    IsDelete: boolean | null
    EntryBy: bigint
    EntryDate: Date | null
    _count: TblStaffCountAggregateOutputType | null
    _avg: TblStaffAvgAggregateOutputType | null
    _sum: TblStaffSumAggregateOutputType | null
    _min: TblStaffMinAggregateOutputType | null
    _max: TblStaffMaxAggregateOutputType | null
  }

  type GetTblStaffGroupByPayload<T extends tblStaffGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblStaffGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblStaffGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblStaffGroupByOutputType[P]>
            : GetScalarType<T[P], TblStaffGroupByOutputType[P]>
        }
      >
    >


  export type tblStaffSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StaffIDP?: boolean
    FullName?: boolean
    MobileNo?: boolean
    Email?: boolean
    GenderID?: boolean
    DesignationID?: boolean
    DepartmentID?: boolean
    StaffTypeID?: boolean
    DateOfBirth?: boolean
    Age?: boolean
    DateOfJoining?: boolean
    DateOfAddmission?: boolean
    CastandReligion?: boolean
    Qualification?: boolean
    UGPassingDate?: boolean
    UGCollageName?: boolean
    UGUniversityName?: boolean
    PGPassingDate?: boolean
    PGCollageName?: boolean
    PGUniversityName?: boolean
    StateRegNumber?: boolean
    NCHRegNumber?: boolean
    ExperienceDetail?: boolean
    PromotionDate?: boolean
    PromotionDesignationID?: boolean
    AdharNumber?: boolean
    PANNumber?: boolean
    PermanentAddress1?: boolean
    PermanentAddress2?: boolean
    PermanentCity?: boolean
    PermanentDistrict?: boolean
    PermanentState?: boolean
    CurrentAddress1?: boolean
    CurrentAddress2?: boolean
    CurrentCity?: boolean
    CurrentDistrict?: boolean
    CurrentState?: boolean
    RefferancePerson?: boolean
    PassportPhoto?: boolean
    SignPhoto?: boolean
    Scale?: boolean
    Password?: boolean
    OTP?: boolean
    Remark1?: boolean
    Remark2?: boolean
    IsActive?: boolean
    IsDelete?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }, ExtArgs["result"]["tblStaff"]>


  export type tblStaffSelectScalar = {
    StaffIDP?: boolean
    FullName?: boolean
    MobileNo?: boolean
    Email?: boolean
    GenderID?: boolean
    DesignationID?: boolean
    DepartmentID?: boolean
    StaffTypeID?: boolean
    DateOfBirth?: boolean
    Age?: boolean
    DateOfJoining?: boolean
    DateOfAddmission?: boolean
    CastandReligion?: boolean
    Qualification?: boolean
    UGPassingDate?: boolean
    UGCollageName?: boolean
    UGUniversityName?: boolean
    PGPassingDate?: boolean
    PGCollageName?: boolean
    PGUniversityName?: boolean
    StateRegNumber?: boolean
    NCHRegNumber?: boolean
    ExperienceDetail?: boolean
    PromotionDate?: boolean
    PromotionDesignationID?: boolean
    AdharNumber?: boolean
    PANNumber?: boolean
    PermanentAddress1?: boolean
    PermanentAddress2?: boolean
    PermanentCity?: boolean
    PermanentDistrict?: boolean
    PermanentState?: boolean
    CurrentAddress1?: boolean
    CurrentAddress2?: boolean
    CurrentCity?: boolean
    CurrentDistrict?: boolean
    CurrentState?: boolean
    RefferancePerson?: boolean
    PassportPhoto?: boolean
    SignPhoto?: boolean
    Scale?: boolean
    Password?: boolean
    OTP?: boolean
    Remark1?: boolean
    Remark2?: boolean
    IsActive?: boolean
    IsDelete?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }


  export type $tblStaffPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblStaff"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      StaffIDP: bigint
      FullName: string | null
      MobileNo: string | null
      Email: string | null
      GenderID: number | null
      DesignationID: number | null
      DepartmentID: number | null
      StaffTypeID: number | null
      DateOfBirth: Date | null
      Age: number | null
      DateOfJoining: Date | null
      DateOfAddmission: Date | null
      CastandReligion: string | null
      Qualification: string | null
      UGPassingDate: Date | null
      UGCollageName: string | null
      UGUniversityName: string | null
      PGPassingDate: Date | null
      PGCollageName: string | null
      PGUniversityName: string | null
      StateRegNumber: string | null
      NCHRegNumber: string | null
      ExperienceDetail: string | null
      PromotionDate: Date | null
      PromotionDesignationID: number | null
      AdharNumber: bigint | null
      PANNumber: string | null
      PermanentAddress1: string | null
      PermanentAddress2: string | null
      PermanentCity: string | null
      PermanentDistrict: string | null
      PermanentState: string | null
      CurrentAddress1: string | null
      CurrentAddress2: string | null
      CurrentCity: string | null
      CurrentDistrict: string | null
      CurrentState: string | null
      RefferancePerson: string | null
      PassportPhoto: string | null
      SignPhoto: string | null
      Scale: number | null
      Password: string | null
      OTP: string | null
      Remark1: string | null
      Remark2: string | null
      IsActive: boolean
      IsDelete: boolean | null
      EntryBy: bigint
      EntryDate: Date | null
    }, ExtArgs["result"]["tblStaff"]>
    composites: {}
  }

  type tblStaffGetPayload<S extends boolean | null | undefined | tblStaffDefaultArgs> = $Result.GetResult<Prisma.$tblStaffPayload, S>

  type tblStaffCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblStaffFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblStaffCountAggregateInputType | true
    }

  export interface tblStaffDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblStaff'], meta: { name: 'tblStaff' } }
    /**
     * Find zero or one TblStaff that matches the filter.
     * @param {tblStaffFindUniqueArgs} args - Arguments to find a TblStaff
     * @example
     * // Get one TblStaff
     * const tblStaff = await prisma.tblStaff.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblStaffFindUniqueArgs>(args: SelectSubset<T, tblStaffFindUniqueArgs<ExtArgs>>): Prisma__tblStaffClient<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TblStaff that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblStaffFindUniqueOrThrowArgs} args - Arguments to find a TblStaff
     * @example
     * // Get one TblStaff
     * const tblStaff = await prisma.tblStaff.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblStaffFindUniqueOrThrowArgs>(args: SelectSubset<T, tblStaffFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblStaffClient<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TblStaff that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffFindFirstArgs} args - Arguments to find a TblStaff
     * @example
     * // Get one TblStaff
     * const tblStaff = await prisma.tblStaff.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblStaffFindFirstArgs>(args?: SelectSubset<T, tblStaffFindFirstArgs<ExtArgs>>): Prisma__tblStaffClient<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TblStaff that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffFindFirstOrThrowArgs} args - Arguments to find a TblStaff
     * @example
     * // Get one TblStaff
     * const tblStaff = await prisma.tblStaff.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblStaffFindFirstOrThrowArgs>(args?: SelectSubset<T, tblStaffFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblStaffClient<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TblStaffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblStaffs
     * const tblStaffs = await prisma.tblStaff.findMany()
     * 
     * // Get first 10 TblStaffs
     * const tblStaffs = await prisma.tblStaff.findMany({ take: 10 })
     * 
     * // Only select the `StaffIDP`
     * const tblStaffWithStaffIDPOnly = await prisma.tblStaff.findMany({ select: { StaffIDP: true } })
     * 
     */
    findMany<T extends tblStaffFindManyArgs>(args?: SelectSubset<T, tblStaffFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TblStaff.
     * @param {tblStaffCreateArgs} args - Arguments to create a TblStaff.
     * @example
     * // Create one TblStaff
     * const TblStaff = await prisma.tblStaff.create({
     *   data: {
     *     // ... data to create a TblStaff
     *   }
     * })
     * 
     */
    create<T extends tblStaffCreateArgs>(args: SelectSubset<T, tblStaffCreateArgs<ExtArgs>>): Prisma__tblStaffClient<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TblStaffs.
     * @param {tblStaffCreateManyArgs} args - Arguments to create many TblStaffs.
     * @example
     * // Create many TblStaffs
     * const tblStaff = await prisma.tblStaff.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblStaffCreateManyArgs>(args?: SelectSubset<T, tblStaffCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblStaff.
     * @param {tblStaffDeleteArgs} args - Arguments to delete one TblStaff.
     * @example
     * // Delete one TblStaff
     * const TblStaff = await prisma.tblStaff.delete({
     *   where: {
     *     // ... filter to delete one TblStaff
     *   }
     * })
     * 
     */
    delete<T extends tblStaffDeleteArgs>(args: SelectSubset<T, tblStaffDeleteArgs<ExtArgs>>): Prisma__tblStaffClient<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TblStaff.
     * @param {tblStaffUpdateArgs} args - Arguments to update one TblStaff.
     * @example
     * // Update one TblStaff
     * const tblStaff = await prisma.tblStaff.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblStaffUpdateArgs>(args: SelectSubset<T, tblStaffUpdateArgs<ExtArgs>>): Prisma__tblStaffClient<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TblStaffs.
     * @param {tblStaffDeleteManyArgs} args - Arguments to filter TblStaffs to delete.
     * @example
     * // Delete a few TblStaffs
     * const { count } = await prisma.tblStaff.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblStaffDeleteManyArgs>(args?: SelectSubset<T, tblStaffDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblStaffs
     * const tblStaff = await prisma.tblStaff.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblStaffUpdateManyArgs>(args: SelectSubset<T, tblStaffUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblStaff.
     * @param {tblStaffUpsertArgs} args - Arguments to update or create a TblStaff.
     * @example
     * // Update or create a TblStaff
     * const tblStaff = await prisma.tblStaff.upsert({
     *   create: {
     *     // ... data to create a TblStaff
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblStaff we want to update
     *   }
     * })
     */
    upsert<T extends tblStaffUpsertArgs>(args: SelectSubset<T, tblStaffUpsertArgs<ExtArgs>>): Prisma__tblStaffClient<$Result.GetResult<Prisma.$tblStaffPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TblStaffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffCountArgs} args - Arguments to filter TblStaffs to count.
     * @example
     * // Count the number of TblStaffs
     * const count = await prisma.tblStaff.count({
     *   where: {
     *     // ... the filter for the TblStaffs we want to count
     *   }
     * })
    **/
    count<T extends tblStaffCountArgs>(
      args?: Subset<T, tblStaffCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblStaffCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblStaffAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblStaffAggregateArgs>(args: Subset<T, TblStaffAggregateArgs>): Prisma.PrismaPromise<GetTblStaffAggregateType<T>>

    /**
     * Group by TblStaff.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffGroupByArgs} args - Group by arguments.
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
      T extends tblStaffGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblStaffGroupByArgs['orderBy'] }
        : { orderBy?: tblStaffGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tblStaffGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblStaffGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblStaff model
   */
  readonly fields: tblStaffFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblStaff.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblStaffClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tblStaff model
   */ 
  interface tblStaffFieldRefs {
    readonly StaffIDP: FieldRef<"tblStaff", 'BigInt'>
    readonly FullName: FieldRef<"tblStaff", 'String'>
    readonly MobileNo: FieldRef<"tblStaff", 'String'>
    readonly Email: FieldRef<"tblStaff", 'String'>
    readonly GenderID: FieldRef<"tblStaff", 'Int'>
    readonly DesignationID: FieldRef<"tblStaff", 'Int'>
    readonly DepartmentID: FieldRef<"tblStaff", 'Int'>
    readonly StaffTypeID: FieldRef<"tblStaff", 'Int'>
    readonly DateOfBirth: FieldRef<"tblStaff", 'DateTime'>
    readonly Age: FieldRef<"tblStaff", 'Int'>
    readonly DateOfJoining: FieldRef<"tblStaff", 'DateTime'>
    readonly DateOfAddmission: FieldRef<"tblStaff", 'DateTime'>
    readonly CastandReligion: FieldRef<"tblStaff", 'String'>
    readonly Qualification: FieldRef<"tblStaff", 'String'>
    readonly UGPassingDate: FieldRef<"tblStaff", 'DateTime'>
    readonly UGCollageName: FieldRef<"tblStaff", 'String'>
    readonly UGUniversityName: FieldRef<"tblStaff", 'String'>
    readonly PGPassingDate: FieldRef<"tblStaff", 'DateTime'>
    readonly PGCollageName: FieldRef<"tblStaff", 'String'>
    readonly PGUniversityName: FieldRef<"tblStaff", 'String'>
    readonly StateRegNumber: FieldRef<"tblStaff", 'String'>
    readonly NCHRegNumber: FieldRef<"tblStaff", 'String'>
    readonly ExperienceDetail: FieldRef<"tblStaff", 'String'>
    readonly PromotionDate: FieldRef<"tblStaff", 'DateTime'>
    readonly PromotionDesignationID: FieldRef<"tblStaff", 'Int'>
    readonly AdharNumber: FieldRef<"tblStaff", 'BigInt'>
    readonly PANNumber: FieldRef<"tblStaff", 'String'>
    readonly PermanentAddress1: FieldRef<"tblStaff", 'String'>
    readonly PermanentAddress2: FieldRef<"tblStaff", 'String'>
    readonly PermanentCity: FieldRef<"tblStaff", 'String'>
    readonly PermanentDistrict: FieldRef<"tblStaff", 'String'>
    readonly PermanentState: FieldRef<"tblStaff", 'String'>
    readonly CurrentAddress1: FieldRef<"tblStaff", 'String'>
    readonly CurrentAddress2: FieldRef<"tblStaff", 'String'>
    readonly CurrentCity: FieldRef<"tblStaff", 'String'>
    readonly CurrentDistrict: FieldRef<"tblStaff", 'String'>
    readonly CurrentState: FieldRef<"tblStaff", 'String'>
    readonly RefferancePerson: FieldRef<"tblStaff", 'String'>
    readonly PassportPhoto: FieldRef<"tblStaff", 'String'>
    readonly SignPhoto: FieldRef<"tblStaff", 'String'>
    readonly Scale: FieldRef<"tblStaff", 'Float'>
    readonly Password: FieldRef<"tblStaff", 'String'>
    readonly OTP: FieldRef<"tblStaff", 'String'>
    readonly Remark1: FieldRef<"tblStaff", 'String'>
    readonly Remark2: FieldRef<"tblStaff", 'String'>
    readonly IsActive: FieldRef<"tblStaff", 'Boolean'>
    readonly IsDelete: FieldRef<"tblStaff", 'Boolean'>
    readonly EntryBy: FieldRef<"tblStaff", 'BigInt'>
    readonly EntryDate: FieldRef<"tblStaff", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tblStaff findUnique
   */
  export type tblStaffFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * Filter, which tblStaff to fetch.
     */
    where: tblStaffWhereUniqueInput
  }

  /**
   * tblStaff findUniqueOrThrow
   */
  export type tblStaffFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * Filter, which tblStaff to fetch.
     */
    where: tblStaffWhereUniqueInput
  }

  /**
   * tblStaff findFirst
   */
  export type tblStaffFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * Filter, which tblStaff to fetch.
     */
    where?: tblStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStaffs to fetch.
     */
    orderBy?: tblStaffOrderByWithRelationInput | tblStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblStaffs.
     */
    cursor?: tblStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblStaffs.
     */
    distinct?: TblStaffScalarFieldEnum | TblStaffScalarFieldEnum[]
  }

  /**
   * tblStaff findFirstOrThrow
   */
  export type tblStaffFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * Filter, which tblStaff to fetch.
     */
    where?: tblStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStaffs to fetch.
     */
    orderBy?: tblStaffOrderByWithRelationInput | tblStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblStaffs.
     */
    cursor?: tblStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStaffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblStaffs.
     */
    distinct?: TblStaffScalarFieldEnum | TblStaffScalarFieldEnum[]
  }

  /**
   * tblStaff findMany
   */
  export type tblStaffFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * Filter, which tblStaffs to fetch.
     */
    where?: tblStaffWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStaffs to fetch.
     */
    orderBy?: tblStaffOrderByWithRelationInput | tblStaffOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblStaffs.
     */
    cursor?: tblStaffWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStaffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStaffs.
     */
    skip?: number
    distinct?: TblStaffScalarFieldEnum | TblStaffScalarFieldEnum[]
  }

  /**
   * tblStaff create
   */
  export type tblStaffCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * The data needed to create a tblStaff.
     */
    data: XOR<tblStaffCreateInput, tblStaffUncheckedCreateInput>
  }

  /**
   * tblStaff createMany
   */
  export type tblStaffCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblStaffs.
     */
    data: tblStaffCreateManyInput | tblStaffCreateManyInput[]
  }

  /**
   * tblStaff update
   */
  export type tblStaffUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * The data needed to update a tblStaff.
     */
    data: XOR<tblStaffUpdateInput, tblStaffUncheckedUpdateInput>
    /**
     * Choose, which tblStaff to update.
     */
    where: tblStaffWhereUniqueInput
  }

  /**
   * tblStaff updateMany
   */
  export type tblStaffUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblStaffs.
     */
    data: XOR<tblStaffUpdateManyMutationInput, tblStaffUncheckedUpdateManyInput>
    /**
     * Filter which tblStaffs to update
     */
    where?: tblStaffWhereInput
  }

  /**
   * tblStaff upsert
   */
  export type tblStaffUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * The filter to search for the tblStaff to update in case it exists.
     */
    where: tblStaffWhereUniqueInput
    /**
     * In case the tblStaff found by the `where` argument doesn't exist, create a new tblStaff with this data.
     */
    create: XOR<tblStaffCreateInput, tblStaffUncheckedCreateInput>
    /**
     * In case the tblStaff was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblStaffUpdateInput, tblStaffUncheckedUpdateInput>
  }

  /**
   * tblStaff delete
   */
  export type tblStaffDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
    /**
     * Filter which tblStaff to delete.
     */
    where: tblStaffWhereUniqueInput
  }

  /**
   * tblStaff deleteMany
   */
  export type tblStaffDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblStaffs to delete
     */
    where?: tblStaffWhereInput
  }

  /**
   * tblStaff without action
   */
  export type tblStaffDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaff
     */
    select?: tblStaffSelect<ExtArgs> | null
  }


  /**
   * Model tblStaffExperience
   */

  export type AggregateTblStaffExperience = {
    _count: TblStaffExperienceCountAggregateOutputType | null
    _avg: TblStaffExperienceAvgAggregateOutputType | null
    _sum: TblStaffExperienceSumAggregateOutputType | null
    _min: TblStaffExperienceMinAggregateOutputType | null
    _max: TblStaffExperienceMaxAggregateOutputType | null
  }

  export type TblStaffExperienceAvgAggregateOutputType = {
    StaffExperienceIDP: number | null
    StaffIDF: number | null
    TotalYear: Decimal | null
  }

  export type TblStaffExperienceSumAggregateOutputType = {
    StaffExperienceIDP: bigint | null
    StaffIDF: bigint | null
    TotalYear: Decimal | null
  }

  export type TblStaffExperienceMinAggregateOutputType = {
    StaffExperienceIDP: bigint | null
    StaffIDF: bigint | null
    InstituteName: string | null
    FromDate: Date | null
    ToDate: Date | null
    Designation: string | null
    TotalYear: Decimal | null
    IsDelete: boolean | null
    EntryDate: Date | null
  }

  export type TblStaffExperienceMaxAggregateOutputType = {
    StaffExperienceIDP: bigint | null
    StaffIDF: bigint | null
    InstituteName: string | null
    FromDate: Date | null
    ToDate: Date | null
    Designation: string | null
    TotalYear: Decimal | null
    IsDelete: boolean | null
    EntryDate: Date | null
  }

  export type TblStaffExperienceCountAggregateOutputType = {
    StaffExperienceIDP: number
    StaffIDF: number
    InstituteName: number
    FromDate: number
    ToDate: number
    Designation: number
    TotalYear: number
    IsDelete: number
    EntryDate: number
    _all: number
  }


  export type TblStaffExperienceAvgAggregateInputType = {
    StaffExperienceIDP?: true
    StaffIDF?: true
    TotalYear?: true
  }

  export type TblStaffExperienceSumAggregateInputType = {
    StaffExperienceIDP?: true
    StaffIDF?: true
    TotalYear?: true
  }

  export type TblStaffExperienceMinAggregateInputType = {
    StaffExperienceIDP?: true
    StaffIDF?: true
    InstituteName?: true
    FromDate?: true
    ToDate?: true
    Designation?: true
    TotalYear?: true
    IsDelete?: true
    EntryDate?: true
  }

  export type TblStaffExperienceMaxAggregateInputType = {
    StaffExperienceIDP?: true
    StaffIDF?: true
    InstituteName?: true
    FromDate?: true
    ToDate?: true
    Designation?: true
    TotalYear?: true
    IsDelete?: true
    EntryDate?: true
  }

  export type TblStaffExperienceCountAggregateInputType = {
    StaffExperienceIDP?: true
    StaffIDF?: true
    InstituteName?: true
    FromDate?: true
    ToDate?: true
    Designation?: true
    TotalYear?: true
    IsDelete?: true
    EntryDate?: true
    _all?: true
  }

  export type TblStaffExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblStaffExperience to aggregate.
     */
    where?: tblStaffExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStaffExperiences to fetch.
     */
    orderBy?: tblStaffExperienceOrderByWithRelationInput | tblStaffExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblStaffExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStaffExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStaffExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblStaffExperiences
    **/
    _count?: true | TblStaffExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblStaffExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblStaffExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblStaffExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblStaffExperienceMaxAggregateInputType
  }

  export type GetTblStaffExperienceAggregateType<T extends TblStaffExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateTblStaffExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblStaffExperience[P]>
      : GetScalarType<T[P], AggregateTblStaffExperience[P]>
  }




  export type tblStaffExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblStaffExperienceWhereInput
    orderBy?: tblStaffExperienceOrderByWithAggregationInput | tblStaffExperienceOrderByWithAggregationInput[]
    by: TblStaffExperienceScalarFieldEnum[] | TblStaffExperienceScalarFieldEnum
    having?: tblStaffExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblStaffExperienceCountAggregateInputType | true
    _avg?: TblStaffExperienceAvgAggregateInputType
    _sum?: TblStaffExperienceSumAggregateInputType
    _min?: TblStaffExperienceMinAggregateInputType
    _max?: TblStaffExperienceMaxAggregateInputType
  }

  export type TblStaffExperienceGroupByOutputType = {
    StaffExperienceIDP: bigint
    StaffIDF: bigint
    InstituteName: string | null
    FromDate: Date | null
    ToDate: Date | null
    Designation: string | null
    TotalYear: Decimal | null
    IsDelete: boolean | null
    EntryDate: Date | null
    _count: TblStaffExperienceCountAggregateOutputType | null
    _avg: TblStaffExperienceAvgAggregateOutputType | null
    _sum: TblStaffExperienceSumAggregateOutputType | null
    _min: TblStaffExperienceMinAggregateOutputType | null
    _max: TblStaffExperienceMaxAggregateOutputType | null
  }

  type GetTblStaffExperienceGroupByPayload<T extends tblStaffExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblStaffExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblStaffExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblStaffExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], TblStaffExperienceGroupByOutputType[P]>
        }
      >
    >


  export type tblStaffExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StaffExperienceIDP?: boolean
    StaffIDF?: boolean
    InstituteName?: boolean
    FromDate?: boolean
    ToDate?: boolean
    Designation?: boolean
    TotalYear?: boolean
    IsDelete?: boolean
    EntryDate?: boolean
  }, ExtArgs["result"]["tblStaffExperience"]>


  export type tblStaffExperienceSelectScalar = {
    StaffExperienceIDP?: boolean
    StaffIDF?: boolean
    InstituteName?: boolean
    FromDate?: boolean
    ToDate?: boolean
    Designation?: boolean
    TotalYear?: boolean
    IsDelete?: boolean
    EntryDate?: boolean
  }


  export type $tblStaffExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblStaffExperience"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      StaffExperienceIDP: bigint
      StaffIDF: bigint
      InstituteName: string | null
      FromDate: Date | null
      ToDate: Date | null
      Designation: string | null
      TotalYear: Prisma.Decimal | null
      IsDelete: boolean | null
      EntryDate: Date | null
    }, ExtArgs["result"]["tblStaffExperience"]>
    composites: {}
  }

  type tblStaffExperienceGetPayload<S extends boolean | null | undefined | tblStaffExperienceDefaultArgs> = $Result.GetResult<Prisma.$tblStaffExperiencePayload, S>

  type tblStaffExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblStaffExperienceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblStaffExperienceCountAggregateInputType | true
    }

  export interface tblStaffExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblStaffExperience'], meta: { name: 'tblStaffExperience' } }
    /**
     * Find zero or one TblStaffExperience that matches the filter.
     * @param {tblStaffExperienceFindUniqueArgs} args - Arguments to find a TblStaffExperience
     * @example
     * // Get one TblStaffExperience
     * const tblStaffExperience = await prisma.tblStaffExperience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblStaffExperienceFindUniqueArgs>(args: SelectSubset<T, tblStaffExperienceFindUniqueArgs<ExtArgs>>): Prisma__tblStaffExperienceClient<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TblStaffExperience that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblStaffExperienceFindUniqueOrThrowArgs} args - Arguments to find a TblStaffExperience
     * @example
     * // Get one TblStaffExperience
     * const tblStaffExperience = await prisma.tblStaffExperience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblStaffExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, tblStaffExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblStaffExperienceClient<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TblStaffExperience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffExperienceFindFirstArgs} args - Arguments to find a TblStaffExperience
     * @example
     * // Get one TblStaffExperience
     * const tblStaffExperience = await prisma.tblStaffExperience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblStaffExperienceFindFirstArgs>(args?: SelectSubset<T, tblStaffExperienceFindFirstArgs<ExtArgs>>): Prisma__tblStaffExperienceClient<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TblStaffExperience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffExperienceFindFirstOrThrowArgs} args - Arguments to find a TblStaffExperience
     * @example
     * // Get one TblStaffExperience
     * const tblStaffExperience = await prisma.tblStaffExperience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblStaffExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, tblStaffExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblStaffExperienceClient<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TblStaffExperiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblStaffExperiences
     * const tblStaffExperiences = await prisma.tblStaffExperience.findMany()
     * 
     * // Get first 10 TblStaffExperiences
     * const tblStaffExperiences = await prisma.tblStaffExperience.findMany({ take: 10 })
     * 
     * // Only select the `StaffExperienceIDP`
     * const tblStaffExperienceWithStaffExperienceIDPOnly = await prisma.tblStaffExperience.findMany({ select: { StaffExperienceIDP: true } })
     * 
     */
    findMany<T extends tblStaffExperienceFindManyArgs>(args?: SelectSubset<T, tblStaffExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TblStaffExperience.
     * @param {tblStaffExperienceCreateArgs} args - Arguments to create a TblStaffExperience.
     * @example
     * // Create one TblStaffExperience
     * const TblStaffExperience = await prisma.tblStaffExperience.create({
     *   data: {
     *     // ... data to create a TblStaffExperience
     *   }
     * })
     * 
     */
    create<T extends tblStaffExperienceCreateArgs>(args: SelectSubset<T, tblStaffExperienceCreateArgs<ExtArgs>>): Prisma__tblStaffExperienceClient<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TblStaffExperiences.
     * @param {tblStaffExperienceCreateManyArgs} args - Arguments to create many TblStaffExperiences.
     * @example
     * // Create many TblStaffExperiences
     * const tblStaffExperience = await prisma.tblStaffExperience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblStaffExperienceCreateManyArgs>(args?: SelectSubset<T, tblStaffExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblStaffExperience.
     * @param {tblStaffExperienceDeleteArgs} args - Arguments to delete one TblStaffExperience.
     * @example
     * // Delete one TblStaffExperience
     * const TblStaffExperience = await prisma.tblStaffExperience.delete({
     *   where: {
     *     // ... filter to delete one TblStaffExperience
     *   }
     * })
     * 
     */
    delete<T extends tblStaffExperienceDeleteArgs>(args: SelectSubset<T, tblStaffExperienceDeleteArgs<ExtArgs>>): Prisma__tblStaffExperienceClient<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TblStaffExperience.
     * @param {tblStaffExperienceUpdateArgs} args - Arguments to update one TblStaffExperience.
     * @example
     * // Update one TblStaffExperience
     * const tblStaffExperience = await prisma.tblStaffExperience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblStaffExperienceUpdateArgs>(args: SelectSubset<T, tblStaffExperienceUpdateArgs<ExtArgs>>): Prisma__tblStaffExperienceClient<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TblStaffExperiences.
     * @param {tblStaffExperienceDeleteManyArgs} args - Arguments to filter TblStaffExperiences to delete.
     * @example
     * // Delete a few TblStaffExperiences
     * const { count } = await prisma.tblStaffExperience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblStaffExperienceDeleteManyArgs>(args?: SelectSubset<T, tblStaffExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblStaffExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblStaffExperiences
     * const tblStaffExperience = await prisma.tblStaffExperience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblStaffExperienceUpdateManyArgs>(args: SelectSubset<T, tblStaffExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblStaffExperience.
     * @param {tblStaffExperienceUpsertArgs} args - Arguments to update or create a TblStaffExperience.
     * @example
     * // Update or create a TblStaffExperience
     * const tblStaffExperience = await prisma.tblStaffExperience.upsert({
     *   create: {
     *     // ... data to create a TblStaffExperience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblStaffExperience we want to update
     *   }
     * })
     */
    upsert<T extends tblStaffExperienceUpsertArgs>(args: SelectSubset<T, tblStaffExperienceUpsertArgs<ExtArgs>>): Prisma__tblStaffExperienceClient<$Result.GetResult<Prisma.$tblStaffExperiencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TblStaffExperiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffExperienceCountArgs} args - Arguments to filter TblStaffExperiences to count.
     * @example
     * // Count the number of TblStaffExperiences
     * const count = await prisma.tblStaffExperience.count({
     *   where: {
     *     // ... the filter for the TblStaffExperiences we want to count
     *   }
     * })
    **/
    count<T extends tblStaffExperienceCountArgs>(
      args?: Subset<T, tblStaffExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblStaffExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblStaffExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblStaffExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblStaffExperienceAggregateArgs>(args: Subset<T, TblStaffExperienceAggregateArgs>): Prisma.PrismaPromise<GetTblStaffExperienceAggregateType<T>>

    /**
     * Group by TblStaffExperience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStaffExperienceGroupByArgs} args - Group by arguments.
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
      T extends tblStaffExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblStaffExperienceGroupByArgs['orderBy'] }
        : { orderBy?: tblStaffExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tblStaffExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblStaffExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblStaffExperience model
   */
  readonly fields: tblStaffExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblStaffExperience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblStaffExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the tblStaffExperience model
   */ 
  interface tblStaffExperienceFieldRefs {
    readonly StaffExperienceIDP: FieldRef<"tblStaffExperience", 'BigInt'>
    readonly StaffIDF: FieldRef<"tblStaffExperience", 'BigInt'>
    readonly InstituteName: FieldRef<"tblStaffExperience", 'String'>
    readonly FromDate: FieldRef<"tblStaffExperience", 'DateTime'>
    readonly ToDate: FieldRef<"tblStaffExperience", 'DateTime'>
    readonly Designation: FieldRef<"tblStaffExperience", 'String'>
    readonly TotalYear: FieldRef<"tblStaffExperience", 'Decimal'>
    readonly IsDelete: FieldRef<"tblStaffExperience", 'Boolean'>
    readonly EntryDate: FieldRef<"tblStaffExperience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tblStaffExperience findUnique
   */
  export type tblStaffExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * Filter, which tblStaffExperience to fetch.
     */
    where: tblStaffExperienceWhereUniqueInput
  }

  /**
   * tblStaffExperience findUniqueOrThrow
   */
  export type tblStaffExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * Filter, which tblStaffExperience to fetch.
     */
    where: tblStaffExperienceWhereUniqueInput
  }

  /**
   * tblStaffExperience findFirst
   */
  export type tblStaffExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * Filter, which tblStaffExperience to fetch.
     */
    where?: tblStaffExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStaffExperiences to fetch.
     */
    orderBy?: tblStaffExperienceOrderByWithRelationInput | tblStaffExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblStaffExperiences.
     */
    cursor?: tblStaffExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStaffExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStaffExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblStaffExperiences.
     */
    distinct?: TblStaffExperienceScalarFieldEnum | TblStaffExperienceScalarFieldEnum[]
  }

  /**
   * tblStaffExperience findFirstOrThrow
   */
  export type tblStaffExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * Filter, which tblStaffExperience to fetch.
     */
    where?: tblStaffExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStaffExperiences to fetch.
     */
    orderBy?: tblStaffExperienceOrderByWithRelationInput | tblStaffExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblStaffExperiences.
     */
    cursor?: tblStaffExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStaffExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStaffExperiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblStaffExperiences.
     */
    distinct?: TblStaffExperienceScalarFieldEnum | TblStaffExperienceScalarFieldEnum[]
  }

  /**
   * tblStaffExperience findMany
   */
  export type tblStaffExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * Filter, which tblStaffExperiences to fetch.
     */
    where?: tblStaffExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStaffExperiences to fetch.
     */
    orderBy?: tblStaffExperienceOrderByWithRelationInput | tblStaffExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblStaffExperiences.
     */
    cursor?: tblStaffExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStaffExperiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStaffExperiences.
     */
    skip?: number
    distinct?: TblStaffExperienceScalarFieldEnum | TblStaffExperienceScalarFieldEnum[]
  }

  /**
   * tblStaffExperience create
   */
  export type tblStaffExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * The data needed to create a tblStaffExperience.
     */
    data: XOR<tblStaffExperienceCreateInput, tblStaffExperienceUncheckedCreateInput>
  }

  /**
   * tblStaffExperience createMany
   */
  export type tblStaffExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblStaffExperiences.
     */
    data: tblStaffExperienceCreateManyInput | tblStaffExperienceCreateManyInput[]
  }

  /**
   * tblStaffExperience update
   */
  export type tblStaffExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * The data needed to update a tblStaffExperience.
     */
    data: XOR<tblStaffExperienceUpdateInput, tblStaffExperienceUncheckedUpdateInput>
    /**
     * Choose, which tblStaffExperience to update.
     */
    where: tblStaffExperienceWhereUniqueInput
  }

  /**
   * tblStaffExperience updateMany
   */
  export type tblStaffExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblStaffExperiences.
     */
    data: XOR<tblStaffExperienceUpdateManyMutationInput, tblStaffExperienceUncheckedUpdateManyInput>
    /**
     * Filter which tblStaffExperiences to update
     */
    where?: tblStaffExperienceWhereInput
  }

  /**
   * tblStaffExperience upsert
   */
  export type tblStaffExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * The filter to search for the tblStaffExperience to update in case it exists.
     */
    where: tblStaffExperienceWhereUniqueInput
    /**
     * In case the tblStaffExperience found by the `where` argument doesn't exist, create a new tblStaffExperience with this data.
     */
    create: XOR<tblStaffExperienceCreateInput, tblStaffExperienceUncheckedCreateInput>
    /**
     * In case the tblStaffExperience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblStaffExperienceUpdateInput, tblStaffExperienceUncheckedUpdateInput>
  }

  /**
   * tblStaffExperience delete
   */
  export type tblStaffExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
    /**
     * Filter which tblStaffExperience to delete.
     */
    where: tblStaffExperienceWhereUniqueInput
  }

  /**
   * tblStaffExperience deleteMany
   */
  export type tblStaffExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblStaffExperiences to delete
     */
    where?: tblStaffExperienceWhereInput
  }

  /**
   * tblStaffExperience without action
   */
  export type tblStaffExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStaffExperience
     */
    select?: tblStaffExperienceSelect<ExtArgs> | null
  }


  /**
   * Model tblStudent
   */

  export type AggregateTblStudent = {
    _count: TblStudentCountAggregateOutputType | null
    _avg: TblStudentAvgAggregateOutputType | null
    _sum: TblStudentSumAggregateOutputType | null
    _min: TblStudentMinAggregateOutputType | null
    _max: TblStudentMaxAggregateOutputType | null
  }

  export type TblStudentAvgAggregateOutputType = {
    StudentIDP: number | null
    GenderID: number | null
    CuurentYearID: Decimal | null
    AadharNumber: number | null
    ScholarshipAmount: number | null
    FeesTypeID: number | null
    BatchID: number | null
    TermFee: number | null
    TotalFee: number | null
    DepositRefundable: number | null
    DepositReceived: number | null
    ImportRefID: number | null
    PassYear1: number | null
    PassYear2: number | null
    PassYear3: number | null
    PassYear4: number | null
    EntryBy: number | null
  }

  export type TblStudentSumAggregateOutputType = {
    StudentIDP: bigint | null
    GenderID: number | null
    CuurentYearID: Decimal | null
    AadharNumber: bigint | null
    ScholarshipAmount: number | null
    FeesTypeID: number | null
    BatchID: number | null
    TermFee: number | null
    TotalFee: number | null
    DepositRefundable: number | null
    DepositReceived: number | null
    ImportRefID: bigint | null
    PassYear1: number | null
    PassYear2: number | null
    PassYear3: number | null
    PassYear4: number | null
    EntryBy: bigint | null
  }

  export type TblStudentMinAggregateOutputType = {
    StudentIDP: bigint | null
    FullName: string | null
    MobileNo: string | null
    Email: string | null
    GenderID: number | null
    Address: string | null
    FatherMobileNo: string | null
    CuurentYearID: Decimal | null
    GRNNo: string | null
    AadharNumber: bigint | null
    PANNo: string | null
    ScholarshipAmount: number | null
    EnrollmenyYear: string | null
    FeesTypeID: number | null
    BatchID: number | null
    Remark1: string | null
    Remark2: string | null
    Remark3: string | null
    Password: string | null
    OTP: string | null
    TermFee: number | null
    TotalFee: number | null
    DepositRefundable: number | null
    DepositReceived: number | null
    ImportRefID: bigint | null
    ProfileImage: string | null
    PassYear1: number | null
    PassYear2: number | null
    PassYear3: number | null
    PassYear4: number | null
    IsActive: boolean | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblStudentMaxAggregateOutputType = {
    StudentIDP: bigint | null
    FullName: string | null
    MobileNo: string | null
    Email: string | null
    GenderID: number | null
    Address: string | null
    FatherMobileNo: string | null
    CuurentYearID: Decimal | null
    GRNNo: string | null
    AadharNumber: bigint | null
    PANNo: string | null
    ScholarshipAmount: number | null
    EnrollmenyYear: string | null
    FeesTypeID: number | null
    BatchID: number | null
    Remark1: string | null
    Remark2: string | null
    Remark3: string | null
    Password: string | null
    OTP: string | null
    TermFee: number | null
    TotalFee: number | null
    DepositRefundable: number | null
    DepositReceived: number | null
    ImportRefID: bigint | null
    ProfileImage: string | null
    PassYear1: number | null
    PassYear2: number | null
    PassYear3: number | null
    PassYear4: number | null
    IsActive: boolean | null
    IsDelete: boolean | null
    EntryBy: bigint | null
    EntryDate: Date | null
  }

  export type TblStudentCountAggregateOutputType = {
    StudentIDP: number
    FullName: number
    MobileNo: number
    Email: number
    GenderID: number
    Address: number
    FatherMobileNo: number
    CuurentYearID: number
    GRNNo: number
    AadharNumber: number
    PANNo: number
    ScholarshipAmount: number
    EnrollmenyYear: number
    FeesTypeID: number
    BatchID: number
    Remark1: number
    Remark2: number
    Remark3: number
    Password: number
    OTP: number
    TermFee: number
    TotalFee: number
    DepositRefundable: number
    DepositReceived: number
    ImportRefID: number
    ProfileImage: number
    PassYear1: number
    PassYear2: number
    PassYear3: number
    PassYear4: number
    IsActive: number
    IsDelete: number
    EntryBy: number
    EntryDate: number
    _all: number
  }


  export type TblStudentAvgAggregateInputType = {
    StudentIDP?: true
    GenderID?: true
    CuurentYearID?: true
    AadharNumber?: true
    ScholarshipAmount?: true
    FeesTypeID?: true
    BatchID?: true
    TermFee?: true
    TotalFee?: true
    DepositRefundable?: true
    DepositReceived?: true
    ImportRefID?: true
    PassYear1?: true
    PassYear2?: true
    PassYear3?: true
    PassYear4?: true
    EntryBy?: true
  }

  export type TblStudentSumAggregateInputType = {
    StudentIDP?: true
    GenderID?: true
    CuurentYearID?: true
    AadharNumber?: true
    ScholarshipAmount?: true
    FeesTypeID?: true
    BatchID?: true
    TermFee?: true
    TotalFee?: true
    DepositRefundable?: true
    DepositReceived?: true
    ImportRefID?: true
    PassYear1?: true
    PassYear2?: true
    PassYear3?: true
    PassYear4?: true
    EntryBy?: true
  }

  export type TblStudentMinAggregateInputType = {
    StudentIDP?: true
    FullName?: true
    MobileNo?: true
    Email?: true
    GenderID?: true
    Address?: true
    FatherMobileNo?: true
    CuurentYearID?: true
    GRNNo?: true
    AadharNumber?: true
    PANNo?: true
    ScholarshipAmount?: true
    EnrollmenyYear?: true
    FeesTypeID?: true
    BatchID?: true
    Remark1?: true
    Remark2?: true
    Remark3?: true
    Password?: true
    OTP?: true
    TermFee?: true
    TotalFee?: true
    DepositRefundable?: true
    DepositReceived?: true
    ImportRefID?: true
    ProfileImage?: true
    PassYear1?: true
    PassYear2?: true
    PassYear3?: true
    PassYear4?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblStudentMaxAggregateInputType = {
    StudentIDP?: true
    FullName?: true
    MobileNo?: true
    Email?: true
    GenderID?: true
    Address?: true
    FatherMobileNo?: true
    CuurentYearID?: true
    GRNNo?: true
    AadharNumber?: true
    PANNo?: true
    ScholarshipAmount?: true
    EnrollmenyYear?: true
    FeesTypeID?: true
    BatchID?: true
    Remark1?: true
    Remark2?: true
    Remark3?: true
    Password?: true
    OTP?: true
    TermFee?: true
    TotalFee?: true
    DepositRefundable?: true
    DepositReceived?: true
    ImportRefID?: true
    ProfileImage?: true
    PassYear1?: true
    PassYear2?: true
    PassYear3?: true
    PassYear4?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
  }

  export type TblStudentCountAggregateInputType = {
    StudentIDP?: true
    FullName?: true
    MobileNo?: true
    Email?: true
    GenderID?: true
    Address?: true
    FatherMobileNo?: true
    CuurentYearID?: true
    GRNNo?: true
    AadharNumber?: true
    PANNo?: true
    ScholarshipAmount?: true
    EnrollmenyYear?: true
    FeesTypeID?: true
    BatchID?: true
    Remark1?: true
    Remark2?: true
    Remark3?: true
    Password?: true
    OTP?: true
    TermFee?: true
    TotalFee?: true
    DepositRefundable?: true
    DepositReceived?: true
    ImportRefID?: true
    ProfileImage?: true
    PassYear1?: true
    PassYear2?: true
    PassYear3?: true
    PassYear4?: true
    IsActive?: true
    IsDelete?: true
    EntryBy?: true
    EntryDate?: true
    _all?: true
  }

  export type TblStudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblStudent to aggregate.
     */
    where?: tblStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStudents to fetch.
     */
    orderBy?: tblStudentOrderByWithRelationInput | tblStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tblStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tblStudents
    **/
    _count?: true | TblStudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TblStudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TblStudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TblStudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TblStudentMaxAggregateInputType
  }

  export type GetTblStudentAggregateType<T extends TblStudentAggregateArgs> = {
        [P in keyof T & keyof AggregateTblStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTblStudent[P]>
      : GetScalarType<T[P], AggregateTblStudent[P]>
  }




  export type tblStudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tblStudentWhereInput
    orderBy?: tblStudentOrderByWithAggregationInput | tblStudentOrderByWithAggregationInput[]
    by: TblStudentScalarFieldEnum[] | TblStudentScalarFieldEnum
    having?: tblStudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TblStudentCountAggregateInputType | true
    _avg?: TblStudentAvgAggregateInputType
    _sum?: TblStudentSumAggregateInputType
    _min?: TblStudentMinAggregateInputType
    _max?: TblStudentMaxAggregateInputType
  }

  export type TblStudentGroupByOutputType = {
    StudentIDP: bigint
    FullName: string | null
    MobileNo: string | null
    Email: string | null
    GenderID: number | null
    Address: string | null
    FatherMobileNo: string | null
    CuurentYearID: Decimal | null
    GRNNo: string | null
    AadharNumber: bigint | null
    PANNo: string | null
    ScholarshipAmount: number | null
    EnrollmenyYear: string | null
    FeesTypeID: number | null
    BatchID: number | null
    Remark1: string | null
    Remark2: string | null
    Remark3: string | null
    Password: string | null
    OTP: string | null
    TermFee: number | null
    TotalFee: number | null
    DepositRefundable: number | null
    DepositReceived: number | null
    ImportRefID: bigint | null
    ProfileImage: string | null
    PassYear1: number | null
    PassYear2: number | null
    PassYear3: number | null
    PassYear4: number | null
    IsActive: boolean
    IsDelete: boolean | null
    EntryBy: bigint
    EntryDate: Date
    _count: TblStudentCountAggregateOutputType | null
    _avg: TblStudentAvgAggregateOutputType | null
    _sum: TblStudentSumAggregateOutputType | null
    _min: TblStudentMinAggregateOutputType | null
    _max: TblStudentMaxAggregateOutputType | null
  }

  type GetTblStudentGroupByPayload<T extends tblStudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TblStudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TblStudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TblStudentGroupByOutputType[P]>
            : GetScalarType<T[P], TblStudentGroupByOutputType[P]>
        }
      >
    >


  export type tblStudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    StudentIDP?: boolean
    FullName?: boolean
    MobileNo?: boolean
    Email?: boolean
    GenderID?: boolean
    Address?: boolean
    FatherMobileNo?: boolean
    CuurentYearID?: boolean
    GRNNo?: boolean
    AadharNumber?: boolean
    PANNo?: boolean
    ScholarshipAmount?: boolean
    EnrollmenyYear?: boolean
    FeesTypeID?: boolean
    BatchID?: boolean
    Remark1?: boolean
    Remark2?: boolean
    Remark3?: boolean
    Password?: boolean
    OTP?: boolean
    TermFee?: boolean
    TotalFee?: boolean
    DepositRefundable?: boolean
    DepositReceived?: boolean
    ImportRefID?: boolean
    ProfileImage?: boolean
    PassYear1?: boolean
    PassYear2?: boolean
    PassYear3?: boolean
    PassYear4?: boolean
    IsActive?: boolean
    IsDelete?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
    AppUser?: boolean | tblStudent$AppUserArgs<ExtArgs>
    _count?: boolean | TblStudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tblStudent"]>


  export type tblStudentSelectScalar = {
    StudentIDP?: boolean
    FullName?: boolean
    MobileNo?: boolean
    Email?: boolean
    GenderID?: boolean
    Address?: boolean
    FatherMobileNo?: boolean
    CuurentYearID?: boolean
    GRNNo?: boolean
    AadharNumber?: boolean
    PANNo?: boolean
    ScholarshipAmount?: boolean
    EnrollmenyYear?: boolean
    FeesTypeID?: boolean
    BatchID?: boolean
    Remark1?: boolean
    Remark2?: boolean
    Remark3?: boolean
    Password?: boolean
    OTP?: boolean
    TermFee?: boolean
    TotalFee?: boolean
    DepositRefundable?: boolean
    DepositReceived?: boolean
    ImportRefID?: boolean
    ProfileImage?: boolean
    PassYear1?: boolean
    PassYear2?: boolean
    PassYear3?: boolean
    PassYear4?: boolean
    IsActive?: boolean
    IsDelete?: boolean
    EntryBy?: boolean
    EntryDate?: boolean
  }

  export type tblStudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AppUser?: boolean | tblStudent$AppUserArgs<ExtArgs>
    _count?: boolean | TblStudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tblStudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tblStudent"
    objects: {
      AppUser: Prisma.$AppUserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      StudentIDP: bigint
      FullName: string | null
      MobileNo: string | null
      Email: string | null
      GenderID: number | null
      Address: string | null
      FatherMobileNo: string | null
      CuurentYearID: Prisma.Decimal | null
      GRNNo: string | null
      AadharNumber: bigint | null
      PANNo: string | null
      ScholarshipAmount: number | null
      EnrollmenyYear: string | null
      FeesTypeID: number | null
      BatchID: number | null
      Remark1: string | null
      Remark2: string | null
      Remark3: string | null
      Password: string | null
      OTP: string | null
      TermFee: number | null
      TotalFee: number | null
      DepositRefundable: number | null
      DepositReceived: number | null
      ImportRefID: bigint | null
      ProfileImage: string | null
      PassYear1: number | null
      PassYear2: number | null
      PassYear3: number | null
      PassYear4: number | null
      IsActive: boolean
      IsDelete: boolean | null
      EntryBy: bigint
      EntryDate: Date
    }, ExtArgs["result"]["tblStudent"]>
    composites: {}
  }

  type tblStudentGetPayload<S extends boolean | null | undefined | tblStudentDefaultArgs> = $Result.GetResult<Prisma.$tblStudentPayload, S>

  type tblStudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<tblStudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TblStudentCountAggregateInputType | true
    }

  export interface tblStudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tblStudent'], meta: { name: 'tblStudent' } }
    /**
     * Find zero or one TblStudent that matches the filter.
     * @param {tblStudentFindUniqueArgs} args - Arguments to find a TblStudent
     * @example
     * // Get one TblStudent
     * const tblStudent = await prisma.tblStudent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tblStudentFindUniqueArgs>(args: SelectSubset<T, tblStudentFindUniqueArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TblStudent that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {tblStudentFindUniqueOrThrowArgs} args - Arguments to find a TblStudent
     * @example
     * // Get one TblStudent
     * const tblStudent = await prisma.tblStudent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tblStudentFindUniqueOrThrowArgs>(args: SelectSubset<T, tblStudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TblStudent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStudentFindFirstArgs} args - Arguments to find a TblStudent
     * @example
     * // Get one TblStudent
     * const tblStudent = await prisma.tblStudent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tblStudentFindFirstArgs>(args?: SelectSubset<T, tblStudentFindFirstArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TblStudent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStudentFindFirstOrThrowArgs} args - Arguments to find a TblStudent
     * @example
     * // Get one TblStudent
     * const tblStudent = await prisma.tblStudent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tblStudentFindFirstOrThrowArgs>(args?: SelectSubset<T, tblStudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TblStudents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TblStudents
     * const tblStudents = await prisma.tblStudent.findMany()
     * 
     * // Get first 10 TblStudents
     * const tblStudents = await prisma.tblStudent.findMany({ take: 10 })
     * 
     * // Only select the `StudentIDP`
     * const tblStudentWithStudentIDPOnly = await prisma.tblStudent.findMany({ select: { StudentIDP: true } })
     * 
     */
    findMany<T extends tblStudentFindManyArgs>(args?: SelectSubset<T, tblStudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TblStudent.
     * @param {tblStudentCreateArgs} args - Arguments to create a TblStudent.
     * @example
     * // Create one TblStudent
     * const TblStudent = await prisma.tblStudent.create({
     *   data: {
     *     // ... data to create a TblStudent
     *   }
     * })
     * 
     */
    create<T extends tblStudentCreateArgs>(args: SelectSubset<T, tblStudentCreateArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TblStudents.
     * @param {tblStudentCreateManyArgs} args - Arguments to create many TblStudents.
     * @example
     * // Create many TblStudents
     * const tblStudent = await prisma.tblStudent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tblStudentCreateManyArgs>(args?: SelectSubset<T, tblStudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TblStudent.
     * @param {tblStudentDeleteArgs} args - Arguments to delete one TblStudent.
     * @example
     * // Delete one TblStudent
     * const TblStudent = await prisma.tblStudent.delete({
     *   where: {
     *     // ... filter to delete one TblStudent
     *   }
     * })
     * 
     */
    delete<T extends tblStudentDeleteArgs>(args: SelectSubset<T, tblStudentDeleteArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TblStudent.
     * @param {tblStudentUpdateArgs} args - Arguments to update one TblStudent.
     * @example
     * // Update one TblStudent
     * const tblStudent = await prisma.tblStudent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tblStudentUpdateArgs>(args: SelectSubset<T, tblStudentUpdateArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TblStudents.
     * @param {tblStudentDeleteManyArgs} args - Arguments to filter TblStudents to delete.
     * @example
     * // Delete a few TblStudents
     * const { count } = await prisma.tblStudent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tblStudentDeleteManyArgs>(args?: SelectSubset<T, tblStudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TblStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TblStudents
     * const tblStudent = await prisma.tblStudent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tblStudentUpdateManyArgs>(args: SelectSubset<T, tblStudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TblStudent.
     * @param {tblStudentUpsertArgs} args - Arguments to update or create a TblStudent.
     * @example
     * // Update or create a TblStudent
     * const tblStudent = await prisma.tblStudent.upsert({
     *   create: {
     *     // ... data to create a TblStudent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TblStudent we want to update
     *   }
     * })
     */
    upsert<T extends tblStudentUpsertArgs>(args: SelectSubset<T, tblStudentUpsertArgs<ExtArgs>>): Prisma__tblStudentClient<$Result.GetResult<Prisma.$tblStudentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TblStudents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStudentCountArgs} args - Arguments to filter TblStudents to count.
     * @example
     * // Count the number of TblStudents
     * const count = await prisma.tblStudent.count({
     *   where: {
     *     // ... the filter for the TblStudents we want to count
     *   }
     * })
    **/
    count<T extends tblStudentCountArgs>(
      args?: Subset<T, tblStudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TblStudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TblStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TblStudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TblStudentAggregateArgs>(args: Subset<T, TblStudentAggregateArgs>): Prisma.PrismaPromise<GetTblStudentAggregateType<T>>

    /**
     * Group by TblStudent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tblStudentGroupByArgs} args - Group by arguments.
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
      T extends tblStudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tblStudentGroupByArgs['orderBy'] }
        : { orderBy?: tblStudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tblStudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTblStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tblStudent model
   */
  readonly fields: tblStudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tblStudent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tblStudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AppUser<T extends tblStudent$AppUserArgs<ExtArgs> = {}>(args?: Subset<T, tblStudent$AppUserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the tblStudent model
   */ 
  interface tblStudentFieldRefs {
    readonly StudentIDP: FieldRef<"tblStudent", 'BigInt'>
    readonly FullName: FieldRef<"tblStudent", 'String'>
    readonly MobileNo: FieldRef<"tblStudent", 'String'>
    readonly Email: FieldRef<"tblStudent", 'String'>
    readonly GenderID: FieldRef<"tblStudent", 'Int'>
    readonly Address: FieldRef<"tblStudent", 'String'>
    readonly FatherMobileNo: FieldRef<"tblStudent", 'String'>
    readonly CuurentYearID: FieldRef<"tblStudent", 'Decimal'>
    readonly GRNNo: FieldRef<"tblStudent", 'String'>
    readonly AadharNumber: FieldRef<"tblStudent", 'BigInt'>
    readonly PANNo: FieldRef<"tblStudent", 'String'>
    readonly ScholarshipAmount: FieldRef<"tblStudent", 'Int'>
    readonly EnrollmenyYear: FieldRef<"tblStudent", 'String'>
    readonly FeesTypeID: FieldRef<"tblStudent", 'Int'>
    readonly BatchID: FieldRef<"tblStudent", 'Int'>
    readonly Remark1: FieldRef<"tblStudent", 'String'>
    readonly Remark2: FieldRef<"tblStudent", 'String'>
    readonly Remark3: FieldRef<"tblStudent", 'String'>
    readonly Password: FieldRef<"tblStudent", 'String'>
    readonly OTP: FieldRef<"tblStudent", 'String'>
    readonly TermFee: FieldRef<"tblStudent", 'Float'>
    readonly TotalFee: FieldRef<"tblStudent", 'Float'>
    readonly DepositRefundable: FieldRef<"tblStudent", 'Float'>
    readonly DepositReceived: FieldRef<"tblStudent", 'Float'>
    readonly ImportRefID: FieldRef<"tblStudent", 'BigInt'>
    readonly ProfileImage: FieldRef<"tblStudent", 'String'>
    readonly PassYear1: FieldRef<"tblStudent", 'Int'>
    readonly PassYear2: FieldRef<"tblStudent", 'Int'>
    readonly PassYear3: FieldRef<"tblStudent", 'Int'>
    readonly PassYear4: FieldRef<"tblStudent", 'Int'>
    readonly IsActive: FieldRef<"tblStudent", 'Boolean'>
    readonly IsDelete: FieldRef<"tblStudent", 'Boolean'>
    readonly EntryBy: FieldRef<"tblStudent", 'BigInt'>
    readonly EntryDate: FieldRef<"tblStudent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tblStudent findUnique
   */
  export type tblStudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * Filter, which tblStudent to fetch.
     */
    where: tblStudentWhereUniqueInput
  }

  /**
   * tblStudent findUniqueOrThrow
   */
  export type tblStudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * Filter, which tblStudent to fetch.
     */
    where: tblStudentWhereUniqueInput
  }

  /**
   * tblStudent findFirst
   */
  export type tblStudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * Filter, which tblStudent to fetch.
     */
    where?: tblStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStudents to fetch.
     */
    orderBy?: tblStudentOrderByWithRelationInput | tblStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblStudents.
     */
    cursor?: tblStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblStudents.
     */
    distinct?: TblStudentScalarFieldEnum | TblStudentScalarFieldEnum[]
  }

  /**
   * tblStudent findFirstOrThrow
   */
  export type tblStudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * Filter, which tblStudent to fetch.
     */
    where?: tblStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStudents to fetch.
     */
    orderBy?: tblStudentOrderByWithRelationInput | tblStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tblStudents.
     */
    cursor?: tblStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStudents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tblStudents.
     */
    distinct?: TblStudentScalarFieldEnum | TblStudentScalarFieldEnum[]
  }

  /**
   * tblStudent findMany
   */
  export type tblStudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * Filter, which tblStudents to fetch.
     */
    where?: tblStudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tblStudents to fetch.
     */
    orderBy?: tblStudentOrderByWithRelationInput | tblStudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tblStudents.
     */
    cursor?: tblStudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tblStudents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tblStudents.
     */
    skip?: number
    distinct?: TblStudentScalarFieldEnum | TblStudentScalarFieldEnum[]
  }

  /**
   * tblStudent create
   */
  export type tblStudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * The data needed to create a tblStudent.
     */
    data: XOR<tblStudentCreateInput, tblStudentUncheckedCreateInput>
  }

  /**
   * tblStudent createMany
   */
  export type tblStudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tblStudents.
     */
    data: tblStudentCreateManyInput | tblStudentCreateManyInput[]
  }

  /**
   * tblStudent update
   */
  export type tblStudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * The data needed to update a tblStudent.
     */
    data: XOR<tblStudentUpdateInput, tblStudentUncheckedUpdateInput>
    /**
     * Choose, which tblStudent to update.
     */
    where: tblStudentWhereUniqueInput
  }

  /**
   * tblStudent updateMany
   */
  export type tblStudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tblStudents.
     */
    data: XOR<tblStudentUpdateManyMutationInput, tblStudentUncheckedUpdateManyInput>
    /**
     * Filter which tblStudents to update
     */
    where?: tblStudentWhereInput
  }

  /**
   * tblStudent upsert
   */
  export type tblStudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * The filter to search for the tblStudent to update in case it exists.
     */
    where: tblStudentWhereUniqueInput
    /**
     * In case the tblStudent found by the `where` argument doesn't exist, create a new tblStudent with this data.
     */
    create: XOR<tblStudentCreateInput, tblStudentUncheckedCreateInput>
    /**
     * In case the tblStudent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tblStudentUpdateInput, tblStudentUncheckedUpdateInput>
  }

  /**
   * tblStudent delete
   */
  export type tblStudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
    /**
     * Filter which tblStudent to delete.
     */
    where: tblStudentWhereUniqueInput
  }

  /**
   * tblStudent deleteMany
   */
  export type tblStudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tblStudents to delete
     */
    where?: tblStudentWhereInput
  }

  /**
   * tblStudent.AppUser
   */
  export type tblStudent$AppUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppUser
     */
    select?: AppUserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppUserInclude<ExtArgs> | null
    where?: AppUserWhereInput
    orderBy?: AppUserOrderByWithRelationInput | AppUserOrderByWithRelationInput[]
    cursor?: AppUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppUserScalarFieldEnum | AppUserScalarFieldEnum[]
  }

  /**
   * tblStudent without action
   */
  export type tblStudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tblStudent
     */
    select?: tblStudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tblStudentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AppUserScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId'
  };

  export type AppUserScalarFieldEnum = (typeof AppUserScalarFieldEnum)[keyof typeof AppUserScalarFieldEnum]


  export const AppSessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type AppSessionScalarFieldEnum = (typeof AppSessionScalarFieldEnum)[keyof typeof AppSessionScalarFieldEnum]


  export const AppEmailVerificationCodesScalarFieldEnum: {
    id: 'id',
    code: 'code',
    expiresAt: 'expiresAt',
    userId: 'userId'
  };

  export type AppEmailVerificationCodesScalarFieldEnum = (typeof AppEmailVerificationCodesScalarFieldEnum)[keyof typeof AppEmailVerificationCodesScalarFieldEnum]


  export const MstExpenseHeadScalarFieldEnum: {
    ExpenseHeadIDP: 'ExpenseHeadIDP',
    ExpenseHeadName: 'ExpenseHeadName',
    IsActive: 'IsActive',
    IsDeleted: 'IsDeleted',
    EntryBy: 'EntryBy',
    EntryDate: 'EntryDate'
  };

  export type MstExpenseHeadScalarFieldEnum = (typeof MstExpenseHeadScalarFieldEnum)[keyof typeof MstExpenseHeadScalarFieldEnum]


  export const MstFeesScalarFieldEnum: {
    FeesIDP: 'FeesIDP',
    DepositFee: 'DepositFee',
    TurmFee1: 'TurmFee1',
    TurmFee2: 'TurmFee2',
    TurmFee3: 'TurmFee3',
    TurmFee4: 'TurmFee4',
    TurmFee5: 'TurmFee5',
    TurmFee6: 'TurmFee6',
    TurmFee7: 'TurmFee7',
    TurmFee8: 'TurmFee8',
    TurmFee9: 'TurmFee9',
    TurmFee1_Collection: 'TurmFee1_Collection',
    TurmFee2_Collection: 'TurmFee2_Collection',
    TurmFee3_Collection: 'TurmFee3_Collection',
    TurmFee4_Collection: 'TurmFee4_Collection',
    TurmFee5_Collection: 'TurmFee5_Collection',
    TurmFee6_Collection: 'TurmFee6_Collection',
    TurmFee7_Collection: 'TurmFee7_Collection',
    TurmFee8_Collection: 'TurmFee8_Collection',
    TurmFee9_Collection: 'TurmFee9_Collection',
    FeesTypeID: 'FeesTypeID',
    BatchID: 'BatchID',
    IsActive: 'IsActive',
    IsDelete: 'IsDelete',
    EntryBy: 'EntryBy',
    EntryDate: 'EntryDate'
  };

  export type MstFeesScalarFieldEnum = (typeof MstFeesScalarFieldEnum)[keyof typeof MstFeesScalarFieldEnum]


  export const SysAdminScalarFieldEnum: {
    AdminIDP: 'AdminIDP',
    UserName: 'UserName',
    Password: 'Password',
    FirstName: 'FirstName',
    LastName: 'LastName',
    TermFee: 'TermFee',
    SMTPEmailAddress: 'SMTPEmailAddress',
    SMTPUserName: 'SMTPUserName',
    SMTPPassword: 'SMTPPassword',
    SMTPHost: 'SMTPHost',
    SMTPPort: 'SMTPPort',
    SMTPSSL: 'SMTPSSL',
    OTP: 'OTP',
    SMSKey: 'SMSKey',
    GoogleMapKey: 'GoogleMapKey',
    GoogleLocationKey: 'GoogleLocationKey',
    PaymentGatewayKey: 'PaymentGatewayKey',
    RevenueCommission: 'RevenueCommission',
    CDNPath: 'CDNPath',
    UpdatedDate: 'UpdatedDate'
  };

  export type SysAdminScalarFieldEnum = (typeof SysAdminScalarFieldEnum)[keyof typeof SysAdminScalarFieldEnum]


  export const TblBudgetScalarFieldEnum: {
    BudgetIDP: 'BudgetIDP',
    FinancialYearID: 'FinancialYearID',
    ExpenseHeadIDF: 'ExpenseHeadIDF',
    BudgetAmount: 'BudgetAmount',
    Remarks: 'Remarks',
    IsDeleted: 'IsDeleted',
    EntryBy: 'EntryBy',
    EntryDate: 'EntryDate'
  };

  export type TblBudgetScalarFieldEnum = (typeof TblBudgetScalarFieldEnum)[keyof typeof TblBudgetScalarFieldEnum]


  export const TblDocumentScalarFieldEnum: {
    DocumentIDP: 'DocumentIDP',
    StudentIDF: 'StudentIDF',
    DocumentTypeID: 'DocumentTypeID',
    Attachment: 'Attachment',
    IsDelete: 'IsDelete',
    EntryBy: 'EntryBy',
    EntryDate: 'EntryDate'
  };

  export type TblDocumentScalarFieldEnum = (typeof TblDocumentScalarFieldEnum)[keyof typeof TblDocumentScalarFieldEnum]


  export const TblExpenseScalarFieldEnum: {
    ExpenseIDP: 'ExpenseIDP',
    ExpenseHeadIDF: 'ExpenseHeadIDF',
    ExpenseDate: 'ExpenseDate',
    Amount: 'Amount',
    Remarks: 'Remarks',
    IsDeleted: 'IsDeleted',
    EntryBy: 'EntryBy',
    EntryDate: 'EntryDate'
  };

  export type TblExpenseScalarFieldEnum = (typeof TblExpenseScalarFieldEnum)[keyof typeof TblExpenseScalarFieldEnum]


  export const TblFeesScalarFieldEnum: {
    FeesIDP: 'FeesIDP',
    StudentIDF: 'StudentIDF',
    TermID: 'TermID',
    TermEntryID: 'TermEntryID',
    ReceiptDate: 'ReceiptDate',
    ReceiptAmount: 'ReceiptAmount',
    Remarks: 'Remarks'
  };

  export type TblFeesScalarFieldEnum = (typeof TblFeesScalarFieldEnum)[keyof typeof TblFeesScalarFieldEnum]


  export const TblStaffScalarFieldEnum: {
    StaffIDP: 'StaffIDP',
    FullName: 'FullName',
    MobileNo: 'MobileNo',
    Email: 'Email',
    GenderID: 'GenderID',
    DesignationID: 'DesignationID',
    DepartmentID: 'DepartmentID',
    StaffTypeID: 'StaffTypeID',
    DateOfBirth: 'DateOfBirth',
    Age: 'Age',
    DateOfJoining: 'DateOfJoining',
    DateOfAddmission: 'DateOfAddmission',
    CastandReligion: 'CastandReligion',
    Qualification: 'Qualification',
    UGPassingDate: 'UGPassingDate',
    UGCollageName: 'UGCollageName',
    UGUniversityName: 'UGUniversityName',
    PGPassingDate: 'PGPassingDate',
    PGCollageName: 'PGCollageName',
    PGUniversityName: 'PGUniversityName',
    StateRegNumber: 'StateRegNumber',
    NCHRegNumber: 'NCHRegNumber',
    ExperienceDetail: 'ExperienceDetail',
    PromotionDate: 'PromotionDate',
    PromotionDesignationID: 'PromotionDesignationID',
    AdharNumber: 'AdharNumber',
    PANNumber: 'PANNumber',
    PermanentAddress1: 'PermanentAddress1',
    PermanentAddress2: 'PermanentAddress2',
    PermanentCity: 'PermanentCity',
    PermanentDistrict: 'PermanentDistrict',
    PermanentState: 'PermanentState',
    CurrentAddress1: 'CurrentAddress1',
    CurrentAddress2: 'CurrentAddress2',
    CurrentCity: 'CurrentCity',
    CurrentDistrict: 'CurrentDistrict',
    CurrentState: 'CurrentState',
    RefferancePerson: 'RefferancePerson',
    PassportPhoto: 'PassportPhoto',
    SignPhoto: 'SignPhoto',
    Scale: 'Scale',
    Password: 'Password',
    OTP: 'OTP',
    Remark1: 'Remark1',
    Remark2: 'Remark2',
    IsActive: 'IsActive',
    IsDelete: 'IsDelete',
    EntryBy: 'EntryBy',
    EntryDate: 'EntryDate'
  };

  export type TblStaffScalarFieldEnum = (typeof TblStaffScalarFieldEnum)[keyof typeof TblStaffScalarFieldEnum]


  export const TblStaffExperienceScalarFieldEnum: {
    StaffExperienceIDP: 'StaffExperienceIDP',
    StaffIDF: 'StaffIDF',
    InstituteName: 'InstituteName',
    FromDate: 'FromDate',
    ToDate: 'ToDate',
    Designation: 'Designation',
    TotalYear: 'TotalYear',
    IsDelete: 'IsDelete',
    EntryDate: 'EntryDate'
  };

  export type TblStaffExperienceScalarFieldEnum = (typeof TblStaffExperienceScalarFieldEnum)[keyof typeof TblStaffExperienceScalarFieldEnum]


  export const TblStudentScalarFieldEnum: {
    StudentIDP: 'StudentIDP',
    FullName: 'FullName',
    MobileNo: 'MobileNo',
    Email: 'Email',
    GenderID: 'GenderID',
    Address: 'Address',
    FatherMobileNo: 'FatherMobileNo',
    CuurentYearID: 'CuurentYearID',
    GRNNo: 'GRNNo',
    AadharNumber: 'AadharNumber',
    PANNo: 'PANNo',
    ScholarshipAmount: 'ScholarshipAmount',
    EnrollmenyYear: 'EnrollmenyYear',
    FeesTypeID: 'FeesTypeID',
    BatchID: 'BatchID',
    Remark1: 'Remark1',
    Remark2: 'Remark2',
    Remark3: 'Remark3',
    Password: 'Password',
    OTP: 'OTP',
    TermFee: 'TermFee',
    TotalFee: 'TotalFee',
    DepositRefundable: 'DepositRefundable',
    DepositReceived: 'DepositReceived',
    ImportRefID: 'ImportRefID',
    ProfileImage: 'ProfileImage',
    PassYear1: 'PassYear1',
    PassYear2: 'PassYear2',
    PassYear3: 'PassYear3',
    PassYear4: 'PassYear4',
    IsActive: 'IsActive',
    IsDelete: 'IsDelete',
    EntryBy: 'EntryBy',
    EntryDate: 'EntryDate'
  };

  export type TblStudentScalarFieldEnum = (typeof TblStudentScalarFieldEnum)[keyof typeof TblStudentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    
  /**
   * Deep Input Types
   */


  export type AppUserWhereInput = {
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    id?: StringFilter<"AppUser"> | string
    studentId?: BigIntFilter<"AppUser"> | bigint | number
    student?: XOR<TblStudentRelationFilter, tblStudentWhereInput>
    appSessions?: AppSessionListRelationFilter
    appEmailVerificationCodes?: AppEmailVerificationCodesListRelationFilter
  }

  export type AppUserOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    student?: tblStudentOrderByWithRelationInput
    appSessions?: AppSessionOrderByRelationAggregateInput
    appEmailVerificationCodes?: AppEmailVerificationCodesOrderByRelationAggregateInput
  }

  export type AppUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppUserWhereInput | AppUserWhereInput[]
    OR?: AppUserWhereInput[]
    NOT?: AppUserWhereInput | AppUserWhereInput[]
    studentId?: BigIntFilter<"AppUser"> | bigint | number
    student?: XOR<TblStudentRelationFilter, tblStudentWhereInput>
    appSessions?: AppSessionListRelationFilter
    appEmailVerificationCodes?: AppEmailVerificationCodesListRelationFilter
  }, "id">

  export type AppUserOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    _count?: AppUserCountOrderByAggregateInput
    _avg?: AppUserAvgOrderByAggregateInput
    _max?: AppUserMaxOrderByAggregateInput
    _min?: AppUserMinOrderByAggregateInput
    _sum?: AppUserSumOrderByAggregateInput
  }

  export type AppUserScalarWhereWithAggregatesInput = {
    AND?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    OR?: AppUserScalarWhereWithAggregatesInput[]
    NOT?: AppUserScalarWhereWithAggregatesInput | AppUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppUser"> | string
    studentId?: BigIntWithAggregatesFilter<"AppUser"> | bigint | number
  }

  export type AppSessionWhereInput = {
    AND?: AppSessionWhereInput | AppSessionWhereInput[]
    OR?: AppSessionWhereInput[]
    NOT?: AppSessionWhereInput | AppSessionWhereInput[]
    id?: StringFilter<"AppSession"> | string
    userId?: StringFilter<"AppSession"> | string
    expiresAt?: DateTimeFilter<"AppSession"> | Date | string
    appUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
  }

  export type AppSessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    appUser?: AppUserOrderByWithRelationInput
  }

  export type AppSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppSessionWhereInput | AppSessionWhereInput[]
    OR?: AppSessionWhereInput[]
    NOT?: AppSessionWhereInput | AppSessionWhereInput[]
    userId?: StringFilter<"AppSession"> | string
    expiresAt?: DateTimeFilter<"AppSession"> | Date | string
    appUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
  }, "id">

  export type AppSessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: AppSessionCountOrderByAggregateInput
    _max?: AppSessionMaxOrderByAggregateInput
    _min?: AppSessionMinOrderByAggregateInput
  }

  export type AppSessionScalarWhereWithAggregatesInput = {
    AND?: AppSessionScalarWhereWithAggregatesInput | AppSessionScalarWhereWithAggregatesInput[]
    OR?: AppSessionScalarWhereWithAggregatesInput[]
    NOT?: AppSessionScalarWhereWithAggregatesInput | AppSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppSession"> | string
    userId?: StringWithAggregatesFilter<"AppSession"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AppSession"> | Date | string
  }

  export type AppEmailVerificationCodesWhereInput = {
    AND?: AppEmailVerificationCodesWhereInput | AppEmailVerificationCodesWhereInput[]
    OR?: AppEmailVerificationCodesWhereInput[]
    NOT?: AppEmailVerificationCodesWhereInput | AppEmailVerificationCodesWhereInput[]
    id?: BigIntFilter<"AppEmailVerificationCodes"> | bigint | number
    code?: StringFilter<"AppEmailVerificationCodes"> | string
    expiresAt?: DateTimeFilter<"AppEmailVerificationCodes"> | Date | string
    userId?: StringFilter<"AppEmailVerificationCodes"> | string
    appUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
  }

  export type AppEmailVerificationCodesOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    appUser?: AppUserOrderByWithRelationInput
  }

  export type AppEmailVerificationCodesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AppEmailVerificationCodesWhereInput | AppEmailVerificationCodesWhereInput[]
    OR?: AppEmailVerificationCodesWhereInput[]
    NOT?: AppEmailVerificationCodesWhereInput | AppEmailVerificationCodesWhereInput[]
    code?: StringFilter<"AppEmailVerificationCodes"> | string
    expiresAt?: DateTimeFilter<"AppEmailVerificationCodes"> | Date | string
    userId?: StringFilter<"AppEmailVerificationCodes"> | string
    appUser?: XOR<AppUserRelationFilter, AppUserWhereInput>
  }, "id">

  export type AppEmailVerificationCodesOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    _count?: AppEmailVerificationCodesCountOrderByAggregateInput
    _avg?: AppEmailVerificationCodesAvgOrderByAggregateInput
    _max?: AppEmailVerificationCodesMaxOrderByAggregateInput
    _min?: AppEmailVerificationCodesMinOrderByAggregateInput
    _sum?: AppEmailVerificationCodesSumOrderByAggregateInput
  }

  export type AppEmailVerificationCodesScalarWhereWithAggregatesInput = {
    AND?: AppEmailVerificationCodesScalarWhereWithAggregatesInput | AppEmailVerificationCodesScalarWhereWithAggregatesInput[]
    OR?: AppEmailVerificationCodesScalarWhereWithAggregatesInput[]
    NOT?: AppEmailVerificationCodesScalarWhereWithAggregatesInput | AppEmailVerificationCodesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"AppEmailVerificationCodes"> | bigint | number
    code?: StringWithAggregatesFilter<"AppEmailVerificationCodes"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"AppEmailVerificationCodes"> | Date | string
    userId?: StringWithAggregatesFilter<"AppEmailVerificationCodes"> | string
  }

  export type mstExpenseHeadWhereInput = {
    AND?: mstExpenseHeadWhereInput | mstExpenseHeadWhereInput[]
    OR?: mstExpenseHeadWhereInput[]
    NOT?: mstExpenseHeadWhereInput | mstExpenseHeadWhereInput[]
    ExpenseHeadIDP?: BigIntFilter<"mstExpenseHead"> | bigint | number
    ExpenseHeadName?: StringFilter<"mstExpenseHead"> | string
    IsActive?: BoolFilter<"mstExpenseHead"> | boolean
    IsDeleted?: BoolNullableFilter<"mstExpenseHead"> | boolean | null
    EntryBy?: BigIntFilter<"mstExpenseHead"> | bigint | number
    EntryDate?: DateTimeFilter<"mstExpenseHead"> | Date | string
  }

  export type mstExpenseHeadOrderByWithRelationInput = {
    ExpenseHeadIDP?: SortOrder
    ExpenseHeadName?: SortOrder
    IsActive?: SortOrder
    IsDeleted?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type mstExpenseHeadWhereUniqueInput = Prisma.AtLeast<{
    ExpenseHeadIDP?: bigint | number
    AND?: mstExpenseHeadWhereInput | mstExpenseHeadWhereInput[]
    OR?: mstExpenseHeadWhereInput[]
    NOT?: mstExpenseHeadWhereInput | mstExpenseHeadWhereInput[]
    ExpenseHeadName?: StringFilter<"mstExpenseHead"> | string
    IsActive?: BoolFilter<"mstExpenseHead"> | boolean
    IsDeleted?: BoolNullableFilter<"mstExpenseHead"> | boolean | null
    EntryBy?: BigIntFilter<"mstExpenseHead"> | bigint | number
    EntryDate?: DateTimeFilter<"mstExpenseHead"> | Date | string
  }, "ExpenseHeadIDP">

  export type mstExpenseHeadOrderByWithAggregationInput = {
    ExpenseHeadIDP?: SortOrder
    ExpenseHeadName?: SortOrder
    IsActive?: SortOrder
    IsDeleted?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
    _count?: mstExpenseHeadCountOrderByAggregateInput
    _avg?: mstExpenseHeadAvgOrderByAggregateInput
    _max?: mstExpenseHeadMaxOrderByAggregateInput
    _min?: mstExpenseHeadMinOrderByAggregateInput
    _sum?: mstExpenseHeadSumOrderByAggregateInput
  }

  export type mstExpenseHeadScalarWhereWithAggregatesInput = {
    AND?: mstExpenseHeadScalarWhereWithAggregatesInput | mstExpenseHeadScalarWhereWithAggregatesInput[]
    OR?: mstExpenseHeadScalarWhereWithAggregatesInput[]
    NOT?: mstExpenseHeadScalarWhereWithAggregatesInput | mstExpenseHeadScalarWhereWithAggregatesInput[]
    ExpenseHeadIDP?: BigIntWithAggregatesFilter<"mstExpenseHead"> | bigint | number
    ExpenseHeadName?: StringWithAggregatesFilter<"mstExpenseHead"> | string
    IsActive?: BoolWithAggregatesFilter<"mstExpenseHead"> | boolean
    IsDeleted?: BoolNullableWithAggregatesFilter<"mstExpenseHead"> | boolean | null
    EntryBy?: BigIntWithAggregatesFilter<"mstExpenseHead"> | bigint | number
    EntryDate?: DateTimeWithAggregatesFilter<"mstExpenseHead"> | Date | string
  }

  export type mstFeesWhereInput = {
    AND?: mstFeesWhereInput | mstFeesWhereInput[]
    OR?: mstFeesWhereInput[]
    NOT?: mstFeesWhereInput | mstFeesWhereInput[]
    FeesIDP?: BigIntFilter<"mstFees"> | bigint | number
    DepositFee?: IntNullableFilter<"mstFees"> | number | null
    TurmFee1?: IntNullableFilter<"mstFees"> | number | null
    TurmFee2?: IntNullableFilter<"mstFees"> | number | null
    TurmFee3?: IntNullableFilter<"mstFees"> | number | null
    TurmFee4?: IntNullableFilter<"mstFees"> | number | null
    TurmFee5?: IntNullableFilter<"mstFees"> | number | null
    TurmFee6?: IntNullableFilter<"mstFees"> | number | null
    TurmFee7?: IntNullableFilter<"mstFees"> | number | null
    TurmFee8?: IntNullableFilter<"mstFees"> | number | null
    TurmFee9?: IntNullableFilter<"mstFees"> | number | null
    TurmFee1_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee2_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee3_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee4_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee5_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee6_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee7_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee8_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee9_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    FeesTypeID?: IntNullableFilter<"mstFees"> | number | null
    BatchID?: IntNullableFilter<"mstFees"> | number | null
    IsActive?: BoolFilter<"mstFees"> | boolean
    IsDelete?: BoolNullableFilter<"mstFees"> | boolean | null
    EntryBy?: BigIntNullableFilter<"mstFees"> | bigint | number | null
    EntryDate?: DateTimeNullableFilter<"mstFees"> | Date | string | null
  }

  export type mstFeesOrderByWithRelationInput = {
    FeesIDP?: SortOrder
    DepositFee?: SortOrderInput | SortOrder
    TurmFee1?: SortOrderInput | SortOrder
    TurmFee2?: SortOrderInput | SortOrder
    TurmFee3?: SortOrderInput | SortOrder
    TurmFee4?: SortOrderInput | SortOrder
    TurmFee5?: SortOrderInput | SortOrder
    TurmFee6?: SortOrderInput | SortOrder
    TurmFee7?: SortOrderInput | SortOrder
    TurmFee8?: SortOrderInput | SortOrder
    TurmFee9?: SortOrderInput | SortOrder
    TurmFee1_Collection?: SortOrderInput | SortOrder
    TurmFee2_Collection?: SortOrderInput | SortOrder
    TurmFee3_Collection?: SortOrderInput | SortOrder
    TurmFee4_Collection?: SortOrderInput | SortOrder
    TurmFee5_Collection?: SortOrderInput | SortOrder
    TurmFee6_Collection?: SortOrderInput | SortOrder
    TurmFee7_Collection?: SortOrderInput | SortOrder
    TurmFee8_Collection?: SortOrderInput | SortOrder
    TurmFee9_Collection?: SortOrderInput | SortOrder
    FeesTypeID?: SortOrderInput | SortOrder
    BatchID?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryBy?: SortOrderInput | SortOrder
    EntryDate?: SortOrderInput | SortOrder
  }

  export type mstFeesWhereUniqueInput = Prisma.AtLeast<{
    FeesIDP?: bigint | number
    AND?: mstFeesWhereInput | mstFeesWhereInput[]
    OR?: mstFeesWhereInput[]
    NOT?: mstFeesWhereInput | mstFeesWhereInput[]
    DepositFee?: IntNullableFilter<"mstFees"> | number | null
    TurmFee1?: IntNullableFilter<"mstFees"> | number | null
    TurmFee2?: IntNullableFilter<"mstFees"> | number | null
    TurmFee3?: IntNullableFilter<"mstFees"> | number | null
    TurmFee4?: IntNullableFilter<"mstFees"> | number | null
    TurmFee5?: IntNullableFilter<"mstFees"> | number | null
    TurmFee6?: IntNullableFilter<"mstFees"> | number | null
    TurmFee7?: IntNullableFilter<"mstFees"> | number | null
    TurmFee8?: IntNullableFilter<"mstFees"> | number | null
    TurmFee9?: IntNullableFilter<"mstFees"> | number | null
    TurmFee1_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee2_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee3_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee4_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee5_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee6_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee7_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee8_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    TurmFee9_Collection?: DateTimeNullableFilter<"mstFees"> | Date | string | null
    FeesTypeID?: IntNullableFilter<"mstFees"> | number | null
    BatchID?: IntNullableFilter<"mstFees"> | number | null
    IsActive?: BoolFilter<"mstFees"> | boolean
    IsDelete?: BoolNullableFilter<"mstFees"> | boolean | null
    EntryBy?: BigIntNullableFilter<"mstFees"> | bigint | number | null
    EntryDate?: DateTimeNullableFilter<"mstFees"> | Date | string | null
  }, "FeesIDP">

  export type mstFeesOrderByWithAggregationInput = {
    FeesIDP?: SortOrder
    DepositFee?: SortOrderInput | SortOrder
    TurmFee1?: SortOrderInput | SortOrder
    TurmFee2?: SortOrderInput | SortOrder
    TurmFee3?: SortOrderInput | SortOrder
    TurmFee4?: SortOrderInput | SortOrder
    TurmFee5?: SortOrderInput | SortOrder
    TurmFee6?: SortOrderInput | SortOrder
    TurmFee7?: SortOrderInput | SortOrder
    TurmFee8?: SortOrderInput | SortOrder
    TurmFee9?: SortOrderInput | SortOrder
    TurmFee1_Collection?: SortOrderInput | SortOrder
    TurmFee2_Collection?: SortOrderInput | SortOrder
    TurmFee3_Collection?: SortOrderInput | SortOrder
    TurmFee4_Collection?: SortOrderInput | SortOrder
    TurmFee5_Collection?: SortOrderInput | SortOrder
    TurmFee6_Collection?: SortOrderInput | SortOrder
    TurmFee7_Collection?: SortOrderInput | SortOrder
    TurmFee8_Collection?: SortOrderInput | SortOrder
    TurmFee9_Collection?: SortOrderInput | SortOrder
    FeesTypeID?: SortOrderInput | SortOrder
    BatchID?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryBy?: SortOrderInput | SortOrder
    EntryDate?: SortOrderInput | SortOrder
    _count?: mstFeesCountOrderByAggregateInput
    _avg?: mstFeesAvgOrderByAggregateInput
    _max?: mstFeesMaxOrderByAggregateInput
    _min?: mstFeesMinOrderByAggregateInput
    _sum?: mstFeesSumOrderByAggregateInput
  }

  export type mstFeesScalarWhereWithAggregatesInput = {
    AND?: mstFeesScalarWhereWithAggregatesInput | mstFeesScalarWhereWithAggregatesInput[]
    OR?: mstFeesScalarWhereWithAggregatesInput[]
    NOT?: mstFeesScalarWhereWithAggregatesInput | mstFeesScalarWhereWithAggregatesInput[]
    FeesIDP?: BigIntWithAggregatesFilter<"mstFees"> | bigint | number
    DepositFee?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee1?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee2?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee3?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee4?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee5?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee6?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee7?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee8?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee9?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    TurmFee1_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    TurmFee2_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    TurmFee3_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    TurmFee4_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    TurmFee5_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    TurmFee6_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    TurmFee7_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    TurmFee8_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    TurmFee9_Collection?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
    FeesTypeID?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    BatchID?: IntNullableWithAggregatesFilter<"mstFees"> | number | null
    IsActive?: BoolWithAggregatesFilter<"mstFees"> | boolean
    IsDelete?: BoolNullableWithAggregatesFilter<"mstFees"> | boolean | null
    EntryBy?: BigIntNullableWithAggregatesFilter<"mstFees"> | bigint | number | null
    EntryDate?: DateTimeNullableWithAggregatesFilter<"mstFees"> | Date | string | null
  }

  export type sysAdminWhereInput = {
    AND?: sysAdminWhereInput | sysAdminWhereInput[]
    OR?: sysAdminWhereInput[]
    NOT?: sysAdminWhereInput | sysAdminWhereInput[]
    AdminIDP?: IntFilter<"sysAdmin"> | number
    UserName?: StringNullableFilter<"sysAdmin"> | string | null
    Password?: StringNullableFilter<"sysAdmin"> | string | null
    FirstName?: StringNullableFilter<"sysAdmin"> | string | null
    LastName?: StringNullableFilter<"sysAdmin"> | string | null
    TermFee?: FloatNullableFilter<"sysAdmin"> | number | null
    SMTPEmailAddress?: StringNullableFilter<"sysAdmin"> | string | null
    SMTPUserName?: StringNullableFilter<"sysAdmin"> | string | null
    SMTPPassword?: StringNullableFilter<"sysAdmin"> | string | null
    SMTPHost?: StringNullableFilter<"sysAdmin"> | string | null
    SMTPPort?: IntNullableFilter<"sysAdmin"> | number | null
    SMTPSSL?: BoolNullableFilter<"sysAdmin"> | boolean | null
    OTP?: IntNullableFilter<"sysAdmin"> | number | null
    SMSKey?: StringNullableFilter<"sysAdmin"> | string | null
    GoogleMapKey?: StringNullableFilter<"sysAdmin"> | string | null
    GoogleLocationKey?: StringNullableFilter<"sysAdmin"> | string | null
    PaymentGatewayKey?: StringNullableFilter<"sysAdmin"> | string | null
    RevenueCommission?: StringNullableFilter<"sysAdmin"> | string | null
    CDNPath?: StringNullableFilter<"sysAdmin"> | string | null
    UpdatedDate?: DateTimeNullableFilter<"sysAdmin"> | Date | string | null
  }

  export type sysAdminOrderByWithRelationInput = {
    AdminIDP?: SortOrder
    UserName?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    FirstName?: SortOrderInput | SortOrder
    LastName?: SortOrderInput | SortOrder
    TermFee?: SortOrderInput | SortOrder
    SMTPEmailAddress?: SortOrderInput | SortOrder
    SMTPUserName?: SortOrderInput | SortOrder
    SMTPPassword?: SortOrderInput | SortOrder
    SMTPHost?: SortOrderInput | SortOrder
    SMTPPort?: SortOrderInput | SortOrder
    SMTPSSL?: SortOrderInput | SortOrder
    OTP?: SortOrderInput | SortOrder
    SMSKey?: SortOrderInput | SortOrder
    GoogleMapKey?: SortOrderInput | SortOrder
    GoogleLocationKey?: SortOrderInput | SortOrder
    PaymentGatewayKey?: SortOrderInput | SortOrder
    RevenueCommission?: SortOrderInput | SortOrder
    CDNPath?: SortOrderInput | SortOrder
    UpdatedDate?: SortOrderInput | SortOrder
  }

  export type sysAdminWhereUniqueInput = Prisma.AtLeast<{
    AdminIDP?: number
    AND?: sysAdminWhereInput | sysAdminWhereInput[]
    OR?: sysAdminWhereInput[]
    NOT?: sysAdminWhereInput | sysAdminWhereInput[]
    UserName?: StringNullableFilter<"sysAdmin"> | string | null
    Password?: StringNullableFilter<"sysAdmin"> | string | null
    FirstName?: StringNullableFilter<"sysAdmin"> | string | null
    LastName?: StringNullableFilter<"sysAdmin"> | string | null
    TermFee?: FloatNullableFilter<"sysAdmin"> | number | null
    SMTPEmailAddress?: StringNullableFilter<"sysAdmin"> | string | null
    SMTPUserName?: StringNullableFilter<"sysAdmin"> | string | null
    SMTPPassword?: StringNullableFilter<"sysAdmin"> | string | null
    SMTPHost?: StringNullableFilter<"sysAdmin"> | string | null
    SMTPPort?: IntNullableFilter<"sysAdmin"> | number | null
    SMTPSSL?: BoolNullableFilter<"sysAdmin"> | boolean | null
    OTP?: IntNullableFilter<"sysAdmin"> | number | null
    SMSKey?: StringNullableFilter<"sysAdmin"> | string | null
    GoogleMapKey?: StringNullableFilter<"sysAdmin"> | string | null
    GoogleLocationKey?: StringNullableFilter<"sysAdmin"> | string | null
    PaymentGatewayKey?: StringNullableFilter<"sysAdmin"> | string | null
    RevenueCommission?: StringNullableFilter<"sysAdmin"> | string | null
    CDNPath?: StringNullableFilter<"sysAdmin"> | string | null
    UpdatedDate?: DateTimeNullableFilter<"sysAdmin"> | Date | string | null
  }, "AdminIDP">

  export type sysAdminOrderByWithAggregationInput = {
    AdminIDP?: SortOrder
    UserName?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    FirstName?: SortOrderInput | SortOrder
    LastName?: SortOrderInput | SortOrder
    TermFee?: SortOrderInput | SortOrder
    SMTPEmailAddress?: SortOrderInput | SortOrder
    SMTPUserName?: SortOrderInput | SortOrder
    SMTPPassword?: SortOrderInput | SortOrder
    SMTPHost?: SortOrderInput | SortOrder
    SMTPPort?: SortOrderInput | SortOrder
    SMTPSSL?: SortOrderInput | SortOrder
    OTP?: SortOrderInput | SortOrder
    SMSKey?: SortOrderInput | SortOrder
    GoogleMapKey?: SortOrderInput | SortOrder
    GoogleLocationKey?: SortOrderInput | SortOrder
    PaymentGatewayKey?: SortOrderInput | SortOrder
    RevenueCommission?: SortOrderInput | SortOrder
    CDNPath?: SortOrderInput | SortOrder
    UpdatedDate?: SortOrderInput | SortOrder
    _count?: sysAdminCountOrderByAggregateInput
    _avg?: sysAdminAvgOrderByAggregateInput
    _max?: sysAdminMaxOrderByAggregateInput
    _min?: sysAdminMinOrderByAggregateInput
    _sum?: sysAdminSumOrderByAggregateInput
  }

  export type sysAdminScalarWhereWithAggregatesInput = {
    AND?: sysAdminScalarWhereWithAggregatesInput | sysAdminScalarWhereWithAggregatesInput[]
    OR?: sysAdminScalarWhereWithAggregatesInput[]
    NOT?: sysAdminScalarWhereWithAggregatesInput | sysAdminScalarWhereWithAggregatesInput[]
    AdminIDP?: IntWithAggregatesFilter<"sysAdmin"> | number
    UserName?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    Password?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    FirstName?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    LastName?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    TermFee?: FloatNullableWithAggregatesFilter<"sysAdmin"> | number | null
    SMTPEmailAddress?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    SMTPUserName?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    SMTPPassword?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    SMTPHost?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    SMTPPort?: IntNullableWithAggregatesFilter<"sysAdmin"> | number | null
    SMTPSSL?: BoolNullableWithAggregatesFilter<"sysAdmin"> | boolean | null
    OTP?: IntNullableWithAggregatesFilter<"sysAdmin"> | number | null
    SMSKey?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    GoogleMapKey?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    GoogleLocationKey?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    PaymentGatewayKey?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    RevenueCommission?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    CDNPath?: StringNullableWithAggregatesFilter<"sysAdmin"> | string | null
    UpdatedDate?: DateTimeNullableWithAggregatesFilter<"sysAdmin"> | Date | string | null
  }

  export type tblBudgetWhereInput = {
    AND?: tblBudgetWhereInput | tblBudgetWhereInput[]
    OR?: tblBudgetWhereInput[]
    NOT?: tblBudgetWhereInput | tblBudgetWhereInput[]
    BudgetIDP?: BigIntFilter<"tblBudget"> | bigint | number
    FinancialYearID?: IntFilter<"tblBudget"> | number
    ExpenseHeadIDF?: BigIntFilter<"tblBudget"> | bigint | number
    BudgetAmount?: DecimalFilter<"tblBudget"> | Decimal | DecimalJsLike | number | string
    Remarks?: StringNullableFilter<"tblBudget"> | string | null
    IsDeleted?: BoolNullableFilter<"tblBudget"> | boolean | null
    EntryBy?: BigIntFilter<"tblBudget"> | bigint | number
    EntryDate?: DateTimeFilter<"tblBudget"> | Date | string
  }

  export type tblBudgetOrderByWithRelationInput = {
    BudgetIDP?: SortOrder
    FinancialYearID?: SortOrder
    ExpenseHeadIDF?: SortOrder
    BudgetAmount?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    IsDeleted?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblBudgetWhereUniqueInput = Prisma.AtLeast<{
    BudgetIDP?: bigint | number
    AND?: tblBudgetWhereInput | tblBudgetWhereInput[]
    OR?: tblBudgetWhereInput[]
    NOT?: tblBudgetWhereInput | tblBudgetWhereInput[]
    FinancialYearID?: IntFilter<"tblBudget"> | number
    ExpenseHeadIDF?: BigIntFilter<"tblBudget"> | bigint | number
    BudgetAmount?: DecimalFilter<"tblBudget"> | Decimal | DecimalJsLike | number | string
    Remarks?: StringNullableFilter<"tblBudget"> | string | null
    IsDeleted?: BoolNullableFilter<"tblBudget"> | boolean | null
    EntryBy?: BigIntFilter<"tblBudget"> | bigint | number
    EntryDate?: DateTimeFilter<"tblBudget"> | Date | string
  }, "BudgetIDP">

  export type tblBudgetOrderByWithAggregationInput = {
    BudgetIDP?: SortOrder
    FinancialYearID?: SortOrder
    ExpenseHeadIDF?: SortOrder
    BudgetAmount?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    IsDeleted?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
    _count?: tblBudgetCountOrderByAggregateInput
    _avg?: tblBudgetAvgOrderByAggregateInput
    _max?: tblBudgetMaxOrderByAggregateInput
    _min?: tblBudgetMinOrderByAggregateInput
    _sum?: tblBudgetSumOrderByAggregateInput
  }

  export type tblBudgetScalarWhereWithAggregatesInput = {
    AND?: tblBudgetScalarWhereWithAggregatesInput | tblBudgetScalarWhereWithAggregatesInput[]
    OR?: tblBudgetScalarWhereWithAggregatesInput[]
    NOT?: tblBudgetScalarWhereWithAggregatesInput | tblBudgetScalarWhereWithAggregatesInput[]
    BudgetIDP?: BigIntWithAggregatesFilter<"tblBudget"> | bigint | number
    FinancialYearID?: IntWithAggregatesFilter<"tblBudget"> | number
    ExpenseHeadIDF?: BigIntWithAggregatesFilter<"tblBudget"> | bigint | number
    BudgetAmount?: DecimalWithAggregatesFilter<"tblBudget"> | Decimal | DecimalJsLike | number | string
    Remarks?: StringNullableWithAggregatesFilter<"tblBudget"> | string | null
    IsDeleted?: BoolNullableWithAggregatesFilter<"tblBudget"> | boolean | null
    EntryBy?: BigIntWithAggregatesFilter<"tblBudget"> | bigint | number
    EntryDate?: DateTimeWithAggregatesFilter<"tblBudget"> | Date | string
  }

  export type tblDocumentWhereInput = {
    AND?: tblDocumentWhereInput | tblDocumentWhereInput[]
    OR?: tblDocumentWhereInput[]
    NOT?: tblDocumentWhereInput | tblDocumentWhereInput[]
    DocumentIDP?: BigIntFilter<"tblDocument"> | bigint | number
    StudentIDF?: BigIntFilter<"tblDocument"> | bigint | number
    DocumentTypeID?: IntNullableFilter<"tblDocument"> | number | null
    Attachment?: StringNullableFilter<"tblDocument"> | string | null
    IsDelete?: BoolNullableFilter<"tblDocument"> | boolean | null
    EntryBy?: BigIntNullableFilter<"tblDocument"> | bigint | number | null
    EntryDate?: DateTimeNullableFilter<"tblDocument"> | Date | string | null
  }

  export type tblDocumentOrderByWithRelationInput = {
    DocumentIDP?: SortOrder
    StudentIDF?: SortOrder
    DocumentTypeID?: SortOrderInput | SortOrder
    Attachment?: SortOrderInput | SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryBy?: SortOrderInput | SortOrder
    EntryDate?: SortOrderInput | SortOrder
  }

  export type tblDocumentWhereUniqueInput = Prisma.AtLeast<{
    DocumentIDP?: bigint | number
    AND?: tblDocumentWhereInput | tblDocumentWhereInput[]
    OR?: tblDocumentWhereInput[]
    NOT?: tblDocumentWhereInput | tblDocumentWhereInput[]
    StudentIDF?: BigIntFilter<"tblDocument"> | bigint | number
    DocumentTypeID?: IntNullableFilter<"tblDocument"> | number | null
    Attachment?: StringNullableFilter<"tblDocument"> | string | null
    IsDelete?: BoolNullableFilter<"tblDocument"> | boolean | null
    EntryBy?: BigIntNullableFilter<"tblDocument"> | bigint | number | null
    EntryDate?: DateTimeNullableFilter<"tblDocument"> | Date | string | null
  }, "DocumentIDP">

  export type tblDocumentOrderByWithAggregationInput = {
    DocumentIDP?: SortOrder
    StudentIDF?: SortOrder
    DocumentTypeID?: SortOrderInput | SortOrder
    Attachment?: SortOrderInput | SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryBy?: SortOrderInput | SortOrder
    EntryDate?: SortOrderInput | SortOrder
    _count?: tblDocumentCountOrderByAggregateInput
    _avg?: tblDocumentAvgOrderByAggregateInput
    _max?: tblDocumentMaxOrderByAggregateInput
    _min?: tblDocumentMinOrderByAggregateInput
    _sum?: tblDocumentSumOrderByAggregateInput
  }

  export type tblDocumentScalarWhereWithAggregatesInput = {
    AND?: tblDocumentScalarWhereWithAggregatesInput | tblDocumentScalarWhereWithAggregatesInput[]
    OR?: tblDocumentScalarWhereWithAggregatesInput[]
    NOT?: tblDocumentScalarWhereWithAggregatesInput | tblDocumentScalarWhereWithAggregatesInput[]
    DocumentIDP?: BigIntWithAggregatesFilter<"tblDocument"> | bigint | number
    StudentIDF?: BigIntWithAggregatesFilter<"tblDocument"> | bigint | number
    DocumentTypeID?: IntNullableWithAggregatesFilter<"tblDocument"> | number | null
    Attachment?: StringNullableWithAggregatesFilter<"tblDocument"> | string | null
    IsDelete?: BoolNullableWithAggregatesFilter<"tblDocument"> | boolean | null
    EntryBy?: BigIntNullableWithAggregatesFilter<"tblDocument"> | bigint | number | null
    EntryDate?: DateTimeNullableWithAggregatesFilter<"tblDocument"> | Date | string | null
  }

  export type tblExpenseWhereInput = {
    AND?: tblExpenseWhereInput | tblExpenseWhereInput[]
    OR?: tblExpenseWhereInput[]
    NOT?: tblExpenseWhereInput | tblExpenseWhereInput[]
    ExpenseIDP?: BigIntFilter<"tblExpense"> | bigint | number
    ExpenseHeadIDF?: BigIntFilter<"tblExpense"> | bigint | number
    ExpenseDate?: DateTimeFilter<"tblExpense"> | Date | string
    Amount?: DecimalFilter<"tblExpense"> | Decimal | DecimalJsLike | number | string
    Remarks?: StringNullableFilter<"tblExpense"> | string | null
    IsDeleted?: BoolNullableFilter<"tblExpense"> | boolean | null
    EntryBy?: BigIntFilter<"tblExpense"> | bigint | number
    EntryDate?: DateTimeFilter<"tblExpense"> | Date | string
  }

  export type tblExpenseOrderByWithRelationInput = {
    ExpenseIDP?: SortOrder
    ExpenseHeadIDF?: SortOrder
    ExpenseDate?: SortOrder
    Amount?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    IsDeleted?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblExpenseWhereUniqueInput = Prisma.AtLeast<{
    ExpenseIDP?: bigint | number
    AND?: tblExpenseWhereInput | tblExpenseWhereInput[]
    OR?: tblExpenseWhereInput[]
    NOT?: tblExpenseWhereInput | tblExpenseWhereInput[]
    ExpenseHeadIDF?: BigIntFilter<"tblExpense"> | bigint | number
    ExpenseDate?: DateTimeFilter<"tblExpense"> | Date | string
    Amount?: DecimalFilter<"tblExpense"> | Decimal | DecimalJsLike | number | string
    Remarks?: StringNullableFilter<"tblExpense"> | string | null
    IsDeleted?: BoolNullableFilter<"tblExpense"> | boolean | null
    EntryBy?: BigIntFilter<"tblExpense"> | bigint | number
    EntryDate?: DateTimeFilter<"tblExpense"> | Date | string
  }, "ExpenseIDP">

  export type tblExpenseOrderByWithAggregationInput = {
    ExpenseIDP?: SortOrder
    ExpenseHeadIDF?: SortOrder
    ExpenseDate?: SortOrder
    Amount?: SortOrder
    Remarks?: SortOrderInput | SortOrder
    IsDeleted?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
    _count?: tblExpenseCountOrderByAggregateInput
    _avg?: tblExpenseAvgOrderByAggregateInput
    _max?: tblExpenseMaxOrderByAggregateInput
    _min?: tblExpenseMinOrderByAggregateInput
    _sum?: tblExpenseSumOrderByAggregateInput
  }

  export type tblExpenseScalarWhereWithAggregatesInput = {
    AND?: tblExpenseScalarWhereWithAggregatesInput | tblExpenseScalarWhereWithAggregatesInput[]
    OR?: tblExpenseScalarWhereWithAggregatesInput[]
    NOT?: tblExpenseScalarWhereWithAggregatesInput | tblExpenseScalarWhereWithAggregatesInput[]
    ExpenseIDP?: BigIntWithAggregatesFilter<"tblExpense"> | bigint | number
    ExpenseHeadIDF?: BigIntWithAggregatesFilter<"tblExpense"> | bigint | number
    ExpenseDate?: DateTimeWithAggregatesFilter<"tblExpense"> | Date | string
    Amount?: DecimalWithAggregatesFilter<"tblExpense"> | Decimal | DecimalJsLike | number | string
    Remarks?: StringNullableWithAggregatesFilter<"tblExpense"> | string | null
    IsDeleted?: BoolNullableWithAggregatesFilter<"tblExpense"> | boolean | null
    EntryBy?: BigIntWithAggregatesFilter<"tblExpense"> | bigint | number
    EntryDate?: DateTimeWithAggregatesFilter<"tblExpense"> | Date | string
  }

  export type tblFeesWhereInput = {
    AND?: tblFeesWhereInput | tblFeesWhereInput[]
    OR?: tblFeesWhereInput[]
    NOT?: tblFeesWhereInput | tblFeesWhereInput[]
    FeesIDP?: BigIntFilter<"tblFees"> | bigint | number
    StudentIDF?: BigIntFilter<"tblFees"> | bigint | number
    TermID?: IntFilter<"tblFees"> | number
    TermEntryID?: IntNullableFilter<"tblFees"> | number | null
    ReceiptDate?: DateTimeNullableFilter<"tblFees"> | Date | string | null
    ReceiptAmount?: DecimalNullableFilter<"tblFees"> | Decimal | DecimalJsLike | number | string | null
    Remarks?: StringNullableFilter<"tblFees"> | string | null
  }

  export type tblFeesOrderByWithRelationInput = {
    FeesIDP?: SortOrder
    StudentIDF?: SortOrder
    TermID?: SortOrder
    TermEntryID?: SortOrderInput | SortOrder
    ReceiptDate?: SortOrderInput | SortOrder
    ReceiptAmount?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
  }

  export type tblFeesWhereUniqueInput = Prisma.AtLeast<{
    FeesIDP?: bigint | number
    AND?: tblFeesWhereInput | tblFeesWhereInput[]
    OR?: tblFeesWhereInput[]
    NOT?: tblFeesWhereInput | tblFeesWhereInput[]
    StudentIDF?: BigIntFilter<"tblFees"> | bigint | number
    TermID?: IntFilter<"tblFees"> | number
    TermEntryID?: IntNullableFilter<"tblFees"> | number | null
    ReceiptDate?: DateTimeNullableFilter<"tblFees"> | Date | string | null
    ReceiptAmount?: DecimalNullableFilter<"tblFees"> | Decimal | DecimalJsLike | number | string | null
    Remarks?: StringNullableFilter<"tblFees"> | string | null
  }, "FeesIDP">

  export type tblFeesOrderByWithAggregationInput = {
    FeesIDP?: SortOrder
    StudentIDF?: SortOrder
    TermID?: SortOrder
    TermEntryID?: SortOrderInput | SortOrder
    ReceiptDate?: SortOrderInput | SortOrder
    ReceiptAmount?: SortOrderInput | SortOrder
    Remarks?: SortOrderInput | SortOrder
    _count?: tblFeesCountOrderByAggregateInput
    _avg?: tblFeesAvgOrderByAggregateInput
    _max?: tblFeesMaxOrderByAggregateInput
    _min?: tblFeesMinOrderByAggregateInput
    _sum?: tblFeesSumOrderByAggregateInput
  }

  export type tblFeesScalarWhereWithAggregatesInput = {
    AND?: tblFeesScalarWhereWithAggregatesInput | tblFeesScalarWhereWithAggregatesInput[]
    OR?: tblFeesScalarWhereWithAggregatesInput[]
    NOT?: tblFeesScalarWhereWithAggregatesInput | tblFeesScalarWhereWithAggregatesInput[]
    FeesIDP?: BigIntWithAggregatesFilter<"tblFees"> | bigint | number
    StudentIDF?: BigIntWithAggregatesFilter<"tblFees"> | bigint | number
    TermID?: IntWithAggregatesFilter<"tblFees"> | number
    TermEntryID?: IntNullableWithAggregatesFilter<"tblFees"> | number | null
    ReceiptDate?: DateTimeNullableWithAggregatesFilter<"tblFees"> | Date | string | null
    ReceiptAmount?: DecimalNullableWithAggregatesFilter<"tblFees"> | Decimal | DecimalJsLike | number | string | null
    Remarks?: StringNullableWithAggregatesFilter<"tblFees"> | string | null
  }

  export type tblStaffWhereInput = {
    AND?: tblStaffWhereInput | tblStaffWhereInput[]
    OR?: tblStaffWhereInput[]
    NOT?: tblStaffWhereInput | tblStaffWhereInput[]
    StaffIDP?: BigIntFilter<"tblStaff"> | bigint | number
    FullName?: StringNullableFilter<"tblStaff"> | string | null
    MobileNo?: StringNullableFilter<"tblStaff"> | string | null
    Email?: StringNullableFilter<"tblStaff"> | string | null
    GenderID?: IntNullableFilter<"tblStaff"> | number | null
    DesignationID?: IntNullableFilter<"tblStaff"> | number | null
    DepartmentID?: IntNullableFilter<"tblStaff"> | number | null
    StaffTypeID?: IntNullableFilter<"tblStaff"> | number | null
    DateOfBirth?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    Age?: IntNullableFilter<"tblStaff"> | number | null
    DateOfJoining?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    DateOfAddmission?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    CastandReligion?: StringNullableFilter<"tblStaff"> | string | null
    Qualification?: StringNullableFilter<"tblStaff"> | string | null
    UGPassingDate?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    UGCollageName?: StringNullableFilter<"tblStaff"> | string | null
    UGUniversityName?: StringNullableFilter<"tblStaff"> | string | null
    PGPassingDate?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    PGCollageName?: StringNullableFilter<"tblStaff"> | string | null
    PGUniversityName?: StringNullableFilter<"tblStaff"> | string | null
    StateRegNumber?: StringNullableFilter<"tblStaff"> | string | null
    NCHRegNumber?: StringNullableFilter<"tblStaff"> | string | null
    ExperienceDetail?: StringNullableFilter<"tblStaff"> | string | null
    PromotionDate?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    PromotionDesignationID?: IntNullableFilter<"tblStaff"> | number | null
    AdharNumber?: BigIntNullableFilter<"tblStaff"> | bigint | number | null
    PANNumber?: StringNullableFilter<"tblStaff"> | string | null
    PermanentAddress1?: StringNullableFilter<"tblStaff"> | string | null
    PermanentAddress2?: StringNullableFilter<"tblStaff"> | string | null
    PermanentCity?: StringNullableFilter<"tblStaff"> | string | null
    PermanentDistrict?: StringNullableFilter<"tblStaff"> | string | null
    PermanentState?: StringNullableFilter<"tblStaff"> | string | null
    CurrentAddress1?: StringNullableFilter<"tblStaff"> | string | null
    CurrentAddress2?: StringNullableFilter<"tblStaff"> | string | null
    CurrentCity?: StringNullableFilter<"tblStaff"> | string | null
    CurrentDistrict?: StringNullableFilter<"tblStaff"> | string | null
    CurrentState?: StringNullableFilter<"tblStaff"> | string | null
    RefferancePerson?: StringNullableFilter<"tblStaff"> | string | null
    PassportPhoto?: StringNullableFilter<"tblStaff"> | string | null
    SignPhoto?: StringNullableFilter<"tblStaff"> | string | null
    Scale?: FloatNullableFilter<"tblStaff"> | number | null
    Password?: StringNullableFilter<"tblStaff"> | string | null
    OTP?: StringNullableFilter<"tblStaff"> | string | null
    Remark1?: StringNullableFilter<"tblStaff"> | string | null
    Remark2?: StringNullableFilter<"tblStaff"> | string | null
    IsActive?: BoolFilter<"tblStaff"> | boolean
    IsDelete?: BoolNullableFilter<"tblStaff"> | boolean | null
    EntryBy?: BigIntFilter<"tblStaff"> | bigint | number
    EntryDate?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
  }

  export type tblStaffOrderByWithRelationInput = {
    StaffIDP?: SortOrder
    FullName?: SortOrderInput | SortOrder
    MobileNo?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    GenderID?: SortOrderInput | SortOrder
    DesignationID?: SortOrderInput | SortOrder
    DepartmentID?: SortOrderInput | SortOrder
    StaffTypeID?: SortOrderInput | SortOrder
    DateOfBirth?: SortOrderInput | SortOrder
    Age?: SortOrderInput | SortOrder
    DateOfJoining?: SortOrderInput | SortOrder
    DateOfAddmission?: SortOrderInput | SortOrder
    CastandReligion?: SortOrderInput | SortOrder
    Qualification?: SortOrderInput | SortOrder
    UGPassingDate?: SortOrderInput | SortOrder
    UGCollageName?: SortOrderInput | SortOrder
    UGUniversityName?: SortOrderInput | SortOrder
    PGPassingDate?: SortOrderInput | SortOrder
    PGCollageName?: SortOrderInput | SortOrder
    PGUniversityName?: SortOrderInput | SortOrder
    StateRegNumber?: SortOrderInput | SortOrder
    NCHRegNumber?: SortOrderInput | SortOrder
    ExperienceDetail?: SortOrderInput | SortOrder
    PromotionDate?: SortOrderInput | SortOrder
    PromotionDesignationID?: SortOrderInput | SortOrder
    AdharNumber?: SortOrderInput | SortOrder
    PANNumber?: SortOrderInput | SortOrder
    PermanentAddress1?: SortOrderInput | SortOrder
    PermanentAddress2?: SortOrderInput | SortOrder
    PermanentCity?: SortOrderInput | SortOrder
    PermanentDistrict?: SortOrderInput | SortOrder
    PermanentState?: SortOrderInput | SortOrder
    CurrentAddress1?: SortOrderInput | SortOrder
    CurrentAddress2?: SortOrderInput | SortOrder
    CurrentCity?: SortOrderInput | SortOrder
    CurrentDistrict?: SortOrderInput | SortOrder
    CurrentState?: SortOrderInput | SortOrder
    RefferancePerson?: SortOrderInput | SortOrder
    PassportPhoto?: SortOrderInput | SortOrder
    SignPhoto?: SortOrderInput | SortOrder
    Scale?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    OTP?: SortOrderInput | SortOrder
    Remark1?: SortOrderInput | SortOrder
    Remark2?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrderInput | SortOrder
  }

  export type tblStaffWhereUniqueInput = Prisma.AtLeast<{
    StaffIDP?: bigint | number
    AND?: tblStaffWhereInput | tblStaffWhereInput[]
    OR?: tblStaffWhereInput[]
    NOT?: tblStaffWhereInput | tblStaffWhereInput[]
    FullName?: StringNullableFilter<"tblStaff"> | string | null
    MobileNo?: StringNullableFilter<"tblStaff"> | string | null
    Email?: StringNullableFilter<"tblStaff"> | string | null
    GenderID?: IntNullableFilter<"tblStaff"> | number | null
    DesignationID?: IntNullableFilter<"tblStaff"> | number | null
    DepartmentID?: IntNullableFilter<"tblStaff"> | number | null
    StaffTypeID?: IntNullableFilter<"tblStaff"> | number | null
    DateOfBirth?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    Age?: IntNullableFilter<"tblStaff"> | number | null
    DateOfJoining?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    DateOfAddmission?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    CastandReligion?: StringNullableFilter<"tblStaff"> | string | null
    Qualification?: StringNullableFilter<"tblStaff"> | string | null
    UGPassingDate?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    UGCollageName?: StringNullableFilter<"tblStaff"> | string | null
    UGUniversityName?: StringNullableFilter<"tblStaff"> | string | null
    PGPassingDate?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    PGCollageName?: StringNullableFilter<"tblStaff"> | string | null
    PGUniversityName?: StringNullableFilter<"tblStaff"> | string | null
    StateRegNumber?: StringNullableFilter<"tblStaff"> | string | null
    NCHRegNumber?: StringNullableFilter<"tblStaff"> | string | null
    ExperienceDetail?: StringNullableFilter<"tblStaff"> | string | null
    PromotionDate?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
    PromotionDesignationID?: IntNullableFilter<"tblStaff"> | number | null
    AdharNumber?: BigIntNullableFilter<"tblStaff"> | bigint | number | null
    PANNumber?: StringNullableFilter<"tblStaff"> | string | null
    PermanentAddress1?: StringNullableFilter<"tblStaff"> | string | null
    PermanentAddress2?: StringNullableFilter<"tblStaff"> | string | null
    PermanentCity?: StringNullableFilter<"tblStaff"> | string | null
    PermanentDistrict?: StringNullableFilter<"tblStaff"> | string | null
    PermanentState?: StringNullableFilter<"tblStaff"> | string | null
    CurrentAddress1?: StringNullableFilter<"tblStaff"> | string | null
    CurrentAddress2?: StringNullableFilter<"tblStaff"> | string | null
    CurrentCity?: StringNullableFilter<"tblStaff"> | string | null
    CurrentDistrict?: StringNullableFilter<"tblStaff"> | string | null
    CurrentState?: StringNullableFilter<"tblStaff"> | string | null
    RefferancePerson?: StringNullableFilter<"tblStaff"> | string | null
    PassportPhoto?: StringNullableFilter<"tblStaff"> | string | null
    SignPhoto?: StringNullableFilter<"tblStaff"> | string | null
    Scale?: FloatNullableFilter<"tblStaff"> | number | null
    Password?: StringNullableFilter<"tblStaff"> | string | null
    OTP?: StringNullableFilter<"tblStaff"> | string | null
    Remark1?: StringNullableFilter<"tblStaff"> | string | null
    Remark2?: StringNullableFilter<"tblStaff"> | string | null
    IsActive?: BoolFilter<"tblStaff"> | boolean
    IsDelete?: BoolNullableFilter<"tblStaff"> | boolean | null
    EntryBy?: BigIntFilter<"tblStaff"> | bigint | number
    EntryDate?: DateTimeNullableFilter<"tblStaff"> | Date | string | null
  }, "StaffIDP">

  export type tblStaffOrderByWithAggregationInput = {
    StaffIDP?: SortOrder
    FullName?: SortOrderInput | SortOrder
    MobileNo?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    GenderID?: SortOrderInput | SortOrder
    DesignationID?: SortOrderInput | SortOrder
    DepartmentID?: SortOrderInput | SortOrder
    StaffTypeID?: SortOrderInput | SortOrder
    DateOfBirth?: SortOrderInput | SortOrder
    Age?: SortOrderInput | SortOrder
    DateOfJoining?: SortOrderInput | SortOrder
    DateOfAddmission?: SortOrderInput | SortOrder
    CastandReligion?: SortOrderInput | SortOrder
    Qualification?: SortOrderInput | SortOrder
    UGPassingDate?: SortOrderInput | SortOrder
    UGCollageName?: SortOrderInput | SortOrder
    UGUniversityName?: SortOrderInput | SortOrder
    PGPassingDate?: SortOrderInput | SortOrder
    PGCollageName?: SortOrderInput | SortOrder
    PGUniversityName?: SortOrderInput | SortOrder
    StateRegNumber?: SortOrderInput | SortOrder
    NCHRegNumber?: SortOrderInput | SortOrder
    ExperienceDetail?: SortOrderInput | SortOrder
    PromotionDate?: SortOrderInput | SortOrder
    PromotionDesignationID?: SortOrderInput | SortOrder
    AdharNumber?: SortOrderInput | SortOrder
    PANNumber?: SortOrderInput | SortOrder
    PermanentAddress1?: SortOrderInput | SortOrder
    PermanentAddress2?: SortOrderInput | SortOrder
    PermanentCity?: SortOrderInput | SortOrder
    PermanentDistrict?: SortOrderInput | SortOrder
    PermanentState?: SortOrderInput | SortOrder
    CurrentAddress1?: SortOrderInput | SortOrder
    CurrentAddress2?: SortOrderInput | SortOrder
    CurrentCity?: SortOrderInput | SortOrder
    CurrentDistrict?: SortOrderInput | SortOrder
    CurrentState?: SortOrderInput | SortOrder
    RefferancePerson?: SortOrderInput | SortOrder
    PassportPhoto?: SortOrderInput | SortOrder
    SignPhoto?: SortOrderInput | SortOrder
    Scale?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    OTP?: SortOrderInput | SortOrder
    Remark1?: SortOrderInput | SortOrder
    Remark2?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrderInput | SortOrder
    _count?: tblStaffCountOrderByAggregateInput
    _avg?: tblStaffAvgOrderByAggregateInput
    _max?: tblStaffMaxOrderByAggregateInput
    _min?: tblStaffMinOrderByAggregateInput
    _sum?: tblStaffSumOrderByAggregateInput
  }

  export type tblStaffScalarWhereWithAggregatesInput = {
    AND?: tblStaffScalarWhereWithAggregatesInput | tblStaffScalarWhereWithAggregatesInput[]
    OR?: tblStaffScalarWhereWithAggregatesInput[]
    NOT?: tblStaffScalarWhereWithAggregatesInput | tblStaffScalarWhereWithAggregatesInput[]
    StaffIDP?: BigIntWithAggregatesFilter<"tblStaff"> | bigint | number
    FullName?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    MobileNo?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    Email?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    GenderID?: IntNullableWithAggregatesFilter<"tblStaff"> | number | null
    DesignationID?: IntNullableWithAggregatesFilter<"tblStaff"> | number | null
    DepartmentID?: IntNullableWithAggregatesFilter<"tblStaff"> | number | null
    StaffTypeID?: IntNullableWithAggregatesFilter<"tblStaff"> | number | null
    DateOfBirth?: DateTimeNullableWithAggregatesFilter<"tblStaff"> | Date | string | null
    Age?: IntNullableWithAggregatesFilter<"tblStaff"> | number | null
    DateOfJoining?: DateTimeNullableWithAggregatesFilter<"tblStaff"> | Date | string | null
    DateOfAddmission?: DateTimeNullableWithAggregatesFilter<"tblStaff"> | Date | string | null
    CastandReligion?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    Qualification?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    UGPassingDate?: DateTimeNullableWithAggregatesFilter<"tblStaff"> | Date | string | null
    UGCollageName?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    UGUniversityName?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PGPassingDate?: DateTimeNullableWithAggregatesFilter<"tblStaff"> | Date | string | null
    PGCollageName?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PGUniversityName?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    StateRegNumber?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    NCHRegNumber?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    ExperienceDetail?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PromotionDate?: DateTimeNullableWithAggregatesFilter<"tblStaff"> | Date | string | null
    PromotionDesignationID?: IntNullableWithAggregatesFilter<"tblStaff"> | number | null
    AdharNumber?: BigIntNullableWithAggregatesFilter<"tblStaff"> | bigint | number | null
    PANNumber?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PermanentAddress1?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PermanentAddress2?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PermanentCity?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PermanentDistrict?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PermanentState?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    CurrentAddress1?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    CurrentAddress2?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    CurrentCity?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    CurrentDistrict?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    CurrentState?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    RefferancePerson?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    PassportPhoto?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    SignPhoto?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    Scale?: FloatNullableWithAggregatesFilter<"tblStaff"> | number | null
    Password?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    OTP?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    Remark1?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    Remark2?: StringNullableWithAggregatesFilter<"tblStaff"> | string | null
    IsActive?: BoolWithAggregatesFilter<"tblStaff"> | boolean
    IsDelete?: BoolNullableWithAggregatesFilter<"tblStaff"> | boolean | null
    EntryBy?: BigIntWithAggregatesFilter<"tblStaff"> | bigint | number
    EntryDate?: DateTimeNullableWithAggregatesFilter<"tblStaff"> | Date | string | null
  }

  export type tblStaffExperienceWhereInput = {
    AND?: tblStaffExperienceWhereInput | tblStaffExperienceWhereInput[]
    OR?: tblStaffExperienceWhereInput[]
    NOT?: tblStaffExperienceWhereInput | tblStaffExperienceWhereInput[]
    StaffExperienceIDP?: BigIntFilter<"tblStaffExperience"> | bigint | number
    StaffIDF?: BigIntFilter<"tblStaffExperience"> | bigint | number
    InstituteName?: StringNullableFilter<"tblStaffExperience"> | string | null
    FromDate?: DateTimeNullableFilter<"tblStaffExperience"> | Date | string | null
    ToDate?: DateTimeNullableFilter<"tblStaffExperience"> | Date | string | null
    Designation?: StringNullableFilter<"tblStaffExperience"> | string | null
    TotalYear?: DecimalNullableFilter<"tblStaffExperience"> | Decimal | DecimalJsLike | number | string | null
    IsDelete?: BoolNullableFilter<"tblStaffExperience"> | boolean | null
    EntryDate?: DateTimeNullableFilter<"tblStaffExperience"> | Date | string | null
  }

  export type tblStaffExperienceOrderByWithRelationInput = {
    StaffExperienceIDP?: SortOrder
    StaffIDF?: SortOrder
    InstituteName?: SortOrderInput | SortOrder
    FromDate?: SortOrderInput | SortOrder
    ToDate?: SortOrderInput | SortOrder
    Designation?: SortOrderInput | SortOrder
    TotalYear?: SortOrderInput | SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryDate?: SortOrderInput | SortOrder
  }

  export type tblStaffExperienceWhereUniqueInput = Prisma.AtLeast<{
    StaffExperienceIDP?: bigint | number
    AND?: tblStaffExperienceWhereInput | tblStaffExperienceWhereInput[]
    OR?: tblStaffExperienceWhereInput[]
    NOT?: tblStaffExperienceWhereInput | tblStaffExperienceWhereInput[]
    StaffIDF?: BigIntFilter<"tblStaffExperience"> | bigint | number
    InstituteName?: StringNullableFilter<"tblStaffExperience"> | string | null
    FromDate?: DateTimeNullableFilter<"tblStaffExperience"> | Date | string | null
    ToDate?: DateTimeNullableFilter<"tblStaffExperience"> | Date | string | null
    Designation?: StringNullableFilter<"tblStaffExperience"> | string | null
    TotalYear?: DecimalNullableFilter<"tblStaffExperience"> | Decimal | DecimalJsLike | number | string | null
    IsDelete?: BoolNullableFilter<"tblStaffExperience"> | boolean | null
    EntryDate?: DateTimeNullableFilter<"tblStaffExperience"> | Date | string | null
  }, "StaffExperienceIDP">

  export type tblStaffExperienceOrderByWithAggregationInput = {
    StaffExperienceIDP?: SortOrder
    StaffIDF?: SortOrder
    InstituteName?: SortOrderInput | SortOrder
    FromDate?: SortOrderInput | SortOrder
    ToDate?: SortOrderInput | SortOrder
    Designation?: SortOrderInput | SortOrder
    TotalYear?: SortOrderInput | SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryDate?: SortOrderInput | SortOrder
    _count?: tblStaffExperienceCountOrderByAggregateInput
    _avg?: tblStaffExperienceAvgOrderByAggregateInput
    _max?: tblStaffExperienceMaxOrderByAggregateInput
    _min?: tblStaffExperienceMinOrderByAggregateInput
    _sum?: tblStaffExperienceSumOrderByAggregateInput
  }

  export type tblStaffExperienceScalarWhereWithAggregatesInput = {
    AND?: tblStaffExperienceScalarWhereWithAggregatesInput | tblStaffExperienceScalarWhereWithAggregatesInput[]
    OR?: tblStaffExperienceScalarWhereWithAggregatesInput[]
    NOT?: tblStaffExperienceScalarWhereWithAggregatesInput | tblStaffExperienceScalarWhereWithAggregatesInput[]
    StaffExperienceIDP?: BigIntWithAggregatesFilter<"tblStaffExperience"> | bigint | number
    StaffIDF?: BigIntWithAggregatesFilter<"tblStaffExperience"> | bigint | number
    InstituteName?: StringNullableWithAggregatesFilter<"tblStaffExperience"> | string | null
    FromDate?: DateTimeNullableWithAggregatesFilter<"tblStaffExperience"> | Date | string | null
    ToDate?: DateTimeNullableWithAggregatesFilter<"tblStaffExperience"> | Date | string | null
    Designation?: StringNullableWithAggregatesFilter<"tblStaffExperience"> | string | null
    TotalYear?: DecimalNullableWithAggregatesFilter<"tblStaffExperience"> | Decimal | DecimalJsLike | number | string | null
    IsDelete?: BoolNullableWithAggregatesFilter<"tblStaffExperience"> | boolean | null
    EntryDate?: DateTimeNullableWithAggregatesFilter<"tblStaffExperience"> | Date | string | null
  }

  export type tblStudentWhereInput = {
    AND?: tblStudentWhereInput | tblStudentWhereInput[]
    OR?: tblStudentWhereInput[]
    NOT?: tblStudentWhereInput | tblStudentWhereInput[]
    StudentIDP?: BigIntFilter<"tblStudent"> | bigint | number
    FullName?: StringNullableFilter<"tblStudent"> | string | null
    MobileNo?: StringNullableFilter<"tblStudent"> | string | null
    Email?: StringNullableFilter<"tblStudent"> | string | null
    GenderID?: IntNullableFilter<"tblStudent"> | number | null
    Address?: StringNullableFilter<"tblStudent"> | string | null
    FatherMobileNo?: StringNullableFilter<"tblStudent"> | string | null
    CuurentYearID?: DecimalNullableFilter<"tblStudent"> | Decimal | DecimalJsLike | number | string | null
    GRNNo?: StringNullableFilter<"tblStudent"> | string | null
    AadharNumber?: BigIntNullableFilter<"tblStudent"> | bigint | number | null
    PANNo?: StringNullableFilter<"tblStudent"> | string | null
    ScholarshipAmount?: IntNullableFilter<"tblStudent"> | number | null
    EnrollmenyYear?: StringNullableFilter<"tblStudent"> | string | null
    FeesTypeID?: IntNullableFilter<"tblStudent"> | number | null
    BatchID?: IntNullableFilter<"tblStudent"> | number | null
    Remark1?: StringNullableFilter<"tblStudent"> | string | null
    Remark2?: StringNullableFilter<"tblStudent"> | string | null
    Remark3?: StringNullableFilter<"tblStudent"> | string | null
    Password?: StringNullableFilter<"tblStudent"> | string | null
    OTP?: StringNullableFilter<"tblStudent"> | string | null
    TermFee?: FloatNullableFilter<"tblStudent"> | number | null
    TotalFee?: FloatNullableFilter<"tblStudent"> | number | null
    DepositRefundable?: FloatNullableFilter<"tblStudent"> | number | null
    DepositReceived?: FloatNullableFilter<"tblStudent"> | number | null
    ImportRefID?: BigIntNullableFilter<"tblStudent"> | bigint | number | null
    ProfileImage?: StringNullableFilter<"tblStudent"> | string | null
    PassYear1?: IntNullableFilter<"tblStudent"> | number | null
    PassYear2?: IntNullableFilter<"tblStudent"> | number | null
    PassYear3?: IntNullableFilter<"tblStudent"> | number | null
    PassYear4?: IntNullableFilter<"tblStudent"> | number | null
    IsActive?: BoolFilter<"tblStudent"> | boolean
    IsDelete?: BoolNullableFilter<"tblStudent"> | boolean | null
    EntryBy?: BigIntFilter<"tblStudent"> | bigint | number
    EntryDate?: DateTimeFilter<"tblStudent"> | Date | string
    AppUser?: AppUserListRelationFilter
  }

  export type tblStudentOrderByWithRelationInput = {
    StudentIDP?: SortOrder
    FullName?: SortOrderInput | SortOrder
    MobileNo?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    GenderID?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    FatherMobileNo?: SortOrderInput | SortOrder
    CuurentYearID?: SortOrderInput | SortOrder
    GRNNo?: SortOrderInput | SortOrder
    AadharNumber?: SortOrderInput | SortOrder
    PANNo?: SortOrderInput | SortOrder
    ScholarshipAmount?: SortOrderInput | SortOrder
    EnrollmenyYear?: SortOrderInput | SortOrder
    FeesTypeID?: SortOrderInput | SortOrder
    BatchID?: SortOrderInput | SortOrder
    Remark1?: SortOrderInput | SortOrder
    Remark2?: SortOrderInput | SortOrder
    Remark3?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    OTP?: SortOrderInput | SortOrder
    TermFee?: SortOrderInput | SortOrder
    TotalFee?: SortOrderInput | SortOrder
    DepositRefundable?: SortOrderInput | SortOrder
    DepositReceived?: SortOrderInput | SortOrder
    ImportRefID?: SortOrderInput | SortOrder
    ProfileImage?: SortOrderInput | SortOrder
    PassYear1?: SortOrderInput | SortOrder
    PassYear2?: SortOrderInput | SortOrder
    PassYear3?: SortOrderInput | SortOrder
    PassYear4?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
    AppUser?: AppUserOrderByRelationAggregateInput
  }

  export type tblStudentWhereUniqueInput = Prisma.AtLeast<{
    StudentIDP?: bigint | number
    AND?: tblStudentWhereInput | tblStudentWhereInput[]
    OR?: tblStudentWhereInput[]
    NOT?: tblStudentWhereInput | tblStudentWhereInput[]
    FullName?: StringNullableFilter<"tblStudent"> | string | null
    MobileNo?: StringNullableFilter<"tblStudent"> | string | null
    Email?: StringNullableFilter<"tblStudent"> | string | null
    GenderID?: IntNullableFilter<"tblStudent"> | number | null
    Address?: StringNullableFilter<"tblStudent"> | string | null
    FatherMobileNo?: StringNullableFilter<"tblStudent"> | string | null
    CuurentYearID?: DecimalNullableFilter<"tblStudent"> | Decimal | DecimalJsLike | number | string | null
    GRNNo?: StringNullableFilter<"tblStudent"> | string | null
    AadharNumber?: BigIntNullableFilter<"tblStudent"> | bigint | number | null
    PANNo?: StringNullableFilter<"tblStudent"> | string | null
    ScholarshipAmount?: IntNullableFilter<"tblStudent"> | number | null
    EnrollmenyYear?: StringNullableFilter<"tblStudent"> | string | null
    FeesTypeID?: IntNullableFilter<"tblStudent"> | number | null
    BatchID?: IntNullableFilter<"tblStudent"> | number | null
    Remark1?: StringNullableFilter<"tblStudent"> | string | null
    Remark2?: StringNullableFilter<"tblStudent"> | string | null
    Remark3?: StringNullableFilter<"tblStudent"> | string | null
    Password?: StringNullableFilter<"tblStudent"> | string | null
    OTP?: StringNullableFilter<"tblStudent"> | string | null
    TermFee?: FloatNullableFilter<"tblStudent"> | number | null
    TotalFee?: FloatNullableFilter<"tblStudent"> | number | null
    DepositRefundable?: FloatNullableFilter<"tblStudent"> | number | null
    DepositReceived?: FloatNullableFilter<"tblStudent"> | number | null
    ImportRefID?: BigIntNullableFilter<"tblStudent"> | bigint | number | null
    ProfileImage?: StringNullableFilter<"tblStudent"> | string | null
    PassYear1?: IntNullableFilter<"tblStudent"> | number | null
    PassYear2?: IntNullableFilter<"tblStudent"> | number | null
    PassYear3?: IntNullableFilter<"tblStudent"> | number | null
    PassYear4?: IntNullableFilter<"tblStudent"> | number | null
    IsActive?: BoolFilter<"tblStudent"> | boolean
    IsDelete?: BoolNullableFilter<"tblStudent"> | boolean | null
    EntryBy?: BigIntFilter<"tblStudent"> | bigint | number
    EntryDate?: DateTimeFilter<"tblStudent"> | Date | string
    AppUser?: AppUserListRelationFilter
  }, "StudentIDP">

  export type tblStudentOrderByWithAggregationInput = {
    StudentIDP?: SortOrder
    FullName?: SortOrderInput | SortOrder
    MobileNo?: SortOrderInput | SortOrder
    Email?: SortOrderInput | SortOrder
    GenderID?: SortOrderInput | SortOrder
    Address?: SortOrderInput | SortOrder
    FatherMobileNo?: SortOrderInput | SortOrder
    CuurentYearID?: SortOrderInput | SortOrder
    GRNNo?: SortOrderInput | SortOrder
    AadharNumber?: SortOrderInput | SortOrder
    PANNo?: SortOrderInput | SortOrder
    ScholarshipAmount?: SortOrderInput | SortOrder
    EnrollmenyYear?: SortOrderInput | SortOrder
    FeesTypeID?: SortOrderInput | SortOrder
    BatchID?: SortOrderInput | SortOrder
    Remark1?: SortOrderInput | SortOrder
    Remark2?: SortOrderInput | SortOrder
    Remark3?: SortOrderInput | SortOrder
    Password?: SortOrderInput | SortOrder
    OTP?: SortOrderInput | SortOrder
    TermFee?: SortOrderInput | SortOrder
    TotalFee?: SortOrderInput | SortOrder
    DepositRefundable?: SortOrderInput | SortOrder
    DepositReceived?: SortOrderInput | SortOrder
    ImportRefID?: SortOrderInput | SortOrder
    ProfileImage?: SortOrderInput | SortOrder
    PassYear1?: SortOrderInput | SortOrder
    PassYear2?: SortOrderInput | SortOrder
    PassYear3?: SortOrderInput | SortOrder
    PassYear4?: SortOrderInput | SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrderInput | SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
    _count?: tblStudentCountOrderByAggregateInput
    _avg?: tblStudentAvgOrderByAggregateInput
    _max?: tblStudentMaxOrderByAggregateInput
    _min?: tblStudentMinOrderByAggregateInput
    _sum?: tblStudentSumOrderByAggregateInput
  }

  export type tblStudentScalarWhereWithAggregatesInput = {
    AND?: tblStudentScalarWhereWithAggregatesInput | tblStudentScalarWhereWithAggregatesInput[]
    OR?: tblStudentScalarWhereWithAggregatesInput[]
    NOT?: tblStudentScalarWhereWithAggregatesInput | tblStudentScalarWhereWithAggregatesInput[]
    StudentIDP?: BigIntWithAggregatesFilter<"tblStudent"> | bigint | number
    FullName?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    MobileNo?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    Email?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    GenderID?: IntNullableWithAggregatesFilter<"tblStudent"> | number | null
    Address?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    FatherMobileNo?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    CuurentYearID?: DecimalNullableWithAggregatesFilter<"tblStudent"> | Decimal | DecimalJsLike | number | string | null
    GRNNo?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    AadharNumber?: BigIntNullableWithAggregatesFilter<"tblStudent"> | bigint | number | null
    PANNo?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    ScholarshipAmount?: IntNullableWithAggregatesFilter<"tblStudent"> | number | null
    EnrollmenyYear?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    FeesTypeID?: IntNullableWithAggregatesFilter<"tblStudent"> | number | null
    BatchID?: IntNullableWithAggregatesFilter<"tblStudent"> | number | null
    Remark1?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    Remark2?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    Remark3?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    Password?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    OTP?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    TermFee?: FloatNullableWithAggregatesFilter<"tblStudent"> | number | null
    TotalFee?: FloatNullableWithAggregatesFilter<"tblStudent"> | number | null
    DepositRefundable?: FloatNullableWithAggregatesFilter<"tblStudent"> | number | null
    DepositReceived?: FloatNullableWithAggregatesFilter<"tblStudent"> | number | null
    ImportRefID?: BigIntNullableWithAggregatesFilter<"tblStudent"> | bigint | number | null
    ProfileImage?: StringNullableWithAggregatesFilter<"tblStudent"> | string | null
    PassYear1?: IntNullableWithAggregatesFilter<"tblStudent"> | number | null
    PassYear2?: IntNullableWithAggregatesFilter<"tblStudent"> | number | null
    PassYear3?: IntNullableWithAggregatesFilter<"tblStudent"> | number | null
    PassYear4?: IntNullableWithAggregatesFilter<"tblStudent"> | number | null
    IsActive?: BoolWithAggregatesFilter<"tblStudent"> | boolean
    IsDelete?: BoolNullableWithAggregatesFilter<"tblStudent"> | boolean | null
    EntryBy?: BigIntWithAggregatesFilter<"tblStudent"> | bigint | number
    EntryDate?: DateTimeWithAggregatesFilter<"tblStudent"> | Date | string
  }

  export type AppUserCreateInput = {
    id: string
    student: tblStudentCreateNestedOneWithoutAppUserInput
    appSessions?: AppSessionCreateNestedManyWithoutAppUserInput
    appEmailVerificationCodes?: AppEmailVerificationCodesCreateNestedManyWithoutAppUserInput
  }

  export type AppUserUncheckedCreateInput = {
    id: string
    studentId: bigint | number
    appSessions?: AppSessionUncheckedCreateNestedManyWithoutAppUserInput
    appEmailVerificationCodes?: AppEmailVerificationCodesUncheckedCreateNestedManyWithoutAppUserInput
  }

  export type AppUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: tblStudentUpdateOneRequiredWithoutAppUserNestedInput
    appSessions?: AppSessionUpdateManyWithoutAppUserNestedInput
    appEmailVerificationCodes?: AppEmailVerificationCodesUpdateManyWithoutAppUserNestedInput
  }

  export type AppUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: BigIntFieldUpdateOperationsInput | bigint | number
    appSessions?: AppSessionUncheckedUpdateManyWithoutAppUserNestedInput
    appEmailVerificationCodes?: AppEmailVerificationCodesUncheckedUpdateManyWithoutAppUserNestedInput
  }

  export type AppUserCreateManyInput = {
    id: string
    studentId: bigint | number
  }

  export type AppUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type AppUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AppSessionCreateInput = {
    id: string
    expiresAt: Date | string
    appUser: AppUserCreateNestedOneWithoutAppSessionsInput
  }

  export type AppSessionUncheckedCreateInput = {
    id: string
    userId: string
    expiresAt: Date | string
  }

  export type AppSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appUser?: AppUserUpdateOneRequiredWithoutAppSessionsNestedInput
  }

  export type AppSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionCreateManyInput = {
    id: string
    userId: string
    expiresAt: Date | string
  }

  export type AppSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppEmailVerificationCodesCreateInput = {
    id?: bigint | number
    code: string
    expiresAt: Date | string
    appUser: AppUserCreateNestedOneWithoutAppEmailVerificationCodesInput
  }

  export type AppEmailVerificationCodesUncheckedCreateInput = {
    id?: bigint | number
    code: string
    expiresAt: Date | string
    userId: string
  }

  export type AppEmailVerificationCodesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appUser?: AppUserUpdateOneRequiredWithoutAppEmailVerificationCodesNestedInput
  }

  export type AppEmailVerificationCodesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AppEmailVerificationCodesCreateManyInput = {
    code: string
    expiresAt: Date | string
    userId: string
  }

  export type AppEmailVerificationCodesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppEmailVerificationCodesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type mstExpenseHeadCreateInput = {
    ExpenseHeadIDP?: bigint | number
    ExpenseHeadName: string
    IsActive: boolean
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type mstExpenseHeadUncheckedCreateInput = {
    ExpenseHeadIDP?: bigint | number
    ExpenseHeadName: string
    IsActive: boolean
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type mstExpenseHeadUpdateInput = {
    ExpenseHeadIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseHeadName?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mstExpenseHeadUncheckedUpdateInput = {
    ExpenseHeadIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseHeadName?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mstExpenseHeadCreateManyInput = {
    ExpenseHeadName: string
    IsActive: boolean
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type mstExpenseHeadUpdateManyMutationInput = {
    ExpenseHeadIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseHeadName?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mstExpenseHeadUncheckedUpdateManyInput = {
    ExpenseHeadIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseHeadName?: StringFieldUpdateOperationsInput | string
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type mstFeesCreateInput = {
    FeesIDP?: bigint | number
    DepositFee?: number | null
    TurmFee1?: number | null
    TurmFee2?: number | null
    TurmFee3?: number | null
    TurmFee4?: number | null
    TurmFee5?: number | null
    TurmFee6?: number | null
    TurmFee7?: number | null
    TurmFee8?: number | null
    TurmFee9?: number | null
    TurmFee1_Collection?: Date | string | null
    TurmFee2_Collection?: Date | string | null
    TurmFee3_Collection?: Date | string | null
    TurmFee4_Collection?: Date | string | null
    TurmFee5_Collection?: Date | string | null
    TurmFee6_Collection?: Date | string | null
    TurmFee7_Collection?: Date | string | null
    TurmFee8_Collection?: Date | string | null
    TurmFee9_Collection?: Date | string | null
    FeesTypeID?: number | null
    BatchID?: number | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy?: bigint | number | null
    EntryDate?: Date | string | null
  }

  export type mstFeesUncheckedCreateInput = {
    FeesIDP?: bigint | number
    DepositFee?: number | null
    TurmFee1?: number | null
    TurmFee2?: number | null
    TurmFee3?: number | null
    TurmFee4?: number | null
    TurmFee5?: number | null
    TurmFee6?: number | null
    TurmFee7?: number | null
    TurmFee8?: number | null
    TurmFee9?: number | null
    TurmFee1_Collection?: Date | string | null
    TurmFee2_Collection?: Date | string | null
    TurmFee3_Collection?: Date | string | null
    TurmFee4_Collection?: Date | string | null
    TurmFee5_Collection?: Date | string | null
    TurmFee6_Collection?: Date | string | null
    TurmFee7_Collection?: Date | string | null
    TurmFee8_Collection?: Date | string | null
    TurmFee9_Collection?: Date | string | null
    FeesTypeID?: number | null
    BatchID?: number | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy?: bigint | number | null
    EntryDate?: Date | string | null
  }

  export type mstFeesUpdateInput = {
    FeesIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    DepositFee?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee1?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee2?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee3?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee4?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee5?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee6?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee7?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee8?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee9?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee1_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee2_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee3_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee4_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee5_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee6_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee7_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee8_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee9_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mstFeesUncheckedUpdateInput = {
    FeesIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    DepositFee?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee1?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee2?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee3?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee4?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee5?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee6?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee7?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee8?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee9?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee1_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee2_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee3_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee4_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee5_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee6_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee7_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee8_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee9_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mstFeesCreateManyInput = {
    DepositFee?: number | null
    TurmFee1?: number | null
    TurmFee2?: number | null
    TurmFee3?: number | null
    TurmFee4?: number | null
    TurmFee5?: number | null
    TurmFee6?: number | null
    TurmFee7?: number | null
    TurmFee8?: number | null
    TurmFee9?: number | null
    TurmFee1_Collection?: Date | string | null
    TurmFee2_Collection?: Date | string | null
    TurmFee3_Collection?: Date | string | null
    TurmFee4_Collection?: Date | string | null
    TurmFee5_Collection?: Date | string | null
    TurmFee6_Collection?: Date | string | null
    TurmFee7_Collection?: Date | string | null
    TurmFee8_Collection?: Date | string | null
    TurmFee9_Collection?: Date | string | null
    FeesTypeID?: number | null
    BatchID?: number | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy?: bigint | number | null
    EntryDate?: Date | string | null
  }

  export type mstFeesUpdateManyMutationInput = {
    FeesIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    DepositFee?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee1?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee2?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee3?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee4?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee5?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee6?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee7?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee8?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee9?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee1_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee2_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee3_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee4_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee5_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee6_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee7_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee8_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee9_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type mstFeesUncheckedUpdateManyInput = {
    FeesIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    DepositFee?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee1?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee2?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee3?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee4?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee5?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee6?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee7?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee8?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee9?: NullableIntFieldUpdateOperationsInput | number | null
    TurmFee1_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee2_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee3_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee4_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee5_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee6_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee7_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee8_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    TurmFee9_Collection?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sysAdminCreateInput = {
    UserName?: string | null
    Password?: string | null
    FirstName?: string | null
    LastName?: string | null
    TermFee?: number | null
    SMTPEmailAddress?: string | null
    SMTPUserName?: string | null
    SMTPPassword?: string | null
    SMTPHost?: string | null
    SMTPPort?: number | null
    SMTPSSL?: boolean | null
    OTP?: number | null
    SMSKey?: string | null
    GoogleMapKey?: string | null
    GoogleLocationKey?: string | null
    PaymentGatewayKey?: string | null
    RevenueCommission?: string | null
    CDNPath?: string | null
    UpdatedDate?: Date | string | null
  }

  export type sysAdminUncheckedCreateInput = {
    AdminIDP?: number
    UserName?: string | null
    Password?: string | null
    FirstName?: string | null
    LastName?: string | null
    TermFee?: number | null
    SMTPEmailAddress?: string | null
    SMTPUserName?: string | null
    SMTPPassword?: string | null
    SMTPHost?: string | null
    SMTPPort?: number | null
    SMTPSSL?: boolean | null
    OTP?: number | null
    SMSKey?: string | null
    GoogleMapKey?: string | null
    GoogleLocationKey?: string | null
    PaymentGatewayKey?: string | null
    RevenueCommission?: string | null
    CDNPath?: string | null
    UpdatedDate?: Date | string | null
  }

  export type sysAdminUpdateInput = {
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    SMTPEmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPUserName?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPPassword?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPHost?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPPort?: NullableIntFieldUpdateOperationsInput | number | null
    SMTPSSL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    OTP?: NullableIntFieldUpdateOperationsInput | number | null
    SMSKey?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleMapKey?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleLocationKey?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentGatewayKey?: NullableStringFieldUpdateOperationsInput | string | null
    RevenueCommission?: NullableStringFieldUpdateOperationsInput | string | null
    CDNPath?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sysAdminUncheckedUpdateInput = {
    AdminIDP?: IntFieldUpdateOperationsInput | number
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    SMTPEmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPUserName?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPPassword?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPHost?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPPort?: NullableIntFieldUpdateOperationsInput | number | null
    SMTPSSL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    OTP?: NullableIntFieldUpdateOperationsInput | number | null
    SMSKey?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleMapKey?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleLocationKey?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentGatewayKey?: NullableStringFieldUpdateOperationsInput | string | null
    RevenueCommission?: NullableStringFieldUpdateOperationsInput | string | null
    CDNPath?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sysAdminCreateManyInput = {
    UserName?: string | null
    Password?: string | null
    FirstName?: string | null
    LastName?: string | null
    TermFee?: number | null
    SMTPEmailAddress?: string | null
    SMTPUserName?: string | null
    SMTPPassword?: string | null
    SMTPHost?: string | null
    SMTPPort?: number | null
    SMTPSSL?: boolean | null
    OTP?: number | null
    SMSKey?: string | null
    GoogleMapKey?: string | null
    GoogleLocationKey?: string | null
    PaymentGatewayKey?: string | null
    RevenueCommission?: string | null
    CDNPath?: string | null
    UpdatedDate?: Date | string | null
  }

  export type sysAdminUpdateManyMutationInput = {
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    SMTPEmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPUserName?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPPassword?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPHost?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPPort?: NullableIntFieldUpdateOperationsInput | number | null
    SMTPSSL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    OTP?: NullableIntFieldUpdateOperationsInput | number | null
    SMSKey?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleMapKey?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleLocationKey?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentGatewayKey?: NullableStringFieldUpdateOperationsInput | string | null
    RevenueCommission?: NullableStringFieldUpdateOperationsInput | string | null
    CDNPath?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type sysAdminUncheckedUpdateManyInput = {
    AdminIDP?: IntFieldUpdateOperationsInput | number
    UserName?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    FirstName?: NullableStringFieldUpdateOperationsInput | string | null
    LastName?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    SMTPEmailAddress?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPUserName?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPPassword?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPHost?: NullableStringFieldUpdateOperationsInput | string | null
    SMTPPort?: NullableIntFieldUpdateOperationsInput | number | null
    SMTPSSL?: NullableBoolFieldUpdateOperationsInput | boolean | null
    OTP?: NullableIntFieldUpdateOperationsInput | number | null
    SMSKey?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleMapKey?: NullableStringFieldUpdateOperationsInput | string | null
    GoogleLocationKey?: NullableStringFieldUpdateOperationsInput | string | null
    PaymentGatewayKey?: NullableStringFieldUpdateOperationsInput | string | null
    RevenueCommission?: NullableStringFieldUpdateOperationsInput | string | null
    CDNPath?: NullableStringFieldUpdateOperationsInput | string | null
    UpdatedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblBudgetCreateInput = {
    BudgetIDP?: bigint | number
    FinancialYearID: number
    ExpenseHeadIDF: bigint | number
    BudgetAmount: Decimal | DecimalJsLike | number | string
    Remarks?: string | null
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblBudgetUncheckedCreateInput = {
    BudgetIDP?: bigint | number
    FinancialYearID: number
    ExpenseHeadIDF: bigint | number
    BudgetAmount: Decimal | DecimalJsLike | number | string
    Remarks?: string | null
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblBudgetUpdateInput = {
    BudgetIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FinancialYearID?: IntFieldUpdateOperationsInput | number
    ExpenseHeadIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    BudgetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblBudgetUncheckedUpdateInput = {
    BudgetIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FinancialYearID?: IntFieldUpdateOperationsInput | number
    ExpenseHeadIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    BudgetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblBudgetCreateManyInput = {
    FinancialYearID: number
    ExpenseHeadIDF: bigint | number
    BudgetAmount: Decimal | DecimalJsLike | number | string
    Remarks?: string | null
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblBudgetUpdateManyMutationInput = {
    BudgetIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FinancialYearID?: IntFieldUpdateOperationsInput | number
    ExpenseHeadIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    BudgetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblBudgetUncheckedUpdateManyInput = {
    BudgetIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FinancialYearID?: IntFieldUpdateOperationsInput | number
    ExpenseHeadIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    BudgetAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblDocumentCreateInput = {
    DocumentIDP?: bigint | number
    StudentIDF: bigint | number
    DocumentTypeID?: number | null
    Attachment?: string | null
    IsDelete?: boolean | null
    EntryBy?: bigint | number | null
    EntryDate?: Date | string | null
  }

  export type tblDocumentUncheckedCreateInput = {
    DocumentIDP?: bigint | number
    StudentIDF: bigint | number
    DocumentTypeID?: number | null
    Attachment?: string | null
    IsDelete?: boolean | null
    EntryBy?: bigint | number | null
    EntryDate?: Date | string | null
  }

  export type tblDocumentUpdateInput = {
    DocumentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    DocumentTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblDocumentUncheckedUpdateInput = {
    DocumentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    DocumentTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblDocumentCreateManyInput = {
    StudentIDF: bigint | number
    DocumentTypeID?: number | null
    Attachment?: string | null
    IsDelete?: boolean | null
    EntryBy?: bigint | number | null
    EntryDate?: Date | string | null
  }

  export type tblDocumentUpdateManyMutationInput = {
    DocumentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    DocumentTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblDocumentUncheckedUpdateManyInput = {
    DocumentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    DocumentTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    Attachment?: NullableStringFieldUpdateOperationsInput | string | null
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblExpenseCreateInput = {
    ExpenseIDP?: bigint | number
    ExpenseHeadIDF: bigint | number
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    Remarks?: string | null
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblExpenseUncheckedCreateInput = {
    ExpenseIDP?: bigint | number
    ExpenseHeadIDF: bigint | number
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    Remarks?: string | null
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblExpenseUpdateInput = {
    ExpenseIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseHeadIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblExpenseUncheckedUpdateInput = {
    ExpenseIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseHeadIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblExpenseCreateManyInput = {
    ExpenseHeadIDF: bigint | number
    ExpenseDate: Date | string
    Amount: Decimal | DecimalJsLike | number | string
    Remarks?: string | null
    IsDeleted?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblExpenseUpdateManyMutationInput = {
    ExpenseIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseHeadIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblExpenseUncheckedUpdateManyInput = {
    ExpenseIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseHeadIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    ExpenseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    Amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblFeesCreateInput = {
    FeesIDP?: bigint | number
    StudentIDF: bigint | number
    TermID: number
    TermEntryID?: number | null
    ReceiptDate?: Date | string | null
    ReceiptAmount?: Decimal | DecimalJsLike | number | string | null
    Remarks?: string | null
  }

  export type tblFeesUncheckedCreateInput = {
    FeesIDP?: bigint | number
    StudentIDF: bigint | number
    TermID: number
    TermEntryID?: number | null
    ReceiptDate?: Date | string | null
    ReceiptAmount?: Decimal | DecimalJsLike | number | string | null
    Remarks?: string | null
  }

  export type tblFeesUpdateInput = {
    FeesIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    TermID?: IntFieldUpdateOperationsInput | number
    TermEntryID?: NullableIntFieldUpdateOperationsInput | number | null
    ReceiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReceiptAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblFeesUncheckedUpdateInput = {
    FeesIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    TermID?: IntFieldUpdateOperationsInput | number
    TermEntryID?: NullableIntFieldUpdateOperationsInput | number | null
    ReceiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReceiptAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblFeesCreateManyInput = {
    StudentIDF: bigint | number
    TermID: number
    TermEntryID?: number | null
    ReceiptDate?: Date | string | null
    ReceiptAmount?: Decimal | DecimalJsLike | number | string | null
    Remarks?: string | null
  }

  export type tblFeesUpdateManyMutationInput = {
    FeesIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    TermID?: IntFieldUpdateOperationsInput | number
    TermEntryID?: NullableIntFieldUpdateOperationsInput | number | null
    ReceiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReceiptAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblFeesUncheckedUpdateManyInput = {
    FeesIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StudentIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    TermID?: IntFieldUpdateOperationsInput | number
    TermEntryID?: NullableIntFieldUpdateOperationsInput | number | null
    ReceiptDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ReceiptAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    Remarks?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tblStaffCreateInput = {
    StaffIDP?: bigint | number
    FullName?: string | null
    MobileNo?: string | null
    Email?: string | null
    GenderID?: number | null
    DesignationID?: number | null
    DepartmentID?: number | null
    StaffTypeID?: number | null
    DateOfBirth?: Date | string | null
    Age?: number | null
    DateOfJoining?: Date | string | null
    DateOfAddmission?: Date | string | null
    CastandReligion?: string | null
    Qualification?: string | null
    UGPassingDate?: Date | string | null
    UGCollageName?: string | null
    UGUniversityName?: string | null
    PGPassingDate?: Date | string | null
    PGCollageName?: string | null
    PGUniversityName?: string | null
    StateRegNumber?: string | null
    NCHRegNumber?: string | null
    ExperienceDetail?: string | null
    PromotionDate?: Date | string | null
    PromotionDesignationID?: number | null
    AdharNumber?: bigint | number | null
    PANNumber?: string | null
    PermanentAddress1?: string | null
    PermanentAddress2?: string | null
    PermanentCity?: string | null
    PermanentDistrict?: string | null
    PermanentState?: string | null
    CurrentAddress1?: string | null
    CurrentAddress2?: string | null
    CurrentCity?: string | null
    CurrentDistrict?: string | null
    CurrentState?: string | null
    RefferancePerson?: string | null
    PassportPhoto?: string | null
    SignPhoto?: string | null
    Scale?: number | null
    Password?: string | null
    OTP?: string | null
    Remark1?: string | null
    Remark2?: string | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy: bigint | number
    EntryDate?: Date | string | null
  }

  export type tblStaffUncheckedCreateInput = {
    StaffIDP?: bigint | number
    FullName?: string | null
    MobileNo?: string | null
    Email?: string | null
    GenderID?: number | null
    DesignationID?: number | null
    DepartmentID?: number | null
    StaffTypeID?: number | null
    DateOfBirth?: Date | string | null
    Age?: number | null
    DateOfJoining?: Date | string | null
    DateOfAddmission?: Date | string | null
    CastandReligion?: string | null
    Qualification?: string | null
    UGPassingDate?: Date | string | null
    UGCollageName?: string | null
    UGUniversityName?: string | null
    PGPassingDate?: Date | string | null
    PGCollageName?: string | null
    PGUniversityName?: string | null
    StateRegNumber?: string | null
    NCHRegNumber?: string | null
    ExperienceDetail?: string | null
    PromotionDate?: Date | string | null
    PromotionDesignationID?: number | null
    AdharNumber?: bigint | number | null
    PANNumber?: string | null
    PermanentAddress1?: string | null
    PermanentAddress2?: string | null
    PermanentCity?: string | null
    PermanentDistrict?: string | null
    PermanentState?: string | null
    CurrentAddress1?: string | null
    CurrentAddress2?: string | null
    CurrentCity?: string | null
    CurrentDistrict?: string | null
    CurrentState?: string | null
    RefferancePerson?: string | null
    PassportPhoto?: string | null
    SignPhoto?: string | null
    Scale?: number | null
    Password?: string | null
    OTP?: string | null
    Remark1?: string | null
    Remark2?: string | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy: bigint | number
    EntryDate?: Date | string | null
  }

  export type tblStaffUpdateInput = {
    StaffIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    DesignationID?: NullableIntFieldUpdateOperationsInput | number | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    StaffTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    DateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Age?: NullableIntFieldUpdateOperationsInput | number | null
    DateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateOfAddmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CastandReligion?: NullableStringFieldUpdateOperationsInput | string | null
    Qualification?: NullableStringFieldUpdateOperationsInput | string | null
    UGPassingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UGCollageName?: NullableStringFieldUpdateOperationsInput | string | null
    UGUniversityName?: NullableStringFieldUpdateOperationsInput | string | null
    PGPassingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PGCollageName?: NullableStringFieldUpdateOperationsInput | string | null
    PGUniversityName?: NullableStringFieldUpdateOperationsInput | string | null
    StateRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    NCHRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ExperienceDetail?: NullableStringFieldUpdateOperationsInput | string | null
    PromotionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromotionDesignationID?: NullableIntFieldUpdateOperationsInput | number | null
    AdharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentAddress1?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentAddress2?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentCity?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentDistrict?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentState?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentAddress1?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentAddress2?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentCity?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentDistrict?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentState?: NullableStringFieldUpdateOperationsInput | string | null
    RefferancePerson?: NullableStringFieldUpdateOperationsInput | string | null
    PassportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    SignPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    Scale?: NullableFloatFieldUpdateOperationsInput | number | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblStaffUncheckedUpdateInput = {
    StaffIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    DesignationID?: NullableIntFieldUpdateOperationsInput | number | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    StaffTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    DateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Age?: NullableIntFieldUpdateOperationsInput | number | null
    DateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateOfAddmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CastandReligion?: NullableStringFieldUpdateOperationsInput | string | null
    Qualification?: NullableStringFieldUpdateOperationsInput | string | null
    UGPassingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UGCollageName?: NullableStringFieldUpdateOperationsInput | string | null
    UGUniversityName?: NullableStringFieldUpdateOperationsInput | string | null
    PGPassingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PGCollageName?: NullableStringFieldUpdateOperationsInput | string | null
    PGUniversityName?: NullableStringFieldUpdateOperationsInput | string | null
    StateRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    NCHRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ExperienceDetail?: NullableStringFieldUpdateOperationsInput | string | null
    PromotionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromotionDesignationID?: NullableIntFieldUpdateOperationsInput | number | null
    AdharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentAddress1?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentAddress2?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentCity?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentDistrict?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentState?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentAddress1?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentAddress2?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentCity?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentDistrict?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentState?: NullableStringFieldUpdateOperationsInput | string | null
    RefferancePerson?: NullableStringFieldUpdateOperationsInput | string | null
    PassportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    SignPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    Scale?: NullableFloatFieldUpdateOperationsInput | number | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblStaffCreateManyInput = {
    FullName?: string | null
    MobileNo?: string | null
    Email?: string | null
    GenderID?: number | null
    DesignationID?: number | null
    DepartmentID?: number | null
    StaffTypeID?: number | null
    DateOfBirth?: Date | string | null
    Age?: number | null
    DateOfJoining?: Date | string | null
    DateOfAddmission?: Date | string | null
    CastandReligion?: string | null
    Qualification?: string | null
    UGPassingDate?: Date | string | null
    UGCollageName?: string | null
    UGUniversityName?: string | null
    PGPassingDate?: Date | string | null
    PGCollageName?: string | null
    PGUniversityName?: string | null
    StateRegNumber?: string | null
    NCHRegNumber?: string | null
    ExperienceDetail?: string | null
    PromotionDate?: Date | string | null
    PromotionDesignationID?: number | null
    AdharNumber?: bigint | number | null
    PANNumber?: string | null
    PermanentAddress1?: string | null
    PermanentAddress2?: string | null
    PermanentCity?: string | null
    PermanentDistrict?: string | null
    PermanentState?: string | null
    CurrentAddress1?: string | null
    CurrentAddress2?: string | null
    CurrentCity?: string | null
    CurrentDistrict?: string | null
    CurrentState?: string | null
    RefferancePerson?: string | null
    PassportPhoto?: string | null
    SignPhoto?: string | null
    Scale?: number | null
    Password?: string | null
    OTP?: string | null
    Remark1?: string | null
    Remark2?: string | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy: bigint | number
    EntryDate?: Date | string | null
  }

  export type tblStaffUpdateManyMutationInput = {
    StaffIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    DesignationID?: NullableIntFieldUpdateOperationsInput | number | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    StaffTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    DateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Age?: NullableIntFieldUpdateOperationsInput | number | null
    DateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateOfAddmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CastandReligion?: NullableStringFieldUpdateOperationsInput | string | null
    Qualification?: NullableStringFieldUpdateOperationsInput | string | null
    UGPassingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UGCollageName?: NullableStringFieldUpdateOperationsInput | string | null
    UGUniversityName?: NullableStringFieldUpdateOperationsInput | string | null
    PGPassingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PGCollageName?: NullableStringFieldUpdateOperationsInput | string | null
    PGUniversityName?: NullableStringFieldUpdateOperationsInput | string | null
    StateRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    NCHRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ExperienceDetail?: NullableStringFieldUpdateOperationsInput | string | null
    PromotionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromotionDesignationID?: NullableIntFieldUpdateOperationsInput | number | null
    AdharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentAddress1?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentAddress2?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentCity?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentDistrict?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentState?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentAddress1?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentAddress2?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentCity?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentDistrict?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentState?: NullableStringFieldUpdateOperationsInput | string | null
    RefferancePerson?: NullableStringFieldUpdateOperationsInput | string | null
    PassportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    SignPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    Scale?: NullableFloatFieldUpdateOperationsInput | number | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblStaffUncheckedUpdateManyInput = {
    StaffIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    DesignationID?: NullableIntFieldUpdateOperationsInput | number | null
    DepartmentID?: NullableIntFieldUpdateOperationsInput | number | null
    StaffTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    DateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Age?: NullableIntFieldUpdateOperationsInput | number | null
    DateOfJoining?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DateOfAddmission?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CastandReligion?: NullableStringFieldUpdateOperationsInput | string | null
    Qualification?: NullableStringFieldUpdateOperationsInput | string | null
    UGPassingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UGCollageName?: NullableStringFieldUpdateOperationsInput | string | null
    UGUniversityName?: NullableStringFieldUpdateOperationsInput | string | null
    PGPassingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PGCollageName?: NullableStringFieldUpdateOperationsInput | string | null
    PGUniversityName?: NullableStringFieldUpdateOperationsInput | string | null
    StateRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    NCHRegNumber?: NullableStringFieldUpdateOperationsInput | string | null
    ExperienceDetail?: NullableStringFieldUpdateOperationsInput | string | null
    PromotionDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PromotionDesignationID?: NullableIntFieldUpdateOperationsInput | number | null
    AdharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNumber?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentAddress1?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentAddress2?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentCity?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentDistrict?: NullableStringFieldUpdateOperationsInput | string | null
    PermanentState?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentAddress1?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentAddress2?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentCity?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentDistrict?: NullableStringFieldUpdateOperationsInput | string | null
    CurrentState?: NullableStringFieldUpdateOperationsInput | string | null
    RefferancePerson?: NullableStringFieldUpdateOperationsInput | string | null
    PassportPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    SignPhoto?: NullableStringFieldUpdateOperationsInput | string | null
    Scale?: NullableFloatFieldUpdateOperationsInput | number | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblStaffExperienceCreateInput = {
    StaffExperienceIDP?: bigint | number
    StaffIDF: bigint | number
    InstituteName?: string | null
    FromDate?: Date | string | null
    ToDate?: Date | string | null
    Designation?: string | null
    TotalYear?: Decimal | DecimalJsLike | number | string | null
    IsDelete?: boolean | null
    EntryDate?: Date | string | null
  }

  export type tblStaffExperienceUncheckedCreateInput = {
    StaffExperienceIDP?: bigint | number
    StaffIDF: bigint | number
    InstituteName?: string | null
    FromDate?: Date | string | null
    ToDate?: Date | string | null
    Designation?: string | null
    TotalYear?: Decimal | DecimalJsLike | number | string | null
    IsDelete?: boolean | null
    EntryDate?: Date | string | null
  }

  export type tblStaffExperienceUpdateInput = {
    StaffExperienceIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StaffIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    InstituteName?: NullableStringFieldUpdateOperationsInput | string | null
    FromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Designation?: NullableStringFieldUpdateOperationsInput | string | null
    TotalYear?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblStaffExperienceUncheckedUpdateInput = {
    StaffExperienceIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StaffIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    InstituteName?: NullableStringFieldUpdateOperationsInput | string | null
    FromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Designation?: NullableStringFieldUpdateOperationsInput | string | null
    TotalYear?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblStaffExperienceCreateManyInput = {
    StaffIDF: bigint | number
    InstituteName?: string | null
    FromDate?: Date | string | null
    ToDate?: Date | string | null
    Designation?: string | null
    TotalYear?: Decimal | DecimalJsLike | number | string | null
    IsDelete?: boolean | null
    EntryDate?: Date | string | null
  }

  export type tblStaffExperienceUpdateManyMutationInput = {
    StaffExperienceIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StaffIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    InstituteName?: NullableStringFieldUpdateOperationsInput | string | null
    FromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Designation?: NullableStringFieldUpdateOperationsInput | string | null
    TotalYear?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblStaffExperienceUncheckedUpdateManyInput = {
    StaffExperienceIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    StaffIDF?: BigIntFieldUpdateOperationsInput | bigint | number
    InstituteName?: NullableStringFieldUpdateOperationsInput | string | null
    FromDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ToDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Designation?: NullableStringFieldUpdateOperationsInput | string | null
    TotalYear?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tblStudentCreateInput = {
    StudentIDP?: bigint | number
    FullName?: string | null
    MobileNo?: string | null
    Email?: string | null
    GenderID?: number | null
    Address?: string | null
    FatherMobileNo?: string | null
    CuurentYearID?: Decimal | DecimalJsLike | number | string | null
    GRNNo?: string | null
    AadharNumber?: bigint | number | null
    PANNo?: string | null
    ScholarshipAmount?: number | null
    EnrollmenyYear?: string | null
    FeesTypeID?: number | null
    BatchID?: number | null
    Remark1?: string | null
    Remark2?: string | null
    Remark3?: string | null
    Password?: string | null
    OTP?: string | null
    TermFee?: number | null
    TotalFee?: number | null
    DepositRefundable?: number | null
    DepositReceived?: number | null
    ImportRefID?: bigint | number | null
    ProfileImage?: string | null
    PassYear1?: number | null
    PassYear2?: number | null
    PassYear3?: number | null
    PassYear4?: number | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
    AppUser?: AppUserCreateNestedManyWithoutStudentInput
  }

  export type tblStudentUncheckedCreateInput = {
    StudentIDP?: bigint | number
    FullName?: string | null
    MobileNo?: string | null
    Email?: string | null
    GenderID?: number | null
    Address?: string | null
    FatherMobileNo?: string | null
    CuurentYearID?: Decimal | DecimalJsLike | number | string | null
    GRNNo?: string | null
    AadharNumber?: bigint | number | null
    PANNo?: string | null
    ScholarshipAmount?: number | null
    EnrollmenyYear?: string | null
    FeesTypeID?: number | null
    BatchID?: number | null
    Remark1?: string | null
    Remark2?: string | null
    Remark3?: string | null
    Password?: string | null
    OTP?: string | null
    TermFee?: number | null
    TotalFee?: number | null
    DepositRefundable?: number | null
    DepositReceived?: number | null
    ImportRefID?: bigint | number | null
    ProfileImage?: string | null
    PassYear1?: number | null
    PassYear2?: number | null
    PassYear3?: number | null
    PassYear4?: number | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
    AppUser?: AppUserUncheckedCreateNestedManyWithoutStudentInput
  }

  export type tblStudentUpdateInput = {
    StudentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    FatherMobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    CuurentYearID?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    GRNNo?: NullableStringFieldUpdateOperationsInput | string | null
    AadharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNo?: NullableStringFieldUpdateOperationsInput | string | null
    ScholarshipAmount?: NullableIntFieldUpdateOperationsInput | number | null
    EnrollmenyYear?: NullableStringFieldUpdateOperationsInput | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    Remark3?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositRefundable?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositReceived?: NullableFloatFieldUpdateOperationsInput | number | null
    ImportRefID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    PassYear1?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear2?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear3?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear4?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    AppUser?: AppUserUpdateManyWithoutStudentNestedInput
  }

  export type tblStudentUncheckedUpdateInput = {
    StudentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    FatherMobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    CuurentYearID?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    GRNNo?: NullableStringFieldUpdateOperationsInput | string | null
    AadharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNo?: NullableStringFieldUpdateOperationsInput | string | null
    ScholarshipAmount?: NullableIntFieldUpdateOperationsInput | number | null
    EnrollmenyYear?: NullableStringFieldUpdateOperationsInput | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    Remark3?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositRefundable?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositReceived?: NullableFloatFieldUpdateOperationsInput | number | null
    ImportRefID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    PassYear1?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear2?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear3?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear4?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    AppUser?: AppUserUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type tblStudentCreateManyInput = {
    FullName?: string | null
    MobileNo?: string | null
    Email?: string | null
    GenderID?: number | null
    Address?: string | null
    FatherMobileNo?: string | null
    CuurentYearID?: Decimal | DecimalJsLike | number | string | null
    GRNNo?: string | null
    AadharNumber?: bigint | number | null
    PANNo?: string | null
    ScholarshipAmount?: number | null
    EnrollmenyYear?: string | null
    FeesTypeID?: number | null
    BatchID?: number | null
    Remark1?: string | null
    Remark2?: string | null
    Remark3?: string | null
    Password?: string | null
    OTP?: string | null
    TermFee?: number | null
    TotalFee?: number | null
    DepositRefundable?: number | null
    DepositReceived?: number | null
    ImportRefID?: bigint | number | null
    ProfileImage?: string | null
    PassYear1?: number | null
    PassYear2?: number | null
    PassYear3?: number | null
    PassYear4?: number | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblStudentUpdateManyMutationInput = {
    StudentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    FatherMobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    CuurentYearID?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    GRNNo?: NullableStringFieldUpdateOperationsInput | string | null
    AadharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNo?: NullableStringFieldUpdateOperationsInput | string | null
    ScholarshipAmount?: NullableIntFieldUpdateOperationsInput | number | null
    EnrollmenyYear?: NullableStringFieldUpdateOperationsInput | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    Remark3?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositRefundable?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositReceived?: NullableFloatFieldUpdateOperationsInput | number | null
    ImportRefID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    PassYear1?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear2?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear3?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear4?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblStudentUncheckedUpdateManyInput = {
    StudentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    FatherMobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    CuurentYearID?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    GRNNo?: NullableStringFieldUpdateOperationsInput | string | null
    AadharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNo?: NullableStringFieldUpdateOperationsInput | string | null
    ScholarshipAmount?: NullableIntFieldUpdateOperationsInput | number | null
    EnrollmenyYear?: NullableStringFieldUpdateOperationsInput | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    Remark3?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositRefundable?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositReceived?: NullableFloatFieldUpdateOperationsInput | number | null
    ImportRefID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    PassYear1?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear2?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear3?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear4?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type TblStudentRelationFilter = {
    is?: tblStudentWhereInput
    isNot?: tblStudentWhereInput
  }

  export type AppSessionListRelationFilter = {
    every?: AppSessionWhereInput
    some?: AppSessionWhereInput
    none?: AppSessionWhereInput
  }

  export type AppEmailVerificationCodesListRelationFilter = {
    every?: AppEmailVerificationCodesWhereInput
    some?: AppEmailVerificationCodesWhereInput
    none?: AppEmailVerificationCodesWhereInput
  }

  export type AppSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppEmailVerificationCodesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppUserCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type AppUserAvgOrderByAggregateInput = {
    studentId?: SortOrder
  }

  export type AppUserMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type AppUserMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
  }

  export type AppUserSumOrderByAggregateInput = {
    studentId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AppUserRelationFilter = {
    is?: AppUserWhereInput
    isNot?: AppUserWhereInput
  }

  export type AppSessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type AppSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type AppSessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AppEmailVerificationCodesCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type AppEmailVerificationCodesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AppEmailVerificationCodesMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type AppEmailVerificationCodesMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
  }

  export type AppEmailVerificationCodesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type mstExpenseHeadCountOrderByAggregateInput = {
    ExpenseHeadIDP?: SortOrder
    ExpenseHeadName?: SortOrder
    IsActive?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type mstExpenseHeadAvgOrderByAggregateInput = {
    ExpenseHeadIDP?: SortOrder
    EntryBy?: SortOrder
  }

  export type mstExpenseHeadMaxOrderByAggregateInput = {
    ExpenseHeadIDP?: SortOrder
    ExpenseHeadName?: SortOrder
    IsActive?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type mstExpenseHeadMinOrderByAggregateInput = {
    ExpenseHeadIDP?: SortOrder
    ExpenseHeadName?: SortOrder
    IsActive?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type mstExpenseHeadSumOrderByAggregateInput = {
    ExpenseHeadIDP?: SortOrder
    EntryBy?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type mstFeesCountOrderByAggregateInput = {
    FeesIDP?: SortOrder
    DepositFee?: SortOrder
    TurmFee1?: SortOrder
    TurmFee2?: SortOrder
    TurmFee3?: SortOrder
    TurmFee4?: SortOrder
    TurmFee5?: SortOrder
    TurmFee6?: SortOrder
    TurmFee7?: SortOrder
    TurmFee8?: SortOrder
    TurmFee9?: SortOrder
    TurmFee1_Collection?: SortOrder
    TurmFee2_Collection?: SortOrder
    TurmFee3_Collection?: SortOrder
    TurmFee4_Collection?: SortOrder
    TurmFee5_Collection?: SortOrder
    TurmFee6_Collection?: SortOrder
    TurmFee7_Collection?: SortOrder
    TurmFee8_Collection?: SortOrder
    TurmFee9_Collection?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type mstFeesAvgOrderByAggregateInput = {
    FeesIDP?: SortOrder
    DepositFee?: SortOrder
    TurmFee1?: SortOrder
    TurmFee2?: SortOrder
    TurmFee3?: SortOrder
    TurmFee4?: SortOrder
    TurmFee5?: SortOrder
    TurmFee6?: SortOrder
    TurmFee7?: SortOrder
    TurmFee8?: SortOrder
    TurmFee9?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    EntryBy?: SortOrder
  }

  export type mstFeesMaxOrderByAggregateInput = {
    FeesIDP?: SortOrder
    DepositFee?: SortOrder
    TurmFee1?: SortOrder
    TurmFee2?: SortOrder
    TurmFee3?: SortOrder
    TurmFee4?: SortOrder
    TurmFee5?: SortOrder
    TurmFee6?: SortOrder
    TurmFee7?: SortOrder
    TurmFee8?: SortOrder
    TurmFee9?: SortOrder
    TurmFee1_Collection?: SortOrder
    TurmFee2_Collection?: SortOrder
    TurmFee3_Collection?: SortOrder
    TurmFee4_Collection?: SortOrder
    TurmFee5_Collection?: SortOrder
    TurmFee6_Collection?: SortOrder
    TurmFee7_Collection?: SortOrder
    TurmFee8_Collection?: SortOrder
    TurmFee9_Collection?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type mstFeesMinOrderByAggregateInput = {
    FeesIDP?: SortOrder
    DepositFee?: SortOrder
    TurmFee1?: SortOrder
    TurmFee2?: SortOrder
    TurmFee3?: SortOrder
    TurmFee4?: SortOrder
    TurmFee5?: SortOrder
    TurmFee6?: SortOrder
    TurmFee7?: SortOrder
    TurmFee8?: SortOrder
    TurmFee9?: SortOrder
    TurmFee1_Collection?: SortOrder
    TurmFee2_Collection?: SortOrder
    TurmFee3_Collection?: SortOrder
    TurmFee4_Collection?: SortOrder
    TurmFee5_Collection?: SortOrder
    TurmFee6_Collection?: SortOrder
    TurmFee7_Collection?: SortOrder
    TurmFee8_Collection?: SortOrder
    TurmFee9_Collection?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type mstFeesSumOrderByAggregateInput = {
    FeesIDP?: SortOrder
    DepositFee?: SortOrder
    TurmFee1?: SortOrder
    TurmFee2?: SortOrder
    TurmFee3?: SortOrder
    TurmFee4?: SortOrder
    TurmFee5?: SortOrder
    TurmFee6?: SortOrder
    TurmFee7?: SortOrder
    TurmFee8?: SortOrder
    TurmFee9?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    EntryBy?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type sysAdminCountOrderByAggregateInput = {
    AdminIDP?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    TermFee?: SortOrder
    SMTPEmailAddress?: SortOrder
    SMTPUserName?: SortOrder
    SMTPPassword?: SortOrder
    SMTPHost?: SortOrder
    SMTPPort?: SortOrder
    SMTPSSL?: SortOrder
    OTP?: SortOrder
    SMSKey?: SortOrder
    GoogleMapKey?: SortOrder
    GoogleLocationKey?: SortOrder
    PaymentGatewayKey?: SortOrder
    RevenueCommission?: SortOrder
    CDNPath?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type sysAdminAvgOrderByAggregateInput = {
    AdminIDP?: SortOrder
    TermFee?: SortOrder
    SMTPPort?: SortOrder
    OTP?: SortOrder
  }

  export type sysAdminMaxOrderByAggregateInput = {
    AdminIDP?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    TermFee?: SortOrder
    SMTPEmailAddress?: SortOrder
    SMTPUserName?: SortOrder
    SMTPPassword?: SortOrder
    SMTPHost?: SortOrder
    SMTPPort?: SortOrder
    SMTPSSL?: SortOrder
    OTP?: SortOrder
    SMSKey?: SortOrder
    GoogleMapKey?: SortOrder
    GoogleLocationKey?: SortOrder
    PaymentGatewayKey?: SortOrder
    RevenueCommission?: SortOrder
    CDNPath?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type sysAdminMinOrderByAggregateInput = {
    AdminIDP?: SortOrder
    UserName?: SortOrder
    Password?: SortOrder
    FirstName?: SortOrder
    LastName?: SortOrder
    TermFee?: SortOrder
    SMTPEmailAddress?: SortOrder
    SMTPUserName?: SortOrder
    SMTPPassword?: SortOrder
    SMTPHost?: SortOrder
    SMTPPort?: SortOrder
    SMTPSSL?: SortOrder
    OTP?: SortOrder
    SMSKey?: SortOrder
    GoogleMapKey?: SortOrder
    GoogleLocationKey?: SortOrder
    PaymentGatewayKey?: SortOrder
    RevenueCommission?: SortOrder
    CDNPath?: SortOrder
    UpdatedDate?: SortOrder
  }

  export type sysAdminSumOrderByAggregateInput = {
    AdminIDP?: SortOrder
    TermFee?: SortOrder
    SMTPPort?: SortOrder
    OTP?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type tblBudgetCountOrderByAggregateInput = {
    BudgetIDP?: SortOrder
    FinancialYearID?: SortOrder
    ExpenseHeadIDF?: SortOrder
    BudgetAmount?: SortOrder
    Remarks?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblBudgetAvgOrderByAggregateInput = {
    BudgetIDP?: SortOrder
    FinancialYearID?: SortOrder
    ExpenseHeadIDF?: SortOrder
    BudgetAmount?: SortOrder
    EntryBy?: SortOrder
  }

  export type tblBudgetMaxOrderByAggregateInput = {
    BudgetIDP?: SortOrder
    FinancialYearID?: SortOrder
    ExpenseHeadIDF?: SortOrder
    BudgetAmount?: SortOrder
    Remarks?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblBudgetMinOrderByAggregateInput = {
    BudgetIDP?: SortOrder
    FinancialYearID?: SortOrder
    ExpenseHeadIDF?: SortOrder
    BudgetAmount?: SortOrder
    Remarks?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblBudgetSumOrderByAggregateInput = {
    BudgetIDP?: SortOrder
    FinancialYearID?: SortOrder
    ExpenseHeadIDF?: SortOrder
    BudgetAmount?: SortOrder
    EntryBy?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type tblDocumentCountOrderByAggregateInput = {
    DocumentIDP?: SortOrder
    StudentIDF?: SortOrder
    DocumentTypeID?: SortOrder
    Attachment?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblDocumentAvgOrderByAggregateInput = {
    DocumentIDP?: SortOrder
    StudentIDF?: SortOrder
    DocumentTypeID?: SortOrder
    EntryBy?: SortOrder
  }

  export type tblDocumentMaxOrderByAggregateInput = {
    DocumentIDP?: SortOrder
    StudentIDF?: SortOrder
    DocumentTypeID?: SortOrder
    Attachment?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblDocumentMinOrderByAggregateInput = {
    DocumentIDP?: SortOrder
    StudentIDF?: SortOrder
    DocumentTypeID?: SortOrder
    Attachment?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblDocumentSumOrderByAggregateInput = {
    DocumentIDP?: SortOrder
    StudentIDF?: SortOrder
    DocumentTypeID?: SortOrder
    EntryBy?: SortOrder
  }

  export type tblExpenseCountOrderByAggregateInput = {
    ExpenseIDP?: SortOrder
    ExpenseHeadIDF?: SortOrder
    ExpenseDate?: SortOrder
    Amount?: SortOrder
    Remarks?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblExpenseAvgOrderByAggregateInput = {
    ExpenseIDP?: SortOrder
    ExpenseHeadIDF?: SortOrder
    Amount?: SortOrder
    EntryBy?: SortOrder
  }

  export type tblExpenseMaxOrderByAggregateInput = {
    ExpenseIDP?: SortOrder
    ExpenseHeadIDF?: SortOrder
    ExpenseDate?: SortOrder
    Amount?: SortOrder
    Remarks?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblExpenseMinOrderByAggregateInput = {
    ExpenseIDP?: SortOrder
    ExpenseHeadIDF?: SortOrder
    ExpenseDate?: SortOrder
    Amount?: SortOrder
    Remarks?: SortOrder
    IsDeleted?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblExpenseSumOrderByAggregateInput = {
    ExpenseIDP?: SortOrder
    ExpenseHeadIDF?: SortOrder
    Amount?: SortOrder
    EntryBy?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type tblFeesCountOrderByAggregateInput = {
    FeesIDP?: SortOrder
    StudentIDF?: SortOrder
    TermID?: SortOrder
    TermEntryID?: SortOrder
    ReceiptDate?: SortOrder
    ReceiptAmount?: SortOrder
    Remarks?: SortOrder
  }

  export type tblFeesAvgOrderByAggregateInput = {
    FeesIDP?: SortOrder
    StudentIDF?: SortOrder
    TermID?: SortOrder
    TermEntryID?: SortOrder
    ReceiptAmount?: SortOrder
  }

  export type tblFeesMaxOrderByAggregateInput = {
    FeesIDP?: SortOrder
    StudentIDF?: SortOrder
    TermID?: SortOrder
    TermEntryID?: SortOrder
    ReceiptDate?: SortOrder
    ReceiptAmount?: SortOrder
    Remarks?: SortOrder
  }

  export type tblFeesMinOrderByAggregateInput = {
    FeesIDP?: SortOrder
    StudentIDF?: SortOrder
    TermID?: SortOrder
    TermEntryID?: SortOrder
    ReceiptDate?: SortOrder
    ReceiptAmount?: SortOrder
    Remarks?: SortOrder
  }

  export type tblFeesSumOrderByAggregateInput = {
    FeesIDP?: SortOrder
    StudentIDF?: SortOrder
    TermID?: SortOrder
    TermEntryID?: SortOrder
    ReceiptAmount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type tblStaffCountOrderByAggregateInput = {
    StaffIDP?: SortOrder
    FullName?: SortOrder
    MobileNo?: SortOrder
    Email?: SortOrder
    GenderID?: SortOrder
    DesignationID?: SortOrder
    DepartmentID?: SortOrder
    StaffTypeID?: SortOrder
    DateOfBirth?: SortOrder
    Age?: SortOrder
    DateOfJoining?: SortOrder
    DateOfAddmission?: SortOrder
    CastandReligion?: SortOrder
    Qualification?: SortOrder
    UGPassingDate?: SortOrder
    UGCollageName?: SortOrder
    UGUniversityName?: SortOrder
    PGPassingDate?: SortOrder
    PGCollageName?: SortOrder
    PGUniversityName?: SortOrder
    StateRegNumber?: SortOrder
    NCHRegNumber?: SortOrder
    ExperienceDetail?: SortOrder
    PromotionDate?: SortOrder
    PromotionDesignationID?: SortOrder
    AdharNumber?: SortOrder
    PANNumber?: SortOrder
    PermanentAddress1?: SortOrder
    PermanentAddress2?: SortOrder
    PermanentCity?: SortOrder
    PermanentDistrict?: SortOrder
    PermanentState?: SortOrder
    CurrentAddress1?: SortOrder
    CurrentAddress2?: SortOrder
    CurrentCity?: SortOrder
    CurrentDistrict?: SortOrder
    CurrentState?: SortOrder
    RefferancePerson?: SortOrder
    PassportPhoto?: SortOrder
    SignPhoto?: SortOrder
    Scale?: SortOrder
    Password?: SortOrder
    OTP?: SortOrder
    Remark1?: SortOrder
    Remark2?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStaffAvgOrderByAggregateInput = {
    StaffIDP?: SortOrder
    GenderID?: SortOrder
    DesignationID?: SortOrder
    DepartmentID?: SortOrder
    StaffTypeID?: SortOrder
    Age?: SortOrder
    PromotionDesignationID?: SortOrder
    AdharNumber?: SortOrder
    Scale?: SortOrder
    EntryBy?: SortOrder
  }

  export type tblStaffMaxOrderByAggregateInput = {
    StaffIDP?: SortOrder
    FullName?: SortOrder
    MobileNo?: SortOrder
    Email?: SortOrder
    GenderID?: SortOrder
    DesignationID?: SortOrder
    DepartmentID?: SortOrder
    StaffTypeID?: SortOrder
    DateOfBirth?: SortOrder
    Age?: SortOrder
    DateOfJoining?: SortOrder
    DateOfAddmission?: SortOrder
    CastandReligion?: SortOrder
    Qualification?: SortOrder
    UGPassingDate?: SortOrder
    UGCollageName?: SortOrder
    UGUniversityName?: SortOrder
    PGPassingDate?: SortOrder
    PGCollageName?: SortOrder
    PGUniversityName?: SortOrder
    StateRegNumber?: SortOrder
    NCHRegNumber?: SortOrder
    ExperienceDetail?: SortOrder
    PromotionDate?: SortOrder
    PromotionDesignationID?: SortOrder
    AdharNumber?: SortOrder
    PANNumber?: SortOrder
    PermanentAddress1?: SortOrder
    PermanentAddress2?: SortOrder
    PermanentCity?: SortOrder
    PermanentDistrict?: SortOrder
    PermanentState?: SortOrder
    CurrentAddress1?: SortOrder
    CurrentAddress2?: SortOrder
    CurrentCity?: SortOrder
    CurrentDistrict?: SortOrder
    CurrentState?: SortOrder
    RefferancePerson?: SortOrder
    PassportPhoto?: SortOrder
    SignPhoto?: SortOrder
    Scale?: SortOrder
    Password?: SortOrder
    OTP?: SortOrder
    Remark1?: SortOrder
    Remark2?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStaffMinOrderByAggregateInput = {
    StaffIDP?: SortOrder
    FullName?: SortOrder
    MobileNo?: SortOrder
    Email?: SortOrder
    GenderID?: SortOrder
    DesignationID?: SortOrder
    DepartmentID?: SortOrder
    StaffTypeID?: SortOrder
    DateOfBirth?: SortOrder
    Age?: SortOrder
    DateOfJoining?: SortOrder
    DateOfAddmission?: SortOrder
    CastandReligion?: SortOrder
    Qualification?: SortOrder
    UGPassingDate?: SortOrder
    UGCollageName?: SortOrder
    UGUniversityName?: SortOrder
    PGPassingDate?: SortOrder
    PGCollageName?: SortOrder
    PGUniversityName?: SortOrder
    StateRegNumber?: SortOrder
    NCHRegNumber?: SortOrder
    ExperienceDetail?: SortOrder
    PromotionDate?: SortOrder
    PromotionDesignationID?: SortOrder
    AdharNumber?: SortOrder
    PANNumber?: SortOrder
    PermanentAddress1?: SortOrder
    PermanentAddress2?: SortOrder
    PermanentCity?: SortOrder
    PermanentDistrict?: SortOrder
    PermanentState?: SortOrder
    CurrentAddress1?: SortOrder
    CurrentAddress2?: SortOrder
    CurrentCity?: SortOrder
    CurrentDistrict?: SortOrder
    CurrentState?: SortOrder
    RefferancePerson?: SortOrder
    PassportPhoto?: SortOrder
    SignPhoto?: SortOrder
    Scale?: SortOrder
    Password?: SortOrder
    OTP?: SortOrder
    Remark1?: SortOrder
    Remark2?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStaffSumOrderByAggregateInput = {
    StaffIDP?: SortOrder
    GenderID?: SortOrder
    DesignationID?: SortOrder
    DepartmentID?: SortOrder
    StaffTypeID?: SortOrder
    Age?: SortOrder
    PromotionDesignationID?: SortOrder
    AdharNumber?: SortOrder
    Scale?: SortOrder
    EntryBy?: SortOrder
  }

  export type tblStaffExperienceCountOrderByAggregateInput = {
    StaffExperienceIDP?: SortOrder
    StaffIDF?: SortOrder
    InstituteName?: SortOrder
    FromDate?: SortOrder
    ToDate?: SortOrder
    Designation?: SortOrder
    TotalYear?: SortOrder
    IsDelete?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStaffExperienceAvgOrderByAggregateInput = {
    StaffExperienceIDP?: SortOrder
    StaffIDF?: SortOrder
    TotalYear?: SortOrder
  }

  export type tblStaffExperienceMaxOrderByAggregateInput = {
    StaffExperienceIDP?: SortOrder
    StaffIDF?: SortOrder
    InstituteName?: SortOrder
    FromDate?: SortOrder
    ToDate?: SortOrder
    Designation?: SortOrder
    TotalYear?: SortOrder
    IsDelete?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStaffExperienceMinOrderByAggregateInput = {
    StaffExperienceIDP?: SortOrder
    StaffIDF?: SortOrder
    InstituteName?: SortOrder
    FromDate?: SortOrder
    ToDate?: SortOrder
    Designation?: SortOrder
    TotalYear?: SortOrder
    IsDelete?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStaffExperienceSumOrderByAggregateInput = {
    StaffExperienceIDP?: SortOrder
    StaffIDF?: SortOrder
    TotalYear?: SortOrder
  }

  export type AppUserListRelationFilter = {
    every?: AppUserWhereInput
    some?: AppUserWhereInput
    none?: AppUserWhereInput
  }

  export type AppUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tblStudentCountOrderByAggregateInput = {
    StudentIDP?: SortOrder
    FullName?: SortOrder
    MobileNo?: SortOrder
    Email?: SortOrder
    GenderID?: SortOrder
    Address?: SortOrder
    FatherMobileNo?: SortOrder
    CuurentYearID?: SortOrder
    GRNNo?: SortOrder
    AadharNumber?: SortOrder
    PANNo?: SortOrder
    ScholarshipAmount?: SortOrder
    EnrollmenyYear?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    Remark1?: SortOrder
    Remark2?: SortOrder
    Remark3?: SortOrder
    Password?: SortOrder
    OTP?: SortOrder
    TermFee?: SortOrder
    TotalFee?: SortOrder
    DepositRefundable?: SortOrder
    DepositReceived?: SortOrder
    ImportRefID?: SortOrder
    ProfileImage?: SortOrder
    PassYear1?: SortOrder
    PassYear2?: SortOrder
    PassYear3?: SortOrder
    PassYear4?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStudentAvgOrderByAggregateInput = {
    StudentIDP?: SortOrder
    GenderID?: SortOrder
    CuurentYearID?: SortOrder
    AadharNumber?: SortOrder
    ScholarshipAmount?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    TermFee?: SortOrder
    TotalFee?: SortOrder
    DepositRefundable?: SortOrder
    DepositReceived?: SortOrder
    ImportRefID?: SortOrder
    PassYear1?: SortOrder
    PassYear2?: SortOrder
    PassYear3?: SortOrder
    PassYear4?: SortOrder
    EntryBy?: SortOrder
  }

  export type tblStudentMaxOrderByAggregateInput = {
    StudentIDP?: SortOrder
    FullName?: SortOrder
    MobileNo?: SortOrder
    Email?: SortOrder
    GenderID?: SortOrder
    Address?: SortOrder
    FatherMobileNo?: SortOrder
    CuurentYearID?: SortOrder
    GRNNo?: SortOrder
    AadharNumber?: SortOrder
    PANNo?: SortOrder
    ScholarshipAmount?: SortOrder
    EnrollmenyYear?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    Remark1?: SortOrder
    Remark2?: SortOrder
    Remark3?: SortOrder
    Password?: SortOrder
    OTP?: SortOrder
    TermFee?: SortOrder
    TotalFee?: SortOrder
    DepositRefundable?: SortOrder
    DepositReceived?: SortOrder
    ImportRefID?: SortOrder
    ProfileImage?: SortOrder
    PassYear1?: SortOrder
    PassYear2?: SortOrder
    PassYear3?: SortOrder
    PassYear4?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStudentMinOrderByAggregateInput = {
    StudentIDP?: SortOrder
    FullName?: SortOrder
    MobileNo?: SortOrder
    Email?: SortOrder
    GenderID?: SortOrder
    Address?: SortOrder
    FatherMobileNo?: SortOrder
    CuurentYearID?: SortOrder
    GRNNo?: SortOrder
    AadharNumber?: SortOrder
    PANNo?: SortOrder
    ScholarshipAmount?: SortOrder
    EnrollmenyYear?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    Remark1?: SortOrder
    Remark2?: SortOrder
    Remark3?: SortOrder
    Password?: SortOrder
    OTP?: SortOrder
    TermFee?: SortOrder
    TotalFee?: SortOrder
    DepositRefundable?: SortOrder
    DepositReceived?: SortOrder
    ImportRefID?: SortOrder
    ProfileImage?: SortOrder
    PassYear1?: SortOrder
    PassYear2?: SortOrder
    PassYear3?: SortOrder
    PassYear4?: SortOrder
    IsActive?: SortOrder
    IsDelete?: SortOrder
    EntryBy?: SortOrder
    EntryDate?: SortOrder
  }

  export type tblStudentSumOrderByAggregateInput = {
    StudentIDP?: SortOrder
    GenderID?: SortOrder
    CuurentYearID?: SortOrder
    AadharNumber?: SortOrder
    ScholarshipAmount?: SortOrder
    FeesTypeID?: SortOrder
    BatchID?: SortOrder
    TermFee?: SortOrder
    TotalFee?: SortOrder
    DepositRefundable?: SortOrder
    DepositReceived?: SortOrder
    ImportRefID?: SortOrder
    PassYear1?: SortOrder
    PassYear2?: SortOrder
    PassYear3?: SortOrder
    PassYear4?: SortOrder
    EntryBy?: SortOrder
  }

  export type tblStudentCreateNestedOneWithoutAppUserInput = {
    create?: XOR<tblStudentCreateWithoutAppUserInput, tblStudentUncheckedCreateWithoutAppUserInput>
    connectOrCreate?: tblStudentCreateOrConnectWithoutAppUserInput
    connect?: tblStudentWhereUniqueInput
  }

  export type AppSessionCreateNestedManyWithoutAppUserInput = {
    create?: XOR<AppSessionCreateWithoutAppUserInput, AppSessionUncheckedCreateWithoutAppUserInput> | AppSessionCreateWithoutAppUserInput[] | AppSessionUncheckedCreateWithoutAppUserInput[]
    connectOrCreate?: AppSessionCreateOrConnectWithoutAppUserInput | AppSessionCreateOrConnectWithoutAppUserInput[]
    createMany?: AppSessionCreateManyAppUserInputEnvelope
    connect?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
  }

  export type AppEmailVerificationCodesCreateNestedManyWithoutAppUserInput = {
    create?: XOR<AppEmailVerificationCodesCreateWithoutAppUserInput, AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput> | AppEmailVerificationCodesCreateWithoutAppUserInput[] | AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput[]
    connectOrCreate?: AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput | AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput[]
    createMany?: AppEmailVerificationCodesCreateManyAppUserInputEnvelope
    connect?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
  }

  export type AppSessionUncheckedCreateNestedManyWithoutAppUserInput = {
    create?: XOR<AppSessionCreateWithoutAppUserInput, AppSessionUncheckedCreateWithoutAppUserInput> | AppSessionCreateWithoutAppUserInput[] | AppSessionUncheckedCreateWithoutAppUserInput[]
    connectOrCreate?: AppSessionCreateOrConnectWithoutAppUserInput | AppSessionCreateOrConnectWithoutAppUserInput[]
    createMany?: AppSessionCreateManyAppUserInputEnvelope
    connect?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
  }

  export type AppEmailVerificationCodesUncheckedCreateNestedManyWithoutAppUserInput = {
    create?: XOR<AppEmailVerificationCodesCreateWithoutAppUserInput, AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput> | AppEmailVerificationCodesCreateWithoutAppUserInput[] | AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput[]
    connectOrCreate?: AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput | AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput[]
    createMany?: AppEmailVerificationCodesCreateManyAppUserInputEnvelope
    connect?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type tblStudentUpdateOneRequiredWithoutAppUserNestedInput = {
    create?: XOR<tblStudentCreateWithoutAppUserInput, tblStudentUncheckedCreateWithoutAppUserInput>
    connectOrCreate?: tblStudentCreateOrConnectWithoutAppUserInput
    upsert?: tblStudentUpsertWithoutAppUserInput
    connect?: tblStudentWhereUniqueInput
    update?: XOR<XOR<tblStudentUpdateToOneWithWhereWithoutAppUserInput, tblStudentUpdateWithoutAppUserInput>, tblStudentUncheckedUpdateWithoutAppUserInput>
  }

  export type AppSessionUpdateManyWithoutAppUserNestedInput = {
    create?: XOR<AppSessionCreateWithoutAppUserInput, AppSessionUncheckedCreateWithoutAppUserInput> | AppSessionCreateWithoutAppUserInput[] | AppSessionUncheckedCreateWithoutAppUserInput[]
    connectOrCreate?: AppSessionCreateOrConnectWithoutAppUserInput | AppSessionCreateOrConnectWithoutAppUserInput[]
    upsert?: AppSessionUpsertWithWhereUniqueWithoutAppUserInput | AppSessionUpsertWithWhereUniqueWithoutAppUserInput[]
    createMany?: AppSessionCreateManyAppUserInputEnvelope
    set?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
    disconnect?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
    delete?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
    connect?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
    update?: AppSessionUpdateWithWhereUniqueWithoutAppUserInput | AppSessionUpdateWithWhereUniqueWithoutAppUserInput[]
    updateMany?: AppSessionUpdateManyWithWhereWithoutAppUserInput | AppSessionUpdateManyWithWhereWithoutAppUserInput[]
    deleteMany?: AppSessionScalarWhereInput | AppSessionScalarWhereInput[]
  }

  export type AppEmailVerificationCodesUpdateManyWithoutAppUserNestedInput = {
    create?: XOR<AppEmailVerificationCodesCreateWithoutAppUserInput, AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput> | AppEmailVerificationCodesCreateWithoutAppUserInput[] | AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput[]
    connectOrCreate?: AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput | AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput[]
    upsert?: AppEmailVerificationCodesUpsertWithWhereUniqueWithoutAppUserInput | AppEmailVerificationCodesUpsertWithWhereUniqueWithoutAppUserInput[]
    createMany?: AppEmailVerificationCodesCreateManyAppUserInputEnvelope
    set?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
    disconnect?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
    delete?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
    connect?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
    update?: AppEmailVerificationCodesUpdateWithWhereUniqueWithoutAppUserInput | AppEmailVerificationCodesUpdateWithWhereUniqueWithoutAppUserInput[]
    updateMany?: AppEmailVerificationCodesUpdateManyWithWhereWithoutAppUserInput | AppEmailVerificationCodesUpdateManyWithWhereWithoutAppUserInput[]
    deleteMany?: AppEmailVerificationCodesScalarWhereInput | AppEmailVerificationCodesScalarWhereInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type AppSessionUncheckedUpdateManyWithoutAppUserNestedInput = {
    create?: XOR<AppSessionCreateWithoutAppUserInput, AppSessionUncheckedCreateWithoutAppUserInput> | AppSessionCreateWithoutAppUserInput[] | AppSessionUncheckedCreateWithoutAppUserInput[]
    connectOrCreate?: AppSessionCreateOrConnectWithoutAppUserInput | AppSessionCreateOrConnectWithoutAppUserInput[]
    upsert?: AppSessionUpsertWithWhereUniqueWithoutAppUserInput | AppSessionUpsertWithWhereUniqueWithoutAppUserInput[]
    createMany?: AppSessionCreateManyAppUserInputEnvelope
    set?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
    disconnect?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
    delete?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
    connect?: AppSessionWhereUniqueInput | AppSessionWhereUniqueInput[]
    update?: AppSessionUpdateWithWhereUniqueWithoutAppUserInput | AppSessionUpdateWithWhereUniqueWithoutAppUserInput[]
    updateMany?: AppSessionUpdateManyWithWhereWithoutAppUserInput | AppSessionUpdateManyWithWhereWithoutAppUserInput[]
    deleteMany?: AppSessionScalarWhereInput | AppSessionScalarWhereInput[]
  }

  export type AppEmailVerificationCodesUncheckedUpdateManyWithoutAppUserNestedInput = {
    create?: XOR<AppEmailVerificationCodesCreateWithoutAppUserInput, AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput> | AppEmailVerificationCodesCreateWithoutAppUserInput[] | AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput[]
    connectOrCreate?: AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput | AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput[]
    upsert?: AppEmailVerificationCodesUpsertWithWhereUniqueWithoutAppUserInput | AppEmailVerificationCodesUpsertWithWhereUniqueWithoutAppUserInput[]
    createMany?: AppEmailVerificationCodesCreateManyAppUserInputEnvelope
    set?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
    disconnect?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
    delete?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
    connect?: AppEmailVerificationCodesWhereUniqueInput | AppEmailVerificationCodesWhereUniqueInput[]
    update?: AppEmailVerificationCodesUpdateWithWhereUniqueWithoutAppUserInput | AppEmailVerificationCodesUpdateWithWhereUniqueWithoutAppUserInput[]
    updateMany?: AppEmailVerificationCodesUpdateManyWithWhereWithoutAppUserInput | AppEmailVerificationCodesUpdateManyWithWhereWithoutAppUserInput[]
    deleteMany?: AppEmailVerificationCodesScalarWhereInput | AppEmailVerificationCodesScalarWhereInput[]
  }

  export type AppUserCreateNestedOneWithoutAppSessionsInput = {
    create?: XOR<AppUserCreateWithoutAppSessionsInput, AppUserUncheckedCreateWithoutAppSessionsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutAppSessionsInput
    connect?: AppUserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AppUserUpdateOneRequiredWithoutAppSessionsNestedInput = {
    create?: XOR<AppUserCreateWithoutAppSessionsInput, AppUserUncheckedCreateWithoutAppSessionsInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutAppSessionsInput
    upsert?: AppUserUpsertWithoutAppSessionsInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutAppSessionsInput, AppUserUpdateWithoutAppSessionsInput>, AppUserUncheckedUpdateWithoutAppSessionsInput>
  }

  export type AppUserCreateNestedOneWithoutAppEmailVerificationCodesInput = {
    create?: XOR<AppUserCreateWithoutAppEmailVerificationCodesInput, AppUserUncheckedCreateWithoutAppEmailVerificationCodesInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutAppEmailVerificationCodesInput
    connect?: AppUserWhereUniqueInput
  }

  export type AppUserUpdateOneRequiredWithoutAppEmailVerificationCodesNestedInput = {
    create?: XOR<AppUserCreateWithoutAppEmailVerificationCodesInput, AppUserUncheckedCreateWithoutAppEmailVerificationCodesInput>
    connectOrCreate?: AppUserCreateOrConnectWithoutAppEmailVerificationCodesInput
    upsert?: AppUserUpsertWithoutAppEmailVerificationCodesInput
    connect?: AppUserWhereUniqueInput
    update?: XOR<XOR<AppUserUpdateToOneWithWhereWithoutAppEmailVerificationCodesInput, AppUserUpdateWithoutAppEmailVerificationCodesInput>, AppUserUncheckedUpdateWithoutAppEmailVerificationCodesInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type AppUserCreateNestedManyWithoutStudentInput = {
    create?: XOR<AppUserCreateWithoutStudentInput, AppUserUncheckedCreateWithoutStudentInput> | AppUserCreateWithoutStudentInput[] | AppUserUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AppUserCreateOrConnectWithoutStudentInput | AppUserCreateOrConnectWithoutStudentInput[]
    createMany?: AppUserCreateManyStudentInputEnvelope
    connect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
  }

  export type AppUserUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AppUserCreateWithoutStudentInput, AppUserUncheckedCreateWithoutStudentInput> | AppUserCreateWithoutStudentInput[] | AppUserUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AppUserCreateOrConnectWithoutStudentInput | AppUserCreateOrConnectWithoutStudentInput[]
    createMany?: AppUserCreateManyStudentInputEnvelope
    connect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
  }

  export type AppUserUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AppUserCreateWithoutStudentInput, AppUserUncheckedCreateWithoutStudentInput> | AppUserCreateWithoutStudentInput[] | AppUserUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AppUserCreateOrConnectWithoutStudentInput | AppUserCreateOrConnectWithoutStudentInput[]
    upsert?: AppUserUpsertWithWhereUniqueWithoutStudentInput | AppUserUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AppUserCreateManyStudentInputEnvelope
    set?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
    disconnect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
    delete?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
    connect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
    update?: AppUserUpdateWithWhereUniqueWithoutStudentInput | AppUserUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AppUserUpdateManyWithWhereWithoutStudentInput | AppUserUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AppUserScalarWhereInput | AppUserScalarWhereInput[]
  }

  export type AppUserUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AppUserCreateWithoutStudentInput, AppUserUncheckedCreateWithoutStudentInput> | AppUserCreateWithoutStudentInput[] | AppUserUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AppUserCreateOrConnectWithoutStudentInput | AppUserCreateOrConnectWithoutStudentInput[]
    upsert?: AppUserUpsertWithWhereUniqueWithoutStudentInput | AppUserUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AppUserCreateManyStudentInputEnvelope
    set?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
    disconnect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
    delete?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
    connect?: AppUserWhereUniqueInput | AppUserWhereUniqueInput[]
    update?: AppUserUpdateWithWhereUniqueWithoutStudentInput | AppUserUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AppUserUpdateManyWithWhereWithoutStudentInput | AppUserUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AppUserScalarWhereInput | AppUserScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type tblStudentCreateWithoutAppUserInput = {
    StudentIDP?: bigint | number
    FullName?: string | null
    MobileNo?: string | null
    Email?: string | null
    GenderID?: number | null
    Address?: string | null
    FatherMobileNo?: string | null
    CuurentYearID?: Decimal | DecimalJsLike | number | string | null
    GRNNo?: string | null
    AadharNumber?: bigint | number | null
    PANNo?: string | null
    ScholarshipAmount?: number | null
    EnrollmenyYear?: string | null
    FeesTypeID?: number | null
    BatchID?: number | null
    Remark1?: string | null
    Remark2?: string | null
    Remark3?: string | null
    Password?: string | null
    OTP?: string | null
    TermFee?: number | null
    TotalFee?: number | null
    DepositRefundable?: number | null
    DepositReceived?: number | null
    ImportRefID?: bigint | number | null
    ProfileImage?: string | null
    PassYear1?: number | null
    PassYear2?: number | null
    PassYear3?: number | null
    PassYear4?: number | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblStudentUncheckedCreateWithoutAppUserInput = {
    StudentIDP?: bigint | number
    FullName?: string | null
    MobileNo?: string | null
    Email?: string | null
    GenderID?: number | null
    Address?: string | null
    FatherMobileNo?: string | null
    CuurentYearID?: Decimal | DecimalJsLike | number | string | null
    GRNNo?: string | null
    AadharNumber?: bigint | number | null
    PANNo?: string | null
    ScholarshipAmount?: number | null
    EnrollmenyYear?: string | null
    FeesTypeID?: number | null
    BatchID?: number | null
    Remark1?: string | null
    Remark2?: string | null
    Remark3?: string | null
    Password?: string | null
    OTP?: string | null
    TermFee?: number | null
    TotalFee?: number | null
    DepositRefundable?: number | null
    DepositReceived?: number | null
    ImportRefID?: bigint | number | null
    ProfileImage?: string | null
    PassYear1?: number | null
    PassYear2?: number | null
    PassYear3?: number | null
    PassYear4?: number | null
    IsActive: boolean
    IsDelete?: boolean | null
    EntryBy: bigint | number
    EntryDate: Date | string
  }

  export type tblStudentCreateOrConnectWithoutAppUserInput = {
    where: tblStudentWhereUniqueInput
    create: XOR<tblStudentCreateWithoutAppUserInput, tblStudentUncheckedCreateWithoutAppUserInput>
  }

  export type AppSessionCreateWithoutAppUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type AppSessionUncheckedCreateWithoutAppUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type AppSessionCreateOrConnectWithoutAppUserInput = {
    where: AppSessionWhereUniqueInput
    create: XOR<AppSessionCreateWithoutAppUserInput, AppSessionUncheckedCreateWithoutAppUserInput>
  }

  export type AppSessionCreateManyAppUserInputEnvelope = {
    data: AppSessionCreateManyAppUserInput | AppSessionCreateManyAppUserInput[]
  }

  export type AppEmailVerificationCodesCreateWithoutAppUserInput = {
    id?: bigint | number
    code: string
    expiresAt: Date | string
  }

  export type AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput = {
    id?: bigint | number
    code: string
    expiresAt: Date | string
  }

  export type AppEmailVerificationCodesCreateOrConnectWithoutAppUserInput = {
    where: AppEmailVerificationCodesWhereUniqueInput
    create: XOR<AppEmailVerificationCodesCreateWithoutAppUserInput, AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput>
  }

  export type AppEmailVerificationCodesCreateManyAppUserInputEnvelope = {
    data: AppEmailVerificationCodesCreateManyAppUserInput | AppEmailVerificationCodesCreateManyAppUserInput[]
  }

  export type tblStudentUpsertWithoutAppUserInput = {
    update: XOR<tblStudentUpdateWithoutAppUserInput, tblStudentUncheckedUpdateWithoutAppUserInput>
    create: XOR<tblStudentCreateWithoutAppUserInput, tblStudentUncheckedCreateWithoutAppUserInput>
    where?: tblStudentWhereInput
  }

  export type tblStudentUpdateToOneWithWhereWithoutAppUserInput = {
    where?: tblStudentWhereInput
    data: XOR<tblStudentUpdateWithoutAppUserInput, tblStudentUncheckedUpdateWithoutAppUserInput>
  }

  export type tblStudentUpdateWithoutAppUserInput = {
    StudentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    FatherMobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    CuurentYearID?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    GRNNo?: NullableStringFieldUpdateOperationsInput | string | null
    AadharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNo?: NullableStringFieldUpdateOperationsInput | string | null
    ScholarshipAmount?: NullableIntFieldUpdateOperationsInput | number | null
    EnrollmenyYear?: NullableStringFieldUpdateOperationsInput | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    Remark3?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositRefundable?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositReceived?: NullableFloatFieldUpdateOperationsInput | number | null
    ImportRefID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    PassYear1?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear2?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear3?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear4?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tblStudentUncheckedUpdateWithoutAppUserInput = {
    StudentIDP?: BigIntFieldUpdateOperationsInput | bigint | number
    FullName?: NullableStringFieldUpdateOperationsInput | string | null
    MobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    Email?: NullableStringFieldUpdateOperationsInput | string | null
    GenderID?: NullableIntFieldUpdateOperationsInput | number | null
    Address?: NullableStringFieldUpdateOperationsInput | string | null
    FatherMobileNo?: NullableStringFieldUpdateOperationsInput | string | null
    CuurentYearID?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    GRNNo?: NullableStringFieldUpdateOperationsInput | string | null
    AadharNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    PANNo?: NullableStringFieldUpdateOperationsInput | string | null
    ScholarshipAmount?: NullableIntFieldUpdateOperationsInput | number | null
    EnrollmenyYear?: NullableStringFieldUpdateOperationsInput | string | null
    FeesTypeID?: NullableIntFieldUpdateOperationsInput | number | null
    BatchID?: NullableIntFieldUpdateOperationsInput | number | null
    Remark1?: NullableStringFieldUpdateOperationsInput | string | null
    Remark2?: NullableStringFieldUpdateOperationsInput | string | null
    Remark3?: NullableStringFieldUpdateOperationsInput | string | null
    Password?: NullableStringFieldUpdateOperationsInput | string | null
    OTP?: NullableStringFieldUpdateOperationsInput | string | null
    TermFee?: NullableFloatFieldUpdateOperationsInput | number | null
    TotalFee?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositRefundable?: NullableFloatFieldUpdateOperationsInput | number | null
    DepositReceived?: NullableFloatFieldUpdateOperationsInput | number | null
    ImportRefID?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    ProfileImage?: NullableStringFieldUpdateOperationsInput | string | null
    PassYear1?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear2?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear3?: NullableIntFieldUpdateOperationsInput | number | null
    PassYear4?: NullableIntFieldUpdateOperationsInput | number | null
    IsActive?: BoolFieldUpdateOperationsInput | boolean
    IsDelete?: NullableBoolFieldUpdateOperationsInput | boolean | null
    EntryBy?: BigIntFieldUpdateOperationsInput | bigint | number
    EntryDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionUpsertWithWhereUniqueWithoutAppUserInput = {
    where: AppSessionWhereUniqueInput
    update: XOR<AppSessionUpdateWithoutAppUserInput, AppSessionUncheckedUpdateWithoutAppUserInput>
    create: XOR<AppSessionCreateWithoutAppUserInput, AppSessionUncheckedCreateWithoutAppUserInput>
  }

  export type AppSessionUpdateWithWhereUniqueWithoutAppUserInput = {
    where: AppSessionWhereUniqueInput
    data: XOR<AppSessionUpdateWithoutAppUserInput, AppSessionUncheckedUpdateWithoutAppUserInput>
  }

  export type AppSessionUpdateManyWithWhereWithoutAppUserInput = {
    where: AppSessionScalarWhereInput
    data: XOR<AppSessionUpdateManyMutationInput, AppSessionUncheckedUpdateManyWithoutAppUserInput>
  }

  export type AppSessionScalarWhereInput = {
    AND?: AppSessionScalarWhereInput | AppSessionScalarWhereInput[]
    OR?: AppSessionScalarWhereInput[]
    NOT?: AppSessionScalarWhereInput | AppSessionScalarWhereInput[]
    id?: StringFilter<"AppSession"> | string
    userId?: StringFilter<"AppSession"> | string
    expiresAt?: DateTimeFilter<"AppSession"> | Date | string
  }

  export type AppEmailVerificationCodesUpsertWithWhereUniqueWithoutAppUserInput = {
    where: AppEmailVerificationCodesWhereUniqueInput
    update: XOR<AppEmailVerificationCodesUpdateWithoutAppUserInput, AppEmailVerificationCodesUncheckedUpdateWithoutAppUserInput>
    create: XOR<AppEmailVerificationCodesCreateWithoutAppUserInput, AppEmailVerificationCodesUncheckedCreateWithoutAppUserInput>
  }

  export type AppEmailVerificationCodesUpdateWithWhereUniqueWithoutAppUserInput = {
    where: AppEmailVerificationCodesWhereUniqueInput
    data: XOR<AppEmailVerificationCodesUpdateWithoutAppUserInput, AppEmailVerificationCodesUncheckedUpdateWithoutAppUserInput>
  }

  export type AppEmailVerificationCodesUpdateManyWithWhereWithoutAppUserInput = {
    where: AppEmailVerificationCodesScalarWhereInput
    data: XOR<AppEmailVerificationCodesUpdateManyMutationInput, AppEmailVerificationCodesUncheckedUpdateManyWithoutAppUserInput>
  }

  export type AppEmailVerificationCodesScalarWhereInput = {
    AND?: AppEmailVerificationCodesScalarWhereInput | AppEmailVerificationCodesScalarWhereInput[]
    OR?: AppEmailVerificationCodesScalarWhereInput[]
    NOT?: AppEmailVerificationCodesScalarWhereInput | AppEmailVerificationCodesScalarWhereInput[]
    id?: BigIntFilter<"AppEmailVerificationCodes"> | bigint | number
    code?: StringFilter<"AppEmailVerificationCodes"> | string
    expiresAt?: DateTimeFilter<"AppEmailVerificationCodes"> | Date | string
    userId?: StringFilter<"AppEmailVerificationCodes"> | string
  }

  export type AppUserCreateWithoutAppSessionsInput = {
    id: string
    student: tblStudentCreateNestedOneWithoutAppUserInput
    appEmailVerificationCodes?: AppEmailVerificationCodesCreateNestedManyWithoutAppUserInput
  }

  export type AppUserUncheckedCreateWithoutAppSessionsInput = {
    id: string
    studentId: bigint | number
    appEmailVerificationCodes?: AppEmailVerificationCodesUncheckedCreateNestedManyWithoutAppUserInput
  }

  export type AppUserCreateOrConnectWithoutAppSessionsInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutAppSessionsInput, AppUserUncheckedCreateWithoutAppSessionsInput>
  }

  export type AppUserUpsertWithoutAppSessionsInput = {
    update: XOR<AppUserUpdateWithoutAppSessionsInput, AppUserUncheckedUpdateWithoutAppSessionsInput>
    create: XOR<AppUserCreateWithoutAppSessionsInput, AppUserUncheckedCreateWithoutAppSessionsInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutAppSessionsInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutAppSessionsInput, AppUserUncheckedUpdateWithoutAppSessionsInput>
  }

  export type AppUserUpdateWithoutAppSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: tblStudentUpdateOneRequiredWithoutAppUserNestedInput
    appEmailVerificationCodes?: AppEmailVerificationCodesUpdateManyWithoutAppUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutAppSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: BigIntFieldUpdateOperationsInput | bigint | number
    appEmailVerificationCodes?: AppEmailVerificationCodesUncheckedUpdateManyWithoutAppUserNestedInput
  }

  export type AppUserCreateWithoutAppEmailVerificationCodesInput = {
    id: string
    student: tblStudentCreateNestedOneWithoutAppUserInput
    appSessions?: AppSessionCreateNestedManyWithoutAppUserInput
  }

  export type AppUserUncheckedCreateWithoutAppEmailVerificationCodesInput = {
    id: string
    studentId: bigint | number
    appSessions?: AppSessionUncheckedCreateNestedManyWithoutAppUserInput
  }

  export type AppUserCreateOrConnectWithoutAppEmailVerificationCodesInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutAppEmailVerificationCodesInput, AppUserUncheckedCreateWithoutAppEmailVerificationCodesInput>
  }

  export type AppUserUpsertWithoutAppEmailVerificationCodesInput = {
    update: XOR<AppUserUpdateWithoutAppEmailVerificationCodesInput, AppUserUncheckedUpdateWithoutAppEmailVerificationCodesInput>
    create: XOR<AppUserCreateWithoutAppEmailVerificationCodesInput, AppUserUncheckedCreateWithoutAppEmailVerificationCodesInput>
    where?: AppUserWhereInput
  }

  export type AppUserUpdateToOneWithWhereWithoutAppEmailVerificationCodesInput = {
    where?: AppUserWhereInput
    data: XOR<AppUserUpdateWithoutAppEmailVerificationCodesInput, AppUserUncheckedUpdateWithoutAppEmailVerificationCodesInput>
  }

  export type AppUserUpdateWithoutAppEmailVerificationCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: tblStudentUpdateOneRequiredWithoutAppUserNestedInput
    appSessions?: AppSessionUpdateManyWithoutAppUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutAppEmailVerificationCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: BigIntFieldUpdateOperationsInput | bigint | number
    appSessions?: AppSessionUncheckedUpdateManyWithoutAppUserNestedInput
  }

  export type AppUserCreateWithoutStudentInput = {
    id: string
    appSessions?: AppSessionCreateNestedManyWithoutAppUserInput
    appEmailVerificationCodes?: AppEmailVerificationCodesCreateNestedManyWithoutAppUserInput
  }

  export type AppUserUncheckedCreateWithoutStudentInput = {
    id: string
    appSessions?: AppSessionUncheckedCreateNestedManyWithoutAppUserInput
    appEmailVerificationCodes?: AppEmailVerificationCodesUncheckedCreateNestedManyWithoutAppUserInput
  }

  export type AppUserCreateOrConnectWithoutStudentInput = {
    where: AppUserWhereUniqueInput
    create: XOR<AppUserCreateWithoutStudentInput, AppUserUncheckedCreateWithoutStudentInput>
  }

  export type AppUserCreateManyStudentInputEnvelope = {
    data: AppUserCreateManyStudentInput | AppUserCreateManyStudentInput[]
  }

  export type AppUserUpsertWithWhereUniqueWithoutStudentInput = {
    where: AppUserWhereUniqueInput
    update: XOR<AppUserUpdateWithoutStudentInput, AppUserUncheckedUpdateWithoutStudentInput>
    create: XOR<AppUserCreateWithoutStudentInput, AppUserUncheckedCreateWithoutStudentInput>
  }

  export type AppUserUpdateWithWhereUniqueWithoutStudentInput = {
    where: AppUserWhereUniqueInput
    data: XOR<AppUserUpdateWithoutStudentInput, AppUserUncheckedUpdateWithoutStudentInput>
  }

  export type AppUserUpdateManyWithWhereWithoutStudentInput = {
    where: AppUserScalarWhereInput
    data: XOR<AppUserUpdateManyMutationInput, AppUserUncheckedUpdateManyWithoutStudentInput>
  }

  export type AppUserScalarWhereInput = {
    AND?: AppUserScalarWhereInput | AppUserScalarWhereInput[]
    OR?: AppUserScalarWhereInput[]
    NOT?: AppUserScalarWhereInput | AppUserScalarWhereInput[]
    id?: StringFilter<"AppUser"> | string
    studentId?: BigIntFilter<"AppUser"> | bigint | number
  }

  export type AppSessionCreateManyAppUserInput = {
    id: string
    expiresAt: Date | string
  }

  export type AppEmailVerificationCodesCreateManyAppUserInput = {
    code: string
    expiresAt: Date | string
  }

  export type AppSessionUpdateWithoutAppUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionUncheckedUpdateWithoutAppUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSessionUncheckedUpdateManyWithoutAppUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppEmailVerificationCodesUpdateWithoutAppUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppEmailVerificationCodesUncheckedUpdateWithoutAppUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppEmailVerificationCodesUncheckedUpdateManyWithoutAppUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppUserCreateManyStudentInput = {
    id: string
  }

  export type AppUserUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    appSessions?: AppSessionUpdateManyWithoutAppUserNestedInput
    appEmailVerificationCodes?: AppEmailVerificationCodesUpdateManyWithoutAppUserNestedInput
  }

  export type AppUserUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    appSessions?: AppSessionUncheckedUpdateManyWithoutAppUserNestedInput
    appEmailVerificationCodes?: AppEmailVerificationCodesUncheckedUpdateManyWithoutAppUserNestedInput
  }

  export type AppUserUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AppUserCountOutputTypeDefaultArgs instead
     */
    export type AppUserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TblStudentCountOutputTypeDefaultArgs instead
     */
    export type TblStudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TblStudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppUserDefaultArgs instead
     */
    export type AppUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppUserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppSessionDefaultArgs instead
     */
    export type AppSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppSessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppEmailVerificationCodesDefaultArgs instead
     */
    export type AppEmailVerificationCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AppEmailVerificationCodesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mstExpenseHeadDefaultArgs instead
     */
    export type mstExpenseHeadArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mstExpenseHeadDefaultArgs<ExtArgs>
    /**
     * @deprecated Use mstFeesDefaultArgs instead
     */
    export type mstFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = mstFeesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sysAdminDefaultArgs instead
     */
    export type sysAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sysAdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblBudgetDefaultArgs instead
     */
    export type tblBudgetArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblBudgetDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblDocumentDefaultArgs instead
     */
    export type tblDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblExpenseDefaultArgs instead
     */
    export type tblExpenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblExpenseDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblFeesDefaultArgs instead
     */
    export type tblFeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblFeesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblStaffDefaultArgs instead
     */
    export type tblStaffArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblStaffDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblStaffExperienceDefaultArgs instead
     */
    export type tblStaffExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblStaffExperienceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use tblStudentDefaultArgs instead
     */
    export type tblStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = tblStudentDefaultArgs<ExtArgs>

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