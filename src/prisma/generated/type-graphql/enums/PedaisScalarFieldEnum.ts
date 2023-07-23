import * as TypeGraphQL from "type-graphql";

export enum PedaisScalarFieldEnum {
  id = "id",
  name = "name",
  start_date = "start_date",
  start_date_registration = "start_date_registration",
  end_date_registration = "end_date_registration",
  additional_information = "additional_information",
  start_place = "start_place",
  participants_limit = "participants_limit",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(PedaisScalarFieldEnum, {
  name: "PedaisScalarFieldEnum",
  description: undefined,
});
