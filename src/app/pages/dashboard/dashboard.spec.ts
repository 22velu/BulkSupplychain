import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  constructor(private router: Router) {}

  goToVendor(product: any) {
    this.router.navigate(['/vendor'], {
      state: { product } 
    });
  }

  products = [
    { name: 'Cement', quantity: 120, unit: 'Bags' },
    { name: 'Steel', quantity: 80, unit: 'Tons' },
    { name: 'Sand', quantity: 200, unit: 'Loads' },
    { name: 'Bricks', quantity: 5000, unit: 'Pieces' },
    { name: 'Stones', quantity: 300, unit: 'Loads' }
  ];
}
