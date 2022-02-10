import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Property } from 'src/property/entities/property';
import { PropertyService } from 'src/property/services/property/property.service';

@Controller('property')
export class PropertyController {

    public constructor(public propertyService: PropertyService){
    }

    @Get('')
    public getAll(){
        return this.propertyService.find()
    }

    @Get('/:id')
    public getOne(@Param('id') id: number){
        return this.propertyService.findOne(id)
    }

    @Post('/add')
    public create(@Body() property: Property){
        return this.propertyService.create(property)
    }

    @Post('/remove/:id')
    public delete(@Param('id') id: number){
        return this.propertyService.delete(id)
    }

    @Post('/edit/:id')
    public edit(@Body() property:Property, @Param('id') id: number){
        return this.propertyService.edit(property, id)
    }

    @Get('/:id/tenant')
    public getTenant(@Param('id') id: number){
        return this.propertyService.getTenant(id)
    }
}
