import { Injectable } from '@angular/core';
import { ToDoListItem } from '../interfaces/to-do-list-item';
import { ToDoListItemDetails } from '../interfaces/to-do-list-item-details';

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

  toDoListItemDetails: ToDoListItemDetails[] = [
    {
      id: 1,
      list: [{id:2, item: "asdf"}, {id:1, item:"qwe"}],
    },
    {
      id: 2,
      list: [{id:2, item: "asdf22"}, {id:1, item:"qwe22"}],
    },
    {
      id: 3,
      list: [{id:2, item: "asdf33"}, {id:1, item:"qwe33"}],
    }
  ]

  getToDoListItems(): ToDoListItem[] {
    return this.toDoListItems;
  }

  getToDoListItemsDetailById(id: number): ToDoListItemDetails | undefined {
    return this.toDoListItemDetails.find((listItem) => listItem.id == id);
  }
}
