import { Injectable } from '@angular/core';
import {User} from './User.model';

@Injectable()
export class RegistrationService {
	users:Array<User>;
  constructor() { 
  	this.users=[new User("Jane","Li","jane.jingli.0810@gmail.com","234567","Jane_Li","5747 N Winthrop. Ave","7738446369"),
  	            new User("Spencer","Hasting","SpencerHastings@gmail.com","123456","Spencer","37 Atlantic Ave","8264923453"),
  	            new User("Hanna","Marin","HannaMarin@gmail.com","145723","Hanna","1642 S State Street","8352945734"),
  	            new User("Aria","Montgomery","AriaMontgomery@gmail.com","29454y","Aria","897 S Sheridan Street","7253746352"),
  	            new User("Emily","Fields","EmilyFields@gmail.com","245643","Emily","1372 S Michigan Ave","6254830284"),
  	            new User("Caleb","Rivers","CalebRivers@gmail.com","6429457","Caleb","1 E Jackson Boulevard","5322856732")]
  }
  getUsers(){
  	return this.users;
  }
  addUser(newUser:User){
  	this.users.push(newUser);
  }

}
