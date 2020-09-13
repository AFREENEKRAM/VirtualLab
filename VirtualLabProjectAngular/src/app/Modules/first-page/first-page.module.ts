import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighScoreComponent } from './high-score/high-score.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FirstScreenComponent } from './first-screen/first-screen.component';
import { DxDataGridModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HighScoreComponent, LoginFormComponent, FirstScreenComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FirstPageModule { }
