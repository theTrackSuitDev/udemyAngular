import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Musaka", "Delicious dish with chopped meat and potatoes.", "https://matekitchen.com/wp-content/uploads/2019/08/153b_musaka_s_kartofi.jpg")
  ];

}
