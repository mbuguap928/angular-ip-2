import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository'
import { ClearService } from '../clear.service'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  repos: Repository[];
 constructor(private gitHubRequest: ClearService) {}
 
 ngOnInit() {
 this.gitHubRequest.gitHubReposRequest();
 this.repos = this.gitHubRequest.repos;
 }

 

}
