import {Component, OnInit} from '@angular/core';
import {CustomFormComponent} from '../custom-form/custom-form.component';
import {CustomTabComponent} from '../custom-tab/custom-tab.component';
import {WorkspaceComponent} from '../workspace/workspace.component';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {filter} from 'rxjs';
import {SettingsComponent} from '../svg/settings/settings.component';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    CustomFormComponent,
    CustomTabComponent,
    WorkspaceComponent,
    RouterOutlet,
    SettingsComponent
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let currentRoute = event.urlAfterRedirects.split('/')[1];
      console.log(currentRoute);
    });
  }
}
