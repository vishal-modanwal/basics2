import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgdirComponent } from './ngdir.component';

describe('NgdirComponent', () => {
  let component: NgdirComponent;
  let fixture: ComponentFixture<NgdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgdirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
