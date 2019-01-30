import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
    selector: 'homepage',
    templateUrl: 'home.component.html',
    styleUrls: [ 'home.component.scss' ]
})

export class HomeComponent {

    constructor(private localStorage: LocalStorageService, private router: Router) {
        if (!this.localStorage.getItem('user_email')) {
            this.router.navigateByUrl('/login');
        }
    }

}
