import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePedaisOrThrowArgs } from "./args/FindUniquePedaisOrThrowArgs";
import { Pedais } from "../../../models/Pedais";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pedais)
export class FindUniquePedaisOrThrowResolver {
  @TypeGraphQL.Query(_returns => Pedais, {
    nullable: true
  })
  async findUniquePedaisOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePedaisOrThrowArgs): Promise<Pedais | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pedais.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
