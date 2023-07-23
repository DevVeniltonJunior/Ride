import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisUpdateWithoutSubscriptionsInput } from "../inputs/PedaisUpdateWithoutSubscriptionsInput";
import { PedaisWhereInput } from "../inputs/PedaisWhereInput";

@TypeGraphQL.InputType("PedaisUpdateToOneWithWhereWithoutSubscriptionsInput", {})
export class PedaisUpdateToOneWithWhereWithoutSubscriptionsInput {
  @TypeGraphQL.Field(_type => PedaisWhereInput, {
    nullable: true
  })
  where?: PedaisWhereInput | undefined;

  @TypeGraphQL.Field(_type => PedaisUpdateWithoutSubscriptionsInput, {
    nullable: false
  })
  data!: PedaisUpdateWithoutSubscriptionsInput;
}
