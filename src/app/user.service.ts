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

}
