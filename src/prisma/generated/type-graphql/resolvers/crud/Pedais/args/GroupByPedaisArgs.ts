import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PedaisOrderByWithAggregationInput } from "../../../inputs/PedaisOrderByWithAggregationInput";
import { PedaisScalarWhereWithAggregatesInput } from "../../../inputs/PedaisScalarWhereWithAggregatesInput";
import { PedaisWhereInput } from "../../../inputs/PedaisWhereInput";
import { PedaisScalarFieldEnum } from "../../../../enums/PedaisScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPedaisArgs {
  @TypeGraphQL.Field(_type => PedaisWhereInput, {
    nullable: true
  })
  where?: PedaisWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PedaisOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PedaisOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PedaisScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "start_date" | "start_date_registration" | "end_date_registration" | "additional_information" | "start_place" | "participants_limit" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => PedaisScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PedaisScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
