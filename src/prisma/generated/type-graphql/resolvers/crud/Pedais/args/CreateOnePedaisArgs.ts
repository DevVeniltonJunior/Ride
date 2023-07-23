import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisCreateInput } from "../../../inputs/PedaisCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePedaisArgs {
  @TypeGraphQL.Field(_type => PedaisCreateInput, {
    nullable: false
  })
  data!: PedaisCreateInput;
}
