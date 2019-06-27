import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  dataUrl = 'http://localhost:8081/list';
  deleteUrl = 'http://localhost:8081/delete/';
  addUrl = 'http://localhost:8081/create/todo';
  constructor(private http: HttpClient) { }
  loaddata(): Observable<any> {
    let basicSecurity = this.createAuthentication();
    let header = new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization' : basicSecurity
    })
    return this.http.get(this.dataUrl);
  }
  deleteData(id:any): Observable<any> {
    return this.http.post(this.deleteUrl+id,null);
  }
  addData(formData){
    console.log('formData', formData)
    debugger
    return this.http.post(this.addUrl,formData);
  }
  createAuthentication(){
    let username = 'abc';
    let password = 'abc';
    let basicAuth = 'Basic '+ window.btoa(username + ':' + password);
    return basicAuth;
  }
}
