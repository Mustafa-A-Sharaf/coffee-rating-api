import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeeSchema } from './schemas/coffee.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Coffee', schema: CoffeeSchema }]),
  ],
  controllers: [CoffeeController],
  providers: [CoffeeService],
})
export class CoffeeModule {}
