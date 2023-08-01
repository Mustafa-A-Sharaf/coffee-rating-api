/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Coffee {
  save(): Coffee | Promise<Coffee> {
    throw new Error('Method not implemented.');
  }
  @Prop()
  name: string;
  @Prop()
  description: string;

  @Prop({ default: 0 })
  rating: number;
  averageRating: number | Promise<number>;
}

export const CoffeeSchema = SchemaFactory.createForClass(Coffee);
