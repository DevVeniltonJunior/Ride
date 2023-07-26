import { verify } from "jsonwebtoken"
import { AuthChecker } from "type-graphql"
import AuthConfig from "../config/authetication/Auth"

interface Context {
  token?: string
}

export const AuthenticationAssurence: AuthChecker<Context> = ({ context: Context }): boolean => {
  const authHeader = Context.token

  if (!authHeader) {
    return false
  }

  const [, token] = authHeader.split(' ')

  try{
    const decoded = verify(token, AuthConfig.jwt.secret)

    return !!decoded
  } catch {
    return false
  }
}
