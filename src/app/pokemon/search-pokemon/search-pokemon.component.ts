import { PokemonService } from './../pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { Observable, Subject, debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: [
  ]
})
export class SearchPokemonComponent implements OnInit{
  searchTerms = new Subject<string>();
  // {...pokemonList(a)...pokemonList(ab)......}
  pokemons$: Observable<Pokemon[]>;
  
  constructor(
    private router: Router,
    private pokemonService: PokemonService) {}
  
  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
      // {..."a"."ab"...."abz"."ab"...."abc"....}
      debounceTime(300),
      // {..."ab"...."ab"...."abc"....}
      distinctUntilChanged(),
      // {..."ab"........"abc"....}
      switchMap((term) => this.pokemonService.searchPokemonList(term))
      // concatMap / mergeMap / switchMap
      // {...pokemonList(ab)....pokemonList(abc)....}
    )
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