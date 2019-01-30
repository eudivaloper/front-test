import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { HeaderComponent } from '../../components/header/header.component';
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from '../../components/footer/footer.component';

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        CardComponent,
        FooterComponent
    ],
    exports: [
        HomeComponent,
        HeaderComponent,
        CardComponent,
        FooterComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HomeModule {}
