import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./app.component.css']
})
export class DetailsComponent implements OnInit {
  userId?: number;
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.userId = this.route.snapshot.params['id'];
    //console.log("USERID IS " + this.userId);
  }

  updateBalance(amount: string) {
    var intAmount = Number(amount);
    //const sqlCommand = "UPDATE familysavingstracker.savings_tracker SET balance+" + amount + " WHERE id=" + this.userId;
    this.http.post<any>('/weatherforecast', { amount: intAmount, id: this.userId}, this.headers).subscribe(data => {  });
  }

}

interface accountToBeUpdated {
  id: number;
  amount: number;
}
