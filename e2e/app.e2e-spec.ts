import { AngularDappDemoPage } from './app.po';

describe('angular-dapp-demo App', () => {
  let page: AngularDappDemoPage;

  beforeEach(() => {
    page = new AngularDappDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
