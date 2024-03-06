import { Component } from '@angular/core';

@Component({
  selector: 'app-task-two',
  templateUrl: './task-two.component.html',
  styleUrl: './task-two.component.css'
})
export class TaskTwoComponent {
  username = "";
  
  setResetButton() {
    if (this.username === "") {
      return true;
    }

    return false;
  }

  resetUsername() {
    this.username = "";
  }
  
}
