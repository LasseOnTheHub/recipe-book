import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../ingredient";

@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  ingredientsalt: Ingredient = new Ingredient("salt",2);
  items: Ingredient[] = [];

  constructor() { }

  ngOnInit() {
  }

}
