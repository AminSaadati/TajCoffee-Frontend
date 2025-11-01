import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { TutorialsComponent } from './pages/tutorials/tutorials';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' } // مسیر پیش‌فرض برای آدرس‌های اشتباه
];
