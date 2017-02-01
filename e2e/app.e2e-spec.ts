import { Testi6Page } from './app.po';

describe('testi6 App', function() {
  let page: Testi6Page;

  beforeEach(() => {
    page = new Testi6Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
