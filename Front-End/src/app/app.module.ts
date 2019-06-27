
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatDialogModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatCardModule,
  MatListModule,
  MatRadioModule,
  MatIconModule,
  MatMenu,
  MatMenuModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DialogComponent } from './components/task-list/dialog/dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpInterceptorAuthService } from './components/security/http-interceptor-auth.service';
import { LoginComponent } from './components/login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    DialogComponent,
    LoginComponent
  ],
  imports: [
    FormsModule ,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCheckboxModule,
   MatCardModule,
   MatFormFieldModule,
   MatInputModule,
   MatListModule,
   MatRadioModule,
  MatMenuModule,
ReactiveFormsModule,
  BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS,useClass: HttpInterceptorAuthService, multi:true}],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
