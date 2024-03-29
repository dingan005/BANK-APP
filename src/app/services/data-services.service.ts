import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServicesService {
  database: any = {
    100080009000: {
      acno: 100080009000,
      name: 'munna',
      password: 'munna1234',
      balance: 12000,
      PAN: '',
      Aadhar: '',
    },
    200050008000: {
      acno: 200050008000,
      name: 'Rahul',
      password: 'rahul1234',
      balance: 10000,
      PAN: '',
      Aadhar: '',
    },
    200088888000: {
      acno: 200088888000,
      name: 'Shaheer',
      password: 'shaheer1234',
      balance: 15000,
      PAN: '',
      Aadhar: '',
    },
    200088889000: {
      acno: 200088889000,
      name: 'Shanid',
      password: 'shanid1234',
      balance: 15000,
      PAN: '',
      Aadhar: '',
    },
    200088779000: {
      acno: 200088779000,
      name: 'Dimal',
      password: 'dimal1234',
      balance: 15000,
      PAN: '',
      Aadhar: '',
    },
  };
  constructor() {}

  storeDatabase() {
    localStorage.setItem('database', JSON.stringify(this.database));
  }

  signUp(acno: any, uname: any, pswd: any, balance: number) {
    if (acno in this.database) {
      alert('User already exist');
    } else {
      this.database[acno] = {
        acno: acno,
        name: uname,
        password: pswd,
        balance: balance,
        PAN: '',
        Aadhar: '',
      };
      // localStorage.setItem('user', JSON.stringify(this.database));
      this.storeDatabase;
      console.log(this.database);
    }
  }
}
