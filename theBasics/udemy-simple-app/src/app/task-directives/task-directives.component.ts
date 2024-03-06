import { Component } from '@angular/core';

@Component({
  selector: 'app-task-directives',
  templateUrl: './task-directives.component.html',
  styleUrl: './task-directives.component.css'
})
export class TaskDirectivesComponent {
  hide = true;
  viewToggleArray: string[] = [];
  toggleView() {
    this.hide = !this.hide;
    if (this.hide === true) {
      this.viewToggleArray.push("Hide");
    } else {
      this.viewToggleArray.push("Show");
    }
  }

}
