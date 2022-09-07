import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Flavor } from './entities/flavor.entity';
import { Coffee } from './entities/coffee.entity';
import { CoffeesService } from './coffees.service';

class ConfigService {
}

class DevelopmentConfigService {
}

class ProductionConfigService {
}

@Module({
  controllers: [CoffeesController],
  providers: [CoffeesService,
    {
      provide: ConfigService,
      useClass: process.env.NODE_ENV === 'development' ? DevelopmentConfigService : ProductionConfigService,
    }],
  imports: [TypeOrmModule.forFeature([Flavor, Coffee, Event])],
  exports: [CoffeesService],
})
export class CoffeesModule {
}
