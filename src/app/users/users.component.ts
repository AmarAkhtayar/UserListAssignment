import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/userService';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: any;
  constructor(private userService : UserService,
   private router: Router) { }

  ngOnInit() {
   this.users = this.userService.getUsers();
   console.log("users is ", this.users);


  }
  openUserInfo(employeeNumber:any) {
   this.router.navigate([employeeNumber,'editeUser'])
 }
 deleteUser(employeeNumber:any){
  console.log("number is ", employeeNumber);
  this.userService.deleteUser(employeeNumber);

 }

}
