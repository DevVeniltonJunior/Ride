import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisCreateWithoutSubscriptionsInput } from "../inputs/PedaisCreateWithoutSubscriptionsInput";
import { PedaisUpdateWithoutSubscriptionsInput } from "../inputs/PedaisUpdateWithoutSubscriptionsInput";
import { PedaisWhereInput } from "../inputs/PedaisWhereInput";

@TypeGraphQL.InputType("PedaisUpsertWithoutSubscriptionsInput", {})
export class PedaisUpsertWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => PedaisUpdateWithoutSubscriptionsInput, {
    nullable: false
  })
  update!: PedaisUpdateWithoutSubscriptionsInput;

  @TypeGraphQL.Field(_type => PedaisCreateWithoutSubscriptionsInput, {
    nullable: false
  })
  create!: PedaisCreateWithoutSubscriptionsInput;

  @TypeGraphQL.Field(_type => PedaisWhereInput, {
    nullable: true
  })
  where?: PedaisWhereInput | undefined;
}
