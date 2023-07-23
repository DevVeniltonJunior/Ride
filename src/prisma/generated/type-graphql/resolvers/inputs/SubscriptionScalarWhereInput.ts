import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("SubscriptionScalarWhereInput", {})
export class SubscriptionScalarWhereInput {
  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereInput], {
    nullable: true
  })
  AND?: SubscriptionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereInput], {
    nullable: true
  })
  OR?: SubscriptionScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SubscriptionScalarWhereInput], {
    nullable: true
  })
  NOT?: SubscriptionScalarWhereInput[] | undefined;

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
}
