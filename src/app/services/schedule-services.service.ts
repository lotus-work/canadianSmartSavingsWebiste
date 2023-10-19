import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleServicesService {

  constructor(private http: HttpClient) { }

  rootURL1 = "https://backendapi-9fts.onrender.com/";
  rootURL2 = "https://thebackend-weekend.herokuapp.com/";
  rootURL3 = "http://localhost:3000/";  
  rootURL4 = "https://web-production-6e19.up.railway.app/";
  sendGetQuoteData( yourName: string,  email: string, phoneNumber: string, postalCode: string, addDetails: string,serviceReq: string): Observable<any> {
    return this.http.post<any>(this.rootURL3 + "canadian-smart-savings/get-a-quote", {

      yourName:yourName,
      email:email,
      phoneNumber:phoneNumber,
      postalCode:postalCode,
      addDetails:addDetails,
      serviceReq:serviceReq
    }).pipe(catchError(this.errorHandler));
    // return of(false);
  }

  sendScheduleServiceData( firstName: string,  lastName: string, email: string, phoneNumber: string, addPhoneNumber: string, address: string,addDetails: string,serviceReq: string, squareFootageOfProp: string): Observable<any> {
    return this.http.post<any>(this.rootURL3 + "canadian-smart-savings/schedule-service", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      addPhoneNumber: addPhoneNumber,
      address: address,
      addDetails: addDetails,
      serviceReq: serviceReq,
      squareFootageOfProp: squareFootageOfProp
    }).pipe(catchError(this.errorHandler));
  }

  findPostalCodeAddress(postalCode: string)
  {
    return  this.http.get<any>("https://geocoder.ca/" + postalCode + "?json=1").pipe(catchError(this.errorHandler));
  }

  newAccountData(buyingOrRenting: string, address: string, ownershipOrLeaseDate: string, serviceType: string,companyName: string, firstName:string, lastName:string, email: string, phoneNumber: string, dob: string, addName: string, addPhoneNumber: string): Observable<any> {
    return this.http.post<any>(this.rootURL3 + "canadian-smart-savings/new-account", {
      buyingOrRenting: buyingOrRenting,
      address: address,
      ownershipOrLeaseDate: ownershipOrLeaseDate,
      serviceType: serviceType,
      companyName: companyName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      dob: dob,
      addName:addName,
      addPhoneNumber:addPhoneNumber
    }).pipe(catchError(this.errorHandler));
  }

  

  errorHandler(error: HttpErrorResponse){
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
