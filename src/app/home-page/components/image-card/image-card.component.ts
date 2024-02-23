import { Component, Input, OnInit } from '@angular/core';
import { IImage } from '../../../constants/interfaces/image';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
@Input() image!: IImage;

  ngOnInit() {
    console.log('called')
    console.log(11, this.image)
  }
}
