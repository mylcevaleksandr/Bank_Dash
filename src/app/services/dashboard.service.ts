import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private toggleDashboard: boolean = true;
  public toggleDashboardSubject: Subject<boolean> = new Subject<boolean>;

  constructor() {
  }

  public setToggleDashboard(value: boolean) {
    this.toggleDashboard = value;
    this.toggleDashboardSubject.next(value);
  }

  public getToggleDashboard(): boolean {
    return this.toggleDashboard;
  }
}
