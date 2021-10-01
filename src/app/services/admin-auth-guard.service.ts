import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private router : Router , private authservice : AuthService) { }

  canActivate(){
    if(this.authservice.getCurrentUser().admin){
      return true;
    }else{
      this.router.navigate(['no-access'])
      return false;
    }
  }
}