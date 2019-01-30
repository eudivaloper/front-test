import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
    selector: 'registerpage',
    templateUrl: 'register.component.html',
    styleUrls: [ '../pages.component.scss', '../../components/form/form.component.scss' ]
})

export class RegisterComponent {

    constructor(private localStorage: LocalStorageService, private router: Router) {
        if (this.localStorage.getItem('user_email')) {
            this.router.navigateByUrl('/');
        }
    }

    onSubmit(registerForm) {
        const email = registerForm.form.value.email;
        this.localStorage.setItem('user_email', email);
        this.router.navigateByUrl('/');
    }

}
