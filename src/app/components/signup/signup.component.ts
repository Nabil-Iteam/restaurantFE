import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;
  displayFields = false;
  roleNames: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      address: [""],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      experience: [""],  
      speciality: [""], 
      roleNames: ["client", [Validators.required]]
    });

    this.signupForm.get('roleNames')?.valueChanges.subscribe((value) => {
      this.setFieldValidations(value);
    });

    // Initially set validation based on default roleNames (if any)
    this.setFieldValidations(this.signupForm.controls['roleNames'].value);
  }

  setFieldValidations(roleNames: string): void {
    const experienceControl = this.signupForm.get('experience');
    const specialityControl = this.signupForm.get('speciality');

    if (roleNames === 'chef') {
      experienceControl?.setValidators([Validators.required]);
      specialityControl?.setValidators([Validators.required]);
      this.displayFields = true;
    } else {
      experienceControl?.clearValidators();
      specialityControl?.clearValidators();
      this.displayFields = false;
    }

    experienceControl?.updateValueAndValidity();
    specialityControl?.updateValueAndValidity();
  }

  signup(): void {
    if (this.signupForm.invalid) {
      return;
    }
    console.log("the res from BE is", this.signupForm.value);
    const formValues = this.signupForm.value;

    // Set roleNames dynamically based on roleNames
    if (formValues.roleNames === 'chef') {
      formValues.roleNames = ['chef'];
    } else if (formValues.roleNames === 'client') {
      formValues.roleNames = ['client'];
    } else {
      formValues.roleNames = [];
    }

    this.authService.register(formValues).subscribe(
      (res) => {
        console.log("the res from BE is", res);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Error during signup:', error);
      }
    );
  }
}
