import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './login/login.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { UsersComponent } from './users/users.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewuserComponent,
    UsersComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
