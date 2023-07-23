import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisCreateWithoutSubscriptionsInput } from "../inputs/PedaisCreateWithoutSubscriptionsInput";
import { PedaisWhereUniqueInput } from "../inputs/PedaisWhereUniqueInput";

@TypeGraphQL.InputType("PedaisCreateOrConnectWithoutSubscriptionsInput", {})
export class PedaisCreateOrConnectWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => PedaisWhereUniqueInput, {
    nullable: false
  })
  where!: PedaisWhereUniqueInput;

  @TypeGraphQL.Field(_type => PedaisCreateWithoutSubscriptionsInput, {
    nullable: false
  })
  create!: PedaisCreateWithoutSubscriptionsInput;
}
