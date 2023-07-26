import { Arg, Authorized, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql"
import { DbUser } from "../prisma/DbUser"
import { Subscription } from "../schemas/Subscription"
import { Auth } from "../schemas/Auth"

@InputType()
class QuerySubscription {
  @Field()
  id: number

  @Field()
  user_id: number
}

@Resolver()
export class SubscriptionResolver {
  @Query(() => Subscription)
  @Authorized()
  async privateInfo(@Arg("data") data: QuerySubscription,): Promise<Subscription | null> {
    const subscription = await DbUser.prisma.subscription.findUnique({ where: { id_user_id: { id: data.id, user_id: data.user_id } } })

    if(!subscription) return null

    return subscription
  }

  @Mutation(() => Subscription)
  @Authorized()
  async subscrive(@Arg("ride_id") ride_id: number, @Ctx() ctx: Auth): Promise<Subscription | null> {
    const subscription_date = new Date().toISOString()
    const end_date_registration = (await DbUser.prisma.ride.findUnique({ where: { id: ride_id } }))?.end_date_registration.toISOString()

    if(!end_date_registration || end_date_registration < subscription_date ) return null

    const subscription = await DbUser.prisma.subscription.create({ data: {
      ride_id, 
      user_id: ctx.user.id,
      subscription_date
      }
    })

    if(!subscription) return null

    return subscription
  }
}

