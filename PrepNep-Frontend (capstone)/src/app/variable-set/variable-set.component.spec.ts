import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableSetComponent } from './variable-set.component';

describe('VariableSetComponent', () => {
  let component: VariableSetComponent;
  let fixture: ComponentFixture<VariableSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariableSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
