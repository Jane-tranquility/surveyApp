import { Component, OnInit} from '@angular/core';
import { DatasetService } from '../dataset.service';
import {EntryRecord} from '../EntryRecord.model';
import { RegistrationService } from '../registration.service';
import {StopWordsService} from '../stop-words.service';
import {SummaryService} from '../summary.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
	
	chat="";
	answer:string;

  constructor(private data:DatasetService,private registration:RegistrationService,private stopWords:StopWordsService,private summary:SummaryService) { }

  ngOnInit() {
  	
  }

  placeHolder() {
  	document.getElementById("chatbox").setAttribute('placeholder',"");
  }

  display(){
  	document.getElementById("bodybox").style.display="initial";
  }
  close(){
  	document.getElementById("bodybox").style.display="none";
  }
  send(){
  	if (this.chat.toLowerCase().indexOf("user")>-1) {
  		this.answer="We have "+String(this.registration.users.length)+" users registered!"
  	}else if (this.chat.toLowerCase().indexOf("question")>-1 && this.chat.toLowerCase().indexOf("number")>-1){
  		this.answer="We have "+String(this.registration.users.length)+" users registered!"
  	}else if (this.chat.toLowerCase().indexOf("survey")>-1 && this.chat.toLowerCase().indexOf("number")>-1){
  		this.answer="We have "+String(this.data.dataset.length)+" users have already submitted the survey!"
  	}else if (this.chat.toLowerCase().indexOf("number")>-1 && this.chat.toLowerCase().indexOf("popular")>-1 && this.chat.toLowerCase().indexOf("words")>-1){
  		this.answer="We are providing "+String(this.summary.number) +" popular words!"
  	}else if (this.chat.toLowerCase().indexOf("stop")>-1 && this.chat.toLowerCase().indexOf("word")>-1){
  		this.answer="Our stop words list is long, to name a few: "+ this.stopWords.stopWords.slice(0,7)+".";
  	}else if (this.chat.toLowerCase().indexOf("1")>-1 && this.chat.toLowerCase().indexOf("popular")>-1 && this.chat.toLowerCase().indexOf("word")>-1){
  		this.answer="The popular words for question 1 are: ";
  		for(let item of this.summary.popWords1){
  			this.answer=this.answer+item["key"]+",  ";
  		}
  	}else if (this.chat.toLowerCase().indexOf("2")>-1 && this.chat.toLowerCase().indexOf("popular")>-1 && this.chat.toLowerCase().indexOf("word")>-1){
  		this.answer="The popular words for question 2 are: ";
  		for(let item of this.summary.popWords2){
  			this.answer=this.answer+item["key"]+",  ";
  		}
  	}else if (this.chat.toLowerCase().indexOf("3")>-1 && this.chat.toLowerCase().indexOf("popular")>-1 && this.chat.toLowerCase().indexOf("word")>-1){
  		this.answer="The popular words for question 3 are: ";
  		for(let item of this.summary.popWords3){
  			this.answer=this.answer+item["key"]+",  ";
  		}
  	}else if (this.chat.toLowerCase().indexOf("4")>-1 && this.chat.toLowerCase().indexOf("popular")>-1 && this.chat.toLowerCase().indexOf("word")>-1){
  		this.answer="The popular words for question 4 are: ";
  		for(let item of this.summary.popWords4){
  			this.answer=this.answer+item["key"]+",  ";
  		}
  	}else if (this.chat.toLowerCase().indexOf("5")>-1 && this.chat.toLowerCase().indexOf("popular")>-1 && this.chat.toLowerCase().indexOf("word")>-1){
  		this.answer="The popular words for question 5 are: ";
  		for(let item of this.summary.popWords5){
  			this.answer=this.answer+item["key"]+",  ";
  		}
  	}else if (this.chat.toLowerCase().indexOf("6")>-1 && this.chat.toLowerCase().indexOf("popular")>-1 && this.chat.toLowerCase().indexOf("word")>-1){
  		this.answer="The popular words for question 6 are: ";
  		for(let item of this.summary.popWords6){
  			this.answer=this.answer+item["key"]+",  ";
  		}
  	}else if (this.chat.toLowerCase().indexOf("7")>-1 && this.chat.toLowerCase().indexOf("popular")>-1 && this.chat.toLowerCase().indexOf("word")>-1){
  		this.answer="The popular words for question 7 are: ";
  		for(let item of this.summary.popWords7){
  			this.answer=this.answer+item["key"]+",  ";
  		}
  	}else{
  		this.answer="I didn't understand your question, please ask another question."
  	}
  }
}
