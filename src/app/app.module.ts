import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './component/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './component/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './module/material-ui/material-ui.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialUiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
