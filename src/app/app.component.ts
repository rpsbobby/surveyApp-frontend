import { Component } from '@angular/core';
import { AuthenticationBody } from './common/auth/authentication-body';
import { RegistrationBody } from './common/auth/registration-body';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-frontend';
  token!: string;
  constructor(private service: AuthService, private router: Router) {}

  ngOnInit() {
    console.log('created');
    if (this.service.getToken() != null) {
      this.router.navigateByUrl('/main');
    } else {
      this.router.navigateByUrl('/auth');
    }
    // this.service
    //   .register(new RegistrationBody('mark', 'twain', 'mark@test.com', '1234'))
    //   .subscribe((data) => {
    //     this.token = data.token;
    //     this.service.persistToken(this.token);
    //     console.log(this.token);
    //   });
    //authenticate
    // this.service
    //   .authenticate(new AuthenticationBody('mark@test.com', '1234'))
    //   .subscribe((data) => {
    //     this.token = data.token;
    //   });
    // this.saveData(this.token);
  }

  ngOnDestroy() {
    localStorage.removeItem('token');
    this.service.deleteToken();
  }
}
