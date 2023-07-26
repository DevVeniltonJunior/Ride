import { RideResolver } from "../resolvers/RideResolver"
import { UserResolver } from "../resolvers/UserResolver"
import { SubscriptionResolver } from "../resolvers/SubscriptionResolver"
import { buildSchemaSync } from 'type-graphql'


export const schema = buildSchemaSync({
  resolvers: [UserResolver, RideResolver, SubscriptionResolver]
})

