import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-films-item',
  templateUrl: './films-item.component.html',
  styleUrls: ['./films-item.component.css']
})
export class FilmsItemComponent implements OnInit {
  @Input() film;
  mService: MovieService;

  constructor(mService: MovieService) {
    this.mService = mService;
  }

  ngOnInit(): void {
  }

}
