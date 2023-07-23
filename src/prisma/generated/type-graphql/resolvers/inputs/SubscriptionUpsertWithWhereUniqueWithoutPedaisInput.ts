import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateWithoutPedaisInput } from "../inputs/SubscriptionCreateWithoutPedaisInput";
import { SubscriptionUpdateWithoutPedaisInput } from "../inputs/SubscriptionUpdateWithoutPedaisInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpsertWithWhereUniqueWithoutPedaisInput", {})
export class SubscriptionUpsertWithWhereUniqueWithoutPedaisInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionUpdateWithoutPedaisInput, {
    nullable: false
  })
  update!: SubscriptionUpdateWithoutPedaisInput;

  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutPedaisInput, {
    nullable: false
  })
  create!: SubscriptionCreateWithoutPedaisInput;
}
