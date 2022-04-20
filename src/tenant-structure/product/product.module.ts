import { Product, ProductSchema } from './product.model';
import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [
    MongooseModule.forFeature([
      { name : Product.name, schema : ProductSchema }
    ])
  ],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
