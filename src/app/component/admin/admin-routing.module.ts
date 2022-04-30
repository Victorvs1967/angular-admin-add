import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { ContactDetailsComponent } from './component/contact-details/contact-details.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { HomeComponent } from './component/home/home.component';
import { UserResolver } from './resolver/user.resolver';
import { UsersResolver } from './resolver/users.resolver';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent,
    children: [
      { path: 'contacts', component: ContactsComponent, resolve: {
        users: UsersResolver
      } },
      { path: 'contacts/user/:id', component: ContactDetailsComponent, resolve: {
        user: UserResolver
      } },
      { path: 'contacts/user', redirectTo: 'contacts', pathMatch: 'full' },
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
