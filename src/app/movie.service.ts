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


  fetchMoviesByName(id) {
    return this.http.get('https://api.tvmaze.com/shows/' + id);
  }

  fetchEpisodes() {
    return this.http.get('https://api.tvmaze.com/seasons/1/episodes');
  }

}
