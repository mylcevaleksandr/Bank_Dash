import { Component } from '@angular/core';

@Component({
  selector: 'custom-tab',
  standalone: true,
  imports: [],
  templateUrl: './custom-tab.component.html',
  styleUrl: './custom-tab.component.scss'
})
export class CustomTabComponent {
  selectedTab: string = 'profile';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
}
