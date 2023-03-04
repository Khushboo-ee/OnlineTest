import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  ques1: string = "";
  ques2: string = "";
  ques3: string = "";
  ques4: string = "";
  ques5: string = "";
  ques6: string = "";
  ques7: string = "";
  ques8: string = "";
  ques9: string = "";
  ques10: string = "";
  score: number = 0;
  mycss:string = "";
  msg: string = "";
  flag: boolean = true;

  constructor() { }

  checkScore(){
   
      if (this.ques1 == "q1-opt2") {
        this.score = this.score+10;
      }
      //  else {
      //   this.score= this.score + 0;
      // }
      if (this.ques2 == "q2-opt4") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
      if (this.ques3 == "q3-opt2") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
      if (this.ques4 == "q4-opt3") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
      if (this.ques5 == "q5-opt4") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
      if (this.ques6 == "q6-opt2") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
      if (this.ques7 == "q7-opt1") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
      if (this.ques8 == "q8-opt2") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
      if (this.ques9 == "q9-opt4") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
      if (this.ques10 == "q10-opt1") {
        this.score = this.score+10;
      } 
      // else {
      //   this.score= this.score + 0;
      // }
   
      this.msg = "Your Score is: "+ this.score;
      if (this.score>=50) {
        this.mycss = "css1";
      } else {
        this.mycss = "css2";
      }
  }
  ngOnInit(): void {
  }

}
