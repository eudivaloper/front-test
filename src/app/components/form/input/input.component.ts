import { Component, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'form-input',
    templateUrl: 'input.component.html',
    styleUrls: [ '../form.component.scss' ],
    viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})

export class InputComponent {
    @Input() type: string;
    @Input() placeholder: string;
    @Input() id: string;
    @Input() length: number;
    @Input() required: boolean;
    @Input() isPassword: boolean;
    @Input() isNumeric: boolean;
    faEye = faEye;

    onKeyDown = event => {
        if (this.isNumeric && event.key.match(/^[A-Z]$/i) || event.target.value.length >= this.length && event.keyCode !== 8) {
            event.preventDefault();
        }
    }

    toggleInputPassword() {
        if (this.type === 'password') this.type = 'text';
        else this.type = 'password';
    }

}
