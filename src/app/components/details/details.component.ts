import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/core/cocktail.model';
import { CocktailService } from 'src/app/core/cocktail.service';
import * as dt from '../../../assets/data.json'
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
 cocktail: Cocktail= dt[0];
  cocktailId :any ;
  //cocktail:any;
  constructor(private readonly cocktailService: CocktailService,private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cocktailId = this.route.snapshot.paramMap.get("id")
    this.cocktailService.getCocktails()
    .subscribe((data: any) => {
      this.cocktail = data.drinks.find(cnty=>cnty.id === this. cocktailId  );
    }); 
  }

  onBack(){
    this.location.back()
  }

}
