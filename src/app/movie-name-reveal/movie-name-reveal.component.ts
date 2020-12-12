import { Component, Input, OnInit } from '@angular/core';
import { MovieDetail } from '../Models/movie-detail.model';

@Component({
  selector: 'app-movie-name-reveal',
  templateUrl: './movie-name-reveal.component.html',
  styleUrls: ['./movie-name-reveal.component.scss'],
})
export class MovieNameRevealComponent implements OnInit {
  @Input() currentMovie: MovieDetail;
  constructor() {}

  ngOnInit(): void {}
}
