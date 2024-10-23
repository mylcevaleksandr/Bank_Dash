import { Component } from '@angular/core';
import {CustomFormComponent} from '../custom-form/custom-form.component';
import {CustomTabComponent} from '../custom-tab/custom-tab.component';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [
    CustomFormComponent,
    CustomTabComponent
  ],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

}
