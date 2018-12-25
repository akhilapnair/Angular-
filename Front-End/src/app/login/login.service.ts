import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  AuthenticateLogin(data: any) {
    const url = 'localhost:8080/login';
    const ParseHeaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    this.http.post(url, data, ParseHeaders).subscribe(res => {
      console.log(res);
    });
  }
}
