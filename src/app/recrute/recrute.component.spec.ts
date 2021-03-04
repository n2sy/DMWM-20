import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruteComponent } from './recrute.component';

describe('RecruteComponent', () => {
  let component: RecruteComponent;
  let fixture: ComponentFixture<RecruteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
