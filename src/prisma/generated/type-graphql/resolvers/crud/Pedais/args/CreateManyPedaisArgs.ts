import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisCreateManyInput } from "../../../inputs/PedaisCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPedaisArgs {
  @TypeGraphQL.Field(_type => [PedaisCreateManyInput], {
    nullable: false
  })
  data!: PedaisCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
