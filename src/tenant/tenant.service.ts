import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TenantService {

  constructor(private readonly prisma: PrismaService){}

  async create(createTenantDto: CreateTenantDto) {
    const data = {
      ...createTenantDto
    }
    const createdTenant = await this.prisma.tenant.create({ data })
    return {
      ...createdTenant
    }
  }

  findAll() {
    return this.prisma.tenant.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }
}
