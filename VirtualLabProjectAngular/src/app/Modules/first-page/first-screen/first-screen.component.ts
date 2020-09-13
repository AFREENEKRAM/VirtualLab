import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {

  loginForm;
  loginFormFields = new loginFormFields;
  highScoreList: highscore[];
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.initializeDataSet();

    this.highScoreList = [
      {
       "Name": "JOHN",
       "Score": 1200
      },
      {
       "Name": "Mary",
       "Score": 1100
      },
      {
        "Name": "CIA",
        "Score": 1000
       },
       {
        "Name": "EZA",
        "Score": 950
       },]
  }


  initializeDataSet = () => {
    this.loginForm = this.formBuilder.group({
      email: [this.loginFormFields.email || ''],
      password: [this.loginFormFields.password || ''],
    })
  }


  onSubmit(){

  }

}

export class highscore {
  Name: string;
  Score: number;
}

export class loginFormFields {
  email: string;
  password: number;
}

