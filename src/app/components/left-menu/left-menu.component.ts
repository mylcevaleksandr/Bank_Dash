import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {MenuItemComponent} from '../menu-item/menu-item.component';
import {MenuItem} from '../../interfaces/menu-item';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [
    NgForOf,
    MenuItemComponent
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {
  items: MenuItem[] = [
    {componentName: 'app-home', src: 'home.svg', title: 'Dashboard'},
    {componentName: 'app-transactions', src: 'transactions.svg', title: 'Transactions'},
    {componentName: 'app-accounts', src: 'accounts.svg', title: 'Accounts'},
    {componentName: 'app-investments', src: 'investments.svg', title: 'Investments'},
    {componentName: 'app-credit-cards', src: 'credit_cards.svg', title: 'Credit Cards', active: true},
    {componentName: 'app-loan', src: 'loan.svg', title: 'Loans'},
    {componentName: 'app-service', src: 'service.svg', title: 'Services'},
    {componentName: 'app-privileges', src: 'privileges.svg', title: 'my Privileges'},
    {componentName: 'app-settings', src: 'settings.svg', title: 'Setting', active: true}
  ];
}
