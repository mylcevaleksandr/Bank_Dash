import {Component} from '@angular/core';
import {CustomFormComponent} from '../custom-form/custom-form.component';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from '@angular/router';
import {WorkspaceComponent} from '../workspace/workspace.component';

@Component({
  selector: 'custom-tab',
  standalone: true,
  imports: [
    CustomFormComponent,
    RouterOutlet,
    WorkspaceComponent,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './custom-tab.component.html',
  styleUrl: './custom-tab.component.scss'
})
export class CustomTabComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const activeRouteChild: ActivatedRouteSnapshot | null = this.activatedRoute.snapshot.firstChild;
    if (!activeRouteChild) {
      this.router.navigate(["setting", "profile"]);
    }
  }

}
