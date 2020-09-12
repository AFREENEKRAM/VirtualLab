import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentDate;
  currentTime;
  constructor() { }

  ngOnInit(): void {

    this.currentDate = new Date().getDate() + '-' +new Date().getMonth() + '-' + new Date().getFullYear() ;

    console.log(
      this.currentDate
    )
  }

}
