import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-vendor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendor.html',
  styleUrls: ['./vendor.css']
})
export class Vendor {

  // 🧱 Sample project stock (you can later load dynamically)
  products = [
    { name: 'Cement', available: 120, unit: 'Bags', orderQty: 0 },
    { name: 'Steel', available: 80, unit: 'Tons', orderQty: 0 },
    { name: 'Sand', available: 200, unit: 'Loads', orderQty: 0 },
    { name: 'Bricks', available: 5000, unit: 'Pieces', orderQty: 0 }
  ];

  // 🧾 Submit Order
  placeOrder() {
    const selectedOrders = this.products
      .filter(p => p.orderQty > 0)
      .map(p => ({
        product: p.name,
        quantity: p.orderQty,
        unit: p.unit
      }));

    if (selectedOrders.length === 0) {
      alert('Please enter at least one product quantity');
      return;
    }
  

    console.log('Order Placed:', selectedOrders);

    // optional: store in localStorage
    localStorage.setItem('orders', JSON.stringify(selectedOrders));

    alert('Order placed successfully! 🚀');
  }
}