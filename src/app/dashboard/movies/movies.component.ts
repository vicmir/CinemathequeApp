import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/api/api-movies.service';
import { Movie } from '../../shared/models/movie.model';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MovieService) {
  }

  ngOnInit() {
    this.moviesService.getAll()
      .subscribe(movies => {
        this.movies = movies;
      });
  }
}
