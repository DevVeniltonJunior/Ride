import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisCreateNestedOneWithoutSubscriptionsInput } from "../inputs/PedaisCreateNestedOneWithoutSubscriptionsInput";

@TypeGraphQL.InputType("SubscriptionCreateWithoutUserInput", {})
export class SubscriptionCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  subscription_date?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PedaisCreateNestedOneWithoutSubscriptionsInput, {
    nullable: false
  })
  pedais!: PedaisCreateNestedOneWithoutSubscriptionsInput;
}
