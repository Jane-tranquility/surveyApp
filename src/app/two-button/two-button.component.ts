import { Component, OnInit , Input} from '@angular/core';
import {User} from '../User.model';
import { RegistrationService } from '../registration.service';
import { Router,RouterModule }   from '@angular/router';
import {EmailService} from '../email.service';
import {NavigationEnd} from '@angular/router';
declare let gtag:Function;

@Component({
  selector: 'app-two-button',
  templateUrl: './two-button.component.html',
  styleUrls: ['./two-button.component.css']
})
export class TwoButtonComponent implements OnInit {
	users:Array<User>;
  @Input() email:string="";
  @Input() password:string="";
  i:Number;
  constructor(private registration:RegistrationService, private router: Router, private currentEmail:EmailService) { }

  ngOnInit() {
  	this.users=this.getUsers();
  }
  getUsers(){
  	return this.registration.getUsers();
  }

  login(){
    console.log("Logged in");
    this.i=0;
    for (let user of this.users){
      if (this.email==user.email && this.password==user.password){
        this.i=1;
        document.getElementById("NavLinks").style.display="initial";
        this.currentEmail.updateEmail(this.email);
        gtag('event','LoginEvent');
        this.router.navigate(['/Home Page']);
        break;
      }
    }
    if (this.i==0){
      document.getElementById("Error").style.display="initial";
      this.router.navigate(['/Login Page']);
    }

    
  }

  register(){
    this.router.navigate(['/Register']);
  }

}
