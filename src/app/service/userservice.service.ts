import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get('http://localhost:8080');
  }

  addUser(user: any): Observable<any> {
    return this.httpClient.post('http://localhost:8080/add', user);
  }
}
