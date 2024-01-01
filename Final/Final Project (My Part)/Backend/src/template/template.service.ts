import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create.template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Template } from 'src/entities/template.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TemplateService {

    constructor(@InjectRepository(Template) private templateRepo: Repository<Template>){}

    async create(createTemplateDto: CreateTemplateDto){
        const template = this.templateRepo.create(createTemplateDto);  
        await this.templateRepo.save(template);

        return {
          message: 'New Template has been Added'
        };
    }

    async update(id: number, createTemplateDto: CreateTemplateDto){
        const template = await this.templateRepo.findOne({where: {id:id}});
        if (!template) {
            throw new NotFoundException('Template not found');
        }
        await this.templateRepo.update(id,createTemplateDto);

        return {
          message: 'Template has been Updated'
        };
    }

    async delete(id: number) {
        const template = await this.templateRepo.findOne({ where: { id } });
        if (!template) {
          throw new NotFoundException('Template not found');
        }
        await this.templateRepo.delete(id);

        return {
          message: 'Template has been deleted'
        };
      }
    
      async get(id: number) {
        const template = await this.templateRepo.findOne({ where: { id } });
        if (!template) {
          throw new NotFoundException('Template not found');
        }
        return template;
      }
    
      async getAll() {
        const templates = await this.templateRepo.find();
        return templates;
      }
}
