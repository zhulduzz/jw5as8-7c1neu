import { Component } from '@angular/core';

import { Product, products } from '../products';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  share(productLink: string) {
    const whatsappURL = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      productLink
    )}`;
    window.open(whatsappURL, '_blank');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
