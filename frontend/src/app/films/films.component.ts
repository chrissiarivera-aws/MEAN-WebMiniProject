import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  films = [];
  mService: MovieService;

  constructor(mService: MovieService) {
    this.mService = mService;

  }

  ngOnInit() {
    this.mService.fetchMovies().subscribe((result) => {
      this.films = result;
      console.log(this.films);
    });
  }

}
