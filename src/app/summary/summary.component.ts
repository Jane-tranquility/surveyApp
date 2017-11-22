import { Component, OnInit } from '@angular/core';
import { DatasetService } from '../dataset.service';
import {EntryRecord} from '../EntryRecord.model';
import {StopWordsService} from '../stop-words.service';
import {SummaryService} from '../summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

	 number:number=3;
	

  constructor(private data:DatasetService,private stopWords:StopWordsService,private summary:SummaryService) {}

  ngOnInit() {
  	
  }

  
  update(){
    this.summary.number=this.number;
  	this.summary.loadToDict();
  	this.summary.getWords1();
  	this.summary.getWords2();
  	this.summary.getWords3();
  	this.summary.getWords4();
  	this.summary.getWords5();
  	this.summary.getWords6();
  	this.summary.getWords7();
  }

}
