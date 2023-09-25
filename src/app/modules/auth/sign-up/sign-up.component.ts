import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { matchPasswords } from '../validators/passwordValidator';
import { AuthService } from 'src/app/services/auth.service';
import { RegistrationBody } from 'src/app/common/auth/registration-body';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService: LocalStorageService,
    private router: Router
  ) {}

  token: string = '';

  signUpForm = this.fb.group(
    {
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: matchPasswords,
    }
  );

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.signUpForm.value);

    if (this.signUpForm.invalid) {
      this.signUpForm.markAsDirty();
      return;
    }
    let requestEmail: string | null = this.signUpForm!.controls['email'].value;
    let requestPassword: string | null =
      this.signUpForm!.controls['password'].value;
    let requestFirstName: string | null =
      this.signUpForm!.controls['firstName'].value;
    let requestLastName: string | null =
      this.signUpForm!.controls['lastName'].value;

    if (
      requestEmail &&
      requestPassword &&
      requestFirstName &&
      requestLastName
    ) {
      const body: RegistrationBody = new RegistrationBody(
        requestFirstName,
        requestLastName,
        requestEmail,
        requestPassword
      );

      this.authService.register(body).subscribe((data) => {
        this.storageService.persistToken(data.token, new Date(data.expiration));
      });
      this.router.navigateByUrl('/main');
    }
  }
}
