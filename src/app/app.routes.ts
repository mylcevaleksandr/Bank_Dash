import {Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {SettingComponent} from './components/setting/setting.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path: 'setting', component: SettingComponent},
      {path: '**', component: PageNotFoundComponent},
    ]
  },

];
