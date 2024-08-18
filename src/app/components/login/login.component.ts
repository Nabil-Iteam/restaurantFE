import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup

  constructor(private fb : FormBuilder , 
    private athService : AuthService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email :["",[Validators.required ,Validators.email]],
      password :["",[Validators.required ,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],

  })
}
login(){
//  this.athService.login(this.loginForm.value).subscribe(
//   (res)=>{
//     console.log("this is res from BE" , res);
//     this.router.navigate(['home'])
    
//   }
//  )
}
}