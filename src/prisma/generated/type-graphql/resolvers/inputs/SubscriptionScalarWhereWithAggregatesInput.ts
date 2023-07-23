import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("SubscriptionScalarWhereWithAggregatesInput", {})
export class SubscriptionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SubscriptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SubscriptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SubscriptionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  ride_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  user_id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  subscription_date?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
