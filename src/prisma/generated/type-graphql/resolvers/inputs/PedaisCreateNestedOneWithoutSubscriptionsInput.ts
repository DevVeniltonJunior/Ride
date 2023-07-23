import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisCreateOrConnectWithoutSubscriptionsInput } from "../inputs/PedaisCreateOrConnectWithoutSubscriptionsInput";
import { PedaisCreateWithoutSubscriptionsInput } from "../inputs/PedaisCreateWithoutSubscriptionsInput";
import { PedaisWhereUniqueInput } from "../inputs/PedaisWhereUniqueInput";

@TypeGraphQL.InputType("PedaisCreateNestedOneWithoutSubscriptionsInput", {})
export class PedaisCreateNestedOneWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => PedaisCreateWithoutSubscriptionsInput, {
    nullable: true
  })
  create?: PedaisCreateWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PedaisCreateOrConnectWithoutSubscriptionsInput, {
    nullable: true
  })
  connectOrCreate?: PedaisCreateOrConnectWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PedaisWhereUniqueInput, {
    nullable: true
  })
  connect?: PedaisWhereUniqueInput | undefined;
}
