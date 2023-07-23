import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePedaisArgs } from "./args/AggregatePedaisArgs";
import { Pedais } from "../../../models/Pedais";
import { AggregatePedais } from "../../outputs/AggregatePedais";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pedais)
export class AggregatePedaisResolver {
  @TypeGraphQL.Query(_returns => AggregatePedais, {
    nullable: false
  })
  async aggregatePedais(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePedaisArgs): Promise<AggregatePedais> {
    return getPrismaFromContext(ctx).pedais.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
