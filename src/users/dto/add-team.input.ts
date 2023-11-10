import { Field, InputType, Int } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@InputType()
export class AddTeamInput {
  @IsNotEmpty()
  @Field((type) => Int)
  idUser: number;

  @IsNotEmpty()
  @Field((type) => Int)
  idTeam: number;
}