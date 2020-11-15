import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSetComponent } from './time-set.component';

describe('TimeSetComponent', () => {
  let component: TimeSetComponent;
  let fixture: ComponentFixture<TimeSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
