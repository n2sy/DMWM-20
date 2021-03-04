import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaccountComponent } from './listaccount.component';

describe('ListaccountComponent', () => {
  let component: ListaccountComponent;
  let fixture: ComponentFixture<ListaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
