import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { GetEventComponent } from './event/get-event/get-event.component';
import { HomeComponent } from './home/home.component';
import { GetItcComponent } from './itc/get-itc/get-itc.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'event', component: GetEventComponent, pathMatch: 'full' },
  { path: 'event/create', component: CreateEventComponent, pathMatch: 'full' },
  { path: 'itc', component: GetItcComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
