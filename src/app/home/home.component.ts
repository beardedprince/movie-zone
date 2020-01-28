import { Component, OnInit } from '@angular/core';
import {Title, Meta} from '@angular/platform-browser';
import {MovieService} from '../movie.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  movieList: object;
  constructor(private data: MovieService,
              private title: Title,
              private meta: Meta,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.title.setTitle('MovieZone - Home');
    // Service
    this.data.fetchMovies().subscribe(result => {
      this.movieList = result;
      console.log(result);
    });
    // this.movieList = this.route.snapshot.data['movies'];
    // console.log(this.movieList);

  }
    // goToDetails(id: number, name: string) {
    //       this.router.navigate(['/movies', id, name]);
    //     }
}
