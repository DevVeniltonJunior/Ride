import * as TypeGraphQL from "type-graphql";

export enum SubscriptionScalarFieldEnum {
  id = "id",
  ride_id = "ride_id",
  user_id = "user_id",
  subscription_date = "subscription_date",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(SubscriptionScalarFieldEnum, {
  name: "SubscriptionScalarFieldEnum",
  description: undefined,
});
