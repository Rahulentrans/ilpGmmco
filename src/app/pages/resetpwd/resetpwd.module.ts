import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetpwdRoutingModule } from './resetpwd-routing.module';
import { ResetpwdComponent } from './resetpwd.component';


@NgModule({
  declarations: [
    ResetpwdComponent
  ],
  imports: [
    CommonModule,
    ResetpwdRoutingModule
  ]
})
export class ResetpwdModule { }
