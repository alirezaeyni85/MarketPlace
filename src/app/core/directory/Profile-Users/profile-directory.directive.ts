import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appProfileDirectory]'
})
export class ProfileDirectoryDirective {

  constructor() { }
  @HostBinding('style.background') bg: string  | undefined;
  @HostListener('click') click(){
    console.log("Hellow")
  this.bg = 'black'
  }



}
