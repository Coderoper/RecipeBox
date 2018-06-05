import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Recipes';
  

  recipes: Recipe[]=[
    new Recipe('Pie', 'Crust, filling, topping', 'assemble ingredients and bake'),
    new Recipe('Cookies', 'Butter, flour, sugar, vanilla extract, chocolate chip(semi sweet), baking powder','preheat oven at 450 F, bake 20 minutes'),
    new Recipe('Shwarma', 'Pita Bread, block of lamb, spit, tzatziki sauce, tabouleh, hummus', 'assemble ingredients on pita bread then roll up ')
  ];
}
