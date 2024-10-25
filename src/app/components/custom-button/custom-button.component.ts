import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() label: string = 'Save';
  @Input() buttonClass: string = 'primary';

  onClick() {
    console.log('Submit form');
  }
}
