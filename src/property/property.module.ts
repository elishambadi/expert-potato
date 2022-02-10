import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyController } from './controllers/property/property.controller';
import { Property } from './entities/property';
import { PropertyService } from './services/property/property.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([Property])
  ],
  controllers: [PropertyController],
  providers: [PropertyService]
})
export class PropertyModule {}
