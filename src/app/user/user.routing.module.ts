import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserRegisterComponent } from './register/user-register.component';


const routes: Routes = [
  {  path: '',
    component:UserComponent
  },
  {
    path: 'add',
    component:UserRegisterComponent
  }
];

@NgModule({
  declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class UserRoutingModule { }
