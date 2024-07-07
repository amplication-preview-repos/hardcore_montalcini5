/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumBugSeverity } from "./EnumBugSeverity";
import { EnumBugStatus } from "./EnumBugStatus";
import { RepositoryWhereUniqueInput } from "../../repository/base/RepositoryWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class BugUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumBugSeverity,
  })
  @IsEnum(EnumBugSeverity)
  @IsOptional()
  @Field(() => EnumBugSeverity, {
    nullable: true,
  })
  severity?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumBugStatus,
  })
  @IsEnum(EnumBugStatus)
  @IsOptional()
  @Field(() => EnumBugStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => RepositoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RepositoryWhereUniqueInput)
  @IsOptional()
  @Field(() => RepositoryWhereUniqueInput, {
    nullable: true,
  })
  repository?: RepositoryWhereUniqueInput | null;
}

export { BugUpdateInput as BugUpdateInput };
