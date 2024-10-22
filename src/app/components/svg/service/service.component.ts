import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './service.component.html',
  styleUrl: './service.component.scss'
})
export class ServiceComponent {
  @Input() active: boolean|undefined = false;
}
