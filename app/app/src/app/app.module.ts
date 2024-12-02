import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipe/pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoSpace } from './customPipe/noSpace Pip';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { DataService } from './services/data.service';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { YourcomponentComponent } from './yourcomponent/yourcomponent.component';
@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    NoSpace,
    ProductsComponent,
    ProductComponent,
    MycomponentComponent,
    YourcomponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
