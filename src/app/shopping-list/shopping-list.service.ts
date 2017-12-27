import { Ingredient } from './../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';


export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];  
    getIngredeints(){
        return this.ingredients.slice();
    }
    setIngredeints(ingredients: Ingredient[]){
        this.ingredients = ingredients;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    getIngredient(index: number) {
        return this.ingredients[index];
    }
    addIngredient(ingridient: Ingredient){
        this.ingredients.push(ingridient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredinets(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}