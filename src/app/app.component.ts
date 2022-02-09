import { Component } from '@angular/core';

import { MovieService } from './movie.service';

//coment to try changes

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'movie-list';
  movies=[] as any;

  constructor (private moviesService: MovieService) {}

  ngOnInit(){
    this.movies = this.moviesService.getMovies();
    console.log(this.movies);

  }

  
}



