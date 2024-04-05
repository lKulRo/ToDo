import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-filter-add-input',
  standalone: true,
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './filter-add-input.component.html',
  styleUrl: './filter-add-input.component.css',
})
export class FilterAddInputComponent {
  @Input() public addFn!: (text:string)=> void ;
  @Input() public filterFn!: (text:string)=> void ;

  addForm: FormGroup = new FormGroup({
    add: new FormControl(''),
  });
  filterForm: FormGroup = new FormGroup({
    filter: new FormControl(''),
  });
}
