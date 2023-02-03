import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BachecaadminComponent } from './bachecaadmin.component';

describe('BachecaadminComponent', () => {
  let component: BachecaadminComponent;
  let fixture: ComponentFixture<BachecaadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BachecaadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BachecaadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
