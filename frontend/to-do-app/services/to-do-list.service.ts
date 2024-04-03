import { Injectable } from '@angular/core';
import { ToDoListItem } from '../interfaces/to-do-list-item';
import { ToDoListItemDetails } from '../interfaces/to-do-list-item-details';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToDoListService {
  private baseUrl = "https://localhost:7275/todolists"
  private headers = new HttpHeaders();
  
  constructor(private httpClient: HttpClient) {
    this.headers = this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }
  

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
  

  getToDoListItems(): Observable<ToDoListItem[]> {
    // return this.toDoListItems;
    return this.httpClient.get<ToDoListItem[]>(this.baseUrl);
  }

  getToDoListItemsDetailById(id: number): Observable<ToDoListItem[]> {
    // return this.toDoListItemDetails.find((listItem) => listItem.id == id);
    return this.httpClient.get<ToDoListItem[]>(this.baseUrl+`/${id}`)
  }

  addToDoList(listName: string): Observable<void>{
    // this.toDoListItems.push({id: this.toDoListItems.length + 1, name: listName})
    return this.httpClient.post<void>(this.baseUrl, `\"${listName}\"`, {headers: this.headers});
  }

  deleteToDoList(id: number): Observable<void>{
    // this.toDoListItems.push({id: this.toDoListItems.length + 1, name: listName})
    return this.httpClient.delete<void>(this.baseUrl+`/${id}`);
  }
}
