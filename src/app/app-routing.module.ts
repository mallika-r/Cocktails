import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cocktail',
    loadChildren: () => import('./components/cocktail.module').then(m => m.CocktailModule)
  },
  { path: '', redirectTo: '/cocktail', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
