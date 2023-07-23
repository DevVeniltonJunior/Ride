import { Arg, Ctx, Field, InputType, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { Context } from "./Context";
import { User } from "./User";
import { hash, compare } from "bcryptjs";
import { v4 as uuid } from "uuid"

@InputType()
class UserInputData {
  @Field()
  name: string

  @Field()
  email: string
  
  @Field()
  password: string
}


@InputType()
class UserInputLoginData {
  @Field()
  email: string

  @Field()
  password: string
}

@ObjectType()
class UserWithToken {
  @Field()
  user: User

  @Field()
  token: string
}

@Resolver()
export class UserResolver {
  @Query(() => User, {nullable: true})
  async privateInfo(@Arg("token") token: string, @Ctx() ctx: Context): Promise<User | null> {
    const dbToken =  await ctx.prisma.tokens.findUnique({ where: { token }, include: { user: true }})
    if(!dbToken) return null
    
    const { user } = dbToken;

    return user
  }
  
  @Mutation(() => User)
  async singUp(@Arg("data") data: UserInputData, @Ctx() ctx: Context): Promise<User> {
    const hashedPassword = await hash(data.password, 10)
    return await ctx.prisma.user.create({
      data: { ...data, password: hashedPassword }
    })
  }

  @Mutation(() => UserWithToken)
  async login(@Arg("data") data: UserInputLoginData, @Ctx() ctx: Context): Promise<UserWithToken | null> {
    const user = await ctx.prisma.user.findUnique({
      where: { email: data.email }
    })

    if(!user) return null

    const validation = await compare(data.password, user.password)

    if(!validation) return null

    const _token = await ctx.prisma.tokens.create({
      data: { token: uuid(), user: { connect: { id: user.id } } }
    })

    console.log({ user, token: _token.token })

    return { user, token: _token.token}
  }
}
