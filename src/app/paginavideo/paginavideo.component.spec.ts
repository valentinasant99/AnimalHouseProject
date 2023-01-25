import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginavideoComponent } from './paginavideo.component';

describe('PaginavideoComponent', () => {
  let component: PaginavideoComponent;
  let fixture: ComponentFixture<PaginavideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginavideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginavideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
