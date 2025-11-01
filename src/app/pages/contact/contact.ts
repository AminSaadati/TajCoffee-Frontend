import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  
    standalone: true,  // حتماً اضافه شود
   imports: [CommonModule, MatCardModule, MatButtonModule,MatIconModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {

}
