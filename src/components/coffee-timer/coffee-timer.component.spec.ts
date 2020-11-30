import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeTimerComponent } from './coffee-timer.component';

describe('CoffeeTimerComponent', () => {
  let component: CoffeeTimerComponent;
  let fixture: ComponentFixture<CoffeeTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoffeeTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
