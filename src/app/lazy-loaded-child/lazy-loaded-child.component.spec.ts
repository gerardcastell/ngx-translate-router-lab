import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedChildComponent } from './lazy-loaded-child.component';

describe('LazyLoadedChildComponent', () => {
  let component: LazyLoadedChildComponent;
  let fixture: ComponentFixture<LazyLoadedChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyLoadedChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
