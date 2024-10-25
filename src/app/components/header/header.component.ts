import {Component, OnInit} from '@angular/core';
import {SearchComponent} from '../search/search.component';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {HeaderIconButtonComponent} from '../header-icon-button/header-icon-button.component';
import {ProfilePictureComponent} from '../profile-picture/profile-picture.component';
import {User} from '../../interfaces/user';
import {UserService} from '../../services/user.service';

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
  public header: string = 'Setting';
  public user!: User;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUserData().subscribe(data => {
      this.user = data;
    });
    const path: any = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
    this.header = path?.charAt(0).toUpperCase() + path?.substring(1);
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const path: any = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
        this.header = path?.charAt(0).toUpperCase() + path?.substring(1);
      }
    });
  }
}
