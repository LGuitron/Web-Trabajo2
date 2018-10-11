import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { ServiceComponent } from './components/service/service.component';

const routes: Routes = [
  { path: 'vehicles', component: VehicleComponent },
  { path: 'vehicles/:placa/service', component: ServiceComponent },
  { path: '', component: VehicleComponent },


];

export const RoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes, { enableTracing: true }  );
