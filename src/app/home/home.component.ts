import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user:User;
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
