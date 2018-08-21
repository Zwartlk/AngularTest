import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(logService:LogService) { 
    //need to use decoractor @Injectable because its dependence in LogService
  }
  get email(){
    return "HoHOlo";
  }
}
