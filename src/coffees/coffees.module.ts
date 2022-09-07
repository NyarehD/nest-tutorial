import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { CoffeesService } from './coffees.service';
import { COFFEE_BRANDS } from './coffees.constants';

class MockCoffeesService {

}

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService, { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe'] }],
  imports: [TypeOrmModule.forFeature([Flavor, Coffee, Event])],
  exports: [CoffeesService],
})
export class CoffeesModule {
}
