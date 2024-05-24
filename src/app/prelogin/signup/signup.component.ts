import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['test', [Validators.required, Validators.minLength(3)]],
      email: ['test@best.com', [Validators.required, Validators.email]],
      password: ['Abc@12345', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      confirmpassword: ['Abc@12345', [Validators.required, this.matchPassword('password', 'confirmpassword')]]
    });
  }
  matchPassword(source: string, target: string): ValidatorFn {
    return (abstractControl: AbstractControl) => {
      const control = abstractControl.parent?.get(source);
      const mstchingControl = abstractControl.parent?.get(target);
      if (control?.value !== mstchingControl?.value) {
        return { match_error: 'Password doesn\'t match' }
      }
      return null;
    }
  }
  onSubmit(){
    console.log(this.signupForm.value);
    
  }
}
