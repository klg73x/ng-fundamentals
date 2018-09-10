import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styles: [
        `      `
    ]
})
export class LoginComponent {
    userName;
    password;
    constructor(private authService: AuthService, private router: Router) {}
    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }
    cancel() {
        this.router.navigate(['events']);
    }
}
