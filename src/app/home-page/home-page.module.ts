import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageListPageComponent } from './page/image-list-page/image-list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_EMPTY } from '../constants/routing-constants';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ImageService } from './services/image.service';
import { PopupComponent } from './components/popup/popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupService } from './services/popup.service';
import { MatDividerModule } from '@angular/material/divider';

const routes: Routes = [
  {
    path: ROUTE_EMPTY,
    pathMatch: 'full',
    component: ImageListPageComponent,
  }
]

@NgModule({
  declarations: [
    ImageListPageComponent,
    ImageCardComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule
  ],
  providers: [
    ImageService,
    PopupService
  ]
})
export class HomePageModule { }
