import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ScheduleServicesService } from 'src/app/services/schedule-services.service';

@Component({
  selector: 'app-schedule-service',
  templateUrl: './schedule-service.component.html',
  styleUrls: ['./schedule-service.component.css']
})
export class ScheduleServiceComponent implements OnInit {

  getAQuoteServicesReq = [
    { id: 1, label: "New Account Setup", status: true },
    { id: 2, label: "Heating", status: false },
    { id: 3, label: "Cooling", status: false },
    { id: 4, label: "Water Heaters", status: false },
    { id: 5, label: "Tankless", status: false },
    { id: 6, label: "Home Inspection", status: false },
    { id: 7, label: "Energy Audit", status: false },
    { id: 8, label: 'HVAC Maint. / Repair', status: false },
    { id: 9, label: "Chimney Lining", status: false },
    { id: 10, label: "Duct Cleaning", status: false },
    { id: 11, label: "Other", status: false },
  ];

  scheduleService = [
    { id: 1, label: "New Account Setup", status: true },
    { id: 2, label: "Heating", status: false },
    { id: 3, label: "Cooling", status: false },
    { id: 4, label: "Water Heaters", status: false },
    { id: 5, label: "Tankless", status: false },
    { id: 6, label: "Home Inspection", status: false },
    { id: 7, label: "Energy Audit", status: false },
    { id: 8, label: 'HVAC Maint. / Repair', status: false },
    { id: 9, label: "Chimney Lining", status: false },
    { id: 10, label: "Duct Cleaning", status: false },
    { id: 11, label: "Other", status: false },
  ];

  squareFootageOfProp = [
    { id: 1, label: "Less than 1000 sq. ft.", status: true },
    { id: 2, label: "1000 - 2000 sq. ft.", status: false },
    { id: 3, label: "2000 - 3000 sq. ft.", status: false },
    { id: 4, label: "3000 - 4000 sq. ft.", status: false },
    { id: 5, label: "4000+ sq. ft.", status: false },
  ];

  selectedServiceRequiredGetQuote: string = '';
  selectedScheduleService: string = '';
  selectedSquareFootageOfProperty: string = '';
  subscriptionCheckbox: any;




  selectChangeHandler1(event: any) {
    this.selectedServiceRequiredGetQuote = event.target.value;
  }
  selectChangeHandler2(event: any) {
    this.selectedScheduleService = event.target.value;
  }
  selectChangeHandler3(event: any) {
    this.selectedSquareFootageOfProperty = event.target.value;
  }

  constructor(private spinner: NgxSpinnerService, private http: HttpClient, private _scheduleService: ScheduleServicesService, private _toast: NgToastService) {

  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  quoteFormData(form: NgForm) {
    console.log(form.value);
    console.log(this.selectedServiceRequiredGetQuote);
    if (this.selectedServiceRequiredGetQuote == '') {
      this.selectedServiceRequiredGetQuote = 'New Account Setup';
    }
    this.spinner.show();

    this._scheduleService.sendGetQuoteData(form.value.yourName, form.value.email, form.value.phoneNumber, form.value.postalCode, form.value.addDetails, this.selectedServiceRequiredGetQuote).subscribe(
      res => {
        setTimeout(() => {
         
          this.spinner.hide();
        }, 1000);
        this._toast.success({ detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br' });
        setTimeout(function () {
          window.location.href = '/thank-you'
        }, 1000);

      },
      err => {
        this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });

      }, () => console.log("QUOTE FORM SUMBITTED SUCCESSFULLY"))
  }

  scheduleServiceFormData(form: NgForm) {
    this.spinner.show();

    console.log(form.value);
    const subsVal = document.querySelector("#flexCheckDefault") as HTMLInputElement;
    if (subsVal.checked == true) {
      this.subscriptionCheckbox = "Yes";
    }
    else {
      this.subscriptionCheckbox = "No";
    }

    if (this.selectedScheduleService == '') {
      this.selectedScheduleService = 'New Account Setup';
    }
    if (this.selectedSquareFootageOfProperty == '') {
      this.selectedSquareFootageOfProperty = 'Less than 1000 sq. ft.';
    }

    this._scheduleService.sendScheduleServiceData(form.value.firstName, form.value.lastName, form.value.email, form.value.phoneNumber, form.value.addPhoneNumber, form.value.address, form.value.state, "Canada", form.value.city, form.value.postalCode, form.value.addDetails, this.selectedScheduleService, this.selectedSquareFootageOfProperty, this.subscriptionCheckbox,form.value.promoCode).subscribe(
      res => {
        setTimeout(() => {
         
          this.spinner.hide();
        }, 1000);
        this._toast.success({ detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br' });
        setTimeout(function () {
          window.location.href = '/thank-you'
        }, 1000);

      },
      err => {
        this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });

      }, () => console.log("SCHEDULE FORM SUMBITTED SUCCESSFULLY"))
  }


}
