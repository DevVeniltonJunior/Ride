import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateWithoutPedaisInput } from "../inputs/SubscriptionCreateWithoutPedaisInput";
import { SubscriptionWhereUniqueInput } from "../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.InputType("SubscriptionCreateOrConnectWithoutPedaisInput", {})
export class SubscriptionCreateOrConnectWithoutPedaisInput {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SubscriptionCreateWithoutPedaisInput, {
    nullable: false
  })
  create!: SubscriptionCreateWithoutPedaisInput;
}
