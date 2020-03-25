import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetailStoreModule } from './retail-store/retail-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RetailStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
