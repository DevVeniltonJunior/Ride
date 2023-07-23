import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisAvgAggregate } from "../outputs/PedaisAvgAggregate";
import { PedaisCountAggregate } from "../outputs/PedaisCountAggregate";
import { PedaisMaxAggregate } from "../outputs/PedaisMaxAggregate";
import { PedaisMinAggregate } from "../outputs/PedaisMinAggregate";
import { PedaisSumAggregate } from "../outputs/PedaisSumAggregate";

@TypeGraphQL.ObjectType("PedaisGroupBy", {})
export class PedaisGroupBy {
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
  additional_information!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  start_place!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  participants_limit!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PedaisCountAggregate, {
    nullable: true
  })
  _count!: PedaisCountAggregate | null;

  @TypeGraphQL.Field(_type => PedaisAvgAggregate, {
    nullable: true
  })
  _avg!: PedaisAvgAggregate | null;

  @TypeGraphQL.Field(_type => PedaisSumAggregate, {
    nullable: true
  })
  _sum!: PedaisSumAggregate | null;

  @TypeGraphQL.Field(_type => PedaisMinAggregate, {
    nullable: true
  })
  _min!: PedaisMinAggregate | null;

  @TypeGraphQL.Field(_type => PedaisMaxAggregate, {
    nullable: true
  })
  _max!: PedaisMaxAggregate | null;
}
