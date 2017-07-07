import { A4appPage } from './app.po';

describe('a4app App', () => {
  let page: A4appPage;

  beforeEach(() => {
    page = new A4appPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
