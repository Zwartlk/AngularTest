import { AppError } from './../common/app-error';
import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

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
    this.service.getAll()
      .subscribe( posts => this.posts = posts )
/*         error => {
          alert('An unexpected error occured');
          console.log(error);
      });  NO need to use because handel globleeroor */
  }

  createPost(input: HTMLInputElement)  {
    let post = { title: input.value };
    input.value = '';
    this.service.create(post)
      .subscribe(
        newPost => {
          post['id'] = newPost.id;
          this.posts.splice(0,0,post);
        },
        (error: AppError)=>{
          if (error instanceof BadInput) {
            //this.form.setError(error.originalError);
          }
          else throw error;
        });
  }

  updatePost(post)  {
    this.service.update(post)
      .subscribe(updatedPost => {
        console.log(updatedPost);
          //this.posts.splice(0,0,post);
      });
    //this.http.put(this.url, JSON.stringify(post))
  }

  deletePost(post)
  {
    this.service.delete(post.id)//post.id
      .subscribe(
        () => {
          console.log(post);
          let index = this.posts.indexOf(post);
          this.posts.splice(index, 1);
        },

        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('this has aldready deleted');
          else throw error;
      });
  }
}
