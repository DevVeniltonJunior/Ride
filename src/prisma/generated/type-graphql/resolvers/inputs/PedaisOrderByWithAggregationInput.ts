import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisAvgOrderByAggregateInput } from "../inputs/PedaisAvgOrderByAggregateInput";
import { PedaisCountOrderByAggregateInput } from "../inputs/PedaisCountOrderByAggregateInput";
import { PedaisMaxOrderByAggregateInput } from "../inputs/PedaisMaxOrderByAggregateInput";
import { PedaisMinOrderByAggregateInput } from "../inputs/PedaisMinOrderByAggregateInput";
import { PedaisSumOrderByAggregateInput } from "../inputs/PedaisSumOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PedaisOrderByWithAggregationInput", {})
export class PedaisOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_date_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  end_date_registration?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  additional_information?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  start_place?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  participants_limit?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PedaisCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PedaisCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PedaisAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PedaisAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PedaisMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PedaisMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PedaisMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PedaisMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PedaisSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PedaisSumOrderByAggregateInput | undefined;
}
