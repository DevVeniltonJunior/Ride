import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { PedaisRelationFilter } from "../inputs/PedaisRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SubscriptionWhereInput", {})
export class SubscriptionWhereInput {
  @TypeGraphQL.Field(_type => [SubscriptionWhereInput], {
    nullable: true
  })
  AND?: SubscriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereInput], {
    nullable: true
  })
  OR?: SubscriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionWhereInput], {
    nullable: true
  })
  NOT?: SubscriptionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  ride_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  user_id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  subscription_date?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(_type => PedaisRelationFilter, {
    nullable: true
  })
  pedais?: PedaisRelationFilter | undefined;
}
