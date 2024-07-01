import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginbgComponent } from './loginbg/loginbg.component';



@NgModule({
  declarations: [
    LoginbgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LoginbgComponent]
})
export class SharedModule { }
