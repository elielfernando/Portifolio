import { Component } from '@angular/core';
import { ProfileService } from '../services/profile';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  constructor(private profileService: ProfileService) {}
}
