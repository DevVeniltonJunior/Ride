import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisWhereInput } from "../inputs/PedaisWhereInput";

@TypeGraphQL.InputType("PedaisRelationFilter", {})
export class PedaisRelationFilter {
  @TypeGraphQL.Field(_type => PedaisWhereInput, {
    nullable: true
  })
  is?: PedaisWhereInput | undefined;

  @TypeGraphQL.Field(_type => PedaisWhereInput, {
    nullable: true
  })
  isNot?: PedaisWhereInput | undefined;
}
