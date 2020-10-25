import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(
    private element: ElementRef,
  ) { }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    const tooltilElement = this.element.nativeElement.querySelector('app-tooltip');
    tooltilElement.style.display = 'block';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    const tooltilElement = this.element.nativeElement.querySelector('app-tooltip');
    tooltilElement.style.display = 'none';
  }

}
