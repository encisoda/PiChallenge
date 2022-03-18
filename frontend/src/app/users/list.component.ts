import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { CocktailsService } from '../_services/cocktails.service'

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;
    cocktailsFull = null;
    cocktails = [];
    buscar: string;

    constructor(
        private cocktailsService: CocktailsService
        ) {}

    ngOnInit() {

    }

    search(){
        this.cocktailsService.GetCocktailsByName((<HTMLInputElement>document.getElementById("id")).value)
        .subscribe(cocktails => this.cocktailsFull = cocktails,
            err => err,
            () => this.cocktails =  this.cocktailsFull.drinks);
    }

}