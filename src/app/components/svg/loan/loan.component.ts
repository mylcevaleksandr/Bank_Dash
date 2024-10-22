import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-loan',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './loan.component.html',
  styleUrl: './loan.component.scss'
})
export class LoanComponent {
  @Input() active: boolean|undefined = false;
}
