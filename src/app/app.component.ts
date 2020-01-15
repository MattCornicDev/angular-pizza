import { Component } from '@angular/core';


interface Pizza {
  id: number;
  name: string;
  price: number;
}

const PIZZAS: Pizza[]= [
  { id: 1, name: "Reine", price: 12 },
  { id: 2, name: "4 fromages", price: 12 },
  { id: 3, name: "Orientale", price: 11 },
  { id: 4, name: "Cannibale", price: 9 }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})




export class AppComponent {
  title ='Pizza Party'; 
  selectedPizza: Pizza = {
    id: 1,
    name: 'Reine',
    price: 12
  };
  pizzas: Pizza[] = PIZZAS;

  onSelect(pizza: Pizza): void {
    console.log(pizza);

  }
}