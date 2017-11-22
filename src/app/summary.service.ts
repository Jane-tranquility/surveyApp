import { Injectable } from '@angular/core';
import { DatasetService } from './dataset.service';
import {EntryRecord} from './EntryRecord.model';
import {StopWordsService} from './stop-words.service';

@Injectable()
export class SummaryService {

	number:number=3;
	wordsDict1={};
	wordsDict2={};
	wordsDict3={};
	wordsDict4={};
	wordsDict5={};
	wordsDict6={};
	wordsDict7={};
	popWords1=[];
	popWords2=[];
	popWords3=[];
	popWords4=[];
	popWords5=[];
	popWords6=[];
	popWords7=[];
	keys:Array<string>;
	values:Array<number>;
	count:number=0;
	popValue:number;
  constructor(private data:DatasetService,private stopWords:StopWordsService) { 
  	this.loadToDict();
  	this.getWords1();
  	this.getWords2();
  	this.getWords3();
  	this.getWords4();
  	this.getWords5();
  	this.getWords6();
  	this.getWords7();
  }
  loadToDict(){
  	this.wordsDict1={};
  	this.wordsDict2={};
  	this.wordsDict3={};
  	this.wordsDict4={};
  	this.wordsDict5={};
  	this.wordsDict6={};
  	this.wordsDict7={};
  	for (let entry of this.data.dataset){
 		for (let item of entry.frontFramework.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ")){
 			if (item!=""){
 				if (this.stopWords.stopWords.indexOf(item.toLowerCase())<0){
 					if (item.toLowerCase() in this.wordsDict1){
 						this.wordsDict1[item.toLowerCase()]=this.wordsDict1[item.toLowerCase()]+1;
 					}else {
 						this.wordsDict1[item.toLowerCase()]=1;
 					}
 				}
 			}
 		}
 		for (let item of entry.operatingSystem.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ")){
 			if (item!=""){
 				if (this.stopWords.stopWords.indexOf(item.toLowerCase())<0){
 					if (item.toLowerCase() in this.wordsDict2){
 						this.wordsDict2[item.toLowerCase()]=this.wordsDict2[item.toLowerCase()]+1;
 					}else {
 						this.wordsDict2[item.toLowerCase()]=1;
 					}
 				}
 			}
 		}
 		for (let item of entry.twoTechInterest.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ")){
 			if (item!=""){
 				if (this.stopWords.stopWords.indexOf(item.toLowerCase())<0){
 					if (item.toLowerCase() in this.wordsDict3){
 						this.wordsDict3[item.toLowerCase()]=this.wordsDict3[item.toLowerCase()]+1;
 					}else {
 						this.wordsDict3[item.toLowerCase()]=1;
 					}
 				}
 			}
 		}
 		for (let item of entry.hobbies.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ")){
 			if (item!=""){
 				if (this.stopWords.stopWords.indexOf(item.toLowerCase())<0){
 					if (item.toLowerCase() in this.wordsDict4){
 						this.wordsDict4[item.toLowerCase()]=this.wordsDict4[item.toLowerCase()]+1;
 					}else {
 						this.wordsDict4[item.toLowerCase()]=1;
 					}
 				}
 			}
 		}
 		for (let item of entry.applicationFromHobby.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ")){
 			if (item!=""){
 				if (this.stopWords.stopWords.indexOf(item.toLowerCase())<0){
 					if (item.toLowerCase() in this.wordsDict5){
 						this.wordsDict5[item.toLowerCase()]=this.wordsDict5[item.toLowerCase()]+1;
 					}else {
 						this.wordsDict5[item.toLowerCase()]=1;
 					}
 				}
 			}
 		}
 		for (let item of entry.dreamJob.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ")){
 			if (item!=""){
 				if (this.stopWords.stopWords.indexOf(item.toLowerCase())<0){
 					if (item.toLowerCase() in this.wordsDict6){
 						this.wordsDict6[item.toLowerCase()]=this.wordsDict6[item.toLowerCase()]+1;
 					}else {
 						this.wordsDict6[item.toLowerCase()]=1;
 					}
 				}
 			}
 		}
 		for (let item of entry.programmingLanguage.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g," ").split(" ")){
 			if (item!=""){
 				if (this.stopWords.stopWords.indexOf(item.toLowerCase())<0){
 					if (item.toLowerCase() in this.wordsDict7){
 						this.wordsDict7[item.toLowerCase()]=this.wordsDict7[item.toLowerCase()]+1;
 					}else {
 						this.wordsDict7[item.toLowerCase()]=1;
 					}
 				}
 			}
 		}
  	}
  }

  // getDataset(){
  // 	return this.data.getDataset();
  // }

  getWords1(){
  	this.keys=[];
  	this.values=[];
  	this.popWords1=[];
  	this.count=0;
  	for (let key of Object.keys(this.wordsDict1)){
  		this.keys.push(key);
  		this.values.push(this.wordsDict1[key]);
  	}
  	this.values.sort((a,b)=>a-b);
  	// console.log(this.values);

  	if (this.number>this.data.dataset.length){
  		while(this.count<this.data.dataset.length){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict1)){
  				if (this.wordsDict1[key]==this.popValue){
  					this.popWords1.push({"key":key,"value":this.popValue});
  					this.wordsDict1[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}else{
  		while(this.count<this.number){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict1)){
  				if (this.wordsDict1[key]==this.popValue){
  					this.popWords1.push({"key":key,"value":this.popValue});
  					this.wordsDict1[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}
  }
  getWords2(){
  	this.keys=[];
  	this.values=[];
  	this.popWords2=[];
  	this.count=0;
  	for (let key of Object.keys(this.wordsDict2)){
  		this.keys.push(key);
  		this.values.push(this.wordsDict2[key]);
  	}
  	this.values.sort((a,b)=>a-b);
  	// console.log(this.values);

  	if (this.number>this.data.dataset.length){
  		while(this.count<this.data.dataset.length){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict2)){
  				if (this.wordsDict2[key]==this.popValue){
  					this.popWords2.push({"key":key,"value":this.popValue});
  					this.wordsDict2[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}else{
  		while(this.count<this.number){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict2)){
  				if (this.wordsDict2[key]==this.popValue){
  					this.popWords2.push({"key":key,"value":this.popValue});
  					this.wordsDict2[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}

  }
  getWords3(){
  	this.keys=[];
  	this.values=[];
  	this.popWords3=[];
  	this.count=0;
  	for (let key of Object.keys(this.wordsDict3)){
  		this.keys.push(key);
  		this.values.push(this.wordsDict3[key]);
  	}
  	this.values.sort((a,b)=>a-b);
  	// console.log(this.values);

  	if (this.number>this.data.dataset.length){
  		while(this.count<this.data.dataset.length){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict3)){
  				if (this.wordsDict3[key]==this.popValue){
  					this.popWords3.push({"key":key,"value":this.popValue});
  					this.wordsDict3[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}else{
  		while(this.count<this.number){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict3)){
  				if (this.wordsDict3[key]==this.popValue){
  					this.popWords3.push({"key":key,"value":this.popValue});
  					this.wordsDict3[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}
  	
  }
  getWords4(){
  	this.keys=[];
  	this.values=[];
  	this.popWords4=[];
  	this.count=0;
  	for (let key of Object.keys(this.wordsDict4)){
  		this.keys.push(key);
  		this.values.push(this.wordsDict4[key]);
  	}
  	this.values.sort((a,b)=>a-b);
  	// console.log(this.values);

  	if (this.number>this.data.dataset.length){
  		while(this.count<this.data.dataset.length){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict4)){
  				if (this.wordsDict4[key]==this.popValue){
  					this.popWords4.push({"key":key,"value":this.popValue});
  					this.wordsDict4[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}else{
  		while(this.count<this.number){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict4)){
  				if (this.wordsDict4[key]==this.popValue){
  					this.popWords4.push({"key":key,"value":this.popValue});
  					this.wordsDict4[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}
  	
  }
  getWords5(){
  	this.keys=[];
  	this.values=[];
  	this.popWords5=[];
  	this.count=0;
  	for (let key of Object.keys(this.wordsDict5)){
  		this.keys.push(key);
  		this.values.push(this.wordsDict5[key]);
  	}
  	this.values.sort((a,b)=>a-b);
  	// console.log(this.values);

  	if (this.number>this.data.dataset.length){
  		while(this.count<this.data.dataset.length){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict5)){
  				if (this.wordsDict5[key]==this.popValue){
  					this.popWords5.push({"key":key,"value":this.popValue});
  					this.wordsDict5[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}else{
  		while(this.count<this.number){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict5)){
  				if (this.wordsDict5[key]==this.popValue){
  					this.popWords5.push({"key":key,"value":this.popValue});
  					this.wordsDict5[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}
  	
  }
  getWords6(){
  	this.keys=[];
  	this.values=[];
  	this.popWords6=[];
  	this.count=0;
  	for (let key of Object.keys(this.wordsDict6)){
  		this.keys.push(key);
  		this.values.push(this.wordsDict6[key]);
  	}
  	this.values.sort((a,b)=>a-b);
  	// console.log(this.values);

  	if (this.number>this.data.dataset.length){
  		while(this.count<this.data.dataset.length){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict6)){
  				if (this.wordsDict6[key]==this.popValue){
  					this.popWords6.push({"key":key,"value":this.popValue});
  					this.wordsDict6[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}else{
  		while(this.count<this.number){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict6)){
  				if (this.wordsDict6[key]==this.popValue){
  					this.popWords6.push({"key":key,"value":this.popValue});
  					this.wordsDict6[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}
  	
  }
  getWords7(){
  	this.keys=[];
  	this.values=[];
  	this.popWords7=[];
  	this.count=0;
  	for (let key of Object.keys(this.wordsDict7)){
  		this.keys.push(key);
  		this.values.push(this.wordsDict7[key]);
  	}
  	this.values.sort((a,b)=>a-b);
  	// console.log(this.values);

  	if (this.number>this.data.dataset.length){
  		while(this.count<this.data.dataset.length){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict7)){
  				if (this.wordsDict7[key]==this.popValue){
  					this.popWords7.push({"key":key,"value":this.popValue});
  					this.wordsDict7[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}else{
  		while(this.count<this.number){
  			this.popValue=this.values.pop();
  			for (let key of Object.keys(this.wordsDict7)){
  				if (this.wordsDict7[key]==this.popValue){
  					this.popWords7.push({"key":key,"value":this.popValue});
  					this.wordsDict7[key]=-1;
  					break;
  				}
  			}
  			this.count++;
  		}
  	}
  	
  }

}
