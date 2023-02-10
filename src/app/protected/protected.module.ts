import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from '../material/material.module';
import { PublicationsComponent } from './dashboard/components/home/components/publications/publications.component';
import { PublicationComponent } from './dashboard/components/publication/publication.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { SideContentComponent } from './dashboard/components/side-content/side-content.component';
import { MakePublicationComponent } from './dashboard/components/make-publication/make-publication.component';


@NgModule({
  declarations: [
    DashboardComponent,
    LayoutComponent,
    HomeComponent,
    PublicationComponent,
    PublicationsComponent,
    SideContentComponent,
    MakePublicationComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProtectedModule { }
