import { FoodWebSitePage } from './app.po';

describe('food-web-site App', () => {
  let page: FoodWebSitePage;

  beforeEach(() => {
    page = new FoodWebSitePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
