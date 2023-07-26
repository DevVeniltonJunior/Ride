import { Auth } from "../schemas/Auth"
import { Arg, Mutation, Resolver } from "type-graphql"
import { compare } from "bcryptjs"
import { DbUser } from "../prisma/DbUser"
import AuthConfig from "../config/authetication/Auth"
import { sign } from "jsonwebtoken"

@Resolver(Auth)
export class AuthResolver {
  @Mutation(Returns => Auth)
  async login(@Arg("email") email: string, @Arg("password") password: string) {
    const user = await DbUser.prisma.user.findUnique({ where: { email } })

    if (!user) {
      throw new Error("Incorrect email/password combination")
    }

    const valid = await compare(password, user.password)

    if (!valid) {
      throw new Error("Incorrect email/password combination")
    }

    const { secret, expiresIn } = AuthConfig.jwt

    const token = sign({}, secret, {
      subject: `"${user.id}"`,
      expiresIn
    })

    return {	
      user,
      token
    }
  }
}
