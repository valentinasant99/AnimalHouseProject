import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageutenteComponent } from './homepageutente.component';

describe('HomepageutenteComponent', () => {
  let component: HomepageutenteComponent;
  let fixture: ComponentFixture<HomepageutenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepageutenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageutenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
