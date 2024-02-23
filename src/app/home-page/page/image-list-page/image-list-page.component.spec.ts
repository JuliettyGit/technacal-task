import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListPageComponent } from './image-list-page.component';

describe('ImageListPageComponent', () => {
  let component: ImageListPageComponent;
  let fixture: ComponentFixture<ImageListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageListPageComponent]
    });
    fixture = TestBed.createComponent(ImageListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
