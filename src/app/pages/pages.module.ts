import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from '../components/form/button/button.component';
import { InputComponent } from '../components/form/input/input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        InputComponent,
        ButtonComponent
    ],
    exports: [
        InputComponent,
        ButtonComponent
    ],
    imports: [
        FontAwesomeModule,
        FormsModule,
        CommonModule
    ]
})

export class PagesModule {}

