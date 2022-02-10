import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Person} from './entities/person'
import {Property} from '../property/entities/property'

import { PersonService } from './services/person/person.service';
import { PersonController } from './controllers/person/person.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([Person, Property])
    ],
    providers:[PersonService],
    controllers:[PersonController],
})
export class PersonModule {}
