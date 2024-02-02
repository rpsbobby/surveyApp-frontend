import { Component } from '@angular/core';
import { AuthenticationBody } from './common/auth/authentication-body';
import { RegistrationBody } from './common/auth/registration-body';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { LocalStorageService } from './services/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-frontend';
  token!: null | string;
  expiration!: null | string;

  constructor(
    private authService: AuthService,
    private storageService: LocalStorageService,
    private router: Router
  ) {}

  // ngOnInit() {
  //   if (
  //     this.storageService.getToken() != null &&
  //     this.storageService.isExpirationDateValid()
  //   ) {
  //     this.router.navigateByUrl('/main');
  //   } else {
  //     this.router.navigateByUrl('/auth');
  //   }
  // }

  ngOnInit() {
    // this.router.navigateByUrl('/main');
  }

  // ngOnDestroy() {
  //   this.storageService.removeDetails();
  // }
}
