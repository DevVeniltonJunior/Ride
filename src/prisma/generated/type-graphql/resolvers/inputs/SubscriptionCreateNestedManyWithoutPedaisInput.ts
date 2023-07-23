import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyPedaisInputEnvelope } from "../inputs/SubscriptionCreateManyPedaisInputEnvelope";
import { SubscriptionCreateOrConnectWithoutPedaisInput } from "../inputs/SubscriptionCreateOrConnectWithoutPedaisInput";
import { SubscriptionCreateWithoutPedaisInput } from "../inputs/SubscriptionCreateWithoutPedaisInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionCreateNestedManyWithoutPedaisInput", {})
export class SubscriptionCreateNestedManyWithoutPedaisInput {
  @TypeGraphQL.Field(_type => [SubscriptionCreateWithoutPedaisInput], {
    nullable: true
  })
  create?: SubscriptionCreateWithoutPedaisInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionCreateOrConnectWithoutPedaisInput], {
    nullable: true
  })
  connectOrCreate?: SubscriptionCreateOrConnectWithoutPedaisInput[] | undefined;

  @TypeGraphQL.Field(_type => SubscriptionCreateManyPedaisInputEnvelope, {
    nullable: true
  })
  createMany?: SubscriptionCreateManyPedaisInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereUniqueInput], {
    nullable: true
  })
  connect?: SubscriptionWhereUniqueInput[] | undefined;
}
