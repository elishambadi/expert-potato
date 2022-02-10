import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import * as path from 'path';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PropertyModule } from './property/property.module';

@Module({
  imports: [PersonModule, 
  TypeOrmModule.forRoot({
    type: 'sqlite',
    synchronize : true,
    autoLoadEntities: true,
    database: path.resolve(__dirname,'..','db.sqlite')
  }), PropertyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
