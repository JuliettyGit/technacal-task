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
    ImageCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    ImageService
  ]
})
export class HomePageModule { }
