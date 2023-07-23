import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("PedaisCreateManyInput", {})
export class PedaisCreateManyInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  start_date_registration!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  end_date_registration!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  additional_information?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  start_place!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  participants_limit?: number | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;
}
