import { Directive, HostBinding, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDepartmentList]'
})
export class DepartmentListDirective {

  @HostBinding('style.backgroundColor') background:string="grey";
  constructor(private el:ElementRef) { }
  // @HostListener('mouseenter') changeColor(){
  //   this.background = 'white';  
  // }
  @HostListener('mouseleave') reverseColor(){
    this.background = 'grey';
  }
  @HostListener('mouseover') rotate(){
    // this.el.nativeElement.style.transform
    this.background = 'white';  
  }
  
}
