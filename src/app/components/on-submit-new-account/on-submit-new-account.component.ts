import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-on-submit-new-account',
  templateUrl: './on-submit-new-account.component.html',
  styleUrls: ['./on-submit-new-account.component.css']
})
export class OnSubmitNewAccountComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 2000);
  }

}
