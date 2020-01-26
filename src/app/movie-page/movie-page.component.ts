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

  movie: any;
  episodeList: object;

  constructor(private movieSerive: MovieService,
              private route: ActivatedRoute,
              private router: Router,
              private title: Title,
              private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('MovieZone - Movie');
    this.meta.addTags([
      {name: 'title', content: 'MovieZone'},
      {name: 'description', content: 'MovieZone brings movies and shows to your easily'}
    ]);


    const idRef = 'name';
    const title = this.route.snapshot.params[idRef];
    this.movie = this.movieSerive.fetchMoviesById(title);
    this.route.params.subscribe(params => {
      this.movie = this.movieSerive.fetchMoviesById(params[idRef]);
    });

    console.log(this.movie);

    // Get seasonal movies
    this.movieSerive.fetchEpisodes().subscribe(episodes => {
      this.episodeList = episodes;
      console.log('na your episodes be this', episodes);
    });

    // breadcrumb navigation
    const mov = this.route.paramMap.subscribe((params: Params) => {
      this.movie = params;
      console.log('ww', params.params.name);
    });

}

// NAVIGATE EPISODES TO MOVIE DETAILS PAGE
goToDetails(id: number, name: string) {
  this.router.navigate(['/episode', id, name]);
}
    // this.movie = this.movieSerive.fetchMoviesById(mov);
    // this.route.params.subscribe(params => {
    //  this.movie = this.movieSerive.fetchMoviesById(params.idRef);
    // });

    // console.log('movei page .ts', this.movie); 
    // getMovie() {
  //     this.movieSerive.fetchMovies().forEach( movies => {
  //       this.movies = movies;
  //       console.log('this movies se', this.movies);
  //     });
  //   }
  }

 

