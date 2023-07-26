import { Field, ObjectType, ID } from "type-graphql"
import { IsEmail } from "class-validator"

@ObjectType()
export class User {
  @Field(() => ID)
  id: number

  @Field(() => String)
  name: string

  @Field()
  @IsEmail()
  email: string

  @Field(() => String)
  password: string
  
  @Field(() => Date)
  createdAt: Date
  
  @Field(() => Date)
  updatedAt: Date
}
