import { Component, Input } from '@angular/core';
import { Ingredient } from '../../shared/igredient.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input() ingredients: Ingredient[] = [];
}
