import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  movies: any[];

  fetchMovies() {
   return this.http.get('https://api.tvmaze.com/shows');
  }

  

  fetchMoviesByName(name: string) {
    this.fetchMovies().subscribe(result => {
      this.movies = result.constructor(result);
      console.log('the fetched movie result', this.movies);
      return this.movies.find(movie => movie.name === name);
    });
  }

  fetchEpisodes() {
    return this.http.get('https://api.tvmaze.com/seasons/1/episodes');
  }

}
