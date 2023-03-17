import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleServiceComponent } from './components/schedule-service/schedule-service.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ServiceAreasComponent } from './components/service-areas/service-areas.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ThankYouComponent } from './components/thank-you/thank-you.component';
import { NgxSpinnerModule } from 'ngx-spinner';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgToastModule } from "ng-angular-popup";
import { SetUpANewAccountComponent } from './components/set-up-anew-account/set-up-anew-account.component';
import { PopoverModule } from "ngx-smart-popover";
import { OnSubmitNewAccountComponent } from './components/on-submit-new-account/on-submit-new-account.component';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { InputMaskModule } from "@ngneat/input-mask";
import { LandingHomeComponent } from './components/landing-home/landing-home.component';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { LandingHelpComponent } from './components/landing-help/landing-help.component';
import { LandingHowItWorksComponent } from './components/landing-how-it-works/landing-how-it-works.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { PageIntroComponent } from './components/page-intro/page-intro.component';
import { CoreValuesComponent } from './components/core-values/core-values.component';
import { LandingTestimonialsComponent } from './components/landing-testimonials/landing-testimonials.component';
import { GetFreeQuoteComponent } from './components/get-free-quote/get-free-quote.component';
import { LandingContactComponent } from './components/landing-contact/landing-contact.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ScheduleServiceComponent,
    FooterComponent,
    ContactUsComponent,
    TestimonialsComponent,
    ServiceAreasComponent,
    ThankYouComponent,
    SetUpANewAccountComponent,
    OnSubmitNewAccountComponent,
    LandingHomeComponent,
    LandingNavbarComponent,
    LandingHelpComponent,
    LandingHowItWorksComponent,
    ServicesComponent,
    AboutUsComponent,
    WhyUsComponent,
    PageIntroComponent,
    CoreValuesComponent,
    LandingTestimonialsComponent,
    GetFreeQuoteComponent,
    LandingContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgToastModule ,
    PopoverModule,
    GooglePlaceModule,
    InputMaskModule.forRoot({ inputSelector: 'input', isAsync: true }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
