import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSetComponent } from './grid-set.component';

describe('GridSetComponent', () => {
  let component: GridSetComponent;
  let fixture: ComponentFixture<GridSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
