import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongApiService {
  private apiURL = "http://localhost:8080/music/songs"

  constructor(private http: HttpClient) {}

  getSongs(): Observable<any> {
    return this.http.get(this.apiURL);
  }

}
