import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoUserService {

  constructor() { }

  public infoUser = {}
  public isLogin: boolean =false;

}
