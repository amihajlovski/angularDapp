import { Component } from '@angular/core';
import web3 from 'web3';
import { BLOCKCHAIN_NETWORK_URL } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  web3 = web3;

  initializeWeb3() {
    this.web3 = new web3(
      new web3.providers.HttpProvider(BLOCKCHAIN_NETWORK_URL),
    );
  }

  constructor() {
    this.initializeWeb3();
    this.web3.eth.getBalance('0x7F3fff8bBE0c07A0c27f3AF62FEAE1AD5c8199FA', (err, res) => {
      console.log(err, res);
    })
  }
}
