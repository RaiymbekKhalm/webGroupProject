import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinderPageComponent } from './finder-page.component';

describe('FinderPageComponent', () => {
  let component: FinderPageComponent;
  let fixture: ComponentFixture<FinderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
