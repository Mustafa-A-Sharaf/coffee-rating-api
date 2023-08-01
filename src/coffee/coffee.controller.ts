import { Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { Coffee } from './schemas/coffee.schema';

@Controller('coffee')
export class CoffeeController {
  constructor(private coffeeService: CoffeeService) {}

  @Get()
  async getAllCoffee(): Promise<Coffee[]> {
    return this.coffeeService.findAll();
  }
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Coffee> {
    return this.coffeeService.findById(id);
  }
  @Get(':id/rating')
  async findRatingById(@Param('id') id: string): Promise<number> {
    return this.coffeeService.findRatingById(id);
  }
  @Patch('id/rating/:rating')
  async updateRating(
    @Param('id') id: string,
    @Param('rating', ParseIntPipe) rating: number,
  ): Promise<Coffee> {
    return this.coffeeService.updateRating(id, rating);
  }
}
