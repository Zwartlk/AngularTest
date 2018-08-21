import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [    
    {provide:ErrorHandler, useClass:AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
