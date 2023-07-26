import { Arg, Authorized, Ctx, Mutation, Query, Resolver, UseMiddleware } from "type-graphql"
import { DbUser } from "../prisma/DbUser"
import { User } from "../schemas/User"
import { hash } from "bcryptjs"
import { verify } from "jsonwebtoken"
import AuthConfig from "../config/authetication/Auth"

@Resolver()
export class UserResolver {
  @Query(() => User, {nullable: true})
  @Authorized()
  async me(@Ctx() context: any): Promise<User | null> {
    const authHeader = context.token

    const [, token] = authHeader.split(' ')
    
    if (!token) {
      throw new Error("Token de autorização não fornecido.");
    }

    const userId = (verify(token, AuthConfig.jwt.secret)).sub
      
    if (!userId) return null

    const idString = userId.toString().replace(/"/g, '')

    const id = parseInt(idString)
      
    const user = await DbUser.prisma.user.findUnique({ where: { id }, include: { subscription: true, createdRides: true } })

    if(!user) return null

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
