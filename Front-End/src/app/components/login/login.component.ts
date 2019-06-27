import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;

  constructor(private fb:FormBuilder, public route:Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      uname: [Validators],
      password:[Validators]
    })
  }
  login(value){
console.log(value)
    if(value.uname == 'admin' && value.password === 'admin') {
      this.route.navigateByUrl('list')
    }

  }

}
