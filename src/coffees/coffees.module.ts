import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { CoffeesService } from './coffees.service';
import { COFFEE_BRANDS } from './coffees.constants';
import { Connection } from 'typeorm';

@Injectable()
export class CoffeeBrandsFactory {
  create() {
    // Do something
    return ['buddy brew', 'nescafe'];
  }
}

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService,
    CoffeeBrandsFactory,
    {
      provide: COFFEE_BRANDS,
      useFactory: async (connection: Connection): Promise<string[]> => {
        const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe']);
        console.log('[!] Async Factory');
        return coffeeBrands;
      },
      inject: [CoffeeBrandsFactory],
    }],
  imports: [TypeOrmModule.forFeature([Flavor, Coffee, Event])],
  exports: [CoffeesService],
})
export class CoffeesModule {
}
