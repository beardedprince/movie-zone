import { Component, OnInit, Input } from '@angular/core';
import { MovieService} from './../movie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Title, Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.sass'],
})
export class MoviePageComponent implements OnInit {
  movies;
  movieDetails: any;
  episodeList: object;
  badges: [];

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
      {name: 'keyword', content: 'movie, TV Shows, Episodes, Entertainment'}
    ]);

    const id = this.route.snapshot.params.id;
    console.log(id);
    this.movieService.fetchMoviesByName(id).subscribe(res => {
      this.movieDetails = res;
      this.badges = this.movieDetails.genres;
     });


    // Get seasonal movies
    this.movieService.fetchEpisodes().subscribe(episodes => {
        this.episodeList = episodes;
        console.log('na your episodes be this', episodes);
      });

    // breadcrumb navigation
    const mov = this.route.paramMap.subscribe((params: Params) => {
      this.movies = params;
      console.log('ww', params.params.id);
    });


}
// END OF ngOnInit

// NAVIGATE EPISODES TO EPISODE DETAILS PAGE
goToDetails(id: number, name: string) {
  this.router.navigate(['/episode', id, name]);
}

  }
