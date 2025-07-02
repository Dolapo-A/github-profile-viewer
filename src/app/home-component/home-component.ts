import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceName } from '../interface-name';
import { TestService } from '../test-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  constructor(private router: Router, private testService: TestService) {}
  goToAbout() {
    this.router.navigate(['/about']);
  }

  username = 'Dolapo-A'
  siteLists!: InterfaceName[];

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
}
