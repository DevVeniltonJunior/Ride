import { Arg, Ctx, Field, InputType, Mutation, Query, Resolver, Authorized } from "type-graphql"
import { Context, DbUser } from "../prisma/DbUser"
import { Ride } from "../schemas/Ride"

@Resolver()
export class RideResolver {
  @Query(() => Ride, { nullable: true })
  @Authorized()
  async queryRide(@Arg("id") id: number): Promise<Ride | null> {
      const ride = await DbUser.prisma.ride.findUnique({ where: { id }, include: { subscriptions: true } })

      if(!ride) return null

      return ride
  }

  @Query(() => [Ride!], { nullable: true })
  @Authorized()
  async rides(): Promise<Ride[] | null> {
    const date = new Date().toISOString()


    const rides = await DbUser.prisma.ride.findMany({ where: { end_date_registration: {
      gt: date
    } }, include: { subscriptions: true } })

    if(!rides || rides.length < 1) return null

    return rides
  }
  
  @Mutation(() => Ride)
  @Authorized()
  async createRide(
  @Arg("user_id") user_id: number,
  @Arg("name") name: string,
  @Arg("start_date") start_date: string,
  @Arg("start_date_registration") start_date_registration: string,
  @Arg("end_date_registration") end_date_registration: string,
  @Arg("start_place") start_place: string,
  @Arg("additional_information") additional_information?: string,
  @Arg("participants_limit") participants_limit?: number,
  ): Promise<Ride | null> {
    const ride = DbUser.prisma.ride.create({
      data: {
        user_id,
        name,
        start_date,
        start_date_registration,
        end_date_registration,
        start_place,
        additional_information,
        participants_limit
      }
    })

    if(!ride) return null

    return ride
  }
}
