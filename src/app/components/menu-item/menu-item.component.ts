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
import {Router, RouterLink, RouterLinkActive} from '@angular/router';

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
    SettingsComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss'
})
export class MenuItemComponent {

  @Input() item: MenuItem = {
    componentName: '',
    src: '',
    title: '',
    route: '',
    active: false
  };

  constructor(private router: Router) {

  }



  public navigate(location: string) {
    this.item.active = false;
    console.log(location);
    this.router.navigate([location]);
  }
}
