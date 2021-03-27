import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cocktail } from "src/app/core/cocktail.model";

@Injectable()
export class CocktailService {


cocktailUrl = 'assets/data.json';

apiUrl ='https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a';

  constructor(private http: HttpClient) { }


getCocktails():Observable<any> {
  return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
}


private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error);
    this.log(`${operation} failed: ${error.message}`);

    return of(result as T);
  };
}

private log(message: string) {
  console.log(message);
}


}