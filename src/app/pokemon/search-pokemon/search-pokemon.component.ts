import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit{
  // {..."a".."ab"..."abz"..."abc"...}
  searchTerms = new Subject<string>();
  // {...pokemonList(a)...pokemonList(ab)......}
  pokemons$: Observable<Pokemon[]>;
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    
  }

  search(term: string) {
    this.searchTerms.next(term); // comme push() mais avec une flux de données
  }

  goToDetail(pokemon: Pokemon) {
    const link = ['/pokemons', pokemon.id];
    this.router.navigate(link);
  }
}
// 7.54