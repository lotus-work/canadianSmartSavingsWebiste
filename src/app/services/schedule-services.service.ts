import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServicesService {

  constructor(private http: HttpClient) { }

  sendGetQuoteData( yourName: string,  email: string, phoneNumber: string, postalCode: string, addDetails: string,serviceReq: string): Observable<boolean> {
    return this.http.post<boolean>("https://thebackend-weekend.herokuapp.com/canadian-smart-savings/get-a-quote", {

      yourName:yourName,
      email:email,
      phoneNumber:phoneNumber,
      postalCode:postalCode,
      addDetails:addDetails,
      serviceReq:serviceReq
    }).pipe(catchError(this.errorHandler));
  }

  sendScheduleServiceData( firstName: string,  lastName: string, email: string, phoneNumber: string, addPhoneNumber: string,state: string,country: string,city: string,address: string,postalCode: string,addDetails: string,serviceReq: string, squareFootageOfProp: string): Observable<boolean> {
    return this.http.post<boolean>("https://thebackend-weekend.herokuapp.com/canadian-smart-savings/schedule-service", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      addPhoneNumber: addPhoneNumber,
      address: address,
      state: state,
      country: country,
      city: city,
      postalCode: postalCode,
      addDetails: addDetails,
      serviceReq: serviceReq,
      squareFootageOfProp: squareFootageOfProp
    }).pipe(catchError(this.errorHandler));
  }

  findPostalCodeAddress(postalCode: string)
  {
    return  this.http.get<any>("https://geocoder.ca/" + postalCode + "?json=1").pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse){
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
