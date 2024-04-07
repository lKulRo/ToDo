import { Injectable } from '@angular/core';
import { ToDoListItem } from '../interfaces/to-do-list-item';
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

  getToDoLists(): Observable<ToDoListItem[]> {
    return this.httpClient.get<ToDoListItem[]>(this.baseUrl);
  }

  getToDoListItems(id: number): Observable<ToDoListItem[]> {
    return this.httpClient.get<ToDoListItem[]>(this.baseUrl+`/${id}`)
  }

  addToDoLists(listName: string): Observable<void>{
    return this.httpClient.post<void>(this.baseUrl, `\"${listName}\"`, {headers: this.headers});
  }

  addToDoListItems(listName: string, id: number): Observable<void>{
    return this.httpClient.post<void>(this.baseUrl+`/${id}`, `\"${listName}\"`, {headers: this.headers});
  }

  deleteToDoLists(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.baseUrl+`/${id}`);
  }

  updateToDoLists(listName: string, id: number): Observable<void>{
    return this.httpClient.put<void>(this.baseUrl+`/${id}`, `\"${listName}\"`, {headers: this.headers});
  }
}
