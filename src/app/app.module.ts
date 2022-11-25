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
    OnSubmitNewAccountComponent
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
    GooglePlaceModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
