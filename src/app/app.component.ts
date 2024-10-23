import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LeftMenuComponent} from './components/left-menu/left-menu.component';
import {HeaderComponent} from './components/header/header.component';
import {NgForOf} from '@angular/common';
import {CustomTabComponent} from './components/custom-tab/custom-tab.component';
import {CustomFormComponent} from './components/custom-form/custom-form.component';
import {LayoutComponent} from './components/layout/layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftMenuComponent, HeaderComponent, NgForOf, CustomTabComponent, CustomFormComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Test_Four';
}
