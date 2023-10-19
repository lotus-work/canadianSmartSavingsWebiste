import {HttpClient} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {NgToastService} from 'ng-angular-popup';
import {NgxSpinnerService} from 'ngx-spinner';
import {ScheduleServicesService} from 'src/app/services/schedule-services.service';
import {Options} from 'ngx-google-places-autocomplete/objects/options/options';
import {createMask} from '@ngneat/input-mask';
import {Address} from 'ngx-google-places-autocomplete/objects/address';

@Component({selector: 'app-schedule-service', templateUrl: './schedule-service.component.html', styleUrls: ['./schedule-service.component.css']})
export class ScheduleServiceComponent implements OnInit {

    options : any = {
        componentRestrictions: {
            country: 'CA'
        }
    }

    getAQuoteServicesReq = [
        {
            id: 1,
            label: "Heating",
            status: true
        },
        {
            id: 2,
            label: "Cooling",
            status: false
        },
        {
            id: 3,
            label: "Water Heaters",
            status: false
        },
        {
            id: 4,
            label: "Tankless",
            status: false
        }, {
            id: 5,
            label: "Home Inspection",
            status: false
        }, {
            id: 6,
            label: "Energy Audit",
            status: false
        }, {
            id: 7,
            label: 'HVAC Maint. / Repair',
            status: false
        }, {
            id: 8,
            label: "Chimney Lining",
            status: false
        }, {
            id: 9,
            label: "Duct Cleaning",
            status: false
        }, {
            id: 10,
            label: "Other",
            status: false
        },
    ];

    scheduleService = [
        {
            id: 1,
            label: "Heating",
            status: true
        },
        {
            id: 2,
            label: "Cooling",
            status: false
        },
        {
            id: 3,
            label: "Water Heaters",
            status: false
        },
        {
            id: 4,
            label: "Tankless",
            status: false
        }, {
            id: 5,
            label: "Home Inspection",
            status: false
        }, {
            id: 6,
            label: "Energy Audit",
            status: false
        }, {
            id: 7,
            label: 'HVAC Maint. / Repair',
            status: false
        }, {
            id: 8,
            label: "Chimney Lining",
            status: false
        }, {
            id: 9,
            label: "Duct Cleaning",
            status: false
        }, {
            id: 10,
            label: "Other",
            status: false
        },
    ];

    squareFootageOfProp = [
        {
            id: 1,
            label: "Less than 1000 sq. ft.",
            status: true
        },
        {
            id: 2,
            label: "1000 - 2000 sq. ft.",
            status: false
        },
        {
            id: 3,
            label: "2000 - 3000 sq. ft.",
            status: false
        },
        {
            id: 4,
            label: "3000 - 4000 sq. ft.",
            status: false
        }, {
            id: 5,
            label: "4000+ sq. ft.",
            status: false
        },
    ];

    fullAddress : string = "";

    selectedServiceRequiredGetQuote : string = '';
    selectedScheduleService : string = '';
    selectedSquareFootageOfProperty : string = '';
    subscriptionCheckbox : any;

    phoneNumberInputMask = createMask({mask: '(999) 999-9999'});
    addPhoneNumberInputMask = createMask({mask: '(999) 999-9999'});
    quotePhoneNumberInputMask = createMask({mask: '(999) 999-9999'});


    selectChangeHandler1(event : any) {
        this.selectedServiceRequiredGetQuote = event.target.value;
    }
    selectChangeHandler2(event : any) {
        this.selectedScheduleService = event.target.value;
    }
    selectChangeHandler3(event : any) {
        this.selectedSquareFootageOfProperty = event.target.value;
    }

    constructor(private spinner : NgxSpinnerService, private http : HttpClient, private _scheduleService : ScheduleServicesService, private _toast : NgToastService) {}

    ngOnInit(): void {
        this.spinner.show();

        setTimeout(() => { /** spinner ends after 5 seconds */
            this.spinner.hide();
        }, 2000);
    }

    handleAddressChange(address : Address) {
        this.fullAddress = address.formatted_address;
        // console.log(address.formatted_address)
        // console.log(address.geometry.location.lat())
        // console.log(address.geometry.location.lng())
        // console.log(address.address_components)

    }

    quoteFormData(form : NgForm) {
        console.log(form.value);
        console.log(this.selectedServiceRequiredGetQuote);
        if (this.selectedServiceRequiredGetQuote == '') {
            this.selectedServiceRequiredGetQuote = 'Heating';
        }
        this.spinner.show();

        this._scheduleService.sendGetQuoteData(form.value.yourName, form.value.email, form.value.phoneNumber, form.value.postalCode, form.value.addDetails, this.selectedServiceRequiredGetQuote).subscribe(res => {
            console.log(res);
            if (res.status == "success") {
                setTimeout(() => {
                    this.spinner.hide();
                }, 1000);
                this._toast.success({detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br'});
                setTimeout(function () {
                    window.location.href = '/thank-you'
                }, 1000);
            } else if (res.status == "error") {
              alert(res.message);
              location.reload;
                setTimeout(() => {
                    this.spinner.hide();
                    window.location.reload();
                }, 1000);

            } else if (res.status == "timeout") {
              alert(res.message);
              location.reload;
                setTimeout(() => {
                    this.spinner.hide();
                    window.location.reload();
                }, 1000);

            }


        }, err => {
           // this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });

            alert('An error occurred. Please try after sometime!');
            location.reload;
              setTimeout(() => {
                  this.spinner.hide();
                  window.location.reload();
              }, 1000);
          


        }, () => console.log("QUOTE FORM SUMBITTED SUCCESSFULLY"))
    }

    scheduleServiceFormData(form : NgForm) {
        this.spinner.show();

        console.log(form.value);
        // const subsVal = document.querySelector("#flexCheckDefault") as HTMLInputElement;
        // if (subsVal.checked == true) {
        // this.subscriptionCheckbox = "Yes";
        // }
        // else {
        // this.subscriptionCheckbox = "No";
        // }

        if (this.selectedScheduleService == '') {
            this.selectedScheduleService = 'Heating';
        }
        if (this.selectedSquareFootageOfProperty == '') {
            this.selectedSquareFootageOfProperty = 'Less than 1000 sq. ft.';
        }

        this._scheduleService.sendScheduleServiceData(form.value.firstName, form.value.lastName, form.value.email, form.value.phoneNumber, form.value.addPhoneNumber, this.fullAddress, form.value.addDetails, this.selectedScheduleService, this.selectedSquareFootageOfProperty).subscribe(res => {
         
          console.log(res);
          if (res.status == "success") {
            setTimeout(() => {
              this.spinner.hide();
          }, 1000);
          this._toast.success({detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br'});
          setTimeout(function () {
              window.location.href = '/thank-you'
          }, 1000);
          } else if (res.status == "error") {
            alert(res.message);
            location.reload;
              setTimeout(() => {
                  this.spinner.hide();
                  window.location.reload();
              }, 1000);

          } else if (res.status == "timeout") {
            alert(res.message);
            location.reload;
              setTimeout(() => {
                  this.spinner.hide();
                  window.location.reload();
              }, 1000);

          }
         
         

        }, err => {

          // this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });

          alert('An error occurred. Please try after sometime!');
          location.reload;
            setTimeout(() => {
                this.spinner.hide();
                window.location.reload();
            }, 1000);
            
        }, () => console.log("SCHEDULE FORM SUMBITTED SUCCESSFULLY"))
    }


}
