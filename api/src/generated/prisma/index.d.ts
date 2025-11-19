
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
 * Model Secretario
 * 
 */
export type Secretario = $Result.DefaultSelection<Prisma.$SecretarioPayload>
/**
 * Model Veterinario
 * 
 */
export type Veterinario = $Result.DefaultSelection<Prisma.$VeterinarioPayload>
/**
 * Model Animal
 * 
 */
export type Animal = $Result.DefaultSelection<Prisma.$AnimalPayload>
/**
 * Model Consulta
 * 
 */
export type Consulta = $Result.DefaultSelection<Prisma.$ConsultaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Secretarios
 * const secretarios = await prisma.secretario.findMany()
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
   * // Fetch zero or more Secretarios
   * const secretarios = await prisma.secretario.findMany()
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
   * `prisma.secretario`: Exposes CRUD operations for the **Secretario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Secretarios
    * const secretarios = await prisma.secretario.findMany()
    * ```
    */
  get secretario(): Prisma.SecretarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.veterinario`: Exposes CRUD operations for the **Veterinario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Veterinarios
    * const veterinarios = await prisma.veterinario.findMany()
    * ```
    */
  get veterinario(): Prisma.VeterinarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animal`: Exposes CRUD operations for the **Animal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Animals
    * const animals = await prisma.animal.findMany()
    * ```
    */
  get animal(): Prisma.AnimalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consulta`: Exposes CRUD operations for the **Consulta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consultas
    * const consultas = await prisma.consulta.findMany()
    * ```
    */
  get consulta(): Prisma.ConsultaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.3
   * Query Engine version: bb420e667c1820a8c05a38023385f6cc7ef8e83a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Secretario: 'Secretario',
    Veterinario: 'Veterinario',
    Animal: 'Animal',
    Consulta: 'Consulta'
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
      modelProps: "secretario" | "veterinario" | "animal" | "consulta"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Secretario: {
        payload: Prisma.$SecretarioPayload<ExtArgs>
        fields: Prisma.SecretarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          findFirst: {
            args: Prisma.SecretarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          findMany: {
            args: Prisma.SecretarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>[]
          }
          create: {
            args: Prisma.SecretarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          createMany: {
            args: Prisma.SecretarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>[]
          }
          delete: {
            args: Prisma.SecretarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          update: {
            args: Prisma.SecretarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          deleteMany: {
            args: Prisma.SecretarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecretarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>[]
          }
          upsert: {
            args: Prisma.SecretarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretarioPayload>
          }
          aggregate: {
            args: Prisma.SecretarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretario>
          }
          groupBy: {
            args: Prisma.SecretarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretarioCountArgs<ExtArgs>
            result: $Utils.Optional<SecretarioCountAggregateOutputType> | number
          }
        }
      }
      Veterinario: {
        payload: Prisma.$VeterinarioPayload<ExtArgs>
        fields: Prisma.VeterinarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VeterinarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VeterinarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>
          }
          findFirst: {
            args: Prisma.VeterinarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VeterinarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>
          }
          findMany: {
            args: Prisma.VeterinarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>[]
          }
          create: {
            args: Prisma.VeterinarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>
          }
          createMany: {
            args: Prisma.VeterinarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VeterinarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>[]
          }
          delete: {
            args: Prisma.VeterinarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>
          }
          update: {
            args: Prisma.VeterinarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>
          }
          deleteMany: {
            args: Prisma.VeterinarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VeterinarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VeterinarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>[]
          }
          upsert: {
            args: Prisma.VeterinarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VeterinarioPayload>
          }
          aggregate: {
            args: Prisma.VeterinarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVeterinario>
          }
          groupBy: {
            args: Prisma.VeterinarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<VeterinarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.VeterinarioCountArgs<ExtArgs>
            result: $Utils.Optional<VeterinarioCountAggregateOutputType> | number
          }
        }
      }
      Animal: {
        payload: Prisma.$AnimalPayload<ExtArgs>
        fields: Prisma.AnimalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findFirst: {
            args: Prisma.AnimalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          findMany: {
            args: Prisma.AnimalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          create: {
            args: Prisma.AnimalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          createMany: {
            args: Prisma.AnimalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          delete: {
            args: Prisma.AnimalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          update: {
            args: Prisma.AnimalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          deleteMany: {
            args: Prisma.AnimalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>[]
          }
          upsert: {
            args: Prisma.AnimalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimalPayload>
          }
          aggregate: {
            args: Prisma.AnimalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimal>
          }
          groupBy: {
            args: Prisma.AnimalGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimalGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimalCountArgs<ExtArgs>
            result: $Utils.Optional<AnimalCountAggregateOutputType> | number
          }
        }
      }
      Consulta: {
        payload: Prisma.$ConsultaPayload<ExtArgs>
        fields: Prisma.ConsultaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findFirst: {
            args: Prisma.ConsultaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          findMany: {
            args: Prisma.ConsultaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          create: {
            args: Prisma.ConsultaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          createMany: {
            args: Prisma.ConsultaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          delete: {
            args: Prisma.ConsultaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          update: {
            args: Prisma.ConsultaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          deleteMany: {
            args: Prisma.ConsultaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>[]
          }
          upsert: {
            args: Prisma.ConsultaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultaPayload>
          }
          aggregate: {
            args: Prisma.ConsultaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsulta>
          }
          groupBy: {
            args: Prisma.ConsultaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultaCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultaCountAggregateOutputType> | number
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
    secretario?: SecretarioOmit
    veterinario?: VeterinarioOmit
    animal?: AnimalOmit
    consulta?: ConsultaOmit
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
   * Count Type VeterinarioCountOutputType
   */

  export type VeterinarioCountOutputType = {
    consultas: number
  }

  export type VeterinarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | VeterinarioCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * VeterinarioCountOutputType without action
   */
  export type VeterinarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VeterinarioCountOutputType
     */
    select?: VeterinarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VeterinarioCountOutputType without action
   */
  export type VeterinarioCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }


  /**
   * Count Type AnimalCountOutputType
   */

  export type AnimalCountOutputType = {
    consultas: number
  }

  export type AnimalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | AnimalCountOutputTypeCountConsultasArgs
  }

  // Custom InputTypes
  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimalCountOutputType
     */
    select?: AnimalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimalCountOutputType without action
   */
  export type AnimalCountOutputTypeCountConsultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Secretario
   */

  export type AggregateSecretario = {
    _count: SecretarioCountAggregateOutputType | null
    _avg: SecretarioAvgAggregateOutputType | null
    _sum: SecretarioSumAggregateOutputType | null
    _min: SecretarioMinAggregateOutputType | null
    _max: SecretarioMaxAggregateOutputType | null
  }

  export type SecretarioAvgAggregateOutputType = {
    id: number | null
  }

  export type SecretarioSumAggregateOutputType = {
    id: number | null
  }

  export type SecretarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    cargo: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecretarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    telefone: string | null
    cargo: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SecretarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    telefone: number
    cargo: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SecretarioAvgAggregateInputType = {
    id?: true
  }

  export type SecretarioSumAggregateInputType = {
    id?: true
  }

  export type SecretarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    cargo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecretarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    cargo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SecretarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    telefone?: true
    cargo?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SecretarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretario to aggregate.
     */
    where?: SecretarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarios to fetch.
     */
    orderBy?: SecretarioOrderByWithRelationInput | SecretarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Secretarios
    **/
    _count?: true | SecretarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecretarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecretarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretarioMaxAggregateInputType
  }

  export type GetSecretarioAggregateType<T extends SecretarioAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretario[P]>
      : GetScalarType<T[P], AggregateSecretario[P]>
  }




  export type SecretarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretarioWhereInput
    orderBy?: SecretarioOrderByWithAggregationInput | SecretarioOrderByWithAggregationInput[]
    by: SecretarioScalarFieldEnum[] | SecretarioScalarFieldEnum
    having?: SecretarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretarioCountAggregateInputType | true
    _avg?: SecretarioAvgAggregateInputType
    _sum?: SecretarioSumAggregateInputType
    _min?: SecretarioMinAggregateInputType
    _max?: SecretarioMaxAggregateInputType
  }

  export type SecretarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    telefone: string | null
    cargo: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: SecretarioCountAggregateOutputType | null
    _avg: SecretarioAvgAggregateOutputType | null
    _sum: SecretarioSumAggregateOutputType | null
    _min: SecretarioMinAggregateOutputType | null
    _max: SecretarioMaxAggregateOutputType | null
  }

  type GetSecretarioGroupByPayload<T extends SecretarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretarioGroupByOutputType[P]>
            : GetScalarType<T[P], SecretarioGroupByOutputType[P]>
        }
      >
    >


  export type SecretarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    cargo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["secretario"]>

  export type SecretarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    cargo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["secretario"]>

  export type SecretarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    cargo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["secretario"]>

  export type SecretarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    telefone?: boolean
    cargo?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SecretarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "telefone" | "cargo" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["secretario"]>

  export type $SecretarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Secretario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      telefone: string | null
      cargo: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["secretario"]>
    composites: {}
  }

  type SecretarioGetPayload<S extends boolean | null | undefined | SecretarioDefaultArgs> = $Result.GetResult<Prisma.$SecretarioPayload, S>

  type SecretarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecretarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretarioCountAggregateInputType | true
    }

  export interface SecretarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Secretario'], meta: { name: 'Secretario' } }
    /**
     * Find zero or one Secretario that matches the filter.
     * @param {SecretarioFindUniqueArgs} args - Arguments to find a Secretario
     * @example
     * // Get one Secretario
     * const secretario = await prisma.secretario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretarioFindUniqueArgs>(args: SelectSubset<T, SecretarioFindUniqueArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Secretario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecretarioFindUniqueOrThrowArgs} args - Arguments to find a Secretario
     * @example
     * // Get one Secretario
     * const secretario = await prisma.secretario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretarioFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioFindFirstArgs} args - Arguments to find a Secretario
     * @example
     * // Get one Secretario
     * const secretario = await prisma.secretario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretarioFindFirstArgs>(args?: SelectSubset<T, SecretarioFindFirstArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Secretario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioFindFirstOrThrowArgs} args - Arguments to find a Secretario
     * @example
     * // Get one Secretario
     * const secretario = await prisma.secretario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretarioFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Secretarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Secretarios
     * const secretarios = await prisma.secretario.findMany()
     * 
     * // Get first 10 Secretarios
     * const secretarios = await prisma.secretario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretarioWithIdOnly = await prisma.secretario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecretarioFindManyArgs>(args?: SelectSubset<T, SecretarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Secretario.
     * @param {SecretarioCreateArgs} args - Arguments to create a Secretario.
     * @example
     * // Create one Secretario
     * const Secretario = await prisma.secretario.create({
     *   data: {
     *     // ... data to create a Secretario
     *   }
     * })
     * 
     */
    create<T extends SecretarioCreateArgs>(args: SelectSubset<T, SecretarioCreateArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Secretarios.
     * @param {SecretarioCreateManyArgs} args - Arguments to create many Secretarios.
     * @example
     * // Create many Secretarios
     * const secretario = await prisma.secretario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretarioCreateManyArgs>(args?: SelectSubset<T, SecretarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Secretarios and returns the data saved in the database.
     * @param {SecretarioCreateManyAndReturnArgs} args - Arguments to create many Secretarios.
     * @example
     * // Create many Secretarios
     * const secretario = await prisma.secretario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Secretarios and only return the `id`
     * const secretarioWithIdOnly = await prisma.secretario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretarioCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Secretario.
     * @param {SecretarioDeleteArgs} args - Arguments to delete one Secretario.
     * @example
     * // Delete one Secretario
     * const Secretario = await prisma.secretario.delete({
     *   where: {
     *     // ... filter to delete one Secretario
     *   }
     * })
     * 
     */
    delete<T extends SecretarioDeleteArgs>(args: SelectSubset<T, SecretarioDeleteArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Secretario.
     * @param {SecretarioUpdateArgs} args - Arguments to update one Secretario.
     * @example
     * // Update one Secretario
     * const secretario = await prisma.secretario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretarioUpdateArgs>(args: SelectSubset<T, SecretarioUpdateArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Secretarios.
     * @param {SecretarioDeleteManyArgs} args - Arguments to filter Secretarios to delete.
     * @example
     * // Delete a few Secretarios
     * const { count } = await prisma.secretario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretarioDeleteManyArgs>(args?: SelectSubset<T, SecretarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Secretarios
     * const secretario = await prisma.secretario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretarioUpdateManyArgs>(args: SelectSubset<T, SecretarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Secretarios and returns the data updated in the database.
     * @param {SecretarioUpdateManyAndReturnArgs} args - Arguments to update many Secretarios.
     * @example
     * // Update many Secretarios
     * const secretario = await prisma.secretario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Secretarios and only return the `id`
     * const secretarioWithIdOnly = await prisma.secretario.updateManyAndReturn({
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
    updateManyAndReturn<T extends SecretarioUpdateManyAndReturnArgs>(args: SelectSubset<T, SecretarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Secretario.
     * @param {SecretarioUpsertArgs} args - Arguments to update or create a Secretario.
     * @example
     * // Update or create a Secretario
     * const secretario = await prisma.secretario.upsert({
     *   create: {
     *     // ... data to create a Secretario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Secretario we want to update
     *   }
     * })
     */
    upsert<T extends SecretarioUpsertArgs>(args: SelectSubset<T, SecretarioUpsertArgs<ExtArgs>>): Prisma__SecretarioClient<$Result.GetResult<Prisma.$SecretarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Secretarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioCountArgs} args - Arguments to filter Secretarios to count.
     * @example
     * // Count the number of Secretarios
     * const count = await prisma.secretario.count({
     *   where: {
     *     // ... the filter for the Secretarios we want to count
     *   }
     * })
    **/
    count<T extends SecretarioCountArgs>(
      args?: Subset<T, SecretarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Secretario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecretarioAggregateArgs>(args: Subset<T, SecretarioAggregateArgs>): Prisma.PrismaPromise<GetSecretarioAggregateType<T>>

    /**
     * Group by Secretario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretarioGroupByArgs} args - Group by arguments.
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
      T extends SecretarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretarioGroupByArgs['orderBy'] }
        : { orderBy?: SecretarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecretarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Secretario model
   */
  readonly fields: SecretarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Secretario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Secretario model
   */
  interface SecretarioFieldRefs {
    readonly id: FieldRef<"Secretario", 'Int'>
    readonly nome: FieldRef<"Secretario", 'String'>
    readonly email: FieldRef<"Secretario", 'String'>
    readonly senha: FieldRef<"Secretario", 'String'>
    readonly telefone: FieldRef<"Secretario", 'String'>
    readonly cargo: FieldRef<"Secretario", 'String'>
    readonly ativo: FieldRef<"Secretario", 'Boolean'>
    readonly createdAt: FieldRef<"Secretario", 'DateTime'>
    readonly updatedAt: FieldRef<"Secretario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Secretario findUnique
   */
  export type SecretarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretario to fetch.
     */
    where: SecretarioWhereUniqueInput
  }

  /**
   * Secretario findUniqueOrThrow
   */
  export type SecretarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretario to fetch.
     */
    where: SecretarioWhereUniqueInput
  }

  /**
   * Secretario findFirst
   */
  export type SecretarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretario to fetch.
     */
    where?: SecretarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarios to fetch.
     */
    orderBy?: SecretarioOrderByWithRelationInput | SecretarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarios.
     */
    cursor?: SecretarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarios.
     */
    distinct?: SecretarioScalarFieldEnum | SecretarioScalarFieldEnum[]
  }

  /**
   * Secretario findFirstOrThrow
   */
  export type SecretarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretario to fetch.
     */
    where?: SecretarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarios to fetch.
     */
    orderBy?: SecretarioOrderByWithRelationInput | SecretarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Secretarios.
     */
    cursor?: SecretarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Secretarios.
     */
    distinct?: SecretarioScalarFieldEnum | SecretarioScalarFieldEnum[]
  }

  /**
   * Secretario findMany
   */
  export type SecretarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter, which Secretarios to fetch.
     */
    where?: SecretarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Secretarios to fetch.
     */
    orderBy?: SecretarioOrderByWithRelationInput | SecretarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Secretarios.
     */
    cursor?: SecretarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Secretarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Secretarios.
     */
    skip?: number
    distinct?: SecretarioScalarFieldEnum | SecretarioScalarFieldEnum[]
  }

  /**
   * Secretario create
   */
  export type SecretarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Secretario.
     */
    data: XOR<SecretarioCreateInput, SecretarioUncheckedCreateInput>
  }

  /**
   * Secretario createMany
   */
  export type SecretarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Secretarios.
     */
    data: SecretarioCreateManyInput | SecretarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretario createManyAndReturn
   */
  export type SecretarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The data used to create many Secretarios.
     */
    data: SecretarioCreateManyInput | SecretarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Secretario update
   */
  export type SecretarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Secretario.
     */
    data: XOR<SecretarioUpdateInput, SecretarioUncheckedUpdateInput>
    /**
     * Choose, which Secretario to update.
     */
    where: SecretarioWhereUniqueInput
  }

  /**
   * Secretario updateMany
   */
  export type SecretarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Secretarios.
     */
    data: XOR<SecretarioUpdateManyMutationInput, SecretarioUncheckedUpdateManyInput>
    /**
     * Filter which Secretarios to update
     */
    where?: SecretarioWhereInput
    /**
     * Limit how many Secretarios to update.
     */
    limit?: number
  }

  /**
   * Secretario updateManyAndReturn
   */
  export type SecretarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The data used to update Secretarios.
     */
    data: XOR<SecretarioUpdateManyMutationInput, SecretarioUncheckedUpdateManyInput>
    /**
     * Filter which Secretarios to update
     */
    where?: SecretarioWhereInput
    /**
     * Limit how many Secretarios to update.
     */
    limit?: number
  }

  /**
   * Secretario upsert
   */
  export type SecretarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Secretario to update in case it exists.
     */
    where: SecretarioWhereUniqueInput
    /**
     * In case the Secretario found by the `where` argument doesn't exist, create a new Secretario with this data.
     */
    create: XOR<SecretarioCreateInput, SecretarioUncheckedCreateInput>
    /**
     * In case the Secretario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretarioUpdateInput, SecretarioUncheckedUpdateInput>
  }

  /**
   * Secretario delete
   */
  export type SecretarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
    /**
     * Filter which Secretario to delete.
     */
    where: SecretarioWhereUniqueInput
  }

  /**
   * Secretario deleteMany
   */
  export type SecretarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Secretarios to delete
     */
    where?: SecretarioWhereInput
    /**
     * Limit how many Secretarios to delete.
     */
    limit?: number
  }

  /**
   * Secretario without action
   */
  export type SecretarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Secretario
     */
    select?: SecretarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Secretario
     */
    omit?: SecretarioOmit<ExtArgs> | null
  }


  /**
   * Model Veterinario
   */

  export type AggregateVeterinario = {
    _count: VeterinarioCountAggregateOutputType | null
    _avg: VeterinarioAvgAggregateOutputType | null
    _sum: VeterinarioSumAggregateOutputType | null
    _min: VeterinarioMinAggregateOutputType | null
    _max: VeterinarioMaxAggregateOutputType | null
  }

  export type VeterinarioAvgAggregateOutputType = {
    id: number | null
  }

  export type VeterinarioSumAggregateOutputType = {
    id: number | null
  }

  export type VeterinarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    crmv: string | null
    especialidade: string | null
    telefone: string | null
    descricao: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VeterinarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    crmv: string | null
    especialidade: string | null
    telefone: string | null
    descricao: string | null
    ativo: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VeterinarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    crmv: number
    especialidade: number
    telefone: number
    descricao: number
    ativo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VeterinarioAvgAggregateInputType = {
    id?: true
  }

  export type VeterinarioSumAggregateInputType = {
    id?: true
  }

  export type VeterinarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    crmv?: true
    especialidade?: true
    telefone?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VeterinarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    crmv?: true
    especialidade?: true
    telefone?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VeterinarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    crmv?: true
    especialidade?: true
    telefone?: true
    descricao?: true
    ativo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VeterinarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veterinario to aggregate.
     */
    where?: VeterinarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarios to fetch.
     */
    orderBy?: VeterinarioOrderByWithRelationInput | VeterinarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VeterinarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Veterinarios
    **/
    _count?: true | VeterinarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VeterinarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VeterinarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VeterinarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VeterinarioMaxAggregateInputType
  }

  export type GetVeterinarioAggregateType<T extends VeterinarioAggregateArgs> = {
        [P in keyof T & keyof AggregateVeterinario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVeterinario[P]>
      : GetScalarType<T[P], AggregateVeterinario[P]>
  }




  export type VeterinarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VeterinarioWhereInput
    orderBy?: VeterinarioOrderByWithAggregationInput | VeterinarioOrderByWithAggregationInput[]
    by: VeterinarioScalarFieldEnum[] | VeterinarioScalarFieldEnum
    having?: VeterinarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VeterinarioCountAggregateInputType | true
    _avg?: VeterinarioAvgAggregateInputType
    _sum?: VeterinarioSumAggregateInputType
    _min?: VeterinarioMinAggregateInputType
    _max?: VeterinarioMaxAggregateInputType
  }

  export type VeterinarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    crmv: string
    especialidade: string
    telefone: string | null
    descricao: string | null
    ativo: boolean
    createdAt: Date
    updatedAt: Date
    _count: VeterinarioCountAggregateOutputType | null
    _avg: VeterinarioAvgAggregateOutputType | null
    _sum: VeterinarioSumAggregateOutputType | null
    _min: VeterinarioMinAggregateOutputType | null
    _max: VeterinarioMaxAggregateOutputType | null
  }

  type GetVeterinarioGroupByPayload<T extends VeterinarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VeterinarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VeterinarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VeterinarioGroupByOutputType[P]>
            : GetScalarType<T[P], VeterinarioGroupByOutputType[P]>
        }
      >
    >


  export type VeterinarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    crmv?: boolean
    especialidade?: boolean
    telefone?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consultas?: boolean | Veterinario$consultasArgs<ExtArgs>
    _count?: boolean | VeterinarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["veterinario"]>

  export type VeterinarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    crmv?: boolean
    especialidade?: boolean
    telefone?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["veterinario"]>

  export type VeterinarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    crmv?: boolean
    especialidade?: boolean
    telefone?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["veterinario"]>

  export type VeterinarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    crmv?: boolean
    especialidade?: boolean
    telefone?: boolean
    descricao?: boolean
    ativo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VeterinarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "crmv" | "especialidade" | "telefone" | "descricao" | "ativo" | "createdAt" | "updatedAt", ExtArgs["result"]["veterinario"]>
  export type VeterinarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | Veterinario$consultasArgs<ExtArgs>
    _count?: boolean | VeterinarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VeterinarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VeterinarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VeterinarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Veterinario"
    objects: {
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      crmv: string
      especialidade: string
      telefone: string | null
      descricao: string | null
      ativo: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["veterinario"]>
    composites: {}
  }

  type VeterinarioGetPayload<S extends boolean | null | undefined | VeterinarioDefaultArgs> = $Result.GetResult<Prisma.$VeterinarioPayload, S>

  type VeterinarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VeterinarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VeterinarioCountAggregateInputType | true
    }

  export interface VeterinarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Veterinario'], meta: { name: 'Veterinario' } }
    /**
     * Find zero or one Veterinario that matches the filter.
     * @param {VeterinarioFindUniqueArgs} args - Arguments to find a Veterinario
     * @example
     * // Get one Veterinario
     * const veterinario = await prisma.veterinario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VeterinarioFindUniqueArgs>(args: SelectSubset<T, VeterinarioFindUniqueArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Veterinario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VeterinarioFindUniqueOrThrowArgs} args - Arguments to find a Veterinario
     * @example
     * // Get one Veterinario
     * const veterinario = await prisma.veterinario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VeterinarioFindUniqueOrThrowArgs>(args: SelectSubset<T, VeterinarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veterinario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarioFindFirstArgs} args - Arguments to find a Veterinario
     * @example
     * // Get one Veterinario
     * const veterinario = await prisma.veterinario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VeterinarioFindFirstArgs>(args?: SelectSubset<T, VeterinarioFindFirstArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Veterinario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarioFindFirstOrThrowArgs} args - Arguments to find a Veterinario
     * @example
     * // Get one Veterinario
     * const veterinario = await prisma.veterinario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VeterinarioFindFirstOrThrowArgs>(args?: SelectSubset<T, VeterinarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Veterinarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Veterinarios
     * const veterinarios = await prisma.veterinario.findMany()
     * 
     * // Get first 10 Veterinarios
     * const veterinarios = await prisma.veterinario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const veterinarioWithIdOnly = await prisma.veterinario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VeterinarioFindManyArgs>(args?: SelectSubset<T, VeterinarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Veterinario.
     * @param {VeterinarioCreateArgs} args - Arguments to create a Veterinario.
     * @example
     * // Create one Veterinario
     * const Veterinario = await prisma.veterinario.create({
     *   data: {
     *     // ... data to create a Veterinario
     *   }
     * })
     * 
     */
    create<T extends VeterinarioCreateArgs>(args: SelectSubset<T, VeterinarioCreateArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Veterinarios.
     * @param {VeterinarioCreateManyArgs} args - Arguments to create many Veterinarios.
     * @example
     * // Create many Veterinarios
     * const veterinario = await prisma.veterinario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VeterinarioCreateManyArgs>(args?: SelectSubset<T, VeterinarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Veterinarios and returns the data saved in the database.
     * @param {VeterinarioCreateManyAndReturnArgs} args - Arguments to create many Veterinarios.
     * @example
     * // Create many Veterinarios
     * const veterinario = await prisma.veterinario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Veterinarios and only return the `id`
     * const veterinarioWithIdOnly = await prisma.veterinario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VeterinarioCreateManyAndReturnArgs>(args?: SelectSubset<T, VeterinarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Veterinario.
     * @param {VeterinarioDeleteArgs} args - Arguments to delete one Veterinario.
     * @example
     * // Delete one Veterinario
     * const Veterinario = await prisma.veterinario.delete({
     *   where: {
     *     // ... filter to delete one Veterinario
     *   }
     * })
     * 
     */
    delete<T extends VeterinarioDeleteArgs>(args: SelectSubset<T, VeterinarioDeleteArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Veterinario.
     * @param {VeterinarioUpdateArgs} args - Arguments to update one Veterinario.
     * @example
     * // Update one Veterinario
     * const veterinario = await prisma.veterinario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VeterinarioUpdateArgs>(args: SelectSubset<T, VeterinarioUpdateArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Veterinarios.
     * @param {VeterinarioDeleteManyArgs} args - Arguments to filter Veterinarios to delete.
     * @example
     * // Delete a few Veterinarios
     * const { count } = await prisma.veterinario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VeterinarioDeleteManyArgs>(args?: SelectSubset<T, VeterinarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veterinarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Veterinarios
     * const veterinario = await prisma.veterinario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VeterinarioUpdateManyArgs>(args: SelectSubset<T, VeterinarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Veterinarios and returns the data updated in the database.
     * @param {VeterinarioUpdateManyAndReturnArgs} args - Arguments to update many Veterinarios.
     * @example
     * // Update many Veterinarios
     * const veterinario = await prisma.veterinario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Veterinarios and only return the `id`
     * const veterinarioWithIdOnly = await prisma.veterinario.updateManyAndReturn({
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
    updateManyAndReturn<T extends VeterinarioUpdateManyAndReturnArgs>(args: SelectSubset<T, VeterinarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Veterinario.
     * @param {VeterinarioUpsertArgs} args - Arguments to update or create a Veterinario.
     * @example
     * // Update or create a Veterinario
     * const veterinario = await prisma.veterinario.upsert({
     *   create: {
     *     // ... data to create a Veterinario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Veterinario we want to update
     *   }
     * })
     */
    upsert<T extends VeterinarioUpsertArgs>(args: SelectSubset<T, VeterinarioUpsertArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Veterinarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarioCountArgs} args - Arguments to filter Veterinarios to count.
     * @example
     * // Count the number of Veterinarios
     * const count = await prisma.veterinario.count({
     *   where: {
     *     // ... the filter for the Veterinarios we want to count
     *   }
     * })
    **/
    count<T extends VeterinarioCountArgs>(
      args?: Subset<T, VeterinarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VeterinarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Veterinario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VeterinarioAggregateArgs>(args: Subset<T, VeterinarioAggregateArgs>): Prisma.PrismaPromise<GetVeterinarioAggregateType<T>>

    /**
     * Group by Veterinario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VeterinarioGroupByArgs} args - Group by arguments.
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
      T extends VeterinarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VeterinarioGroupByArgs['orderBy'] }
        : { orderBy?: VeterinarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VeterinarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVeterinarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Veterinario model
   */
  readonly fields: VeterinarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Veterinario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VeterinarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends Veterinario$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Veterinario$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Veterinario model
   */
  interface VeterinarioFieldRefs {
    readonly id: FieldRef<"Veterinario", 'Int'>
    readonly nome: FieldRef<"Veterinario", 'String'>
    readonly email: FieldRef<"Veterinario", 'String'>
    readonly crmv: FieldRef<"Veterinario", 'String'>
    readonly especialidade: FieldRef<"Veterinario", 'String'>
    readonly telefone: FieldRef<"Veterinario", 'String'>
    readonly descricao: FieldRef<"Veterinario", 'String'>
    readonly ativo: FieldRef<"Veterinario", 'Boolean'>
    readonly createdAt: FieldRef<"Veterinario", 'DateTime'>
    readonly updatedAt: FieldRef<"Veterinario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Veterinario findUnique
   */
  export type VeterinarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * Filter, which Veterinario to fetch.
     */
    where: VeterinarioWhereUniqueInput
  }

  /**
   * Veterinario findUniqueOrThrow
   */
  export type VeterinarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * Filter, which Veterinario to fetch.
     */
    where: VeterinarioWhereUniqueInput
  }

  /**
   * Veterinario findFirst
   */
  export type VeterinarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * Filter, which Veterinario to fetch.
     */
    where?: VeterinarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarios to fetch.
     */
    orderBy?: VeterinarioOrderByWithRelationInput | VeterinarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veterinarios.
     */
    cursor?: VeterinarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veterinarios.
     */
    distinct?: VeterinarioScalarFieldEnum | VeterinarioScalarFieldEnum[]
  }

  /**
   * Veterinario findFirstOrThrow
   */
  export type VeterinarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * Filter, which Veterinario to fetch.
     */
    where?: VeterinarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarios to fetch.
     */
    orderBy?: VeterinarioOrderByWithRelationInput | VeterinarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Veterinarios.
     */
    cursor?: VeterinarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Veterinarios.
     */
    distinct?: VeterinarioScalarFieldEnum | VeterinarioScalarFieldEnum[]
  }

  /**
   * Veterinario findMany
   */
  export type VeterinarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * Filter, which Veterinarios to fetch.
     */
    where?: VeterinarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Veterinarios to fetch.
     */
    orderBy?: VeterinarioOrderByWithRelationInput | VeterinarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Veterinarios.
     */
    cursor?: VeterinarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Veterinarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Veterinarios.
     */
    skip?: number
    distinct?: VeterinarioScalarFieldEnum | VeterinarioScalarFieldEnum[]
  }

  /**
   * Veterinario create
   */
  export type VeterinarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Veterinario.
     */
    data: XOR<VeterinarioCreateInput, VeterinarioUncheckedCreateInput>
  }

  /**
   * Veterinario createMany
   */
  export type VeterinarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Veterinarios.
     */
    data: VeterinarioCreateManyInput | VeterinarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veterinario createManyAndReturn
   */
  export type VeterinarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * The data used to create many Veterinarios.
     */
    data: VeterinarioCreateManyInput | VeterinarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Veterinario update
   */
  export type VeterinarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Veterinario.
     */
    data: XOR<VeterinarioUpdateInput, VeterinarioUncheckedUpdateInput>
    /**
     * Choose, which Veterinario to update.
     */
    where: VeterinarioWhereUniqueInput
  }

  /**
   * Veterinario updateMany
   */
  export type VeterinarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Veterinarios.
     */
    data: XOR<VeterinarioUpdateManyMutationInput, VeterinarioUncheckedUpdateManyInput>
    /**
     * Filter which Veterinarios to update
     */
    where?: VeterinarioWhereInput
    /**
     * Limit how many Veterinarios to update.
     */
    limit?: number
  }

  /**
   * Veterinario updateManyAndReturn
   */
  export type VeterinarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * The data used to update Veterinarios.
     */
    data: XOR<VeterinarioUpdateManyMutationInput, VeterinarioUncheckedUpdateManyInput>
    /**
     * Filter which Veterinarios to update
     */
    where?: VeterinarioWhereInput
    /**
     * Limit how many Veterinarios to update.
     */
    limit?: number
  }

  /**
   * Veterinario upsert
   */
  export type VeterinarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Veterinario to update in case it exists.
     */
    where: VeterinarioWhereUniqueInput
    /**
     * In case the Veterinario found by the `where` argument doesn't exist, create a new Veterinario with this data.
     */
    create: XOR<VeterinarioCreateInput, VeterinarioUncheckedCreateInput>
    /**
     * In case the Veterinario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VeterinarioUpdateInput, VeterinarioUncheckedUpdateInput>
  }

  /**
   * Veterinario delete
   */
  export type VeterinarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
    /**
     * Filter which Veterinario to delete.
     */
    where: VeterinarioWhereUniqueInput
  }

  /**
   * Veterinario deleteMany
   */
  export type VeterinarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Veterinarios to delete
     */
    where?: VeterinarioWhereInput
    /**
     * Limit how many Veterinarios to delete.
     */
    limit?: number
  }

  /**
   * Veterinario.consultas
   */
  export type Veterinario$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Veterinario without action
   */
  export type VeterinarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Veterinario
     */
    select?: VeterinarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Veterinario
     */
    omit?: VeterinarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VeterinarioInclude<ExtArgs> | null
  }


  /**
   * Model Animal
   */

  export type AggregateAnimal = {
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  export type AnimalAvgAggregateOutputType = {
    id: number | null
    idade: number | null
    peso: number | null
  }

  export type AnimalSumAggregateOutputType = {
    id: number | null
    idade: number | null
    peso: number | null
  }

  export type AnimalMinAggregateOutputType = {
    id: number | null
    nome: string | null
    especie: string | null
    raca: string | null
    sexo: string | null
    idade: number | null
    dataNascimento: Date | null
    peso: number | null
    responsavelNome: string | null
    responsavelEmail: string | null
    responsavelTelefone: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimalMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    especie: string | null
    raca: string | null
    sexo: string | null
    idade: number | null
    dataNascimento: Date | null
    peso: number | null
    responsavelNome: string | null
    responsavelEmail: string | null
    responsavelTelefone: string | null
    observacoes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimalCountAggregateOutputType = {
    id: number
    nome: number
    especie: number
    raca: number
    sexo: number
    idade: number
    dataNascimento: number
    peso: number
    responsavelNome: number
    responsavelEmail: number
    responsavelTelefone: number
    observacoes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnimalAvgAggregateInputType = {
    id?: true
    idade?: true
    peso?: true
  }

  export type AnimalSumAggregateInputType = {
    id?: true
    idade?: true
    peso?: true
  }

  export type AnimalMinAggregateInputType = {
    id?: true
    nome?: true
    especie?: true
    raca?: true
    sexo?: true
    idade?: true
    dataNascimento?: true
    peso?: true
    responsavelNome?: true
    responsavelEmail?: true
    responsavelTelefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimalMaxAggregateInputType = {
    id?: true
    nome?: true
    especie?: true
    raca?: true
    sexo?: true
    idade?: true
    dataNascimento?: true
    peso?: true
    responsavelNome?: true
    responsavelEmail?: true
    responsavelTelefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimalCountAggregateInputType = {
    id?: true
    nome?: true
    especie?: true
    raca?: true
    sexo?: true
    idade?: true
    dataNascimento?: true
    peso?: true
    responsavelNome?: true
    responsavelEmail?: true
    responsavelTelefone?: true
    observacoes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnimalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animal to aggregate.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Animals
    **/
    _count?: true | AnimalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimalMaxAggregateInputType
  }

  export type GetAnimalAggregateType<T extends AnimalAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimal[P]>
      : GetScalarType<T[P], AggregateAnimal[P]>
  }




  export type AnimalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimalWhereInput
    orderBy?: AnimalOrderByWithAggregationInput | AnimalOrderByWithAggregationInput[]
    by: AnimalScalarFieldEnum[] | AnimalScalarFieldEnum
    having?: AnimalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimalCountAggregateInputType | true
    _avg?: AnimalAvgAggregateInputType
    _sum?: AnimalSumAggregateInputType
    _min?: AnimalMinAggregateInputType
    _max?: AnimalMaxAggregateInputType
  }

  export type AnimalGroupByOutputType = {
    id: number
    nome: string
    especie: string
    raca: string | null
    sexo: string | null
    idade: number | null
    dataNascimento: Date | null
    peso: number | null
    responsavelNome: string
    responsavelEmail: string | null
    responsavelTelefone: string | null
    observacoes: string | null
    createdAt: Date
    updatedAt: Date
    _count: AnimalCountAggregateOutputType | null
    _avg: AnimalAvgAggregateOutputType | null
    _sum: AnimalSumAggregateOutputType | null
    _min: AnimalMinAggregateOutputType | null
    _max: AnimalMaxAggregateOutputType | null
  }

  type GetAnimalGroupByPayload<T extends AnimalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimalGroupByOutputType[P]>
            : GetScalarType<T[P], AnimalGroupByOutputType[P]>
        }
      >
    >


  export type AnimalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especie?: boolean
    raca?: boolean
    sexo?: boolean
    idade?: boolean
    dataNascimento?: boolean
    peso?: boolean
    responsavelNome?: boolean
    responsavelEmail?: boolean
    responsavelTelefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    consultas?: boolean | Animal$consultasArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especie?: boolean
    raca?: boolean
    sexo?: boolean
    idade?: boolean
    dataNascimento?: boolean
    peso?: boolean
    responsavelNome?: boolean
    responsavelEmail?: boolean
    responsavelTelefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    especie?: boolean
    raca?: boolean
    sexo?: boolean
    idade?: boolean
    dataNascimento?: boolean
    peso?: boolean
    responsavelNome?: boolean
    responsavelEmail?: boolean
    responsavelTelefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["animal"]>

  export type AnimalSelectScalar = {
    id?: boolean
    nome?: boolean
    especie?: boolean
    raca?: boolean
    sexo?: boolean
    idade?: boolean
    dataNascimento?: boolean
    peso?: boolean
    responsavelNome?: boolean
    responsavelEmail?: boolean
    responsavelTelefone?: boolean
    observacoes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnimalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "especie" | "raca" | "sexo" | "idade" | "dataNascimento" | "peso" | "responsavelNome" | "responsavelEmail" | "responsavelTelefone" | "observacoes" | "createdAt" | "updatedAt", ExtArgs["result"]["animal"]>
  export type AnimalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consultas?: boolean | Animal$consultasArgs<ExtArgs>
    _count?: boolean | AnimalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnimalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnimalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Animal"
    objects: {
      consultas: Prisma.$ConsultaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      especie: string
      raca: string | null
      sexo: string | null
      idade: number | null
      dataNascimento: Date | null
      peso: number | null
      responsavelNome: string
      responsavelEmail: string | null
      responsavelTelefone: string | null
      observacoes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["animal"]>
    composites: {}
  }

  type AnimalGetPayload<S extends boolean | null | undefined | AnimalDefaultArgs> = $Result.GetResult<Prisma.$AnimalPayload, S>

  type AnimalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimalCountAggregateInputType | true
    }

  export interface AnimalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Animal'], meta: { name: 'Animal' } }
    /**
     * Find zero or one Animal that matches the filter.
     * @param {AnimalFindUniqueArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimalFindUniqueArgs>(args: SelectSubset<T, AnimalFindUniqueArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Animal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimalFindUniqueOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimalFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimalFindFirstArgs>(args?: SelectSubset<T, AnimalFindFirstArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Animal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindFirstOrThrowArgs} args - Arguments to find a Animal
     * @example
     * // Get one Animal
     * const animal = await prisma.animal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimalFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimalFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Animals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Animals
     * const animals = await prisma.animal.findMany()
     * 
     * // Get first 10 Animals
     * const animals = await prisma.animal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animalWithIdOnly = await prisma.animal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimalFindManyArgs>(args?: SelectSubset<T, AnimalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Animal.
     * @param {AnimalCreateArgs} args - Arguments to create a Animal.
     * @example
     * // Create one Animal
     * const Animal = await prisma.animal.create({
     *   data: {
     *     // ... data to create a Animal
     *   }
     * })
     * 
     */
    create<T extends AnimalCreateArgs>(args: SelectSubset<T, AnimalCreateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Animals.
     * @param {AnimalCreateManyArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimalCreateManyArgs>(args?: SelectSubset<T, AnimalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Animals and returns the data saved in the database.
     * @param {AnimalCreateManyAndReturnArgs} args - Arguments to create many Animals.
     * @example
     * // Create many Animals
     * const animal = await prisma.animal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimalCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Animal.
     * @param {AnimalDeleteArgs} args - Arguments to delete one Animal.
     * @example
     * // Delete one Animal
     * const Animal = await prisma.animal.delete({
     *   where: {
     *     // ... filter to delete one Animal
     *   }
     * })
     * 
     */
    delete<T extends AnimalDeleteArgs>(args: SelectSubset<T, AnimalDeleteArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Animal.
     * @param {AnimalUpdateArgs} args - Arguments to update one Animal.
     * @example
     * // Update one Animal
     * const animal = await prisma.animal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimalUpdateArgs>(args: SelectSubset<T, AnimalUpdateArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Animals.
     * @param {AnimalDeleteManyArgs} args - Arguments to filter Animals to delete.
     * @example
     * // Delete a few Animals
     * const { count } = await prisma.animal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimalDeleteManyArgs>(args?: SelectSubset<T, AnimalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimalUpdateManyArgs>(args: SelectSubset<T, AnimalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Animals and returns the data updated in the database.
     * @param {AnimalUpdateManyAndReturnArgs} args - Arguments to update many Animals.
     * @example
     * // Update many Animals
     * const animal = await prisma.animal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Animals and only return the `id`
     * const animalWithIdOnly = await prisma.animal.updateManyAndReturn({
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
    updateManyAndReturn<T extends AnimalUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Animal.
     * @param {AnimalUpsertArgs} args - Arguments to update or create a Animal.
     * @example
     * // Update or create a Animal
     * const animal = await prisma.animal.upsert({
     *   create: {
     *     // ... data to create a Animal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Animal we want to update
     *   }
     * })
     */
    upsert<T extends AnimalUpsertArgs>(args: SelectSubset<T, AnimalUpsertArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Animals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalCountArgs} args - Arguments to filter Animals to count.
     * @example
     * // Count the number of Animals
     * const count = await prisma.animal.count({
     *   where: {
     *     // ... the filter for the Animals we want to count
     *   }
     * })
    **/
    count<T extends AnimalCountArgs>(
      args?: Subset<T, AnimalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimalAggregateArgs>(args: Subset<T, AnimalAggregateArgs>): Prisma.PrismaPromise<GetAnimalAggregateType<T>>

    /**
     * Group by Animal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimalGroupByArgs} args - Group by arguments.
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
      T extends AnimalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimalGroupByArgs['orderBy'] }
        : { orderBy?: AnimalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Animal model
   */
  readonly fields: AnimalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Animal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    consultas<T extends Animal$consultasArgs<ExtArgs> = {}>(args?: Subset<T, Animal$consultasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Animal model
   */
  interface AnimalFieldRefs {
    readonly id: FieldRef<"Animal", 'Int'>
    readonly nome: FieldRef<"Animal", 'String'>
    readonly especie: FieldRef<"Animal", 'String'>
    readonly raca: FieldRef<"Animal", 'String'>
    readonly sexo: FieldRef<"Animal", 'String'>
    readonly idade: FieldRef<"Animal", 'Int'>
    readonly dataNascimento: FieldRef<"Animal", 'DateTime'>
    readonly peso: FieldRef<"Animal", 'Float'>
    readonly responsavelNome: FieldRef<"Animal", 'String'>
    readonly responsavelEmail: FieldRef<"Animal", 'String'>
    readonly responsavelTelefone: FieldRef<"Animal", 'String'>
    readonly observacoes: FieldRef<"Animal", 'String'>
    readonly createdAt: FieldRef<"Animal", 'DateTime'>
    readonly updatedAt: FieldRef<"Animal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Animal findUnique
   */
  export type AnimalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findUniqueOrThrow
   */
  export type AnimalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal findFirst
   */
  export type AnimalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findFirstOrThrow
   */
  export type AnimalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animal to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Animals.
     */
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal findMany
   */
  export type AnimalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter, which Animals to fetch.
     */
    where?: AnimalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Animals to fetch.
     */
    orderBy?: AnimalOrderByWithRelationInput | AnimalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Animals.
     */
    cursor?: AnimalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Animals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Animals.
     */
    skip?: number
    distinct?: AnimalScalarFieldEnum | AnimalScalarFieldEnum[]
  }

  /**
   * Animal create
   */
  export type AnimalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to create a Animal.
     */
    data: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
  }

  /**
   * Animal createMany
   */
  export type AnimalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal createManyAndReturn
   */
  export type AnimalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to create many Animals.
     */
    data: AnimalCreateManyInput | AnimalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Animal update
   */
  export type AnimalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The data needed to update a Animal.
     */
    data: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
    /**
     * Choose, which Animal to update.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal updateMany
   */
  export type AnimalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal updateManyAndReturn
   */
  export type AnimalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * The data used to update Animals.
     */
    data: XOR<AnimalUpdateManyMutationInput, AnimalUncheckedUpdateManyInput>
    /**
     * Filter which Animals to update
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to update.
     */
    limit?: number
  }

  /**
   * Animal upsert
   */
  export type AnimalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * The filter to search for the Animal to update in case it exists.
     */
    where: AnimalWhereUniqueInput
    /**
     * In case the Animal found by the `where` argument doesn't exist, create a new Animal with this data.
     */
    create: XOR<AnimalCreateInput, AnimalUncheckedCreateInput>
    /**
     * In case the Animal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimalUpdateInput, AnimalUncheckedUpdateInput>
  }

  /**
   * Animal delete
   */
  export type AnimalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
    /**
     * Filter which Animal to delete.
     */
    where: AnimalWhereUniqueInput
  }

  /**
   * Animal deleteMany
   */
  export type AnimalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Animals to delete
     */
    where?: AnimalWhereInput
    /**
     * Limit how many Animals to delete.
     */
    limit?: number
  }

  /**
   * Animal.consultas
   */
  export type Animal$consultasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    cursor?: ConsultaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Animal without action
   */
  export type AnimalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Animal
     */
    select?: AnimalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Animal
     */
    omit?: AnimalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimalInclude<ExtArgs> | null
  }


  /**
   * Model Consulta
   */

  export type AggregateConsulta = {
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  export type ConsultaAvgAggregateOutputType = {
    id: number | null
    valor: number | null
    AnimalId: number | null
    VeterinarioId: number | null
  }

  export type ConsultaSumAggregateOutputType = {
    id: number | null
    valor: number | null
    AnimalId: number | null
    VeterinarioId: number | null
  }

  export type ConsultaMinAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    motivo: string | null
    status: string | null
    anotacoes: string | null
    valor: number | null
    AnimalId: number | null
    VeterinarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultaMaxAggregateOutputType = {
    id: number | null
    dataHora: Date | null
    motivo: string | null
    status: string | null
    anotacoes: string | null
    valor: number | null
    AnimalId: number | null
    VeterinarioId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ConsultaCountAggregateOutputType = {
    id: number
    dataHora: number
    motivo: number
    status: number
    anotacoes: number
    valor: number
    AnimalId: number
    VeterinarioId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ConsultaAvgAggregateInputType = {
    id?: true
    valor?: true
    AnimalId?: true
    VeterinarioId?: true
  }

  export type ConsultaSumAggregateInputType = {
    id?: true
    valor?: true
    AnimalId?: true
    VeterinarioId?: true
  }

  export type ConsultaMinAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    status?: true
    anotacoes?: true
    valor?: true
    AnimalId?: true
    VeterinarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultaMaxAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    status?: true
    anotacoes?: true
    valor?: true
    AnimalId?: true
    VeterinarioId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ConsultaCountAggregateInputType = {
    id?: true
    dataHora?: true
    motivo?: true
    status?: true
    anotacoes?: true
    valor?: true
    AnimalId?: true
    VeterinarioId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ConsultaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consulta to aggregate.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consultas
    **/
    _count?: true | ConsultaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultaMaxAggregateInputType
  }

  export type GetConsultaAggregateType<T extends ConsultaAggregateArgs> = {
        [P in keyof T & keyof AggregateConsulta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsulta[P]>
      : GetScalarType<T[P], AggregateConsulta[P]>
  }




  export type ConsultaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultaWhereInput
    orderBy?: ConsultaOrderByWithAggregationInput | ConsultaOrderByWithAggregationInput[]
    by: ConsultaScalarFieldEnum[] | ConsultaScalarFieldEnum
    having?: ConsultaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultaCountAggregateInputType | true
    _avg?: ConsultaAvgAggregateInputType
    _sum?: ConsultaSumAggregateInputType
    _min?: ConsultaMinAggregateInputType
    _max?: ConsultaMaxAggregateInputType
  }

  export type ConsultaGroupByOutputType = {
    id: number
    dataHora: Date
    motivo: string | null
    status: string
    anotacoes: string | null
    valor: number | null
    AnimalId: number
    VeterinarioId: number
    createdAt: Date
    updatedAt: Date
    _count: ConsultaCountAggregateOutputType | null
    _avg: ConsultaAvgAggregateOutputType | null
    _sum: ConsultaSumAggregateOutputType | null
    _min: ConsultaMinAggregateOutputType | null
    _max: ConsultaMaxAggregateOutputType | null
  }

  type GetConsultaGroupByPayload<T extends ConsultaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultaGroupByOutputType[P]>
        }
      >
    >


  export type ConsultaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    status?: boolean
    anotacoes?: boolean
    valor?: boolean
    AnimalId?: boolean
    VeterinarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Animal?: boolean | AnimalDefaultArgs<ExtArgs>
    Veterinario?: boolean | VeterinarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    status?: boolean
    anotacoes?: boolean
    valor?: boolean
    AnimalId?: boolean
    VeterinarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Animal?: boolean | AnimalDefaultArgs<ExtArgs>
    Veterinario?: boolean | VeterinarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    status?: boolean
    anotacoes?: boolean
    valor?: boolean
    AnimalId?: boolean
    VeterinarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Animal?: boolean | AnimalDefaultArgs<ExtArgs>
    Veterinario?: boolean | VeterinarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consulta"]>

  export type ConsultaSelectScalar = {
    id?: boolean
    dataHora?: boolean
    motivo?: boolean
    status?: boolean
    anotacoes?: boolean
    valor?: boolean
    AnimalId?: boolean
    VeterinarioId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ConsultaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dataHora" | "motivo" | "status" | "anotacoes" | "valor" | "AnimalId" | "VeterinarioId" | "createdAt" | "updatedAt", ExtArgs["result"]["consulta"]>
  export type ConsultaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Animal?: boolean | AnimalDefaultArgs<ExtArgs>
    Veterinario?: boolean | VeterinarioDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Animal?: boolean | AnimalDefaultArgs<ExtArgs>
    Veterinario?: boolean | VeterinarioDefaultArgs<ExtArgs>
  }
  export type ConsultaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Animal?: boolean | AnimalDefaultArgs<ExtArgs>
    Veterinario?: boolean | VeterinarioDefaultArgs<ExtArgs>
  }

  export type $ConsultaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consulta"
    objects: {
      Animal: Prisma.$AnimalPayload<ExtArgs>
      Veterinario: Prisma.$VeterinarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      dataHora: Date
      motivo: string | null
      status: string
      anotacoes: string | null
      valor: number | null
      AnimalId: number
      VeterinarioId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["consulta"]>
    composites: {}
  }

  type ConsultaGetPayload<S extends boolean | null | undefined | ConsultaDefaultArgs> = $Result.GetResult<Prisma.$ConsultaPayload, S>

  type ConsultaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultaCountAggregateInputType | true
    }

  export interface ConsultaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consulta'], meta: { name: 'Consulta' } }
    /**
     * Find zero or one Consulta that matches the filter.
     * @param {ConsultaFindUniqueArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultaFindUniqueArgs>(args: SelectSubset<T, ConsultaFindUniqueArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consulta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultaFindUniqueOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultaFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultaFindFirstArgs>(args?: SelectSubset<T, ConsultaFindFirstArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consulta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindFirstOrThrowArgs} args - Arguments to find a Consulta
     * @example
     * // Get one Consulta
     * const consulta = await prisma.consulta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultaFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consultas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consultas
     * const consultas = await prisma.consulta.findMany()
     * 
     * // Get first 10 Consultas
     * const consultas = await prisma.consulta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultaWithIdOnly = await prisma.consulta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultaFindManyArgs>(args?: SelectSubset<T, ConsultaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consulta.
     * @param {ConsultaCreateArgs} args - Arguments to create a Consulta.
     * @example
     * // Create one Consulta
     * const Consulta = await prisma.consulta.create({
     *   data: {
     *     // ... data to create a Consulta
     *   }
     * })
     * 
     */
    create<T extends ConsultaCreateArgs>(args: SelectSubset<T, ConsultaCreateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consultas.
     * @param {ConsultaCreateManyArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultaCreateManyArgs>(args?: SelectSubset<T, ConsultaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consultas and returns the data saved in the database.
     * @param {ConsultaCreateManyAndReturnArgs} args - Arguments to create many Consultas.
     * @example
     * // Create many Consultas
     * const consulta = await prisma.consulta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultaCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consulta.
     * @param {ConsultaDeleteArgs} args - Arguments to delete one Consulta.
     * @example
     * // Delete one Consulta
     * const Consulta = await prisma.consulta.delete({
     *   where: {
     *     // ... filter to delete one Consulta
     *   }
     * })
     * 
     */
    delete<T extends ConsultaDeleteArgs>(args: SelectSubset<T, ConsultaDeleteArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consulta.
     * @param {ConsultaUpdateArgs} args - Arguments to update one Consulta.
     * @example
     * // Update one Consulta
     * const consulta = await prisma.consulta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultaUpdateArgs>(args: SelectSubset<T, ConsultaUpdateArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consultas.
     * @param {ConsultaDeleteManyArgs} args - Arguments to filter Consultas to delete.
     * @example
     * // Delete a few Consultas
     * const { count } = await prisma.consulta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultaDeleteManyArgs>(args?: SelectSubset<T, ConsultaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultaUpdateManyArgs>(args: SelectSubset<T, ConsultaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consultas and returns the data updated in the database.
     * @param {ConsultaUpdateManyAndReturnArgs} args - Arguments to update many Consultas.
     * @example
     * // Update many Consultas
     * const consulta = await prisma.consulta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consultas and only return the `id`
     * const consultaWithIdOnly = await prisma.consulta.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsultaUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consulta.
     * @param {ConsultaUpsertArgs} args - Arguments to update or create a Consulta.
     * @example
     * // Update or create a Consulta
     * const consulta = await prisma.consulta.upsert({
     *   create: {
     *     // ... data to create a Consulta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consulta we want to update
     *   }
     * })
     */
    upsert<T extends ConsultaUpsertArgs>(args: SelectSubset<T, ConsultaUpsertArgs<ExtArgs>>): Prisma__ConsultaClient<$Result.GetResult<Prisma.$ConsultaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consultas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaCountArgs} args - Arguments to filter Consultas to count.
     * @example
     * // Count the number of Consultas
     * const count = await prisma.consulta.count({
     *   where: {
     *     // ... the filter for the Consultas we want to count
     *   }
     * })
    **/
    count<T extends ConsultaCountArgs>(
      args?: Subset<T, ConsultaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsultaAggregateArgs>(args: Subset<T, ConsultaAggregateArgs>): Prisma.PrismaPromise<GetConsultaAggregateType<T>>

    /**
     * Group by Consulta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultaGroupByArgs} args - Group by arguments.
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
      T extends ConsultaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultaGroupByArgs['orderBy'] }
        : { orderBy?: ConsultaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsultaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consulta model
   */
  readonly fields: ConsultaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consulta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Animal<T extends AnimalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimalDefaultArgs<ExtArgs>>): Prisma__AnimalClient<$Result.GetResult<Prisma.$AnimalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Veterinario<T extends VeterinarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VeterinarioDefaultArgs<ExtArgs>>): Prisma__VeterinarioClient<$Result.GetResult<Prisma.$VeterinarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Consulta model
   */
  interface ConsultaFieldRefs {
    readonly id: FieldRef<"Consulta", 'Int'>
    readonly dataHora: FieldRef<"Consulta", 'DateTime'>
    readonly motivo: FieldRef<"Consulta", 'String'>
    readonly status: FieldRef<"Consulta", 'String'>
    readonly anotacoes: FieldRef<"Consulta", 'String'>
    readonly valor: FieldRef<"Consulta", 'Float'>
    readonly AnimalId: FieldRef<"Consulta", 'Int'>
    readonly VeterinarioId: FieldRef<"Consulta", 'Int'>
    readonly createdAt: FieldRef<"Consulta", 'DateTime'>
    readonly updatedAt: FieldRef<"Consulta", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consulta findUnique
   */
  export type ConsultaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findUniqueOrThrow
   */
  export type ConsultaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta findFirst
   */
  export type ConsultaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findFirstOrThrow
   */
  export type ConsultaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consulta to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consultas.
     */
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta findMany
   */
  export type ConsultaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter, which Consultas to fetch.
     */
    where?: ConsultaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consultas to fetch.
     */
    orderBy?: ConsultaOrderByWithRelationInput | ConsultaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consultas.
     */
    cursor?: ConsultaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consultas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consultas.
     */
    skip?: number
    distinct?: ConsultaScalarFieldEnum | ConsultaScalarFieldEnum[]
  }

  /**
   * Consulta create
   */
  export type ConsultaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to create a Consulta.
     */
    data: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
  }

  /**
   * Consulta createMany
   */
  export type ConsultaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Consulta createManyAndReturn
   */
  export type ConsultaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to create many Consultas.
     */
    data: ConsultaCreateManyInput | ConsultaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consulta update
   */
  export type ConsultaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The data needed to update a Consulta.
     */
    data: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
    /**
     * Choose, which Consulta to update.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta updateMany
   */
  export type ConsultaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
  }

  /**
   * Consulta updateManyAndReturn
   */
  export type ConsultaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * The data used to update Consultas.
     */
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyInput>
    /**
     * Filter which Consultas to update
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consulta upsert
   */
  export type ConsultaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * The filter to search for the Consulta to update in case it exists.
     */
    where: ConsultaWhereUniqueInput
    /**
     * In case the Consulta found by the `where` argument doesn't exist, create a new Consulta with this data.
     */
    create: XOR<ConsultaCreateInput, ConsultaUncheckedCreateInput>
    /**
     * In case the Consulta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultaUpdateInput, ConsultaUncheckedUpdateInput>
  }

  /**
   * Consulta delete
   */
  export type ConsultaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
    /**
     * Filter which Consulta to delete.
     */
    where: ConsultaWhereUniqueInput
  }

  /**
   * Consulta deleteMany
   */
  export type ConsultaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consultas to delete
     */
    where?: ConsultaWhereInput
    /**
     * Limit how many Consultas to delete.
     */
    limit?: number
  }

  /**
   * Consulta without action
   */
  export type ConsultaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consulta
     */
    select?: ConsultaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consulta
     */
    omit?: ConsultaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsultaInclude<ExtArgs> | null
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


  export const SecretarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    telefone: 'telefone',
    cargo: 'cargo',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SecretarioScalarFieldEnum = (typeof SecretarioScalarFieldEnum)[keyof typeof SecretarioScalarFieldEnum]


  export const VeterinarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    crmv: 'crmv',
    especialidade: 'especialidade',
    telefone: 'telefone',
    descricao: 'descricao',
    ativo: 'ativo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VeterinarioScalarFieldEnum = (typeof VeterinarioScalarFieldEnum)[keyof typeof VeterinarioScalarFieldEnum]


  export const AnimalScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    especie: 'especie',
    raca: 'raca',
    sexo: 'sexo',
    idade: 'idade',
    dataNascimento: 'dataNascimento',
    peso: 'peso',
    responsavelNome: 'responsavelNome',
    responsavelEmail: 'responsavelEmail',
    responsavelTelefone: 'responsavelTelefone',
    observacoes: 'observacoes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnimalScalarFieldEnum = (typeof AnimalScalarFieldEnum)[keyof typeof AnimalScalarFieldEnum]


  export const ConsultaScalarFieldEnum: {
    id: 'id',
    dataHora: 'dataHora',
    motivo: 'motivo',
    status: 'status',
    anotacoes: 'anotacoes',
    valor: 'valor',
    AnimalId: 'AnimalId',
    VeterinarioId: 'VeterinarioId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ConsultaScalarFieldEnum = (typeof ConsultaScalarFieldEnum)[keyof typeof ConsultaScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type SecretarioWhereInput = {
    AND?: SecretarioWhereInput | SecretarioWhereInput[]
    OR?: SecretarioWhereInput[]
    NOT?: SecretarioWhereInput | SecretarioWhereInput[]
    id?: IntFilter<"Secretario"> | number
    nome?: StringFilter<"Secretario"> | string
    email?: StringFilter<"Secretario"> | string
    senha?: StringFilter<"Secretario"> | string
    telefone?: StringNullableFilter<"Secretario"> | string | null
    cargo?: StringNullableFilter<"Secretario"> | string | null
    ativo?: BoolFilter<"Secretario"> | boolean
    createdAt?: DateTimeFilter<"Secretario"> | Date | string
    updatedAt?: DateTimeFilter<"Secretario"> | Date | string
  }

  export type SecretarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecretarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: SecretarioWhereInput | SecretarioWhereInput[]
    OR?: SecretarioWhereInput[]
    NOT?: SecretarioWhereInput | SecretarioWhereInput[]
    nome?: StringFilter<"Secretario"> | string
    senha?: StringFilter<"Secretario"> | string
    telefone?: StringNullableFilter<"Secretario"> | string | null
    cargo?: StringNullableFilter<"Secretario"> | string | null
    ativo?: BoolFilter<"Secretario"> | boolean
    createdAt?: DateTimeFilter<"Secretario"> | Date | string
    updatedAt?: DateTimeFilter<"Secretario"> | Date | string
  }, "id" | "email">

  export type SecretarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrderInput | SortOrder
    cargo?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SecretarioCountOrderByAggregateInput
    _avg?: SecretarioAvgOrderByAggregateInput
    _max?: SecretarioMaxOrderByAggregateInput
    _min?: SecretarioMinOrderByAggregateInput
    _sum?: SecretarioSumOrderByAggregateInput
  }

  export type SecretarioScalarWhereWithAggregatesInput = {
    AND?: SecretarioScalarWhereWithAggregatesInput | SecretarioScalarWhereWithAggregatesInput[]
    OR?: SecretarioScalarWhereWithAggregatesInput[]
    NOT?: SecretarioScalarWhereWithAggregatesInput | SecretarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Secretario"> | number
    nome?: StringWithAggregatesFilter<"Secretario"> | string
    email?: StringWithAggregatesFilter<"Secretario"> | string
    senha?: StringWithAggregatesFilter<"Secretario"> | string
    telefone?: StringNullableWithAggregatesFilter<"Secretario"> | string | null
    cargo?: StringNullableWithAggregatesFilter<"Secretario"> | string | null
    ativo?: BoolWithAggregatesFilter<"Secretario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Secretario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Secretario"> | Date | string
  }

  export type VeterinarioWhereInput = {
    AND?: VeterinarioWhereInput | VeterinarioWhereInput[]
    OR?: VeterinarioWhereInput[]
    NOT?: VeterinarioWhereInput | VeterinarioWhereInput[]
    id?: IntFilter<"Veterinario"> | number
    nome?: StringFilter<"Veterinario"> | string
    email?: StringFilter<"Veterinario"> | string
    crmv?: StringFilter<"Veterinario"> | string
    especialidade?: StringFilter<"Veterinario"> | string
    telefone?: StringNullableFilter<"Veterinario"> | string | null
    descricao?: StringNullableFilter<"Veterinario"> | string | null
    ativo?: BoolFilter<"Veterinario"> | boolean
    createdAt?: DateTimeFilter<"Veterinario"> | Date | string
    updatedAt?: DateTimeFilter<"Veterinario"> | Date | string
    consultas?: ConsultaListRelationFilter
  }

  export type VeterinarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    crmv?: SortOrder
    especialidade?: SortOrder
    telefone?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consultas?: ConsultaOrderByRelationAggregateInput
  }

  export type VeterinarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    crmv?: string
    AND?: VeterinarioWhereInput | VeterinarioWhereInput[]
    OR?: VeterinarioWhereInput[]
    NOT?: VeterinarioWhereInput | VeterinarioWhereInput[]
    nome?: StringFilter<"Veterinario"> | string
    especialidade?: StringFilter<"Veterinario"> | string
    telefone?: StringNullableFilter<"Veterinario"> | string | null
    descricao?: StringNullableFilter<"Veterinario"> | string | null
    ativo?: BoolFilter<"Veterinario"> | boolean
    createdAt?: DateTimeFilter<"Veterinario"> | Date | string
    updatedAt?: DateTimeFilter<"Veterinario"> | Date | string
    consultas?: ConsultaListRelationFilter
  }, "id" | "email" | "crmv">

  export type VeterinarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    crmv?: SortOrder
    especialidade?: SortOrder
    telefone?: SortOrderInput | SortOrder
    descricao?: SortOrderInput | SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VeterinarioCountOrderByAggregateInput
    _avg?: VeterinarioAvgOrderByAggregateInput
    _max?: VeterinarioMaxOrderByAggregateInput
    _min?: VeterinarioMinOrderByAggregateInput
    _sum?: VeterinarioSumOrderByAggregateInput
  }

  export type VeterinarioScalarWhereWithAggregatesInput = {
    AND?: VeterinarioScalarWhereWithAggregatesInput | VeterinarioScalarWhereWithAggregatesInput[]
    OR?: VeterinarioScalarWhereWithAggregatesInput[]
    NOT?: VeterinarioScalarWhereWithAggregatesInput | VeterinarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Veterinario"> | number
    nome?: StringWithAggregatesFilter<"Veterinario"> | string
    email?: StringWithAggregatesFilter<"Veterinario"> | string
    crmv?: StringWithAggregatesFilter<"Veterinario"> | string
    especialidade?: StringWithAggregatesFilter<"Veterinario"> | string
    telefone?: StringNullableWithAggregatesFilter<"Veterinario"> | string | null
    descricao?: StringNullableWithAggregatesFilter<"Veterinario"> | string | null
    ativo?: BoolWithAggregatesFilter<"Veterinario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Veterinario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Veterinario"> | Date | string
  }

  export type AnimalWhereInput = {
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    id?: IntFilter<"Animal"> | number
    nome?: StringFilter<"Animal"> | string
    especie?: StringFilter<"Animal"> | string
    raca?: StringNullableFilter<"Animal"> | string | null
    sexo?: StringNullableFilter<"Animal"> | string | null
    idade?: IntNullableFilter<"Animal"> | number | null
    dataNascimento?: DateTimeNullableFilter<"Animal"> | Date | string | null
    peso?: FloatNullableFilter<"Animal"> | number | null
    responsavelNome?: StringFilter<"Animal"> | string
    responsavelEmail?: StringNullableFilter<"Animal"> | string | null
    responsavelTelefone?: StringNullableFilter<"Animal"> | string | null
    observacoes?: StringNullableFilter<"Animal"> | string | null
    createdAt?: DateTimeFilter<"Animal"> | Date | string
    updatedAt?: DateTimeFilter<"Animal"> | Date | string
    consultas?: ConsultaListRelationFilter
  }

  export type AnimalOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raca?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    idade?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    responsavelNome?: SortOrder
    responsavelEmail?: SortOrderInput | SortOrder
    responsavelTelefone?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    consultas?: ConsultaOrderByRelationAggregateInput
  }

  export type AnimalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    responsavelEmail?: string
    AND?: AnimalWhereInput | AnimalWhereInput[]
    OR?: AnimalWhereInput[]
    NOT?: AnimalWhereInput | AnimalWhereInput[]
    nome?: StringFilter<"Animal"> | string
    especie?: StringFilter<"Animal"> | string
    raca?: StringNullableFilter<"Animal"> | string | null
    sexo?: StringNullableFilter<"Animal"> | string | null
    idade?: IntNullableFilter<"Animal"> | number | null
    dataNascimento?: DateTimeNullableFilter<"Animal"> | Date | string | null
    peso?: FloatNullableFilter<"Animal"> | number | null
    responsavelNome?: StringFilter<"Animal"> | string
    responsavelTelefone?: StringNullableFilter<"Animal"> | string | null
    observacoes?: StringNullableFilter<"Animal"> | string | null
    createdAt?: DateTimeFilter<"Animal"> | Date | string
    updatedAt?: DateTimeFilter<"Animal"> | Date | string
    consultas?: ConsultaListRelationFilter
  }, "id" | "responsavelEmail">

  export type AnimalOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raca?: SortOrderInput | SortOrder
    sexo?: SortOrderInput | SortOrder
    idade?: SortOrderInput | SortOrder
    dataNascimento?: SortOrderInput | SortOrder
    peso?: SortOrderInput | SortOrder
    responsavelNome?: SortOrder
    responsavelEmail?: SortOrderInput | SortOrder
    responsavelTelefone?: SortOrderInput | SortOrder
    observacoes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnimalCountOrderByAggregateInput
    _avg?: AnimalAvgOrderByAggregateInput
    _max?: AnimalMaxOrderByAggregateInput
    _min?: AnimalMinOrderByAggregateInput
    _sum?: AnimalSumOrderByAggregateInput
  }

  export type AnimalScalarWhereWithAggregatesInput = {
    AND?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    OR?: AnimalScalarWhereWithAggregatesInput[]
    NOT?: AnimalScalarWhereWithAggregatesInput | AnimalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Animal"> | number
    nome?: StringWithAggregatesFilter<"Animal"> | string
    especie?: StringWithAggregatesFilter<"Animal"> | string
    raca?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    sexo?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    idade?: IntNullableWithAggregatesFilter<"Animal"> | number | null
    dataNascimento?: DateTimeNullableWithAggregatesFilter<"Animal"> | Date | string | null
    peso?: FloatNullableWithAggregatesFilter<"Animal"> | number | null
    responsavelNome?: StringWithAggregatesFilter<"Animal"> | string
    responsavelEmail?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    responsavelTelefone?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    observacoes?: StringNullableWithAggregatesFilter<"Animal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Animal"> | Date | string
  }

  export type ConsultaWhereInput = {
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    id?: IntFilter<"Consulta"> | number
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringNullableFilter<"Consulta"> | string | null
    status?: StringFilter<"Consulta"> | string
    anotacoes?: StringNullableFilter<"Consulta"> | string | null
    valor?: FloatNullableFilter<"Consulta"> | number | null
    AnimalId?: IntFilter<"Consulta"> | number
    VeterinarioId?: IntFilter<"Consulta"> | number
    createdAt?: DateTimeFilter<"Consulta"> | Date | string
    updatedAt?: DateTimeFilter<"Consulta"> | Date | string
    Animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    Veterinario?: XOR<VeterinarioScalarRelationFilter, VeterinarioWhereInput>
  }

  export type ConsultaOrderByWithRelationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrderInput | SortOrder
    status?: SortOrder
    anotacoes?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    AnimalId?: SortOrder
    VeterinarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Animal?: AnimalOrderByWithRelationInput
    Veterinario?: VeterinarioOrderByWithRelationInput
  }

  export type ConsultaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ConsultaWhereInput | ConsultaWhereInput[]
    OR?: ConsultaWhereInput[]
    NOT?: ConsultaWhereInput | ConsultaWhereInput[]
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringNullableFilter<"Consulta"> | string | null
    status?: StringFilter<"Consulta"> | string
    anotacoes?: StringNullableFilter<"Consulta"> | string | null
    valor?: FloatNullableFilter<"Consulta"> | number | null
    AnimalId?: IntFilter<"Consulta"> | number
    VeterinarioId?: IntFilter<"Consulta"> | number
    createdAt?: DateTimeFilter<"Consulta"> | Date | string
    updatedAt?: DateTimeFilter<"Consulta"> | Date | string
    Animal?: XOR<AnimalScalarRelationFilter, AnimalWhereInput>
    Veterinario?: XOR<VeterinarioScalarRelationFilter, VeterinarioWhereInput>
  }, "id">

  export type ConsultaOrderByWithAggregationInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrderInput | SortOrder
    status?: SortOrder
    anotacoes?: SortOrderInput | SortOrder
    valor?: SortOrderInput | SortOrder
    AnimalId?: SortOrder
    VeterinarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ConsultaCountOrderByAggregateInput
    _avg?: ConsultaAvgOrderByAggregateInput
    _max?: ConsultaMaxOrderByAggregateInput
    _min?: ConsultaMinOrderByAggregateInput
    _sum?: ConsultaSumOrderByAggregateInput
  }

  export type ConsultaScalarWhereWithAggregatesInput = {
    AND?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    OR?: ConsultaScalarWhereWithAggregatesInput[]
    NOT?: ConsultaScalarWhereWithAggregatesInput | ConsultaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Consulta"> | number
    dataHora?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    motivo?: StringNullableWithAggregatesFilter<"Consulta"> | string | null
    status?: StringWithAggregatesFilter<"Consulta"> | string
    anotacoes?: StringNullableWithAggregatesFilter<"Consulta"> | string | null
    valor?: FloatNullableWithAggregatesFilter<"Consulta"> | number | null
    AnimalId?: IntWithAggregatesFilter<"Consulta"> | number
    VeterinarioId?: IntWithAggregatesFilter<"Consulta"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Consulta"> | Date | string
  }

  export type SecretarioCreateInput = {
    nome: string
    email: string
    senha: string
    telefone?: string | null
    cargo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecretarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    cargo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecretarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    telefone?: string | null
    cargo?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SecretarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecretarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    cargo?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeterinarioCreateInput = {
    nome: string
    email: string
    crmv: string
    especialidade: string
    telefone?: string | null
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consultas?: ConsultaCreateNestedManyWithoutVeterinarioInput
  }

  export type VeterinarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    crmv: string
    especialidade: string
    telefone?: string | null
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutVeterinarioInput
  }

  export type VeterinarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    crmv?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUpdateManyWithoutVeterinarioNestedInput
  }

  export type VeterinarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    crmv?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUncheckedUpdateManyWithoutVeterinarioNestedInput
  }

  export type VeterinarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    crmv: string
    especialidade: string
    telefone?: string | null
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeterinarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    crmv?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeterinarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    crmv?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalCreateInput = {
    nome: string
    especie: string
    raca?: string | null
    sexo?: string | null
    idade?: number | null
    dataNascimento?: Date | string | null
    peso?: number | null
    responsavelNome: string
    responsavelEmail?: string | null
    responsavelTelefone?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    consultas?: ConsultaCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUncheckedCreateInput = {
    id?: number
    nome: string
    especie: string
    raca?: string | null
    sexo?: string | null
    idade?: number | null
    dataNascimento?: Date | string | null
    peso?: number | null
    responsavelNome: string
    responsavelEmail?: string | null
    responsavelTelefone?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    consultas?: ConsultaUncheckedCreateNestedManyWithoutAnimalInput
  }

  export type AnimalUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelNome?: StringFieldUpdateOperationsInput | string
    responsavelEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responsavelTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelNome?: StringFieldUpdateOperationsInput | string
    responsavelEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responsavelTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consultas?: ConsultaUncheckedUpdateManyWithoutAnimalNestedInput
  }

  export type AnimalCreateManyInput = {
    id?: number
    nome: string
    especie: string
    raca?: string | null
    sexo?: string | null
    idade?: number | null
    dataNascimento?: Date | string | null
    peso?: number | null
    responsavelNome: string
    responsavelEmail?: string | null
    responsavelTelefone?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimalUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelNome?: StringFieldUpdateOperationsInput | string
    responsavelEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responsavelTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelNome?: StringFieldUpdateOperationsInput | string
    responsavelEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responsavelTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateInput = {
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Animal: AnimalCreateNestedOneWithoutConsultasInput
    Veterinario: VeterinarioCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    AnimalId: number
    VeterinarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultaUpdateInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Animal?: AnimalUpdateOneRequiredWithoutConsultasNestedInput
    Veterinario?: VeterinarioUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    AnimalId?: IntFieldUpdateOperationsInput | number
    VeterinarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateManyInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    AnimalId: number
    VeterinarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultaUpdateManyMutationInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    AnimalId?: IntFieldUpdateOperationsInput | number
    VeterinarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SecretarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecretarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SecretarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecretarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    telefone?: SortOrder
    cargo?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SecretarioSumOrderByAggregateInput = {
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

  export type ConsultaListRelationFilter = {
    every?: ConsultaWhereInput
    some?: ConsultaWhereInput
    none?: ConsultaWhereInput
  }

  export type ConsultaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VeterinarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    crmv?: SortOrder
    especialidade?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeterinarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VeterinarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    crmv?: SortOrder
    especialidade?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeterinarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    crmv?: SortOrder
    especialidade?: SortOrder
    telefone?: SortOrder
    descricao?: SortOrder
    ativo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VeterinarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AnimalCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raca?: SortOrder
    sexo?: SortOrder
    idade?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    responsavelNome?: SortOrder
    responsavelEmail?: SortOrder
    responsavelTelefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimalAvgOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    peso?: SortOrder
  }

  export type AnimalMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raca?: SortOrder
    sexo?: SortOrder
    idade?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    responsavelNome?: SortOrder
    responsavelEmail?: SortOrder
    responsavelTelefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimalMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    especie?: SortOrder
    raca?: SortOrder
    sexo?: SortOrder
    idade?: SortOrder
    dataNascimento?: SortOrder
    peso?: SortOrder
    responsavelNome?: SortOrder
    responsavelEmail?: SortOrder
    responsavelTelefone?: SortOrder
    observacoes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimalSumOrderByAggregateInput = {
    id?: SortOrder
    idade?: SortOrder
    peso?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type AnimalScalarRelationFilter = {
    is?: AnimalWhereInput
    isNot?: AnimalWhereInput
  }

  export type VeterinarioScalarRelationFilter = {
    is?: VeterinarioWhereInput
    isNot?: VeterinarioWhereInput
  }

  export type ConsultaCountOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    status?: SortOrder
    anotacoes?: SortOrder
    valor?: SortOrder
    AnimalId?: SortOrder
    VeterinarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultaAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    AnimalId?: SortOrder
    VeterinarioId?: SortOrder
  }

  export type ConsultaMaxOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    status?: SortOrder
    anotacoes?: SortOrder
    valor?: SortOrder
    AnimalId?: SortOrder
    VeterinarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultaMinOrderByAggregateInput = {
    id?: SortOrder
    dataHora?: SortOrder
    motivo?: SortOrder
    status?: SortOrder
    anotacoes?: SortOrder
    valor?: SortOrder
    AnimalId?: SortOrder
    VeterinarioId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ConsultaSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    AnimalId?: SortOrder
    VeterinarioId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConsultaCreateNestedManyWithoutVeterinarioInput = {
    create?: XOR<ConsultaCreateWithoutVeterinarioInput, ConsultaUncheckedCreateWithoutVeterinarioInput> | ConsultaCreateWithoutVeterinarioInput[] | ConsultaUncheckedCreateWithoutVeterinarioInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutVeterinarioInput | ConsultaCreateOrConnectWithoutVeterinarioInput[]
    createMany?: ConsultaCreateManyVeterinarioInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutVeterinarioInput = {
    create?: XOR<ConsultaCreateWithoutVeterinarioInput, ConsultaUncheckedCreateWithoutVeterinarioInput> | ConsultaCreateWithoutVeterinarioInput[] | ConsultaUncheckedCreateWithoutVeterinarioInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutVeterinarioInput | ConsultaCreateOrConnectWithoutVeterinarioInput[]
    createMany?: ConsultaCreateManyVeterinarioInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUpdateManyWithoutVeterinarioNestedInput = {
    create?: XOR<ConsultaCreateWithoutVeterinarioInput, ConsultaUncheckedCreateWithoutVeterinarioInput> | ConsultaCreateWithoutVeterinarioInput[] | ConsultaUncheckedCreateWithoutVeterinarioInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutVeterinarioInput | ConsultaCreateOrConnectWithoutVeterinarioInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutVeterinarioInput | ConsultaUpsertWithWhereUniqueWithoutVeterinarioInput[]
    createMany?: ConsultaCreateManyVeterinarioInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutVeterinarioInput | ConsultaUpdateWithWhereUniqueWithoutVeterinarioInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutVeterinarioInput | ConsultaUpdateManyWithWhereWithoutVeterinarioInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutVeterinarioNestedInput = {
    create?: XOR<ConsultaCreateWithoutVeterinarioInput, ConsultaUncheckedCreateWithoutVeterinarioInput> | ConsultaCreateWithoutVeterinarioInput[] | ConsultaUncheckedCreateWithoutVeterinarioInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutVeterinarioInput | ConsultaCreateOrConnectWithoutVeterinarioInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutVeterinarioInput | ConsultaUpsertWithWhereUniqueWithoutVeterinarioInput[]
    createMany?: ConsultaCreateManyVeterinarioInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutVeterinarioInput | ConsultaUpdateWithWhereUniqueWithoutVeterinarioInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutVeterinarioInput | ConsultaUpdateManyWithWhereWithoutVeterinarioInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaCreateNestedManyWithoutAnimalInput = {
    create?: XOR<ConsultaCreateWithoutAnimalInput, ConsultaUncheckedCreateWithoutAnimalInput> | ConsultaCreateWithoutAnimalInput[] | ConsultaUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutAnimalInput | ConsultaCreateOrConnectWithoutAnimalInput[]
    createMany?: ConsultaCreateManyAnimalInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
  }

  export type ConsultaUncheckedCreateNestedManyWithoutAnimalInput = {
    create?: XOR<ConsultaCreateWithoutAnimalInput, ConsultaUncheckedCreateWithoutAnimalInput> | ConsultaCreateWithoutAnimalInput[] | ConsultaUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutAnimalInput | ConsultaCreateOrConnectWithoutAnimalInput[]
    createMany?: ConsultaCreateManyAnimalInputEnvelope
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ConsultaUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<ConsultaCreateWithoutAnimalInput, ConsultaUncheckedCreateWithoutAnimalInput> | ConsultaCreateWithoutAnimalInput[] | ConsultaUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutAnimalInput | ConsultaCreateOrConnectWithoutAnimalInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutAnimalInput | ConsultaUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: ConsultaCreateManyAnimalInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutAnimalInput | ConsultaUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutAnimalInput | ConsultaUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type ConsultaUncheckedUpdateManyWithoutAnimalNestedInput = {
    create?: XOR<ConsultaCreateWithoutAnimalInput, ConsultaUncheckedCreateWithoutAnimalInput> | ConsultaCreateWithoutAnimalInput[] | ConsultaUncheckedCreateWithoutAnimalInput[]
    connectOrCreate?: ConsultaCreateOrConnectWithoutAnimalInput | ConsultaCreateOrConnectWithoutAnimalInput[]
    upsert?: ConsultaUpsertWithWhereUniqueWithoutAnimalInput | ConsultaUpsertWithWhereUniqueWithoutAnimalInput[]
    createMany?: ConsultaCreateManyAnimalInputEnvelope
    set?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    disconnect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    delete?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    connect?: ConsultaWhereUniqueInput | ConsultaWhereUniqueInput[]
    update?: ConsultaUpdateWithWhereUniqueWithoutAnimalInput | ConsultaUpdateWithWhereUniqueWithoutAnimalInput[]
    updateMany?: ConsultaUpdateManyWithWhereWithoutAnimalInput | ConsultaUpdateManyWithWhereWithoutAnimalInput[]
    deleteMany?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
  }

  export type AnimalCreateNestedOneWithoutConsultasInput = {
    create?: XOR<AnimalCreateWithoutConsultasInput, AnimalUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutConsultasInput
    connect?: AnimalWhereUniqueInput
  }

  export type VeterinarioCreateNestedOneWithoutConsultasInput = {
    create?: XOR<VeterinarioCreateWithoutConsultasInput, VeterinarioUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: VeterinarioCreateOrConnectWithoutConsultasInput
    connect?: VeterinarioWhereUniqueInput
  }

  export type AnimalUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<AnimalCreateWithoutConsultasInput, AnimalUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: AnimalCreateOrConnectWithoutConsultasInput
    upsert?: AnimalUpsertWithoutConsultasInput
    connect?: AnimalWhereUniqueInput
    update?: XOR<XOR<AnimalUpdateToOneWithWhereWithoutConsultasInput, AnimalUpdateWithoutConsultasInput>, AnimalUncheckedUpdateWithoutConsultasInput>
  }

  export type VeterinarioUpdateOneRequiredWithoutConsultasNestedInput = {
    create?: XOR<VeterinarioCreateWithoutConsultasInput, VeterinarioUncheckedCreateWithoutConsultasInput>
    connectOrCreate?: VeterinarioCreateOrConnectWithoutConsultasInput
    upsert?: VeterinarioUpsertWithoutConsultasInput
    connect?: VeterinarioWhereUniqueInput
    update?: XOR<XOR<VeterinarioUpdateToOneWithWhereWithoutConsultasInput, VeterinarioUpdateWithoutConsultasInput>, VeterinarioUncheckedUpdateWithoutConsultasInput>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type ConsultaCreateWithoutVeterinarioInput = {
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Animal: AnimalCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateWithoutVeterinarioInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    AnimalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultaCreateOrConnectWithoutVeterinarioInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutVeterinarioInput, ConsultaUncheckedCreateWithoutVeterinarioInput>
  }

  export type ConsultaCreateManyVeterinarioInputEnvelope = {
    data: ConsultaCreateManyVeterinarioInput | ConsultaCreateManyVeterinarioInput[]
    skipDuplicates?: boolean
  }

  export type ConsultaUpsertWithWhereUniqueWithoutVeterinarioInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutVeterinarioInput, ConsultaUncheckedUpdateWithoutVeterinarioInput>
    create: XOR<ConsultaCreateWithoutVeterinarioInput, ConsultaUncheckedCreateWithoutVeterinarioInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutVeterinarioInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutVeterinarioInput, ConsultaUncheckedUpdateWithoutVeterinarioInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutVeterinarioInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutVeterinarioInput>
  }

  export type ConsultaScalarWhereInput = {
    AND?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    OR?: ConsultaScalarWhereInput[]
    NOT?: ConsultaScalarWhereInput | ConsultaScalarWhereInput[]
    id?: IntFilter<"Consulta"> | number
    dataHora?: DateTimeFilter<"Consulta"> | Date | string
    motivo?: StringNullableFilter<"Consulta"> | string | null
    status?: StringFilter<"Consulta"> | string
    anotacoes?: StringNullableFilter<"Consulta"> | string | null
    valor?: FloatNullableFilter<"Consulta"> | number | null
    AnimalId?: IntFilter<"Consulta"> | number
    VeterinarioId?: IntFilter<"Consulta"> | number
    createdAt?: DateTimeFilter<"Consulta"> | Date | string
    updatedAt?: DateTimeFilter<"Consulta"> | Date | string
  }

  export type ConsultaCreateWithoutAnimalInput = {
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Veterinario: VeterinarioCreateNestedOneWithoutConsultasInput
  }

  export type ConsultaUncheckedCreateWithoutAnimalInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    VeterinarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultaCreateOrConnectWithoutAnimalInput = {
    where: ConsultaWhereUniqueInput
    create: XOR<ConsultaCreateWithoutAnimalInput, ConsultaUncheckedCreateWithoutAnimalInput>
  }

  export type ConsultaCreateManyAnimalInputEnvelope = {
    data: ConsultaCreateManyAnimalInput | ConsultaCreateManyAnimalInput[]
    skipDuplicates?: boolean
  }

  export type ConsultaUpsertWithWhereUniqueWithoutAnimalInput = {
    where: ConsultaWhereUniqueInput
    update: XOR<ConsultaUpdateWithoutAnimalInput, ConsultaUncheckedUpdateWithoutAnimalInput>
    create: XOR<ConsultaCreateWithoutAnimalInput, ConsultaUncheckedCreateWithoutAnimalInput>
  }

  export type ConsultaUpdateWithWhereUniqueWithoutAnimalInput = {
    where: ConsultaWhereUniqueInput
    data: XOR<ConsultaUpdateWithoutAnimalInput, ConsultaUncheckedUpdateWithoutAnimalInput>
  }

  export type ConsultaUpdateManyWithWhereWithoutAnimalInput = {
    where: ConsultaScalarWhereInput
    data: XOR<ConsultaUpdateManyMutationInput, ConsultaUncheckedUpdateManyWithoutAnimalInput>
  }

  export type AnimalCreateWithoutConsultasInput = {
    nome: string
    especie: string
    raca?: string | null
    sexo?: string | null
    idade?: number | null
    dataNascimento?: Date | string | null
    peso?: number | null
    responsavelNome: string
    responsavelEmail?: string | null
    responsavelTelefone?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimalUncheckedCreateWithoutConsultasInput = {
    id?: number
    nome: string
    especie: string
    raca?: string | null
    sexo?: string | null
    idade?: number | null
    dataNascimento?: Date | string | null
    peso?: number | null
    responsavelNome: string
    responsavelEmail?: string | null
    responsavelTelefone?: string | null
    observacoes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimalCreateOrConnectWithoutConsultasInput = {
    where: AnimalWhereUniqueInput
    create: XOR<AnimalCreateWithoutConsultasInput, AnimalUncheckedCreateWithoutConsultasInput>
  }

  export type VeterinarioCreateWithoutConsultasInput = {
    nome: string
    email: string
    crmv: string
    especialidade: string
    telefone?: string | null
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeterinarioUncheckedCreateWithoutConsultasInput = {
    id?: number
    nome: string
    email: string
    crmv: string
    especialidade: string
    telefone?: string | null
    descricao?: string | null
    ativo?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VeterinarioCreateOrConnectWithoutConsultasInput = {
    where: VeterinarioWhereUniqueInput
    create: XOR<VeterinarioCreateWithoutConsultasInput, VeterinarioUncheckedCreateWithoutConsultasInput>
  }

  export type AnimalUpsertWithoutConsultasInput = {
    update: XOR<AnimalUpdateWithoutConsultasInput, AnimalUncheckedUpdateWithoutConsultasInput>
    create: XOR<AnimalCreateWithoutConsultasInput, AnimalUncheckedCreateWithoutConsultasInput>
    where?: AnimalWhereInput
  }

  export type AnimalUpdateToOneWithWhereWithoutConsultasInput = {
    where?: AnimalWhereInput
    data: XOR<AnimalUpdateWithoutConsultasInput, AnimalUncheckedUpdateWithoutConsultasInput>
  }

  export type AnimalUpdateWithoutConsultasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelNome?: StringFieldUpdateOperationsInput | string
    responsavelEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responsavelTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimalUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    especie?: StringFieldUpdateOperationsInput | string
    raca?: NullableStringFieldUpdateOperationsInput | string | null
    sexo?: NullableStringFieldUpdateOperationsInput | string | null
    idade?: NullableIntFieldUpdateOperationsInput | number | null
    dataNascimento?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    peso?: NullableFloatFieldUpdateOperationsInput | number | null
    responsavelNome?: StringFieldUpdateOperationsInput | string
    responsavelEmail?: NullableStringFieldUpdateOperationsInput | string | null
    responsavelTelefone?: NullableStringFieldUpdateOperationsInput | string | null
    observacoes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeterinarioUpsertWithoutConsultasInput = {
    update: XOR<VeterinarioUpdateWithoutConsultasInput, VeterinarioUncheckedUpdateWithoutConsultasInput>
    create: XOR<VeterinarioCreateWithoutConsultasInput, VeterinarioUncheckedCreateWithoutConsultasInput>
    where?: VeterinarioWhereInput
  }

  export type VeterinarioUpdateToOneWithWhereWithoutConsultasInput = {
    where?: VeterinarioWhereInput
    data: XOR<VeterinarioUpdateWithoutConsultasInput, VeterinarioUncheckedUpdateWithoutConsultasInput>
  }

  export type VeterinarioUpdateWithoutConsultasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    crmv?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VeterinarioUncheckedUpdateWithoutConsultasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    crmv?: StringFieldUpdateOperationsInput | string
    especialidade?: StringFieldUpdateOperationsInput | string
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    descricao?: NullableStringFieldUpdateOperationsInput | string | null
    ativo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateManyVeterinarioInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    AnimalId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultaUpdateWithoutVeterinarioInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Animal?: AnimalUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutVeterinarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    AnimalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaUncheckedUpdateManyWithoutVeterinarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    AnimalId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaCreateManyAnimalInput = {
    id?: number
    dataHora: Date | string
    motivo?: string | null
    status?: string
    anotacoes?: string | null
    valor?: number | null
    VeterinarioId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ConsultaUpdateWithoutAnimalInput = {
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Veterinario?: VeterinarioUpdateOneRequiredWithoutConsultasNestedInput
  }

  export type ConsultaUncheckedUpdateWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    VeterinarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultaUncheckedUpdateManyWithoutAnimalInput = {
    id?: IntFieldUpdateOperationsInput | number
    dataHora?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    anotacoes?: NullableStringFieldUpdateOperationsInput | string | null
    valor?: NullableFloatFieldUpdateOperationsInput | number | null
    VeterinarioId?: IntFieldUpdateOperationsInput | number
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