import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataServiceService } from 'src/app/AppStore/data-service.service';

@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {

  loginForm;
  loginFormFields = new loginFormFields;
  highScoreList: highscore[];

  HighScoreData: any;
  constructor(
    private formBuilder: FormBuilder,
    private dataservice: DataServiceService
  ) { }

  ngOnInit(): void {

    this.getHighScore();

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

  getHighScore(){
    return this.dataservice.fetchHighScoreList().subscribe(
      (data: any) => {

        this.HighScoreData = data;
      }
    );
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

