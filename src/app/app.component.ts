import { Component} from '@angular/core';

interface Person {name:string, age:number}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  eddy: Person = {name:"Mandran Eddy", age: 32}

  persons: Person[] = [
    {name: "Eddy", age:32},
    {name: "Liam", age:3},
    {name: "Théa", age:1}
  ]

  constructor(){
    this.eddy.age = 35
  }

}
