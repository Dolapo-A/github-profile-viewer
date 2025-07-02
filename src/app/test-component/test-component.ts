import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TestService } from '../test-service';

@Component({
  selector: 'app-test-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent {
  name: string = 'Dolapo';
  age: number = 18;

  data: string[];
  constructor(private testService: TestService) {
    this.data = this.testService.getData();
  }
}
