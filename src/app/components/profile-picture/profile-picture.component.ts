import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-picture',
  standalone: true,
  imports: [],
  templateUrl: './profile-picture.component.html',
  styleUrl: './profile-picture.component.scss'
})
export class ProfilePictureComponent {
  @Input() userImage: string = 'default-user.png';

  onEditClick() {
    console.log('Editing picture');
    // Здесь логика для изменения картинки
  }
}
