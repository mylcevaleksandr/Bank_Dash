import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'custom-input-field',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() placeholder = '';
  @Input() type: string = 'text';
  @Output() valueChange = new EventEmitter<string>();

  constructor() {

  }

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(newValue);
  }
}
