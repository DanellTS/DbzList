import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { HeroeComponent } from './components/hero/heroe.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        HeroeComponent,
        ListComponent
    ],
    exports: [
        HeroeComponent,
        ListComponent
    ]
})
export class HeroesModule {}