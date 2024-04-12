import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ToDoList } from '../../../interfaces/to-do-list';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { ToDoListService } from '../../../services/to-do-list.service';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-to-do-list-item',
  standalone: true,
  imports: [
    RouterModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './to-do-list-item.component.html',
  styleUrl: './to-do-list-item.component.scss',
})
export class ToDoListItemComponent {
  @Input() toDoListItem!: ToDoList;
  @Output() deleted = new EventEmitter();
  toDoListService: ToDoListService = inject(ToDoListService);
  editOn = false;

  editForm: FormGroup = new FormGroup({
    edit: new FormControl(""),
  });
  
  deleteToDoList() {
    this.toDoListService
      .deleteToDoLists(this.toDoListItem.id)
      .subscribe({ complete: () => this.deleted.emit() });
  }

  edit() {
    this.editOn = !this.editOn;
  }

  editDefaultValue(){
    this.editForm.setValue({edit: this.toDoListItem.name})
  }
  
  updateToDoList(text: string){
    this.toDoListService.updateToDoLists(text, this.toDoListItem.id).subscribe({complete: () => {
      this.edit();
      this.deleted.emit();
    }})
  }
}
