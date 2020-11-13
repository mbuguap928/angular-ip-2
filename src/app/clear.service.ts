import { Injectable } from '@angular/core';
import { Repository } from './repository';
import { User } from './user';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class ClearService {

    user: User;
    repos: Repository[];
    repo: Repository;
    constructor(private http: HttpClient) {
    this.user = new User(
    '',
    '',
    '',
    '',
    '',
    
    
   0,
    new Date(),
    new Date(),
    
    );
    this.repo = new Repository(
    '',
    '',
    
    '',
    '',
    '',
    
    
    
    
    );
    this.repos = [];
    }
    
    //Get my GitHub user details
    getGitHubInfo(): Observable<any> {
    return this.http.get(
    environment.gitHubUrl
    );
    }
    
    //Get My Repo
    getMyGitHubRepos(): Observable<any> {
    return this.http.get(environment.repositoryUrl);
    }
    
    //Get my GitHub user details using Promise
    gitHubUsersRequest() {
    interface UserApi {
       name:string, 
       company:string,
       blog:string,
       location:string,
       bio:string,
       repos:number,
       createdate:Date,
       updatedate:Date
    }
    //The User Promise
    let urlForUserDetailsAPI = environment.gitHubUrl
    console.log('urlForUserDetailsAPI: ' + urlForUserDetailsAPI);
    let gitHubUserPromise = new Promise((resolve, reject) => {
    this.http
    .get<UserApi>(urlForUserDetailsAPI)
    .toPromise()
    .then(
    (response) => {
    
    this.user.name = response.name;
    this.user.company = response.company;
    this.user.blog = response.blog;
    this.user.location = response.location;
    this.user.bio = response.bio;
    
    this.user.repos = response.repos;
    
    this.user.createdate = new Date(response.createdate);
    this.user.updatedate = new Date(response.updatedate);
    
    // console.log('Userrrr: ' + this.user.avatar_url);
    resolve();
    },
    (error) => {
    this.user.name = '';
    this.user.company = '';
    this.user.blog = '';
    this.user.location = '';
    
    this.user.bio = '';
    
    this.user.repos = 0;
  
    this.user.createdate = new Date();
    this.user.updatedate = new Date();
    
    reject(error);
    }
    );
    });
    console.log('gitHubUserPromise: ' + JSON.stringify(gitHubUserPromise));
    return gitHubUserPromise;
    }
    
    //Get My Repo using Promise
    gitHubReposRequest() {
    interface ReposApi {
      name:string,
      full_name:string,
      owner:string,
      description:string,
      url:string
           

      
    }
    //The Repos Promise
    let gitHubReposPromise = new Promise((success, failed) => {
    this.http
    .get<ReposApi[]>(environment.repositoryUrl)
    .toPromise()
    .then(
    (response) => {
    // console.log(
    // 'Responsesssssssssssssssss: ' + JSON.stringify(response)
    // );
    // this.repos = response;
    // console.log('Repos: ' + JSON.stringify(this.repos));
    response.forEach((element) => {
    this.repo.name = element.name;
    this.repo.full_name = element.full_name;
    
    
    
    this.repo.description = element.description;
    this.repo.url = element.url;
    console.log('Current: ' + JSON.stringify(this.repo));
    this.repos.push(this.repo);
    });
    success();
    },
    (error) => {
    this.repos = null;
    failed(error);
    }
    );
    });
    return gitHubReposPromise;
    }}
}
