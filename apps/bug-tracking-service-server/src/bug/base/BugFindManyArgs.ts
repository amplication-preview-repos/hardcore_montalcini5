/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BugWhereInput } from "./BugWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BugOrderByInput } from "./BugOrderByInput";

@ArgsType()
class BugFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BugWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BugWhereInput, { nullable: true })
  @Type(() => BugWhereInput)
  where?: BugWhereInput;

  @ApiProperty({
    required: false,
    type: [BugOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BugOrderByInput], { nullable: true })
  @Type(() => BugOrderByInput)
  orderBy?: Array<BugOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BugFindManyArgs as BugFindManyArgs };
