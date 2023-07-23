import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSubscriptionInput } from "../inputs/UserCreateNestedOneWithoutSubscriptionInput";

@TypeGraphQL.InputType("SubscriptionCreateWithoutPedaisInput", {})
export class SubscriptionCreateWithoutPedaisInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutSubscriptionInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutSubscriptionInput;
}
