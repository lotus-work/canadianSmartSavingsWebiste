import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(private spinner: NgxSpinnerService) {

  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

  quoteFormData(form: NgForm) {
    // console.log(form.value);
    // console.log(this.selectedServiceRequiredGetQuote);
    this.spinner.show();


    var http = new XMLHttpRequest();
    http.open("POST", "https://thebackend-weekend.herokuapp.com/canadian-smart-savings/get-a-quote", true);
    http.setRequestHeader("Content-type", "application/json");
    http.setRequestHeader('Access-Control-Allow-Origin', '*');
    http.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    http.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Origin, Authorization');

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          
          location.replace("/thank-you");
          
        }
      };
      this.spinner.hide();
    }, 1000);
    if (this.selectedServiceRequiredGetQuote == '') {
      this.selectedServiceRequiredGetQuote = 'New Account Setup';
    }
    const obj ={
      "yourName": form.value.yourName,
      "email": form.value.email,
      "phoneNumber": form.value.phoneNumber,
      "postalCode": form.value.postalCode,
      "addDetails": form.value.addDetails,
      "serviceReq": this.selectedServiceRequiredGetQuote
    };
    const myJSON = JSON.stringify(obj);
    http.send(myJSON);

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


    var http = new XMLHttpRequest();
    http.open("POST", "https://thebackend-weekend.herokuapp.com/canadian-smart-savings/schedule-service", true);
    http.setRequestHeader("Content-type", "application/json");
    http.setRequestHeader('Access-Control-Allow-Origin', '*');
    http.setRequestHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    http.setRequestHeader('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Origin, Authorization');

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          
          location.replace("/thank-you");
          
        }
      };
      this.spinner.hide();
    }, 1000);
   

    if (this.selectedScheduleService == '') {
      this.selectedScheduleService = 'New Account Setup';
    }
    if (this.selectedSquareFootageOfProperty == '') {
      this.selectedSquareFootageOfProperty = 'Less than 1000 sq. ft.';
    }

    const obj = {
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      email: form.value.email,
      phoneNumber: form.value.phoneNumber,
      addPhoneNumber: form.value.addPhoneNumber,
      address: form.value.address,
      state: form.value.state,
      country: "Canada",
      city: form.value.city,
      postalCode: form.value.postalCode,
      addDetails: form.value.addDetails,
      serviceReq: this.selectedScheduleService,
      squareFootageOfProp: this.selectedSquareFootageOfProperty,
      subscribtion: this.subscriptionCheckbox,
      promoCode: form.value.promoCode
    }
    const myJSON = JSON.stringify(obj);
    http.send(myJSON);
  }


}
