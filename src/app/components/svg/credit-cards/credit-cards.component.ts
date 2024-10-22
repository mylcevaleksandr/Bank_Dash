import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-credit-cards',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './credit-cards.component.html',
  styleUrl: './credit-cards.component.scss'
})
export class CreditCardsComponent {
  @Input() active: boolean|undefined = false;
}
