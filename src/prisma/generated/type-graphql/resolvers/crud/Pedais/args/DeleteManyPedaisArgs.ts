import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisWhereInput } from "../../../inputs/PedaisWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPedaisArgs {
  @TypeGraphQL.Field(_type => PedaisWhereInput, {
    nullable: true
  })
  where?: PedaisWhereInput | undefined;
}
