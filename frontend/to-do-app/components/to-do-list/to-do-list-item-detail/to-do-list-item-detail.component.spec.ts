import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListItemDetailComponent } from './to-do-list-item-detail.component';

describe('ToDoListItemDetailComponent', () => {
  let component: ToDoListItemDetailComponent;
  let fixture: ComponentFixture<ToDoListItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListItemDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToDoListItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
