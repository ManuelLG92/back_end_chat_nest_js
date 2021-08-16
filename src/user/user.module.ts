import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { PrismaModule } from 'src/prisma/prisma/prisma.module';



@Module({
  providers: [UserResolver, UserService]
})
export class UserModule {}
