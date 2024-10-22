import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss'
})
export class TransactionsComponent {
  @Input() active: boolean|undefined = false;
}
