import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountSubscriptionArgs } from "./args/UserCountSubscriptionArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  subscription!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "subscription",
    nullable: false
  })
  getSubscription(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountSubscriptionArgs): number {
    return root.subscription;
  }
}
