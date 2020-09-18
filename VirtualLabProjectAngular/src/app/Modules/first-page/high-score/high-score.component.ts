import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { DataServiceService } from '../../../AppStore/data-service.service'

@Component({
  selector: 'app-high-score',
  templateUrl: './high-score.component.html',
  styleUrls: ['./high-score.component.css']
})
export class HighScoreComponent implements OnInit {

  constructor(
    private dataservice: DataServiceService
  ) { }

  ngOnInit(): void {
    this.getHighScore();
  }

  getHighScore(){
    return this.dataservice.fetchHighScoreList().subscribe(
      (data: any) => {

      }
    );
  }

   
    

}
