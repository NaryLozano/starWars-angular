import { Ship } from './ship';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ShipsService {

  public starwarsUrl = 'https://swapi.dev/api/starships'  
  //ships$ = new Subject<Ship[]>()

  constructor( 
    private http: HttpClient
    ) { }

    handleError (operation = 'operation', result?: any) {
      return (error: any): Observable<any> => {
        console.log(error);
  
        console.log(`${operation} failed: ${error.message}`);
  
        return of(result);
      };
    }  

    public getShips(){
      return this.http.get(this.starwarsUrl);
    }

  
    public getStarshipId(id: string){
      const url=`${this.starwarsUrl}/${id}`;
      return this.http.get(url);
    }
}
