import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  getPortfolio(): Profile {
    const profile: Profile = {

      Email: 'elielfernando851@gmail.com',
      name: 'Eliel Fernando',
      WhatsApp: 'https://api.whatsapp.com/send?phone=2795814645&text=Ol%C3%A1%20eu%20estou%20no%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es',
      linkedIn: 'https://www.linkedin.com/in/eliel-fernando-2867ba2a0',
      Instagran: 'https://www.instagram.com/elielfernandoreis?igsh=aHphc3JqZzFrczFk'

      
    };
    return profile;
  }
}
