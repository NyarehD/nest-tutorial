import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CoffeesModule } from "./coffees/coffees.module";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [CoffeesModule, TypeOrmModule.forRoot({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "piratednest",
    autoLoadEntities: true,
    // Disable this in production
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
}
