import {Routes} from '@angular/router';
import {LayoutComponent} from './components/layout/layout.component';
import {PreferencesComponent} from './components/preferences/preferences.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {CustomTabComponent} from './components/custom-tab/custom-tab.component';
import {SecurityComponent} from './components/security/security.component';
import {CustomFormComponent} from './components/custom-form/custom-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'setting',
        component: CustomTabComponent,
        children: [
          {path: 'profile', component: CustomFormComponent},
          {path: 'preferences', component: PreferencesComponent},
          {path: 'security', component: SecurityComponent},
        ]
      },
      {path: "dashboard", component: PageNotFoundComponent},
      {path: "transactions", component: PageNotFoundComponent},
      {path: "accounts", component: PageNotFoundComponent},
      {path: "investments", component: PageNotFoundComponent},
      {path: "creditcards", component: PageNotFoundComponent},
      {path: "loans", component: PageNotFoundComponent},
      {path: "services", component: PageNotFoundComponent},
      {path: "privileges", component: PageNotFoundComponent},
      {path: "**", redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

