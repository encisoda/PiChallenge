import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  GetCocktailsById(id: string){
    return this.http.get(`${environment.apiUrl}/cocktails/${id}`);
  }

  GetCocktailsByName(name: string){
    return this.http.get(`${environment.apiUrl}/cocktails/name/${name}`);
  }
}
