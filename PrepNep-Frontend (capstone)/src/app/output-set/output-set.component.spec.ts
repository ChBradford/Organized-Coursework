import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputSetComponent } from './output-set.component';

describe('OutputSetComponent', () => {
  let component: OutputSetComponent;
  let fixture: ComponentFixture<OutputSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
