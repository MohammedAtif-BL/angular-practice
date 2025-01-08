import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) { }

  getEmployees() {
    return this.httpClient.get('http://localhost:8080');
  }

  addEmployee(data:any){
    return this.httpClient.post('http://localhost:8080/add', data);
  }
}
