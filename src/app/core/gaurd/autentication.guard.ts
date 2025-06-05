import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { InfoUserService } from '../Services/InfoUsers/info-user.service';


export const autenticationGuard: CanActivateFn = (route, state)  =>  {
 const isAuthen =inject(InfoUserService)
 const router = inject(Router)
 if(isAuthen.isLogin){

  return true
 }else {
  router.navigate(['setting'])
  return false;

 }
};
