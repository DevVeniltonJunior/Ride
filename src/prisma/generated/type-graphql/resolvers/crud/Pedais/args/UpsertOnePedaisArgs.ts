import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisCreateInput } from "../../../inputs/PedaisCreateInput";
import { PedaisUpdateInput } from "../../../inputs/PedaisUpdateInput";
import { PedaisWhereUniqueInput } from "../../../inputs/PedaisWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePedaisArgs {
  @TypeGraphQL.Field(_type => PedaisWhereUniqueInput, {
    nullable: false
  })
  where!: PedaisWhereUniqueInput;

  @TypeGraphQL.Field(_type => PedaisCreateInput, {
    nullable: false
  })
  create!: PedaisCreateInput;

  @TypeGraphQL.Field(_type => PedaisUpdateInput, {
    nullable: false
  })
  update!: PedaisUpdateInput;
}
