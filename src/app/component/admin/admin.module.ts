import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { ContactDetailsComponent } from './component/contact-details/contact-details.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { MaterialUiModule } from 'src/app/module/material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ContactsComponent,
    ContactDetailsComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialUiModule,
  ]
})
export class AdminModule { }
