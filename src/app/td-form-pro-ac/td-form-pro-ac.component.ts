import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { last } from 'rxjs';

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
  firstName: string = '';
  lastName: string = '';
  dob: string = '';
  emailAddress: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  userName: string = '';
  OnFormSubmitted(){
    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.emailAddress = this.form.value.email;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postalcode;
    this.userName = this.form.value.username;
    this.dob = this.form.value.dob;
  }
  defaultCountry = 'india';
  generateUsername(){
    let username = ''
    if(this.firstName.length>=3){
      username += this.firstName.slice(0,3);
    }
    else{
      username += this.firstName
    }
    if(this.lastName.length>=3){
      username += this.lastName.slice(0,3);
    }
    else{
      username += this.lastName
    }
    let birthYear = new Date(this.dob).getFullYear();

    username+=birthYear;

    username=username.toLowerCase();
    console.log(username);
    this.form.value.username=username;
  //   this.form.setValue({
  //     firstname:this.form.value.firstname,
  //     lastname:this.form.value.lastname,
  //     email:this.form.value.email,
  //     dob:this.form.value.dob,
  //     gender:this.form.value.gender,
  //     phonenumber:this.form.value.phonenumber,
  //     username:username,
  //     address:{
  //      city:this.form.value.address.city,
  //      country:this.form.value.address.country,
  //      postalcode:this.form.value.address.postalcode,
  //      region:this.form.value.address.region,
  //      street1:this.form.value.address.street1,
  //      street2:this.form.value.address.street2 ,
  //     }
  //  })
      this.form.form.patchValue({
        username:username,
      })
  }
  
}
