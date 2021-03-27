import { Component, OnInit } from '@angular/core';
import { Cocktail } from 'src/app/core/cocktail.model';
import { CocktailService } from "src/app/core/cocktail.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  list: Cocktail[] = [];
  srchList: Cocktail[] = [];
  constructor(private readonly cocktailService: CocktailService) {
    cocktailService.getCocktails()
      .subscribe((data: any) => {
        console.log(data);
        this.list = data.drinks.sort((a, b) => (a.strAlcoholic > b.strAlcoholic) ? 1 : -1);
        this.srchList = [...this.list];
      });
  }

  change(event){
    const obj = event.target.value;
    if(obj==="Name"){
    this.srchList =[...this.srchList.sort((a, b) => (a.strDrink > b.strDrink) ? 1 : -1)];
  }
else  if(obj==="Cocktail"){
  this.srchList =[...this.srchList.sort((a, b) => (a.strAlcoholic > b.strAlcoholic) ? 1 : -1)];
  }
else  if(obj==="Category"){
  this.srchList =[...this.srchList.sort((a, b) => (a.strAlcoholic > b.strAlcoholic) ? 1 : -1)];
}
else  if(obj==="Ingredient"){
  this.srchList =[...this.srchList.sort((a, b) => (a.strIngredient1 > b.strIngredient1) ? 1 : -1)];
}
}

  searchCocktail(event) {
    const srch = event.target.value;
    if(srch){
    this.srchList =[... this.list.filter(cktl => 
      cktl.strDrink.toLowerCase().includes(srch.toLowerCase())
    )];
  }
  else{
    this.srchList = [...this.list]; 
  }
  
  }

  ngOnInit() {
  }

}
