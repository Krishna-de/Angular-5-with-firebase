import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is a German food', 
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', 
            [   new Ingredient('Meat',1),
                new Ingredient('Fries',22)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'This is simply a test', 
            'https://www.fatburgercanada.com/wp-content/uploads/2015/07/king-burger-541x633.png', 
            [   
                new Ingredient('Meat',1),
                new Ingredient('Buns',2)
            ])
      ];
    constructor(private slService: ShoppingListService) {}
    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }
    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredinets(ingredients);
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index: number) {
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}