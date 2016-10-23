import { RbPage } from './app.po';

describe('rb App', function() {
  let page: RbPage;

  beforeEach(() => {
    page = new RbPage();
  });

  it('should display message saying rb', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb');
  });
});
