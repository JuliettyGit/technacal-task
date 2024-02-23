import { Component, OnInit } from '@angular/core';
import { IImage } from '../../../constants/interfaces/image';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-image-list-page',
  templateUrl: './image-list-page.component.html',
  styleUrls: ['./image-list-page.component.scss']
})
export class ImageListPageComponent implements OnInit {
  images!: Array<IImage>

  constructor(private readonly imageService: ImageService) {
  }

  ngOnInit() {
    this.imageService.getImageList()
      .subscribe(resp => {
        this.images = resp;
        console.log(1, this.images);
      })
  }
}
