import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Coffee } from './schemas/coffee.schema';

@Injectable()
export class CoffeeService {
  constructor(
    @InjectModel(Coffee.name)
    private coffeeModel: Model<Coffee>,
  ) {}

  async findAll(): Promise<Coffee[]> {
    const coffee = await this.coffeeModel.find();
    return coffee;
  }

  async findById(id: string): Promise<Coffee> {
    const coffee = await this.coffeeModel.findById(id).exec();
    // if (!coffee) {
    //   throw new NotFoundException('Coffee not found');
    // }
    return coffee;
  }
  async findRatingById(id: string): Promise<number> {
    const coffee = await this.findById(id);
    return coffee.averageRating;
  }
  async updateRating(id: string, rating: number): Promise<Coffee> {
    const coffee = await this.findById(id);
    coffee.averageRating = rating;
    return coffee.save();
  }
}
