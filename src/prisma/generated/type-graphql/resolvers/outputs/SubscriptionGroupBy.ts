import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionAvgAggregate } from "../outputs/SubscriptionAvgAggregate";
import { SubscriptionCountAggregate } from "../outputs/SubscriptionCountAggregate";
import { SubscriptionMaxAggregate } from "../outputs/SubscriptionMaxAggregate";
import { SubscriptionMinAggregate } from "../outputs/SubscriptionMinAggregate";
import { SubscriptionSumAggregate } from "../outputs/SubscriptionSumAggregate";

@TypeGraphQL.ObjectType("SubscriptionGroupBy", {})
export class SubscriptionGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ride_id!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  user_id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  subscription_date!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => SubscriptionCountAggregate, {
    nullable: true
  })
  _count!: SubscriptionCountAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionAvgAggregate, {
    nullable: true
  })
  _avg!: SubscriptionAvgAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionSumAggregate, {
    nullable: true
  })
  _sum!: SubscriptionSumAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionMinAggregate, {
    nullable: true
  })
  _min!: SubscriptionMinAggregate | null;

  @TypeGraphQL.Field(_type => SubscriptionMaxAggregate, {
    nullable: true
  })
  _max!: SubscriptionMaxAggregate | null;
}
