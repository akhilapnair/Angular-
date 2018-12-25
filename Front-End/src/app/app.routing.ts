import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';



const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
    //   { path: '', component: AppLayoutComponent,
         
    //   },
      {path:'login',component: LoginComponent},
      {path:'home',component: HomeComponent}
];
@NgModule({
  imports: [
     RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }