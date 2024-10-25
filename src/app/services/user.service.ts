import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public getUserData(): Observable<User> {
    const user: User = {
      image: 'profile_picture.png',
      name: 'Charlene Reed',
      username: 'Charlene Reed ',
      email: 'charlenereed@gmail.com',
      password: '**********',
      dob: '1990-01-25',
      permanentAddress: 'San Jose, California, USA',
      address: 'San Jose, California, USA',
      city: 'San Jose',
      postalCode: '45962',
      country: 'USA'
    };
    return of(user);
  }
}
