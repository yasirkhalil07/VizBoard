
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model DataConnection
 * 
 */
export type DataConnection = $Result.DefaultSelection<Prisma.$DataConnectionPayload>
/**
 * Model Dashboard
 * 
 */
export type Dashboard = $Result.DefaultSelection<Prisma.$DashboardPayload>
/**
 * Model DashboardAccess
 * 
 */
export type DashboardAccess = $Result.DefaultSelection<Prisma.$DashboardAccessPayload>
/**
 * Model Tab
 * 
 */
export type Tab = $Result.DefaultSelection<Prisma.$TabPayload>
/**
 * Model Chart
 * 
 */
export type Chart = $Result.DefaultSelection<Prisma.$ChartPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model ChartDataSource
 * 
 */
export type ChartDataSource = $Result.DefaultSelection<Prisma.$ChartDataSourcePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dataConnection`: Exposes CRUD operations for the **DataConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataConnections
    * const dataConnections = await prisma.dataConnection.findMany()
    * ```
    */
  get dataConnection(): Prisma.DataConnectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboard`: Exposes CRUD operations for the **Dashboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dashboards
    * const dashboards = await prisma.dashboard.findMany()
    * ```
    */
  get dashboard(): Prisma.DashboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dashboardAccess`: Exposes CRUD operations for the **DashboardAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DashboardAccesses
    * const dashboardAccesses = await prisma.dashboardAccess.findMany()
    * ```
    */
  get dashboardAccess(): Prisma.DashboardAccessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tab`: Exposes CRUD operations for the **Tab** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tabs
    * const tabs = await prisma.tab.findMany()
    * ```
    */
  get tab(): Prisma.TabDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chart`: Exposes CRUD operations for the **Chart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Charts
    * const charts = await prisma.chart.findMany()
    * ```
    */
  get chart(): Prisma.ChartDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.chartDataSource`: Exposes CRUD operations for the **ChartDataSource** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChartDataSources
    * const chartDataSources = await prisma.chartDataSource.findMany()
    * ```
    */
  get chartDataSource(): Prisma.ChartDataSourceDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
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
    Role: 'Role',
    User: 'User',
    DataConnection: 'DataConnection',
    Dashboard: 'Dashboard',
    DashboardAccess: 'DashboardAccess',
    Tab: 'Tab',
    Chart: 'Chart',
    File: 'File',
    ChartDataSource: 'ChartDataSource'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "dataConnection" | "dashboard" | "dashboardAccess" | "tab" | "chart" | "file" | "chartDataSource"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      DataConnection: {
        payload: Prisma.$DataConnectionPayload<ExtArgs>
        fields: Prisma.DataConnectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DataConnectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DataConnectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>
          }
          findFirst: {
            args: Prisma.DataConnectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DataConnectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>
          }
          findMany: {
            args: Prisma.DataConnectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>[]
          }
          create: {
            args: Prisma.DataConnectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>
          }
          createMany: {
            args: Prisma.DataConnectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DataConnectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>[]
          }
          delete: {
            args: Prisma.DataConnectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>
          }
          update: {
            args: Prisma.DataConnectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>
          }
          deleteMany: {
            args: Prisma.DataConnectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DataConnectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DataConnectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>[]
          }
          upsert: {
            args: Prisma.DataConnectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DataConnectionPayload>
          }
          aggregate: {
            args: Prisma.DataConnectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataConnection>
          }
          groupBy: {
            args: Prisma.DataConnectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataConnectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DataConnectionCountArgs<ExtArgs>
            result: $Utils.Optional<DataConnectionCountAggregateOutputType> | number
          }
        }
      }
      Dashboard: {
        payload: Prisma.$DashboardPayload<ExtArgs>
        fields: Prisma.DashboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          findFirst: {
            args: Prisma.DashboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          findMany: {
            args: Prisma.DashboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          create: {
            args: Prisma.DashboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          createMany: {
            args: Prisma.DashboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          delete: {
            args: Prisma.DashboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          update: {
            args: Prisma.DashboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          deleteMany: {
            args: Prisma.DashboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>[]
          }
          upsert: {
            args: Prisma.DashboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardPayload>
          }
          aggregate: {
            args: Prisma.DashboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboard>
          }
          groupBy: {
            args: Prisma.DashboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardCountAggregateOutputType> | number
          }
        }
      }
      DashboardAccess: {
        payload: Prisma.$DashboardAccessPayload<ExtArgs>
        fields: Prisma.DashboardAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DashboardAccessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DashboardAccessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>
          }
          findFirst: {
            args: Prisma.DashboardAccessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DashboardAccessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>
          }
          findMany: {
            args: Prisma.DashboardAccessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>[]
          }
          create: {
            args: Prisma.DashboardAccessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>
          }
          createMany: {
            args: Prisma.DashboardAccessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DashboardAccessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>[]
          }
          delete: {
            args: Prisma.DashboardAccessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>
          }
          update: {
            args: Prisma.DashboardAccessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>
          }
          deleteMany: {
            args: Prisma.DashboardAccessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DashboardAccessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DashboardAccessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>[]
          }
          upsert: {
            args: Prisma.DashboardAccessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DashboardAccessPayload>
          }
          aggregate: {
            args: Prisma.DashboardAccessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDashboardAccess>
          }
          groupBy: {
            args: Prisma.DashboardAccessGroupByArgs<ExtArgs>
            result: $Utils.Optional<DashboardAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.DashboardAccessCountArgs<ExtArgs>
            result: $Utils.Optional<DashboardAccessCountAggregateOutputType> | number
          }
        }
      }
      Tab: {
        payload: Prisma.$TabPayload<ExtArgs>
        fields: Prisma.TabFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TabFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TabFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>
          }
          findFirst: {
            args: Prisma.TabFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TabFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>
          }
          findMany: {
            args: Prisma.TabFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>[]
          }
          create: {
            args: Prisma.TabCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>
          }
          createMany: {
            args: Prisma.TabCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TabCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>[]
          }
          delete: {
            args: Prisma.TabDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>
          }
          update: {
            args: Prisma.TabUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>
          }
          deleteMany: {
            args: Prisma.TabDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TabUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TabUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>[]
          }
          upsert: {
            args: Prisma.TabUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TabPayload>
          }
          aggregate: {
            args: Prisma.TabAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTab>
          }
          groupBy: {
            args: Prisma.TabGroupByArgs<ExtArgs>
            result: $Utils.Optional<TabGroupByOutputType>[]
          }
          count: {
            args: Prisma.TabCountArgs<ExtArgs>
            result: $Utils.Optional<TabCountAggregateOutputType> | number
          }
        }
      }
      Chart: {
        payload: Prisma.$ChartPayload<ExtArgs>
        fields: Prisma.ChartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>
          }
          findFirst: {
            args: Prisma.ChartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>
          }
          findMany: {
            args: Prisma.ChartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>[]
          }
          create: {
            args: Prisma.ChartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>
          }
          createMany: {
            args: Prisma.ChartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>[]
          }
          delete: {
            args: Prisma.ChartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>
          }
          update: {
            args: Prisma.ChartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>
          }
          deleteMany: {
            args: Prisma.ChartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>[]
          }
          upsert: {
            args: Prisma.ChartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartPayload>
          }
          aggregate: {
            args: Prisma.ChartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChart>
          }
          groupBy: {
            args: Prisma.ChartGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChartGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChartCountArgs<ExtArgs>
            result: $Utils.Optional<ChartCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      ChartDataSource: {
        payload: Prisma.$ChartDataSourcePayload<ExtArgs>
        fields: Prisma.ChartDataSourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChartDataSourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChartDataSourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>
          }
          findFirst: {
            args: Prisma.ChartDataSourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChartDataSourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>
          }
          findMany: {
            args: Prisma.ChartDataSourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>[]
          }
          create: {
            args: Prisma.ChartDataSourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>
          }
          createMany: {
            args: Prisma.ChartDataSourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChartDataSourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>[]
          }
          delete: {
            args: Prisma.ChartDataSourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>
          }
          update: {
            args: Prisma.ChartDataSourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>
          }
          deleteMany: {
            args: Prisma.ChartDataSourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChartDataSourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChartDataSourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>[]
          }
          upsert: {
            args: Prisma.ChartDataSourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChartDataSourcePayload>
          }
          aggregate: {
            args: Prisma.ChartDataSourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChartDataSource>
          }
          groupBy: {
            args: Prisma.ChartDataSourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChartDataSourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChartDataSourceCountArgs<ExtArgs>
            result: $Utils.Optional<ChartDataSourceCountAggregateOutputType> | number
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
     * Read more in our [docs](https://pris.ly/d/logging).
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
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    dataConnection?: DataConnectionOmit
    dashboard?: DashboardOmit
    dashboardAccess?: DashboardAccessOmit
    tab?: TabOmit
    chart?: ChartOmit
    file?: FileOmit
    chartDataSource?: ChartDataSourceOmit
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
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
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
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dashboards: number
    data_connections: number
    files: number
    dashboard_access: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboards?: boolean | UserCountOutputTypeCountDashboardsArgs
    data_connections?: boolean | UserCountOutputTypeCountData_connectionsArgs
    files?: boolean | UserCountOutputTypeCountFilesArgs
    dashboard_access?: boolean | UserCountOutputTypeCountDashboard_accessArgs
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
  export type UserCountOutputTypeCountDashboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountData_connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataConnectionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDashboard_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardAccessWhereInput
  }


  /**
   * Count Type DataConnectionCountOutputType
   */

  export type DataConnectionCountOutputType = {
    chart_data_sources: number
  }

  export type DataConnectionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chart_data_sources?: boolean | DataConnectionCountOutputTypeCountChart_data_sourcesArgs
  }

  // Custom InputTypes
  /**
   * DataConnectionCountOutputType without action
   */
  export type DataConnectionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnectionCountOutputType
     */
    select?: DataConnectionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataConnectionCountOutputType without action
   */
  export type DataConnectionCountOutputTypeCountChart_data_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChartDataSourceWhereInput
  }


  /**
   * Count Type DashboardCountOutputType
   */

  export type DashboardCountOutputType = {
    tabs: number
    dashboard_access: number
  }

  export type DashboardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tabs?: boolean | DashboardCountOutputTypeCountTabsArgs
    dashboard_access?: boolean | DashboardCountOutputTypeCountDashboard_accessArgs
  }

  // Custom InputTypes
  /**
   * DashboardCountOutputType without action
   */
  export type DashboardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardCountOutputType
     */
    select?: DashboardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DashboardCountOutputType without action
   */
  export type DashboardCountOutputTypeCountTabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TabWhereInput
  }

  /**
   * DashboardCountOutputType without action
   */
  export type DashboardCountOutputTypeCountDashboard_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardAccessWhereInput
  }


  /**
   * Count Type TabCountOutputType
   */

  export type TabCountOutputType = {
    charts: number
  }

  export type TabCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    charts?: boolean | TabCountOutputTypeCountChartsArgs
  }

  // Custom InputTypes
  /**
   * TabCountOutputType without action
   */
  export type TabCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TabCountOutputType
     */
    select?: TabCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TabCountOutputType without action
   */
  export type TabCountOutputTypeCountChartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChartWhereInput
  }


  /**
   * Count Type FileCountOutputType
   */

  export type FileCountOutputType = {
    chart_data_sources: number
  }

  export type FileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chart_data_sources?: boolean | FileCountOutputTypeCountChart_data_sourcesArgs
  }

  // Custom InputTypes
  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FileCountOutputType
     */
    select?: FileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FileCountOutputType without action
   */
  export type FileCountOutputTypeCountChart_data_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChartDataSourceWhereInput
  }


  /**
   * Models
   */

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
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
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
    id: number
    name: string
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
    id?: boolean
    name?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
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
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
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
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
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
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
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
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
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
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
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
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    role_id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    role_id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role_id?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role_id?: true
    created_at?: true
    updated_at?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role_id: number
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    dashboards?: boolean | User$dashboardsArgs<ExtArgs>
    data_connections?: boolean | User$data_connectionsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    dashboard_access?: boolean | User$dashboard_accessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role_id" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    dashboards?: boolean | User$dashboardsArgs<ExtArgs>
    data_connections?: boolean | User$data_connectionsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    dashboard_access?: boolean | User$dashboard_accessArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      dashboards: Prisma.$DashboardPayload<ExtArgs>[]
      data_connections: Prisma.$DataConnectionPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
      dashboard_access: Prisma.$DashboardAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role_id: number
      created_at: Date
      updated_at: Date
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
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
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
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dashboards<T extends User$dashboardsArgs<ExtArgs> = {}>(args?: Subset<T, User$dashboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    data_connections<T extends User$data_connectionsArgs<ExtArgs> = {}>(args?: Subset<T, User$data_connectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dashboard_access<T extends User$dashboard_accessArgs<ExtArgs> = {}>(args?: Subset<T, User$dashboard_accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * User.dashboards
   */
  export type User$dashboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    where?: DashboardWhereInput
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    cursor?: DashboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * User.data_connections
   */
  export type User$data_connectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    where?: DataConnectionWhereInput
    orderBy?: DataConnectionOrderByWithRelationInput | DataConnectionOrderByWithRelationInput[]
    cursor?: DataConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataConnectionScalarFieldEnum | DataConnectionScalarFieldEnum[]
  }

  /**
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * User.dashboard_access
   */
  export type User$dashboard_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    where?: DashboardAccessWhereInput
    orderBy?: DashboardAccessOrderByWithRelationInput | DashboardAccessOrderByWithRelationInput[]
    cursor?: DashboardAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardAccessScalarFieldEnum | DashboardAccessScalarFieldEnum[]
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
   * Model DataConnection
   */

  export type AggregateDataConnection = {
    _count: DataConnectionCountAggregateOutputType | null
    _avg: DataConnectionAvgAggregateOutputType | null
    _sum: DataConnectionSumAggregateOutputType | null
    _min: DataConnectionMinAggregateOutputType | null
    _max: DataConnectionMaxAggregateOutputType | null
  }

  export type DataConnectionAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DataConnectionSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DataConnectionMinAggregateOutputType = {
    id: number | null
    connection_name: string | null
    user_id: number | null
    db_type: string | null
    host: string | null
    username: string | null
    password: string | null
    database_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DataConnectionMaxAggregateOutputType = {
    id: number | null
    connection_name: string | null
    user_id: number | null
    db_type: string | null
    host: string | null
    username: string | null
    password: string | null
    database_name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DataConnectionCountAggregateOutputType = {
    id: number
    connection_name: number
    user_id: number
    db_type: number
    host: number
    username: number
    password: number
    database_name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DataConnectionAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DataConnectionSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DataConnectionMinAggregateInputType = {
    id?: true
    connection_name?: true
    user_id?: true
    db_type?: true
    host?: true
    username?: true
    password?: true
    database_name?: true
    created_at?: true
    updated_at?: true
  }

  export type DataConnectionMaxAggregateInputType = {
    id?: true
    connection_name?: true
    user_id?: true
    db_type?: true
    host?: true
    username?: true
    password?: true
    database_name?: true
    created_at?: true
    updated_at?: true
  }

  export type DataConnectionCountAggregateInputType = {
    id?: true
    connection_name?: true
    user_id?: true
    db_type?: true
    host?: true
    username?: true
    password?: true
    database_name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DataConnectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataConnection to aggregate.
     */
    where?: DataConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataConnections to fetch.
     */
    orderBy?: DataConnectionOrderByWithRelationInput | DataConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataConnections
    **/
    _count?: true | DataConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataConnectionMaxAggregateInputType
  }

  export type GetDataConnectionAggregateType<T extends DataConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateDataConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataConnection[P]>
      : GetScalarType<T[P], AggregateDataConnection[P]>
  }




  export type DataConnectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DataConnectionWhereInput
    orderBy?: DataConnectionOrderByWithAggregationInput | DataConnectionOrderByWithAggregationInput[]
    by: DataConnectionScalarFieldEnum[] | DataConnectionScalarFieldEnum
    having?: DataConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataConnectionCountAggregateInputType | true
    _avg?: DataConnectionAvgAggregateInputType
    _sum?: DataConnectionSumAggregateInputType
    _min?: DataConnectionMinAggregateInputType
    _max?: DataConnectionMaxAggregateInputType
  }

  export type DataConnectionGroupByOutputType = {
    id: number
    connection_name: string
    user_id: number
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at: Date
    updated_at: Date
    _count: DataConnectionCountAggregateOutputType | null
    _avg: DataConnectionAvgAggregateOutputType | null
    _sum: DataConnectionSumAggregateOutputType | null
    _min: DataConnectionMinAggregateOutputType | null
    _max: DataConnectionMaxAggregateOutputType | null
  }

  type GetDataConnectionGroupByPayload<T extends DataConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], DataConnectionGroupByOutputType[P]>
        }
      >
    >


  export type DataConnectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    user_id?: boolean
    db_type?: boolean
    host?: boolean
    username?: boolean
    password?: boolean
    database_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chart_data_sources?: boolean | DataConnection$chart_data_sourcesArgs<ExtArgs>
    _count?: boolean | DataConnectionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataConnection"]>

  export type DataConnectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    user_id?: boolean
    db_type?: boolean
    host?: boolean
    username?: boolean
    password?: boolean
    database_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataConnection"]>

  export type DataConnectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connection_name?: boolean
    user_id?: boolean
    db_type?: boolean
    host?: boolean
    username?: boolean
    password?: boolean
    database_name?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataConnection"]>

  export type DataConnectionSelectScalar = {
    id?: boolean
    connection_name?: boolean
    user_id?: boolean
    db_type?: boolean
    host?: boolean
    username?: boolean
    password?: boolean
    database_name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DataConnectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "connection_name" | "user_id" | "db_type" | "host" | "username" | "password" | "database_name" | "created_at" | "updated_at", ExtArgs["result"]["dataConnection"]>
  export type DataConnectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chart_data_sources?: boolean | DataConnection$chart_data_sourcesArgs<ExtArgs>
    _count?: boolean | DataConnectionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DataConnectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DataConnectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DataConnectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DataConnection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chart_data_sources: Prisma.$ChartDataSourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      connection_name: string
      user_id: number
      db_type: string
      host: string
      username: string
      password: string
      database_name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["dataConnection"]>
    composites: {}
  }

  type DataConnectionGetPayload<S extends boolean | null | undefined | DataConnectionDefaultArgs> = $Result.GetResult<Prisma.$DataConnectionPayload, S>

  type DataConnectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DataConnectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DataConnectionCountAggregateInputType | true
    }

  export interface DataConnectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DataConnection'], meta: { name: 'DataConnection' } }
    /**
     * Find zero or one DataConnection that matches the filter.
     * @param {DataConnectionFindUniqueArgs} args - Arguments to find a DataConnection
     * @example
     * // Get one DataConnection
     * const dataConnection = await prisma.dataConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DataConnectionFindUniqueArgs>(args: SelectSubset<T, DataConnectionFindUniqueArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DataConnection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DataConnectionFindUniqueOrThrowArgs} args - Arguments to find a DataConnection
     * @example
     * // Get one DataConnection
     * const dataConnection = await prisma.dataConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DataConnectionFindUniqueOrThrowArgs>(args: SelectSubset<T, DataConnectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataConnectionFindFirstArgs} args - Arguments to find a DataConnection
     * @example
     * // Get one DataConnection
     * const dataConnection = await prisma.dataConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DataConnectionFindFirstArgs>(args?: SelectSubset<T, DataConnectionFindFirstArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DataConnection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataConnectionFindFirstOrThrowArgs} args - Arguments to find a DataConnection
     * @example
     * // Get one DataConnection
     * const dataConnection = await prisma.dataConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DataConnectionFindFirstOrThrowArgs>(args?: SelectSubset<T, DataConnectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DataConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataConnectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataConnections
     * const dataConnections = await prisma.dataConnection.findMany()
     * 
     * // Get first 10 DataConnections
     * const dataConnections = await prisma.dataConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataConnectionWithIdOnly = await prisma.dataConnection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DataConnectionFindManyArgs>(args?: SelectSubset<T, DataConnectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DataConnection.
     * @param {DataConnectionCreateArgs} args - Arguments to create a DataConnection.
     * @example
     * // Create one DataConnection
     * const DataConnection = await prisma.dataConnection.create({
     *   data: {
     *     // ... data to create a DataConnection
     *   }
     * })
     * 
     */
    create<T extends DataConnectionCreateArgs>(args: SelectSubset<T, DataConnectionCreateArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DataConnections.
     * @param {DataConnectionCreateManyArgs} args - Arguments to create many DataConnections.
     * @example
     * // Create many DataConnections
     * const dataConnection = await prisma.dataConnection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DataConnectionCreateManyArgs>(args?: SelectSubset<T, DataConnectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataConnections and returns the data saved in the database.
     * @param {DataConnectionCreateManyAndReturnArgs} args - Arguments to create many DataConnections.
     * @example
     * // Create many DataConnections
     * const dataConnection = await prisma.dataConnection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataConnections and only return the `id`
     * const dataConnectionWithIdOnly = await prisma.dataConnection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DataConnectionCreateManyAndReturnArgs>(args?: SelectSubset<T, DataConnectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DataConnection.
     * @param {DataConnectionDeleteArgs} args - Arguments to delete one DataConnection.
     * @example
     * // Delete one DataConnection
     * const DataConnection = await prisma.dataConnection.delete({
     *   where: {
     *     // ... filter to delete one DataConnection
     *   }
     * })
     * 
     */
    delete<T extends DataConnectionDeleteArgs>(args: SelectSubset<T, DataConnectionDeleteArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DataConnection.
     * @param {DataConnectionUpdateArgs} args - Arguments to update one DataConnection.
     * @example
     * // Update one DataConnection
     * const dataConnection = await prisma.dataConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DataConnectionUpdateArgs>(args: SelectSubset<T, DataConnectionUpdateArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DataConnections.
     * @param {DataConnectionDeleteManyArgs} args - Arguments to filter DataConnections to delete.
     * @example
     * // Delete a few DataConnections
     * const { count } = await prisma.dataConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DataConnectionDeleteManyArgs>(args?: SelectSubset<T, DataConnectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataConnections
     * const dataConnection = await prisma.dataConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DataConnectionUpdateManyArgs>(args: SelectSubset<T, DataConnectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataConnections and returns the data updated in the database.
     * @param {DataConnectionUpdateManyAndReturnArgs} args - Arguments to update many DataConnections.
     * @example
     * // Update many DataConnections
     * const dataConnection = await prisma.dataConnection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DataConnections and only return the `id`
     * const dataConnectionWithIdOnly = await prisma.dataConnection.updateManyAndReturn({
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
    updateManyAndReturn<T extends DataConnectionUpdateManyAndReturnArgs>(args: SelectSubset<T, DataConnectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DataConnection.
     * @param {DataConnectionUpsertArgs} args - Arguments to update or create a DataConnection.
     * @example
     * // Update or create a DataConnection
     * const dataConnection = await prisma.dataConnection.upsert({
     *   create: {
     *     // ... data to create a DataConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataConnection we want to update
     *   }
     * })
     */
    upsert<T extends DataConnectionUpsertArgs>(args: SelectSubset<T, DataConnectionUpsertArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DataConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataConnectionCountArgs} args - Arguments to filter DataConnections to count.
     * @example
     * // Count the number of DataConnections
     * const count = await prisma.dataConnection.count({
     *   where: {
     *     // ... the filter for the DataConnections we want to count
     *   }
     * })
    **/
    count<T extends DataConnectionCountArgs>(
      args?: Subset<T, DataConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DataConnectionAggregateArgs>(args: Subset<T, DataConnectionAggregateArgs>): Prisma.PrismaPromise<GetDataConnectionAggregateType<T>>

    /**
     * Group by DataConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataConnectionGroupByArgs} args - Group by arguments.
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
      T extends DataConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataConnectionGroupByArgs['orderBy'] }
        : { orderBy?: DataConnectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DataConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DataConnection model
   */
  readonly fields: DataConnectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DataConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DataConnectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chart_data_sources<T extends DataConnection$chart_data_sourcesArgs<ExtArgs> = {}>(args?: Subset<T, DataConnection$chart_data_sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DataConnection model
   */
  interface DataConnectionFieldRefs {
    readonly id: FieldRef<"DataConnection", 'Int'>
    readonly connection_name: FieldRef<"DataConnection", 'String'>
    readonly user_id: FieldRef<"DataConnection", 'Int'>
    readonly db_type: FieldRef<"DataConnection", 'String'>
    readonly host: FieldRef<"DataConnection", 'String'>
    readonly username: FieldRef<"DataConnection", 'String'>
    readonly password: FieldRef<"DataConnection", 'String'>
    readonly database_name: FieldRef<"DataConnection", 'String'>
    readonly created_at: FieldRef<"DataConnection", 'DateTime'>
    readonly updated_at: FieldRef<"DataConnection", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DataConnection findUnique
   */
  export type DataConnectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * Filter, which DataConnection to fetch.
     */
    where: DataConnectionWhereUniqueInput
  }

  /**
   * DataConnection findUniqueOrThrow
   */
  export type DataConnectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * Filter, which DataConnection to fetch.
     */
    where: DataConnectionWhereUniqueInput
  }

  /**
   * DataConnection findFirst
   */
  export type DataConnectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * Filter, which DataConnection to fetch.
     */
    where?: DataConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataConnections to fetch.
     */
    orderBy?: DataConnectionOrderByWithRelationInput | DataConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataConnections.
     */
    cursor?: DataConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataConnections.
     */
    distinct?: DataConnectionScalarFieldEnum | DataConnectionScalarFieldEnum[]
  }

  /**
   * DataConnection findFirstOrThrow
   */
  export type DataConnectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * Filter, which DataConnection to fetch.
     */
    where?: DataConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataConnections to fetch.
     */
    orderBy?: DataConnectionOrderByWithRelationInput | DataConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataConnections.
     */
    cursor?: DataConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataConnections.
     */
    distinct?: DataConnectionScalarFieldEnum | DataConnectionScalarFieldEnum[]
  }

  /**
   * DataConnection findMany
   */
  export type DataConnectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * Filter, which DataConnections to fetch.
     */
    where?: DataConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataConnections to fetch.
     */
    orderBy?: DataConnectionOrderByWithRelationInput | DataConnectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataConnections.
     */
    cursor?: DataConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataConnections.
     */
    distinct?: DataConnectionScalarFieldEnum | DataConnectionScalarFieldEnum[]
  }

  /**
   * DataConnection create
   */
  export type DataConnectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * The data needed to create a DataConnection.
     */
    data: XOR<DataConnectionCreateInput, DataConnectionUncheckedCreateInput>
  }

  /**
   * DataConnection createMany
   */
  export type DataConnectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DataConnections.
     */
    data: DataConnectionCreateManyInput | DataConnectionCreateManyInput[]
  }

  /**
   * DataConnection createManyAndReturn
   */
  export type DataConnectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * The data used to create many DataConnections.
     */
    data: DataConnectionCreateManyInput | DataConnectionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataConnection update
   */
  export type DataConnectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * The data needed to update a DataConnection.
     */
    data: XOR<DataConnectionUpdateInput, DataConnectionUncheckedUpdateInput>
    /**
     * Choose, which DataConnection to update.
     */
    where: DataConnectionWhereUniqueInput
  }

  /**
   * DataConnection updateMany
   */
  export type DataConnectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DataConnections.
     */
    data: XOR<DataConnectionUpdateManyMutationInput, DataConnectionUncheckedUpdateManyInput>
    /**
     * Filter which DataConnections to update
     */
    where?: DataConnectionWhereInput
    /**
     * Limit how many DataConnections to update.
     */
    limit?: number
  }

  /**
   * DataConnection updateManyAndReturn
   */
  export type DataConnectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * The data used to update DataConnections.
     */
    data: XOR<DataConnectionUpdateManyMutationInput, DataConnectionUncheckedUpdateManyInput>
    /**
     * Filter which DataConnections to update
     */
    where?: DataConnectionWhereInput
    /**
     * Limit how many DataConnections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DataConnection upsert
   */
  export type DataConnectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * The filter to search for the DataConnection to update in case it exists.
     */
    where: DataConnectionWhereUniqueInput
    /**
     * In case the DataConnection found by the `where` argument doesn't exist, create a new DataConnection with this data.
     */
    create: XOR<DataConnectionCreateInput, DataConnectionUncheckedCreateInput>
    /**
     * In case the DataConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataConnectionUpdateInput, DataConnectionUncheckedUpdateInput>
  }

  /**
   * DataConnection delete
   */
  export type DataConnectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    /**
     * Filter which DataConnection to delete.
     */
    where: DataConnectionWhereUniqueInput
  }

  /**
   * DataConnection deleteMany
   */
  export type DataConnectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DataConnections to delete
     */
    where?: DataConnectionWhereInput
    /**
     * Limit how many DataConnections to delete.
     */
    limit?: number
  }

  /**
   * DataConnection.chart_data_sources
   */
  export type DataConnection$chart_data_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    where?: ChartDataSourceWhereInput
    orderBy?: ChartDataSourceOrderByWithRelationInput | ChartDataSourceOrderByWithRelationInput[]
    cursor?: ChartDataSourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChartDataSourceScalarFieldEnum | ChartDataSourceScalarFieldEnum[]
  }

  /**
   * DataConnection without action
   */
  export type DataConnectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
  }


  /**
   * Model Dashboard
   */

  export type AggregateDashboard = {
    _count: DashboardCountAggregateOutputType | null
    _avg: DashboardAvgAggregateOutputType | null
    _sum: DashboardSumAggregateOutputType | null
    _min: DashboardMinAggregateOutputType | null
    _max: DashboardMaxAggregateOutputType | null
  }

  export type DashboardAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DashboardSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type DashboardMinAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DashboardMaxAggregateOutputType = {
    id: number | null
    name: string | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DashboardCountAggregateOutputType = {
    id: number
    name: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DashboardAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DashboardSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type DashboardMinAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DashboardMaxAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DashboardCountAggregateInputType = {
    id?: true
    name?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DashboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dashboard to aggregate.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dashboards
    **/
    _count?: true | DashboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DashboardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DashboardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardMaxAggregateInputType
  }

  export type GetDashboardAggregateType<T extends DashboardAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboard[P]>
      : GetScalarType<T[P], AggregateDashboard[P]>
  }




  export type DashboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardWhereInput
    orderBy?: DashboardOrderByWithAggregationInput | DashboardOrderByWithAggregationInput[]
    by: DashboardScalarFieldEnum[] | DashboardScalarFieldEnum
    having?: DashboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardCountAggregateInputType | true
    _avg?: DashboardAvgAggregateInputType
    _sum?: DashboardSumAggregateInputType
    _min?: DashboardMinAggregateInputType
    _max?: DashboardMaxAggregateInputType
  }

  export type DashboardGroupByOutputType = {
    id: number
    name: string
    user_id: number
    created_at: Date
    updated_at: Date
    _count: DashboardCountAggregateOutputType | null
    _avg: DashboardAvgAggregateOutputType | null
    _sum: DashboardSumAggregateOutputType | null
    _min: DashboardMinAggregateOutputType | null
    _max: DashboardMaxAggregateOutputType | null
  }

  type GetDashboardGroupByPayload<T extends DashboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardGroupByOutputType[P]>
        }
      >
    >


  export type DashboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tabs?: boolean | Dashboard$tabsArgs<ExtArgs>
    dashboard_access?: boolean | Dashboard$dashboard_accessArgs<ExtArgs>
    _count?: boolean | DashboardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboard"]>

  export type DashboardSelectScalar = {
    id?: boolean
    name?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DashboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["dashboard"]>
  export type DashboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tabs?: boolean | Dashboard$tabsArgs<ExtArgs>
    dashboard_access?: boolean | Dashboard$dashboard_accessArgs<ExtArgs>
    _count?: boolean | DashboardCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DashboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DashboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dashboard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tabs: Prisma.$TabPayload<ExtArgs>[]
      dashboard_access: Prisma.$DashboardAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      user_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["dashboard"]>
    composites: {}
  }

  type DashboardGetPayload<S extends boolean | null | undefined | DashboardDefaultArgs> = $Result.GetResult<Prisma.$DashboardPayload, S>

  type DashboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardCountAggregateInputType | true
    }

  export interface DashboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dashboard'], meta: { name: 'Dashboard' } }
    /**
     * Find zero or one Dashboard that matches the filter.
     * @param {DashboardFindUniqueArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardFindUniqueArgs>(args: SelectSubset<T, DashboardFindUniqueArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dashboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardFindUniqueOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dashboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindFirstArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardFindFirstArgs>(args?: SelectSubset<T, DashboardFindFirstArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dashboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindFirstOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dashboards
     * const dashboards = await prisma.dashboard.findMany()
     * 
     * // Get first 10 Dashboards
     * const dashboards = await prisma.dashboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardFindManyArgs>(args?: SelectSubset<T, DashboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dashboard.
     * @param {DashboardCreateArgs} args - Arguments to create a Dashboard.
     * @example
     * // Create one Dashboard
     * const Dashboard = await prisma.dashboard.create({
     *   data: {
     *     // ... data to create a Dashboard
     *   }
     * })
     * 
     */
    create<T extends DashboardCreateArgs>(args: SelectSubset<T, DashboardCreateArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dashboards.
     * @param {DashboardCreateManyArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardCreateManyArgs>(args?: SelectSubset<T, DashboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dashboards and returns the data saved in the database.
     * @param {DashboardCreateManyAndReturnArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dashboards and only return the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dashboard.
     * @param {DashboardDeleteArgs} args - Arguments to delete one Dashboard.
     * @example
     * // Delete one Dashboard
     * const Dashboard = await prisma.dashboard.delete({
     *   where: {
     *     // ... filter to delete one Dashboard
     *   }
     * })
     * 
     */
    delete<T extends DashboardDeleteArgs>(args: SelectSubset<T, DashboardDeleteArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dashboard.
     * @param {DashboardUpdateArgs} args - Arguments to update one Dashboard.
     * @example
     * // Update one Dashboard
     * const dashboard = await prisma.dashboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardUpdateArgs>(args: SelectSubset<T, DashboardUpdateArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dashboards.
     * @param {DashboardDeleteManyArgs} args - Arguments to filter Dashboards to delete.
     * @example
     * // Delete a few Dashboards
     * const { count } = await prisma.dashboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardDeleteManyArgs>(args?: SelectSubset<T, DashboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardUpdateManyArgs>(args: SelectSubset<T, DashboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dashboards and returns the data updated in the database.
     * @param {DashboardUpdateManyAndReturnArgs} args - Arguments to update many Dashboards.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dashboards and only return the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends DashboardUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dashboard.
     * @param {DashboardUpsertArgs} args - Arguments to update or create a Dashboard.
     * @example
     * // Update or create a Dashboard
     * const dashboard = await prisma.dashboard.upsert({
     *   create: {
     *     // ... data to create a Dashboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dashboard we want to update
     *   }
     * })
     */
    upsert<T extends DashboardUpsertArgs>(args: SelectSubset<T, DashboardUpsertArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardCountArgs} args - Arguments to filter Dashboards to count.
     * @example
     * // Count the number of Dashboards
     * const count = await prisma.dashboard.count({
     *   where: {
     *     // ... the filter for the Dashboards we want to count
     *   }
     * })
    **/
    count<T extends DashboardCountArgs>(
      args?: Subset<T, DashboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DashboardAggregateArgs>(args: Subset<T, DashboardAggregateArgs>): Prisma.PrismaPromise<GetDashboardAggregateType<T>>

    /**
     * Group by Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardGroupByArgs} args - Group by arguments.
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
      T extends DashboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardGroupByArgs['orderBy'] }
        : { orderBy?: DashboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DashboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dashboard model
   */
  readonly fields: DashboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dashboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tabs<T extends Dashboard$tabsArgs<ExtArgs> = {}>(args?: Subset<T, Dashboard$tabsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dashboard_access<T extends Dashboard$dashboard_accessArgs<ExtArgs> = {}>(args?: Subset<T, Dashboard$dashboard_accessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dashboard model
   */
  interface DashboardFieldRefs {
    readonly id: FieldRef<"Dashboard", 'Int'>
    readonly name: FieldRef<"Dashboard", 'String'>
    readonly user_id: FieldRef<"Dashboard", 'Int'>
    readonly created_at: FieldRef<"Dashboard", 'DateTime'>
    readonly updated_at: FieldRef<"Dashboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dashboard findUnique
   */
  export type DashboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard findUniqueOrThrow
   */
  export type DashboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard findFirst
   */
  export type DashboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard findFirstOrThrow
   */
  export type DashboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboard to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard findMany
   */
  export type DashboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter, which Dashboards to fetch.
     */
    where?: DashboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dashboards to fetch.
     */
    orderBy?: DashboardOrderByWithRelationInput | DashboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dashboards.
     */
    cursor?: DashboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dashboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dashboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dashboards.
     */
    distinct?: DashboardScalarFieldEnum | DashboardScalarFieldEnum[]
  }

  /**
   * Dashboard create
   */
  export type DashboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Dashboard.
     */
    data: XOR<DashboardCreateInput, DashboardUncheckedCreateInput>
  }

  /**
   * Dashboard createMany
   */
  export type DashboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dashboards.
     */
    data: DashboardCreateManyInput | DashboardCreateManyInput[]
  }

  /**
   * Dashboard createManyAndReturn
   */
  export type DashboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * The data used to create many Dashboards.
     */
    data: DashboardCreateManyInput | DashboardCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dashboard update
   */
  export type DashboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Dashboard.
     */
    data: XOR<DashboardUpdateInput, DashboardUncheckedUpdateInput>
    /**
     * Choose, which Dashboard to update.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard updateMany
   */
  export type DashboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dashboards.
     */
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyInput>
    /**
     * Filter which Dashboards to update
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to update.
     */
    limit?: number
  }

  /**
   * Dashboard updateManyAndReturn
   */
  export type DashboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * The data used to update Dashboards.
     */
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyInput>
    /**
     * Filter which Dashboards to update
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dashboard upsert
   */
  export type DashboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Dashboard to update in case it exists.
     */
    where: DashboardWhereUniqueInput
    /**
     * In case the Dashboard found by the `where` argument doesn't exist, create a new Dashboard with this data.
     */
    create: XOR<DashboardCreateInput, DashboardUncheckedCreateInput>
    /**
     * In case the Dashboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardUpdateInput, DashboardUncheckedUpdateInput>
  }

  /**
   * Dashboard delete
   */
  export type DashboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
    /**
     * Filter which Dashboard to delete.
     */
    where: DashboardWhereUniqueInput
  }

  /**
   * Dashboard deleteMany
   */
  export type DashboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dashboards to delete
     */
    where?: DashboardWhereInput
    /**
     * Limit how many Dashboards to delete.
     */
    limit?: number
  }

  /**
   * Dashboard.tabs
   */
  export type Dashboard$tabsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    where?: TabWhereInput
    orderBy?: TabOrderByWithRelationInput | TabOrderByWithRelationInput[]
    cursor?: TabWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TabScalarFieldEnum | TabScalarFieldEnum[]
  }

  /**
   * Dashboard.dashboard_access
   */
  export type Dashboard$dashboard_accessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    where?: DashboardAccessWhereInput
    orderBy?: DashboardAccessOrderByWithRelationInput | DashboardAccessOrderByWithRelationInput[]
    cursor?: DashboardAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DashboardAccessScalarFieldEnum | DashboardAccessScalarFieldEnum[]
  }

  /**
   * Dashboard without action
   */
  export type DashboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dashboard
     */
    select?: DashboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dashboard
     */
    omit?: DashboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardInclude<ExtArgs> | null
  }


  /**
   * Model DashboardAccess
   */

  export type AggregateDashboardAccess = {
    _count: DashboardAccessCountAggregateOutputType | null
    _avg: DashboardAccessAvgAggregateOutputType | null
    _sum: DashboardAccessSumAggregateOutputType | null
    _min: DashboardAccessMinAggregateOutputType | null
    _max: DashboardAccessMaxAggregateOutputType | null
  }

  export type DashboardAccessAvgAggregateOutputType = {
    id: number | null
    dashboard_id: number | null
    user_id: number | null
  }

  export type DashboardAccessSumAggregateOutputType = {
    id: number | null
    dashboard_id: number | null
    user_id: number | null
  }

  export type DashboardAccessMinAggregateOutputType = {
    id: number | null
    dashboard_id: number | null
    user_id: number | null
  }

  export type DashboardAccessMaxAggregateOutputType = {
    id: number | null
    dashboard_id: number | null
    user_id: number | null
  }

  export type DashboardAccessCountAggregateOutputType = {
    id: number
    dashboard_id: number
    user_id: number
    _all: number
  }


  export type DashboardAccessAvgAggregateInputType = {
    id?: true
    dashboard_id?: true
    user_id?: true
  }

  export type DashboardAccessSumAggregateInputType = {
    id?: true
    dashboard_id?: true
    user_id?: true
  }

  export type DashboardAccessMinAggregateInputType = {
    id?: true
    dashboard_id?: true
    user_id?: true
  }

  export type DashboardAccessMaxAggregateInputType = {
    id?: true
    dashboard_id?: true
    user_id?: true
  }

  export type DashboardAccessCountAggregateInputType = {
    id?: true
    dashboard_id?: true
    user_id?: true
    _all?: true
  }

  export type DashboardAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardAccess to aggregate.
     */
    where?: DashboardAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardAccesses to fetch.
     */
    orderBy?: DashboardAccessOrderByWithRelationInput | DashboardAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DashboardAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DashboardAccesses
    **/
    _count?: true | DashboardAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DashboardAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DashboardAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DashboardAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DashboardAccessMaxAggregateInputType
  }

  export type GetDashboardAccessAggregateType<T extends DashboardAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateDashboardAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDashboardAccess[P]>
      : GetScalarType<T[P], AggregateDashboardAccess[P]>
  }




  export type DashboardAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DashboardAccessWhereInput
    orderBy?: DashboardAccessOrderByWithAggregationInput | DashboardAccessOrderByWithAggregationInput[]
    by: DashboardAccessScalarFieldEnum[] | DashboardAccessScalarFieldEnum
    having?: DashboardAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DashboardAccessCountAggregateInputType | true
    _avg?: DashboardAccessAvgAggregateInputType
    _sum?: DashboardAccessSumAggregateInputType
    _min?: DashboardAccessMinAggregateInputType
    _max?: DashboardAccessMaxAggregateInputType
  }

  export type DashboardAccessGroupByOutputType = {
    id: number
    dashboard_id: number
    user_id: number
    _count: DashboardAccessCountAggregateOutputType | null
    _avg: DashboardAccessAvgAggregateOutputType | null
    _sum: DashboardAccessSumAggregateOutputType | null
    _min: DashboardAccessMinAggregateOutputType | null
    _max: DashboardAccessMaxAggregateOutputType | null
  }

  type GetDashboardAccessGroupByPayload<T extends DashboardAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DashboardAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DashboardAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DashboardAccessGroupByOutputType[P]>
            : GetScalarType<T[P], DashboardAccessGroupByOutputType[P]>
        }
      >
    >


  export type DashboardAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboard_id?: boolean
    user_id?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardAccess"]>

  export type DashboardAccessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboard_id?: boolean
    user_id?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardAccess"]>

  export type DashboardAccessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboard_id?: boolean
    user_id?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dashboardAccess"]>

  export type DashboardAccessSelectScalar = {
    id?: boolean
    dashboard_id?: boolean
    user_id?: boolean
  }

  export type DashboardAccessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dashboard_id" | "user_id", ExtArgs["result"]["dashboardAccess"]>
  export type DashboardAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardAccessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DashboardAccessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DashboardAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DashboardAccess"
    objects: {
      dashboard: Prisma.$DashboardPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dashboard_id: number
      user_id: number
    }, ExtArgs["result"]["dashboardAccess"]>
    composites: {}
  }

  type DashboardAccessGetPayload<S extends boolean | null | undefined | DashboardAccessDefaultArgs> = $Result.GetResult<Prisma.$DashboardAccessPayload, S>

  type DashboardAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DashboardAccessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DashboardAccessCountAggregateInputType | true
    }

  export interface DashboardAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DashboardAccess'], meta: { name: 'DashboardAccess' } }
    /**
     * Find zero or one DashboardAccess that matches the filter.
     * @param {DashboardAccessFindUniqueArgs} args - Arguments to find a DashboardAccess
     * @example
     * // Get one DashboardAccess
     * const dashboardAccess = await prisma.dashboardAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DashboardAccessFindUniqueArgs>(args: SelectSubset<T, DashboardAccessFindUniqueArgs<ExtArgs>>): Prisma__DashboardAccessClient<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DashboardAccess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DashboardAccessFindUniqueOrThrowArgs} args - Arguments to find a DashboardAccess
     * @example
     * // Get one DashboardAccess
     * const dashboardAccess = await prisma.dashboardAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DashboardAccessFindUniqueOrThrowArgs>(args: SelectSubset<T, DashboardAccessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DashboardAccessClient<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAccessFindFirstArgs} args - Arguments to find a DashboardAccess
     * @example
     * // Get one DashboardAccess
     * const dashboardAccess = await prisma.dashboardAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DashboardAccessFindFirstArgs>(args?: SelectSubset<T, DashboardAccessFindFirstArgs<ExtArgs>>): Prisma__DashboardAccessClient<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DashboardAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAccessFindFirstOrThrowArgs} args - Arguments to find a DashboardAccess
     * @example
     * // Get one DashboardAccess
     * const dashboardAccess = await prisma.dashboardAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DashboardAccessFindFirstOrThrowArgs>(args?: SelectSubset<T, DashboardAccessFindFirstOrThrowArgs<ExtArgs>>): Prisma__DashboardAccessClient<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DashboardAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DashboardAccesses
     * const dashboardAccesses = await prisma.dashboardAccess.findMany()
     * 
     * // Get first 10 DashboardAccesses
     * const dashboardAccesses = await prisma.dashboardAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dashboardAccessWithIdOnly = await prisma.dashboardAccess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DashboardAccessFindManyArgs>(args?: SelectSubset<T, DashboardAccessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DashboardAccess.
     * @param {DashboardAccessCreateArgs} args - Arguments to create a DashboardAccess.
     * @example
     * // Create one DashboardAccess
     * const DashboardAccess = await prisma.dashboardAccess.create({
     *   data: {
     *     // ... data to create a DashboardAccess
     *   }
     * })
     * 
     */
    create<T extends DashboardAccessCreateArgs>(args: SelectSubset<T, DashboardAccessCreateArgs<ExtArgs>>): Prisma__DashboardAccessClient<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DashboardAccesses.
     * @param {DashboardAccessCreateManyArgs} args - Arguments to create many DashboardAccesses.
     * @example
     * // Create many DashboardAccesses
     * const dashboardAccess = await prisma.dashboardAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DashboardAccessCreateManyArgs>(args?: SelectSubset<T, DashboardAccessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DashboardAccesses and returns the data saved in the database.
     * @param {DashboardAccessCreateManyAndReturnArgs} args - Arguments to create many DashboardAccesses.
     * @example
     * // Create many DashboardAccesses
     * const dashboardAccess = await prisma.dashboardAccess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DashboardAccesses and only return the `id`
     * const dashboardAccessWithIdOnly = await prisma.dashboardAccess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DashboardAccessCreateManyAndReturnArgs>(args?: SelectSubset<T, DashboardAccessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DashboardAccess.
     * @param {DashboardAccessDeleteArgs} args - Arguments to delete one DashboardAccess.
     * @example
     * // Delete one DashboardAccess
     * const DashboardAccess = await prisma.dashboardAccess.delete({
     *   where: {
     *     // ... filter to delete one DashboardAccess
     *   }
     * })
     * 
     */
    delete<T extends DashboardAccessDeleteArgs>(args: SelectSubset<T, DashboardAccessDeleteArgs<ExtArgs>>): Prisma__DashboardAccessClient<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DashboardAccess.
     * @param {DashboardAccessUpdateArgs} args - Arguments to update one DashboardAccess.
     * @example
     * // Update one DashboardAccess
     * const dashboardAccess = await prisma.dashboardAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DashboardAccessUpdateArgs>(args: SelectSubset<T, DashboardAccessUpdateArgs<ExtArgs>>): Prisma__DashboardAccessClient<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DashboardAccesses.
     * @param {DashboardAccessDeleteManyArgs} args - Arguments to filter DashboardAccesses to delete.
     * @example
     * // Delete a few DashboardAccesses
     * const { count } = await prisma.dashboardAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DashboardAccessDeleteManyArgs>(args?: SelectSubset<T, DashboardAccessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DashboardAccesses
     * const dashboardAccess = await prisma.dashboardAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DashboardAccessUpdateManyArgs>(args: SelectSubset<T, DashboardAccessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DashboardAccesses and returns the data updated in the database.
     * @param {DashboardAccessUpdateManyAndReturnArgs} args - Arguments to update many DashboardAccesses.
     * @example
     * // Update many DashboardAccesses
     * const dashboardAccess = await prisma.dashboardAccess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DashboardAccesses and only return the `id`
     * const dashboardAccessWithIdOnly = await prisma.dashboardAccess.updateManyAndReturn({
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
    updateManyAndReturn<T extends DashboardAccessUpdateManyAndReturnArgs>(args: SelectSubset<T, DashboardAccessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DashboardAccess.
     * @param {DashboardAccessUpsertArgs} args - Arguments to update or create a DashboardAccess.
     * @example
     * // Update or create a DashboardAccess
     * const dashboardAccess = await prisma.dashboardAccess.upsert({
     *   create: {
     *     // ... data to create a DashboardAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DashboardAccess we want to update
     *   }
     * })
     */
    upsert<T extends DashboardAccessUpsertArgs>(args: SelectSubset<T, DashboardAccessUpsertArgs<ExtArgs>>): Prisma__DashboardAccessClient<$Result.GetResult<Prisma.$DashboardAccessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DashboardAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAccessCountArgs} args - Arguments to filter DashboardAccesses to count.
     * @example
     * // Count the number of DashboardAccesses
     * const count = await prisma.dashboardAccess.count({
     *   where: {
     *     // ... the filter for the DashboardAccesses we want to count
     *   }
     * })
    **/
    count<T extends DashboardAccessCountArgs>(
      args?: Subset<T, DashboardAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DashboardAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DashboardAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DashboardAccessAggregateArgs>(args: Subset<T, DashboardAccessAggregateArgs>): Prisma.PrismaPromise<GetDashboardAccessAggregateType<T>>

    /**
     * Group by DashboardAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAccessGroupByArgs} args - Group by arguments.
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
      T extends DashboardAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DashboardAccessGroupByArgs['orderBy'] }
        : { orderBy?: DashboardAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DashboardAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DashboardAccess model
   */
  readonly fields: DashboardAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DashboardAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DashboardAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dashboard<T extends DashboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DashboardDefaultArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DashboardAccess model
   */
  interface DashboardAccessFieldRefs {
    readonly id: FieldRef<"DashboardAccess", 'Int'>
    readonly dashboard_id: FieldRef<"DashboardAccess", 'Int'>
    readonly user_id: FieldRef<"DashboardAccess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DashboardAccess findUnique
   */
  export type DashboardAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * Filter, which DashboardAccess to fetch.
     */
    where: DashboardAccessWhereUniqueInput
  }

  /**
   * DashboardAccess findUniqueOrThrow
   */
  export type DashboardAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * Filter, which DashboardAccess to fetch.
     */
    where: DashboardAccessWhereUniqueInput
  }

  /**
   * DashboardAccess findFirst
   */
  export type DashboardAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * Filter, which DashboardAccess to fetch.
     */
    where?: DashboardAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardAccesses to fetch.
     */
    orderBy?: DashboardAccessOrderByWithRelationInput | DashboardAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardAccesses.
     */
    cursor?: DashboardAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardAccesses.
     */
    distinct?: DashboardAccessScalarFieldEnum | DashboardAccessScalarFieldEnum[]
  }

  /**
   * DashboardAccess findFirstOrThrow
   */
  export type DashboardAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * Filter, which DashboardAccess to fetch.
     */
    where?: DashboardAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardAccesses to fetch.
     */
    orderBy?: DashboardAccessOrderByWithRelationInput | DashboardAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DashboardAccesses.
     */
    cursor?: DashboardAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardAccesses.
     */
    distinct?: DashboardAccessScalarFieldEnum | DashboardAccessScalarFieldEnum[]
  }

  /**
   * DashboardAccess findMany
   */
  export type DashboardAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * Filter, which DashboardAccesses to fetch.
     */
    where?: DashboardAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DashboardAccesses to fetch.
     */
    orderBy?: DashboardAccessOrderByWithRelationInput | DashboardAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DashboardAccesses.
     */
    cursor?: DashboardAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DashboardAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DashboardAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DashboardAccesses.
     */
    distinct?: DashboardAccessScalarFieldEnum | DashboardAccessScalarFieldEnum[]
  }

  /**
   * DashboardAccess create
   */
  export type DashboardAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a DashboardAccess.
     */
    data: XOR<DashboardAccessCreateInput, DashboardAccessUncheckedCreateInput>
  }

  /**
   * DashboardAccess createMany
   */
  export type DashboardAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DashboardAccesses.
     */
    data: DashboardAccessCreateManyInput | DashboardAccessCreateManyInput[]
  }

  /**
   * DashboardAccess createManyAndReturn
   */
  export type DashboardAccessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * The data used to create many DashboardAccesses.
     */
    data: DashboardAccessCreateManyInput | DashboardAccessCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardAccess update
   */
  export type DashboardAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a DashboardAccess.
     */
    data: XOR<DashboardAccessUpdateInput, DashboardAccessUncheckedUpdateInput>
    /**
     * Choose, which DashboardAccess to update.
     */
    where: DashboardAccessWhereUniqueInput
  }

  /**
   * DashboardAccess updateMany
   */
  export type DashboardAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DashboardAccesses.
     */
    data: XOR<DashboardAccessUpdateManyMutationInput, DashboardAccessUncheckedUpdateManyInput>
    /**
     * Filter which DashboardAccesses to update
     */
    where?: DashboardAccessWhereInput
    /**
     * Limit how many DashboardAccesses to update.
     */
    limit?: number
  }

  /**
   * DashboardAccess updateManyAndReturn
   */
  export type DashboardAccessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * The data used to update DashboardAccesses.
     */
    data: XOR<DashboardAccessUpdateManyMutationInput, DashboardAccessUncheckedUpdateManyInput>
    /**
     * Filter which DashboardAccesses to update
     */
    where?: DashboardAccessWhereInput
    /**
     * Limit how many DashboardAccesses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DashboardAccess upsert
   */
  export type DashboardAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the DashboardAccess to update in case it exists.
     */
    where: DashboardAccessWhereUniqueInput
    /**
     * In case the DashboardAccess found by the `where` argument doesn't exist, create a new DashboardAccess with this data.
     */
    create: XOR<DashboardAccessCreateInput, DashboardAccessUncheckedCreateInput>
    /**
     * In case the DashboardAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DashboardAccessUpdateInput, DashboardAccessUncheckedUpdateInput>
  }

  /**
   * DashboardAccess delete
   */
  export type DashboardAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
    /**
     * Filter which DashboardAccess to delete.
     */
    where: DashboardAccessWhereUniqueInput
  }

  /**
   * DashboardAccess deleteMany
   */
  export type DashboardAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DashboardAccesses to delete
     */
    where?: DashboardAccessWhereInput
    /**
     * Limit how many DashboardAccesses to delete.
     */
    limit?: number
  }

  /**
   * DashboardAccess without action
   */
  export type DashboardAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DashboardAccess
     */
    select?: DashboardAccessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DashboardAccess
     */
    omit?: DashboardAccessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DashboardAccessInclude<ExtArgs> | null
  }


  /**
   * Model Tab
   */

  export type AggregateTab = {
    _count: TabCountAggregateOutputType | null
    _avg: TabAvgAggregateOutputType | null
    _sum: TabSumAggregateOutputType | null
    _min: TabMinAggregateOutputType | null
    _max: TabMaxAggregateOutputType | null
  }

  export type TabAvgAggregateOutputType = {
    id: number | null
    dashboard_id: number | null
    order_index: number | null
  }

  export type TabSumAggregateOutputType = {
    id: number | null
    dashboard_id: number | null
    order_index: number | null
  }

  export type TabMinAggregateOutputType = {
    id: number | null
    dashboard_id: number | null
    name: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TabMaxAggregateOutputType = {
    id: number | null
    dashboard_id: number | null
    name: string | null
    order_index: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TabCountAggregateOutputType = {
    id: number
    dashboard_id: number
    name: number
    order_index: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TabAvgAggregateInputType = {
    id?: true
    dashboard_id?: true
    order_index?: true
  }

  export type TabSumAggregateInputType = {
    id?: true
    dashboard_id?: true
    order_index?: true
  }

  export type TabMinAggregateInputType = {
    id?: true
    dashboard_id?: true
    name?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type TabMaxAggregateInputType = {
    id?: true
    dashboard_id?: true
    name?: true
    order_index?: true
    created_at?: true
    updated_at?: true
  }

  export type TabCountAggregateInputType = {
    id?: true
    dashboard_id?: true
    name?: true
    order_index?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TabAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tab to aggregate.
     */
    where?: TabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tabs to fetch.
     */
    orderBy?: TabOrderByWithRelationInput | TabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tabs
    **/
    _count?: true | TabCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TabAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TabSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TabMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TabMaxAggregateInputType
  }

  export type GetTabAggregateType<T extends TabAggregateArgs> = {
        [P in keyof T & keyof AggregateTab]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTab[P]>
      : GetScalarType<T[P], AggregateTab[P]>
  }




  export type TabGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TabWhereInput
    orderBy?: TabOrderByWithAggregationInput | TabOrderByWithAggregationInput[]
    by: TabScalarFieldEnum[] | TabScalarFieldEnum
    having?: TabScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TabCountAggregateInputType | true
    _avg?: TabAvgAggregateInputType
    _sum?: TabSumAggregateInputType
    _min?: TabMinAggregateInputType
    _max?: TabMaxAggregateInputType
  }

  export type TabGroupByOutputType = {
    id: number
    dashboard_id: number
    name: string
    order_index: number
    created_at: Date
    updated_at: Date
    _count: TabCountAggregateOutputType | null
    _avg: TabAvgAggregateOutputType | null
    _sum: TabSumAggregateOutputType | null
    _min: TabMinAggregateOutputType | null
    _max: TabMaxAggregateOutputType | null
  }

  type GetTabGroupByPayload<T extends TabGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TabGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TabGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TabGroupByOutputType[P]>
            : GetScalarType<T[P], TabGroupByOutputType[P]>
        }
      >
    >


  export type TabSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboard_id?: boolean
    name?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    charts?: boolean | Tab$chartsArgs<ExtArgs>
    _count?: boolean | TabCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tab"]>

  export type TabSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboard_id?: boolean
    name?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tab"]>

  export type TabSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dashboard_id?: boolean
    name?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tab"]>

  export type TabSelectScalar = {
    id?: boolean
    dashboard_id?: boolean
    name?: boolean
    order_index?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TabOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dashboard_id" | "name" | "order_index" | "created_at" | "updated_at", ExtArgs["result"]["tab"]>
  export type TabInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
    charts?: boolean | Tab$chartsArgs<ExtArgs>
    _count?: boolean | TabCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TabIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }
  export type TabIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dashboard?: boolean | DashboardDefaultArgs<ExtArgs>
  }

  export type $TabPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tab"
    objects: {
      dashboard: Prisma.$DashboardPayload<ExtArgs>
      charts: Prisma.$ChartPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dashboard_id: number
      name: string
      order_index: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["tab"]>
    composites: {}
  }

  type TabGetPayload<S extends boolean | null | undefined | TabDefaultArgs> = $Result.GetResult<Prisma.$TabPayload, S>

  type TabCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TabFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TabCountAggregateInputType | true
    }

  export interface TabDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tab'], meta: { name: 'Tab' } }
    /**
     * Find zero or one Tab that matches the filter.
     * @param {TabFindUniqueArgs} args - Arguments to find a Tab
     * @example
     * // Get one Tab
     * const tab = await prisma.tab.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TabFindUniqueArgs>(args: SelectSubset<T, TabFindUniqueArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tab that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TabFindUniqueOrThrowArgs} args - Arguments to find a Tab
     * @example
     * // Get one Tab
     * const tab = await prisma.tab.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TabFindUniqueOrThrowArgs>(args: SelectSubset<T, TabFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabFindFirstArgs} args - Arguments to find a Tab
     * @example
     * // Get one Tab
     * const tab = await prisma.tab.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TabFindFirstArgs>(args?: SelectSubset<T, TabFindFirstArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tab that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabFindFirstOrThrowArgs} args - Arguments to find a Tab
     * @example
     * // Get one Tab
     * const tab = await prisma.tab.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TabFindFirstOrThrowArgs>(args?: SelectSubset<T, TabFindFirstOrThrowArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tabs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tabs
     * const tabs = await prisma.tab.findMany()
     * 
     * // Get first 10 Tabs
     * const tabs = await prisma.tab.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tabWithIdOnly = await prisma.tab.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TabFindManyArgs>(args?: SelectSubset<T, TabFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tab.
     * @param {TabCreateArgs} args - Arguments to create a Tab.
     * @example
     * // Create one Tab
     * const Tab = await prisma.tab.create({
     *   data: {
     *     // ... data to create a Tab
     *   }
     * })
     * 
     */
    create<T extends TabCreateArgs>(args: SelectSubset<T, TabCreateArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tabs.
     * @param {TabCreateManyArgs} args - Arguments to create many Tabs.
     * @example
     * // Create many Tabs
     * const tab = await prisma.tab.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TabCreateManyArgs>(args?: SelectSubset<T, TabCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tabs and returns the data saved in the database.
     * @param {TabCreateManyAndReturnArgs} args - Arguments to create many Tabs.
     * @example
     * // Create many Tabs
     * const tab = await prisma.tab.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tabs and only return the `id`
     * const tabWithIdOnly = await prisma.tab.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TabCreateManyAndReturnArgs>(args?: SelectSubset<T, TabCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tab.
     * @param {TabDeleteArgs} args - Arguments to delete one Tab.
     * @example
     * // Delete one Tab
     * const Tab = await prisma.tab.delete({
     *   where: {
     *     // ... filter to delete one Tab
     *   }
     * })
     * 
     */
    delete<T extends TabDeleteArgs>(args: SelectSubset<T, TabDeleteArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tab.
     * @param {TabUpdateArgs} args - Arguments to update one Tab.
     * @example
     * // Update one Tab
     * const tab = await prisma.tab.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TabUpdateArgs>(args: SelectSubset<T, TabUpdateArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tabs.
     * @param {TabDeleteManyArgs} args - Arguments to filter Tabs to delete.
     * @example
     * // Delete a few Tabs
     * const { count } = await prisma.tab.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TabDeleteManyArgs>(args?: SelectSubset<T, TabDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tabs
     * const tab = await prisma.tab.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TabUpdateManyArgs>(args: SelectSubset<T, TabUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tabs and returns the data updated in the database.
     * @param {TabUpdateManyAndReturnArgs} args - Arguments to update many Tabs.
     * @example
     * // Update many Tabs
     * const tab = await prisma.tab.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tabs and only return the `id`
     * const tabWithIdOnly = await prisma.tab.updateManyAndReturn({
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
    updateManyAndReturn<T extends TabUpdateManyAndReturnArgs>(args: SelectSubset<T, TabUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tab.
     * @param {TabUpsertArgs} args - Arguments to update or create a Tab.
     * @example
     * // Update or create a Tab
     * const tab = await prisma.tab.upsert({
     *   create: {
     *     // ... data to create a Tab
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tab we want to update
     *   }
     * })
     */
    upsert<T extends TabUpsertArgs>(args: SelectSubset<T, TabUpsertArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tabs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabCountArgs} args - Arguments to filter Tabs to count.
     * @example
     * // Count the number of Tabs
     * const count = await prisma.tab.count({
     *   where: {
     *     // ... the filter for the Tabs we want to count
     *   }
     * })
    **/
    count<T extends TabCountArgs>(
      args?: Subset<T, TabCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TabCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TabAggregateArgs>(args: Subset<T, TabAggregateArgs>): Prisma.PrismaPromise<GetTabAggregateType<T>>

    /**
     * Group by Tab.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TabGroupByArgs} args - Group by arguments.
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
      T extends TabGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TabGroupByArgs['orderBy'] }
        : { orderBy?: TabGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TabGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTabGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tab model
   */
  readonly fields: TabFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tab.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TabClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dashboard<T extends DashboardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DashboardDefaultArgs<ExtArgs>>): Prisma__DashboardClient<$Result.GetResult<Prisma.$DashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    charts<T extends Tab$chartsArgs<ExtArgs> = {}>(args?: Subset<T, Tab$chartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Tab model
   */
  interface TabFieldRefs {
    readonly id: FieldRef<"Tab", 'Int'>
    readonly dashboard_id: FieldRef<"Tab", 'Int'>
    readonly name: FieldRef<"Tab", 'String'>
    readonly order_index: FieldRef<"Tab", 'Int'>
    readonly created_at: FieldRef<"Tab", 'DateTime'>
    readonly updated_at: FieldRef<"Tab", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tab findUnique
   */
  export type TabFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * Filter, which Tab to fetch.
     */
    where: TabWhereUniqueInput
  }

  /**
   * Tab findUniqueOrThrow
   */
  export type TabFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * Filter, which Tab to fetch.
     */
    where: TabWhereUniqueInput
  }

  /**
   * Tab findFirst
   */
  export type TabFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * Filter, which Tab to fetch.
     */
    where?: TabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tabs to fetch.
     */
    orderBy?: TabOrderByWithRelationInput | TabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tabs.
     */
    cursor?: TabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tabs.
     */
    distinct?: TabScalarFieldEnum | TabScalarFieldEnum[]
  }

  /**
   * Tab findFirstOrThrow
   */
  export type TabFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * Filter, which Tab to fetch.
     */
    where?: TabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tabs to fetch.
     */
    orderBy?: TabOrderByWithRelationInput | TabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tabs.
     */
    cursor?: TabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tabs.
     */
    distinct?: TabScalarFieldEnum | TabScalarFieldEnum[]
  }

  /**
   * Tab findMany
   */
  export type TabFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * Filter, which Tabs to fetch.
     */
    where?: TabWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tabs to fetch.
     */
    orderBy?: TabOrderByWithRelationInput | TabOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tabs.
     */
    cursor?: TabWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tabs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tabs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tabs.
     */
    distinct?: TabScalarFieldEnum | TabScalarFieldEnum[]
  }

  /**
   * Tab create
   */
  export type TabCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * The data needed to create a Tab.
     */
    data: XOR<TabCreateInput, TabUncheckedCreateInput>
  }

  /**
   * Tab createMany
   */
  export type TabCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tabs.
     */
    data: TabCreateManyInput | TabCreateManyInput[]
  }

  /**
   * Tab createManyAndReturn
   */
  export type TabCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * The data used to create many Tabs.
     */
    data: TabCreateManyInput | TabCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tab update
   */
  export type TabUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * The data needed to update a Tab.
     */
    data: XOR<TabUpdateInput, TabUncheckedUpdateInput>
    /**
     * Choose, which Tab to update.
     */
    where: TabWhereUniqueInput
  }

  /**
   * Tab updateMany
   */
  export type TabUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tabs.
     */
    data: XOR<TabUpdateManyMutationInput, TabUncheckedUpdateManyInput>
    /**
     * Filter which Tabs to update
     */
    where?: TabWhereInput
    /**
     * Limit how many Tabs to update.
     */
    limit?: number
  }

  /**
   * Tab updateManyAndReturn
   */
  export type TabUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * The data used to update Tabs.
     */
    data: XOR<TabUpdateManyMutationInput, TabUncheckedUpdateManyInput>
    /**
     * Filter which Tabs to update
     */
    where?: TabWhereInput
    /**
     * Limit how many Tabs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tab upsert
   */
  export type TabUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * The filter to search for the Tab to update in case it exists.
     */
    where: TabWhereUniqueInput
    /**
     * In case the Tab found by the `where` argument doesn't exist, create a new Tab with this data.
     */
    create: XOR<TabCreateInput, TabUncheckedCreateInput>
    /**
     * In case the Tab was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TabUpdateInput, TabUncheckedUpdateInput>
  }

  /**
   * Tab delete
   */
  export type TabDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
    /**
     * Filter which Tab to delete.
     */
    where: TabWhereUniqueInput
  }

  /**
   * Tab deleteMany
   */
  export type TabDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tabs to delete
     */
    where?: TabWhereInput
    /**
     * Limit how many Tabs to delete.
     */
    limit?: number
  }

  /**
   * Tab.charts
   */
  export type Tab$chartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    where?: ChartWhereInput
    orderBy?: ChartOrderByWithRelationInput | ChartOrderByWithRelationInput[]
    cursor?: ChartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChartScalarFieldEnum | ChartScalarFieldEnum[]
  }

  /**
   * Tab without action
   */
  export type TabDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tab
     */
    select?: TabSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tab
     */
    omit?: TabOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TabInclude<ExtArgs> | null
  }


  /**
   * Model Chart
   */

  export type AggregateChart = {
    _count: ChartCountAggregateOutputType | null
    _avg: ChartAvgAggregateOutputType | null
    _sum: ChartSumAggregateOutputType | null
    _min: ChartMinAggregateOutputType | null
    _max: ChartMaxAggregateOutputType | null
  }

  export type ChartAvgAggregateOutputType = {
    id: number | null
    tab_id: number | null
    position_x: number | null
    position_y: number | null
    width: number | null
    height: number | null
  }

  export type ChartSumAggregateOutputType = {
    id: number | null
    tab_id: number | null
    position_x: number | null
    position_y: number | null
    width: number | null
    height: number | null
  }

  export type ChartMinAggregateOutputType = {
    id: number | null
    tab_id: number | null
    name: string | null
    chart_type: string | null
    config: string | null
    position_x: number | null
    position_y: number | null
    width: number | null
    height: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChartMaxAggregateOutputType = {
    id: number | null
    tab_id: number | null
    name: string | null
    chart_type: string | null
    config: string | null
    position_x: number | null
    position_y: number | null
    width: number | null
    height: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ChartCountAggregateOutputType = {
    id: number
    tab_id: number
    name: number
    chart_type: number
    config: number
    position_x: number
    position_y: number
    width: number
    height: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ChartAvgAggregateInputType = {
    id?: true
    tab_id?: true
    position_x?: true
    position_y?: true
    width?: true
    height?: true
  }

  export type ChartSumAggregateInputType = {
    id?: true
    tab_id?: true
    position_x?: true
    position_y?: true
    width?: true
    height?: true
  }

  export type ChartMinAggregateInputType = {
    id?: true
    tab_id?: true
    name?: true
    chart_type?: true
    config?: true
    position_x?: true
    position_y?: true
    width?: true
    height?: true
    created_at?: true
    updated_at?: true
  }

  export type ChartMaxAggregateInputType = {
    id?: true
    tab_id?: true
    name?: true
    chart_type?: true
    config?: true
    position_x?: true
    position_y?: true
    width?: true
    height?: true
    created_at?: true
    updated_at?: true
  }

  export type ChartCountAggregateInputType = {
    id?: true
    tab_id?: true
    name?: true
    chart_type?: true
    config?: true
    position_x?: true
    position_y?: true
    width?: true
    height?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ChartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chart to aggregate.
     */
    where?: ChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charts to fetch.
     */
    orderBy?: ChartOrderByWithRelationInput | ChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Charts
    **/
    _count?: true | ChartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChartMaxAggregateInputType
  }

  export type GetChartAggregateType<T extends ChartAggregateArgs> = {
        [P in keyof T & keyof AggregateChart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChart[P]>
      : GetScalarType<T[P], AggregateChart[P]>
  }




  export type ChartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChartWhereInput
    orderBy?: ChartOrderByWithAggregationInput | ChartOrderByWithAggregationInput[]
    by: ChartScalarFieldEnum[] | ChartScalarFieldEnum
    having?: ChartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChartCountAggregateInputType | true
    _avg?: ChartAvgAggregateInputType
    _sum?: ChartSumAggregateInputType
    _min?: ChartMinAggregateInputType
    _max?: ChartMaxAggregateInputType
  }

  export type ChartGroupByOutputType = {
    id: number
    tab_id: number
    name: string
    chart_type: string
    config: string
    position_x: number
    position_y: number
    width: number
    height: number
    created_at: Date
    updated_at: Date
    _count: ChartCountAggregateOutputType | null
    _avg: ChartAvgAggregateOutputType | null
    _sum: ChartSumAggregateOutputType | null
    _min: ChartMinAggregateOutputType | null
    _max: ChartMaxAggregateOutputType | null
  }

  type GetChartGroupByPayload<T extends ChartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChartGroupByOutputType[P]>
            : GetScalarType<T[P], ChartGroupByOutputType[P]>
        }
      >
    >


  export type ChartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tab_id?: boolean
    name?: boolean
    chart_type?: boolean
    config?: boolean
    position_x?: boolean
    position_y?: boolean
    width?: boolean
    height?: boolean
    created_at?: boolean
    updated_at?: boolean
    tab?: boolean | TabDefaultArgs<ExtArgs>
    data_source?: boolean | Chart$data_sourceArgs<ExtArgs>
  }, ExtArgs["result"]["chart"]>

  export type ChartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tab_id?: boolean
    name?: boolean
    chart_type?: boolean
    config?: boolean
    position_x?: boolean
    position_y?: boolean
    width?: boolean
    height?: boolean
    created_at?: boolean
    updated_at?: boolean
    tab?: boolean | TabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chart"]>

  export type ChartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tab_id?: boolean
    name?: boolean
    chart_type?: boolean
    config?: boolean
    position_x?: boolean
    position_y?: boolean
    width?: boolean
    height?: boolean
    created_at?: boolean
    updated_at?: boolean
    tab?: boolean | TabDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chart"]>

  export type ChartSelectScalar = {
    id?: boolean
    tab_id?: boolean
    name?: boolean
    chart_type?: boolean
    config?: boolean
    position_x?: boolean
    position_y?: boolean
    width?: boolean
    height?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ChartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tab_id" | "name" | "chart_type" | "config" | "position_x" | "position_y" | "width" | "height" | "created_at" | "updated_at", ExtArgs["result"]["chart"]>
  export type ChartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | TabDefaultArgs<ExtArgs>
    data_source?: boolean | Chart$data_sourceArgs<ExtArgs>
  }
  export type ChartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | TabDefaultArgs<ExtArgs>
  }
  export type ChartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tab?: boolean | TabDefaultArgs<ExtArgs>
  }

  export type $ChartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chart"
    objects: {
      tab: Prisma.$TabPayload<ExtArgs>
      data_source: Prisma.$ChartDataSourcePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tab_id: number
      name: string
      chart_type: string
      config: string
      position_x: number
      position_y: number
      width: number
      height: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["chart"]>
    composites: {}
  }

  type ChartGetPayload<S extends boolean | null | undefined | ChartDefaultArgs> = $Result.GetResult<Prisma.$ChartPayload, S>

  type ChartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChartCountAggregateInputType | true
    }

  export interface ChartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chart'], meta: { name: 'Chart' } }
    /**
     * Find zero or one Chart that matches the filter.
     * @param {ChartFindUniqueArgs} args - Arguments to find a Chart
     * @example
     * // Get one Chart
     * const chart = await prisma.chart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChartFindUniqueArgs>(args: SelectSubset<T, ChartFindUniqueArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChartFindUniqueOrThrowArgs} args - Arguments to find a Chart
     * @example
     * // Get one Chart
     * const chart = await prisma.chart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChartFindUniqueOrThrowArgs>(args: SelectSubset<T, ChartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartFindFirstArgs} args - Arguments to find a Chart
     * @example
     * // Get one Chart
     * const chart = await prisma.chart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChartFindFirstArgs>(args?: SelectSubset<T, ChartFindFirstArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartFindFirstOrThrowArgs} args - Arguments to find a Chart
     * @example
     * // Get one Chart
     * const chart = await prisma.chart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChartFindFirstOrThrowArgs>(args?: SelectSubset<T, ChartFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Charts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Charts
     * const charts = await prisma.chart.findMany()
     * 
     * // Get first 10 Charts
     * const charts = await prisma.chart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chartWithIdOnly = await prisma.chart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChartFindManyArgs>(args?: SelectSubset<T, ChartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chart.
     * @param {ChartCreateArgs} args - Arguments to create a Chart.
     * @example
     * // Create one Chart
     * const Chart = await prisma.chart.create({
     *   data: {
     *     // ... data to create a Chart
     *   }
     * })
     * 
     */
    create<T extends ChartCreateArgs>(args: SelectSubset<T, ChartCreateArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Charts.
     * @param {ChartCreateManyArgs} args - Arguments to create many Charts.
     * @example
     * // Create many Charts
     * const chart = await prisma.chart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChartCreateManyArgs>(args?: SelectSubset<T, ChartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Charts and returns the data saved in the database.
     * @param {ChartCreateManyAndReturnArgs} args - Arguments to create many Charts.
     * @example
     * // Create many Charts
     * const chart = await prisma.chart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Charts and only return the `id`
     * const chartWithIdOnly = await prisma.chart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChartCreateManyAndReturnArgs>(args?: SelectSubset<T, ChartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chart.
     * @param {ChartDeleteArgs} args - Arguments to delete one Chart.
     * @example
     * // Delete one Chart
     * const Chart = await prisma.chart.delete({
     *   where: {
     *     // ... filter to delete one Chart
     *   }
     * })
     * 
     */
    delete<T extends ChartDeleteArgs>(args: SelectSubset<T, ChartDeleteArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chart.
     * @param {ChartUpdateArgs} args - Arguments to update one Chart.
     * @example
     * // Update one Chart
     * const chart = await prisma.chart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChartUpdateArgs>(args: SelectSubset<T, ChartUpdateArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Charts.
     * @param {ChartDeleteManyArgs} args - Arguments to filter Charts to delete.
     * @example
     * // Delete a few Charts
     * const { count } = await prisma.chart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChartDeleteManyArgs>(args?: SelectSubset<T, ChartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Charts
     * const chart = await prisma.chart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChartUpdateManyArgs>(args: SelectSubset<T, ChartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Charts and returns the data updated in the database.
     * @param {ChartUpdateManyAndReturnArgs} args - Arguments to update many Charts.
     * @example
     * // Update many Charts
     * const chart = await prisma.chart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Charts and only return the `id`
     * const chartWithIdOnly = await prisma.chart.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChartUpdateManyAndReturnArgs>(args: SelectSubset<T, ChartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chart.
     * @param {ChartUpsertArgs} args - Arguments to update or create a Chart.
     * @example
     * // Update or create a Chart
     * const chart = await prisma.chart.upsert({
     *   create: {
     *     // ... data to create a Chart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chart we want to update
     *   }
     * })
     */
    upsert<T extends ChartUpsertArgs>(args: SelectSubset<T, ChartUpsertArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Charts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartCountArgs} args - Arguments to filter Charts to count.
     * @example
     * // Count the number of Charts
     * const count = await prisma.chart.count({
     *   where: {
     *     // ... the filter for the Charts we want to count
     *   }
     * })
    **/
    count<T extends ChartCountArgs>(
      args?: Subset<T, ChartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChartAggregateArgs>(args: Subset<T, ChartAggregateArgs>): Prisma.PrismaPromise<GetChartAggregateType<T>>

    /**
     * Group by Chart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartGroupByArgs} args - Group by arguments.
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
      T extends ChartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChartGroupByArgs['orderBy'] }
        : { orderBy?: ChartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chart model
   */
  readonly fields: ChartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tab<T extends TabDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TabDefaultArgs<ExtArgs>>): Prisma__TabClient<$Result.GetResult<Prisma.$TabPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    data_source<T extends Chart$data_sourceArgs<ExtArgs> = {}>(args?: Subset<T, Chart$data_sourceArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Chart model
   */
  interface ChartFieldRefs {
    readonly id: FieldRef<"Chart", 'Int'>
    readonly tab_id: FieldRef<"Chart", 'Int'>
    readonly name: FieldRef<"Chart", 'String'>
    readonly chart_type: FieldRef<"Chart", 'String'>
    readonly config: FieldRef<"Chart", 'String'>
    readonly position_x: FieldRef<"Chart", 'Float'>
    readonly position_y: FieldRef<"Chart", 'Float'>
    readonly width: FieldRef<"Chart", 'Float'>
    readonly height: FieldRef<"Chart", 'Float'>
    readonly created_at: FieldRef<"Chart", 'DateTime'>
    readonly updated_at: FieldRef<"Chart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chart findUnique
   */
  export type ChartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * Filter, which Chart to fetch.
     */
    where: ChartWhereUniqueInput
  }

  /**
   * Chart findUniqueOrThrow
   */
  export type ChartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * Filter, which Chart to fetch.
     */
    where: ChartWhereUniqueInput
  }

  /**
   * Chart findFirst
   */
  export type ChartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * Filter, which Chart to fetch.
     */
    where?: ChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charts to fetch.
     */
    orderBy?: ChartOrderByWithRelationInput | ChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charts.
     */
    cursor?: ChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charts.
     */
    distinct?: ChartScalarFieldEnum | ChartScalarFieldEnum[]
  }

  /**
   * Chart findFirstOrThrow
   */
  export type ChartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * Filter, which Chart to fetch.
     */
    where?: ChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charts to fetch.
     */
    orderBy?: ChartOrderByWithRelationInput | ChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Charts.
     */
    cursor?: ChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charts.
     */
    distinct?: ChartScalarFieldEnum | ChartScalarFieldEnum[]
  }

  /**
   * Chart findMany
   */
  export type ChartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * Filter, which Charts to fetch.
     */
    where?: ChartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Charts to fetch.
     */
    orderBy?: ChartOrderByWithRelationInput | ChartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Charts.
     */
    cursor?: ChartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Charts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Charts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Charts.
     */
    distinct?: ChartScalarFieldEnum | ChartScalarFieldEnum[]
  }

  /**
   * Chart create
   */
  export type ChartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * The data needed to create a Chart.
     */
    data: XOR<ChartCreateInput, ChartUncheckedCreateInput>
  }

  /**
   * Chart createMany
   */
  export type ChartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Charts.
     */
    data: ChartCreateManyInput | ChartCreateManyInput[]
  }

  /**
   * Chart createManyAndReturn
   */
  export type ChartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * The data used to create many Charts.
     */
    data: ChartCreateManyInput | ChartCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chart update
   */
  export type ChartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * The data needed to update a Chart.
     */
    data: XOR<ChartUpdateInput, ChartUncheckedUpdateInput>
    /**
     * Choose, which Chart to update.
     */
    where: ChartWhereUniqueInput
  }

  /**
   * Chart updateMany
   */
  export type ChartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Charts.
     */
    data: XOR<ChartUpdateManyMutationInput, ChartUncheckedUpdateManyInput>
    /**
     * Filter which Charts to update
     */
    where?: ChartWhereInput
    /**
     * Limit how many Charts to update.
     */
    limit?: number
  }

  /**
   * Chart updateManyAndReturn
   */
  export type ChartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * The data used to update Charts.
     */
    data: XOR<ChartUpdateManyMutationInput, ChartUncheckedUpdateManyInput>
    /**
     * Filter which Charts to update
     */
    where?: ChartWhereInput
    /**
     * Limit how many Charts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chart upsert
   */
  export type ChartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * The filter to search for the Chart to update in case it exists.
     */
    where: ChartWhereUniqueInput
    /**
     * In case the Chart found by the `where` argument doesn't exist, create a new Chart with this data.
     */
    create: XOR<ChartCreateInput, ChartUncheckedCreateInput>
    /**
     * In case the Chart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChartUpdateInput, ChartUncheckedUpdateInput>
  }

  /**
   * Chart delete
   */
  export type ChartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
    /**
     * Filter which Chart to delete.
     */
    where: ChartWhereUniqueInput
  }

  /**
   * Chart deleteMany
   */
  export type ChartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Charts to delete
     */
    where?: ChartWhereInput
    /**
     * Limit how many Charts to delete.
     */
    limit?: number
  }

  /**
   * Chart.data_source
   */
  export type Chart$data_sourceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    where?: ChartDataSourceWhereInput
  }

  /**
   * Chart without action
   */
  export type ChartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chart
     */
    select?: ChartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chart
     */
    omit?: ChartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    file_name: string | null
    file_type: string | null
    file_path: string | null
    created_at: Date | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    file_name: string | null
    file_type: string | null
    file_path: string | null
    created_at: Date | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    user_id: number
    file_name: number
    file_type: number
    file_path: number
    created_at: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    user_id?: true
    file_name?: true
    file_type?: true
    file_path?: true
    created_at?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    user_id?: true
    file_name?: true
    file_type?: true
    file_path?: true
    created_at?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    user_id?: true
    file_name?: true
    file_type?: true
    file_path?: true
    created_at?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    id: number
    user_id: number
    file_name: string
    file_type: string
    file_path: string
    created_at: Date
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_name?: boolean
    file_type?: boolean
    file_path?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chart_data_sources?: boolean | File$chart_data_sourcesArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_name?: boolean
    file_type?: boolean
    file_path?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    file_name?: boolean
    file_type?: boolean
    file_path?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    id?: boolean
    user_id?: boolean
    file_name?: boolean
    file_type?: boolean
    file_path?: boolean
    created_at?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "file_name" | "file_type" | "file_path" | "created_at", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chart_data_sources?: boolean | File$chart_data_sourcesArgs<ExtArgs>
    _count?: boolean | FileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chart_data_sources: Prisma.$ChartDataSourcePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number
      file_name: string
      file_type: string
      file_path: string
      created_at: Date
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
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
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

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
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
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
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chart_data_sources<T extends File$chart_data_sourcesArgs<ExtArgs> = {}>(args?: Subset<T, File$chart_data_sourcesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly id: FieldRef<"File", 'Int'>
    readonly user_id: FieldRef<"File", 'Int'>
    readonly file_name: FieldRef<"File", 'String'>
    readonly file_type: FieldRef<"File", 'String'>
    readonly file_path: FieldRef<"File", 'String'>
    readonly created_at: FieldRef<"File", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File.chart_data_sources
   */
  export type File$chart_data_sourcesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    where?: ChartDataSourceWhereInput
    orderBy?: ChartDataSourceOrderByWithRelationInput | ChartDataSourceOrderByWithRelationInput[]
    cursor?: ChartDataSourceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChartDataSourceScalarFieldEnum | ChartDataSourceScalarFieldEnum[]
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model ChartDataSource
   */

  export type AggregateChartDataSource = {
    _count: ChartDataSourceCountAggregateOutputType | null
    _avg: ChartDataSourceAvgAggregateOutputType | null
    _sum: ChartDataSourceSumAggregateOutputType | null
    _min: ChartDataSourceMinAggregateOutputType | null
    _max: ChartDataSourceMaxAggregateOutputType | null
  }

  export type ChartDataSourceAvgAggregateOutputType = {
    id: number | null
    chart_id: number | null
    file_id: number | null
    connection_id: number | null
  }

  export type ChartDataSourceSumAggregateOutputType = {
    id: number | null
    chart_id: number | null
    file_id: number | null
    connection_id: number | null
  }

  export type ChartDataSourceMinAggregateOutputType = {
    id: number | null
    chart_id: number | null
    type: string | null
    file_id: number | null
    connection_id: number | null
  }

  export type ChartDataSourceMaxAggregateOutputType = {
    id: number | null
    chart_id: number | null
    type: string | null
    file_id: number | null
    connection_id: number | null
  }

  export type ChartDataSourceCountAggregateOutputType = {
    id: number
    chart_id: number
    type: number
    file_id: number
    connection_id: number
    _all: number
  }


  export type ChartDataSourceAvgAggregateInputType = {
    id?: true
    chart_id?: true
    file_id?: true
    connection_id?: true
  }

  export type ChartDataSourceSumAggregateInputType = {
    id?: true
    chart_id?: true
    file_id?: true
    connection_id?: true
  }

  export type ChartDataSourceMinAggregateInputType = {
    id?: true
    chart_id?: true
    type?: true
    file_id?: true
    connection_id?: true
  }

  export type ChartDataSourceMaxAggregateInputType = {
    id?: true
    chart_id?: true
    type?: true
    file_id?: true
    connection_id?: true
  }

  export type ChartDataSourceCountAggregateInputType = {
    id?: true
    chart_id?: true
    type?: true
    file_id?: true
    connection_id?: true
    _all?: true
  }

  export type ChartDataSourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChartDataSource to aggregate.
     */
    where?: ChartDataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartDataSources to fetch.
     */
    orderBy?: ChartDataSourceOrderByWithRelationInput | ChartDataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChartDataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartDataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartDataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChartDataSources
    **/
    _count?: true | ChartDataSourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChartDataSourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChartDataSourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChartDataSourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChartDataSourceMaxAggregateInputType
  }

  export type GetChartDataSourceAggregateType<T extends ChartDataSourceAggregateArgs> = {
        [P in keyof T & keyof AggregateChartDataSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChartDataSource[P]>
      : GetScalarType<T[P], AggregateChartDataSource[P]>
  }




  export type ChartDataSourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChartDataSourceWhereInput
    orderBy?: ChartDataSourceOrderByWithAggregationInput | ChartDataSourceOrderByWithAggregationInput[]
    by: ChartDataSourceScalarFieldEnum[] | ChartDataSourceScalarFieldEnum
    having?: ChartDataSourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChartDataSourceCountAggregateInputType | true
    _avg?: ChartDataSourceAvgAggregateInputType
    _sum?: ChartDataSourceSumAggregateInputType
    _min?: ChartDataSourceMinAggregateInputType
    _max?: ChartDataSourceMaxAggregateInputType
  }

  export type ChartDataSourceGroupByOutputType = {
    id: number
    chart_id: number
    type: string
    file_id: number | null
    connection_id: number | null
    _count: ChartDataSourceCountAggregateOutputType | null
    _avg: ChartDataSourceAvgAggregateOutputType | null
    _sum: ChartDataSourceSumAggregateOutputType | null
    _min: ChartDataSourceMinAggregateOutputType | null
    _max: ChartDataSourceMaxAggregateOutputType | null
  }

  type GetChartDataSourceGroupByPayload<T extends ChartDataSourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChartDataSourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChartDataSourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChartDataSourceGroupByOutputType[P]>
            : GetScalarType<T[P], ChartDataSourceGroupByOutputType[P]>
        }
      >
    >


  export type ChartDataSourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chart_id?: boolean
    type?: boolean
    file_id?: boolean
    connection_id?: boolean
    chart?: boolean | ChartDefaultArgs<ExtArgs>
    file?: boolean | ChartDataSource$fileArgs<ExtArgs>
    connection?: boolean | ChartDataSource$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["chartDataSource"]>

  export type ChartDataSourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chart_id?: boolean
    type?: boolean
    file_id?: boolean
    connection_id?: boolean
    chart?: boolean | ChartDefaultArgs<ExtArgs>
    file?: boolean | ChartDataSource$fileArgs<ExtArgs>
    connection?: boolean | ChartDataSource$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["chartDataSource"]>

  export type ChartDataSourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chart_id?: boolean
    type?: boolean
    file_id?: boolean
    connection_id?: boolean
    chart?: boolean | ChartDefaultArgs<ExtArgs>
    file?: boolean | ChartDataSource$fileArgs<ExtArgs>
    connection?: boolean | ChartDataSource$connectionArgs<ExtArgs>
  }, ExtArgs["result"]["chartDataSource"]>

  export type ChartDataSourceSelectScalar = {
    id?: boolean
    chart_id?: boolean
    type?: boolean
    file_id?: boolean
    connection_id?: boolean
  }

  export type ChartDataSourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chart_id" | "type" | "file_id" | "connection_id", ExtArgs["result"]["chartDataSource"]>
  export type ChartDataSourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chart?: boolean | ChartDefaultArgs<ExtArgs>
    file?: boolean | ChartDataSource$fileArgs<ExtArgs>
    connection?: boolean | ChartDataSource$connectionArgs<ExtArgs>
  }
  export type ChartDataSourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chart?: boolean | ChartDefaultArgs<ExtArgs>
    file?: boolean | ChartDataSource$fileArgs<ExtArgs>
    connection?: boolean | ChartDataSource$connectionArgs<ExtArgs>
  }
  export type ChartDataSourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chart?: boolean | ChartDefaultArgs<ExtArgs>
    file?: boolean | ChartDataSource$fileArgs<ExtArgs>
    connection?: boolean | ChartDataSource$connectionArgs<ExtArgs>
  }

  export type $ChartDataSourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChartDataSource"
    objects: {
      chart: Prisma.$ChartPayload<ExtArgs>
      file: Prisma.$FilePayload<ExtArgs> | null
      connection: Prisma.$DataConnectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      chart_id: number
      type: string
      file_id: number | null
      connection_id: number | null
    }, ExtArgs["result"]["chartDataSource"]>
    composites: {}
  }

  type ChartDataSourceGetPayload<S extends boolean | null | undefined | ChartDataSourceDefaultArgs> = $Result.GetResult<Prisma.$ChartDataSourcePayload, S>

  type ChartDataSourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChartDataSourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChartDataSourceCountAggregateInputType | true
    }

  export interface ChartDataSourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChartDataSource'], meta: { name: 'ChartDataSource' } }
    /**
     * Find zero or one ChartDataSource that matches the filter.
     * @param {ChartDataSourceFindUniqueArgs} args - Arguments to find a ChartDataSource
     * @example
     * // Get one ChartDataSource
     * const chartDataSource = await prisma.chartDataSource.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChartDataSourceFindUniqueArgs>(args: SelectSubset<T, ChartDataSourceFindUniqueArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChartDataSource that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChartDataSourceFindUniqueOrThrowArgs} args - Arguments to find a ChartDataSource
     * @example
     * // Get one ChartDataSource
     * const chartDataSource = await prisma.chartDataSource.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChartDataSourceFindUniqueOrThrowArgs>(args: SelectSubset<T, ChartDataSourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChartDataSource that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartDataSourceFindFirstArgs} args - Arguments to find a ChartDataSource
     * @example
     * // Get one ChartDataSource
     * const chartDataSource = await prisma.chartDataSource.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChartDataSourceFindFirstArgs>(args?: SelectSubset<T, ChartDataSourceFindFirstArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChartDataSource that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartDataSourceFindFirstOrThrowArgs} args - Arguments to find a ChartDataSource
     * @example
     * // Get one ChartDataSource
     * const chartDataSource = await prisma.chartDataSource.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChartDataSourceFindFirstOrThrowArgs>(args?: SelectSubset<T, ChartDataSourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChartDataSources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartDataSourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChartDataSources
     * const chartDataSources = await prisma.chartDataSource.findMany()
     * 
     * // Get first 10 ChartDataSources
     * const chartDataSources = await prisma.chartDataSource.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chartDataSourceWithIdOnly = await prisma.chartDataSource.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChartDataSourceFindManyArgs>(args?: SelectSubset<T, ChartDataSourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChartDataSource.
     * @param {ChartDataSourceCreateArgs} args - Arguments to create a ChartDataSource.
     * @example
     * // Create one ChartDataSource
     * const ChartDataSource = await prisma.chartDataSource.create({
     *   data: {
     *     // ... data to create a ChartDataSource
     *   }
     * })
     * 
     */
    create<T extends ChartDataSourceCreateArgs>(args: SelectSubset<T, ChartDataSourceCreateArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChartDataSources.
     * @param {ChartDataSourceCreateManyArgs} args - Arguments to create many ChartDataSources.
     * @example
     * // Create many ChartDataSources
     * const chartDataSource = await prisma.chartDataSource.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChartDataSourceCreateManyArgs>(args?: SelectSubset<T, ChartDataSourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChartDataSources and returns the data saved in the database.
     * @param {ChartDataSourceCreateManyAndReturnArgs} args - Arguments to create many ChartDataSources.
     * @example
     * // Create many ChartDataSources
     * const chartDataSource = await prisma.chartDataSource.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChartDataSources and only return the `id`
     * const chartDataSourceWithIdOnly = await prisma.chartDataSource.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChartDataSourceCreateManyAndReturnArgs>(args?: SelectSubset<T, ChartDataSourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChartDataSource.
     * @param {ChartDataSourceDeleteArgs} args - Arguments to delete one ChartDataSource.
     * @example
     * // Delete one ChartDataSource
     * const ChartDataSource = await prisma.chartDataSource.delete({
     *   where: {
     *     // ... filter to delete one ChartDataSource
     *   }
     * })
     * 
     */
    delete<T extends ChartDataSourceDeleteArgs>(args: SelectSubset<T, ChartDataSourceDeleteArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChartDataSource.
     * @param {ChartDataSourceUpdateArgs} args - Arguments to update one ChartDataSource.
     * @example
     * // Update one ChartDataSource
     * const chartDataSource = await prisma.chartDataSource.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChartDataSourceUpdateArgs>(args: SelectSubset<T, ChartDataSourceUpdateArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChartDataSources.
     * @param {ChartDataSourceDeleteManyArgs} args - Arguments to filter ChartDataSources to delete.
     * @example
     * // Delete a few ChartDataSources
     * const { count } = await prisma.chartDataSource.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChartDataSourceDeleteManyArgs>(args?: SelectSubset<T, ChartDataSourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChartDataSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartDataSourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChartDataSources
     * const chartDataSource = await prisma.chartDataSource.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChartDataSourceUpdateManyArgs>(args: SelectSubset<T, ChartDataSourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChartDataSources and returns the data updated in the database.
     * @param {ChartDataSourceUpdateManyAndReturnArgs} args - Arguments to update many ChartDataSources.
     * @example
     * // Update many ChartDataSources
     * const chartDataSource = await prisma.chartDataSource.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChartDataSources and only return the `id`
     * const chartDataSourceWithIdOnly = await prisma.chartDataSource.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChartDataSourceUpdateManyAndReturnArgs>(args: SelectSubset<T, ChartDataSourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChartDataSource.
     * @param {ChartDataSourceUpsertArgs} args - Arguments to update or create a ChartDataSource.
     * @example
     * // Update or create a ChartDataSource
     * const chartDataSource = await prisma.chartDataSource.upsert({
     *   create: {
     *     // ... data to create a ChartDataSource
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChartDataSource we want to update
     *   }
     * })
     */
    upsert<T extends ChartDataSourceUpsertArgs>(args: SelectSubset<T, ChartDataSourceUpsertArgs<ExtArgs>>): Prisma__ChartDataSourceClient<$Result.GetResult<Prisma.$ChartDataSourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChartDataSources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartDataSourceCountArgs} args - Arguments to filter ChartDataSources to count.
     * @example
     * // Count the number of ChartDataSources
     * const count = await prisma.chartDataSource.count({
     *   where: {
     *     // ... the filter for the ChartDataSources we want to count
     *   }
     * })
    **/
    count<T extends ChartDataSourceCountArgs>(
      args?: Subset<T, ChartDataSourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChartDataSourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChartDataSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartDataSourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChartDataSourceAggregateArgs>(args: Subset<T, ChartDataSourceAggregateArgs>): Prisma.PrismaPromise<GetChartDataSourceAggregateType<T>>

    /**
     * Group by ChartDataSource.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChartDataSourceGroupByArgs} args - Group by arguments.
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
      T extends ChartDataSourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChartDataSourceGroupByArgs['orderBy'] }
        : { orderBy?: ChartDataSourceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChartDataSourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChartDataSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChartDataSource model
   */
  readonly fields: ChartDataSourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChartDataSource.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChartDataSourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    chart<T extends ChartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChartDefaultArgs<ExtArgs>>): Prisma__ChartClient<$Result.GetResult<Prisma.$ChartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    file<T extends ChartDataSource$fileArgs<ExtArgs> = {}>(args?: Subset<T, ChartDataSource$fileArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    connection<T extends ChartDataSource$connectionArgs<ExtArgs> = {}>(args?: Subset<T, ChartDataSource$connectionArgs<ExtArgs>>): Prisma__DataConnectionClient<$Result.GetResult<Prisma.$DataConnectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ChartDataSource model
   */
  interface ChartDataSourceFieldRefs {
    readonly id: FieldRef<"ChartDataSource", 'Int'>
    readonly chart_id: FieldRef<"ChartDataSource", 'Int'>
    readonly type: FieldRef<"ChartDataSource", 'String'>
    readonly file_id: FieldRef<"ChartDataSource", 'Int'>
    readonly connection_id: FieldRef<"ChartDataSource", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ChartDataSource findUnique
   */
  export type ChartDataSourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * Filter, which ChartDataSource to fetch.
     */
    where: ChartDataSourceWhereUniqueInput
  }

  /**
   * ChartDataSource findUniqueOrThrow
   */
  export type ChartDataSourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * Filter, which ChartDataSource to fetch.
     */
    where: ChartDataSourceWhereUniqueInput
  }

  /**
   * ChartDataSource findFirst
   */
  export type ChartDataSourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * Filter, which ChartDataSource to fetch.
     */
    where?: ChartDataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartDataSources to fetch.
     */
    orderBy?: ChartDataSourceOrderByWithRelationInput | ChartDataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChartDataSources.
     */
    cursor?: ChartDataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartDataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartDataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChartDataSources.
     */
    distinct?: ChartDataSourceScalarFieldEnum | ChartDataSourceScalarFieldEnum[]
  }

  /**
   * ChartDataSource findFirstOrThrow
   */
  export type ChartDataSourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * Filter, which ChartDataSource to fetch.
     */
    where?: ChartDataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartDataSources to fetch.
     */
    orderBy?: ChartDataSourceOrderByWithRelationInput | ChartDataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChartDataSources.
     */
    cursor?: ChartDataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartDataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartDataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChartDataSources.
     */
    distinct?: ChartDataSourceScalarFieldEnum | ChartDataSourceScalarFieldEnum[]
  }

  /**
   * ChartDataSource findMany
   */
  export type ChartDataSourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * Filter, which ChartDataSources to fetch.
     */
    where?: ChartDataSourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChartDataSources to fetch.
     */
    orderBy?: ChartDataSourceOrderByWithRelationInput | ChartDataSourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChartDataSources.
     */
    cursor?: ChartDataSourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChartDataSources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChartDataSources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChartDataSources.
     */
    distinct?: ChartDataSourceScalarFieldEnum | ChartDataSourceScalarFieldEnum[]
  }

  /**
   * ChartDataSource create
   */
  export type ChartDataSourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * The data needed to create a ChartDataSource.
     */
    data: XOR<ChartDataSourceCreateInput, ChartDataSourceUncheckedCreateInput>
  }

  /**
   * ChartDataSource createMany
   */
  export type ChartDataSourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChartDataSources.
     */
    data: ChartDataSourceCreateManyInput | ChartDataSourceCreateManyInput[]
  }

  /**
   * ChartDataSource createManyAndReturn
   */
  export type ChartDataSourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * The data used to create many ChartDataSources.
     */
    data: ChartDataSourceCreateManyInput | ChartDataSourceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChartDataSource update
   */
  export type ChartDataSourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * The data needed to update a ChartDataSource.
     */
    data: XOR<ChartDataSourceUpdateInput, ChartDataSourceUncheckedUpdateInput>
    /**
     * Choose, which ChartDataSource to update.
     */
    where: ChartDataSourceWhereUniqueInput
  }

  /**
   * ChartDataSource updateMany
   */
  export type ChartDataSourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChartDataSources.
     */
    data: XOR<ChartDataSourceUpdateManyMutationInput, ChartDataSourceUncheckedUpdateManyInput>
    /**
     * Filter which ChartDataSources to update
     */
    where?: ChartDataSourceWhereInput
    /**
     * Limit how many ChartDataSources to update.
     */
    limit?: number
  }

  /**
   * ChartDataSource updateManyAndReturn
   */
  export type ChartDataSourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * The data used to update ChartDataSources.
     */
    data: XOR<ChartDataSourceUpdateManyMutationInput, ChartDataSourceUncheckedUpdateManyInput>
    /**
     * Filter which ChartDataSources to update
     */
    where?: ChartDataSourceWhereInput
    /**
     * Limit how many ChartDataSources to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChartDataSource upsert
   */
  export type ChartDataSourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * The filter to search for the ChartDataSource to update in case it exists.
     */
    where: ChartDataSourceWhereUniqueInput
    /**
     * In case the ChartDataSource found by the `where` argument doesn't exist, create a new ChartDataSource with this data.
     */
    create: XOR<ChartDataSourceCreateInput, ChartDataSourceUncheckedCreateInput>
    /**
     * In case the ChartDataSource was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChartDataSourceUpdateInput, ChartDataSourceUncheckedUpdateInput>
  }

  /**
   * ChartDataSource delete
   */
  export type ChartDataSourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
    /**
     * Filter which ChartDataSource to delete.
     */
    where: ChartDataSourceWhereUniqueInput
  }

  /**
   * ChartDataSource deleteMany
   */
  export type ChartDataSourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChartDataSources to delete
     */
    where?: ChartDataSourceWhereInput
    /**
     * Limit how many ChartDataSources to delete.
     */
    limit?: number
  }

  /**
   * ChartDataSource.file
   */
  export type ChartDataSource$fileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
  }

  /**
   * ChartDataSource.connection
   */
  export type ChartDataSource$connectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataConnection
     */
    select?: DataConnectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DataConnection
     */
    omit?: DataConnectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DataConnectionInclude<ExtArgs> | null
    where?: DataConnectionWhereInput
  }

  /**
   * ChartDataSource without action
   */
  export type ChartDataSourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChartDataSource
     */
    select?: ChartDataSourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChartDataSource
     */
    omit?: ChartDataSourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChartDataSourceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role_id: 'role_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DataConnectionScalarFieldEnum: {
    id: 'id',
    connection_name: 'connection_name',
    user_id: 'user_id',
    db_type: 'db_type',
    host: 'host',
    username: 'username',
    password: 'password',
    database_name: 'database_name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DataConnectionScalarFieldEnum = (typeof DataConnectionScalarFieldEnum)[keyof typeof DataConnectionScalarFieldEnum]


  export const DashboardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DashboardScalarFieldEnum = (typeof DashboardScalarFieldEnum)[keyof typeof DashboardScalarFieldEnum]


  export const DashboardAccessScalarFieldEnum: {
    id: 'id',
    dashboard_id: 'dashboard_id',
    user_id: 'user_id'
  };

  export type DashboardAccessScalarFieldEnum = (typeof DashboardAccessScalarFieldEnum)[keyof typeof DashboardAccessScalarFieldEnum]


  export const TabScalarFieldEnum: {
    id: 'id',
    dashboard_id: 'dashboard_id',
    name: 'name',
    order_index: 'order_index',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TabScalarFieldEnum = (typeof TabScalarFieldEnum)[keyof typeof TabScalarFieldEnum]


  export const ChartScalarFieldEnum: {
    id: 'id',
    tab_id: 'tab_id',
    name: 'name',
    chart_type: 'chart_type',
    config: 'config',
    position_x: 'position_x',
    position_y: 'position_y',
    width: 'width',
    height: 'height',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ChartScalarFieldEnum = (typeof ChartScalarFieldEnum)[keyof typeof ChartScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    file_name: 'file_name',
    file_type: 'file_type',
    file_path: 'file_path',
    created_at: 'created_at'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const ChartDataSourceScalarFieldEnum: {
    id: 'id',
    chart_id: 'chart_id',
    type: 'type',
    file_id: 'file_id',
    connection_id: 'connection_id'
  };

  export type ChartDataSourceScalarFieldEnum = (typeof ChartDataSourceScalarFieldEnum)[keyof typeof ChartDataSourceScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    users?: UserListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    users?: UserListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
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
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    dashboards?: DashboardListRelationFilter
    data_connections?: DataConnectionListRelationFilter
    files?: FileListRelationFilter
    dashboard_access?: DashboardAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    role?: RoleOrderByWithRelationInput
    dashboards?: DashboardOrderByRelationAggregateInput
    data_connections?: DataConnectionOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
    dashboard_access?: DashboardAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    dashboards?: DashboardListRelationFilter
    data_connections?: DataConnectionListRelationFilter
    files?: FileListRelationFilter
    dashboard_access?: DashboardAccessListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role_id?: IntWithAggregatesFilter<"User"> | number
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DataConnectionWhereInput = {
    AND?: DataConnectionWhereInput | DataConnectionWhereInput[]
    OR?: DataConnectionWhereInput[]
    NOT?: DataConnectionWhereInput | DataConnectionWhereInput[]
    id?: IntFilter<"DataConnection"> | number
    connection_name?: StringFilter<"DataConnection"> | string
    user_id?: IntFilter<"DataConnection"> | number
    db_type?: StringFilter<"DataConnection"> | string
    host?: StringFilter<"DataConnection"> | string
    username?: StringFilter<"DataConnection"> | string
    password?: StringFilter<"DataConnection"> | string
    database_name?: StringFilter<"DataConnection"> | string
    created_at?: DateTimeFilter<"DataConnection"> | Date | string
    updated_at?: DateTimeFilter<"DataConnection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chart_data_sources?: ChartDataSourceListRelationFilter
  }

  export type DataConnectionOrderByWithRelationInput = {
    id?: SortOrder
    connection_name?: SortOrder
    user_id?: SortOrder
    db_type?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chart_data_sources?: ChartDataSourceOrderByRelationAggregateInput
  }

  export type DataConnectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    connection_name?: string
    AND?: DataConnectionWhereInput | DataConnectionWhereInput[]
    OR?: DataConnectionWhereInput[]
    NOT?: DataConnectionWhereInput | DataConnectionWhereInput[]
    user_id?: IntFilter<"DataConnection"> | number
    db_type?: StringFilter<"DataConnection"> | string
    host?: StringFilter<"DataConnection"> | string
    username?: StringFilter<"DataConnection"> | string
    password?: StringFilter<"DataConnection"> | string
    database_name?: StringFilter<"DataConnection"> | string
    created_at?: DateTimeFilter<"DataConnection"> | Date | string
    updated_at?: DateTimeFilter<"DataConnection"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chart_data_sources?: ChartDataSourceListRelationFilter
  }, "id" | "connection_name">

  export type DataConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    connection_name?: SortOrder
    user_id?: SortOrder
    db_type?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DataConnectionCountOrderByAggregateInput
    _avg?: DataConnectionAvgOrderByAggregateInput
    _max?: DataConnectionMaxOrderByAggregateInput
    _min?: DataConnectionMinOrderByAggregateInput
    _sum?: DataConnectionSumOrderByAggregateInput
  }

  export type DataConnectionScalarWhereWithAggregatesInput = {
    AND?: DataConnectionScalarWhereWithAggregatesInput | DataConnectionScalarWhereWithAggregatesInput[]
    OR?: DataConnectionScalarWhereWithAggregatesInput[]
    NOT?: DataConnectionScalarWhereWithAggregatesInput | DataConnectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DataConnection"> | number
    connection_name?: StringWithAggregatesFilter<"DataConnection"> | string
    user_id?: IntWithAggregatesFilter<"DataConnection"> | number
    db_type?: StringWithAggregatesFilter<"DataConnection"> | string
    host?: StringWithAggregatesFilter<"DataConnection"> | string
    username?: StringWithAggregatesFilter<"DataConnection"> | string
    password?: StringWithAggregatesFilter<"DataConnection"> | string
    database_name?: StringWithAggregatesFilter<"DataConnection"> | string
    created_at?: DateTimeWithAggregatesFilter<"DataConnection"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"DataConnection"> | Date | string
  }

  export type DashboardWhereInput = {
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    id?: IntFilter<"Dashboard"> | number
    name?: StringFilter<"Dashboard"> | string
    user_id?: IntFilter<"Dashboard"> | number
    created_at?: DateTimeFilter<"Dashboard"> | Date | string
    updated_at?: DateTimeFilter<"Dashboard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tabs?: TabListRelationFilter
    dashboard_access?: DashboardAccessListRelationFilter
  }

  export type DashboardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    tabs?: TabOrderByRelationAggregateInput
    dashboard_access?: DashboardAccessOrderByRelationAggregateInput
  }

  export type DashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DashboardWhereInput | DashboardWhereInput[]
    OR?: DashboardWhereInput[]
    NOT?: DashboardWhereInput | DashboardWhereInput[]
    name?: StringFilter<"Dashboard"> | string
    user_id?: IntFilter<"Dashboard"> | number
    created_at?: DateTimeFilter<"Dashboard"> | Date | string
    updated_at?: DateTimeFilter<"Dashboard"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tabs?: TabListRelationFilter
    dashboard_access?: DashboardAccessListRelationFilter
  }, "id">

  export type DashboardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DashboardCountOrderByAggregateInput
    _avg?: DashboardAvgOrderByAggregateInput
    _max?: DashboardMaxOrderByAggregateInput
    _min?: DashboardMinOrderByAggregateInput
    _sum?: DashboardSumOrderByAggregateInput
  }

  export type DashboardScalarWhereWithAggregatesInput = {
    AND?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    OR?: DashboardScalarWhereWithAggregatesInput[]
    NOT?: DashboardScalarWhereWithAggregatesInput | DashboardScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Dashboard"> | number
    name?: StringWithAggregatesFilter<"Dashboard"> | string
    user_id?: IntWithAggregatesFilter<"Dashboard"> | number
    created_at?: DateTimeWithAggregatesFilter<"Dashboard"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Dashboard"> | Date | string
  }

  export type DashboardAccessWhereInput = {
    AND?: DashboardAccessWhereInput | DashboardAccessWhereInput[]
    OR?: DashboardAccessWhereInput[]
    NOT?: DashboardAccessWhereInput | DashboardAccessWhereInput[]
    id?: IntFilter<"DashboardAccess"> | number
    dashboard_id?: IntFilter<"DashboardAccess"> | number
    user_id?: IntFilter<"DashboardAccess"> | number
    dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DashboardAccessOrderByWithRelationInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    user_id?: SortOrder
    dashboard?: DashboardOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DashboardAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    dashboard_id_user_id?: DashboardAccessDashboard_idUser_idCompoundUniqueInput
    AND?: DashboardAccessWhereInput | DashboardAccessWhereInput[]
    OR?: DashboardAccessWhereInput[]
    NOT?: DashboardAccessWhereInput | DashboardAccessWhereInput[]
    dashboard_id?: IntFilter<"DashboardAccess"> | number
    user_id?: IntFilter<"DashboardAccess"> | number
    dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "dashboard_id_user_id">

  export type DashboardAccessOrderByWithAggregationInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    user_id?: SortOrder
    _count?: DashboardAccessCountOrderByAggregateInput
    _avg?: DashboardAccessAvgOrderByAggregateInput
    _max?: DashboardAccessMaxOrderByAggregateInput
    _min?: DashboardAccessMinOrderByAggregateInput
    _sum?: DashboardAccessSumOrderByAggregateInput
  }

  export type DashboardAccessScalarWhereWithAggregatesInput = {
    AND?: DashboardAccessScalarWhereWithAggregatesInput | DashboardAccessScalarWhereWithAggregatesInput[]
    OR?: DashboardAccessScalarWhereWithAggregatesInput[]
    NOT?: DashboardAccessScalarWhereWithAggregatesInput | DashboardAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DashboardAccess"> | number
    dashboard_id?: IntWithAggregatesFilter<"DashboardAccess"> | number
    user_id?: IntWithAggregatesFilter<"DashboardAccess"> | number
  }

  export type TabWhereInput = {
    AND?: TabWhereInput | TabWhereInput[]
    OR?: TabWhereInput[]
    NOT?: TabWhereInput | TabWhereInput[]
    id?: IntFilter<"Tab"> | number
    dashboard_id?: IntFilter<"Tab"> | number
    name?: StringFilter<"Tab"> | string
    order_index?: IntFilter<"Tab"> | number
    created_at?: DateTimeFilter<"Tab"> | Date | string
    updated_at?: DateTimeFilter<"Tab"> | Date | string
    dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
    charts?: ChartListRelationFilter
  }

  export type TabOrderByWithRelationInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    name?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    dashboard?: DashboardOrderByWithRelationInput
    charts?: ChartOrderByRelationAggregateInput
  }

  export type TabWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TabWhereInput | TabWhereInput[]
    OR?: TabWhereInput[]
    NOT?: TabWhereInput | TabWhereInput[]
    dashboard_id?: IntFilter<"Tab"> | number
    name?: StringFilter<"Tab"> | string
    order_index?: IntFilter<"Tab"> | number
    created_at?: DateTimeFilter<"Tab"> | Date | string
    updated_at?: DateTimeFilter<"Tab"> | Date | string
    dashboard?: XOR<DashboardScalarRelationFilter, DashboardWhereInput>
    charts?: ChartListRelationFilter
  }, "id">

  export type TabOrderByWithAggregationInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    name?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TabCountOrderByAggregateInput
    _avg?: TabAvgOrderByAggregateInput
    _max?: TabMaxOrderByAggregateInput
    _min?: TabMinOrderByAggregateInput
    _sum?: TabSumOrderByAggregateInput
  }

  export type TabScalarWhereWithAggregatesInput = {
    AND?: TabScalarWhereWithAggregatesInput | TabScalarWhereWithAggregatesInput[]
    OR?: TabScalarWhereWithAggregatesInput[]
    NOT?: TabScalarWhereWithAggregatesInput | TabScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tab"> | number
    dashboard_id?: IntWithAggregatesFilter<"Tab"> | number
    name?: StringWithAggregatesFilter<"Tab"> | string
    order_index?: IntWithAggregatesFilter<"Tab"> | number
    created_at?: DateTimeWithAggregatesFilter<"Tab"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Tab"> | Date | string
  }

  export type ChartWhereInput = {
    AND?: ChartWhereInput | ChartWhereInput[]
    OR?: ChartWhereInput[]
    NOT?: ChartWhereInput | ChartWhereInput[]
    id?: IntFilter<"Chart"> | number
    tab_id?: IntFilter<"Chart"> | number
    name?: StringFilter<"Chart"> | string
    chart_type?: StringFilter<"Chart"> | string
    config?: StringFilter<"Chart"> | string
    position_x?: FloatFilter<"Chart"> | number
    position_y?: FloatFilter<"Chart"> | number
    width?: FloatFilter<"Chart"> | number
    height?: FloatFilter<"Chart"> | number
    created_at?: DateTimeFilter<"Chart"> | Date | string
    updated_at?: DateTimeFilter<"Chart"> | Date | string
    tab?: XOR<TabScalarRelationFilter, TabWhereInput>
    data_source?: XOR<ChartDataSourceNullableScalarRelationFilter, ChartDataSourceWhereInput> | null
  }

  export type ChartOrderByWithRelationInput = {
    id?: SortOrder
    tab_id?: SortOrder
    name?: SortOrder
    chart_type?: SortOrder
    config?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    tab?: TabOrderByWithRelationInput
    data_source?: ChartDataSourceOrderByWithRelationInput
  }

  export type ChartWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ChartWhereInput | ChartWhereInput[]
    OR?: ChartWhereInput[]
    NOT?: ChartWhereInput | ChartWhereInput[]
    tab_id?: IntFilter<"Chart"> | number
    name?: StringFilter<"Chart"> | string
    chart_type?: StringFilter<"Chart"> | string
    config?: StringFilter<"Chart"> | string
    position_x?: FloatFilter<"Chart"> | number
    position_y?: FloatFilter<"Chart"> | number
    width?: FloatFilter<"Chart"> | number
    height?: FloatFilter<"Chart"> | number
    created_at?: DateTimeFilter<"Chart"> | Date | string
    updated_at?: DateTimeFilter<"Chart"> | Date | string
    tab?: XOR<TabScalarRelationFilter, TabWhereInput>
    data_source?: XOR<ChartDataSourceNullableScalarRelationFilter, ChartDataSourceWhereInput> | null
  }, "id">

  export type ChartOrderByWithAggregationInput = {
    id?: SortOrder
    tab_id?: SortOrder
    name?: SortOrder
    chart_type?: SortOrder
    config?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ChartCountOrderByAggregateInput
    _avg?: ChartAvgOrderByAggregateInput
    _max?: ChartMaxOrderByAggregateInput
    _min?: ChartMinOrderByAggregateInput
    _sum?: ChartSumOrderByAggregateInput
  }

  export type ChartScalarWhereWithAggregatesInput = {
    AND?: ChartScalarWhereWithAggregatesInput | ChartScalarWhereWithAggregatesInput[]
    OR?: ChartScalarWhereWithAggregatesInput[]
    NOT?: ChartScalarWhereWithAggregatesInput | ChartScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chart"> | number
    tab_id?: IntWithAggregatesFilter<"Chart"> | number
    name?: StringWithAggregatesFilter<"Chart"> | string
    chart_type?: StringWithAggregatesFilter<"Chart"> | string
    config?: StringWithAggregatesFilter<"Chart"> | string
    position_x?: FloatWithAggregatesFilter<"Chart"> | number
    position_y?: FloatWithAggregatesFilter<"Chart"> | number
    width?: FloatWithAggregatesFilter<"Chart"> | number
    height?: FloatWithAggregatesFilter<"Chart"> | number
    created_at?: DateTimeWithAggregatesFilter<"Chart"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Chart"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    id?: IntFilter<"File"> | number
    user_id?: IntFilter<"File"> | number
    file_name?: StringFilter<"File"> | string
    file_type?: StringFilter<"File"> | string
    file_path?: StringFilter<"File"> | string
    created_at?: DateTimeFilter<"File"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chart_data_sources?: ChartDataSourceListRelationFilter
  }

  export type FileOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    chart_data_sources?: ChartDataSourceOrderByRelationAggregateInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    user_id?: IntFilter<"File"> | number
    file_name?: StringFilter<"File"> | string
    file_type?: StringFilter<"File"> | string
    file_path?: StringFilter<"File"> | string
    created_at?: DateTimeFilter<"File"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chart_data_sources?: ChartDataSourceListRelationFilter
  }, "id">

  export type FileOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"File"> | number
    user_id?: IntWithAggregatesFilter<"File"> | number
    file_name?: StringWithAggregatesFilter<"File"> | string
    file_type?: StringWithAggregatesFilter<"File"> | string
    file_path?: StringWithAggregatesFilter<"File"> | string
    created_at?: DateTimeWithAggregatesFilter<"File"> | Date | string
  }

  export type ChartDataSourceWhereInput = {
    AND?: ChartDataSourceWhereInput | ChartDataSourceWhereInput[]
    OR?: ChartDataSourceWhereInput[]
    NOT?: ChartDataSourceWhereInput | ChartDataSourceWhereInput[]
    id?: IntFilter<"ChartDataSource"> | number
    chart_id?: IntFilter<"ChartDataSource"> | number
    type?: StringFilter<"ChartDataSource"> | string
    file_id?: IntNullableFilter<"ChartDataSource"> | number | null
    connection_id?: IntNullableFilter<"ChartDataSource"> | number | null
    chart?: XOR<ChartScalarRelationFilter, ChartWhereInput>
    file?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    connection?: XOR<DataConnectionNullableScalarRelationFilter, DataConnectionWhereInput> | null
  }

  export type ChartDataSourceOrderByWithRelationInput = {
    id?: SortOrder
    chart_id?: SortOrder
    type?: SortOrder
    file_id?: SortOrderInput | SortOrder
    connection_id?: SortOrderInput | SortOrder
    chart?: ChartOrderByWithRelationInput
    file?: FileOrderByWithRelationInput
    connection?: DataConnectionOrderByWithRelationInput
  }

  export type ChartDataSourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    chart_id?: number
    AND?: ChartDataSourceWhereInput | ChartDataSourceWhereInput[]
    OR?: ChartDataSourceWhereInput[]
    NOT?: ChartDataSourceWhereInput | ChartDataSourceWhereInput[]
    type?: StringFilter<"ChartDataSource"> | string
    file_id?: IntNullableFilter<"ChartDataSource"> | number | null
    connection_id?: IntNullableFilter<"ChartDataSource"> | number | null
    chart?: XOR<ChartScalarRelationFilter, ChartWhereInput>
    file?: XOR<FileNullableScalarRelationFilter, FileWhereInput> | null
    connection?: XOR<DataConnectionNullableScalarRelationFilter, DataConnectionWhereInput> | null
  }, "id" | "chart_id">

  export type ChartDataSourceOrderByWithAggregationInput = {
    id?: SortOrder
    chart_id?: SortOrder
    type?: SortOrder
    file_id?: SortOrderInput | SortOrder
    connection_id?: SortOrderInput | SortOrder
    _count?: ChartDataSourceCountOrderByAggregateInput
    _avg?: ChartDataSourceAvgOrderByAggregateInput
    _max?: ChartDataSourceMaxOrderByAggregateInput
    _min?: ChartDataSourceMinOrderByAggregateInput
    _sum?: ChartDataSourceSumOrderByAggregateInput
  }

  export type ChartDataSourceScalarWhereWithAggregatesInput = {
    AND?: ChartDataSourceScalarWhereWithAggregatesInput | ChartDataSourceScalarWhereWithAggregatesInput[]
    OR?: ChartDataSourceScalarWhereWithAggregatesInput[]
    NOT?: ChartDataSourceScalarWhereWithAggregatesInput | ChartDataSourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChartDataSource"> | number
    chart_id?: IntWithAggregatesFilter<"ChartDataSource"> | number
    type?: StringWithAggregatesFilter<"ChartDataSource"> | string
    file_id?: IntNullableWithAggregatesFilter<"ChartDataSource"> | number | null
    connection_id?: IntNullableWithAggregatesFilter<"ChartDataSource"> | number | null
  }

  export type RoleCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    dashboards?: DashboardCreateNestedManyWithoutUserInput
    data_connections?: DataConnectionCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
    data_connections?: DataConnectionUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
    data_connections?: DataConnectionUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
    data_connections?: DataConnectionUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataConnectionCreateInput = {
    connection_name: string
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutData_connectionsInput
    chart_data_sources?: ChartDataSourceCreateNestedManyWithoutConnectionInput
  }

  export type DataConnectionUncheckedCreateInput = {
    id?: number
    connection_name: string
    user_id: number
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at?: Date | string
    updated_at?: Date | string
    chart_data_sources?: ChartDataSourceUncheckedCreateNestedManyWithoutConnectionInput
  }

  export type DataConnectionUpdateInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutData_connectionsNestedInput
    chart_data_sources?: ChartDataSourceUpdateManyWithoutConnectionNestedInput
  }

  export type DataConnectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chart_data_sources?: ChartDataSourceUncheckedUpdateManyWithoutConnectionNestedInput
  }

  export type DataConnectionCreateManyInput = {
    id?: number
    connection_name: string
    user_id: number
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DataConnectionUpdateManyMutationInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataConnectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardCreateInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutDashboardsInput
    tabs?: TabCreateNestedManyWithoutDashboardInput
    dashboard_access?: DashboardAccessCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateInput = {
    id?: number
    name: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    tabs?: TabUncheckedCreateNestedManyWithoutDashboardInput
    dashboard_access?: DashboardAccessUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDashboardsNestedInput
    tabs?: TabUpdateManyWithoutDashboardNestedInput
    dashboard_access?: DashboardAccessUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tabs?: TabUncheckedUpdateManyWithoutDashboardNestedInput
    dashboard_access?: DashboardAccessUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardCreateManyInput = {
    id?: number
    name: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DashboardUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardAccessCreateInput = {
    dashboard: DashboardCreateNestedOneWithoutDashboard_accessInput
    user: UserCreateNestedOneWithoutDashboard_accessInput
  }

  export type DashboardAccessUncheckedCreateInput = {
    id?: number
    dashboard_id: number
    user_id: number
  }

  export type DashboardAccessUpdateInput = {
    dashboard?: DashboardUpdateOneRequiredWithoutDashboard_accessNestedInput
    user?: UserUpdateOneRequiredWithoutDashboard_accessNestedInput
  }

  export type DashboardAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dashboard_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DashboardAccessCreateManyInput = {
    id?: number
    dashboard_id: number
    user_id: number
  }

  export type DashboardAccessUpdateManyMutationInput = {

  }

  export type DashboardAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dashboard_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TabCreateInput = {
    name: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
    dashboard: DashboardCreateNestedOneWithoutTabsInput
    charts?: ChartCreateNestedManyWithoutTabInput
  }

  export type TabUncheckedCreateInput = {
    id?: number
    dashboard_id: number
    name: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
    charts?: ChartUncheckedCreateNestedManyWithoutTabInput
  }

  export type TabUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboard?: DashboardUpdateOneRequiredWithoutTabsNestedInput
    charts?: ChartUpdateManyWithoutTabNestedInput
  }

  export type TabUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dashboard_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charts?: ChartUncheckedUpdateManyWithoutTabNestedInput
  }

  export type TabCreateManyInput = {
    id?: number
    dashboard_id: number
    name: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TabUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TabUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dashboard_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartCreateInput = {
    name: string
    chart_type: string
    config: string
    position_x?: number
    position_y?: number
    width?: number
    height?: number
    created_at?: Date | string
    updated_at?: Date | string
    tab: TabCreateNestedOneWithoutChartsInput
    data_source?: ChartDataSourceCreateNestedOneWithoutChartInput
  }

  export type ChartUncheckedCreateInput = {
    id?: number
    tab_id: number
    name: string
    chart_type: string
    config: string
    position_x?: number
    position_y?: number
    width?: number
    height?: number
    created_at?: Date | string
    updated_at?: Date | string
    data_source?: ChartDataSourceUncheckedCreateNestedOneWithoutChartInput
  }

  export type ChartUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: TabUpdateOneRequiredWithoutChartsNestedInput
    data_source?: ChartDataSourceUpdateOneWithoutChartNestedInput
  }

  export type ChartUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tab_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_source?: ChartDataSourceUncheckedUpdateOneWithoutChartNestedInput
  }

  export type ChartCreateManyInput = {
    id?: number
    tab_id: number
    name: string
    chart_type: string
    config: string
    position_x?: number
    position_y?: number
    width?: number
    height?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChartUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tab_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    file_name: string
    file_type: string
    file_path: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
    chart_data_sources?: ChartDataSourceCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    user_id: number
    file_name: string
    file_type: string
    file_path: string
    created_at?: Date | string
    chart_data_sources?: ChartDataSourceUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileUpdateInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
    chart_data_sources?: ChartDataSourceUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chart_data_sources?: ChartDataSourceUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileCreateManyInput = {
    id?: number
    user_id: number
    file_name: string
    file_type: string
    file_path: string
    created_at?: Date | string
  }

  export type FileUpdateManyMutationInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartDataSourceCreateInput = {
    type: string
    chart: ChartCreateNestedOneWithoutData_sourceInput
    file?: FileCreateNestedOneWithoutChart_data_sourcesInput
    connection?: DataConnectionCreateNestedOneWithoutChart_data_sourcesInput
  }

  export type ChartDataSourceUncheckedCreateInput = {
    id?: number
    chart_id: number
    type: string
    file_id?: number | null
    connection_id?: number | null
  }

  export type ChartDataSourceUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    chart?: ChartUpdateOneRequiredWithoutData_sourceNestedInput
    file?: FileUpdateOneWithoutChart_data_sourcesNestedInput
    connection?: DataConnectionUpdateOneWithoutChart_data_sourcesNestedInput
  }

  export type ChartDataSourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    chart_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    file_id?: NullableIntFieldUpdateOperationsInput | number | null
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChartDataSourceCreateManyInput = {
    id?: number
    chart_id: number
    type: string
    file_id?: number | null
    connection_id?: number | null
  }

  export type ChartDataSourceUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ChartDataSourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    chart_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    file_id?: NullableIntFieldUpdateOperationsInput | number | null
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type DashboardListRelationFilter = {
    every?: DashboardWhereInput
    some?: DashboardWhereInput
    none?: DashboardWhereInput
  }

  export type DataConnectionListRelationFilter = {
    every?: DataConnectionWhereInput
    some?: DataConnectionWhereInput
    none?: DataConnectionWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type DashboardAccessListRelationFilter = {
    every?: DashboardAccessWhereInput
    some?: DashboardAccessWhereInput
    none?: DashboardAccessWhereInput
  }

  export type DashboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DashboardAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    role_id?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ChartDataSourceListRelationFilter = {
    every?: ChartDataSourceWhereInput
    some?: ChartDataSourceWhereInput
    none?: ChartDataSourceWhereInput
  }

  export type ChartDataSourceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    user_id?: SortOrder
    db_type?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataConnectionAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DataConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    user_id?: SortOrder
    db_type?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    connection_name?: SortOrder
    user_id?: SortOrder
    db_type?: SortOrder
    host?: SortOrder
    username?: SortOrder
    password?: SortOrder
    database_name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DataConnectionSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type TabListRelationFilter = {
    every?: TabWhereInput
    some?: TabWhereInput
    none?: TabWhereInput
  }

  export type TabOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DashboardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DashboardAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DashboardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DashboardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DashboardSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type DashboardScalarRelationFilter = {
    is?: DashboardWhereInput
    isNot?: DashboardWhereInput
  }

  export type DashboardAccessDashboard_idUser_idCompoundUniqueInput = {
    dashboard_id: number
    user_id: number
  }

  export type DashboardAccessCountOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    user_id?: SortOrder
  }

  export type DashboardAccessAvgOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    user_id?: SortOrder
  }

  export type DashboardAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    user_id?: SortOrder
  }

  export type DashboardAccessMinOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    user_id?: SortOrder
  }

  export type DashboardAccessSumOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    user_id?: SortOrder
  }

  export type ChartListRelationFilter = {
    every?: ChartWhereInput
    some?: ChartWhereInput
    none?: ChartWhereInput
  }

  export type ChartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TabCountOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    name?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TabAvgOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    order_index?: SortOrder
  }

  export type TabMaxOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    name?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TabMinOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    name?: SortOrder
    order_index?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TabSumOrderByAggregateInput = {
    id?: SortOrder
    dashboard_id?: SortOrder
    order_index?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type TabScalarRelationFilter = {
    is?: TabWhereInput
    isNot?: TabWhereInput
  }

  export type ChartDataSourceNullableScalarRelationFilter = {
    is?: ChartDataSourceWhereInput | null
    isNot?: ChartDataSourceWhereInput | null
  }

  export type ChartCountOrderByAggregateInput = {
    id?: SortOrder
    tab_id?: SortOrder
    name?: SortOrder
    chart_type?: SortOrder
    config?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChartAvgOrderByAggregateInput = {
    id?: SortOrder
    tab_id?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type ChartMaxOrderByAggregateInput = {
    id?: SortOrder
    tab_id?: SortOrder
    name?: SortOrder
    chart_type?: SortOrder
    config?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChartMinOrderByAggregateInput = {
    id?: SortOrder
    tab_id?: SortOrder
    name?: SortOrder
    chart_type?: SortOrder
    config?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ChartSumOrderByAggregateInput = {
    id?: SortOrder
    tab_id?: SortOrder
    position_x?: SortOrder
    position_y?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FileCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    file_name?: SortOrder
    file_type?: SortOrder
    file_path?: SortOrder
    created_at?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
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

  export type ChartScalarRelationFilter = {
    is?: ChartWhereInput
    isNot?: ChartWhereInput
  }

  export type FileNullableScalarRelationFilter = {
    is?: FileWhereInput | null
    isNot?: FileWhereInput | null
  }

  export type DataConnectionNullableScalarRelationFilter = {
    is?: DataConnectionWhereInput | null
    isNot?: DataConnectionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChartDataSourceCountOrderByAggregateInput = {
    id?: SortOrder
    chart_id?: SortOrder
    type?: SortOrder
    file_id?: SortOrder
    connection_id?: SortOrder
  }

  export type ChartDataSourceAvgOrderByAggregateInput = {
    id?: SortOrder
    chart_id?: SortOrder
    file_id?: SortOrder
    connection_id?: SortOrder
  }

  export type ChartDataSourceMaxOrderByAggregateInput = {
    id?: SortOrder
    chart_id?: SortOrder
    type?: SortOrder
    file_id?: SortOrder
    connection_id?: SortOrder
  }

  export type ChartDataSourceMinOrderByAggregateInput = {
    id?: SortOrder
    chart_id?: SortOrder
    type?: SortOrder
    file_id?: SortOrder
    connection_id?: SortOrder
  }

  export type ChartDataSourceSumOrderByAggregateInput = {
    id?: SortOrder
    chart_id?: SortOrder
    file_id?: SortOrder
    connection_id?: SortOrder
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

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type DashboardCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
  }

  export type DataConnectionCreateNestedManyWithoutUserInput = {
    create?: XOR<DataConnectionCreateWithoutUserInput, DataConnectionUncheckedCreateWithoutUserInput> | DataConnectionCreateWithoutUserInput[] | DataConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataConnectionCreateOrConnectWithoutUserInput | DataConnectionCreateOrConnectWithoutUserInput[]
    createMany?: DataConnectionCreateManyUserInputEnvelope
    connect?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type DashboardAccessCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardAccessCreateWithoutUserInput, DashboardAccessUncheckedCreateWithoutUserInput> | DashboardAccessCreateWithoutUserInput[] | DashboardAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardAccessCreateOrConnectWithoutUserInput | DashboardAccessCreateOrConnectWithoutUserInput[]
    createMany?: DashboardAccessCreateManyUserInputEnvelope
    connect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
  }

  export type DashboardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
  }

  export type DataConnectionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DataConnectionCreateWithoutUserInput, DataConnectionUncheckedCreateWithoutUserInput> | DataConnectionCreateWithoutUserInput[] | DataConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataConnectionCreateOrConnectWithoutUserInput | DataConnectionCreateOrConnectWithoutUserInput[]
    createMany?: DataConnectionCreateManyUserInputEnvelope
    connect?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type DashboardAccessUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DashboardAccessCreateWithoutUserInput, DashboardAccessUncheckedCreateWithoutUserInput> | DashboardAccessCreateWithoutUserInput[] | DashboardAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardAccessCreateOrConnectWithoutUserInput | DashboardAccessCreateOrConnectWithoutUserInput[]
    createMany?: DashboardAccessCreateManyUserInputEnvelope
    connect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type DashboardUpdateManyWithoutUserNestedInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    upsert?: DashboardUpsertWithWhereUniqueWithoutUserInput | DashboardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    set?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    disconnect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    delete?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    update?: DashboardUpdateWithWhereUniqueWithoutUserInput | DashboardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DashboardUpdateManyWithWhereWithoutUserInput | DashboardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
  }

  export type DataConnectionUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataConnectionCreateWithoutUserInput, DataConnectionUncheckedCreateWithoutUserInput> | DataConnectionCreateWithoutUserInput[] | DataConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataConnectionCreateOrConnectWithoutUserInput | DataConnectionCreateOrConnectWithoutUserInput[]
    upsert?: DataConnectionUpsertWithWhereUniqueWithoutUserInput | DataConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataConnectionCreateManyUserInputEnvelope
    set?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
    disconnect?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
    delete?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
    connect?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
    update?: DataConnectionUpdateWithWhereUniqueWithoutUserInput | DataConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataConnectionUpdateManyWithWhereWithoutUserInput | DataConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataConnectionScalarWhereInput | DataConnectionScalarWhereInput[]
  }

  export type FileUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUserInput | FileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUserInput | FileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUserInput | FileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type DashboardAccessUpdateManyWithoutUserNestedInput = {
    create?: XOR<DashboardAccessCreateWithoutUserInput, DashboardAccessUncheckedCreateWithoutUserInput> | DashboardAccessCreateWithoutUserInput[] | DashboardAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardAccessCreateOrConnectWithoutUserInput | DashboardAccessCreateOrConnectWithoutUserInput[]
    upsert?: DashboardAccessUpsertWithWhereUniqueWithoutUserInput | DashboardAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DashboardAccessCreateManyUserInputEnvelope
    set?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    disconnect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    delete?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    connect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    update?: DashboardAccessUpdateWithWhereUniqueWithoutUserInput | DashboardAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DashboardAccessUpdateManyWithWhereWithoutUserInput | DashboardAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DashboardAccessScalarWhereInput | DashboardAccessScalarWhereInput[]
  }

  export type DashboardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput> | DashboardCreateWithoutUserInput[] | DashboardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardCreateOrConnectWithoutUserInput | DashboardCreateOrConnectWithoutUserInput[]
    upsert?: DashboardUpsertWithWhereUniqueWithoutUserInput | DashboardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DashboardCreateManyUserInputEnvelope
    set?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    disconnect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    delete?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    connect?: DashboardWhereUniqueInput | DashboardWhereUniqueInput[]
    update?: DashboardUpdateWithWhereUniqueWithoutUserInput | DashboardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DashboardUpdateManyWithWhereWithoutUserInput | DashboardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
  }

  export type DataConnectionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DataConnectionCreateWithoutUserInput, DataConnectionUncheckedCreateWithoutUserInput> | DataConnectionCreateWithoutUserInput[] | DataConnectionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DataConnectionCreateOrConnectWithoutUserInput | DataConnectionCreateOrConnectWithoutUserInput[]
    upsert?: DataConnectionUpsertWithWhereUniqueWithoutUserInput | DataConnectionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DataConnectionCreateManyUserInputEnvelope
    set?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
    disconnect?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
    delete?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
    connect?: DataConnectionWhereUniqueInput | DataConnectionWhereUniqueInput[]
    update?: DataConnectionUpdateWithWhereUniqueWithoutUserInput | DataConnectionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DataConnectionUpdateManyWithWhereWithoutUserInput | DataConnectionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DataConnectionScalarWhereInput | DataConnectionScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUserInput | FileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUserInput | FileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUserInput | FileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type DashboardAccessUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DashboardAccessCreateWithoutUserInput, DashboardAccessUncheckedCreateWithoutUserInput> | DashboardAccessCreateWithoutUserInput[] | DashboardAccessUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DashboardAccessCreateOrConnectWithoutUserInput | DashboardAccessCreateOrConnectWithoutUserInput[]
    upsert?: DashboardAccessUpsertWithWhereUniqueWithoutUserInput | DashboardAccessUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DashboardAccessCreateManyUserInputEnvelope
    set?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    disconnect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    delete?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    connect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    update?: DashboardAccessUpdateWithWhereUniqueWithoutUserInput | DashboardAccessUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DashboardAccessUpdateManyWithWhereWithoutUserInput | DashboardAccessUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DashboardAccessScalarWhereInput | DashboardAccessScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutData_connectionsInput = {
    create?: XOR<UserCreateWithoutData_connectionsInput, UserUncheckedCreateWithoutData_connectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutData_connectionsInput
    connect?: UserWhereUniqueInput
  }

  export type ChartDataSourceCreateNestedManyWithoutConnectionInput = {
    create?: XOR<ChartDataSourceCreateWithoutConnectionInput, ChartDataSourceUncheckedCreateWithoutConnectionInput> | ChartDataSourceCreateWithoutConnectionInput[] | ChartDataSourceUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutConnectionInput | ChartDataSourceCreateOrConnectWithoutConnectionInput[]
    createMany?: ChartDataSourceCreateManyConnectionInputEnvelope
    connect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
  }

  export type ChartDataSourceUncheckedCreateNestedManyWithoutConnectionInput = {
    create?: XOR<ChartDataSourceCreateWithoutConnectionInput, ChartDataSourceUncheckedCreateWithoutConnectionInput> | ChartDataSourceCreateWithoutConnectionInput[] | ChartDataSourceUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutConnectionInput | ChartDataSourceCreateOrConnectWithoutConnectionInput[]
    createMany?: ChartDataSourceCreateManyConnectionInputEnvelope
    connect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutData_connectionsNestedInput = {
    create?: XOR<UserCreateWithoutData_connectionsInput, UserUncheckedCreateWithoutData_connectionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutData_connectionsInput
    upsert?: UserUpsertWithoutData_connectionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutData_connectionsInput, UserUpdateWithoutData_connectionsInput>, UserUncheckedUpdateWithoutData_connectionsInput>
  }

  export type ChartDataSourceUpdateManyWithoutConnectionNestedInput = {
    create?: XOR<ChartDataSourceCreateWithoutConnectionInput, ChartDataSourceUncheckedCreateWithoutConnectionInput> | ChartDataSourceCreateWithoutConnectionInput[] | ChartDataSourceUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutConnectionInput | ChartDataSourceCreateOrConnectWithoutConnectionInput[]
    upsert?: ChartDataSourceUpsertWithWhereUniqueWithoutConnectionInput | ChartDataSourceUpsertWithWhereUniqueWithoutConnectionInput[]
    createMany?: ChartDataSourceCreateManyConnectionInputEnvelope
    set?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    disconnect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    delete?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    connect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    update?: ChartDataSourceUpdateWithWhereUniqueWithoutConnectionInput | ChartDataSourceUpdateWithWhereUniqueWithoutConnectionInput[]
    updateMany?: ChartDataSourceUpdateManyWithWhereWithoutConnectionInput | ChartDataSourceUpdateManyWithWhereWithoutConnectionInput[]
    deleteMany?: ChartDataSourceScalarWhereInput | ChartDataSourceScalarWhereInput[]
  }

  export type ChartDataSourceUncheckedUpdateManyWithoutConnectionNestedInput = {
    create?: XOR<ChartDataSourceCreateWithoutConnectionInput, ChartDataSourceUncheckedCreateWithoutConnectionInput> | ChartDataSourceCreateWithoutConnectionInput[] | ChartDataSourceUncheckedCreateWithoutConnectionInput[]
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutConnectionInput | ChartDataSourceCreateOrConnectWithoutConnectionInput[]
    upsert?: ChartDataSourceUpsertWithWhereUniqueWithoutConnectionInput | ChartDataSourceUpsertWithWhereUniqueWithoutConnectionInput[]
    createMany?: ChartDataSourceCreateManyConnectionInputEnvelope
    set?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    disconnect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    delete?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    connect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    update?: ChartDataSourceUpdateWithWhereUniqueWithoutConnectionInput | ChartDataSourceUpdateWithWhereUniqueWithoutConnectionInput[]
    updateMany?: ChartDataSourceUpdateManyWithWhereWithoutConnectionInput | ChartDataSourceUpdateManyWithWhereWithoutConnectionInput[]
    deleteMany?: ChartDataSourceScalarWhereInput | ChartDataSourceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDashboardsInput = {
    create?: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput
    connect?: UserWhereUniqueInput
  }

  export type TabCreateNestedManyWithoutDashboardInput = {
    create?: XOR<TabCreateWithoutDashboardInput, TabUncheckedCreateWithoutDashboardInput> | TabCreateWithoutDashboardInput[] | TabUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: TabCreateOrConnectWithoutDashboardInput | TabCreateOrConnectWithoutDashboardInput[]
    createMany?: TabCreateManyDashboardInputEnvelope
    connect?: TabWhereUniqueInput | TabWhereUniqueInput[]
  }

  export type DashboardAccessCreateNestedManyWithoutDashboardInput = {
    create?: XOR<DashboardAccessCreateWithoutDashboardInput, DashboardAccessUncheckedCreateWithoutDashboardInput> | DashboardAccessCreateWithoutDashboardInput[] | DashboardAccessUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardAccessCreateOrConnectWithoutDashboardInput | DashboardAccessCreateOrConnectWithoutDashboardInput[]
    createMany?: DashboardAccessCreateManyDashboardInputEnvelope
    connect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
  }

  export type TabUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<TabCreateWithoutDashboardInput, TabUncheckedCreateWithoutDashboardInput> | TabCreateWithoutDashboardInput[] | TabUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: TabCreateOrConnectWithoutDashboardInput | TabCreateOrConnectWithoutDashboardInput[]
    createMany?: TabCreateManyDashboardInputEnvelope
    connect?: TabWhereUniqueInput | TabWhereUniqueInput[]
  }

  export type DashboardAccessUncheckedCreateNestedManyWithoutDashboardInput = {
    create?: XOR<DashboardAccessCreateWithoutDashboardInput, DashboardAccessUncheckedCreateWithoutDashboardInput> | DashboardAccessCreateWithoutDashboardInput[] | DashboardAccessUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardAccessCreateOrConnectWithoutDashboardInput | DashboardAccessCreateOrConnectWithoutDashboardInput[]
    createMany?: DashboardAccessCreateManyDashboardInputEnvelope
    connect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDashboardsNestedInput = {
    create?: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput
    upsert?: UserUpsertWithoutDashboardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboardsInput, UserUpdateWithoutDashboardsInput>, UserUncheckedUpdateWithoutDashboardsInput>
  }

  export type TabUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<TabCreateWithoutDashboardInput, TabUncheckedCreateWithoutDashboardInput> | TabCreateWithoutDashboardInput[] | TabUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: TabCreateOrConnectWithoutDashboardInput | TabCreateOrConnectWithoutDashboardInput[]
    upsert?: TabUpsertWithWhereUniqueWithoutDashboardInput | TabUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: TabCreateManyDashboardInputEnvelope
    set?: TabWhereUniqueInput | TabWhereUniqueInput[]
    disconnect?: TabWhereUniqueInput | TabWhereUniqueInput[]
    delete?: TabWhereUniqueInput | TabWhereUniqueInput[]
    connect?: TabWhereUniqueInput | TabWhereUniqueInput[]
    update?: TabUpdateWithWhereUniqueWithoutDashboardInput | TabUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: TabUpdateManyWithWhereWithoutDashboardInput | TabUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: TabScalarWhereInput | TabScalarWhereInput[]
  }

  export type DashboardAccessUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<DashboardAccessCreateWithoutDashboardInput, DashboardAccessUncheckedCreateWithoutDashboardInput> | DashboardAccessCreateWithoutDashboardInput[] | DashboardAccessUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardAccessCreateOrConnectWithoutDashboardInput | DashboardAccessCreateOrConnectWithoutDashboardInput[]
    upsert?: DashboardAccessUpsertWithWhereUniqueWithoutDashboardInput | DashboardAccessUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: DashboardAccessCreateManyDashboardInputEnvelope
    set?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    disconnect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    delete?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    connect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    update?: DashboardAccessUpdateWithWhereUniqueWithoutDashboardInput | DashboardAccessUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: DashboardAccessUpdateManyWithWhereWithoutDashboardInput | DashboardAccessUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: DashboardAccessScalarWhereInput | DashboardAccessScalarWhereInput[]
  }

  export type TabUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<TabCreateWithoutDashboardInput, TabUncheckedCreateWithoutDashboardInput> | TabCreateWithoutDashboardInput[] | TabUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: TabCreateOrConnectWithoutDashboardInput | TabCreateOrConnectWithoutDashboardInput[]
    upsert?: TabUpsertWithWhereUniqueWithoutDashboardInput | TabUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: TabCreateManyDashboardInputEnvelope
    set?: TabWhereUniqueInput | TabWhereUniqueInput[]
    disconnect?: TabWhereUniqueInput | TabWhereUniqueInput[]
    delete?: TabWhereUniqueInput | TabWhereUniqueInput[]
    connect?: TabWhereUniqueInput | TabWhereUniqueInput[]
    update?: TabUpdateWithWhereUniqueWithoutDashboardInput | TabUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: TabUpdateManyWithWhereWithoutDashboardInput | TabUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: TabScalarWhereInput | TabScalarWhereInput[]
  }

  export type DashboardAccessUncheckedUpdateManyWithoutDashboardNestedInput = {
    create?: XOR<DashboardAccessCreateWithoutDashboardInput, DashboardAccessUncheckedCreateWithoutDashboardInput> | DashboardAccessCreateWithoutDashboardInput[] | DashboardAccessUncheckedCreateWithoutDashboardInput[]
    connectOrCreate?: DashboardAccessCreateOrConnectWithoutDashboardInput | DashboardAccessCreateOrConnectWithoutDashboardInput[]
    upsert?: DashboardAccessUpsertWithWhereUniqueWithoutDashboardInput | DashboardAccessUpsertWithWhereUniqueWithoutDashboardInput[]
    createMany?: DashboardAccessCreateManyDashboardInputEnvelope
    set?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    disconnect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    delete?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    connect?: DashboardAccessWhereUniqueInput | DashboardAccessWhereUniqueInput[]
    update?: DashboardAccessUpdateWithWhereUniqueWithoutDashboardInput | DashboardAccessUpdateWithWhereUniqueWithoutDashboardInput[]
    updateMany?: DashboardAccessUpdateManyWithWhereWithoutDashboardInput | DashboardAccessUpdateManyWithWhereWithoutDashboardInput[]
    deleteMany?: DashboardAccessScalarWhereInput | DashboardAccessScalarWhereInput[]
  }

  export type DashboardCreateNestedOneWithoutDashboard_accessInput = {
    create?: XOR<DashboardCreateWithoutDashboard_accessInput, DashboardUncheckedCreateWithoutDashboard_accessInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboard_accessInput
    connect?: DashboardWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDashboard_accessInput = {
    create?: XOR<UserCreateWithoutDashboard_accessInput, UserUncheckedCreateWithoutDashboard_accessInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboard_accessInput
    connect?: UserWhereUniqueInput
  }

  export type DashboardUpdateOneRequiredWithoutDashboard_accessNestedInput = {
    create?: XOR<DashboardCreateWithoutDashboard_accessInput, DashboardUncheckedCreateWithoutDashboard_accessInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutDashboard_accessInput
    upsert?: DashboardUpsertWithoutDashboard_accessInput
    connect?: DashboardWhereUniqueInput
    update?: XOR<XOR<DashboardUpdateToOneWithWhereWithoutDashboard_accessInput, DashboardUpdateWithoutDashboard_accessInput>, DashboardUncheckedUpdateWithoutDashboard_accessInput>
  }

  export type UserUpdateOneRequiredWithoutDashboard_accessNestedInput = {
    create?: XOR<UserCreateWithoutDashboard_accessInput, UserUncheckedCreateWithoutDashboard_accessInput>
    connectOrCreate?: UserCreateOrConnectWithoutDashboard_accessInput
    upsert?: UserUpsertWithoutDashboard_accessInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDashboard_accessInput, UserUpdateWithoutDashboard_accessInput>, UserUncheckedUpdateWithoutDashboard_accessInput>
  }

  export type DashboardCreateNestedOneWithoutTabsInput = {
    create?: XOR<DashboardCreateWithoutTabsInput, DashboardUncheckedCreateWithoutTabsInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutTabsInput
    connect?: DashboardWhereUniqueInput
  }

  export type ChartCreateNestedManyWithoutTabInput = {
    create?: XOR<ChartCreateWithoutTabInput, ChartUncheckedCreateWithoutTabInput> | ChartCreateWithoutTabInput[] | ChartUncheckedCreateWithoutTabInput[]
    connectOrCreate?: ChartCreateOrConnectWithoutTabInput | ChartCreateOrConnectWithoutTabInput[]
    createMany?: ChartCreateManyTabInputEnvelope
    connect?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
  }

  export type ChartUncheckedCreateNestedManyWithoutTabInput = {
    create?: XOR<ChartCreateWithoutTabInput, ChartUncheckedCreateWithoutTabInput> | ChartCreateWithoutTabInput[] | ChartUncheckedCreateWithoutTabInput[]
    connectOrCreate?: ChartCreateOrConnectWithoutTabInput | ChartCreateOrConnectWithoutTabInput[]
    createMany?: ChartCreateManyTabInputEnvelope
    connect?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
  }

  export type DashboardUpdateOneRequiredWithoutTabsNestedInput = {
    create?: XOR<DashboardCreateWithoutTabsInput, DashboardUncheckedCreateWithoutTabsInput>
    connectOrCreate?: DashboardCreateOrConnectWithoutTabsInput
    upsert?: DashboardUpsertWithoutTabsInput
    connect?: DashboardWhereUniqueInput
    update?: XOR<XOR<DashboardUpdateToOneWithWhereWithoutTabsInput, DashboardUpdateWithoutTabsInput>, DashboardUncheckedUpdateWithoutTabsInput>
  }

  export type ChartUpdateManyWithoutTabNestedInput = {
    create?: XOR<ChartCreateWithoutTabInput, ChartUncheckedCreateWithoutTabInput> | ChartCreateWithoutTabInput[] | ChartUncheckedCreateWithoutTabInput[]
    connectOrCreate?: ChartCreateOrConnectWithoutTabInput | ChartCreateOrConnectWithoutTabInput[]
    upsert?: ChartUpsertWithWhereUniqueWithoutTabInput | ChartUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: ChartCreateManyTabInputEnvelope
    set?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
    disconnect?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
    delete?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
    connect?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
    update?: ChartUpdateWithWhereUniqueWithoutTabInput | ChartUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: ChartUpdateManyWithWhereWithoutTabInput | ChartUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: ChartScalarWhereInput | ChartScalarWhereInput[]
  }

  export type ChartUncheckedUpdateManyWithoutTabNestedInput = {
    create?: XOR<ChartCreateWithoutTabInput, ChartUncheckedCreateWithoutTabInput> | ChartCreateWithoutTabInput[] | ChartUncheckedCreateWithoutTabInput[]
    connectOrCreate?: ChartCreateOrConnectWithoutTabInput | ChartCreateOrConnectWithoutTabInput[]
    upsert?: ChartUpsertWithWhereUniqueWithoutTabInput | ChartUpsertWithWhereUniqueWithoutTabInput[]
    createMany?: ChartCreateManyTabInputEnvelope
    set?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
    disconnect?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
    delete?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
    connect?: ChartWhereUniqueInput | ChartWhereUniqueInput[]
    update?: ChartUpdateWithWhereUniqueWithoutTabInput | ChartUpdateWithWhereUniqueWithoutTabInput[]
    updateMany?: ChartUpdateManyWithWhereWithoutTabInput | ChartUpdateManyWithWhereWithoutTabInput[]
    deleteMany?: ChartScalarWhereInput | ChartScalarWhereInput[]
  }

  export type TabCreateNestedOneWithoutChartsInput = {
    create?: XOR<TabCreateWithoutChartsInput, TabUncheckedCreateWithoutChartsInput>
    connectOrCreate?: TabCreateOrConnectWithoutChartsInput
    connect?: TabWhereUniqueInput
  }

  export type ChartDataSourceCreateNestedOneWithoutChartInput = {
    create?: XOR<ChartDataSourceCreateWithoutChartInput, ChartDataSourceUncheckedCreateWithoutChartInput>
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutChartInput
    connect?: ChartDataSourceWhereUniqueInput
  }

  export type ChartDataSourceUncheckedCreateNestedOneWithoutChartInput = {
    create?: XOR<ChartDataSourceCreateWithoutChartInput, ChartDataSourceUncheckedCreateWithoutChartInput>
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutChartInput
    connect?: ChartDataSourceWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TabUpdateOneRequiredWithoutChartsNestedInput = {
    create?: XOR<TabCreateWithoutChartsInput, TabUncheckedCreateWithoutChartsInput>
    connectOrCreate?: TabCreateOrConnectWithoutChartsInput
    upsert?: TabUpsertWithoutChartsInput
    connect?: TabWhereUniqueInput
    update?: XOR<XOR<TabUpdateToOneWithWhereWithoutChartsInput, TabUpdateWithoutChartsInput>, TabUncheckedUpdateWithoutChartsInput>
  }

  export type ChartDataSourceUpdateOneWithoutChartNestedInput = {
    create?: XOR<ChartDataSourceCreateWithoutChartInput, ChartDataSourceUncheckedCreateWithoutChartInput>
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutChartInput
    upsert?: ChartDataSourceUpsertWithoutChartInput
    disconnect?: ChartDataSourceWhereInput | boolean
    delete?: ChartDataSourceWhereInput | boolean
    connect?: ChartDataSourceWhereUniqueInput
    update?: XOR<XOR<ChartDataSourceUpdateToOneWithWhereWithoutChartInput, ChartDataSourceUpdateWithoutChartInput>, ChartDataSourceUncheckedUpdateWithoutChartInput>
  }

  export type ChartDataSourceUncheckedUpdateOneWithoutChartNestedInput = {
    create?: XOR<ChartDataSourceCreateWithoutChartInput, ChartDataSourceUncheckedCreateWithoutChartInput>
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutChartInput
    upsert?: ChartDataSourceUpsertWithoutChartInput
    disconnect?: ChartDataSourceWhereInput | boolean
    delete?: ChartDataSourceWhereInput | boolean
    connect?: ChartDataSourceWhereUniqueInput
    update?: XOR<XOR<ChartDataSourceUpdateToOneWithWhereWithoutChartInput, ChartDataSourceUpdateWithoutChartInput>, ChartDataSourceUncheckedUpdateWithoutChartInput>
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type ChartDataSourceCreateNestedManyWithoutFileInput = {
    create?: XOR<ChartDataSourceCreateWithoutFileInput, ChartDataSourceUncheckedCreateWithoutFileInput> | ChartDataSourceCreateWithoutFileInput[] | ChartDataSourceUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutFileInput | ChartDataSourceCreateOrConnectWithoutFileInput[]
    createMany?: ChartDataSourceCreateManyFileInputEnvelope
    connect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
  }

  export type ChartDataSourceUncheckedCreateNestedManyWithoutFileInput = {
    create?: XOR<ChartDataSourceCreateWithoutFileInput, ChartDataSourceUncheckedCreateWithoutFileInput> | ChartDataSourceCreateWithoutFileInput[] | ChartDataSourceUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutFileInput | ChartDataSourceCreateOrConnectWithoutFileInput[]
    createMany?: ChartDataSourceCreateManyFileInputEnvelope
    connect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type ChartDataSourceUpdateManyWithoutFileNestedInput = {
    create?: XOR<ChartDataSourceCreateWithoutFileInput, ChartDataSourceUncheckedCreateWithoutFileInput> | ChartDataSourceCreateWithoutFileInput[] | ChartDataSourceUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutFileInput | ChartDataSourceCreateOrConnectWithoutFileInput[]
    upsert?: ChartDataSourceUpsertWithWhereUniqueWithoutFileInput | ChartDataSourceUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: ChartDataSourceCreateManyFileInputEnvelope
    set?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    disconnect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    delete?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    connect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    update?: ChartDataSourceUpdateWithWhereUniqueWithoutFileInput | ChartDataSourceUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: ChartDataSourceUpdateManyWithWhereWithoutFileInput | ChartDataSourceUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: ChartDataSourceScalarWhereInput | ChartDataSourceScalarWhereInput[]
  }

  export type ChartDataSourceUncheckedUpdateManyWithoutFileNestedInput = {
    create?: XOR<ChartDataSourceCreateWithoutFileInput, ChartDataSourceUncheckedCreateWithoutFileInput> | ChartDataSourceCreateWithoutFileInput[] | ChartDataSourceUncheckedCreateWithoutFileInput[]
    connectOrCreate?: ChartDataSourceCreateOrConnectWithoutFileInput | ChartDataSourceCreateOrConnectWithoutFileInput[]
    upsert?: ChartDataSourceUpsertWithWhereUniqueWithoutFileInput | ChartDataSourceUpsertWithWhereUniqueWithoutFileInput[]
    createMany?: ChartDataSourceCreateManyFileInputEnvelope
    set?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    disconnect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    delete?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    connect?: ChartDataSourceWhereUniqueInput | ChartDataSourceWhereUniqueInput[]
    update?: ChartDataSourceUpdateWithWhereUniqueWithoutFileInput | ChartDataSourceUpdateWithWhereUniqueWithoutFileInput[]
    updateMany?: ChartDataSourceUpdateManyWithWhereWithoutFileInput | ChartDataSourceUpdateManyWithWhereWithoutFileInput[]
    deleteMany?: ChartDataSourceScalarWhereInput | ChartDataSourceScalarWhereInput[]
  }

  export type ChartCreateNestedOneWithoutData_sourceInput = {
    create?: XOR<ChartCreateWithoutData_sourceInput, ChartUncheckedCreateWithoutData_sourceInput>
    connectOrCreate?: ChartCreateOrConnectWithoutData_sourceInput
    connect?: ChartWhereUniqueInput
  }

  export type FileCreateNestedOneWithoutChart_data_sourcesInput = {
    create?: XOR<FileCreateWithoutChart_data_sourcesInput, FileUncheckedCreateWithoutChart_data_sourcesInput>
    connectOrCreate?: FileCreateOrConnectWithoutChart_data_sourcesInput
    connect?: FileWhereUniqueInput
  }

  export type DataConnectionCreateNestedOneWithoutChart_data_sourcesInput = {
    create?: XOR<DataConnectionCreateWithoutChart_data_sourcesInput, DataConnectionUncheckedCreateWithoutChart_data_sourcesInput>
    connectOrCreate?: DataConnectionCreateOrConnectWithoutChart_data_sourcesInput
    connect?: DataConnectionWhereUniqueInput
  }

  export type ChartUpdateOneRequiredWithoutData_sourceNestedInput = {
    create?: XOR<ChartCreateWithoutData_sourceInput, ChartUncheckedCreateWithoutData_sourceInput>
    connectOrCreate?: ChartCreateOrConnectWithoutData_sourceInput
    upsert?: ChartUpsertWithoutData_sourceInput
    connect?: ChartWhereUniqueInput
    update?: XOR<XOR<ChartUpdateToOneWithWhereWithoutData_sourceInput, ChartUpdateWithoutData_sourceInput>, ChartUncheckedUpdateWithoutData_sourceInput>
  }

  export type FileUpdateOneWithoutChart_data_sourcesNestedInput = {
    create?: XOR<FileCreateWithoutChart_data_sourcesInput, FileUncheckedCreateWithoutChart_data_sourcesInput>
    connectOrCreate?: FileCreateOrConnectWithoutChart_data_sourcesInput
    upsert?: FileUpsertWithoutChart_data_sourcesInput
    disconnect?: FileWhereInput | boolean
    delete?: FileWhereInput | boolean
    connect?: FileWhereUniqueInput
    update?: XOR<XOR<FileUpdateToOneWithWhereWithoutChart_data_sourcesInput, FileUpdateWithoutChart_data_sourcesInput>, FileUncheckedUpdateWithoutChart_data_sourcesInput>
  }

  export type DataConnectionUpdateOneWithoutChart_data_sourcesNestedInput = {
    create?: XOR<DataConnectionCreateWithoutChart_data_sourcesInput, DataConnectionUncheckedCreateWithoutChart_data_sourcesInput>
    connectOrCreate?: DataConnectionCreateOrConnectWithoutChart_data_sourcesInput
    upsert?: DataConnectionUpsertWithoutChart_data_sourcesInput
    disconnect?: DataConnectionWhereInput | boolean
    delete?: DataConnectionWhereInput | boolean
    connect?: DataConnectionWhereUniqueInput
    update?: XOR<XOR<DataConnectionUpdateToOneWithWhereWithoutChart_data_sourcesInput, DataConnectionUpdateWithoutChart_data_sourcesInput>, DataConnectionUncheckedUpdateWithoutChart_data_sourcesInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type UserCreateWithoutRoleInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    dashboards?: DashboardCreateNestedManyWithoutUserInput
    data_connections?: DataConnectionCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
    data_connections?: DataConnectionUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role_id?: IntFilter<"User"> | number
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type DashboardCreateWithoutUserInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    tabs?: TabCreateNestedManyWithoutDashboardInput
    dashboard_access?: DashboardAccessCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    tabs?: TabUncheckedCreateNestedManyWithoutDashboardInput
    dashboard_access?: DashboardAccessUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardCreateOrConnectWithoutUserInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput>
  }

  export type DashboardCreateManyUserInputEnvelope = {
    data: DashboardCreateManyUserInput | DashboardCreateManyUserInput[]
  }

  export type DataConnectionCreateWithoutUserInput = {
    connection_name: string
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at?: Date | string
    updated_at?: Date | string
    chart_data_sources?: ChartDataSourceCreateNestedManyWithoutConnectionInput
  }

  export type DataConnectionUncheckedCreateWithoutUserInput = {
    id?: number
    connection_name: string
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at?: Date | string
    updated_at?: Date | string
    chart_data_sources?: ChartDataSourceUncheckedCreateNestedManyWithoutConnectionInput
  }

  export type DataConnectionCreateOrConnectWithoutUserInput = {
    where: DataConnectionWhereUniqueInput
    create: XOR<DataConnectionCreateWithoutUserInput, DataConnectionUncheckedCreateWithoutUserInput>
  }

  export type DataConnectionCreateManyUserInputEnvelope = {
    data: DataConnectionCreateManyUserInput | DataConnectionCreateManyUserInput[]
  }

  export type FileCreateWithoutUserInput = {
    file_name: string
    file_type: string
    file_path: string
    created_at?: Date | string
    chart_data_sources?: ChartDataSourceCreateNestedManyWithoutFileInput
  }

  export type FileUncheckedCreateWithoutUserInput = {
    id?: number
    file_name: string
    file_type: string
    file_path: string
    created_at?: Date | string
    chart_data_sources?: ChartDataSourceUncheckedCreateNestedManyWithoutFileInput
  }

  export type FileCreateOrConnectWithoutUserInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileCreateManyUserInputEnvelope = {
    data: FileCreateManyUserInput | FileCreateManyUserInput[]
  }

  export type DashboardAccessCreateWithoutUserInput = {
    dashboard: DashboardCreateNestedOneWithoutDashboard_accessInput
  }

  export type DashboardAccessUncheckedCreateWithoutUserInput = {
    id?: number
    dashboard_id: number
  }

  export type DashboardAccessCreateOrConnectWithoutUserInput = {
    where: DashboardAccessWhereUniqueInput
    create: XOR<DashboardAccessCreateWithoutUserInput, DashboardAccessUncheckedCreateWithoutUserInput>
  }

  export type DashboardAccessCreateManyUserInputEnvelope = {
    data: DashboardAccessCreateManyUserInput | DashboardAccessCreateManyUserInput[]
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DashboardUpsertWithWhereUniqueWithoutUserInput = {
    where: DashboardWhereUniqueInput
    update: XOR<DashboardUpdateWithoutUserInput, DashboardUncheckedUpdateWithoutUserInput>
    create: XOR<DashboardCreateWithoutUserInput, DashboardUncheckedCreateWithoutUserInput>
  }

  export type DashboardUpdateWithWhereUniqueWithoutUserInput = {
    where: DashboardWhereUniqueInput
    data: XOR<DashboardUpdateWithoutUserInput, DashboardUncheckedUpdateWithoutUserInput>
  }

  export type DashboardUpdateManyWithWhereWithoutUserInput = {
    where: DashboardScalarWhereInput
    data: XOR<DashboardUpdateManyMutationInput, DashboardUncheckedUpdateManyWithoutUserInput>
  }

  export type DashboardScalarWhereInput = {
    AND?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
    OR?: DashboardScalarWhereInput[]
    NOT?: DashboardScalarWhereInput | DashboardScalarWhereInput[]
    id?: IntFilter<"Dashboard"> | number
    name?: StringFilter<"Dashboard"> | string
    user_id?: IntFilter<"Dashboard"> | number
    created_at?: DateTimeFilter<"Dashboard"> | Date | string
    updated_at?: DateTimeFilter<"Dashboard"> | Date | string
  }

  export type DataConnectionUpsertWithWhereUniqueWithoutUserInput = {
    where: DataConnectionWhereUniqueInput
    update: XOR<DataConnectionUpdateWithoutUserInput, DataConnectionUncheckedUpdateWithoutUserInput>
    create: XOR<DataConnectionCreateWithoutUserInput, DataConnectionUncheckedCreateWithoutUserInput>
  }

  export type DataConnectionUpdateWithWhereUniqueWithoutUserInput = {
    where: DataConnectionWhereUniqueInput
    data: XOR<DataConnectionUpdateWithoutUserInput, DataConnectionUncheckedUpdateWithoutUserInput>
  }

  export type DataConnectionUpdateManyWithWhereWithoutUserInput = {
    where: DataConnectionScalarWhereInput
    data: XOR<DataConnectionUpdateManyMutationInput, DataConnectionUncheckedUpdateManyWithoutUserInput>
  }

  export type DataConnectionScalarWhereInput = {
    AND?: DataConnectionScalarWhereInput | DataConnectionScalarWhereInput[]
    OR?: DataConnectionScalarWhereInput[]
    NOT?: DataConnectionScalarWhereInput | DataConnectionScalarWhereInput[]
    id?: IntFilter<"DataConnection"> | number
    connection_name?: StringFilter<"DataConnection"> | string
    user_id?: IntFilter<"DataConnection"> | number
    db_type?: StringFilter<"DataConnection"> | string
    host?: StringFilter<"DataConnection"> | string
    username?: StringFilter<"DataConnection"> | string
    password?: StringFilter<"DataConnection"> | string
    database_name?: StringFilter<"DataConnection"> | string
    created_at?: DateTimeFilter<"DataConnection"> | Date | string
    updated_at?: DateTimeFilter<"DataConnection"> | Date | string
  }

  export type FileUpsertWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileUpdateWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
  }

  export type FileUpdateManyWithWhereWithoutUserInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutUserInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    id?: IntFilter<"File"> | number
    user_id?: IntFilter<"File"> | number
    file_name?: StringFilter<"File"> | string
    file_type?: StringFilter<"File"> | string
    file_path?: StringFilter<"File"> | string
    created_at?: DateTimeFilter<"File"> | Date | string
  }

  export type DashboardAccessUpsertWithWhereUniqueWithoutUserInput = {
    where: DashboardAccessWhereUniqueInput
    update: XOR<DashboardAccessUpdateWithoutUserInput, DashboardAccessUncheckedUpdateWithoutUserInput>
    create: XOR<DashboardAccessCreateWithoutUserInput, DashboardAccessUncheckedCreateWithoutUserInput>
  }

  export type DashboardAccessUpdateWithWhereUniqueWithoutUserInput = {
    where: DashboardAccessWhereUniqueInput
    data: XOR<DashboardAccessUpdateWithoutUserInput, DashboardAccessUncheckedUpdateWithoutUserInput>
  }

  export type DashboardAccessUpdateManyWithWhereWithoutUserInput = {
    where: DashboardAccessScalarWhereInput
    data: XOR<DashboardAccessUpdateManyMutationInput, DashboardAccessUncheckedUpdateManyWithoutUserInput>
  }

  export type DashboardAccessScalarWhereInput = {
    AND?: DashboardAccessScalarWhereInput | DashboardAccessScalarWhereInput[]
    OR?: DashboardAccessScalarWhereInput[]
    NOT?: DashboardAccessScalarWhereInput | DashboardAccessScalarWhereInput[]
    id?: IntFilter<"DashboardAccess"> | number
    dashboard_id?: IntFilter<"DashboardAccess"> | number
    user_id?: IntFilter<"DashboardAccess"> | number
  }

  export type UserCreateWithoutData_connectionsInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    dashboards?: DashboardCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutData_connectionsInput = {
    id?: number
    name: string
    email: string
    password: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutData_connectionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutData_connectionsInput, UserUncheckedCreateWithoutData_connectionsInput>
  }

  export type ChartDataSourceCreateWithoutConnectionInput = {
    type: string
    chart: ChartCreateNestedOneWithoutData_sourceInput
    file?: FileCreateNestedOneWithoutChart_data_sourcesInput
  }

  export type ChartDataSourceUncheckedCreateWithoutConnectionInput = {
    id?: number
    chart_id: number
    type: string
    file_id?: number | null
  }

  export type ChartDataSourceCreateOrConnectWithoutConnectionInput = {
    where: ChartDataSourceWhereUniqueInput
    create: XOR<ChartDataSourceCreateWithoutConnectionInput, ChartDataSourceUncheckedCreateWithoutConnectionInput>
  }

  export type ChartDataSourceCreateManyConnectionInputEnvelope = {
    data: ChartDataSourceCreateManyConnectionInput | ChartDataSourceCreateManyConnectionInput[]
  }

  export type UserUpsertWithoutData_connectionsInput = {
    update: XOR<UserUpdateWithoutData_connectionsInput, UserUncheckedUpdateWithoutData_connectionsInput>
    create: XOR<UserCreateWithoutData_connectionsInput, UserUncheckedCreateWithoutData_connectionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutData_connectionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutData_connectionsInput, UserUncheckedUpdateWithoutData_connectionsInput>
  }

  export type UserUpdateWithoutData_connectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutData_connectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChartDataSourceUpsertWithWhereUniqueWithoutConnectionInput = {
    where: ChartDataSourceWhereUniqueInput
    update: XOR<ChartDataSourceUpdateWithoutConnectionInput, ChartDataSourceUncheckedUpdateWithoutConnectionInput>
    create: XOR<ChartDataSourceCreateWithoutConnectionInput, ChartDataSourceUncheckedCreateWithoutConnectionInput>
  }

  export type ChartDataSourceUpdateWithWhereUniqueWithoutConnectionInput = {
    where: ChartDataSourceWhereUniqueInput
    data: XOR<ChartDataSourceUpdateWithoutConnectionInput, ChartDataSourceUncheckedUpdateWithoutConnectionInput>
  }

  export type ChartDataSourceUpdateManyWithWhereWithoutConnectionInput = {
    where: ChartDataSourceScalarWhereInput
    data: XOR<ChartDataSourceUpdateManyMutationInput, ChartDataSourceUncheckedUpdateManyWithoutConnectionInput>
  }

  export type ChartDataSourceScalarWhereInput = {
    AND?: ChartDataSourceScalarWhereInput | ChartDataSourceScalarWhereInput[]
    OR?: ChartDataSourceScalarWhereInput[]
    NOT?: ChartDataSourceScalarWhereInput | ChartDataSourceScalarWhereInput[]
    id?: IntFilter<"ChartDataSource"> | number
    chart_id?: IntFilter<"ChartDataSource"> | number
    type?: StringFilter<"ChartDataSource"> | string
    file_id?: IntNullableFilter<"ChartDataSource"> | number | null
    connection_id?: IntNullableFilter<"ChartDataSource"> | number | null
  }

  export type UserCreateWithoutDashboardsInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    data_connections?: DataConnectionCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDashboardsInput = {
    id?: number
    name: string
    email: string
    password: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    data_connections?: DataConnectionUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDashboardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
  }

  export type TabCreateWithoutDashboardInput = {
    name: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
    charts?: ChartCreateNestedManyWithoutTabInput
  }

  export type TabUncheckedCreateWithoutDashboardInput = {
    id?: number
    name: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
    charts?: ChartUncheckedCreateNestedManyWithoutTabInput
  }

  export type TabCreateOrConnectWithoutDashboardInput = {
    where: TabWhereUniqueInput
    create: XOR<TabCreateWithoutDashboardInput, TabUncheckedCreateWithoutDashboardInput>
  }

  export type TabCreateManyDashboardInputEnvelope = {
    data: TabCreateManyDashboardInput | TabCreateManyDashboardInput[]
  }

  export type DashboardAccessCreateWithoutDashboardInput = {
    user: UserCreateNestedOneWithoutDashboard_accessInput
  }

  export type DashboardAccessUncheckedCreateWithoutDashboardInput = {
    id?: number
    user_id: number
  }

  export type DashboardAccessCreateOrConnectWithoutDashboardInput = {
    where: DashboardAccessWhereUniqueInput
    create: XOR<DashboardAccessCreateWithoutDashboardInput, DashboardAccessUncheckedCreateWithoutDashboardInput>
  }

  export type DashboardAccessCreateManyDashboardInputEnvelope = {
    data: DashboardAccessCreateManyDashboardInput | DashboardAccessCreateManyDashboardInput[]
  }

  export type UserUpsertWithoutDashboardsInput = {
    update: XOR<UserUpdateWithoutDashboardsInput, UserUncheckedUpdateWithoutDashboardsInput>
    create: XOR<UserCreateWithoutDashboardsInput, UserUncheckedCreateWithoutDashboardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDashboardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDashboardsInput, UserUncheckedUpdateWithoutDashboardsInput>
  }

  export type UserUpdateWithoutDashboardsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    data_connections?: DataConnectionUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboardsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_connections?: DataConnectionUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TabUpsertWithWhereUniqueWithoutDashboardInput = {
    where: TabWhereUniqueInput
    update: XOR<TabUpdateWithoutDashboardInput, TabUncheckedUpdateWithoutDashboardInput>
    create: XOR<TabCreateWithoutDashboardInput, TabUncheckedCreateWithoutDashboardInput>
  }

  export type TabUpdateWithWhereUniqueWithoutDashboardInput = {
    where: TabWhereUniqueInput
    data: XOR<TabUpdateWithoutDashboardInput, TabUncheckedUpdateWithoutDashboardInput>
  }

  export type TabUpdateManyWithWhereWithoutDashboardInput = {
    where: TabScalarWhereInput
    data: XOR<TabUpdateManyMutationInput, TabUncheckedUpdateManyWithoutDashboardInput>
  }

  export type TabScalarWhereInput = {
    AND?: TabScalarWhereInput | TabScalarWhereInput[]
    OR?: TabScalarWhereInput[]
    NOT?: TabScalarWhereInput | TabScalarWhereInput[]
    id?: IntFilter<"Tab"> | number
    dashboard_id?: IntFilter<"Tab"> | number
    name?: StringFilter<"Tab"> | string
    order_index?: IntFilter<"Tab"> | number
    created_at?: DateTimeFilter<"Tab"> | Date | string
    updated_at?: DateTimeFilter<"Tab"> | Date | string
  }

  export type DashboardAccessUpsertWithWhereUniqueWithoutDashboardInput = {
    where: DashboardAccessWhereUniqueInput
    update: XOR<DashboardAccessUpdateWithoutDashboardInput, DashboardAccessUncheckedUpdateWithoutDashboardInput>
    create: XOR<DashboardAccessCreateWithoutDashboardInput, DashboardAccessUncheckedCreateWithoutDashboardInput>
  }

  export type DashboardAccessUpdateWithWhereUniqueWithoutDashboardInput = {
    where: DashboardAccessWhereUniqueInput
    data: XOR<DashboardAccessUpdateWithoutDashboardInput, DashboardAccessUncheckedUpdateWithoutDashboardInput>
  }

  export type DashboardAccessUpdateManyWithWhereWithoutDashboardInput = {
    where: DashboardAccessScalarWhereInput
    data: XOR<DashboardAccessUpdateManyMutationInput, DashboardAccessUncheckedUpdateManyWithoutDashboardInput>
  }

  export type DashboardCreateWithoutDashboard_accessInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutDashboardsInput
    tabs?: TabCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateWithoutDashboard_accessInput = {
    id?: number
    name: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    tabs?: TabUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardCreateOrConnectWithoutDashboard_accessInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutDashboard_accessInput, DashboardUncheckedCreateWithoutDashboard_accessInput>
  }

  export type UserCreateWithoutDashboard_accessInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    dashboards?: DashboardCreateNestedManyWithoutUserInput
    data_connections?: DataConnectionCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDashboard_accessInput = {
    id?: number
    name: string
    email: string
    password: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
    data_connections?: DataConnectionUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDashboard_accessInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDashboard_accessInput, UserUncheckedCreateWithoutDashboard_accessInput>
  }

  export type DashboardUpsertWithoutDashboard_accessInput = {
    update: XOR<DashboardUpdateWithoutDashboard_accessInput, DashboardUncheckedUpdateWithoutDashboard_accessInput>
    create: XOR<DashboardCreateWithoutDashboard_accessInput, DashboardUncheckedCreateWithoutDashboard_accessInput>
    where?: DashboardWhereInput
  }

  export type DashboardUpdateToOneWithWhereWithoutDashboard_accessInput = {
    where?: DashboardWhereInput
    data: XOR<DashboardUpdateWithoutDashboard_accessInput, DashboardUncheckedUpdateWithoutDashboard_accessInput>
  }

  export type DashboardUpdateWithoutDashboard_accessInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDashboardsNestedInput
    tabs?: TabUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateWithoutDashboard_accessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tabs?: TabUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type UserUpsertWithoutDashboard_accessInput = {
    update: XOR<UserUpdateWithoutDashboard_accessInput, UserUncheckedUpdateWithoutDashboard_accessInput>
    create: XOR<UserCreateWithoutDashboard_accessInput, UserUncheckedCreateWithoutDashboard_accessInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDashboard_accessInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDashboard_accessInput, UserUncheckedUpdateWithoutDashboard_accessInput>
  }

  export type UserUpdateWithoutDashboard_accessInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
    data_connections?: DataConnectionUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDashboard_accessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
    data_connections?: DataConnectionUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DashboardCreateWithoutTabsInput = {
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutDashboardsInput
    dashboard_access?: DashboardAccessCreateNestedManyWithoutDashboardInput
  }

  export type DashboardUncheckedCreateWithoutTabsInput = {
    id?: number
    name: string
    user_id: number
    created_at?: Date | string
    updated_at?: Date | string
    dashboard_access?: DashboardAccessUncheckedCreateNestedManyWithoutDashboardInput
  }

  export type DashboardCreateOrConnectWithoutTabsInput = {
    where: DashboardWhereUniqueInput
    create: XOR<DashboardCreateWithoutTabsInput, DashboardUncheckedCreateWithoutTabsInput>
  }

  export type ChartCreateWithoutTabInput = {
    name: string
    chart_type: string
    config: string
    position_x?: number
    position_y?: number
    width?: number
    height?: number
    created_at?: Date | string
    updated_at?: Date | string
    data_source?: ChartDataSourceCreateNestedOneWithoutChartInput
  }

  export type ChartUncheckedCreateWithoutTabInput = {
    id?: number
    name: string
    chart_type: string
    config: string
    position_x?: number
    position_y?: number
    width?: number
    height?: number
    created_at?: Date | string
    updated_at?: Date | string
    data_source?: ChartDataSourceUncheckedCreateNestedOneWithoutChartInput
  }

  export type ChartCreateOrConnectWithoutTabInput = {
    where: ChartWhereUniqueInput
    create: XOR<ChartCreateWithoutTabInput, ChartUncheckedCreateWithoutTabInput>
  }

  export type ChartCreateManyTabInputEnvelope = {
    data: ChartCreateManyTabInput | ChartCreateManyTabInput[]
  }

  export type DashboardUpsertWithoutTabsInput = {
    update: XOR<DashboardUpdateWithoutTabsInput, DashboardUncheckedUpdateWithoutTabsInput>
    create: XOR<DashboardCreateWithoutTabsInput, DashboardUncheckedCreateWithoutTabsInput>
    where?: DashboardWhereInput
  }

  export type DashboardUpdateToOneWithWhereWithoutTabsInput = {
    where?: DashboardWhereInput
    data: XOR<DashboardUpdateWithoutTabsInput, DashboardUncheckedUpdateWithoutTabsInput>
  }

  export type DashboardUpdateWithoutTabsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDashboardsNestedInput
    dashboard_access?: DashboardAccessUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateWithoutTabsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboard_access?: DashboardAccessUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type ChartUpsertWithWhereUniqueWithoutTabInput = {
    where: ChartWhereUniqueInput
    update: XOR<ChartUpdateWithoutTabInput, ChartUncheckedUpdateWithoutTabInput>
    create: XOR<ChartCreateWithoutTabInput, ChartUncheckedCreateWithoutTabInput>
  }

  export type ChartUpdateWithWhereUniqueWithoutTabInput = {
    where: ChartWhereUniqueInput
    data: XOR<ChartUpdateWithoutTabInput, ChartUncheckedUpdateWithoutTabInput>
  }

  export type ChartUpdateManyWithWhereWithoutTabInput = {
    where: ChartScalarWhereInput
    data: XOR<ChartUpdateManyMutationInput, ChartUncheckedUpdateManyWithoutTabInput>
  }

  export type ChartScalarWhereInput = {
    AND?: ChartScalarWhereInput | ChartScalarWhereInput[]
    OR?: ChartScalarWhereInput[]
    NOT?: ChartScalarWhereInput | ChartScalarWhereInput[]
    id?: IntFilter<"Chart"> | number
    tab_id?: IntFilter<"Chart"> | number
    name?: StringFilter<"Chart"> | string
    chart_type?: StringFilter<"Chart"> | string
    config?: StringFilter<"Chart"> | string
    position_x?: FloatFilter<"Chart"> | number
    position_y?: FloatFilter<"Chart"> | number
    width?: FloatFilter<"Chart"> | number
    height?: FloatFilter<"Chart"> | number
    created_at?: DateTimeFilter<"Chart"> | Date | string
    updated_at?: DateTimeFilter<"Chart"> | Date | string
  }

  export type TabCreateWithoutChartsInput = {
    name: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
    dashboard: DashboardCreateNestedOneWithoutTabsInput
  }

  export type TabUncheckedCreateWithoutChartsInput = {
    id?: number
    dashboard_id: number
    name: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TabCreateOrConnectWithoutChartsInput = {
    where: TabWhereUniqueInput
    create: XOR<TabCreateWithoutChartsInput, TabUncheckedCreateWithoutChartsInput>
  }

  export type ChartDataSourceCreateWithoutChartInput = {
    type: string
    file?: FileCreateNestedOneWithoutChart_data_sourcesInput
    connection?: DataConnectionCreateNestedOneWithoutChart_data_sourcesInput
  }

  export type ChartDataSourceUncheckedCreateWithoutChartInput = {
    id?: number
    type: string
    file_id?: number | null
    connection_id?: number | null
  }

  export type ChartDataSourceCreateOrConnectWithoutChartInput = {
    where: ChartDataSourceWhereUniqueInput
    create: XOR<ChartDataSourceCreateWithoutChartInput, ChartDataSourceUncheckedCreateWithoutChartInput>
  }

  export type TabUpsertWithoutChartsInput = {
    update: XOR<TabUpdateWithoutChartsInput, TabUncheckedUpdateWithoutChartsInput>
    create: XOR<TabCreateWithoutChartsInput, TabUncheckedCreateWithoutChartsInput>
    where?: TabWhereInput
  }

  export type TabUpdateToOneWithWhereWithoutChartsInput = {
    where?: TabWhereInput
    data: XOR<TabUpdateWithoutChartsInput, TabUncheckedUpdateWithoutChartsInput>
  }

  export type TabUpdateWithoutChartsInput = {
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboard?: DashboardUpdateOneRequiredWithoutTabsNestedInput
  }

  export type TabUncheckedUpdateWithoutChartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    dashboard_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartDataSourceUpsertWithoutChartInput = {
    update: XOR<ChartDataSourceUpdateWithoutChartInput, ChartDataSourceUncheckedUpdateWithoutChartInput>
    create: XOR<ChartDataSourceCreateWithoutChartInput, ChartDataSourceUncheckedCreateWithoutChartInput>
    where?: ChartDataSourceWhereInput
  }

  export type ChartDataSourceUpdateToOneWithWhereWithoutChartInput = {
    where?: ChartDataSourceWhereInput
    data: XOR<ChartDataSourceUpdateWithoutChartInput, ChartDataSourceUncheckedUpdateWithoutChartInput>
  }

  export type ChartDataSourceUpdateWithoutChartInput = {
    type?: StringFieldUpdateOperationsInput | string
    file?: FileUpdateOneWithoutChart_data_sourcesNestedInput
    connection?: DataConnectionUpdateOneWithoutChart_data_sourcesNestedInput
  }

  export type ChartDataSourceUncheckedUpdateWithoutChartInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    file_id?: NullableIntFieldUpdateOperationsInput | number | null
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateWithoutFilesInput = {
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
    role: RoleCreateNestedOneWithoutUsersInput
    dashboards?: DashboardCreateNestedManyWithoutUserInput
    data_connections?: DataConnectionCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: number
    name: string
    email: string
    password: string
    role_id: number
    created_at?: Date | string
    updated_at?: Date | string
    dashboards?: DashboardUncheckedCreateNestedManyWithoutUserInput
    data_connections?: DataConnectionUncheckedCreateNestedManyWithoutUserInput
    dashboard_access?: DashboardAccessUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type ChartDataSourceCreateWithoutFileInput = {
    type: string
    chart: ChartCreateNestedOneWithoutData_sourceInput
    connection?: DataConnectionCreateNestedOneWithoutChart_data_sourcesInput
  }

  export type ChartDataSourceUncheckedCreateWithoutFileInput = {
    id?: number
    chart_id: number
    type: string
    connection_id?: number | null
  }

  export type ChartDataSourceCreateOrConnectWithoutFileInput = {
    where: ChartDataSourceWhereUniqueInput
    create: XOR<ChartDataSourceCreateWithoutFileInput, ChartDataSourceUncheckedCreateWithoutFileInput>
  }

  export type ChartDataSourceCreateManyFileInputEnvelope = {
    data: ChartDataSourceCreateManyFileInput | ChartDataSourceCreateManyFileInput[]
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
    data_connections?: DataConnectionUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
    data_connections?: DataConnectionUncheckedUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChartDataSourceUpsertWithWhereUniqueWithoutFileInput = {
    where: ChartDataSourceWhereUniqueInput
    update: XOR<ChartDataSourceUpdateWithoutFileInput, ChartDataSourceUncheckedUpdateWithoutFileInput>
    create: XOR<ChartDataSourceCreateWithoutFileInput, ChartDataSourceUncheckedCreateWithoutFileInput>
  }

  export type ChartDataSourceUpdateWithWhereUniqueWithoutFileInput = {
    where: ChartDataSourceWhereUniqueInput
    data: XOR<ChartDataSourceUpdateWithoutFileInput, ChartDataSourceUncheckedUpdateWithoutFileInput>
  }

  export type ChartDataSourceUpdateManyWithWhereWithoutFileInput = {
    where: ChartDataSourceScalarWhereInput
    data: XOR<ChartDataSourceUpdateManyMutationInput, ChartDataSourceUncheckedUpdateManyWithoutFileInput>
  }

  export type ChartCreateWithoutData_sourceInput = {
    name: string
    chart_type: string
    config: string
    position_x?: number
    position_y?: number
    width?: number
    height?: number
    created_at?: Date | string
    updated_at?: Date | string
    tab: TabCreateNestedOneWithoutChartsInput
  }

  export type ChartUncheckedCreateWithoutData_sourceInput = {
    id?: number
    tab_id: number
    name: string
    chart_type: string
    config: string
    position_x?: number
    position_y?: number
    width?: number
    height?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChartCreateOrConnectWithoutData_sourceInput = {
    where: ChartWhereUniqueInput
    create: XOR<ChartCreateWithoutData_sourceInput, ChartUncheckedCreateWithoutData_sourceInput>
  }

  export type FileCreateWithoutChart_data_sourcesInput = {
    file_name: string
    file_type: string
    file_path: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutChart_data_sourcesInput = {
    id?: number
    user_id: number
    file_name: string
    file_type: string
    file_path: string
    created_at?: Date | string
  }

  export type FileCreateOrConnectWithoutChart_data_sourcesInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutChart_data_sourcesInput, FileUncheckedCreateWithoutChart_data_sourcesInput>
  }

  export type DataConnectionCreateWithoutChart_data_sourcesInput = {
    connection_name: string
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutData_connectionsInput
  }

  export type DataConnectionUncheckedCreateWithoutChart_data_sourcesInput = {
    id?: number
    connection_name: string
    user_id: number
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DataConnectionCreateOrConnectWithoutChart_data_sourcesInput = {
    where: DataConnectionWhereUniqueInput
    create: XOR<DataConnectionCreateWithoutChart_data_sourcesInput, DataConnectionUncheckedCreateWithoutChart_data_sourcesInput>
  }

  export type ChartUpsertWithoutData_sourceInput = {
    update: XOR<ChartUpdateWithoutData_sourceInput, ChartUncheckedUpdateWithoutData_sourceInput>
    create: XOR<ChartCreateWithoutData_sourceInput, ChartUncheckedCreateWithoutData_sourceInput>
    where?: ChartWhereInput
  }

  export type ChartUpdateToOneWithWhereWithoutData_sourceInput = {
    where?: ChartWhereInput
    data: XOR<ChartUpdateWithoutData_sourceInput, ChartUncheckedUpdateWithoutData_sourceInput>
  }

  export type ChartUpdateWithoutData_sourceInput = {
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tab?: TabUpdateOneRequiredWithoutChartsNestedInput
  }

  export type ChartUncheckedUpdateWithoutData_sourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    tab_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpsertWithoutChart_data_sourcesInput = {
    update: XOR<FileUpdateWithoutChart_data_sourcesInput, FileUncheckedUpdateWithoutChart_data_sourcesInput>
    create: XOR<FileCreateWithoutChart_data_sourcesInput, FileUncheckedCreateWithoutChart_data_sourcesInput>
    where?: FileWhereInput
  }

  export type FileUpdateToOneWithWhereWithoutChart_data_sourcesInput = {
    where?: FileWhereInput
    data: XOR<FileUpdateWithoutChart_data_sourcesInput, FileUncheckedUpdateWithoutChart_data_sourcesInput>
  }

  export type FileUpdateWithoutChart_data_sourcesInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateWithoutChart_data_sourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataConnectionUpsertWithoutChart_data_sourcesInput = {
    update: XOR<DataConnectionUpdateWithoutChart_data_sourcesInput, DataConnectionUncheckedUpdateWithoutChart_data_sourcesInput>
    create: XOR<DataConnectionCreateWithoutChart_data_sourcesInput, DataConnectionUncheckedCreateWithoutChart_data_sourcesInput>
    where?: DataConnectionWhereInput
  }

  export type DataConnectionUpdateToOneWithWhereWithoutChart_data_sourcesInput = {
    where?: DataConnectionWhereInput
    data: XOR<DataConnectionUpdateWithoutChart_data_sourcesInput, DataConnectionUncheckedUpdateWithoutChart_data_sourcesInput>
  }

  export type DataConnectionUpdateWithoutChart_data_sourcesInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutData_connectionsNestedInput
  }

  export type DataConnectionUncheckedUpdateWithoutChart_data_sourcesInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRoleInput = {
    id?: number
    name: string
    email: string
    password: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutRoleInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUpdateManyWithoutUserNestedInput
    data_connections?: DataConnectionUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    dashboards?: DashboardUncheckedUpdateManyWithoutUserNestedInput
    data_connections?: DataConnectionUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
    dashboard_access?: DashboardAccessUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardCreateManyUserInput = {
    id?: number
    name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DataConnectionCreateManyUserInput = {
    id?: number
    connection_name: string
    db_type: string
    host: string
    username: string
    password: string
    database_name: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FileCreateManyUserInput = {
    id?: number
    file_name: string
    file_type: string
    file_path: string
    created_at?: Date | string
  }

  export type DashboardAccessCreateManyUserInput = {
    id?: number
    dashboard_id: number
  }

  export type DashboardUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tabs?: TabUpdateManyWithoutDashboardNestedInput
    dashboard_access?: DashboardAccessUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    tabs?: TabUncheckedUpdateManyWithoutDashboardNestedInput
    dashboard_access?: DashboardAccessUncheckedUpdateManyWithoutDashboardNestedInput
  }

  export type DashboardUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DataConnectionUpdateWithoutUserInput = {
    connection_name?: StringFieldUpdateOperationsInput | string
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chart_data_sources?: ChartDataSourceUpdateManyWithoutConnectionNestedInput
  }

  export type DataConnectionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chart_data_sources?: ChartDataSourceUncheckedUpdateManyWithoutConnectionNestedInput
  }

  export type DataConnectionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    connection_name?: StringFieldUpdateOperationsInput | string
    db_type?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    database_name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUpdateWithoutUserInput = {
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chart_data_sources?: ChartDataSourceUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    chart_data_sources?: ChartDataSourceUncheckedUpdateManyWithoutFileNestedInput
  }

  export type FileUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    file_name?: StringFieldUpdateOperationsInput | string
    file_type?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardAccessUpdateWithoutUserInput = {
    dashboard?: DashboardUpdateOneRequiredWithoutDashboard_accessNestedInput
  }

  export type DashboardAccessUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dashboard_id?: IntFieldUpdateOperationsInput | number
  }

  export type DashboardAccessUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    dashboard_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChartDataSourceCreateManyConnectionInput = {
    id?: number
    chart_id: number
    type: string
    file_id?: number | null
  }

  export type ChartDataSourceUpdateWithoutConnectionInput = {
    type?: StringFieldUpdateOperationsInput | string
    chart?: ChartUpdateOneRequiredWithoutData_sourceNestedInput
    file?: FileUpdateOneWithoutChart_data_sourcesNestedInput
  }

  export type ChartDataSourceUncheckedUpdateWithoutConnectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    chart_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    file_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChartDataSourceUncheckedUpdateManyWithoutConnectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    chart_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    file_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TabCreateManyDashboardInput = {
    id?: number
    name: string
    order_index?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DashboardAccessCreateManyDashboardInput = {
    id?: number
    user_id: number
  }

  export type TabUpdateWithoutDashboardInput = {
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charts?: ChartUpdateManyWithoutTabNestedInput
  }

  export type TabUncheckedUpdateWithoutDashboardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    charts?: ChartUncheckedUpdateManyWithoutTabNestedInput
  }

  export type TabUncheckedUpdateManyWithoutDashboardInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    order_index?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DashboardAccessUpdateWithoutDashboardInput = {
    user?: UserUpdateOneRequiredWithoutDashboard_accessNestedInput
  }

  export type DashboardAccessUncheckedUpdateWithoutDashboardInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DashboardAccessUncheckedUpdateManyWithoutDashboardInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type ChartCreateManyTabInput = {
    id?: number
    name: string
    chart_type: string
    config: string
    position_x?: number
    position_y?: number
    width?: number
    height?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ChartUpdateWithoutTabInput = {
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_source?: ChartDataSourceUpdateOneWithoutChartNestedInput
  }

  export type ChartUncheckedUpdateWithoutTabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    data_source?: ChartDataSourceUncheckedUpdateOneWithoutChartNestedInput
  }

  export type ChartUncheckedUpdateManyWithoutTabInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    chart_type?: StringFieldUpdateOperationsInput | string
    config?: StringFieldUpdateOperationsInput | string
    position_x?: FloatFieldUpdateOperationsInput | number
    position_y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChartDataSourceCreateManyFileInput = {
    id?: number
    chart_id: number
    type: string
    connection_id?: number | null
  }

  export type ChartDataSourceUpdateWithoutFileInput = {
    type?: StringFieldUpdateOperationsInput | string
    chart?: ChartUpdateOneRequiredWithoutData_sourceNestedInput
    connection?: DataConnectionUpdateOneWithoutChart_data_sourcesNestedInput
  }

  export type ChartDataSourceUncheckedUpdateWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    chart_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ChartDataSourceUncheckedUpdateManyWithoutFileInput = {
    id?: IntFieldUpdateOperationsInput | number
    chart_id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    connection_id?: NullableIntFieldUpdateOperationsInput | number | null
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