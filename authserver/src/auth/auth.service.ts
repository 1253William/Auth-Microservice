import {Injectable, UnauthorizedException} from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import {PrismaService} from "../prisma/prisma.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
      private readonly prisma: PrismaService,
      private readonly jwtService: JwtService
  ) {}


  async register(createAuthDto: SignupDto) {
      const existingUser = await this.prisma.user.findUnique({
        where: { email: createAuthDto.email } } )
      if (existingUser) {
        throw new UnauthorizedException('User with email already exists');
      }

      const hashedPassword = await bcrypt.hash(createAuthDto.password, 10);

      const newUser = await this.prisma.user.create({
        data: {
          ...createAuthDto,
          password: hashedPassword
        }
      })

    return newUser;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;

    if (!password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    if (!email) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email }
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const validPassword = await bcrypt.compare(loginDto.password, user.password);
    if (!validPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, role: user.role }
    return {
      access_token: this.jwtService.sign(payload)
    };
  }


}
