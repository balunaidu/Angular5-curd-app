import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({ 
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
 userData  : any = {};
  constructor(
 	private userServ: UserService

  	        ) { }

  ngOnInit() {

  }

  createUser(user) {
  const {value} = user.form;
    console.log(value)
    this.userServ.createUser(value)
          .then(data => {
    	console.log(data)
    });
  }
}
