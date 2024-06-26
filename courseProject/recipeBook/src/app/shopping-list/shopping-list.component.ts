import { Component } from '@angular/core';
import { Ingredient } from '../shared/igredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("Potatoes", 5),
    new Ingredient("Chopped Meat", 800)
  ];

}
