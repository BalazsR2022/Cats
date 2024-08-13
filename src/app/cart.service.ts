import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private itemCount = new BehaviorSubject<number>(0); // A kezdeti érték 0
  currentCount = this.itemCount.asObservable();

  constructor() { }

  addItem(quantity: number = 1) {
    this.itemCount.next(this.itemCount.value + quantity);
  }
  
  

  removeItem() {
    if (this.itemCount.value > 0) {
      this.itemCount.next(this.itemCount.value - 1);
    }
  }

  getCount() {
    return this.itemCount.value;
  }
}

