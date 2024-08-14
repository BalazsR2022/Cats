// play.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent {
  cards = [
    { image: '/assets/Toys1.png', flipped: false, winner: false, label: 'Pick Me!' },
    { image: '/assets/Toys2.png', flipped: false, winner: false, label: 'Choose Me!' },
    { image: '/assets/Toys3.png', flipped: false, winner: true, label: 'Select Me!' },
    { image: '/assets/Toys4.png', flipped: false, winner: false, label: 'Click Me!' }
  ];

  flipCard(index: number) {
    this.cards[index].flipped = !this.cards[index].flipped;
  }
}
