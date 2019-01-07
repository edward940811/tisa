import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SponsersComponent} from './sponsers/sponsers.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { SponserDetailComponent } from './sponser-detail/sponser-detail.component';

const routes: Routes = [];
routes.push(
  { path: 'sponsers', component: SponsersComponent },
  { path: 'sponsers/:id', component: SponserDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }

  );

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
