import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetpwdRoutingModule } from './forgetpwd-routing.module';
import { ForgetpwdComponent } from './forgetpwd.component';


@NgModule({
  declarations: [
    ForgetpwdComponent
  ],
  imports: [
    CommonModule,
    ForgetpwdRoutingModule
  ]
})
export class ForgetpwdModule { }
