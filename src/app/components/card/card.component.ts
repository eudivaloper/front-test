import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: 'card.component.html',
    styleUrls: [ 'card.component.scss' ]
})

export class CardComponent {
    @Input() cardType: string;

    getClassByCardType() {
        const classes = {
            main: 'card--main',
            left: 'card--left',
            right: 'card--right'
        }
        return classes[this.cardType];
    }
}
