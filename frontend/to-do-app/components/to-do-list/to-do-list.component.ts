import { Component, inject } from '@angular/core';
import { ToDoListItemComponent } from './to-do-list-item/to-do-list-item.component';
import { ToDoListItem } from '../../interfaces/to-do-list-item';
import { CommonModule } from '@angular/common';
import { ToDoListService } from '../../services/to-do-list.service';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    ToDoListItemComponent,
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css',
})
export class ToDoListComponent {
  toDoListService: ToDoListService = inject(ToDoListService);
  toDoListItems: ToDoListItem[] = [];
  addForm: FormGroup = new FormGroup({
    add: new FormControl(''),
  });
  filterForm: FormGroup = new FormGroup({
    filter: new FormControl(''),
  });

  constructor() {
    this.updateList();
  }

  updateList() {
    this.toDoListService.getToDoListItems().subscribe((itemList) => {
      this.toDoListItems = itemList;
    });
  }

  filterList(text: string) {
    if (!text) {
      this.updateList();
      return;
    }
    this.toDoListItems = this.toDoListItems.filter((lsitItem) =>
      lsitItem?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
  addToDoList(text: string) {
    this.toDoListService.addToDoList(text).subscribe({
      complete: () => this.updateList(),
    });
  }
}
