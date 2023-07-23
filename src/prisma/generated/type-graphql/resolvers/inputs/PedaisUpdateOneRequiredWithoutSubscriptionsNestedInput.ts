import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PedaisCreateOrConnectWithoutSubscriptionsInput } from "../inputs/PedaisCreateOrConnectWithoutSubscriptionsInput";
import { PedaisCreateWithoutSubscriptionsInput } from "../inputs/PedaisCreateWithoutSubscriptionsInput";
import { PedaisUpdateToOneWithWhereWithoutSubscriptionsInput } from "../inputs/PedaisUpdateToOneWithWhereWithoutSubscriptionsInput";
import { PedaisUpsertWithoutSubscriptionsInput } from "../inputs/PedaisUpsertWithoutSubscriptionsInput";
import { PedaisWhereUniqueInput } from "../inputs/PedaisWhereUniqueInput";

@TypeGraphQL.InputType("PedaisUpdateOneRequiredWithoutSubscriptionsNestedInput", {})
export class PedaisUpdateOneRequiredWithoutSubscriptionsNestedInput {
  @TypeGraphQL.Field(_type => PedaisCreateWithoutSubscriptionsInput, {
    nullable: true
  })
  create?: PedaisCreateWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PedaisCreateOrConnectWithoutSubscriptionsInput, {
    nullable: true
  })
  connectOrCreate?: PedaisCreateOrConnectWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PedaisUpsertWithoutSubscriptionsInput, {
    nullable: true
  })
  upsert?: PedaisUpsertWithoutSubscriptionsInput | undefined;

  @TypeGraphQL.Field(_type => PedaisWhereUniqueInput, {
    nullable: true
  })
  connect?: PedaisWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PedaisUpdateToOneWithWhereWithoutSubscriptionsInput, {
    nullable: true
  })
  update?: PedaisUpdateToOneWithWhereWithoutSubscriptionsInput | undefined;
}
