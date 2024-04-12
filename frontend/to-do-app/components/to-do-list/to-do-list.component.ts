import { Component, inject } from '@angular/core';
import { ToDoListItemComponent } from './to-do-list-item/to-do-list-item.component';
import { ToDoList } from '../../interfaces/to-do-list';
import { CommonModule } from '@angular/common';
import { ToDoListService } from '../../services/to-do-list.service';
import { MatListModule } from '@angular/material/list';
import { FilterAddInputComponent } from '../filter-add-input/filter-add-input.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
  imports: [
    ToDoListItemComponent,
    CommonModule,
    MatListModule,
    FilterAddInputComponent,
    MatCardModule
  ],
})
export class ToDoListComponent {
  public bindAddToDoList = this.addToDoList.bind(this);
  public bindFilterList = this.filterList.bind(this);
  public toDoListItems: ToDoList[] = [];
  private toDoListService: ToDoListService = inject(ToDoListService);

  constructor() {
    this.updateList();
  }

  updateList() {
    this.toDoListService.getToDoLists().subscribe((itemList) => {
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
    this.toDoListService.addToDoLists(text).subscribe({
      complete: () => this.updateList(),
    });
  }
}
