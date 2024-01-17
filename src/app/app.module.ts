import {bootstrapApplication, BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {HoverDirective} from "./directives/hover.directive";
import {NgxExtendedPdfViewerModule} from "ngx-extended-pdf-viewer";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    HoverDirective,
    NgxExtendedPdfViewerModule,
    BrowserAnimationsModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
