import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-component',
  imports: [],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {
  constructor(private router: Router) { }
  
  goToHome() {
    this.router.navigate(['/home']);
  }
}
