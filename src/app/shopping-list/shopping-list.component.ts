import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]; 
  private subscription: Subscription;
  constructor(private slService: ShoppingListService ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredeints();
    this.subscription = this.slService.ingredientsChanged
      .subscribe((ingredients: Ingredient[])=> {
        this.ingredients= ingredients;
      });
  }

  onEditItem(index: number) {
      this.slService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
}
