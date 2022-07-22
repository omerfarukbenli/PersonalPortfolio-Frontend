import { Component, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  home:Home[];
  id:number;

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.PegarTodos().subscribe(result =>{
      this.home = result;
    })
  }

}
