import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientComponent } from './components/client/client.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { ServiceComponent } from './components/service/service.component';
import { RoutingModule } from './routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    VehicleComponent,
    ServiceComponent,
    ServiceDetailComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


