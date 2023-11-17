import { Component } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-rc-form',
  templateUrl: './rc-form.component.html',
  styleUrls: ['./rc-form.component.css']
})
export class RcFormComponent {
  title="reactive form title"
  loginForm = new FormGroup({
    username:new FormControl(''),
    password:new FormControl('')
  })
  loginSubmit(){
    console.log(this.loginForm.value);
    
  }
}
