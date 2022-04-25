import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users =
  [
   {
    employeeNumber: 24,
    firstName: 'Amar',
   lastName: "Akhtayar",
    phone: '0687064916',
    email: 'amarekhtyar96@gmail.com',
     img:'https://cdn.stocksnap.io/img-thumbs/960w/portrait-girl_MZSQCD7M6E.jpg'
  },
    {
   employeeNumber: 25,
    firstName: 'Mary',
    lastName: 'Bocko',
    phone: '0687094561',
    email: 'mary@hotmail.com',
    img: 'https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg'
       },
  {
    employeeNumber: 26,
    firstName: 'Sophie',
    lastName: 'hovens',
    phone: '0684324011',
    email: 'Sophie@gmail.com',
img:'https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-2.jpg'         },
    {
    employeeNumber: 27,
    firstName: 'Dennis',
    lastName: 'Bruver',
    phone: '0687099334',
    email: 'DennisBruver@gmail.com',
    img:'https://images.pexels.com/photos/428361/pexels-photo-428361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2  '
    },
  {
    employeeNumber: 28,
    firstName: 'Jan',
    lastName: 'Jacobs',
    phone: '0687445566',
    email: 'Jan21@gmail.com',
    img:'https://images.squarespace-cdn.com/content/v1/5a63f3576957da47039e978d/1522126709056-DBGAZE7VEF5MLMYVM5AN/0484+2.jpg?format=750w'
    },
  {
    employeeNumber: 29,
    firstName: 'Edris',
    lastName: 'Mohamo',
    phone: '0687345211',
    email: 'Edris789@gmail.com',
    img:'https://images.squarespace-cdn.com/content/v1/5a63f3576957da47039e978d/1522126718552-O7AFD65ZL9NVYD80RBE9/1917.jpg?format=750w'
    },
  ];
  constructor() { }

  getUsers(){
    return this.users
  }
  editUser(employeeNumber: number, UpdatedUser:any){
   let user = this.users.find(user=> user.employeeNumber == employeeNumber )
   if(!user) {
     return
   }
   user.email = UpdatedUser.email
   user.firstName = UpdatedUser.firstName
   user.lastName = UpdatedUser.lastName
   user.phone = UpdatedUser.phone

   return user
  }
  getUser(employeeNumber:any){
    let user = this.users.find(user=> user.employeeNumber == employeeNumber )
    if(!user) {
      return
    }


    return user
   }
  deleteUser(employeeNumber:any){
    let user = this.users.find(user=> user.employeeNumber == employeeNumber )
    if(!user) {
      return
    }
   return this.users.splice(this.users.indexOf(user), 1)
  }
  addUser(user:any){
    return this.users.push(user)
  }
}
