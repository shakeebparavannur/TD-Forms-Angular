import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TdFormProAcComponent } from './td-form-pro-ac/td-form-pro-ac.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormProAcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
