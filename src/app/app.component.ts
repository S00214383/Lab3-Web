import { Component } from '@angular/core';

import { MovieService } from './movie.service';

//import { Movie } from "../movie.model";
import { Movie } from './movie.model';
import { OmdbApiService } from './service/omdb-api.service';
import { IOMDBResponse } from './omdbresponse';
//import { Movie } from "../movie.model";

//coment to try changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmdbApiService]
})
export class AppComponent {

  movieData!: IOMDBResponse ;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService){  }

  getMovieDetails(movieName:string):boolean{
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log('Director name: ' + this.movieData.Director); 
      },
      
    
      error => this.errorMessage=<any>error
      
    
    );
    return false;
  }

  }

  




