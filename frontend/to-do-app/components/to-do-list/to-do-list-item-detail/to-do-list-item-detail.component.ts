import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { ToDoListService } from '../../../services/to-do-list.service';
import { CommonModule } from '@angular/common';
import { ToDoListItem } from '../../../interfaces/to-do-list-item';
import { FilterAddInputComponent } from '../../filter-add-input/filter-add-input.component';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-to-do-list-item-detail',
  standalone: true,
  templateUrl: './to-do-list-item-detail.component.html',
  styleUrl: './to-do-list-item-detail.component.css',
  imports: [
    MatIconModule,
    CommonModule,
    FilterAddInputComponent,
    MatListModule,
  ],
})
export class ToDoListItemDetailComponent {
  public bindAdd = this.addItem.bind(this);
  public bindFilter = this.filterList.bind(this);
  route: ActivatedRoute = inject(ActivatedRoute);
  toDoListService: ToDoListService = inject(ToDoListService);

  id = Number(this.route.snapshot.params['id']);
  items: ToDoListItem[] = [];

  constructor() {
    this.updateItems();
  }

  updateItems() {
    this.toDoListService
      .getToDoListItemsDetailById(this.id)
      .subscribe((res) => (this.items = res));
  }

  addItem(text: string) {
    this.toDoListService
      .addToDoListItem(text, this.id)
      .subscribe({ complete: () => this.updateItems() });
  }

  filterList(text: string) {
    if (!text) {
      this.updateItems();
      return;
    }
    this.items = this.items.filter((lsitItem) =>
      lsitItem?.name.toLowerCase().includes(text.toLowerCase())
    );
  }
}
