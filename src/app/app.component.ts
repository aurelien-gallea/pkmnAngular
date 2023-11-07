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

    pkmnSelected : Pokemon | undefined;

    ngOnInit(): void {
        console.table(this.pkmnList);
        // this.selectPkmn(this.pkmnList[0]);
    }

    selectPkmn(pkmnId : string) {
        const pokemon : Pokemon|undefined = this.pkmnList.find(pkmn => pkmn.id == +pkmnId);

        if (pokemon) {
            console.log("vous avez demandé : " + pokemon.name);
            this.pkmnSelected = pokemon;
        }
        else {
            console.log("pokemon introuvable");
            this.pkmnSelected = pokemon; 
        }

    }
}
