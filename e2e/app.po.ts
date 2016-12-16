import { browser, element, by } from 'protractor';

export class Material2Page {
  navigateTo() {
    return browser.get('/e2e');
  }

  getParagraphText() {
    return element(by.css('app-root p')).getText();
  }
}
