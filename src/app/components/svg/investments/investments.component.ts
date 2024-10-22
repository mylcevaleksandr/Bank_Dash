import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-investments',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './investments.component.html',
  styleUrl: './investments.component.scss'
})
export class InvestmentsComponent {
  @Input() active: boolean|undefined = false;
}
