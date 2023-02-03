import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensioneComponent } from './pensione.component';

describe('PensioneComponent', () => {
  let component: PensioneComponent;
  let fixture: ComponentFixture<PensioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
