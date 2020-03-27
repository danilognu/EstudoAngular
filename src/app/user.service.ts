import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser(): User{

    let user = new User();
    user.name = "Danilo";
    user.email = "danilo.souza@teste.com.br";

    return user;
  }

  public listUser():User[]
  {
    return [
      {
        name: "Danilo",
        email:"danilo.teste@teste.com.br"
      },
      {
        name: "Leticia",
        email:"leticia@teste.com.br"
      },
      {
        name: "Rafael",
        email:"rafael@teste.com.br"
      }
    ]
  }

}
