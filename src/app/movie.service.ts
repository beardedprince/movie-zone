import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  movies: any[];

  fetchMovies() {
   return this.http.get('http://api.tvmaze.com/shows');
  }

  // fetchMoviesById(name: string) {
  //   return this.http.get('http://api.tvmaze.com/shows').toPromise().then(res => {
  //     console.log('res', res);
  //   });

  fetchMoviesByName(name: string) {
    this.fetchMovies().subscribe(result => {
      this.movies = result.constructor(result);
      console.log('the fetched movie result', this.movies);
      return this.movies.find(movie => movie.name === name);
    });
  }

  fetchEpisodes() {
    return this.http.get('http://api.tvmaze.com/seasons/1/episodes');
  }

}
