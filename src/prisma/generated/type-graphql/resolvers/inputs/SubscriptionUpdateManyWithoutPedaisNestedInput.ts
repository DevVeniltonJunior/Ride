import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyPedaisInputEnvelope } from "../inputs/SubscriptionCreateManyPedaisInputEnvelope";
import { SubscriptionCreateOrConnectWithoutPedaisInput } from "../inputs/SubscriptionCreateOrConnectWithoutPedaisInput";
import { SubscriptionCreateWithoutPedaisInput } from "../inputs/SubscriptionCreateWithoutPedaisInput";
import { SubscriptionScalarWhereInput } from "../inputs/SubscriptionScalarWhereInput";
import { SubscriptionUpdateManyWithWhereWithoutPedaisInput } from "../inputs/SubscriptionUpdateManyWithWhereWithoutPedaisInput";
import { SubscriptionUpdateWithWhereUniqueWithoutPedaisInput } from "../inputs/SubscriptionUpdateWithWhereUniqueWithoutPedaisInput";
import { SubscriptionUpsertWithWhereUniqueWithoutPedaisInput } from "../inputs/SubscriptionUpsertWithWhereUniqueWithoutPedaisInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpdateManyWithoutPedaisNestedInput", {})
export class SubscriptionUpdateManyWithoutPedaisNestedInput {
  @TypeGraphQL.Field(_type => [SubscriptionCreateWithoutPedaisInput], {
    nullable: true
  })
  create?: SubscriptionCreateWithoutPedaisInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionCreateOrConnectWithoutPedaisInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionCreateOrConnectWithoutPedaisInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpsertWithWhereUniqueWithoutPedaisInput], {
    nullable: true
  })
  upsert?: SubscriptionUpsertWithWhereUniqueWithoutPedaisInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateManyPedaisInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionCreateManyPedaisInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  set?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  delete?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpdateWithWhereUniqueWithoutPedaisInput], {
    nullable: true
  })
  update?: SubscriptionUpdateWithWhereUniqueWithoutPedaisInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionUpdateManyWithWhereWithoutPedaisInput], {
    nullable: true
  })
  updateMany?: SubscriptionUpdateManyWithWhereWithoutPedaisInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SubscriptionScalarWhereInput[] | undefined;
}
