import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentListItemComponent } from './rent-list-item.component';

describe('RentListItemComponent', () => {
  let component: RentListItemComponent;
  let fixture: ComponentFixture<RentListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
