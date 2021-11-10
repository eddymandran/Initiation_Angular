import {Component} from '@angular/core';
import {Contact} from "../../model/Contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
contact: Contact = {name: '',email: '',phone: '',message: '', }

  onSubmit(){
  console.log(this.contact)
  }
}
