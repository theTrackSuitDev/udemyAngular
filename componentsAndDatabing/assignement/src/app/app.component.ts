import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numberToPrint: number;
  isEven: boolean = false;
  isOdd: boolean = false;

  onGameStart(numData: {nextNumber: number}) {
    this.numberToPrint = numData.nextNumber;
    if (this.numberToPrint % 2 === 0) {
      this.isEven = true;
      this.isOdd = false;
    } else {
      this.isEven = false;
      this.isOdd = true;
    }   
  }
}
