import {Component, Input} from '@angular/core';
import {MenuItem} from '../../interfaces/menu-item';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-menuitem',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './menuitem.component.html',
  styleUrl: './menuitem.component.scss'
})
export class MenuitemComponent {

  @Input()  item: any;
}
