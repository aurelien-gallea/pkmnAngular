import { Component, OnInit } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";

@Component({
    selector: "app-root",
    templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
    title = "pkmnAngular";

    pkmnList: Pokemon[] = POKEMONS;

    ngOnInit(): void {
        console.table(this.pkmnList);
        this.selectPkmn(this.pkmnList[0]);
    }

    selectPkmn(pokemon: Pokemon) {
        console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
    }
}
