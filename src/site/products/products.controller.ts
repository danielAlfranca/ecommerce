import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Product } from 'src/interfaces/shared-interfaces';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}


  @Get()
  findAll():Product[] {
    
    return this.productsService.findAll();
  }

  
}
