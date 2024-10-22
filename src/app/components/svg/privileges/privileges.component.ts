import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-privileges',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './privileges.component.html',
  styleUrl: './privileges.component.scss'
})
export class PrivilegesComponent {
  @Input() active: boolean|undefined = false;
}
