import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-td-form-pro-ac',
  templateUrl: './td-form-pro-ac.component.html',
  styleUrls: ['./td-form-pro-ac.component.css']
})
export class TdFormProAcComponent {
  @ViewChild('regForm') form:NgForm

  genders = [
    {id:'1',value:'male', display:'male'},
    {id:'2',value:'female', display:'female'},
    {id:'3',value:'other', display:'other'},
  ]
  firstName:string='';
  lastName:string='';
  emailAddress:string='';
  OnFormSubmitted(){
    console.log(this.form);
    console.log(this.form.value);
    console.log(this.form.value);
  }
}
