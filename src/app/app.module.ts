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

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'drivers', component: DriversComponent },
  { path: 'routes', component: RoutesComponent },
  { path: 'completed-works', component: CompletedWorksComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CompletedWorksComponent,
    HomeComponent,
    DriversComponent,
    RoutesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
