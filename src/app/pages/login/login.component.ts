import { Component } from '@angular/core';
import { LocalStorageService } from '../../services/localStorage.service';
import { Router } from '@angular/router';

@Component({
    selector: 'loginpage',
    templateUrl: 'login.component.html',
    styleUrls: [ '../pages.component.scss', '../../components/form/form.component.scss' ]
})

export class LoginComponent {

    constructor(private localStorage: LocalStorageService, private router: Router) {
        if (this.localStorage.getItem('user_email')) {
            this.router.navigateByUrl('/');
        }
    }

    onSubmit(loginForm) {
        const email = loginForm.form.value.email;
        this.localStorage.setItem('user_email', email);
        this.router.navigateByUrl('/');
    }

}
