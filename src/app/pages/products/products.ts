import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // ← برای mat-card
import { MatButtonModule } from '@angular/material/button'; // ← اگر دکمه هم دارید
import { RouterModule } from '@angular/router'; // اگر لینک دارید
import { CommonModule } from '@angular/common';
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean; // <- این رو اضافه کنید
}

@Component({
  selector: 'app-products',
  imports: [CommonModule, MatCardModule, MatButtonModule , RouterModule      ],
  standalone: true,  // حتماً اضافه شود
  templateUrl: './products.html',
  styleUrl: './products.css',
}) 
export class ProductsComponent {


  products: Product[] = [
  { id: 1, name: 'قهوه عربیکا', price: 120000, image: 'assets/images/arabica.jpg' },
  { id: 2, name: 'قهوه روبوستا', price: 95000, image: 'assets/images/robusta.jpg' },
  { id: 3, name: 'قهوه ترک', price: 110000, image: 'assets/images/turkish.jpg' },
  { id: 4, name: 'اسپرسو آماده', price: 125000, image: 'assets/images/espresso.jpg' },
  { id: 5, name: 'پودر قهوه مخصوص', price: 130000, image: 'assets/images/coffee_powder.jpg' },
  { id: 6, name: 'قهوه سرد (Cold Brew)', price: 140000, image: 'assets/images/cold_brew.jpg' },
  { id: 7, name: 'فرنچ پرس', price: 80000, image: 'assets/images/french_press.jpg' },
  { id: 8, name: 'قهوه اسپرسو ماشین', price: 4500000, image: 'assets/images/espresso_machine.jpg' },
  { id: 9, name: 'کپسول قهوه', price: 90000, image: 'assets/images/coffee_capsule.jpg' },
  { id: 10, name: 'لیوان قهوه', price: 30000, image: 'assets/images/coffee_mug.jpg' },
];

}
