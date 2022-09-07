import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { CoffeesService } from './coffees.service';

class MockCoffeesService {

}

@Module({
  controllers: [CoffeesController],
  providers: [{
    provide: CoffeesService,
    useValue: new MockCoffeesService(),
  }],
  imports: [TypeOrmModule.forFeature([Flavor, Coffee, Event])],
  exports: [CoffeesService],
})
export class CoffeesModule {
}
