import { Arg, Authorized, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { DbUser } from "../prisma/DbUser";
import { User } from "../schemas/User";
import { hash } from "bcryptjs";

@Resolver()
export class UserResolver {
  @Query(() => User, {nullable: true})
  @Authorized()
  async me(@Ctx() ctx: MyContext): Promise<User | null> {
    const userId = ctx.authPayload?.user.id

    const user = await DbUser.prisma.user.findUnique({ where: { id: userId }, include: {
      subscription: true, createdRides: true
    }})
    return user
  }
  
  @Mutation(() => User)
  async singUp(
    @Arg("name") name: string,
    @Arg("email") email: string,
    @Arg("password") password: string
    ): Promise<User> {
    const hashedPassword = await hash(password, 10)
    return await DbUser.prisma.user.create({
      data: { name, email, password: hashedPassword }
    })
  }
}
