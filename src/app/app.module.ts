import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TdFormProAcComponent } from './td-form-pro-ac/td-form-pro-ac.component';
import { RcFormComponent } from './rc-form/rc-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TdFormProAcComponent,
    RcFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
