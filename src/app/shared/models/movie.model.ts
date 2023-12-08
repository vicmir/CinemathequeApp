import { MovieType } from '../enums/movie-type.enum';

export class Movie {
  id: number;
  name: string;
  type: MovieType;

  constructor(id: number, name: string, type: MovieType) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}
