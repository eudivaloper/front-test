import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
    selector: 'app-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: [ 'navbar.component.scss' ]
})

export class NavbarComponent {

    constructor(private localStorage: LocalStorageService, private router: Router) { }

    isUserLogged = () => !!this.localStorage.getItem('user_email');

    onLogout() {
        this.localStorage.removeItem('user_email');
        this.router.navigateByUrl('/login');
    }

}
