import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { ProductsComponent } from './pages/products/products';
import { TutorialsComponent } from './pages/tutorials/tutorials';
import { AboutComponent } from './pages/about/about';
import { ContactComponent } from './pages/contact/contact';
 
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'خانه'
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'محصولات'
  },
  {
    path: 'tutorials',
    component: TutorialsComponent,
    title: 'آموزش‌ها'
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'درباره ما'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'تماس با ما'
  },
  {
    path: '**',  // مسیر fallback
    redirectTo: ''
  }
];
