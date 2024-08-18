import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartCount = new BehaviorSubject<number>(0);

  // Observable, amit a NavbarComponent használhat a kosár számának megjelenítéséhez
  currentCount = this.cartCount.asObservable();

  constructor() {}

 

  addItem(product: any): void {
    // Alapértelmezett mennyiség
    const item = { ...product, quantity: product.quantity || 1 };
    this.cartItems.push(item);
    this.updateCartCount();
  }
  

  // Kosárban lévő elemek számának frissítése
  private updateCartCount(): void {
    const totalItems = this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCount.next(totalItems);  // A kosár számának frissítése
  }


  // Opció: Metódus a kosárban lévő elemek lekérésére
  getCartItems(): any[] {
    return this.cartItems;
  }
}
