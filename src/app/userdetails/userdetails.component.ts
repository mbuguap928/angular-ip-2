import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { User } from '../user'
import { ClearService } from '../clear.service'

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  
  user: User;
 
 constructor(private gitHubRequest: ClearService) {}
 
 ngOnInit() {
 this.gitHubRequest.gitHubUsersRequest();
 this.user = this.gitHubRequest.user;
 }

}
