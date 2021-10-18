import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'to-do-list';
  name = 'Mohd Kaif';
  constructor() {
    setTimeout(() => {
      this.name = 'most awesome developer';
    }, 2000);
  }
}
