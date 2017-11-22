import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../dataset.service';
import {EntryRecord} from '../EntryRecord.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  	//dataset:Array<EntryRecord>;

  	timestamp:string;
	frontFramework:string;
	operatingSystem:string;
	twoTechInterest:string;
	hobbies:string;
	applicationFromHobby:string;
	dreamJob:string;
	programmingLanguage:string;

	record: EntryRecord;

  constructor(private data:DatasetService){}

  ngOnInit(){
  	//this.dataset=this.getDataset();
 
  }

  // getDataset(){
  // 	return this.data.getDataset();
  // }

  submit(){
  	this.record=new EntryRecord(String(Date.now()), this.frontFramework, this.operatingSystem, this.twoTechInterest, this.hobbies, this.applicationFromHobby, this.dreamJob, this.programmingLanguage);
  	this.data.addData(this.record);
  }

}
