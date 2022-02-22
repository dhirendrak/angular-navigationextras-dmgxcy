import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {ProductDetailsComponent} from './products/product-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule,AppRoutingModule ],
  declarations: [ AppComponent, ProductDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
