import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './common/modal/modal.component';
import { ModalBindedComponent } from './common/modal-binded/modal-binded.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    ModalBindedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
