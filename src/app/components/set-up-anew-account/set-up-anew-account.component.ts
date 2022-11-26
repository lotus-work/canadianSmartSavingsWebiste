import { Component, OnInit } from '@angular/core';
import { createMask } from '@ngneat/input-mask';
import { NgxSpinnerService } from 'ngx-spinner';
import { ScheduleServicesService } from 'src/app/services/schedule-services.service';
import { Options } from 'ngx-google-places-autocomplete/objects/options/options';

import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { NgForm } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-set-up-anew-account',
  templateUrl: './set-up-anew-account.component.html',
  styleUrls: ['./set-up-anew-account.component.css']
})
export class SetUpANewAccountComponent implements OnInit {


  options: any = {
    componentRestrictions: { country: 'CA' }
  }

  isVisibleForm1: boolean = true;
  isVisibleForm2: boolean = false;
  progressWidth: number = 50;
  step: number = 1;


  //

  phoneNumberInputMask = createMask({
    mask: '(999) 999-9999',
  });
  
  selectedServiceType: string = "Residential";
  serviceType: string[] = ['Residential', 'Business'];

  selectedBuyingOrRenting: string = "Buying";
  buyingOrRenting: string[] = ['Buying', 'Renting'];

  fullAddress: string = "";
  ownershipOrLeaseDate : string ="";
  firstName : string = "";
  lastName : string = "";
  email : string = "";
  phone : string = "";
  dob : string = "";
  addName : string = "";
  company: string = "";
  constructor(private _scheduleService: ScheduleServicesService, private spinner: NgxSpinnerService, private _toast: NgToastService) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);

  }
  handleAddressChange(address: Address) {
    this.fullAddress = address.formatted_address;
    // console.log(address.formatted_address)
    // console.log(address.geometry.location.lat())
    // console.log(address.geometry.location.lng())
    // console.log(address.address_components)

  }
  showPre() {
    const bar = document.getElementById('progress-bar');

    if (bar != null) {
      bar.style.setProperty('width', '50%');
    }
    this.progressWidth = 50;
    this.step = 1;
    this.isVisibleForm1 = true;
    this.isVisibleForm2 = false;
  }
  showNext() {
    const bar = document.getElementById('progress-bar');

    if (bar != null) {
      bar.style.setProperty('width', '100%');
    }
    this.step = 2;
    this.progressWidth = 100;
    
    this.isVisibleForm1 = false;
    this.isVisibleForm2 = true;
  }

  form1Data(form : NgForm){
    this.ownershipOrLeaseDate = form.value.ownershipLeaseDate;

  }
  form2Data(form : NgForm){
    this.spinner.show();

    this.company = form.value.companyName;
    this.firstName = form.value.firstName;
    this.lastName = form.value.lastName;
    this.email = form.value.email;
    this.phone = form.value.phoneNumber;
    this.dob = form.value.dob;
    this.addName = form.value.addName;
    
    console.log(this.selectedBuyingOrRenting);
    console.log(this.fullAddress);
    console.log(this.ownershipOrLeaseDate );
    
    
    console.log(this.selectedServiceType);
    
    console.log(this.company);
    console.log(this.firstName );
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.phone);
    console.log( this.dob);
    console.log(this.addName );

     this._scheduleService.newAccountData(this.selectedBuyingOrRenting, this.fullAddress, this.ownershipOrLeaseDate, this.selectedServiceType, this.company, this.firstName, this.lastName, this.email, this.phone, this.dob, this.addName).subscribe(
      res => {
        setTimeout(() => {
         
          this.spinner.hide();
        }, 1000);
        this._toast.success({ detail: "SUCCESS", summary: 'Form successfully submitted', position: 'br' });
        setTimeout( () => {
          window.location.href ="/success-new-account?firstName=" + this.firstName + "&lastName=" + this.lastName+ "&email=" + this.email + "&phoneNumber=" + this.phone + "&address=" + this.fullAddress + "&ownerShipOrLeaseDate=" + this.ownershipOrLeaseDate;
        }, 1000);

      },
      err => {
        this._toast.warning({ detail: " FAILED", summary: 'Please try after sometime', position: 'br' });

      }, () => console.log("NEW Account FORM SUMBITTED SUCCESSFULLY"))


  }

}
