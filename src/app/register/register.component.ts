import { Component, OnInit } from '@angular/core';
import { Router,RouterModule }   from '@angular/router';
import {User} from '../User.model';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	firstname:string;
	lastname:string;
	email:string;
	password:string;
	userName:string;
	homeAddress:string;
	cellNumber:string;
	user:User;
  constructor(private router: Router,private registration:RegistrationService) { }
  ngOnInit(){}

  register(){
  	this.user=new User(this.firstname, this.lastname, this.email, this.password, this.userName, this.homeAddress, this.cellNumber);
  	this.registration.addUser(this.user);
  	this.router.navigate(['/Home Page']);
  }

}
