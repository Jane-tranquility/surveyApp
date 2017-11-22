export class User{
	firstName:string;
	lastName:string;
	email:string;
	password:string;
	userName:string;
	homeAddress:string;
	cellNumber:string;

	constructor(firstName:string, lastName:string, email:string, password:string, userName:string, homeAddress:string, cellNumber:string){
		this.firstName=firstName;
		this.lastName=lastName;
		this.email=email;
		this.password=password;
		this.userName=userName;
		this.homeAddress=homeAddress;
		this.cellNumber=cellNumber;
	}
}