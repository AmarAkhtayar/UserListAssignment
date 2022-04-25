import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './service/userService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'UserListAssignment';

   users: any;
   constructor(private userService : UserService,
    private router: Router) { }

   ngOnInit() {
    this.users = this.userService.getUsers();
    console.log("users is ", this.users);


   }
   openInVoiceDetails() {
    this.router.navigate(['editeUser'])
  }


}
