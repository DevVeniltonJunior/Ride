import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisAvgAggregate } from "../outputs/PedaisAvgAggregate";
import { PedaisCountAggregate } from "../outputs/PedaisCountAggregate";
import { PedaisMaxAggregate } from "../outputs/PedaisMaxAggregate";
import { PedaisMinAggregate } from "../outputs/PedaisMinAggregate";
import { PedaisSumAggregate } from "../outputs/PedaisSumAggregate";

@TypeGraphQL.ObjectType("AggregatePedais", {})
export class AggregatePedais {
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
