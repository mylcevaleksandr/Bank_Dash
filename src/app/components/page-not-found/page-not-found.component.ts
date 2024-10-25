import {Component, OnInit} from '@angular/core';
import {WorkspaceComponent} from '../workspace/workspace.component';
import {ActivatedRoute} from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.pageName = this.activatedRoute.snapshot.url[0].path.charAt(0).toUpperCase() + this.activatedRoute.snapshot.url[0].path.substring(1);
  }

}
