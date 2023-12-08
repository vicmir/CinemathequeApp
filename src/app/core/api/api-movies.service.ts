import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
//import { Movie } from './shared/models/movie.model';

import { Movie } from '../../shared/models/movie.model';

@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private readonly apiHost = 'http://localhost:5267';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Movie[]> {
    return this.httpClient.get<any>(`${this.apiHost}/movies`)
      .pipe(
        map(response => (response as any[])
          .map(movie => new Movie(movie.id, movie.name, movie.year)))
      );
  }
}
