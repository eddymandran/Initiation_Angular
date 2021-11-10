import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from '../../model/Card';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent{

  @Input() data: Card[];
  @Output() likeClick:EventEmitter<any>= new EventEmitter<any>()

  constructor(){
    this.data = [];
  }
  onLikeClick(){
   this.likeClick.emit();
  }


}
