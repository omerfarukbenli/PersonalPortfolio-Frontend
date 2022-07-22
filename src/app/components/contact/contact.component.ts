import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contact:Contact[];
  id:number;
  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.PegarTodos().subscribe(result =>{
      this.contact = result;
    })
  }

}
