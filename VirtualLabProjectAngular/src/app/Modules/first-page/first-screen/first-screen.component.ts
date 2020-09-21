import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataServiceService } from '../../../AppStore/data-service.service';

import notify from 'devextreme/ui/notify';


@Component({
  selector: 'app-first-screen',
  templateUrl: './first-screen.component.html',
  styleUrls: ['./first-screen.component.css']
})
export class FirstScreenComponent implements OnInit {
  // @ViewChild('videoPlayer') videoplayer: ElementRef; 
  loginForm;
  loginFormFields = new loginFormFields;
  loginResponse;
 
  videoSource:any;

  HighScoreData: any;
  constructor(
    private formBuilder: FormBuilder,
    private dataservice: DataServiceService
  ) { }

  ngOnInit(): void {

    this.getHighScore();

    this.initializeDataSet();

   
  }

  toggleVideo(event: any) {
    // this.videoplayer.nativeElement.play();
} 

  initializeDataSet = () => {
    this.loginForm = this.formBuilder.group({
      email: [this.loginFormFields.email || ''],
      password: [this.loginFormFields.password || ''],
    })
  }


  onSubmit(e){

    if (e === 'login') {
      return this.dataservice.login(this.loginForm.value).subscribe(
        (data: any) => {
  
          this.loginResponse = data;

          if (this.loginResponse === true) {
          notify("User LoggedIn Successfully", 'success', 3000);
          } else if (this.loginResponse === false) {
            notify("Login Failed", 'error', 3000);
          }
        }
       
      );

      
    }

  }

  getHighScore(){
    return this.dataservice.fetchHighScoreList().subscribe(
      (data: any) => {

        this.HighScoreData = data;
      }
    );
  }

}

export class loginFormFields {
  email: string;
  password: number;
}

