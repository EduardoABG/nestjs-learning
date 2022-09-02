import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Fulano',
    description: 'Nome do usuario',
    required: true,
  })
  readonly name: string;

  @ApiProperty({
    example: 'fulano@email.com',
    description: 'Email do usuario',
    required: true,
  })
  readonly email: string;

  @ApiProperty({
    example: '123456',
    description: 'Senha do usuario',
    required: true,
  })
  readonly password: string;

  @ApiProperty({
    example: '628f30608dd649a16df3f046',
    description: 'Id do avatar do jogador no banco',
    required: false,
  })
  readonly avatar: string;
}
