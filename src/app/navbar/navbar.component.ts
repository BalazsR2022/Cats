import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Szolgáltatás importálása
import { AuthService } from '../auth.service'; // AuthService importálása

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private cartService: CartService, public authService: AuthService) {} // AuthService helyes injektálása

  ngOnInit(): void {
    // Feliratkozás a kosárban lévő elemek számának változásaira
    this.cartService.currentCount.subscribe(count => {
      this.cartItemCount = count;
    });
  }
}
