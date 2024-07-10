import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm !: FormGroup

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email :["",[Validators.required ,Validators.email]],
      password :["",[Validators.required ,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],

  })
}
}