import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { NgxSpinnerService } from 'ngx-spinner';
import { ScheduleServicesService } from 'src/app/services/schedule-services.service';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-get-free-quote',
  templateUrl: './get-free-quote.component.html',
  styleUrls: ['./get-free-quote.component.css']
})
export class GetFreeQuoteComponent implements OnInit {

  getAQuoteServicesReq = [
    { id: 1, label: "Heating", status: true },
    { id: 2, label: "Cooling", status: false },
    { id: 3, label: "Water Heaters", status: false },
    { id: 4, label: "Tankless", status: false },
    { id: 5, label: "Home Inspection", status: false },
    { id: 6, label: "Energy Audit", status: false },
    { id: 7, label: 'HVAC Maint. / Repair', status: false },
    { id: 8, label: "Chimney Lining", status: false },
    { id: 9, label: "Duct Cleaning", status: false },
    { id: 10, label: "Other", status: false },
  ];

  fullAddress: string = "";

  selectedServiceRequiredGetQuote: string = '';
  selectedScheduleService: string = '';
  selectedSquareFootageOfProperty: string = '';
  subscriptionCheckbox: any;

  phoneNumberInputMask = createMask({
    mask: '(999) 999-9999',
  });
  addPhoneNumberInputMask = createMask({
    mask: '(999) 999-9999',
  });
  quotePhoneNumberInputMask = createMask({
    mask: '(999) 999-9999',
  });

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
  }

  quoteFormData(form: NgForm) {
    console.log(form.value);
    console.log(this.selectedServiceRequiredGetQuote);
    if (this.selectedServiceRequiredGetQuote == '') {
      this.selectedServiceRequiredGetQuote = 'Heating';
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
}
