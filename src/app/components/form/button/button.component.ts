import { Component, Input } from '@angular/core';

@Component({
    selector: 'form-button',
    templateUrl: 'button.component.html',
    styleUrls: [ '../form.component.scss' ]
})

export class ButtonComponent {
    @Input() value: string;
    @Input() isFormValid: boolean;
}
