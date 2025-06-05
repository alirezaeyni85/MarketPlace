import { Directive, Host, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appProfileDirectory]'
})
export class ProfileDirectoryDirective {
  public isClick:boolean=false;
  constructor() { }
  @HostBinding('style.background') bg: string  | undefined;
  @HostBinding('style.display') display:string | undefined;

  @HostListener('click') click(){
      console.log("false")
  this.bg = 'black';
  // this.display ='none'

    
  }



}
