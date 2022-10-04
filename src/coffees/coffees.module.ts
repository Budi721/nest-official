import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './constants';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from './config/coffees.config';

// class MockCoffeesService {}

@Module({
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    { provide: COFFEE_BRANDS, useValue: ['Torabika'] },
  ],
  // Note: custom provider
  // providers: [
  //   {
  //     provide: CoffeesService,
  //     useValue: new MockCoffeesService(),
  //   },
  // ],
  imports: [
    TypeOrmModule.forFeature([Coffee, Flavor, Event]),
    ConfigModule.forFeature(coffeesConfig),
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
