import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Http, ResponseContentType } from '@angular/http';



const _headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=UTF-8',
  locale: 'en'
});


@Injectable({
  providedIn: 'root'
})



export class DataServiceService {

  baseUrl =" http://localhost:8080";

  constructor(
    private httpclient: HttpClient
  
    ) { }


  fetchHighScoreList(): Observable<any> {
    return this.httpclient.get(this.baseUrl + '/user/highscores', {
      headers: _headers
    });
  }

}
