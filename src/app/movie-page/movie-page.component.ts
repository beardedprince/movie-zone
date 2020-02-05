import { Component, OnInit } from '@angular/core';
import { MovieService} from './../movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.sass'],
})
export class MoviePageComponent implements OnInit {

  movies: any;
  episodeList: object;

  constructor(private movieService: MovieService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title,
              private meta: Meta) { }

  ngOnInit() {
    // set page title and meta tags
    this.title.setTitle('MovieZone - Movie');
    this.meta.addTags([
      {name: 'title', content: 'MovieZone'},
      {name: 'description', content: 'MovieZone brings movies and shows to your easily'},
      {name: 'keyword', contnet: 'movie, TV Shows, Episodes, Entertainment'}
    ]);


    const idRef = 'name';
    const name = this.route.snapshot.params[idRef];
    this.movies = this.movieService.fetchMoviesByName(name);
    this.route.params.subscribe(params => {
      this.movies = this.movieService.fetchMoviesByName(params[idRef]);
    });

    console.log(this.movies);

    // Get seasonal movies
    this.movieService.fetchEpisodes().subscribe(episodes => {
      this.episodeList = episodes;
      console.log('na your episodes be this', episodes);
    });

    // breadcrumb navigation
    const mov = this.route.paramMap.subscribe((params: Params) => {
      this.movies = params;
      console.log('ww', params.params.name);
    });


}
// END OF ngOnInit

// NAVIGATE EPISODES TO EPISODE DETAILS PAGE
goToDetails(id: number, name: string) {
  this.router.navigate(['/episode', id, name]);
}
    // this.movie = this.movieService.fetchMoviesById(mov);
    // this.route.params.subscribe(params => {
    //  this.movie = this.movieService.fetchMoviesById(params.idRef);
    // });

    // console.log('movei page .ts', this.movie);
    // getMovie() {
  //     this.movieService.fetchMovies().forEach( movies => {
  //       this.movies = movies;
  //       console.log('this movies se', this.movies);
  //     });
  //   }
  }
