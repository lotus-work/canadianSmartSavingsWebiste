import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { GetFreeQuoteComponent } from './components/get-free-quote/get-free-quote.component';
import { HomeComponent } from './components/home/home.component';
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { OnSubmitNewAccountComponent } from './components/on-submit-new-account/on-submit-new-account.component';
import { SetUpANewAccountComponent } from './components/set-up-anew-account/set-up-anew-account.component';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { WhyUsComponent } from './components/why-us/why-us.component';

const routes: Routes = [
  { path: '', component: LandingHomeComponent },
  { path: 'set-up-a-new-account', component: SetUpANewAccountComponent },
  { path: 'thank-you', component: ThankYouComponent },
  { path: 'success-new-account', component: OnSubmitNewAccountComponent },
  { path: 'home', component: LandingHomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'why-us', component: WhyUsComponent},
  { path: 'get-free-quote', component: GetFreeQuoteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
