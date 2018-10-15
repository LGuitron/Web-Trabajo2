import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { ServiceComponent } from './components/service/service.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ClientComponent } from './components/client/client.component';

const routes: Routes = [
  { path: 'vehicles', component: VehicleComponent },
  { path: 'vehicles/:id/service', component: ServiceComponent },
  { path: 'services/:id', component: ServiceDetailComponent },
  { path: '', component: MainMenuComponent },
  { path: 'cliente', component: ClientComponent },
];

export const RoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes, { enableTracing: true }  );
