import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Property } from 'src/property/entities/property';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {

    public constructor(
        @InjectRepository(Property) private readonly propertyRepository: Repository<Property>
        ){}

    public async find(): Promise<Property[]>{
        return await this.propertyRepository.find();
    }

    public async findOne(id: number): Promise<Property>{
        return await this.propertyRepository.findOne(id)
    }

    public async create(property: Property): Promise<Property>{
        return this.propertyRepository.save(property)
    }

    public async delete(id: number): Promise<Property>{
        const property = await this.propertyRepository.findOne(id)

        return await this.propertyRepository.remove(property)
    }

    public async edit(property: Property, id: number): Promise<Property>{
        const propertyOne = await this.propertyRepository.findOne(id)

        propertyOne.name = property.name;
        propertyOne.location = property.location;
        propertyOne.photo = property.photo;
        propertyOne.rentAmount = property.rentAmount;
        propertyOne.rented = property.rented;
        propertyOne.tenant = property.tenant;

        return await this.propertyRepository.save(propertyOne)
    }

    public async getTenant(id: number): Promise<string>{
        const property = await this.propertyRepository.findOne(id)

        return property.tenant
    } 

}
