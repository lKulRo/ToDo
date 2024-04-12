import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToDoListComponent } from '../../components/to-do-list/to-do-list.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToDoListComponent, RouterModule, MatCardModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  // title = 'to-do-app';
}
