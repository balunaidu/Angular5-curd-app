import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({ 
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 userData: any;
 constructor(
   private userServ: UserService
   ) { }

  ngOnInit() {
    this.userServ.getUser()
      .then(data => {
      console.log(data)
  this.userData = data;
    });
}
}