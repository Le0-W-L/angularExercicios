import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCalculoComponent } from './media-calculo.component';

describe('MediaCalculoComponent', () => {
  let component: MediaCalculoComponent;
  let fixture: ComponentFixture<MediaCalculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaCalculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaCalculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
