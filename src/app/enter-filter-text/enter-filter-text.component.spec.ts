import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterFilterTextComponent } from './enter-filter-text.component';

describe('EnterFilterTextComponent', () => {
  let component: EnterFilterTextComponent;
  let fixture: ComponentFixture<EnterFilterTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterFilterTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterFilterTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
