import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSubscriptionInput } from "../inputs/UserCreateOrConnectWithoutSubscriptionInput";
import { UserCreateWithoutSubscriptionInput } from "../inputs/UserCreateWithoutSubscriptionInput";
import { UserUpdateToOneWithWhereWithoutSubscriptionInput } from "../inputs/UserUpdateToOneWithWhereWithoutSubscriptionInput";
import { UserUpsertWithoutSubscriptionInput } from "../inputs/UserUpsertWithoutSubscriptionInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSubscriptionNestedInput", {})
export class UserUpdateOneRequiredWithoutSubscriptionNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutSubscriptionInput, {
    nullable: true
  })
  create?: UserCreateWithoutSubscriptionInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutSubscriptionInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutSubscriptionInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutSubscriptionInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateToOneWithWhereWithoutSubscriptionInput, {
    nullable: true
  })
  update?: UserUpdateToOneWithWhereWithoutSubscriptionInput | undefined;
}
