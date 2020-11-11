import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubComponent } from './github/github.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReposComponent } from './repos/repos.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    NavbarComponent,
    ReposComponent,
    NotfoundComponent,
    UserdetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
