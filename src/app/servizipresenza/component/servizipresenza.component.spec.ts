import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServizipresenzaComponent } from './servizipresenza.component';

describe('ServizipresenzaComponent', () => {
  let component: ServizipresenzaComponent;
  let fixture: ComponentFixture<ServizipresenzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServizipresenzaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServizipresenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
