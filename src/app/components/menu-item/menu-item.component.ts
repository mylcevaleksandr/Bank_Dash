import {Component, Input, OnInit} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {AccountsComponent} from '../svg/accounts/accounts.component';
import {MenuItem} from '../../interfaces/menu-item';
import {HomeComponent} from '../svg/home/home.component';
import {TransactionsComponent} from '../svg/transactions/transactions.component';
import {InvestmentsComponent} from '../svg/investments/investments.component';
import {CreditCardsComponent} from '../svg/credit-cards/credit-cards.component';
import {LoanComponent} from '../svg/loan/loan.component';
import {ServiceComponent} from '../svg/service/service.component';
import {PrivilegesComponent} from '../svg/privileges/privileges.component';
import {SettingsComponent} from '../svg/settings/settings.component';

@Component({
  selector: 'app-menu-item',
  standalone: true,
  imports: [
    NgClass,
    AccountsComponent,
    NgIf,
    HomeComponent,
    TransactionsComponent,
    InvestmentsComponent,
    CreditCardsComponent,
    LoanComponent,
    ServiceComponent,
    PrivilegesComponent,
    SettingsComponent
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent implements OnInit {

  @Input() item: MenuItem = {
    componentName: '',
    src: '',
    title: '',
    route:'',
    active: false
  };
  @Input() componentName: string = '';


  constructor() {

  }

  ngOnInit() {
    this.navigate(this.item.route);
  }

  public navigate(location: string) {
    console.log(location);
  }
}
