import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Szolgáltatás importálása

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.currentCount.subscribe(count => {
      this.cartItemCount = count;
      this.updateCartCount();
    });
  }

  updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
      cartCountElement.textContent = this.cartItemCount.toString();
    }
  }
}
