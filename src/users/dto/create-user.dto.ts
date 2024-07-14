import { ApiProperty } from "@nestjs/swagger";

export class createUserDto {

    @ApiProperty({example: 'user@mail.com', description: 'Email'})
    readonly email: string;
    @ApiProperty({example: '11223344', description: 'Password'})
    readonly password: string;
}