import { Component, OnInit } from '@angular/core';
import { About } from 'src/app/models/about';
import { AboutService } from 'src/app/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {


  about:About[];
  id:number;
  constructor(private aboutService:AboutService) { }

  ngOnInit(): void {
    this.aboutService.PegarTodos().subscribe(result =>{
      this.about = result;
    })
  }

}
