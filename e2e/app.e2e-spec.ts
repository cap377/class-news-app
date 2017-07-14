import { ClassNewsAppPage } from './app.po';

describe('class-news-app App', () => {
  let page: ClassNewsAppPage;

  beforeEach(() => {
    page = new ClassNewsAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
