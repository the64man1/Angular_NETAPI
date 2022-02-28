import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './main.component.html',
  styleUrls: ['./app.component.css']
})
export class MainComponent {

  //constructor (private router: Router )

  public accounts?: AccountInfo[];

  constructor(http: HttpClient) {
    http.get<AccountInfo[]>('/weatherforecast').subscribe(result => {
      this.accounts = result;
    }, error => console.error(error));
  }

  //constructor(private router: Router, private accounts: AccountsService) {
  //  this.accounts = accounts;
  //}

}

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface AccountInfo {
  id: number,
  firstName: string;
  lastName: string;
  lastTransactionDate: string;
  balance: number
}
