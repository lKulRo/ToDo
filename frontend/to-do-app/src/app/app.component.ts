import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToDoListComponent } from '../../components/to-do-list/to-do-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToDoListComponent, RouterModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  // title = 'to-do-app';
}
