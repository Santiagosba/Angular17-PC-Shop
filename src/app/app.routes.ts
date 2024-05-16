import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VentaComponent } from './venta/venta.component';
import { AdminComponent } from './admin/admin.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'venta', component: VentaComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'footer', component: FooterComponent}
];
