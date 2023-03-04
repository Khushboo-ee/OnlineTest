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
  score: number = 0;
  mycss:string = "";
  msg: string = "";
  flag: boolean = true;

  constructor() { }

  checkScore(){
   
      if (this.ques1 == "q1-opt2") {
        this.score = this.score+10;
        //this.msg = "Your Score is: "+ this.score;
      } else {
        this.score= this.score + 0;
        //this.msg = "Your Score is: "+ this.score;
      }
      if (this.ques2 == "q2-opt4") {
        this.score = this.score+10;
        //this.msg = "Your Score is: "+ this.score;
      } else {
        this.score= this.score + 0;
        //this.msg = "Your Score is: "+ this.score;
      }
    this.msg = "Your Score is: "+ this.score;
  }
  ngOnInit(): void {
  }

}
