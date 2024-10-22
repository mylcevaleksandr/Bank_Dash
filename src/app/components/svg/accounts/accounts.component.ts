import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.scss'
})
export class AccountsComponent {
  @Input() active: boolean|undefined = false;

}
