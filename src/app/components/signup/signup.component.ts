import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      address: [""],
      password: ["", [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      experience: ["", [Validators.required]],
      speciality: [""],
      userType: ["", [Validators.required]]
    });

    // Initially set validation based on default userType (if any)
    this.setSpecialityValidation(this.signupForm.controls['userType'].value);
  }

  onUserTypeChange(event: any): void {
    const userType = event.target.value;
    this.setSpecialityValidation(userType);
  }

  setSpecialityValidation(userType: string): void {
    const specialityControl = this.signupForm.get('speciality');

    if (userType === 'chef') {
      specialityControl?.setValidators([Validators.required]);
    } else {
      specialityControl?.clearValidators();
    }

    specialityControl?.updateValueAndValidity();
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      // Implement your form submission logic here
    } else {
      console.log('Form is invalid');
    }
  }
}
