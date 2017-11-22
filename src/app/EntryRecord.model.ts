export class EntryRecord{
	timestamp:string;
	frontFramework:string;
	operatingSystem:string;
	twoTechInterest:string;
	hobbies:string;
	applicationFromHobby:string;
	dreamJob:string;
	programmingLanguage:string;

	constructor(timestamp:string, frontFramework:string, operatingSystem:string, twoTechInterest:string, 
		        hobbies:string, applicationFromHobby:string, dreamJob:string, programmingLanguage:string){
		this.timestamp=timestamp;
		this.frontFramework=frontFramework;
		this.operatingSystem=operatingSystem;
		this.twoTechInterest=twoTechInterest;
		this.hobbies=hobbies;
		this.applicationFromHobby=applicationFromHobby;
		this.dreamJob=dreamJob;
		this.programmingLanguage=programmingLanguage;
	}
}