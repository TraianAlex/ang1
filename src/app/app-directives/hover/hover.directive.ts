import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appHover]',
    standalone: false
})
export class HoverDirective implements OnInit {
  @Input() appHover: string = 'red';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2 // @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
    // this.document.getElementById
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appHover);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'white');
  }
}
