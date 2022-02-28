import { HttpClient } from "@angular/common/http";

export class AccountsService {
  public accounts?: AccountInfo[];

  constructor(http: HttpClient) {
    http.get<AccountInfo[]>('/weatherforecast').subscribe(result => {
      this.accounts = result;
    }, error => console.error(error));
  }

}

interface AccountInfo {
  firstName: string;
  lastName: string;
  lastTransactionDate: string;
  balance: number
}
