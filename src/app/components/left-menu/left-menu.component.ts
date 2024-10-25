import {Component} from '@angular/core';
import {NgClass, NgForOf} from '@angular/common';
import {MenuItemComponent} from '../menu-item/menu-item.component';
import {MenuItem} from '../../interfaces/menu-item';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {DashboardService} from '../../services/dashboard.service';

@Component({
  selector: 'app-left-menu',
  standalone: true,
  imports: [
    NgForOf,
    MenuItemComponent,
    NgClass
  ],
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent {
  items: MenuItem[] = [
    {componentName: 'app-home', src: 'home.svg', title: 'Dashboard', route: 'dashboard'},
    {componentName: 'app-transactions', src: 'transactions.svg', title: 'Transactions', route: 'transactions'},
    {componentName: 'app-accounts', src: 'accounts.svg', title: 'Accounts', route: 'accounts'},
    {componentName: 'app-investments', src: 'investments.svg', title: 'Investments', route: 'investments'},
    {
      componentName: 'app-credit-cards',
      src: 'credit_cards.svg',
      title: 'Credit Cards',
      route: 'creditcards'
    },
    {componentName: 'app-loan', src: 'loan.svg', title: 'Loans', route: 'loans'},
    {componentName: 'app-service', src: 'service.svg', title: 'Services', route: 'services'},
    {componentName: 'app-privileges', src: 'privileges.svg', title: 'My Privileges', route: 'privileges'},
    {componentName: 'app-settings', src: 'settings.svg', title: 'Setting', route: 'setting', active: true}
  ];
  public toggleDashboard!: boolean;

  constructor(private router: Router, private dashboardService: DashboardService) {
    this.toggleDashboard = this.dashboardService.getToggleDashboard();
    this.dashboardService.toggleDashboardSubject.subscribe(value => {
      this.toggleDashboard = value;
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let currentRoute = event.urlAfterRedirects.split('/')[1];
      this.items.forEach(item => {
        item.active = item.route === currentRoute;
      });
    });
  }

  public closeDashboard(): void {
    this.dashboardService.setToggleDashboard(!this.toggleDashboard);
  }
}
