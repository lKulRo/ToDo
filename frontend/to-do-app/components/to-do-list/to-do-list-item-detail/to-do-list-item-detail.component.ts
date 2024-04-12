import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { ToDoListService } from '../../../services/to-do-list.service';
import { CommonModule } from '@angular/common';
import { ToDoList } from '../../../interfaces/to-do-list';
import { FilterAddInputComponent } from '../../filter-add-input/filter-add-input.component';
import { MatListModule } from '@angular/material/list';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

interface editToDo {
  toDo: ToDoList;
  edit: boolean;
  editForm: FormGroup;
}

@Component({
  selector: 'app-to-do-list-item-detail',
  standalone: true,
  templateUrl: './to-do-list-item-detail.component.html',
  styleUrl: './to-do-list-item-detail.component.scss',
  imports: [
    MatIconModule,
    CommonModule,
    FilterAddInputComponent,
    MatListModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
  ],
})
export class ToDoListItemDetailComponent {
  public bindAdd = this.addItem.bind(this);
  public bindFilter = this.filterList.bind(this);
  route: ActivatedRoute = inject(ActivatedRoute);
  toDoListService: ToDoListService = inject(ToDoListService);

  id = Number(this.route.snapshot.params['id']);
  items: editToDo[] = [];

  constructor() {
    this.updateList();
  }

  updateList() {
    this.items = [];
    this.toDoListService.getToDoListItems(this.id).subscribe((res) =>
      res.map((item) =>
        this.items.push({
          toDo: item,
          edit: false,
          editForm: new FormGroup({
            edit: new FormControl(''),
          }),
        } as editToDo)
      )
    );
  }

  updateEdit(id: number) {
    let item = this.items.find((item) => item.toDo.id == id);
    if (!item) return;
    item.edit = !item.edit;
  }

  updateItem(itemId: number, text: string) {
    this.toDoListService
      .updateToDoListItems(text, this.id, itemId)
      .subscribe({ complete: () => this.updateList() });
  }

  setEditDefaultValue(id: number) {
    let item = this.items.find(item => item.toDo.id == id);
    item?.editForm.setValue({edit: item.toDo.name});
  }

  addItem(text: string) {
    this.toDoListService
      .addToDoListItems(text, this.id)
      .subscribe({ complete: () => this.updateList() });
  }

  filterList(text: string) {
    if (!text) {
      this.updateList();
      return;
    }
    this.items = this.items.filter((lsitItem) =>
      lsitItem?.toDo.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  deleteItem(itemId: number) {
    this.toDoListService
      .deleteToDoListItems(this.id, itemId)
      .subscribe({ complete: () => this.updateList() });
  }
}
