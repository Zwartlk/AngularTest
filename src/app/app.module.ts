import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { PostsComponent } from './posts/posts.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GithubprofileComponent } from './githubprofile/githubprofile.component';
import { RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    PostsComponent,
    NavBarComponent,
    GithubprofileComponent,
    GithubFollowersComponent,
    NotFoundPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path:'', component:HomeComponent },
      { path:'followers', component:GithubFollowersComponent },
      { path:'followers/:username', component:GithubprofileComponent },
      { path:'posts', component:PostsComponent },
      { path:'**', component:NotFoundPageComponent },
    ])
  ],
  providers: [    
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
