import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PedaisUpdateOneRequiredWithoutSubscriptionsNestedInput } from "../inputs/PedaisUpdateOneRequiredWithoutSubscriptionsNestedInput";
import { UserUpdateOneRequiredWithoutSubscriptionNestedInput } from "../inputs/UserUpdateOneRequiredWithoutSubscriptionNestedInput";

@TypeGraphQL.InputType("SubscriptionUpdateInput", {})
export class SubscriptionUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  subscription_date?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutSubscriptionNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput | undefined;

  @TypeGraphQL.Field(_type => PedaisUpdateOneRequiredWithoutSubscriptionsNestedInput, {
    nullable: true
  })
  pedais?: PedaisUpdateOneRequiredWithoutSubscriptionsNestedInput | undefined;
}
