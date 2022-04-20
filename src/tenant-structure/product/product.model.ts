import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps : true })
export class Product{
    @Prop({
        required : [ true, 'El nombre del producto es obligatorio']
    })
    name : string;

    @Prop({
        required : [ true, 'El precio del producto es obligatorio']
    })
    precio : string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);