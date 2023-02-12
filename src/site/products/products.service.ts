import { Injectable } from '@nestjs/common';
import { Product } from '../../interfaces/shared-interfaces';


@Injectable()
export class ProductsService {

  productsTest:Product[] = [];

  findAll() {
    return this.productsTest;
  }

 
}
