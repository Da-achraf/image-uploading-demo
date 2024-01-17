import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  file: any;
  @Output()
  imageSrc = new EventEmitter<string>();

  @Input() set appHover(value: any) {
    this.file = value;
  }

  @HostListener('mouseenter') onMouseEnter() {
    const reader = new FileReader();
    reader.readAsDataURL(this.file);

    reader.onload = (event) => {
      this.imageSrc.emit(event.target?.result as string);
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.imageSrc.emit('');
  }

}
