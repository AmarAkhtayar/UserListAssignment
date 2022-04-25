import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: "",
    component: UsersComponent,
  },
   {
   path: ":employeeNumber/editeUser",
   component: EditUserComponent,
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

