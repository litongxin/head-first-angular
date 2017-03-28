import { HeadFirstAngularPage } from './app.po';

describe('head-first-angular App', () => {
  let page: HeadFirstAngularPage;

  beforeEach(() => {
    page = new HeadFirstAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
