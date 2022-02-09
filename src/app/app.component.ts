import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-App';
  displayValue = ''
  buton = ''
  getData(val: any) {
    this.displayValue = val;
  }

  getInput(val1: any) {
    this.buton = val1;
  }
}
