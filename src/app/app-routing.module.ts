import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'movies/:name', component: MoviePageComponent},
  {path: 'episode/:id/:name', component: EpisodesComponent},
  {path: 'movies', component: MovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
