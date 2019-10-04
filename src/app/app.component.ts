import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [1, 2, 3].map(() => `https://picsum.photos/1500/700?random&t=${Math.random()}`);
}
