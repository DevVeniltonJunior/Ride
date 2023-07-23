import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisCreateNestedOneWithoutSubscriptionsInput } from "../inputs/PedaisCreateNestedOneWithoutSubscriptionsInput";
import { UserCreateNestedOneWithoutSubscriptionInput } from "../inputs/UserCreateNestedOneWithoutSubscriptionInput";

@TypeGraphQL.InputType("SubscriptionCreateInput", {})
export class SubscriptionCreateInput {
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

  @TypeGraphQL.Field(_type => PedaisCreateNestedOneWithoutSubscriptionsInput, {
    nullable: false
  })
  pedais!: PedaisCreateNestedOneWithoutSubscriptionsInput;
}
