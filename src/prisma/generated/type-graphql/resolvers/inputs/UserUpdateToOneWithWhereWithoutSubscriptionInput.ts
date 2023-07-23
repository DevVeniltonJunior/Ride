import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutSubscriptionInput } from "../inputs/UserUpdateWithoutSubscriptionInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutSubscriptionInput", {})
export class UserUpdateToOneWithWhereWithoutSubscriptionInput {
  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionInput, {
    nullable: false
  })
  data!: UserUpdateWithoutSubscriptionInput;
}
