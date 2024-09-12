import { Component, OnInit } from '@angular/core';
import { DbzServiceService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {

    constructor(private dbzService: DbzServiceService) { }

    get characters(): Character[] {
        return [...this.dbzService.characters];
    }

    onNewCharacter(character: Character): void {
        this.dbzService.addCharacter(character);
    }

    onDeleteCharacter(id:string) : void {
        this.dbzService.deleteCharacterById(id);
    }

}
