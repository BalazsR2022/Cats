import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';  // Importáljuk a CartService-t

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: any[] = [
    { id: 1, name: 'Playground', price: 1.00, imgSrc: '/assets/playground.png', quantity: 1 },
    { id: 2, name: 'Toy', price: 1.00, imgSrc: '/assets/toy.png', quantity: 1 },
    { id: 3, name: 'Feeding dish', price: 1.00, imgSrc: '/assets/feedingDish.png', quantity: 1 },
    { id: 4, name: 'Hammock', price: 1.00, imgSrc: '/assets/hammock.png', quantity: 1 }
  ];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart(product: any): void {
    if (product.quantity > 0) {
      this.cartService.addItem({ ...product, quantity: product.quantity });
      console.log(`Added ${product.quantity} ${product.name}(s) to the cart.`);
    } else {
      console.error('Quantity must be greater than 0.');
    }
  }
}
