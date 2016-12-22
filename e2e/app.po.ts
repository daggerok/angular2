import { browser, element, by } from 'protractor';

export class Angular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getAppAngular2HomeH3Text() {
    // browser.waitForAngular();
    return element(by.id('e2e')).getText();
  }
}
