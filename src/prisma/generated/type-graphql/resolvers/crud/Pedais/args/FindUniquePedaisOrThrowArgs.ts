import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisWhereUniqueInput } from "../../../inputs/PedaisWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePedaisOrThrowArgs {
  @TypeGraphQL.Field(_type => PedaisWhereUniqueInput, {
    nullable: false
  })
  where!: PedaisWhereUniqueInput;
}
