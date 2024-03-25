import { Component, inject } from '@angular/core';
import { ToDoListItemComponent } from './to-do-list-item/to-do-list-item.component';
import { ToDoListItem } from '../../interfaces/to-do-list-item';
import { CommonModule } from '@angular/common';
import { ToDoListService } from '../../services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [ToDoListItemComponent, CommonModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.css'
})
export class ToDoListComponent {
  toDoListService: ToDoListService = inject(ToDoListService)
  toDoListItems: ToDoListItem[] = this.toDoListService.getToDoListItems();
}
