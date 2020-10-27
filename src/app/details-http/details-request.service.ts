import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{environment}from '../../environments/environment';
import { User } from '../user';
import { Repository } from '../repository';


@Injectable({
  providedIn: 'root'
})
export class DetailsRequestService {
  user: User
  repos:Repository

  constructor(private http:HttpClient){}

  userRequest(){
    interface ApiResponse{
      name:string, 
      company:string, 
      blog:string, 
      location:string, 
      bio:string, 
      repos:number, 
      createdate:Date, 
      updatedate:Date
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.gitHubUrl).toPromise().then(response=>{
        this.user.name = response.name
        this.user.company = response.company
        this.user.blog = response.blog
        this.user.location = response.location
        this.user.bio = response.bio
        this.user.repos = response.repos
        this.user.createdate = response.createdate
        this.user.updatedate = response.updatedate



        resolve()
      },
      error=>{
        this.user.name = "";
        this.user.company = "";
        this.user.blog = "";
        this.user.location = "";
        this.user.bio = "";
        this.user.repos = 0;
        this.user.createdate = new Date();
        this.user.updatedate = new Date();
        reject(error);
      })
    })
    return promise;
  }

  repoRequest(){
    interface ApiResponse{
       name:string,
       full_name:string,
       owner:string,
       description:string,
       url:string
    }
let promise = new Promise((resolve,reject)=>{
  this.http.get<ApiResponse>(environment.repositoryUrl).toPromise().then(response=>{
    this.repos.name = response.name
    this.repos.full_name = response.full_name
    this.repos.owner = response.owner
    this.repos.description = response.description
    this.repos.url = response.url
  })
}
  }
}
