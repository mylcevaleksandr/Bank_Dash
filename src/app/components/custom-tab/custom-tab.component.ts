import {Component, OnInit} from '@angular/core';
import {CustomFormComponent} from '../custom-form/custom-form.component';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  NavigationEnd,
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
export class CustomTabComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    const activeRouteChild: ActivatedRouteSnapshot | null = this.activatedRoute.snapshot.firstChild;
    if (!activeRouteChild) {
      this.router.navigate(["setting", "profile"]);
    }

  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const path: any = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
        if (!path) {
          this.router.navigate(["setting", "profile"]);
        }
      }
    });
  }

}
