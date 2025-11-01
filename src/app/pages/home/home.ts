import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-home',
   imports: [
  CommonModule,
  RouterModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule],
  standalone: true,  // حتماً اضافه شود
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {

 isSidenavOpen = false;
 products = [
    { name: 'قهوه ترک', price: 120000, image: 'assets/images/coffee1.jpg', isNew: true },
    { name: 'قهوه اسپرسو', price: 150000, image: 'assets/images/coffee2.jpg', isNew: false },
    { name: 'قهوه فرانسه', price: 130000, image: 'assets/images/coffee3.jpg', isNew: true },
    { name: 'کاپوچینو', price: 160000, image: 'assets/images/coffee4.jpg', isNew: false },
    { name: 'لاته', price: 140000, image: 'assets/images/coffee5.jpg', isNew: false },
    { name: 'موکا', price: 170000, image: 'assets/images/coffee6.jpg', isNew: true },
  ];

  tutorials = [
    { title: 'طرز تهیه اسپرسو', description: 'آموزش حرفه‌ای اسپرسو در خانه', image: 'assets/images/tutorial1.jpg', link: '/tutorials/1' },
    { title: 'طرز تهیه کاپوچینو', description: 'دم‌آوری کاپوچینو خوشمزه و کرمی', image: 'assets/images/tutorial2.jpg', link: '/tutorials/2' },
    { title: 'طرز تهیه لاته', description: 'آموزش لاته با هنر لاته آرت', image: 'assets/images/tutorial3.jpg', link: '/tutorials/3' },
    { title: 'طرز تهیه موکا', description: 'دم‌آوری موکا با طعم شکلاتی', image: 'assets/images/tutorial4.jpg', link: '/tutorials/4' },
    { title: 'قهوه فرانسه', description: 'روش دم‌آوری قهوه فرانسه', image: 'assets/images/tutorial5.jpg', link: '/tutorials/5' },
  ];
}  
