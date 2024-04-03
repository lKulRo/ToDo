import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ToDoListItem } from '../../../interfaces/to-do-list-item';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ToDoListService } from '../../../services/to-do-list.service';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [RouterModule, MatIconModule, MatListModule],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.css'
})
export class ToDoListItemComponent {
  @Input() toDoListItem!: ToDoListItem;
  @Output() deleted = new EventEmitter();
  toDoListService: ToDoListService = inject(ToDoListService);
  
  deleteToDoList(){
    this.toDoListService.deleteToDoList(this.toDoListItem.id).subscribe({complete: () => this.deleted.emit()});
  }
}
