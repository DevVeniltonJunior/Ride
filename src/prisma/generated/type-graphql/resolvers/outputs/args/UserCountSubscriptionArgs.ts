import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SubscriptionWhereInput } from "../../inputs/SubscriptionWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountSubscriptionArgs {
  @TypeGraphQL.Field(_type => SubscriptionWhereInput, {
    nullable: true
  })
  where?: SubscriptionWhereInput | undefined;
}
