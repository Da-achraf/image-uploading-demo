import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HoverDirective} from "./directives/hover.directive";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HoverDirective,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
