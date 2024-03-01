import { EventEmitter, Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PopupComponent } from '../components/popup/popup.component';
import { IImage, IImagePosition } from '../../constants/interfaces/image';
import { CanvasComponent } from '../components/canvas/canvas.component';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  popupOpened = new EventEmitter;
  private dialogRef?: MatDialogRef<PopupComponent | CanvasComponent>;

  constructor(public dialog: MatDialog) { }

  openPopup(component: any, image: IImage, imagePosition: IImagePosition): void {
    this.dialogRef =  this.dialog.open(component,
      {
        data: {
          image,
          imagePosition
        },
      });

    this.dialogRef.afterOpened().subscribe(() => {
      this.popupOpened.emit(true);
    });

    this.dialogRef.afterClosed()
      .pipe(tap(() => this.resetOnClose()))
      .subscribe(() => {
      this.popupOpened.emit(false);
    })
  }

  close(): void {
    this.dialogRef?.close();
  }

  private resetOnClose() {
    this.dialogRef = undefined;
  }
}
