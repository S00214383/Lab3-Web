import { Component } from '@angular/core';

import { MovieService } from './movie.service';

//import { Movie } from "../movie.model";
import { Movie } from './movie.model';
//import { Movie } from "../movie.model";

//coment to try changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mySelectedMovie: Movie | undefined ;

  setSelectedMovie(movie:Movie){
    this.mySelectedMovie = movie;
  }

 

  }

  




