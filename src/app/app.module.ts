import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'routes', component: RoutesComponent },
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
