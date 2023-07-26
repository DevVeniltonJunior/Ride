import { Field, ObjectType, ID } from "type-graphql"

@ObjectType()
export class Subscription {
  @Field(() => ID)
  id: number
  
  @Field(() => Number)
  ride_id: number

  @Field(() => Number)
  user_id: number

  @Field(() => Date)
  subscription_date: Date
}
