import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Pedais } from "../../../models/Pedais";
import { Subscription } from "../../../models/Subscription";
import { PedaisSubscriptionsArgs } from "./args/PedaisSubscriptionsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Pedais)
export class PedaisRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Subscription], {
    nullable: false
  })
  async subscriptions(@TypeGraphQL.Root() pedais: Pedais, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PedaisSubscriptionsArgs): Promise<Subscription[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).pedais.findUniqueOrThrow({
      where: {
        id: pedais.id,
      },
    }).subscriptions({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
