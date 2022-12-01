import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './strategy/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() body, @Req() req, @Res() res) {
    const auth = await this.authService.login(body)
    res.status(auth.status).json(auth.msg);
  }

  @UseGuards(JwtAuthGuard)
  @Post('register')
  async register(@Body() body, @Req() req, @Res() res) {
    const auth = await this.authService.register(body)
    res.status(auth.status).json(auth.msg);
  }
}
