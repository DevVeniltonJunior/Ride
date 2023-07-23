import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Subscription } from "../models/Subscription";
import { PedaisCount } from "../resolvers/outputs/PedaisCount";

@TypeGraphQL.ObjectType("Pedais", {})
export class Pedais {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

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
  additional_information?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  start_place!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  participants_limit?: number | null;

  subscriptions?: Subscription[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PedaisCount, {
    nullable: true
  })
  _count?: PedaisCount | null;
}
