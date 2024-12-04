import { Component } from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
  styleUrls: ['./clicker.component.css'],
  standalone: true,
})
export class ClickerComponent {
  counter: number = 0;

  incrementCounter(): void {
    this.counter++;
  }
}
