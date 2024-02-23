import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { IImage } from '../../constants/interfaces/image';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private fakeDataUrl = '/assets/image-list.json';

  constructor(private http: HttpClient) { }

  getImageList(): Observable<IImage[]> {
    return this.http.get<IImage[]>(this.fakeDataUrl)
      .pipe(
        map((response) => response),
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return of([]);
  }
}
