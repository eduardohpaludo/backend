import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
export class CreateTenantDto {

  @IsString()
  name: string

  @IsString()
  domain: string

  @IsString()
  status: string

  @IsString()
  main_color: string
}
