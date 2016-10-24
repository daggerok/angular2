import { browser, element, by } from 'protractor';

export class RbPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('a.navbar-brand div')).getText();
  }
}
