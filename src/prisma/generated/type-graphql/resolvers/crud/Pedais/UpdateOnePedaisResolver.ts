import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOnePedaisArgs } from "./args/UpdateOnePedaisArgs";
import { Pedais } from "../../../models/Pedais";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pedais)
export class UpdateOnePedaisResolver {
  @TypeGraphQL.Mutation(_returns => Pedais, {
    nullable: true
  })
  async updateOnePedais(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePedaisArgs): Promise<Pedais | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pedais.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
