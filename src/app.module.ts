import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TemplatesModule } from './templates/templates.module';
import { TopicsModule } from './topics/topics.module';

@Module({
  imports: [AuthModule, UsersModule, TemplatesModule, TopicsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
