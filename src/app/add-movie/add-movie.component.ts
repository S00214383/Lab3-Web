import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})



export class AddMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  addNewMovie(movietitle:HTMLInputElement, moviedirector:HTMLInputElement, movieyear:HTMLInputElement):boolean{
    this.movieService.addMovies(movietitle.value, moviedirector.value, movieyear.value);
    return false;
  }
  


 
  
  

}
