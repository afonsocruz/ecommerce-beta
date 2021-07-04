import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  products = []

  constructor(private _products: ProductService) { }

  ngOnInit(): void {
    this._products.fetchProducts().subscribe(response => {
      this.products = response;
      console.log(this.products)
    });
  }

  calculatePrice(price): void {
    let value = price;
    value = (value/12).toFixed(2);
    return value;
  }

}
