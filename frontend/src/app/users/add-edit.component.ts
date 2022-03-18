import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from '@app/_services/cocktails.service';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {

    id: string;
    cocktailsFull = null;
    cocktail: any;

    constructor(
        private route: ActivatedRoute,
        private cocktailsService: CocktailsService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.cocktailsService.GetCocktailsById(this.route.snapshot.params['id'])
        .subscribe(cocktails => this.cocktailsFull = cocktails,
            err => err,
            () => this.cocktail =  this.cocktailsFull.drinks[0]);
    }

}