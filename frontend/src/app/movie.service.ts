import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { LogService } from './log.service';

@Injectable()
export class MovieService {
  private http: Http;
  private logService: LogService;
  private movies = [];

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  fetchMovies() {
    return this.http.get('http://localhost:3000/films')
          .map((response: Response) => {
            return response.json();
          });
    // .subscribe(
    //   (data) => {
    //     this.movies = data;
    //     return this.movies;
    //   }
    // );
  }

  // fetchMoviess() {
  //   this.http.get('http://localhost:3000/films')
  //     .subscribe(
  //       (response: Response) => {
  //         const extractedMovies = response;

  //         console.log(extractedMovies);
  //       }
  //     );
  // }

}
