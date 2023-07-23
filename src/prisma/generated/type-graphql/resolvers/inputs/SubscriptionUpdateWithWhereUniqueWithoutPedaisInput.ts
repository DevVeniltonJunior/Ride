import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionUpdateWithoutPedaisInput } from "../inputs/SubscriptionUpdateWithoutPedaisInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionUpdateWithWhereUniqueWithoutPedaisInput", {})
export class SubscriptionUpdateWithWhereUniqueWithoutPedaisInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionUpdateWithoutPedaisInput, {
    nullable: false
  })
  data!: SubscriptionUpdateWithoutPedaisInput;
}
