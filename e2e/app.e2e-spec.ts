import { AngularappfamosoPage } from './app.po';

describe('angularappfamoso App', function() {
  let page: AngularappfamosoPage;

  beforeEach(() => {
    page = new AngularappfamosoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
