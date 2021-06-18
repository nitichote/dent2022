import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthService } from '../auth.service';
 
// กำหนด route path ให้กับ login component
const loginRoutes: Routes = [
  {
    path:'login',
    component:LoginComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
  providers:[ // กำนหด providers
    AuthService // เราจะมีการใช้งาน AuthService 
  ]
})
export class LoginRoutingModule { }
