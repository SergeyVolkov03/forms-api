import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @Get('/user/:id')
  findAllByUserId(@Param('id') id: string) {
    return this.likesService.findAllByUserId(+id);
  }

  @Get('/template/:id')
  findAllByTemplateId(@Param('id') id: string) {
    return this.likesService.findAllByTemplateId(+id);
  }

  @Get(':user_id/:template_id')
  findOneByUserIdAndTemplateId(
    @Param('user_id') user_id: string,
    @Param('template_id') template_id: string,
  ) {
    return this.likesService.findOneByUserIdAndTemplateId(
      +user_id,
      +template_id,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesService.remove(+id);
  }
}
