import { ParachuteDemoPage } from './app.po';

describe('parachute-demo App', function() {
  let page: ParachuteDemoPage;

  beforeEach(() => {
    page = new ParachuteDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
