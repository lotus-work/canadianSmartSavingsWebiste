import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ScheduleServicesService } from 'src/app/services/schedule-services.service';

@Component({
  selector: 'app-set-up-anew-account',
  templateUrl: './set-up-anew-account.component.html',
  styleUrls: ['./set-up-anew-account.component.css']
})
export class SetUpANewAccountComponent implements OnInit {
  isVisible: boolean = true;
  progressWidth: number = 50;
  step: number = 1;
  postalCodeRes: any = [];
  postalAddFound: boolean = false;
  postalAddError: boolean = false;

  getPinCodeCity: string = "";
  getPinCodeProvince: string = "";

  // 
  postalCode : string ="";

  provinceCanada = [
    { id: 1, label: "Alberta", code: "AB" },
    { id: 2, label: "British Columbia", code: "BC"  },
    { id: 3, label: "Manitoba", code: "MB"  },
    { id: 4, label: "New Brunswick", code: "NB"  },
    { id: 5, label: "Newfoundland and Labrador", code: "NL"  },
    { id: 6, label: "Nova Scotia", code: "NS"  },
    { id: 7, label: "Ontario", code: "ON"  },
    { id: 8, label: "Prince Edward Island", code: "PE"  },
    { id: 9, label: "Quebec", code: "QC"  },
    { id: 10, label: "Saskatchewan", code: "SK"  },
    { id: 11, label: "Northwest Territories", code: "NT"  },
    { id: 12, label: "Nunavut", code: "NU"  },
    { id: 13, label: "Yukon", code: "YT"  }
  ];
  constructor(private _postalCodeApi: ScheduleServicesService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    console.log(this.postalCodeRes);
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }
  
  showPre() {
    const bar = document.getElementById('progress-bar');

    if (bar != null) {
      bar.style.setProperty('width', '50%');
    }
    this.progressWidth = 50;
    this.step = 1;
    this.isVisible = true;
  }
  showNext() {
    const bar = document.getElementById('progress-bar');

    if (bar != null) {
      bar.style.setProperty('width', '100%');
    }
    this.step = 2;
    this.progressWidth = 100;
    this.isVisible = false;
  }

  findAddress(postalCode: string) {
    this.spinner.show();

    console.log(postalCode);
    this._postalCodeApi.findPostalCodeAddress(postalCode).subscribe(
      res => {
        setTimeout(() => {
         
          this.spinner.hide();
        }, 1000);
        this.postalCodeRes[0] = res;
       
        if (!!this.postalCodeRes[0].standard) {
          this.postalAddFound = true;
          this.postalAddError = false;
          this.getPinCodeCity = this.postalCodeRes[0].standard.city;
         
         
          for(var i=0;i<this.provinceCanada.length;i++)
          {
            if(this.provinceCanada[i].code == this.postalCodeRes[0].standard.prov)
            {
              this.getPinCodeProvince = this.provinceCanada[i].label;
       
            }
          }
        }
        else{
          this.postalAddError = true;
          this.postalAddFound = false;
        }
        },
      err => {
         alert("ERROR IN DATA FETCH");
      })
  }

}
