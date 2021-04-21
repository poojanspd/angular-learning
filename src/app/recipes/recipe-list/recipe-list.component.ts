import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  new Recipe('A test recipe','test','https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg'),
  new Recipe('A test recipe','test2','https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe)
{
  this.recipeWasSelected.emit(recipe);
}
}
