import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() data:any;
  personPicture: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
