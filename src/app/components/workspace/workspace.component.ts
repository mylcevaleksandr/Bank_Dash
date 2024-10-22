import { Component } from '@angular/core';
import {CustomFormComponent} from '../custom-form/custom-form.component';

@Component({
  selector: 'app-workspace',
  standalone: true,
  imports: [
    CustomFormComponent
  ],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.scss'
})
export class WorkspaceComponent {

}
