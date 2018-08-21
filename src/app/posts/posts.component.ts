import { AppError } from './../common/app-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit  {

/*   constructor(http:Http) { 
    http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
      console.log(response)
    });
  } */

  posts:any[];
  
  constructor(private service: PostsService) { 

  }

  ngOnInit()  {
    this.service.getPosts()
      .subscribe(
        response => {
          //console.log(response.json());
          this.posts=response.json()
      }, 
        error => {
          alert('An unexpected error occured');
          console.log(error);
      });
  }

  createPost(input: HTMLInputElement)  {
    let post = { title: input.value };
    input.value = '';
    this.service.createPost(post)
      .subscribe(
        response => {
          post['id'] = response.json().id;
          this.posts.splice(0,0,post);
        },
        (error:Response)=>{
          if (error.status === 400) {}
            //this.form.setError(error.json());
          else{
            alert('An unexpected error occurred.');
            console.log(error);
          }
        });
  }

  updatePost(post)  {
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response.json());
          //this.posts.splice(0,0,post);
      });
    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post)
  {
    this.service.deletePost(post.id)
      .subscribe(
        response => {
          console.log(response.json());
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },

        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('this has aldready deleted');
          else
          {
            alert('An unexpected error occured');
            console.log(error);
          }
      });
  }
}
