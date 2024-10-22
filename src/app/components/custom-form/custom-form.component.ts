import { Component } from '@angular/core';
import {ProfilePictureComponent} from '../profile-picture/profile-picture.component';
import {InputFieldComponent} from '../input-field/input-field.component';
import {CustomButtonComponent} from '../custom-button/custom-button.component';


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
export class CustomFormComponent {
  user = {
    image: 'profile_picture.png',
    name: 'Charlene Reed',
    username: 'charlenereed',
    email: 'charlenereed@gmail.com',
    dob: '1990-01-25',
    permanentAddress: 'San Jose, California, USA',
    address: 'San Jose, California, USA',
    password: 'TestPassword',
    city: 'San Jose',
    postalCode: '45962',
    country: 'USA'
  };
}
