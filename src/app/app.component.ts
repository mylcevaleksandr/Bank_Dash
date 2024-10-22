import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeftmenuComponent} from './components/leftmenu/leftmenu.component';
import {HeaderComponent} from './components/header/header.component';
import {WorkspaceComponent} from './components/workspace/workspace.component';
import {MenuitemComponent} from './components/menuitem/menuitem.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeftmenuComponent, HeaderComponent, WorkspaceComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Test_Four';
}
