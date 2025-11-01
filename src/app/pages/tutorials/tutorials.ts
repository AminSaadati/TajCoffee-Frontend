import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';  
import { MatButtonModule } from '@angular/material/button';  
import { RouterModule } from '@angular/router';  
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tutorials',
     imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule  ],
    standalone: true,  // حتماً اضافه شود
  templateUrl: './tutorials.html',
  styleUrl: './tutorials.css',
})export class TutorialsComponent {
  tutorials = [
    {
      title: 'دم‌آوری با فرنچ پرس',
      description: 'آموزش کامل دم‌آوری قهوه با فرنچ پرس.',
      link: '/tutorials/french-press',
      image: 'assets/images/french-press.jpg' // اضافه شد
    },
    {
      title: 'قهوه اسپرسو در خانه',
      description: 'راهنمای کامل تهیه اسپرسو حرفه‌ای در منزل.',
      link: '/tutorials/espresso',
      image: 'assets/images/espresso.jpg'
    },
    {
      title: 'قهوه سرد (Cold Brew)',
      description: 'روش درست کردن Cold Brew در خانه.',
      link: '/tutorials/cold-brew',
      image: 'assets/images/cold-brew.jpg'
    }
  ];
}

