import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn!: boolean;
  user!: string;
  id = new FormControl('');
  invalid = false;
  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.setUp();
    this.authService
      .getIsLoggedIn()
      .subscribe((data) => (this.isLoggedIn = data));
    this.authService.getUsername().subscribe((data) => (this.user = data));
  }

  findById() {
    if (!this.id.value) {
      return;
    }
    let value: string = this.id?.value;
    let newId = Number.parseInt(value);

    if (newId) {
      this.invalid = false;
      this.router.navigateByUrl('/main/answer-survey/' + newId);
      this.id.reset();
    } else {
      this.invalid = true;
    }
    console.log(newId);
  }

  signOut() {
    this.authService.logOut();
  }
}
