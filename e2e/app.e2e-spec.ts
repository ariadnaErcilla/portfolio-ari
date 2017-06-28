import { NgPortfolioAriPage } from './app.po';

describe('ng-portfolio-ari App', () => {
  let page: NgPortfolioAriPage;

  beforeEach(() => {
    page = new NgPortfolioAriPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
