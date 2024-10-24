import { Component, Input } from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [CommonModule, NgIf],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss'
})
export class ProfilePictureComponent {
  @Input() userImage: string = 'default-user.png';
  @Input() edit: boolean = false;

  onEditClick() {
    console.log('Editing picture');
  }
}
