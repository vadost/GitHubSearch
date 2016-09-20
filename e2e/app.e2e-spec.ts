import { GHCLIPage } from './app.po';

describe('ghcli App', function() {
  let page: GHCLIPage;

  beforeEach(() => {
    page = new GHCLIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
