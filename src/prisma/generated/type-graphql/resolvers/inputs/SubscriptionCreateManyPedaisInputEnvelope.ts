import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SubscriptionCreateManyPedaisInput } from "../inputs/SubscriptionCreateManyPedaisInput";

@TypeGraphQL.InputType("SubscriptionCreateManyPedaisInputEnvelope", {})
export class SubscriptionCreateManyPedaisInputEnvelope {
  @TypeGraphQL.Field(_type => [SubscriptionCreateManyPedaisInput], {
    nullable: false
  })
  data!: SubscriptionCreateManyPedaisInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
