import { Component, OnInit } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
  movieList: object;
  constructor( private data: MovieService,
               private title: Title,
               private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('MovieZone - Movies');
    // Service
    this.data.fetchMovies().subscribe(result => {
      this.movieList = result;
      console.log(result);
    });
  }

}
