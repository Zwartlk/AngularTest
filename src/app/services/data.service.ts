import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
import { catchError, map , retry } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { throwError } from 'rxjs';
 
@Injectable()

export class DataService {
  constructor(private url:string,private http: Http) { 

  }

  getAll()  {
    return this.http.get(this.url)
      .pipe(
        map(response => response.json()),
        catchError(this.HandleError));
  }

  create(resource) {
    return this.http.post(this.url,JSON.stringify(resource))
      .pipe(
        retry(3),
        map(response => response.json()),
        catchError(this.HandleError));;
  }

  update(resource){
    return this.http.patch(this.url + '/' + resource.id,JSON.stringify({isRead: true}))
      .pipe(
        map(response => response.json()),
        catchError(this.HandleError));
  }

  delete(id){
    return this.http.delete(this.url + '/' + id).
      pipe(
        map(response => response.json()),
        catchError(
/*           (error:Response) => {
            if (error.status == 404)
              return throwError(new NotFoundError(error.json()));
            return throwError(new AppError(error));
          }) */
          this.HandleError
      ));
  }

  private HandleError(error: Response)
  {
    if (error.status == 400)
      return throwError(new BadInput(error.json())); //createPost
    if (error.status == 404)
      return throwError(new NotFoundError(error.json()));
    return throwError(new AppError(error));
  }
}
