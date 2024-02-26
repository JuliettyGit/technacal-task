import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../components/popup/popup.component';
import { IImage, IImagePosition } from '../../constants/interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  popupOpened = new EventEmitter;

  constructor(public dialog: MatDialog) { }

  openPopup(image: IImage, imagePosition: IImagePosition): void {
    const dialogRef =  this.dialog.open(PopupComponent,
      {
        data: {
          image,
          imagePosition
        },
      });

    dialogRef.afterOpened().subscribe(() => {
      this.popupOpened.emit(true);
    });

    dialogRef.afterClosed().subscribe(() => {
      this.popupOpened.emit(false);
    })
  }
}
