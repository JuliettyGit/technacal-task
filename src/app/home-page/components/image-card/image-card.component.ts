import { Component, Input, OnInit } from '@angular/core';
import { IImage, IImagePosition } from '../../../constants/interfaces/image';
import { IMAGE_POSITION_MAP } from '../../../constants/position-mapper';
import { PopupService } from '../../services/popup.service';
import { CanvasComponent } from '../canvas/canvas.component';

@Component({
  selector: 'image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() image!: IImage;

  imagePosition!: IImagePosition;

  constructor(private popupService: PopupService) {}

  ngOnInit() {
    this.imagePosition = IMAGE_POSITION_MAP[this.image.position];
  }

  openDialog(image: IImage) {
    this.popupService.openPopup(CanvasComponent, image, this.imagePosition)
  }
}
