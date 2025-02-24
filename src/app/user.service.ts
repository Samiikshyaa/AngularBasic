import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users =[
    {
      id:1,
      name:"Smaikshya"
    },
    {
      id:2,
      name:"Utsav"
    },
    {
      id:3,
      name:"pattu"
    }
  ]

  getUsers(){
    return this.users;
  }
  getSingleUser(id: number){
    const user= this.users.filter(user => user.id === id)
    if (user.length>0){
      return user[0]
    }
    return{};
  }
}
