import { Material2Page } from './app.po';

describe('material2 App', function() {
  let page: Material2Page;

  beforeEach(() => {
    page = new Material2Page();
  });

  it('should display message saying home works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home works!');
  });
});
