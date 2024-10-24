import {Component, OnInit} from '@angular/core';
import {WorkspaceComponent} from '../workspace/workspace.component';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    WorkspaceComponent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit {
  public pageName: string = '';

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let temp_title = event.urlAfterRedirects.split('/')[1];
      this.pageName = temp_title.charAt(0).toUpperCase() + temp_title.slice(1)
    });
  }

}
