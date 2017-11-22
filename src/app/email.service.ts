import { Injectable } from '@angular/core';

@Injectable()
export class EmailService {
 email:string="";

  constructor() { }

  getEmail(){
  	return this.email;
  }
  
  updateEmail(newEmail:string){
  	this.email=newEmail;
  }
}
