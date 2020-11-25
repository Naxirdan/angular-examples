import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilesizePipe } from 'src/app/core/pipes/filesize.pipe';
import { SanitizerPipe } from 'src/app/core/pipes/sanitizer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilesizePipe,
    SanitizerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
