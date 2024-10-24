import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './header-icon-button.component.html',
  styleUrl: './header-icon-button.component.scss'
})
export class HeaderIconButtonComponent {
  @Input() iconSrc: string = '';
  @Input() altText: string = '';
}
