import { Component, OnInit } from '@angular/core';
import { User } from '../../user';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['../user.component.css']
})
export class UserRegisterComponent implements OnInit {

   public user:User = new User();
   constructor() { }

  ngOnInit() {
  }

  public Save(){
    alert("Salvo");
  }

}
