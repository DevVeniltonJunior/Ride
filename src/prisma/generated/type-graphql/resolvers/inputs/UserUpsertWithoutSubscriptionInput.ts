import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSubscriptionInput } from "../inputs/UserCreateWithoutSubscriptionInput";
import { UserUpdateWithoutSubscriptionInput } from "../inputs/UserUpdateWithoutSubscriptionInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutSubscriptionInput", {})
export class UserUpsertWithoutSubscriptionInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutSubscriptionInput, {
    nullable: false
  })
  update!: UserUpdateWithoutSubscriptionInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionInput, {
    nullable: false
  })
  create!: UserCreateWithoutSubscriptionInput;

  @TypeGraphQL.Field(_type => UserWhereInput, {
    nullable: true
  })
  where?: UserWhereInput | undefined;
}
