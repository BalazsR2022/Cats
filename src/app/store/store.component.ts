import { Component } from '@angular/core';
import { CartService } from '../cart.service';  // Importáljuk a CartService-t

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  selectedQuantity: number = 1; 
  constructor(private cartService: CartService) {}  // CartService injektálása a konstruktorba

  // Metódus a termék kosárba helyezéséhez
  addToCart() {
    this.cartService.addItem(this.selectedQuantity);
  
  }
}
