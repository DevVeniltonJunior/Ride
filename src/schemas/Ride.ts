import { Field, ObjectType, ID } from "type-graphql"
import { Subscription } from "./Subscription"

@ObjectType()
export class Ride {
  @Field(() => ID)
  id: number

  @Field(() => ID)
  user_id: number
  
  @Field(() => String)
  name: string

  @Field(() => Date)
  start_date: Date

  @Field(() => Date)
  start_date_registration: Date

  @Field(() => Date)
  end_date_registration: Date
  
  @Field(() => String)
  start_place: string
  
  @Field(() => String)
  additional_information?: string | null

  @Field(() => String)
  participants_limit?: number | null

  @Field(() => Subscription)
  subscriptions?: Subscription[] | null
}
