import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { PagesModule } from '../pages.module';

@NgModule({
    declarations: [
        RegisterComponent,
    ],
    exports: [
        RegisterComponent,
    ],
    imports: [
        PagesModule,
        FormsModule
    ]
})

export class RegisterModule {}
