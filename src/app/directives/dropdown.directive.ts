import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

 @HostBinding('class.show') isShow = false;

  constructor() { }

  @HostListener('click') toggleShow(){
    this.isShow = !this.isShow;
  }

}

