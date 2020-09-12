import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighScoreComponent } from './high-score/high-score.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';



@NgModule({
  declarations: [HighScoreComponent, LoginFormComponent, FirstScreenComponent],
  imports: [
    CommonModule
  ]
})
export class FirstPageModule { }
