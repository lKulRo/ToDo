import { Component, Input } from '@angular/core';
import { ToDoListItem } from '../../../interfaces/to-do-list-item';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.css'
})
export class ToDoListItemComponent {
  @Input() toDoListItem!: ToDoListItem;
}
