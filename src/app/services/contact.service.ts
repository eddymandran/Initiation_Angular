import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Contact} from "../model/Contact";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
  }

  create(contact: Contact):Observable<Contact>{
    return this.http.post<Contact>(environment.API.baseUrl + environment.API.endpoint.contact, contact)
  }
}
