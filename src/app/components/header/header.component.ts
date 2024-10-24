import {Component, OnInit} from '@angular/core';
import {SearchComponent} from '../search/search.component';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs';
import {HeaderIconButtonComponent} from '../header-icon-button/header-icon-button.component';
import {ProfilePictureComponent} from '../profile-picture/profile-picture.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchComponent, HeaderIconButtonComponent, ProfilePictureComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  public header: string = 'Settings';
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

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      let temp_title = event.urlAfterRedirects.split('/')[1];
      this.header = temp_title.charAt(0).toUpperCase() + temp_title.slice(1)
    });
  }

}
