import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRentComponent } from './single-rent.component';

describe('SingleRentComponent', () => {
  let component: SingleRentComponent;
  let fixture: ComponentFixture<SingleRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
