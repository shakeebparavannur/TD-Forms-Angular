import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form-pro-ac',
  templateUrl: './td-form-pro-ac.component.html',
  styleUrls: ['./td-form-pro-ac.component.css']
})
export class TdFormProAcComponent {
  @ViewChild('regForm') form:NgForm

  OnFormSubmitted(){
    console.log(this.form);
    console.log(this.form.value);
    
    
  }
}
