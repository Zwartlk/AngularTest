import { ErrorHandler } from "@angular/core";

//errorHandler Angular.io

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert('An unexpected error occured');
        console.log(error);
    }
}