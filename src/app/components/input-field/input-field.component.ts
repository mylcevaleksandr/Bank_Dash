import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'custom-input-field',
  standalone: true,
  imports: [],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss'
})
export class InputFieldComponent {
  @Input() label: string = '';
  @Input() value: string = '';
  @Input() type: string = 'text';

  @Output() valueChange = new EventEmitter<string>();

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.valueChange.emit(newValue);
  }
}
