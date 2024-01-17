import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate('0.5s ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {

  files: any = [];
  src: string = '';

  showImg = false;

  onInputChange(event: any) {
    this.files = event.target?.files;
  }

  onImageSrcChange(src: string){
    this.src = src;
    this.showImg = !this.showImg;
  }
}
