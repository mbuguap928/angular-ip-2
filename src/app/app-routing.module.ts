import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  GithubComponent } from './github/github.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ReposComponent } from './repos/repos.component';
import { NavbarComponent} from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
{ path: 'user', component: UserdetailsComponent },
{path: 'repository', component: ReposComponent},
{ path: 'about', component: AboutComponent },
{ path: '**', component: NotfoundComponent },
{ path: '', redirectTo: '/user', pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
