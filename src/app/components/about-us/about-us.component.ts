import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/Person';
import {Card} from '../../model/Card'; 


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  persons: Person[] = [
    {name: "Karim Benzema", age: 33, description: "Bonjour voici la description de Karim Benzema", photo:"karim.jpg"},
    {name: "Olvier Giroud", age: 35, description: "Bonjour voici la description de Olvier Giroud", photo:"giroud.jpg"},
    {name: "Alex Morgan", age: 32, description: "Bonjour voici la description de Alex Morgan", photo:"morgan.jpg"},
  ]

  data:Card[] = [];

  ngOnInit(){
    this.data = this.persons.map((person) => {
      return {title: person.name, subTitle: person.age + 'ans', image: "../../../assets/image/" + person.photo}
    })
  }
}
