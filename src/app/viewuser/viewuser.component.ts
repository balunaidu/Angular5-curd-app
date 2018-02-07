import { Component, OnInit } from '@angular/core'; 
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({ 
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
 userData  : any = {};
  constructor(
   private userServ: UserService,
  private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userServ.getUserById(id)
      .then(data => {
      console.log(data)
  this.userData = data;
    });
  }
   
   updateUser(user){
     this.userServ.updateUser(user)
      .then(data => {
      console.log(data)
      window.alert('success')
    });
   }
}
