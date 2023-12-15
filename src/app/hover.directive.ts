import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]',
  standalone: true
})
export class HoverDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { 
    console.log(this.element);
  }

  @Input() hinvHover: string = "red";
  color2: string = "white";

  ngOnInit() : void {
    console.log("hover directive");
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(
      this.element.nativeElement,'backgroundColor', this.hinvHover
    );
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,'backgroundColor', this.color2
    );
  }

}
