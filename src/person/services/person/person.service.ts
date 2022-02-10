import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Person } from '../../entities/person';
import { isNullOrUndefined } from 'util';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PersonService {
    public constructor(
        @InjectRepository(Person) private readonly personRepository: Repository<Person>
        ){}

    public async find(): Promise<Person[]>{
        return await this.personRepository.find();
    }

    public async findOne(id: number): Promise<Person>{
        return await this.personRepository.findOne(id);
    }

    public async create(newPerson: Person): Promise<Person>{
        return await this.personRepository.save(newPerson)
    }
    
    public async delete(id: number): Promise<Person>{
        const person = await this.personRepository.findOne(id)

        return await this.personRepository.remove(person)
    }
}
