import { Component } from '@angular/core';
interface  Person {name : string, age : number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

 eddy: Person = {name: "eddy", age: 32}
  persons: Person[]= [
    this.eddy,
    {name: "toto", age : 40},
    {name: "tata", age : 20},
    {name: "tete", age : 69}

  ]

  constructor() {
   this.eddy.age = 35;
  }
}
