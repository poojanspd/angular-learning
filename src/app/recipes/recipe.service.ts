import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A test recipe','test','https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg',[new Ingredient('meat',1),new Ingredient('french fries',20)]),
        new Recipe('A test recipe','test2','https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg',[new Ingredient('bread',2),new Ingredient('meat',1)])
        ];
       constructor(private slService: ShoppingListService){}
 getRecipes(){
        return this.recipes.slice();
 }

 addIngredientsToShoppingList(ingredients: Ingredient[]){
       this.slService.addIngredients(ingredients);
 }
}