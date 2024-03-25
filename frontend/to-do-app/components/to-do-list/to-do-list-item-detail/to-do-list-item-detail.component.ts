import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { ToDoListService } from '../../../services/to-do-list.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list-item-detail',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './to-do-list-item-detail.component.html',
  styleUrl: './to-do-list-item-detail.component.css',
})
export class ToDoListItemDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  toDoListService = inject(ToDoListService);

  id = Number(this.route.snapshot.params['id']);
  item = this.toDoListService.getToDoListItemsDetailById(this.id);
}
