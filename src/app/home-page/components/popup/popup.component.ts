import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { IImage, IImagePosition } from '../../../constants/interfaces/image';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupService } from '../../services/popup.service';

interface IDialogData {
  image: IImage,
  imagePosition: IImagePosition
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit, AfterViewInit {
  @ViewChild('imageElement') imageElement!: ElementRef;
  @ViewChild('popupElement') popupElement!: ElementRef;

  image!: HTMLElement;
  scale = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData,
              private popupService: PopupService) {}

  ngOnInit() {
    this.popupService.popupOpened.subscribe(popupOpened => {
      if (popupOpened) {
        this.findPopupSize();
      }
    })
  }

  ngAfterViewInit() {
    this.image = this.imageElement.nativeElement;
  }

  zoomIn(): void {
    this.scale += 0.1;
    this.updateScale();
  }

  zoomOut(): void {
    this.scale -= 0.1;
    this.updateScale();
  }

  zoomToFit(): void {
    const imageWidth = this.image.offsetWidth;
    const imageHeight = this.image.offsetHeight;
    const popupCanvasWidth = this.popupElement.nativeElement.offsetWidth;
    const popupCanvasHeight = this.popupElement.nativeElement.offsetHeight;

    const scaleX = popupCanvasWidth / imageWidth;
    const scaleY = popupCanvasHeight / imageHeight;
    this.scale = Math.min(scaleX, scaleY);

    this.updateScale();
  }

  private updateScale(): void {
    this.image.style.transform = `scale(${this.scale})`;
  }

  private findPopupSize(): void {
    const popupCanvas = this.popupElement.nativeElement;

    if (popupCanvas.offsetWidth && popupCanvas.offsetHeight) {
      this.placeImage(popupCanvas.offsetWidth, popupCanvas.offsetHeight);
    }
  }

  private placeImage(popupWidth: number, popupHeight: number): void {
    const offsetX = (popupWidth / 2) - this.data.imagePosition.x;
    const offsetY = (popupHeight / 2) - this.data.imagePosition.y;

    this.image.style.left = offsetX + 'px';
    this.image.style.top = offsetY + 'px';
  }
}
