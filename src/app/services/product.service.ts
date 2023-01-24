import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from './base-api.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseApiService {
  getProductList<T>(): Observable<T> {
    const url = `apiEndpoint`;
    return this.get<T>(url);
  }

  getProductIDAndName(param: object) {
    const url = `apiEndpoint`;
    return this.get(url);
  }
}

// export interface IProduct {
//   prodid: number;
//   prodName: string;
//   proddescription?: string;
// }

class Product implements OnInit {
  prodid!: number;
  prodName!: string;
  proddescription?: string;

  productList: Product[] = [];

  constructor(private productService: ProductService) {}
  //let prodList = response.productList;
  ngOnInit(): void {
    // create a subscription that is not depreciated
    this.productService.getProductList<{ productList: Product[] }>().subscribe({
      next: (response) => {
        // continue with the response
        this.productList = response.productList;
      },
      error: this.handleError,
    });

    // this.productService
    //   .getProductIDAndName<{ prodName: string; productID: number }>()
    //   .subscribe((response) => {
    //     //manipulate the response
    //     let prodName = response.prodName;
    //     let prodID = response.productID;
    //   }, this.handleError('error'));
  }

  handleError(error: any): ((error: any) => void) | null | undefined {
    return error;
  }
}
