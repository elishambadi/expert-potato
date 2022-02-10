import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PersonService } from '../../services/person/person.service'
import {Person } from '../../entities/person'

@Controller('person')
export class PersonController {

    public constructor(private personService: PersonService){}
    @Get('')
    public getAll(){
        return this.personService.find()
    }

    @Get('/:id')
    public getOne(@Param('id') id: number){
        return this.personService.findOne(id)
    }

    @Post('/add')
    public addPerson(@Body() person: Person){
        return this.personService.create(person)
    }

    @Post('/remove/:id')
    public removePerson(@Param('id') id: number){
        return this.personService.delete(id)
    }

}
