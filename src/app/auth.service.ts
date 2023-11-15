import { of, tap } from 'rxjs';
import { Injectable, Pipe } from '@angular/core';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn : boolean = false;
  redirectUrl : string;

  login(name: string, password:string): Observable<boolean>{
    const isLoggedIn = (name === 'pikachu' && password === 'pikachu')
    return of(isLoggedIn).pipe(
      delay(1000),
      tap(isLoggedIn => this.isLoggedIn = isLoggedIn)
      );
  }

  logout(){
    this.isLoggedIn = false;

  }
}
