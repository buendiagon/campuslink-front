import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './dashboard/components/home/home.component';
import { MakePublicationComponent } from './dashboard/components/make-publication/make-publication.component';
import { PublicationComponent } from './dashboard/components/publication/publication.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home/:params', component: HomeComponent},
      { path: 'publication', component: PublicationComponent},
      { path: 'create-publication', component: MakePublicationComponent},
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
