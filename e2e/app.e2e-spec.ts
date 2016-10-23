import { browser, element, by } from 'protractor';

describe('app E2E Tests', function () {

  let expectedMsg = 'app';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h4')).getText()).toEqual(expectedMsg);
  });

});
