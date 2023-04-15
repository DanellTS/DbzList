import { Component } from '@angular/core';


@Component({
    selector: 'app-heroes-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    name: string = 'IronMan';
    age: number = 45;
    
    get capitalizedName(): string {
        return this.name.toUpperCase();
    }

    getHeroDescription(): string {
        return `${ this.name } - ${ this.age }`
    }

    changeHero(): void {
        this.name = 'SpiderMan';
    }

    changeAge(): void {
        this.age = 35;
    }

    resetForm(): void{
        this.name = 'IronMan';
        this.age = 25;
    }
}