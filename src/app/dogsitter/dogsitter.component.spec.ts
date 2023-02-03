import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsitterComponent } from './dogsitter.component';

describe('DogsitterComponent', () => {
  let component: DogsitterComponent;
  let fixture: ComponentFixture<DogsitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogsitterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogsitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
