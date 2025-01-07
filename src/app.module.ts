import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PickingSlip } from './entities/pickingSlip.entity';
import { PickingSlipItem } from './entities/pickingSlipItem.entity';
import { PickingSlipService } from './picking-slip/picking-slip.service';
import { PickingSlipController } from './picking-slip/picking-slip.controller';
import { PickingSlipDate } from './entities/pickingSlipDate.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD?.toString(),
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: process.env.DB_SYNCHRONIZE === 'true',
    }),
    TypeOrmModule.forFeature([PickingSlip, PickingSlipItem, PickingSlipDate]),
  ],
  controllers: [AppController, PickingSlipController],
  providers: [AppService, PickingSlipService],
})
export class AppModule {}
