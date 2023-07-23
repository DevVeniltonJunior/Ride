import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisUpdateManyMutationInput } from "../../../inputs/PedaisUpdateManyMutationInput";
import { PedaisWhereInput } from "../../../inputs/PedaisWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPedaisArgs {
  @TypeGraphQL.Field(_type => PedaisUpdateManyMutationInput, {
    nullable: false
  })
  data!: PedaisUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PedaisWhereInput, {
    nullable: true
  })
  where?: PedaisWhereInput | undefined;
}
