import { Injectable } from '@angular/core';
import { ToDoListItem } from '../interfaces/to-do-list-item';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  constructor() {}

  toDoListItems: ToDoListItem[] = [
    {
      id: 1,
      toDoListName: 'first List',
    },
    {
      id: 2,
      toDoListName: 'ToDoList',
    },
    {
      id: 3,
      toDoListName: 'Einkaufsliste',
    },
    {
      id: 4,
      toDoListName: 'IdeenListe',
    },
    {
      id: 5,
      toDoListName: 'Ablaufplan',
    },
    {
      id: 6,
      toDoListName: 'WunschListe',
    },
  ];

  getToDoListItems(): ToDoListItem[] {
    return this.toDoListItems;
  }

  getToDoListItemsById(id: number): ToDoListItem | undefined {
    return this.toDoListItems.find((listItem) => listItem.id == id);
  }
}
