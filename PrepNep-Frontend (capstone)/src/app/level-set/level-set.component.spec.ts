import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelSetComponent } from './level-set.component';

describe('LevelSetComponent', () => {
  let component: LevelSetComponent;
  let fixture: ComponentFixture<LevelSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
