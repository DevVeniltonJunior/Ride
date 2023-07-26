import { RideResolver } from "../resolvers/RideResolver"
import { UserResolver } from "../resolvers/UserResolver"
import { SubscriptionResolver } from "../resolvers/SubscriptionResolver"
import { Ride } from "./Ride"
import { User } from "./User"
import { Subscription } from "./Subscription"
import { buildSchemaSync } from 'type-graphql'
import { Auth } from "./Auth"
import { AuthResolver } from "../resolvers/SessionResolver"

import { AuthenticationAssurence } from "../middlewares/AuthenticationAssurence"


export const schema = buildSchemaSync({
  resolvers: [User, UserResolver, Ride, RideResolver, Subscription, SubscriptionResolver, Auth, AuthResolver],
  authChecker: AuthenticationAssurence
})

