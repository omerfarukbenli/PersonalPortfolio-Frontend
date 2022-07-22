import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/models/repo';
import { RepoService } from 'src/app/services/repo.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {



  repo:Repo[];
  id:number;
  constructor(private repoService:RepoService) { }

  ngOnInit(): void {
    this.repoService.PegarTodos().subscribe(result =>{
      this.repo = result;
    })
  }

}
