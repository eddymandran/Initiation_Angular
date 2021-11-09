import { Component } from '@angular/core';
import {Person} from "../../model/Person";


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  // styles: ['mat-card {background:red}']
})
export class AboutUsComponent {
  persons : Person[] = [
    {name:"eddy", age:32},
    {name:"liam", age:3},
    {name:"thea", age:1}

  ]

}
