import { Angular2Page } from './app.po';

describe('app h2', function() {
  let page: Angular2Page;

  beforeEach(() => {
    page = new Angular2Page();
  });

  it('should display message saying "hi, badass!"', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hi, badass!');
  });
});
