import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToelettaturaComponent } from './toelettatura.component';

describe('ToelettaturaComponent', () => {
  let component: ToelettaturaComponent;
  let fixture: ComponentFixture<ToelettaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToelettaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToelettaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
