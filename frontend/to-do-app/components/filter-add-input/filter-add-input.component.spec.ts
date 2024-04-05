import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAddInputComponent } from './filter-add-input.component';

describe('FilterAddInputComponent', () => {
  let component: FilterAddInputComponent;
  let fixture: ComponentFixture<FilterAddInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterAddInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterAddInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
