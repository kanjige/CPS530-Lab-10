import { Component } from '@angular/core';
import { ClickerComponent } from './clicker/clicker.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ClickerComponent],
  standalone: true,
})
export class AppComponent {
  title = 'angular-standalone-app';
}
