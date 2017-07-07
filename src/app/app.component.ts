import { Component } from '@angular/core';
import web3 from 'web3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  web3 = web3;

  initializeWeb3() {
    if (typeof web3 !== 'undefined') {
      this.web3 = new web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      this.web3 = new web3(
        new web3.providers.HttpProvider('http://localhost:8545'),
      );
    }
  }

  constructor() {
    this.initializeWeb3();
  }
}
