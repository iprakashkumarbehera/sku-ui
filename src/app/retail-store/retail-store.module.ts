import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RetailStoreComponent } from './retail-store.component';
import { RetailerStoreRoutingModule } from './retail-store-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    RetailStoreComponent
  ],
  imports: [
    CommonModule,
    RetailerStoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: []
})
export class RetailStoreModule { }
