import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


const routes: Routes = [
  {  path: '',
    component:UserComponent
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
