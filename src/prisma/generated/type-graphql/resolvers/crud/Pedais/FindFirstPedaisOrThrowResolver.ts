import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPedaisOrThrowArgs } from "./args/FindFirstPedaisOrThrowArgs";
import { Pedais } from "../../../models/Pedais";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pedais)
export class FindFirstPedaisOrThrowResolver {
  @TypeGraphQL.Query(_returns => Pedais, {
    nullable: true
  })
  async findFirstPedaisOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPedaisOrThrowArgs): Promise<Pedais | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pedais.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
