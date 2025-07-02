import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceName } from '../interface-name';
import { TestService } from '../test-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home-component',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  faTwitter = faTwitter;
  faSearch = faSearch;
  faLink = faLink;
  faBuilding = faBuilding;
  faLocationDot = faLocationDot;

  username = 'Dolapo-A';
  siteLists!: InterfaceName[];

  @ViewChild('searchInput') searchInput!: ElementRef;
  constructor(private router: Router, private testService: TestService) {}
  goToAbout() {
    this.router.navigate(['/about']);
  }


  ngOnInit() {
    this.testService.getlist(this.username).subscribe({
      next: (data) => {
        this.siteLists = Array.isArray(data) ? data : [data];
        // console.log('Test user:', this.siteLists[0].login)
        // console.log('Data fetched successfully:', this.siteLists);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      },
      complete: () => {
        console.log('Data fetching completed successfully.');
      },
    });
  }

  foucusInput() {
    this.searchInput.nativeElement.focus();
  }
}
