import {Component, OnInit} from '@angular/core';
import {Person} from '../../model/Person';
import {Card} from '../../model/Card';


@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  persons: Person[] = [
    {
      name: "Eddy",
      age: 32,
      description: "Vel ducimus voluptatibus qui harum harum vel blanditiis dolorum non explicabo nihil ut corporis repudiandae.",
      photo: "eddy.png"
    },
    {
      name: "Théa",
      age: 1,
      description: "Vel ducimus voluptatibus qui harum harum vel blanditiis dolorum non explicabo nihil ut corporis repudiandae.",
      photo: "thea.png"
    },
    {
      name: "Liam",
      age: 3,
      description: "Vel ducimus voluptatibus qui harum harum vel blanditiis dolorum non explicabo nihil ut corporis repudiandae. ",
      photo: "liam.png"
    },
  ]

  data: Card[] = [];

  ngOnInit() {
    this.data = this.persons.map((person) => {
      return {title: person.name, subTitle: person.age + ' ans', image: "../../../assets/image/" + person.photo}
    })
  }
}
