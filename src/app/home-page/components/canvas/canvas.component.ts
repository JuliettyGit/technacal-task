import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PopupService } from '../../services/popup.service';
import { IDialogData } from '../../../constants/interfaces/dialog-data';
import { MatDividerModule } from '@angular/material/divider';

interface IOffset {
  x: number,
  y: number
}

@Component({
  selector: 'app-canvas',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit {
  @ViewChild('canvasElement') canvasElement!: ElementRef;

  scale = 1;

  constructor(@Inject(MAT_DIALOG_DATA) public data: IDialogData,
              private popupService: PopupService) {
  }

  ngOnInit() {
    this.popupService.popupOpened.subscribe(popupOpened => {
      if (popupOpened) {
        this.renderImage();
      }
    })
  }

  renderImage(): void {
    const canvas = this.canvasElement.nativeElement;
    let ctx = canvas.getContext('2d');
    ctx.reset();

    ctx.scale(this.scale, this.scale);

    let image = new Image();
    image.src = this.data.image.path;

    let offset: IOffset = this.findOffset(canvas);

    image.onload = () => ctx.drawImage(image, offset.x, offset.y);
  }

  findOffset(canvas: any): IOffset {
    const offsetX = (canvas.offsetWidth / 2) - (this.data.imagePosition.x * this.scale);
    const offsetY = (canvas.offsetHeight / 2) - (this.data.imagePosition.y * this.scale);

    return {
      x: offsetX,
      y: offsetY
    }
  }

  zoomIn(): void {
    this.scale += 0.1;
    this.renderImage();
  }

  zoomOut(): void {
    this.scale -= 0.1;
    this.renderImage();
  }

  closeCanvas(): void {
    this.popupService.close();
  }
}
