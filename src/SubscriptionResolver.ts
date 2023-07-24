import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql"
import { Context } from "./Context"
import { Subscription } from "./Subscription"

@InputType()
class SubscriptionInput {
  @Field()
  ride_id: number
}

@InputType()
class SubscriptionData {
  @Field()
  subscription: SubscriptionInput
  
  @Field()
  token: string
}

@InputType()
class QuerySubscription {
  @Field()
  id: number
  
  @Field()
  token: string
}

@Resolver()
export class SubscriptionResolver {
  @Query(() => Subscription)
  async privateInfo(@Arg("data") data: QuerySubscription, @Ctx() ctx: Context): Promise<Subscription | null> {
    const dbToken = await ctx.prisma.tokens.findUnique({
      where: { token: data.token }
    })

    if(!dbToken) return null

    const subscription = await ctx.prisma.subscription.findUnique({ where: { id: data.id } })

    if(!subscription) return null

    return subscription
  }

  @Mutation(() => Subscription)
  async subscrive(@Arg("data") data: SubscriptionData, @Ctx() ctx: Context): Promise<Subscription | null> {
    const dbToken = await ctx.prisma.tokens.findUnique({
      where: { token: data.token }
    })

    if(!dbToken) return null

    const subscription_date = new Date().toISOString()
    const end_date_registration = (await ctx.prisma.ride.findUnique({ where: { id: data.subscription.ride_id }}))?.end_date_registration.toISOString()

    if(!end_date_registration || end_date_registration < subscription_date ) return null

    const subscription = await ctx.prisma.subscription.create({ data: Object.assign(data.subscription, {
      subscription_date: subscription_date,
      user_id: dbToken.user_id
    }) })

    if(!subscription) return null

    return subscription
  }
}

