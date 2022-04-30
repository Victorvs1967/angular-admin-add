import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ContactDetailsComponent } from './component/contact-details/contact-details.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent,
    children: [
      { path: 'contacts', component: ContactsComponent },
      { path: 'contacts/user/:id', component: ContactDetailsComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
