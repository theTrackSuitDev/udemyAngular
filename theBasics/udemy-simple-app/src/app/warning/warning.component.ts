import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styleUrl: './warning.component.css'
})
export class WarningComponent {
  packageId = 24
  status = "important";
  allowResolve = false;
  allowChange = true;
  currentInput = "";
  statusHasChanged = false;
  statusArray = [this.status];

  constructor() {
    setTimeout(() => {
      this.allowResolve = true;
    }, 2000);
  }

  getStatus() {
    return this.status;
  }  

  onResolve(): void {
    this.status = "resolved";
    this.allowResolve = false;
    this.allowChange = false;
    this.currentInput = "Issue is resolved"
    this.statusHasChanged = true;
    this.statusArray.push(this.status);
  }

  updateInput(event: Event) {
    this.currentInput = (<HTMLInputElement>event.target).value;
  }

  changeStatus(input: HTMLInputElement): void {
    if (input.value === "" || input.value.toLowerCase() === "resolved") {
      return;
    }

    this.status = input.value;
    input.value = "";
    this.currentInput = "";
    this.statusHasChanged = true;
    this.statusArray.push(this.status);
  }

  getColor() {
    return this.status === "resolved" ? "DarkSeaGreen" : "Bisque";
  }
}
