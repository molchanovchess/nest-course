import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class createUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'Email'})
    @IsString({message: 'Should be a string'})
    @IsEmail({}, {message: 'Incorrect email'})
    readonly email: string;
    @ApiProperty({example: '11223344', description: 'Password'})
    @IsString({message: 'Should be a string'})
    @Length(4, 16, {message: 'Not less than 4 and not more than 16 characters'})
    readonly password: string;
}