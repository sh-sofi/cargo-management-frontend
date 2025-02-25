import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompletedWorksComponent } from './components/completed-works/completed-works.component';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { DriversComponent } from './components/drivers/drivers.component';
import { RoutesComponent } from './components/routes/routes.component';
import { CompletedWorksFormComponent } from './components/completed-works-form/completed-works-form.component';
import { CompletedWorksPageComponent } from './pages/completed-works-page/completed-works-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';

import { HttpClientModule } from '@angular/common/http';
// import { AuthInterceptor } from './interceptors/auth.interceptor';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DriversPageComponent } from './pages/drivers-page/drivers-page.component';
import { RoutesPageComponent } from './pages/routes-page/routes-page.component';
import { RoutesFormComponent } from './components/routes-form/routes-form.component';
import { DriversFormComponent } from './components/drivers-form/drivers-form.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'drivers', component: DriversPageComponent },
  { path: 'routes', component: RoutesPageComponent },
  { path: 'completed-works', component: CompletedWorksPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CompletedWorksComponent,
    HomeComponent,
    DriversComponent,
    RoutesComponent,
    CompletedWorksFormComponent,
    CompletedWorksPageComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    DriversPageComponent,
    RoutesPageComponent,
    RoutesFormComponent,
    DriversFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
