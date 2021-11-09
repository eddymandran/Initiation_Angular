import {Component, Input, OnInit} from '@angular/core';
import {Person} from "../../model/Person";
import { Product} from "../../model/Products";
import { Card} from "../../model/Card";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data: (Person | Product)[];
  displayData:{title:string, subTitle: string, image: string}[] = []

  personPicture: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor() {
    this.data=[];
  }

  ngOnInit(): void {
    this.displayData = this.data.map((datum) =>{
      let cardData:Card = {title:"", subTitle:"", image:""}
      cardData.title=datum.name;

      if (datum.hasOwnProperty('price')){
        datum = <Product>datum
        cardData.subTitle= datum.price + ' €';
        cardData.image= datum.picture;
      }else {
        datum = <Person>datum
        cardData.subTitle= datum.age + ' ans';
        cardData.image= this.personPicture;
      }
      return cardData;
    }
    )}

}
