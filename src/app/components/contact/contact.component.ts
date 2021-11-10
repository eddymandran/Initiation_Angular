import {Component} from '@angular/core';
import {Contact} from "../../model/Contact";
import {ContactService} from "../../services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent{
contact: Contact = {name: '',email: '',phone: '',message: '', }

  constructor( private contactService:ContactService) {
  }
  onSubmit() : void{
  this.contactService.create(this.contact).subscribe();
  }
}
