import {IsEmail, IsEnum, IsNotEmpty, IsString, Length} from 'class-validator';
import { Transform } from 'class-transformer';

export enum Gender {
    MALE = 'Male',
    FEMALE = 'Female'
}

export class CreateAuthDto {
  @Transform(({value}) => value?.trim())
  @IsString()
  @IsNotEmpty()
  @Length(3, 100)
  fullName: string;

  @(Transform(({value}) => value?.trim()))
  @IsString()
  @IsNotEmpty()
  @Length(10, 10)
  phoneNumber:string;


  @(Transform(({value}) => value?.trim()))
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @Length(5, 100)
  email: string;

  @IsNotEmpty()
  @IsEnum(Gender, {message: 'Gender must be either Male or Female'})
  gender: Gender;
}
