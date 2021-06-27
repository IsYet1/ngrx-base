import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadFilterTextComponent } from './read-filter-text.component';

describe('ReadFilterTextComponent', () => {
  let component: ReadFilterTextComponent;
  let fixture: ComponentFixture<ReadFilterTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadFilterTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadFilterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
