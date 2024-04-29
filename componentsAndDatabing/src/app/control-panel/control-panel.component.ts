import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {
  @Output() serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();

  newServerContent = '';

  onAddServer(inputElement: HTMLInputElement) {
    this.serverCreated.emit({name: inputElement.value, content: this.newServerContent});
  }

  onAddBlueprint(inputElement: HTMLInputElement) {
    this.blueprintCreated.emit({name: inputElement.value, content: this.newServerContent});
  }
}
