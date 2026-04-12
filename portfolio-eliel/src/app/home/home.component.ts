import { Component } from '@angular/core';
import { ProfileService } from '../services/profile';
import { MenuService } from '../services/menu';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private menuService: MenuService, private profileService: ProfileService) {}
}
