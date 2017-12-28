import { AuthService } from './../auth/auth.service';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { RecipeService } from './../recipes/recipe.service';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx'

@Injectable()
export class DataStorageService {
    constructor(private http: Http, 
                private recipeService: RecipeService, 
                private slService: ShoppingListService,
                private authService: AuthService){}

    storeRecipes() {
        const token = this.authService.getToken();
        return this.http.put('https://ng-recipe-book-64311.firebaseio.com/recipes.json?auth=' + token, this.recipeService.getRecipes());
    }
    getRecipes(){
        const token = this.authService.getToken();
        this.http.get('https://ng-recipe-book-64311.firebaseio.com/recipes.json?auth=' + token)
            .map(
                (response: Response) => {
                    const recipes: Recipe[] = response.json();
                    for(let recipe of recipes) {
                        if(!recipe['ingredients']){
                            console.log(recipe);
                            recipe['ingredinets']=[];
                        }    
                    }
                    return recipes;
                }
            )
            .subscribe(
                (recipes: Recipe[]) => {
                    this.recipeService.setRecipes(recipes);                
                }
            );
    }

    storeSl() {
        return this.http.put('https://ng-recipe-book-64311.firebaseio.com/sl.json', this.slService.getIngredeints());
    }

    getSl(){
        this.http.get('https://ng-recipe-book-64311.firebaseio.com/sl.json')
            .subscribe(
                (response: Response) => {
                    const ingredients: Ingredient[] = response.json();
                    this.slService.setIngredeints(ingredients);
                }
            )
    }
}