import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {MenuitemComponent} from '../menuitem/menuitem.component';
import {MenuItem} from '../../interfaces/menu-item';

@Component({
  selector: 'app-leftmenu',
  standalone: true,
  imports: [
    NgForOf,
    MenuitemComponent
  ],
  templateUrl: './leftmenu.component.html',
  styleUrl: './leftmenu.component.scss'
})
export class LeftmenuComponent {
  items:MenuItem[] = [
    {src: 'home.svg', title: 'Dashboard'},
    {src: 'transactions.svg', title: 'Transactions'},
    {src: 'accounts.svg', title: 'Accounts'},
    {src: 'investments.svg', title: 'Investments'},
    {src: 'credit_cards.svg', title: 'Credit Cards'},
    {src: 'loan.svg', title: 'Loans'},
    {src: 'service.svg', title: 'Services'},
    {src: 'privileges.svg', title: 'my Privileges'},
    {src: 'settings.svg', title: 'Setting', active:true}
  ];
}
