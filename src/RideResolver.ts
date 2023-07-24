import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver } from "type-graphql"
import { Context } from "./Context"
import { Ride } from "./Ride"

@InputType()
class RideInput {
  @Field()
    name: string

    @Field()
    start_date: Date

    @Field()
    start_date_registration: Date

    @Field()
    end_date_registration: Date

    @Field()
    additional_information: string

    @Field()
    start_place: string

    @Field()
    participants_limit: number
}

@InputType()
class CreateRideInputData {
  @Field()
  ride: RideInput
  
  @Field()
  token: string
}

@InputType()
class QueryRideData {
  @Field()
  id: number
  
  @Field()
  token: string
}

@Resolver()
export class RideResolver {
  @Query(() => Ride, { nullable: true })
  async privateInfo(@Arg("data") data: QueryRideData, @Ctx() ctx: Context): Promise<Ride | null> {
      const dbToken = await ctx.prisma.tokens.findUnique({
        where: { token: data.token }
      })

      if(!dbToken) return null

      const ride = await ctx.prisma.ride.findUnique({ where: { id: data.id } })

      if(!ride) return null

      return ride
    }
  
  @Mutation(() => Ride)
  async createRide(@Arg("data") data: CreateRideInputData, @Ctx() ctx: Context): Promise<Ride | null> {
    const dbToken = await ctx.prisma.tokens.findUnique({
      where: { token: data.token }
    })

    if(!dbToken) return null

    const ride = ctx.prisma.ride.create({ data: data.ride })

    if(!ride) return null

    return ride
  }
}
