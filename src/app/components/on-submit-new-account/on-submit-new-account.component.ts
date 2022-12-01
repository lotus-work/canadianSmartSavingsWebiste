import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-on-submit-new-account',
  templateUrl: './on-submit-new-account.component.html',
  styleUrls: ['./on-submit-new-account.component.css']
})
export class OnSubmitNewAccountComponent implements OnInit {

  firstName: string = "";
  lastName: string = "";
  email: string = "";
  phone: string = "";
  address: string ="";
  ownerShipOrLeaseDate: string = ""
  
  constructor(private spinner: NgxSpinnerService) { 
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); 
    this.firstName = String(urlParams.get('firstName'));
    this.lastName = String(urlParams.get('lastName'));
    this.email = String(urlParams.get('email'));
    this.phone = String(urlParams.get('phoneNumber'));
    this.address = String(urlParams.get('address'));
    this.ownerShipOrLeaseDate = String(urlParams.get('ownerShipOrLeaseDate'));
  }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
