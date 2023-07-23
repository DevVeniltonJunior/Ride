import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisCountSubscriptionsArgs } from "./args/PedaisCountSubscriptionsArgs";

@TypeGraphQL.ObjectType("PedaisCount", {})
export class PedaisCount {
  subscriptions!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "subscriptions",
    nullable: false
  })
  getSubscriptions(@TypeGraphQL.Root() root: PedaisCount, @TypeGraphQL.Args() args: PedaisCountSubscriptionsArgs): number {
    return root.subscriptions;
  }
}
