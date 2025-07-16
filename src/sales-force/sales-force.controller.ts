import { Controller, Post, Body, Get, Param, Patch } from '@nestjs/common';
import { SalesForceService } from './sales-force.service';
import { CreateSalesForceDto } from './dto/create-sales-force.dto';
import { UpdateSalesForceDto } from './dto/update-sales-force.dto';

@Controller('salesforce')
export class SalesForceController {
  constructor(private readonly salesforceService: SalesForceService) {}

  @Post()
  async createAccountWithContact(
    @Body() createSalesForceDto: CreateSalesForceDto,
  ) {
    return this.salesforceService.createAccountWithContact(createSalesForceDto);
  }

  @Get(':id')
  async getContact(@Param('id') id: string) {
    return await this.salesforceService.getContactByAccauntId(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSalesForceDto: UpdateSalesForceDto,
  ) {
    return this.salesforceService.updateContact(id, updateSalesForceDto);
  }
}
