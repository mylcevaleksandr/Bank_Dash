import {Component} from '@angular/core';
import {CustomFormComponent} from '../custom-form/custom-form.component';
import {CustomTabComponent} from '../custom-tab/custom-tab.component';
import {HeaderComponent} from '../header/header.component';
import {LeftMenuComponent} from '../left-menu/left-menu.component';
import {RouterOutlet} from '@angular/router';
import {SettingComponent} from '../setting/setting.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    CustomFormComponent,
    CustomTabComponent,
    HeaderComponent,
    LeftMenuComponent,
    RouterOutlet,
    SettingComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
