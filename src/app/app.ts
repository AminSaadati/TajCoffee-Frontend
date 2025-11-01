import { Component, ViewChild } from '@angular/core';
import { signal } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  @ViewChild('drawer') drawer!: MatSidenav;

  // Signal برای کنترل Sidenav
  isSidenavOpen = signal(false);

  // عنوان صفحه
  protected readonly title = signal('Taj Coffee');

  // باز/بسته کردن Sidenav
  toggleSidenav() {
    this.drawer.toggle();
  }

  // بستن Sidenav هنگام کلیک روی لینک
  closeSidenav() {
    this.drawer.close();
  }
}
