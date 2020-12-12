import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MovieDetail } from '../Models/movie-detail.model';

@Component({
  selector: 'app-picture-tile',
  templateUrl: './picture-tile.component.html',
  styleUrls: ['./picture-tile.component.scss'],
})
export class PictureTileComponent implements OnInit, OnChanges {
  @Input() currentMovie: MovieDetail;
  @Input() pictureCode: string;

  path: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.currentMovie && this.pictureCode) {
      this.path = `${this.currentMovie.Path}/${this.pictureCode}.jpg`;
    }
  }

  ngOnInit(): void {}
}
