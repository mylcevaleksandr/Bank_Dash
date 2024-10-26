import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-navigation-icon-button',
  standalone: true,
  imports: [],
  templateUrl: './navigation-icon-button.component.html',
  styleUrl: './navigation-icon-button.component.scss'
})
export class NavigationIconButtonComponent {
  @Input() iconSrc: string = '';
  @Input() altText: string = '';
}
