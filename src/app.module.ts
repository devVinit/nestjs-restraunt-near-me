import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Connection } from 'typeorm';
import { ShopLocation } from './shop-location.entity';
import { DatabaseModule } from './config/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController],
  providers: [{
    provide: 'SHOPLOCATION_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(ShopLocation),
    inject: ['DATABASE_CONNECTION'],
  }, AppService],
})
export class AppModule { }
