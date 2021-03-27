import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { CocktailRoutingModule } from './Cocktail-routing.module';



@NgModule({
  declarations: [ListComponent,
    DetailsComponent ],
  imports: [
    CommonModule,
    CocktailRoutingModule
  ]
})
export class CocktailModule { }
