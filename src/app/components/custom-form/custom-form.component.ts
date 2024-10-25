import {Component, OnInit} from '@angular/core';
import {ProfilePictureComponent} from '../profile-picture/profile-picture.component';
import {InputFieldComponent} from '../input-field/input-field.component';
import {CustomButtonComponent} from '../custom-button/custom-button.component';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';


@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [
    ProfilePictureComponent,
    InputFieldComponent,
    CustomButtonComponent
  ],
  templateUrl: './custom-form.component.html',
  styleUrl: './custom-form.component.scss'
})
export class CustomFormComponent implements OnInit {
  public user!: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(user => {
      this.user = user;
    });
  }
}
