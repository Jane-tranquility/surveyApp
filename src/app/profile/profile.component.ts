import { Component, OnInit } from '@angular/core';
import {EmailService} from '../email.service';
import { RegistrationService } from '../registration.service';
import {User} from '../User.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	firstname:string;
	lastname:string;
	email:string;
	password:string;
	userName:string;
	homeAddress:string;
	cellNumber:string;
  constructor(private currentEmail:EmailService,private registration:RegistrationService) { }

  ngOnInit() {
  	for (let user of this.registration.getUsers()){
  		if (this.currentEmail.getEmail()==user.email){
  			this.firstname=user.firstName;
  			this.lastname=user.lastName;
  			this.email=user.email;
  			this.password=user.password;
  			this.userName=user.userName;
  			this.homeAddress=user.homeAddress;
  			this.cellNumber=user.cellNumber;
  		}
  	}
  }

  update(){
  	for (let user of this.registration.getUsers()){
  		if (this.currentEmail.getEmail()==user.email){
  			user.firstName=this.firstname;
  			user.lastName=this.lastname;
  			user.email=this.email;
  			user.password=this.password;
  			user.userName=this.userName;
  			user.homeAddress=this.homeAddress;
  			user.cellNumber=this.cellNumber;
  			this.currentEmail.updateEmail(this.email);
  		}
  	}
  }

}
