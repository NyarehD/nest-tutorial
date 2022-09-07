import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from './cats/cats.module';
import { LaptopsModule } from './laptops/laptops.module';
import { StudentsModule } from './students/students.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';

@Module({
  imports: [CoffeesModule, CatsModule, LaptopsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'piratednest',
    autoLoadEntities: true,
    synchronize: true,
  }), StudentsModule, CoffeeRatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
