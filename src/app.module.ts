import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { TemplatesModule } from './templates/templates.module';
import { TopicsModule } from './topics/topics.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswerOptionModule } from './answer-options/answer-options.module';
import { TagsModule } from './tags/tags.module';
import { AnswersModule } from './answers/answers.module';
import { FormsModule } from './forms/forms.module';
import { SalesForceModule } from './sales-force/sales-force.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    TemplatesModule,
    TopicsModule,
    QuestionsModule,
    AnswerOptionModule,
    TagsModule,
    AnswersModule,
    FormsModule,
    SalesForceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
