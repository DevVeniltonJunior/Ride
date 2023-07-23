import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionWhereUniqueInput } from "../../../inputs/SubscriptionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSubscriptionOrThrowArgs {
  @TypeGraphQL.Field(_type => SubscriptionWhereUniqueInput, {
    nullable: false
  })
  where!: SubscriptionWhereUniqueInput;
}
