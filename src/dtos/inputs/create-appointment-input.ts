import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput {

  @Field()
  customerId: Date;

  @Field()
  startsAt: Date;
  
  @Field()
  endsAt: Date
}