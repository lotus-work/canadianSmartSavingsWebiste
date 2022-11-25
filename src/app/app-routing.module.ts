import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OnSubmitNewAccountComponent } from './components/on-submit-new-account/on-submit-new-account.component';
import { SetUpANewAccountComponent } from './components/set-up-anew-account/set-up-anew-account.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'set-up-a-new-account', component: SetUpANewAccountComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'success-new-account', component: OnSubmitNewAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
