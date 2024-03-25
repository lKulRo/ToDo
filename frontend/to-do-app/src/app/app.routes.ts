import { Routes } from '@angular/router';
import { ToDoListComponent } from '../../components/to-do-list/to-do-list.component';
import { ToDoListItemDetailComponent } from '../../components/to-do-list/to-do-list-item-detail/to-do-list-item-detail.component';

export const routes: Routes = [{
    path: '',
    component: ToDoListComponent,
    title: 'List Overview',
  },
  {
    path: 'details/:id',
    component: ToDoListItemDetailComponent,
    title: 'Detailed List',
  },];
