import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeColComponent } from './three-col.component';

describe('ThreeColComponent', () => {
  let component: ThreeColComponent;
  let fixture: ComponentFixture<ThreeColComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeColComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeColComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
