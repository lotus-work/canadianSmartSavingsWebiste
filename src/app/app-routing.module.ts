import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'thank-you', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
