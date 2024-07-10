import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm !:FormGroup
  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName:["" ,[Validators.required ,Validators.minLength(3)]],
      lastName :["",[Validators.required ,Validators.maxLength(10)]],
      email :["",[Validators.required ,Validators.email]],
      password :["",[Validators.required ,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]

    })

}
}