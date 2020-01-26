import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  movie: any[];

  fetchMovies() {
   return this.http.get('http://api.tvmaze.com/shows');
  }

  fetchMoviesById(id: number) {
    this.fetchMovies().subscribe(result => {
      console.log(result);
      this.movie = result[0];
      console.log('the reuslt', this.movie);
    });
    // return this.movie.find(movie => movie.id === id);
  }

  fetchEpisodes() {
    return this.http.get('http://api.tvmaze.com/seasons/1/episodes');
  }

}
