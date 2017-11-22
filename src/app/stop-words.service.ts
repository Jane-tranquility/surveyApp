import { Injectable } from '@angular/core';

@Injectable()
export class StopWordsService {
	stopWords=["am","i","to","we","are","you","the","and","or","a","an","it","it's","of","for","is","can","could","not","in","would","that","like","love","this",
	"as","have","had","all","them","me","all","some","because","if","work","job","be","really","there","here","new","old","online","my","mine","your","yours","theirs","but","however","which","who","whom",
	"something","anything","with","1","2","3","4","5","6","7","8","9","0","what","no","know","application","apps","square","working","tech","technology","development","about","will","so","actually","helpful","simple","wnat","company",
	"i'm","also","do","we'are","more","very","likely","lost","how","applications","apps","want"]

  constructor() {

  }

}
