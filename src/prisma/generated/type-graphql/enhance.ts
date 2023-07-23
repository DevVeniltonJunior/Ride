import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Pedais: crudResolvers.PedaisCrudResolver,
  Subscription: crudResolvers.SubscriptionCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Pedais: {
    aggregatePedais: actionResolvers.AggregatePedaisResolver,
    createManyPedais: actionResolvers.CreateManyPedaisResolver,
    createOnePedais: actionResolvers.CreateOnePedaisResolver,
    deleteManyPedais: actionResolvers.DeleteManyPedaisResolver,
    deleteOnePedais: actionResolvers.DeleteOnePedaisResolver,
    findFirstPedais: actionResolvers.FindFirstPedaisResolver,
    findFirstPedaisOrThrow: actionResolvers.FindFirstPedaisOrThrowResolver,
    findManyPedais: actionResolvers.FindManyPedaisResolver,
    findUniquePedais: actionResolvers.FindUniquePedaisResolver,
    findUniquePedaisOrThrow: actionResolvers.FindUniquePedaisOrThrowResolver,
    groupByPedais: actionResolvers.GroupByPedaisResolver,
    updateManyPedais: actionResolvers.UpdateManyPedaisResolver,
    updateOnePedais: actionResolvers.UpdateOnePedaisResolver,
    upsertOnePedais: actionResolvers.UpsertOnePedaisResolver
  },
  Subscription: {
    aggregateSubscription: actionResolvers.AggregateSubscriptionResolver,
    createManySubscription: actionResolvers.CreateManySubscriptionResolver,
    createOneSubscription: actionResolvers.CreateOneSubscriptionResolver,
    deleteManySubscription: actionResolvers.DeleteManySubscriptionResolver,
    deleteOneSubscription: actionResolvers.DeleteOneSubscriptionResolver,
    findFirstSubscription: actionResolvers.FindFirstSubscriptionResolver,
    findFirstSubscriptionOrThrow: actionResolvers.FindFirstSubscriptionOrThrowResolver,
    subscriptions: actionResolvers.FindManySubscriptionResolver,
    subscription: actionResolvers.FindUniqueSubscriptionResolver,
    getSubscription: actionResolvers.FindUniqueSubscriptionOrThrowResolver,
    groupBySubscription: actionResolvers.GroupBySubscriptionResolver,
    updateManySubscription: actionResolvers.UpdateManySubscriptionResolver,
    updateOneSubscription: actionResolvers.UpdateOneSubscriptionResolver,
    upsertOneSubscription: actionResolvers.UpsertOneSubscriptionResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Pedais: ["aggregatePedais", "createManyPedais", "createOnePedais", "deleteManyPedais", "deleteOnePedais", "findFirstPedais", "findFirstPedaisOrThrow", "findManyPedais", "findUniquePedais", "findUniquePedaisOrThrow", "groupByPedais", "updateManyPedais", "updateOnePedais", "upsertOnePedais"],
  Subscription: ["aggregateSubscription", "createManySubscription", "createOneSubscription", "deleteManySubscription", "deleteOneSubscription", "findFirstSubscription", "findFirstSubscriptionOrThrow", "subscriptions", "subscription", "getSubscription", "groupBySubscription", "updateManySubscription", "updateOneSubscription", "upsertOneSubscription"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregatePedaisArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPedaisArgs: ["data", "skipDuplicates"],
  CreateOnePedaisArgs: ["data"],
  DeleteManyPedaisArgs: ["where"],
  DeleteOnePedaisArgs: ["where"],
  FindFirstPedaisArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPedaisOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPedaisArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePedaisArgs: ["where"],
  FindUniquePedaisOrThrowArgs: ["where"],
  GroupByPedaisArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPedaisArgs: ["data", "where"],
  UpdateOnePedaisArgs: ["data", "where"],
  UpsertOnePedaisArgs: ["where", "create", "update"],
  AggregateSubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySubscriptionArgs: ["data", "skipDuplicates"],
  CreateOneSubscriptionArgs: ["data"],
  DeleteManySubscriptionArgs: ["where"],
  DeleteOneSubscriptionArgs: ["where"],
  FindFirstSubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSubscriptionOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySubscriptionArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSubscriptionArgs: ["where"],
  FindUniqueSubscriptionOrThrowArgs: ["where"],
  GroupBySubscriptionArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySubscriptionArgs: ["data", "where"],
  UpdateOneSubscriptionArgs: ["data", "where"],
  UpsertOneSubscriptionArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Pedais: relationResolvers.PedaisRelationsResolver,
  Subscription: relationResolvers.SubscriptionRelationsResolver
};
const relationResolversInfo = {
  User: ["subscription"],
  Pedais: ["subscriptions"],
  Subscription: ["user", "pedais"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  Pedais: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  Subscription: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "name", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePedais: ["_count", "_avg", "_sum", "_min", "_max"],
  PedaisGroupBy: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateSubscription: ["_count", "_avg", "_sum", "_min", "_max"],
  SubscriptionGroupBy: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["subscription"],
  UserCountAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  PedaisCount: ["subscriptions"],
  PedaisCountAggregate: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt", "_all"],
  PedaisAvgAggregate: ["id", "participants_limit"],
  PedaisSumAggregate: ["id", "participants_limit"],
  PedaisMinAggregate: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  PedaisMaxAggregate: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  SubscriptionCountAggregate: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt", "_all"],
  SubscriptionAvgAggregate: ["id", "ride_id", "user_id"],
  SubscriptionSumAggregate: ["id", "ride_id", "user_id"],
  SubscriptionMinAggregate: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"],
  SubscriptionMaxAggregate: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "createdAt", "updatedAt", "subscription"],
  UserOrderByWithRelationInput: ["id", "name", "email", "password", "createdAt", "updatedAt", "subscription"],
  UserWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "email", "password", "createdAt", "updatedAt", "subscription"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "password", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "createdAt", "updatedAt"],
  PedaisWhereInput: ["AND", "OR", "NOT", "id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt", "subscriptions"],
  PedaisOrderByWithRelationInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt", "subscriptions"],
  PedaisWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt", "subscriptions"],
  PedaisOrderByWithAggregationInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PedaisScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  SubscriptionWhereInput: ["AND", "OR", "NOT", "id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt", "user", "pedais"],
  SubscriptionOrderByWithRelationInput: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt", "user", "pedais"],
  SubscriptionWhereUniqueInput: ["id", "AND", "OR", "NOT", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt", "user", "pedais"],
  SubscriptionOrderByWithAggregationInput: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  SubscriptionScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"],
  UserCreateInput: ["name", "email", "password", "createdAt", "updatedAt", "subscription"],
  UserUpdateInput: ["name", "email", "password", "createdAt", "updatedAt", "subscription"],
  UserCreateManyInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["name", "email", "password", "createdAt", "updatedAt"],
  PedaisCreateInput: ["name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt", "subscriptions"],
  PedaisUpdateInput: ["name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt", "subscriptions"],
  PedaisCreateManyInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  PedaisUpdateManyMutationInput: ["name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  SubscriptionCreateInput: ["subscription_date", "createdAt", "updatedAt", "user", "pedais"],
  SubscriptionUpdateInput: ["subscription_date", "createdAt", "updatedAt", "user", "pedais"],
  SubscriptionCreateManyInput: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"],
  SubscriptionUpdateManyMutationInput: ["subscription_date", "createdAt", "updatedAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SubscriptionListRelationFilter: ["every", "some", "none"],
  SubscriptionOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "password", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SortOrderInput: ["sort", "nulls"],
  PedaisCountOrderByAggregateInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  PedaisAvgOrderByAggregateInput: ["id", "participants_limit"],
  PedaisMaxOrderByAggregateInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  PedaisMinOrderByAggregateInput: ["id", "name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  PedaisSumOrderByAggregateInput: ["id", "participants_limit"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  UserRelationFilter: ["is", "isNot"],
  PedaisRelationFilter: ["is", "isNot"],
  SubscriptionCountOrderByAggregateInput: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"],
  SubscriptionAvgOrderByAggregateInput: ["id", "ride_id", "user_id"],
  SubscriptionMaxOrderByAggregateInput: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"],
  SubscriptionMinOrderByAggregateInput: ["id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"],
  SubscriptionSumOrderByAggregateInput: ["id", "ride_id", "user_id"],
  SubscriptionCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  SubscriptionUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  SubscriptionCreateNestedManyWithoutPedaisInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  SubscriptionUpdateManyWithoutPedaisNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutSubscriptionInput: ["create", "connectOrCreate", "connect"],
  PedaisCreateNestedOneWithoutSubscriptionsInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutSubscriptionNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PedaisUpdateOneRequiredWithoutSubscriptionsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  SubscriptionCreateWithoutUserInput: ["subscription_date", "createdAt", "updatedAt", "pedais"],
  SubscriptionCreateOrConnectWithoutUserInput: ["where", "create"],
  SubscriptionCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  SubscriptionUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  SubscriptionUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  SubscriptionUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  SubscriptionScalarWhereInput: ["AND", "OR", "NOT", "id", "ride_id", "user_id", "subscription_date", "createdAt", "updatedAt"],
  SubscriptionCreateWithoutPedaisInput: ["subscription_date", "createdAt", "updatedAt", "user"],
  SubscriptionCreateOrConnectWithoutPedaisInput: ["where", "create"],
  SubscriptionCreateManyPedaisInputEnvelope: ["data", "skipDuplicates"],
  SubscriptionUpsertWithWhereUniqueWithoutPedaisInput: ["where", "update", "create"],
  SubscriptionUpdateWithWhereUniqueWithoutPedaisInput: ["where", "data"],
  SubscriptionUpdateManyWithWhereWithoutPedaisInput: ["where", "data"],
  UserCreateWithoutSubscriptionInput: ["name", "email", "password", "createdAt", "updatedAt"],
  UserCreateOrConnectWithoutSubscriptionInput: ["where", "create"],
  PedaisCreateWithoutSubscriptionsInput: ["name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  PedaisCreateOrConnectWithoutSubscriptionsInput: ["where", "create"],
  UserUpsertWithoutSubscriptionInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutSubscriptionInput: ["where", "data"],
  UserUpdateWithoutSubscriptionInput: ["name", "email", "password", "createdAt", "updatedAt"],
  PedaisUpsertWithoutSubscriptionsInput: ["update", "create", "where"],
  PedaisUpdateToOneWithWhereWithoutSubscriptionsInput: ["where", "data"],
  PedaisUpdateWithoutSubscriptionsInput: ["name", "start_date", "start_date_registration", "end_date_registration", "additional_information", "start_place", "participants_limit", "createdAt", "updatedAt"],
  SubscriptionCreateManyUserInput: ["id", "ride_id", "subscription_date", "createdAt", "updatedAt"],
  SubscriptionUpdateWithoutUserInput: ["subscription_date", "createdAt", "updatedAt", "pedais"],
  SubscriptionCreateManyPedaisInput: ["id", "user_id", "subscription_date", "createdAt", "updatedAt"],
  SubscriptionUpdateWithoutPedaisInput: ["subscription_date", "createdAt", "updatedAt", "user"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

