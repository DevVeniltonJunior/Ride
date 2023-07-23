import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisUpdateInput } from "../../../inputs/PedaisUpdateInput";
import { PedaisWhereUniqueInput } from "../../../inputs/PedaisWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePedaisArgs {
  @TypeGraphQL.Field(_type => PedaisUpdateInput, {
    nullable: false
  })
  data!: PedaisUpdateInput;

  @TypeGraphQL.Field(_type => PedaisWhereUniqueInput, {
    nullable: false
  })
  where!: PedaisWhereUniqueInput;
}
