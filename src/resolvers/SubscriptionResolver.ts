import { Arg, Authorized, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql"
import { DbUser } from "../prisma/DbUser"
import { Subscription } from "../schemas/Subscription"
import { verify } from "jsonwebtoken"
import AuthConfig from "../config/authetication/Auth"

@InputType()
class QuerySubscription {
  @Field()
  id: number

  @Field()
  user_id: number
}

@Resolver()
export class SubscriptionResolver {
  @Query(() => [Subscription!])
  @Authorized()
  async mySubscriptions(@Ctx() context: any): Promise<Subscription[] | null> {
    const authHeader = context.token

    const [, token] = authHeader.split(' ')
    
    if (!token) {
      throw new Error("Token de autorização não fornecido.");
    }

      const userId = (verify(token, AuthConfig.jwt.secret)).sub
      
      if (!userId) return null

      const idString = userId.toString().replace(/"/g, '')

      const id = parseInt(idString)

    const subscription = await DbUser.prisma.subscription.findMany({ where: {user_id: id } } )

    if(!subscription) return null

    return subscription
  }

  @Mutation(() => Subscription)
  @Authorized()
  async subscrive(@Arg("ride_id") ride_id: number, @Ctx() context: any): Promise<Subscription | null> {
    const authHeader = context.token

    const [, token] = authHeader.split(' ')
    
    if (!token) {
      throw new Error("Token de autorização não fornecido.");
    }

    const tokenuserId = (verify(token, AuthConfig.jwt.secret)).sub
      
    if (!tokenuserId) return null

    const idString = tokenuserId.toString().replace(/"/g, '')

    const userId = parseInt(idString)

    const subscription_date = new Date().toISOString()
    const end_date_registration = (await DbUser.prisma.ride.findUnique({ where: { id: ride_id } }))?.end_date_registration.toISOString()

    if(!end_date_registration || end_date_registration < subscription_date ) return null

    const subscription = await DbUser.prisma.subscription.create({ data: {
      ride_id, 
      user_id: userId,
      subscription_date
      }
    })

    if(!subscription) return null

    return subscription
  }
}

