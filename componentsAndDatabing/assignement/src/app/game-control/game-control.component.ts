import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  currentNumber: number = 0;
  intervalId: ReturnType<typeof setInterval>;
  @Output() gameStarted = new EventEmitter<{nextNumber: number}>();

  onStart() {
    this.intervalId = setInterval(() => {
      this.gameStarted.emit({nextNumber: this.currentNumber});
      this.currentNumber++;
    }, 1000);
  }

  onStop() {
    clearInterval(this.intervalId);
  }

  // increment() {
  //   this.gameStarted.emit({nextNumber: this.currentNumber});
  //   this.currentNumber++;
  // }

}
 