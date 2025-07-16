import { Injectable } from '@nestjs/common';
import { Connection } from 'jsforce';
import { CreateSalesForceDto } from './dto/create-sales-force.dto';
import { UpdateSalesForceDto } from './dto/update-sales-force.dto';

@Injectable()
export class SalesForceService {
  private connection: Connection;

  constructor() {
    this.connection = new Connection({
      loginUrl: 'https://login.salesforce.com',
    });
  }

  async login() {
    await this.connection.login(
      process.env.SF_USERNAME || '',
      (process.env.SF_PASSWORD || '') + process.env.SF_SECURITY_TOKEN,
    );
    return this.connection;
  }

  async createAccountWithContact(data: CreateSalesForceDto) {
    await this.login();
    const account = await this.connection
      .sobject('Account')
      .create({ Name: data.accountName });

    const contact = await this.connection.sobject('Contact').create({
      FirstName: data.firstName,
      LastName: data.lastName,
      Email: data.email,
      birthDate: data.birthDate,
      AccountId: account.id,
    });

    return { account, contact };
  }

  async getContactByAccauntId(id: string) {
    await this.login();
    return this.connection.sobject('Contact').find({ AccountId: id });
  }

  async updateContact(id: string, updateSalesForceDto: UpdateSalesForceDto) {
    await this.login();
    return this.connection.sobject('Contact').update({
      Id: id,
      ...updateSalesForceDto,
    });
  }
}
