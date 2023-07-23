import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisOrderByWithRelationInput } from "../../../inputs/PedaisOrderByWithRelationInput";
import { PedaisWhereInput } from "../../../inputs/PedaisWhereInput";
import { PedaisWhereUniqueInput } from "../../../inputs/PedaisWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePedaisArgs {
  @TypeGraphQL.Field(_type => PedaisWhereInput, {
    nullable: true
  })
  where?: PedaisWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PedaisOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PedaisOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PedaisWhereUniqueInput, {
    nullable: true
  })
  cursor?: PedaisWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
