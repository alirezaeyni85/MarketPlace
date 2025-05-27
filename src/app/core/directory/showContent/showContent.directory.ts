import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({selector:'[showBtnDire]'})
export class showBtnDire{
    
    @HostListener('click') click(){

    }
}