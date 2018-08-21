import { AppError } from './../common/app-error';

import { catchError } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NotFoundError } from '../common/not-found-error';
 
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http: Http) { 

  }

  getPosts()  {
    return this.http.get(this.url)
  }

  createPost(post) {
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post){
    return this.http.patch(this.url + '/' + post.id,JSON.stringify({isRead: true}))
  }

  deletePost(id){
    return this.http.delete(this.url + '/' + id).
      pipe(
        catchError(
          (error:Response) => {
            if (error.status == 404)
              return Observable.throw(new NotFoundError());
            return Observable.throw(new AppError(error));
          })
      );
  }
}
